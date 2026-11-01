import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname, sep } from 'node:path';
import { projects, site } from '../data.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root,'index.html'),'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
assert.equal(ids.length,new Set(ids).size,'HTML 存在重复 ID');
assert.equal(projects.length,new Set(projects.map(project=>project.id)).size,'案例 ID 必须唯一');
assert.ok(site.email && site.phone && site.wechat,'联系方式必须完整');

let count = 0;
function checkPath(asset) {
  assert.ok(!/^(?:[a-z]+:|\/|\\)/i.test(asset),`必须使用本地相对路径：${asset}`);
  const path = resolve(root,asset.split('?')[0]);
  assert.ok(path.startsWith(root + sep),`资源越出网站目录：${asset}`);
  assert.ok(existsSync(path),`资源不存在：${asset}`);
  count++;
}
for (const match of html.matchAll(/(?:src|href)="(\.\/[^"]+)"/g)) checkPath(match[1]);
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]),`锚点不存在：${match[1]}`);
for (const project of projects) {
  assert.ok(['app','mini','fullstack'].includes(project.category));
  assert.ok(project.title && project.description && project.note);
  assert.equal(project.features.length,3,`${project.id} 需有三项功能说明`);
  assert.equal(project.images.length,project.captions.length,`${project.id} 图片和说明不匹配`);
  if(project.cover) checkPath(project.cover);
  for(const image of project.images) checkPath(image);
  if(project.video) checkPath(project.video);
}
console.log(`静态检查通过：${projects.length} 个案例，${count} 处资源引用，所有页面锚点有效。`);
