# 海南本地开发者

可直接部署到 GitHub Pages 的静态项目展示网站，无框架、无需安装依赖。首页包括十个案例、开发能力、合作流程、常见问题和联系方式。

## 本地预览

在 `home_web` 目录运行：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:4173/`。请通过 HTTP 访问；不要直接双击 HTML，浏览器会限制本地 ES Module。

## 上传到 GitHub Pages

### 方案 A：独立网站仓库（推荐）

1. 新建 GitHub 仓库，例如 `home-web`，把 **home_web 里面的所有内容** 放到仓库根目录，包括隐藏的 `.github` 和 `.nojekyll`。
2. 默认分支为 `main` 或 `master`。若用其他名称，修改 `.github/workflows/pages.yml` 的 `branches`。
3. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 推送代码，或在 **Actions → Deploy portfolio to GitHub Pages → Run workflow** 手动执行。
5. 成功后在 Pages 设置或工作流 deployment 环境中查看网站地址，通常形如 `https://你的用户名.github.io/home-web/`。

### 方案 B：保留在现有仓库的 home_web 子目录

保留 `home_web`，另外把 `home_web/.github/workflows/pages.yml` **复制到仓库根目录的 `.github/workflows/pages.yml`**。GitHub 只识别根目录的工作流；该模板会自动识别 `home_web`。然后按方案 A 的步骤 2～5 设置。

模板只将网站必需的 HTML/CSS/JS 与 assets 发布到 Pages，不将父目录的其他需求文档一起发布。

### 方案 C：无需 Actions 的分支发布

如果 `home_web` 的内容已经放在仓库根目录，也可在 Pages 中选 **Deploy from a branch → main（或实际分支）→ /(root)**。这是纯静态网站，不需要构建。

部署方式依据 [GitHub Pages 官方配置文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) 与 [自定义工作流文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 修改案例与联系方式

- `data.js`：案例标题、介绍、分类、图片、视频、技术标签，以及联系链接与微信复制值。
- `index.html`：首页文案、能力范围、流程和公开联系方式的**显示文字**。修改联系方式时与 `data.js` 同步。
- `styles.css`：颜色、布局、动画与响应式样式；顶部 CSS 变量控制主配色。
- `assets/cases/`：已经压缩的案例图片副本，不依赖原项目路径。

新增案例时参照 `projects` 中的对象，分类使用 `mini`、`app`、`fullstack` 或 `hardware`。首页项目数自动从数据计算。可选 `workflow` 展示业务流程，`features` 支持三至六项具体功能。

## 添加案例视频

星幕 TV 案例已接入 `assets/videos/星幕Launcher.mp4`，打开详情即可播放，也可切换为界面图片。其他案例仍展示带说明的截图；“播放导览”是截图轮播，不是操作录屏。添加实际视频后会优先显示视频。

1. 放入文件，例如 `assets/videos/launcher-demo.mp4`（建议 H.264 + AAC，或浏览器可播放的 WebM）。
2. 在 `data.js` 对应案例设置：

```js
video: 'assets/videos/launcher-demo.mp4',
```

3. 视频自带控制栏，手机内联播放，不自动播放。视频加载失败会回退图片，也可手动切换到截图。页面仅在打开该案例时加载视频元信息。

请压缩视频后上传；大视频可以放在你维护的媒体空间。当前实现使用本地相对路径；若需外部视频地址，需要同步调整 `app.js` 中的视频地址拼接与资源验证规则。

## 内容与素材说明

案例来自用户提供的项目源码，文案以已实现功能为依据，没有虚构客户、上线量或成交数据。服务区列出的是可承接业务方向，交付范围需要按实际需求约定。

| 案例 | 当前展示素材 |
| --- | --- |
| AI 采购报价整理系统 | 本地真实运行截图，含报价工作台、返单比价和成本模拟；示例数据 |
| 青禾收银 | 项目保存的真实商品管理后台截图；演示环境 |
| 浪屿装备租赁 | 微信开发者工具原生模拟器实拍，独立本地演示数据 |
| 智能浇灌 | 单节点接线图、A0 原理图和真实 Android 模拟器界面 |
| 智慧农业 | 启动真实前后端后拍摄的看板、设备台账、事件规则；模拟采样 |
| 星幕 TV | 原创内容的电视网页预览、配置后台、裁除模拟器工具栏的 Android 截图 |
| RetroLaunch | 原生开发界面截图，包含示例游戏资料 |
| 家具调色助手 | 2026-10-21 保存的真实功能截图，早于后续入口布局 |
| 趣伴云起 | 项目品牌分享图，不是运行截图 |
| 天涯美石 | 设计稿与示例藏石素材，不是真机截图或真实运营证明 |

首屏设备和数据卡片为 CSS 创意示意，已在页面上标明，不表示已有运营规模。图片来源详见 `docs/assets.md`。

## 检查与发布打包

使用 Node.js 22 或以上版本，不需要 npm install：

```powershell
node --test
node scripts/verify.mjs
node scripts/package.mjs
```

`_site/` 是静态发布目录，已加入忽略规则。Actions 在干净工作区打包；本地反复打包会覆盖当前文件，若删除过源素材，应先清理旧 `_site` 再打包以免保留旧素材。

目前仅完成本地制作与验证，尚未连接目标 GitHub 仓库或公开发布。
