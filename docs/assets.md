# 案例素材来源

所有输出均为源项目素材或用户提供截图的副本，源项目未修改；JPEG 素材已按展示需要压缩。下列源路径相对于用户提供的对应项目根目录，不作为网页运行依赖。

| 网站文件 | 源项目 / 源文件 | 展示说明 |
| --- | --- | --- |
| launcher-preview.jpg | Launcher_System / docs/verification/banner-fixed.jpg | 真实电视网页预览，原创演示内容 |
| launcher-editor.jpg | Launcher_System / docs/verification/config-editor.jpg | Web 配置页面，缩至宽 900 |
| launcher-android.jpg | Launcher_System / docs/verification/my-apps.png | Android 模拟器，裁去顶部 39px 工具栏 |
| retro-01.jpg | RetroLaunch / docs/ui/library-implemented-20261028.png | 已实现游戏库，示例资料 |
| retro-02.jpg | RetroLaunch / docs/ui/library-filter-implemented-20261028.png | 已实现筛选面板 |
| furni-01.jpg | FurniColor-Assistant / doc/img/微信图片_20261021131042_149_81.jpg | 照片点取色 |
| furni-02.jpg | FurniColor-Assistant / doc/img/微信图片_20261021131046_154_81.jpg | 配方与加色参考 |
| furni-03.jpg | FurniColor-Assistant / doc/img/微信图片_20261021131048_156_81.jpg | 目标色微调 |
| football-cover.jpg | football-signup-miniprogram / miniprogram/assets/home-share.jpg | 品牌分享图，非运行截图 |
| football-home.png | 用户提供 / 1.png | 活动首页，展示发起入口与我的活动列表；保留 PNG 原图 |
| football-detail.png | 用户提供 / 2.png | 活动详情，展示时间地点、报名名单与分享入口；保留 PNG 原图 |
| football-create.png | 用户提供 / 3.png | 发起活动，展示活动信息、历史选项与类型填写；保留 PNG 原图 |
| property-overview.png | 用户提供 / 第 1 张截图 | 智慧物业服务总览，演示环境截图；保留 PNG 原图 |
| property-bills.png | 用户提供 / 第 2 张截图 | 物业缴费账单，演示环境截图；保留 PNG 原图 |
| property-home.png | 用户提供 / 第 3 张截图 | 小程序首页，演示环境截图；保留 PNG 原图 |
| property-payment.png | 用户提供 / 第 4 张截图 | 小程序缴费页面，演示环境截图；保留 PNG 原图 |
| property-services.png | 用户提供 / 第 5 张截图 | 小程序社区服务，演示环境截图；保留 PNG 原图 |
| property-profile.png | 用户提供 / 第 6 张截图 | 小程序个人中心，演示环境截图；保留 PNG 原图 |
| stone-design.jpg | tian_ya_shi_tou / 1.png | 原设计稿，保留演示示例说明 |
| stone-photo.jpg | tian_ya_shi_tou / web_home/assets/product-stone-demo.jpg | 示例藏石照片 |

星幕 TV 的网络影视素材和包含 QA 账号的截图未纳入。小游戏目录中的视觉参考图、FurniColor/RetroLaunch 的未落地概念稿未标为实际界面。没有把赏石项目中指向其他小程序的占位码放入网站。

网页不分发游戏文件、模拟器或源项目的私有配置。首版视频字段为空，后续已接入用户提供的星幕 Launcher 录屏。


## 新增的五个案例（2026-11-01）

新增十五张压缩 JPG，均为本地素材，无远程图片依赖。

| 输出 | 来源与说明 |
| --- | --- |
| procurement-dashboard / procurement-compare / procurement-costs | 启动 AI-Powered-Procurement-Quotation-Consolidation-System 的 Python 服务，使用独立 SQLite 演示库；浏览器实拍工作台、导入示例文件后的返单分析、成本方案结果。AI 未配置，未调用付费模型。 |
| cashier-products | qinghe-cashier/docs/微信图片_20261015230200_54_1248.png，已有真实商品管理界面；裁除右侧悬浮工具边缘，缩宽至 2000。 |
| rental-01 / 02 / 03 / 04 | equipment-rental 的独立副本在微信开发者工具实际运行，使用官方工具 simulator_screenshot，拍摄列表、详情、预订日历与押金台账；独立本地演示数据。 |
| irrigation-wiring | intelligent-irrigation-system/hardware/single-node.png，已有单阀模块接线实现图。 |
| irrigation-app / irrigation-controls | intelligent-irrigation-system/android/preview.png 与 preview-controls.png，真实 Android 模拟器截图；裁去顶部系统栏与底部模拟器导航栏。 |
| irrigation-schematic | intelligent-irrigation-system/hardware/production/IIS-HW-001-A0-preview-1.png，A0 电源/驱动原理图，明确为工程评审资料。 |
| agriculture-overview / agriculture-devices / agriculture-events | smart_agriculture/nursery-watch 的真实 FastAPI 服务与 Web 前端；使用独立 SQLite 库和明确标记的模拟采样，拍摄监测看板、台账和事件规则。 |

所有源工程保持不变。运行截图与电路图仅表示相应开发实现和设计资料，未把模拟采样、未接入的支付或未验收的实物当成正式运营成果。

## 星幕 TV 图库扩充（2026-11-01）

图库现为 10 张：Android 3 张、Web 配置 4 张、电视网页预览 3 张，保留原有录屏。Android 频道及网格分别来自 docs/verification/android-fhd.png（裁去顶端工具栏区域）和 my-apps-grid.png（裁去39px宿主栏）；应用首页沿用 launcher-android.jpg。四张 Web 配置图是在独立 DATA_DIR、仅监听本机的服务中补拍，涵盖页面编排、Banner、全局样式与发布记录。电影/电视剧的电视网页预览来自 channel-movies.jpg、channel-series.jpg，明确标注为 Web 预览，影视海报为功能演示条目。没有把外部 Jetnews 应用或移动 Web 账号页标成星幕 Android 界面。源工程及实际业务数据未修改。

## 趣伴云起截图更新（2026-11-02）

使用用户提供的 1.png、2.png、3.png 原图，按活动首页、活动详情、发起活动排列。首页案例卡片使用首页与详情双图，详情支持三张截图切换、播放导览及查看原图。原品牌分享图保留为历史素材，当前案例展示已改为这三张截图。

## 邻里云 · 智慧物业服务新增案例（2026-11-02）

使用用户提供的六张 PNG 原图，展示微信小程序与 Web 管理后台，案例分类为 `mini`。业务包括物业费、停车费、水费线上缴费，资金直接进入物业账户，以及公告、报修、社区活动、家政、邻里圈子、二手置换、房屋租售。截图来自演示环境，仅用于说明界面与业务功能，不作为真实支付、资金到账或正式运营的证明。
