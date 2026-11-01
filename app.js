import { projects, site } from './data.js';
import { filterProjects, selectMedia, contactLinks } from './core.mjs';

const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const grid = $('#project-grid');
const dialog = $('#project-dialog');
let lastTrigger;
let tourTimer;
let toastTimer;
let currentGalleryCleanup;

function illustration(id) {
  if (id === 'retro') return '<div class="case-illustration"><div class="art-game"><h4>RETRO / LAUNCH</h4><small>YOUR GAMES. YOUR WORLD.</small><div class="game-systems"><div>✚<small>CLASSIC</small></div><div>◈<small>ADVENTURE</small></div><div>◎<small>ARCADE</small></div></div></div></div>';
  if (id === 'football') return '<div class="case-illustration"><div class="art-form-phone"><span>趣伴云起</span><h4>一起，出发吧。</h4><div class="mini-event"><b>⚽</b>周末一起踢场球<br>报名 · 分组 · 拼车</div><div class="fake-button">参与活动 ↗</div></div><div class="art-ticket">这个周末，不见不散<b>LET’S PLAY ↗</b></div></div>';
  if (id === 'stone') return '<div class="case-illustration"><div class="art-stone"></div><span class="stone-title">天涯美石</span><span class="stone-sub">一方美石 · 一份热爱</span></div>';
  return '<div class="case-illustration"><div class="art-monitor"><div class="art-monitor-bar"><i></i><i></i><i></i></div><div class="art-dashboard"><div class="art-sidebar">▦<span>◷</span><span>▤</span></div><div class="art-dash-main"><h4>你的业务，井然有序。</h4><p>CONNECTED WORKSPACE</p><div class="art-metrics"><span>128<small>连接终端</small></span><span>24<small>内容配置</small></span><span>↗<small>状态概览</small></span></div><div class="art-list"><i></i><i></i><i></i></div></div></div></div><div class="art-mini-phone"><h4>我的工作台</h4><div class="app-tiles"><i></i><i></i><i></i><i></i></div></div></div>';
}

function coverMarkup(project) {
  if (project.coverMode === 'phones' && project.images?.length > 1) {
    return `<div class="art-phones">${project.images.slice(0,2).map((src,index)=>`<img src="./${escapeHTML(src)}" alt="${escapeHTML(project.captions[index])}" loading="lazy" width="360" height="780">`).join('')}</div>`;
  }
  return project.cover ? `<img src="./${escapeHTML(project.cover)}" alt="${escapeHTML(project.captions?.[0] || project.title)}" loading="lazy" width="960" height="600">` : illustration(project.id);
}

function renderProjects(category = 'all') {
  const visible = filterProjects(projects, category);
  grid.innerHTML = visible.map((project,index) => `<article class="project-card${category === 'all' && index < 4 ? ' featured' : ''}"><button type="button" data-project="${escapeHTML(project.id)}" aria-label="查看${escapeHTML(project.title)}案例详情"><div class="project-art ${escapeHTML(project.id)}">${coverMarkup(project)}<span class="art-category">${escapeHTML(project.categoryLabel)}</span><span class="art-badge"><span class="play-icon" aria-hidden="true">${project.video ? '▶' : '↗'}</span>${project.video ? '播放演示' : '查看案例'}</span></div><div class="project-title-row"><h3>${escapeHTML(project.title)}</h3><span class="project-arrow" aria-hidden="true">↗</span></div><p>${escapeHTML(project.subtitle)}</p><div class="project-tech">${project.tech.map(tag=>`<span>${escapeHTML(tag)}</span>`).join('')}</div></button></article>`).join('');
  grid.querySelectorAll('img').forEach(img => img.addEventListener('error', () => {
    const art = img.closest('.project-art');
    if (art) {
      const id = art.closest('[data-project]').dataset.project;
      art.querySelectorAll('img,.art-phones').forEach(node=>node.remove());
      if (!art.querySelector('.case-illustration')) art.insertAdjacentHTML('afterbegin', illustration(id));
    }
  }, {once:true}));
}

function showToast(message) {
  const toast = $('.toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = setTimeout(()=>toast.classList.remove('visible'), 3600);
}

function stopTour() { clearInterval(tourTimer); tourTimer = undefined; }

function mountGallery(project, target) {
  stopTour();
  currentGalleryCleanup?.();
  if (!project.images?.length) {
    target.innerHTML = illustration(project.id);
    return;
  }
  let index = 0;
  const multiple = project.images.length > 1;
  const mediaNote = multiple ? '截图导览 · 可手动切换或播放，非操作录屏' : '项目展示素材 · 说明见下方';
  target.innerHTML = `<div class="gallery-container"><div class="gallery-image"><img alt=""></div><div class="gallery-controls">${multiple ? '<button type="button" class="gallery-prev" aria-label="上一张截图">←</button>' : ''}<span class="gallery-caption"></span>${multiple ? '<button type="button" class="gallery-next" aria-label="下一张截图">→</button><button type="button" class="tour-toggle" aria-pressed="false">▶ 播放导览</button>' : ''}</div><p class="media-note"><span class="media-status">${mediaNote}</span> · <a class="gallery-original" target="_blank" rel="noopener">查看原图 ↗</a></p></div>`;
  const image = target.querySelector('.gallery-image img');
  const toggle = target.querySelector('.tour-toggle');
  const draw = () => {
    image.src = `./${project.images[index]}`;
    image.alt = project.captions?.[index] || project.title;
    target.querySelector('.gallery-original').href = `./${project.images[index]}`;
    target.querySelector('.gallery-caption').textContent = `${index + 1} / ${project.images.length} · ${project.captions?.[index] || project.title}`;
  };
  const pause = () => {
    stopTour();
    if (toggle) { toggle.textContent = '▶ 播放导览'; toggle.setAttribute('aria-pressed', 'false'); }
  };
  const change = delta => { index = (index + delta + project.images.length) % project.images.length; draw(); };
  if (multiple) {
    target.querySelector('.gallery-prev').addEventListener('click',()=>{ pause(); change(-1); });
    target.querySelector('.gallery-next').addEventListener('click',()=>{ pause(); change(1); });
    toggle.addEventListener('click',()=>{
      if (tourTimer) return pause();
      tourTimer = setInterval(()=>change(1), 3500);
      toggle.textContent = 'Ⅱ 暂停导览';
      toggle.setAttribute('aria-pressed', 'true');
    });
  }
  const onVisibility = () => { if (document.hidden) pause(); };
  document.addEventListener('visibilitychange', onVisibility);
  currentGalleryCleanup = () => document.removeEventListener('visibilitychange', onVisibility);
  image.addEventListener('error',()=>{ pause(); image.hidden = true; target.querySelector('.media-status').textContent = '这张图片暂时无法加载，请切换其他图片。'; });
  image.addEventListener('load',()=>{ image.hidden = false; target.querySelector('.media-status').textContent = mediaNote; });
  draw();
}

function mountMedia(project) {
  const target = $('.dialog-hero');
  const media = selectMedia(project);
  if (media.type !== 'video') return mountGallery(project, target);
  target.innerHTML = `<div class="video-container"><video controls playsinline preload="metadata"${project.cover ? ` poster="./${escapeHTML(project.cover)}"` : ''}><source src="./${escapeHTML(media.src)}"><p>此浏览器暂不支持视频播放。</p></video><p class="video-fallback">项目演示视频${project.images?.length ? ' · <button type="button">查看界面图片 ↗</button>' : ''}</p></div>`;
  const fallback = () => mountGallery(project, target);
  target.querySelector('button')?.addEventListener('click', fallback);
  const onError = () => { fallback(); showToast('视频暂时无法加载，已切换为项目界面。'); };
  target.querySelector('video').addEventListener('error',onError,{once:true});
  target.querySelector('source').addEventListener('error',onError,{once:true});
}

function workflowMarkup(project) {
  if (!project.workflow?.length) return '';
  return '<div class="dialog-workflow"><h3>业务流程</h3><ol>'+project.workflow.map(step=>'<li>'+escapeHTML(step)+'</li>').join('')+'</ol></div>';
}

function openProject(id, trigger) {
  const project = projects.find(item=>item.id === id);
  if (!project) return;
  lastTrigger = trigger;
  $('#dialog-content').innerHTML = `<div class="dialog-hero ${escapeHTML(id)}"></div><div class="dialog-body"><p class="dialog-eyebrow">PROJECT / ${escapeHTML(project.categoryLabel)}</p><h2 id="dialog-title">${escapeHTML(project.title)}</h2><p class="dialog-intro">${escapeHTML(project.description)}</p><div class="dialog-meta">${project.tech.map(tag=>`<span>${escapeHTML(tag)}</span>`).join('')}</div>${workflowMarkup(project)}<div class="dialog-features">${project.features.map((feature,index)=>`<article><span>0${index+1}</span><h3>${escapeHTML(feature.title)}</h3><p>${escapeHTML(feature.text)}</p></article>`).join('')}</div><p class="dialog-note">${escapeHTML(project.note)}</p><div class="dialog-footer"><span>想做类似的产品？从你的业务场景聊起。</span><a class="button button-dark dialog-contact" href="#contact">聊聊我的项目 <span aria-hidden="true">↗</span></a></div></div>`;
  mountMedia(project);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
  $('.dialog-close').focus({preventScroll:true});
}

function closeDialog() { if (dialog.open) dialog.close(); }
dialog.addEventListener('close',()=>{
  stopTour();
  currentGalleryCleanup?.();
  currentGalleryCleanup = undefined;
  dialog.querySelector('video')?.pause();
  $('#dialog-content').innerHTML = '';
  document.body.classList.remove('modal-open');
  if (lastTrigger?.isConnected) lastTrigger.focus({preventScroll:true});
});
$('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', event=>{
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
  }
  if (event.target.closest('.dialog-contact')) {
    lastTrigger = $('#contact-title');
    lastTrigger.setAttribute('tabindex','-1');
    closeDialog();
  }
});
grid.addEventListener('click',event=>{
  const trigger = event.target.closest('[data-project]');
  if (trigger) openProject(trigger.dataset.project, trigger);
});
$('.filters').addEventListener('click',event=>{
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  document.querySelectorAll('[data-filter]').forEach(item=>{
    const selected = item === button;
    item.classList.toggle('active',selected);
    item.setAttribute('aria-pressed',String(selected));
  });
  renderProjects(button.dataset.filter);
});

const navigation = $('#navigation');
const menu = $('.menu-toggle');
function setMenu(open) {
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label',open ? '关闭导航' : '打开导航');
  navigation.classList.toggle('open',open);
}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click',event=>{ if (event.target.closest('a')) setMenu(false); });
document.addEventListener('click',event=>{ if (!event.target.closest('.site-header')) setMenu(false); });
document.addEventListener('keydown',event=>{ if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { setMenu(false); menu.focus(); } });
window.matchMedia('(min-width: 641px)').addEventListener('change',event=>{ if(event.matches) setMenu(false); });

const links = contactLinks(site);
document.querySelectorAll('a[href^="mailto:"]').forEach(anchor=>anchor.href = links.email);
document.querySelectorAll('a[href^="tel:"]').forEach(anchor=>anchor.href = links.phone);
$('[data-copy-wechat]').addEventListener('click',async()=>{
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(site.wechat);
    showToast(`微信号已复制：${site.wechat}`);
  } catch {
    window.prompt('请复制微信号，然后在微信中搜索添加：',site.wechat);
  }
});
$('#year').textContent = new Date().getFullYear();
$('[data-project-count]').textContent = String(projects.length).padStart(2,'0');
renderProjects();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{ if(entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  },{threshold:.07});
  document.querySelectorAll('.section-heading,.service-grid article,.process-list li,.faq').forEach(element=>{
    element.classList.add('reveal-ready'); observer.observe(element);
  });
}
