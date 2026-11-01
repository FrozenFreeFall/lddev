// 网站公开内容在这里维护。video 留空时展示截图。
export const site = {
  "name": "海南本地开发者",
  "email": "356752238@qq.com",
  "phone": "13278916767",
  "wechat": "hailong78916767"
};

export const projects = [
  {
    "id": "launcher",
    "category": "fullstack",
    "categoryLabel": "后台 + Web + Android",
    "title": "星幕 TV · 多端桌面系统",
    "subtitle": "在浏览器里编排，在电视上呈现。",
    "description": "面向智能电视和 Android 机顶盒，将后台服务、Web 配置与 Android 桌面连接起来。通过网页编排频道、栏目与轮播，发布后由终端拉取配置、渲染和缓存。",
    "tech": [
      "Node.js",
      "Web 配置",
      "Kotlin / Compose"
    ],
    "cover": "assets/cases/launcher-preview.jpg",
    "coverMode": "single",
    "images": [
      "assets/cases/launcher-android-series.jpg",
      "assets/cases/launcher-android.jpg",
      "assets/cases/launcher-android-grid.jpg",
      "assets/cases/launcher-web-editor.jpg",
      "assets/cases/launcher-web-banner.jpg",
      "assets/cases/launcher-web-theme.jpg",
      "assets/cases/launcher-web-versions.jpg",
      "assets/cases/launcher-preview.jpg",
      "assets/cases/launcher-web-movies.jpg",
      "assets/cases/launcher-web-series.jpg"
    ],
    "captions": [
      "Android 客户端 · 电视剧频道与海报分组布局",
      "Android 客户端 · 应用首页与本机应用入口",
      "Android 客户端 · 六列应用网格与多行滚动",
      "Web 配置前端 · 频道编排、实时预览与海报属性",
      "Web 配置前端 · Banner 内容、自动轮播与时间间隔",
      "Web 配置前端 · 背景、文字与焦点主题色",
      "Web 配置前端 · 发布版本与恢复草稿",
      "电视网页预览 · 原创演示内容",
      "电视网页预览 · 电影频道的轮播与竖版片单",
      "电视网页预览 · 电视剧频道的分组与大卡布局"
    ],
    "video": "assets/videos/星幕Launcher.mp4",
    "features": [
      {
        "title": "可视化配置",
        "text": "品牌主题、频道排序、海报编排和轮播设置，在网页中完成并预览。"
      },
      {
        "title": "发布与版本管理",
        "text": "草稿、配置校验、版本发布及历史恢复，串起内容更新流程。"
      },
      {
        "title": "Android 大屏体验",
        "text": "Compose 桌面、遥控焦点、本机应用启动、配置刷新和离线缓存。"
      }
    ],
    "note": "图片分别标注 Android 模拟器、Web 配置前端与电视网页预览；影视条目和数据用于功能演示。案例展示桌面、应用启动和配置分发链路，未接入正式影视内容播放。",
    "imageGroups": [
      {
        "label": "Android 客户端",
        "start": 0,
        "count": 3
      },
      {
        "label": "Web 配置前端",
        "start": 3,
        "count": 4
      },
      {
        "label": "电视网页预览",
        "start": 7,
        "count": 3
      }
    ],
    "coverCaption": "电视网页预览 · 原创演示内容"
  },
  {
    "id": "procurement",
    "category": "fullstack",
    "categoryLabel": "Web 前端 + Python 服务端",
    "title": "AI 采购报价整理系统",
    "subtitle": "把分散的报价，整理成有据可查的采购决策。",
    "description": "面向采购与销售团队的报价工作台，将表格和文档中的报价整理为结构化明细，经人工核验后归档。前端负责导入预览、历史检索、返单比价和成本模拟，Python 服务端完成文件解析、校验、计算与 SQLite 存储，并提供可选的大模型兼容接口。",
    "tech": [
      "Python / SQLite",
      "Web 工作台",
      "可选 AI 接口"
    ],
    "cover": "assets/cases/procurement-dashboard.jpg",
    "coverMode": "single",
    "images": [
      "assets/cases/procurement-dashboard.jpg",
      "assets/cases/procurement-compare.jpg",
      "assets/cases/procurement-costs.jpg"
    ],
    "captions": [
      "真实运行工作台 · 54 条演示报价明细",
      "返单比价 · 导入示例文件后的实际分析结果",
      "成本模拟 · 折扣、税费与到货单位成本对比"
    ],
    "video": "",
    "workflow": [
      "导入报价",
      "解析核验",
      "历史比价",
      "成本测算",
      "确认归档"
    ],
    "features": [
      {
        "title": "多格式导入与核验",
        "text": "解析 CSV、XLSX 多工作表、TXT 和 DOCX，映射中英文表头；预览中修改数量、单价、税率及业务条款，检查缺失和异常。"
      },
      {
        "title": "返单价格分析",
        "text": "按客户或供应商隔离历史，结合 SKU、规格、币种、单位和税口径匹配，显示涨跌幅、历史区间与新增或待复核产品。"
      },
      {
        "title": "到货成本模拟",
        "text": "同时比较多个方案的折扣、税额、运费和单位成本；同币种排序并计算节省金额，不自动假设汇率。"
      },
      {
        "title": "可追溯报价知识库",
        "text": "按关键词、业务方、日期和币种筛选，保留报价编号与来源文件，支持明细去重、事务归档与 CSV 导出。"
      },
      {
        "title": "本地检索与可选 AI",
        "text": "离线助手检索历史并引用明细；配置兼容模型后可辅助文本提取和回答，解析结果仍可人工复核。"
      },
      {
        "title": "前后端完整协作",
        "text": "原生 Web 界面连接 Python HTTP API，由服务端统一处理导入、查询、计算与数据持久化，便于按业务继续扩展。"
      }
    ],
    "note": "截图为本地真实运行界面，使用项目演示数据。本次未调用付费模型；AI 接口为可选能力。当前为单机工作台，未接入多用户审批、ERP 或自动收件。"
  },
  {
    "id": "cashier",
    "category": "fullstack",
    "categoryLabel": "React 前端 + Spring Boot 服务端",
    "title": "青禾收银 · 门店交易管理",
    "subtitle": "商品、库存、订单与现金，围绕一笔交易协同。",
    "description": "面向零售门店的收银与经营管理系统，由 React 管理后台和 Kotlin / Spring Boot 服务端组成，配套 Android 收银端。围绕商品建档、库存进出、交易结算、退款退货、会员营销与交班盘点组织日常工作，金额和交易规则由服务端统一处理。",
    "tech": [
      "React / TypeScript",
      "Kotlin / Spring Boot",
      "PostgreSQL / H2"
    ],
    "cover": "assets/cases/cashier-products.jpg",
    "coverMode": "single",
    "images": [
      "assets/cases/cashier-products.jpg"
    ],
    "captions": [
      "真实管理后台 · 商品、条码、会员价与可售库存 · 演示环境"
    ],
    "video": "",
    "workflow": [
      "商品建档",
      "库存入库",
      "报价结算",
      "退款与验收",
      "交班盘点"
    ],
    "features": [
      {
        "title": "商品与库存台账",
        "text": "维护分类、商品编码、条码、零售价和会员价；支持 CSV 预检导入、入库及库存成本流水。"
      },
      {
        "title": "服务端统一结算",
        "text": "集中计算订单报价、优惠和金额分摊，保存成交快照；金额使用整数分处理，覆盖退款尾差。"
      },
      {
        "title": "交易查单与幂等",
        "text": "支持现金记账和模拟支付、订单查询及未知结果恢复，使用幂等写入避免重复提交产生重复交易。"
      },
      {
        "title": "退款与实物回库",
        "text": "支持部分或整单退款，将资金退款和退货验收分开记录，验收后再处理实物库存。"
      },
      {
        "title": "会员、营销与交班",
        "text": "管理会员档案、营销活动、班次和现金盘点，结合员工权限、经营报表与审计记录追溯操作。"
      },
      {
        "title": "管理端与收银端",
        "text": "响应式 Web 后台提供门店管理入口，服务端承载业务规则，Android 端配套本地数据与收银操作。"
      }
    ],
    "note": "截图为项目保存的真实后台演示界面。当前为单商户、单门店 P0；真实支付、刷脸、电子秤和打印硬件尚未接通，Android 端仍需真机验收。"
  },
  {
    "id": "agriculture",
    "category": "hardware",
    "categoryLabel": "智慧农业 · 设备接入 + Web + 服务端",
    "title": "智慧农业 · 苗圃守望",
    "subtitle": "看见环境变化，也记录每一次人工跟进。",
    "description": "面向苗圃、设施种植等单站点场景的环境监测系统，串联设备上报、服务端校验、历史存储、阈值事件、人工确认与维护记录。Web 看板集中展示空气温湿度、土壤体积含水率和液位；边缘端提供持久缓存与断网补传参考。",
    "tech": [
      "FastAPI / SQLite",
      "Web 监测看板",
      "Python 边缘采集"
    ],
    "cover": "assets/cases/agriculture-overview.jpg",
    "coverMode": "single",
    "images": [
      "assets/cases/agriculture-overview.jpg",
      "assets/cases/agriculture-devices.jpg",
      "assets/cases/agriculture-events.jpg"
    ],
    "captions": [
      "真实运行看板 · 温湿度、土壤含水率与液位 · 模拟采样",
      "真实运行界面 · 设备台账、物理探头与配置状态",
      "真实运行界面 · 阈值规则、责任人及人工确认"
    ],
    "video": "",
    "workflow": [
      "设备采样",
      "校验与入库",
      "曲线与状态",
      "事件提醒",
      "人工确认与维护"
    ],
    "features": [
      {
        "title": "多指标监测看板",
        "text": "展示最新有效值和历史曲线，分别标识过期、缺测与待核验数据；设备心跳在线不等同于采样有效。"
      },
      {
        "title": "设备、测点与探头台账",
        "text": "登记设备位置、测点指标、探头序列号和安装信息，保留更换履历，按历史探头回查采样。"
      },
      {
        "title": "数据质量与追溯",
        "text": "保留采样、上传、接收时间，校验单位、异常跳变与时间；支持批次幂等和人工质量核验，保留原始标志。"
      },
      {
        "title": "规则与人工处置",
        "text": "为阈值规则设置责任人、现场动作和冷却期，保存异常及过期事件，由操作员确认接手并留痕。"
      },
      {
        "title": "边缘缓存与配置签收",
        "text": "SQLite 持久缓存支持断网补传；配置下发和设备成功签收分别记录，避免把待签收状态显示为已生效。"
      },
      {
        "title": "维护与软件交付",
        "text": "管理清洗、校准、维修和人工升级记录，提供 FastAPI 接口、独立设备凭证及 Web 管理界面。"
      }
    ],
    "note": "已启动真实前后端并截图，所有读数均为明确标记的模拟样本。当前交付为软件 MVP 与设备接入参考，真实传感器驱动、土质标定和现场安装待选型验收；系统不自动控制浇灌、通风或施肥。"
  },
  {
    "id": "rental",
    "category": "mini",
    "categoryLabel": "微信小程序 · 装备租赁",
    "title": "浪屿装备租赁",
    "subtitle": "从借出到归还，让装备、时间和押金都有记录。",
    "description": "面向冲浪、桨板与骑行门店的原生微信小程序运营原型，围绕装备借还、时段预订、计费押金和清洗维修串起门店流程。14 个页面共用本地业务接口层，在同一份演示数据上联动设备状态、租单、占用日历和日结记录。",
    "tech": [
      "原生微信小程序",
      "WXML / WXSS / JavaScript",
      "本地业务层"
    ],
    "cover": "assets/cases/rental-02.jpg",
    "coverMode": "phones",
    "images": [
      "assets/cases/rental-02.jpg",
      "assets/cases/rental-03.jpg",
      "assets/cases/rental-01.jpg",
      "assets/cases/rental-04.jpg"
    ],
    "captions": [
      "微信原生模拟器实拍 · 装备详情、费率与当前租单",
      "微信原生模拟器实拍 · 预订日历与时间轴占用",
      "微信原生模拟器实拍 · 装备检索与可租状态",
      "微信原生模拟器实拍 · 线下押金收退台账"
    ],
    "video": "",
    "workflow": [
      "查找装备",
      "预订与借出",
      "计费押金",
      "归还检查",
      "清洗维修"
    ],
    "features": [
      {
        "title": "装备检索与借还",
        "text": "按装备编号检索，提供扫码入口，查看可租、借出、清洗和维修状态，并关联当前租单。"
      },
      {
        "title": "预订占用与冲突拦截",
        "text": "日历和时间轴展示租单、预订与清洗缓冲占用，提交前校验时段冲突，减少重复安排。"
      },
      {
        "title": "统一计费与费率快照",
        "text": "借出、归还共用费用计算，支持宽限、时段取整与日封顶；租单保存当时的费率。"
      },
      {
        "title": "押金收退与日结",
        "text": "登记线下押金收取、退款余额及处理状态，拦截重复处理中退款，结合现金盘点留存日结记录。"
      },
      {
        "title": "归还检查与维修闭环",
        "text": "记录损伤与责任、清洗和维修任务，验收后恢复可租；支持逾期联系记录与遗失处理。"
      }
    ],
    "note": "已在微信开发者工具运行并拍摄，截图使用独立的本地演示数据。当前 P0 采用本地存储，未接正式后端、真实登录、支付或消息通知。"
  },
  {
    "id": "irrigation",
    "category": "hardware",
    "categoryLabel": "智能硬件 · 手机 + 固件 + MQTT",
    "title": "智能浇灌 · 远程阀控",
    "subtitle": "手机下达指令，节点执行限时浇水并回传状态。",
    "description": "围绕分散安装的水阀构建远程浇灌控制参考工程，包含 Android 控制端、ESP8266 / ESP32 固件、MQTT 服务配置和硬件接线资料。手机通过网络管理多个节点，控制板在本地执行本次浇水的截止计时，构成指令、回执和状态反馈链路。",
    "tech": [
      "ESP8266 / ESP32",
      "C++ / Android Java",
      "MQTT / TLS"
    ],
    "cover": "assets/cases/irrigation-wiring.jpg",
    "coverMode": "single",
    "images": [
      "assets/cases/irrigation-wiring.jpg",
      "assets/cases/irrigation-app.jpg",
      "assets/cases/irrigation-controls.jpg",
      "assets/cases/irrigation-schematic.jpg"
    ],
    "captions": [
      "项目实现图 · 单节点电源、ESP8266 与阀门驱动接线",
      "Android 实际模拟器界面 · TLS 连接与节点在线状态",
      "Android 实际模拟器界面 · 限时控制、关阀与操作记录",
      "定制控制板 A0 原理图 · 工程评审与打样设计阶段"
    ],
    "video": "",
    "workflow": [
      "手机设置时长",
      "MQTT 发送指令",
      "节点执行",
      "本地截止关阀",
      "回执与状态同步"
    ],
    "features": [
      {
        "title": "多节点远程管理",
        "text": "手机添加、删除和重命名节点，查看在线状态；支持单阀开关、本节点全关和全部已配置节点关阀。"
      },
      {
        "title": "控制板本地计时",
        "text": "每次开阀带时长，截止计时在 ESP 节点本地运行；手机退出后仍按控制逻辑执行到时关闭。"
      },
      {
        "title": "回执与失联处理",
        "text": "区分已发送指令和设备执行回执；固件提供上电默认关闭、检测失联后关闭、重复指令和过期指令拦截。"
      },
      {
        "title": "硬件与固件配套",
        "text": "提供 12V 常闭阀、降压、电源保护与 MOSFET 驱动接线图，配套 ESP 固件，以及定制板原理图、BOM 和网络资料。"
      },
      {
        "title": "接入服务与模拟联调",
        "text": "Mosquitto TLS、独立节点账号与权限隔离，配套节点模拟器，验证手机、服务与设备协议链路。"
      }
    ],
    "note": "展示为项目接线/原理图和真实 Android 模拟器界面。软件与协议已做开发联调；实物水阀、现场水路及控制板仍需验收。当前实现远程手动限时控制，未包含土壤湿度闭环或日历定时。"
  },
  {
    "id": "retro",
    "category": "app",
    "categoryLabel": "Android APP",
    "title": "RetroLaunch · 游戏启动器",
    "subtitle": "让掌机里的游戏，拥有自己的主场。",
    "description": "为 Android 掌机打造的本地游戏库与启动入口。将散落的游戏文件整理为可浏览的资料库，结合元数据、搜索筛选与手柄操作，把选择游戏到交接模拟器的流程衔接起来。",
    "tech": [
      "Kotlin",
      "Jetpack Compose",
      "本地游戏库"
    ],
    "cover": "assets/cases/retro-01.jpg",
    "coverMode": "single",
    "images": [
      "assets/cases/retro-01.jpg",
      "assets/cases/retro-02.jpg"
    ],
    "captions": [
      "游戏库界面 · 开发版演示数据",
      "筛选界面 · 开发版演示数据"
    ],
    "video": "",
    "features": [
      {
        "title": "本地游戏整理",
        "text": "扫描游戏目录、解析元数据，将文件转成可以浏览的游戏库。"
      },
      {
        "title": "掌机操作体验",
        "text": "围绕手柄焦点、搜索与筛选设计导航，适合横屏设备。"
      },
      {
        "title": "外部模拟器交接",
        "text": "支持配置模拟器与启动参数，将游戏交给对应的外部应用。"
      }
    ],
    "note": "截图为开发版真实界面，游戏资料为示例数据；用于说明本地媒体库与启动器开发能力，不提供游戏文件或模拟器下载。"
  },
  {
    "id": "furni",
    "category": "app",
    "categoryLabel": "Android APP",
    "title": "家具调色助手",
    "subtitle": "把调色经验，变成随手可用的工具。",
    "description": "面向家具饰面、皮革与金属修复场景的 Android 辅助工具，将照片取色、材料方案、试调参考与干透复拍整合到移动端，让专业工作中的颜色处理更方便。",
    "tech": [
      "Kotlin / Compose",
      "CameraX",
      "行业工具"
    ],
    "cover": "assets/cases/furni-01.jpg",
    "coverMode": "phones",
    "images": [
      "assets/cases/furni-01.jpg",
      "assets/cases/furni-02.jpg",
      "assets/cases/furni-03.jpg"
    ],
    "captions": [
      "照片精细点取色 · 功能界面实拍",
      "材料配方与逐步加色 · 功能界面实拍",
      "目标色微调 · 功能界面实拍"
    ],
    "video": "",
    "features": [
      {
        "title": "照片取色辅助",
        "text": "拍摄或导入照片，支持点取色、区域圈选及灰卡白平衡辅助。"
      },
      {
        "title": "材料与试调参考",
        "text": "管理本地材料方案，生成按份数表达的屏幕试调参考与加色顺序。"
      },
      {
        "title": "复拍色差比较",
        "text": "通过照片比较目标色和复拍色，提示色差与偏色方向。"
      }
    ],
    "note": "截图为已保存的开发版实机界面，可能与后续版本入口布局不同。配色结果用于辅助参考，最终颜色需结合材料与实际打样确认。"
  },
  {
    "id": "football",
    "category": "mini",
    "categoryLabel": "微信小程序",
    "title": "趣伴云起 · 活动组织",
    "subtitle": "从报名到同行，少一点群里的反复统计。",
    "description": "面向运动、户外与朋友聚会的活动组织小程序，串联创建活动、报名候补、分组拼车、费用整理和活动记录，让组织者把时间留给活动本身。",
    "tech": [
      "原生微信小程序",
      "云函数",
      "云数据库"
    ],
    "cover": "assets/cases/football-cover.jpg",
    "coverMode": "single",
    "images": [
      "assets/cases/football-cover.jpg"
    ],
    "captions": [
      "趣伴云起 · 项目品牌分享图（非运行截图）"
    ],
    "video": "",
    "features": [
      {
        "title": "报名候补",
        "text": "满员候补、退出递补与代报名，减少手工维护名单。"
      },
      {
        "title": "分组与拼车",
        "text": "支持自选或随机分组，管理车位和搭车安排。"
      },
      {
        "title": "费用整理",
        "text": "费用凭证、AA 汇总和付款登记，采用线下收款与人工核账。"
      }
    ],
    "note": "案例图为项目品牌分享图，不是运行截图。所述功能依据开发代码整理；不表示已正式发布，未宣称接入微信支付。"
  },
  {
    "id": "stone",
    "category": "mini",
    "categoryLabel": "微信小程序",
    "title": "天涯美石 · 赏石交流",
    "subtitle": "连接藏石、石友与地域协会。",
    "description": "围绕藏石展示、地域协会与石友交流构建的原生微信社区，包含个人藏石、图片动态、公开留言、会员申请和多角色审核，让兴趣社区有内容，也有秩序。",
    "tech": [
      "原生微信小程序",
      "Node.js",
      "SQLite / CloudBase"
    ],
    "cover": "assets/cases/stone-design.jpg",
    "coverMode": "single",
    "images": [
      "assets/cases/stone-design.jpg",
      "assets/cases/stone-photo.jpg"
    ],
    "captions": [
      "界面设计示意 · 内容均为演示示例",
      "藏石示例素材 · 非真实运营藏品证明"
    ],
    "video": "",
    "features": [
      {
        "title": "藏石与图片社区",
        "text": "个人藏石展示、图片动态、公开留言与内容关联。"
      },
      {
        "title": "协会会员流程",
        "text": "会员材料申请、关系展示与协会藏石授权，围绕角色分配权限。"
      },
      {
        "title": "内容审核链路",
        "text": "普通用户、协会管理员和平台管理员协作处理审核、举报和申诉。"
      }
    ],
    "note": "展示为设计稿及示例素材，非真机运行截图。代码包含社区、多角色审核与云端适配；未宣称完成正式发布或已有真实运营用户。"
  }
];
