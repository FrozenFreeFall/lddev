import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, selectMedia, contactLinks } from '../core.mjs';

test('分类只返回所属项目，全部保留顺序，未知分类为空', () => {
  const projects = [{id:'a', category:'mini'}, {id:'b', category:'app'}, {id:'c', category:'fullstack'}];
  assert.deepEqual(filterProjects(projects, 'all'), projects);
  assert.deepEqual(filterProjects(projects, 'app').map(x=>x.id), ['b']);
  assert.deepEqual(filterProjects(projects, 'unknown'), []);
});

test('只有配置了视频才选择视频，否则回退截图或示意', () => {
  assert.deepEqual(selectMedia({video:'assets/videos/demo.mp4', images:['a.webp']}), {type:'video', src:'assets/videos/demo.mp4'});
  assert.deepEqual(selectMedia({images:['a.webp']}), {type:'gallery', images:['a.webp']});
  assert.deepEqual(selectMedia({}), {type:'illustration'});
});

test('联系方式生成可直接使用的邮箱和电话链接', () => {
  assert.deepEqual(contactLinks({email:'356752238@qq.com', phone:'13278916767'}), {
    email:'mailto:356752238@qq.com', phone:'tel:13278916767'
  });
});
