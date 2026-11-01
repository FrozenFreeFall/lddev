import { cpSync, mkdirSync, copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, '_site');
mkdirSync(output,{recursive:true});
for (const name of ['index.html','styles.css','app.js','core.mjs','data.js','.nojekyll']) {
  copyFileSync(resolve(root,name),resolve(output,name));
}
cpSync(resolve(root,'assets'),resolve(output,'assets'),{recursive:true});
console.log(`静态发布文件已生成：${output}`);
