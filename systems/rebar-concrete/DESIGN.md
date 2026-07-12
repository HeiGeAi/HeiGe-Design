---
version: alpha
name: Rebar-design-system
description: Rebar is an industrial construction-tech design system built on the order aesthetics of a work site. A poured concrete-gray field carries asphalt-black structural blocks, and one load-bearing caution orange is spent only where load actually transfers. Compressed stencil display type stamps giant component numbers while monospace annotations read like blueprint callouts. Sections are welded together by full-bleed 45-degree hazard-stripe dividers over a naked load-bearing grid. Hard offset shadows, zero blur, zero glow, sharp corners throughout. It looks engineered to carry weight, because it is. Signed HeiGe-Design.

colors:
  primary: "#ff5b1f"
  on-primary: "#17181a"
  ink: "#17181a"
  canvas: "#b8b5ad"
  surface: "#d9d6cd"
  muted: "#3c3e41"
  hairline: "#6a6862"

typography:
  display-xl:
    fontFamily: "\"Anton\", \"Archivo Black\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 96px
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: -1px
  display-lg:
    fontFamily: "\"Anton\", \"Archivo Black\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 56px
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: -0.5px
  heading:
    fontFamily: "\"Archivo\", \"Archivo Narrow\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.2px
  body:
    fontFamily: "\"Archivo\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-mono:
    fontFamily: "\"IBM Plex Mono\", \"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", monospace"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  eyebrow:
    fontFamily: "\"IBM Plex Mono\", \"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", monospace"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 2px
  button:
    fontFamily: "\"Archivo\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 1px
  caption:
    fontFamily: "\"IBM Plex Mono\", \"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.3px

rounded:
  none: 0px
  sm: 2px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  nav-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  tag-caution:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  status-load:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  card-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  divider-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
    width: 100%
  card-structural:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  caption-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Rebar · 钢筋

An industrial design system that behaves like a job site under a permit. Everything on screen is either **poured**（承重底面）、**cast**（结构块）、**stamped**（钢印编号）或 **flagged**（警示）。没有第五种角色，也不需要。署名 HeiGe-Design。

---

## Overview

钢筋的气质是「施工现场的秩序美学」，警示与承重两件事定义全部视觉。

底面是一整片浇筑好的混凝土灰 `#b8b5ad`，不是白，也不是黑，是养护到第七天、还带着模板纹的那种灰。所有承重构件是沥青黑 `#17181a` 的实心块，压在混凝土上，边缘是硬的，阴影是硬的。整套系统只花一种彩色，警示橙 `#ff5b1f`，它不是装饰，是荷载信号，只出现在真正需要转移注意力和承担点击的地方：主按钮、警示斜条纹、巨型编号、收尾牌。

**主色的两个角色**：`#ff5b1f` 对内是「荷载」（load-bearing），凡是它落下的地方就是这一屏的受力点；对外是「警示」（caution），它天生带工地色温，看见就知道这里要小心、要动手。混凝土灰和沥青黑负责秩序，橙色负责事故现场那一下。

**字体签名**：压缩体 stencil display（Anton）把编号和大标题当钢印去砸，字面窄、字重满、字号大到有点过分；等宽体（IBM Plex Mono）当施工标注，尺寸、荷载、编号一律用它写，像图纸边上的引线注释。

**整体节奏**：不靠颜色分层，靠尺寸、间距和一条条承重网格线分层。强块（黑底橙字巨型编号）之后必须留一段素混凝土呼吸，然后再来一条 45° 警示斜条纹带把下一段焊上去。密、疏、砸、再密。

---

## Colors

只养三种材料色加两级中性，别的都是浪费。

### Brand & Load（承重 / 警示）
| Token | Hex | 角色 |
|---|---|---|
| `primary` | `#ff5b1f` | 警示橙。系统唯一彩色，等于荷载信号。主按钮、警示斜条纹、巨型编号、收尾牌，只落在受力点。 |
| `on-primary` | `#17181a` | 橙面上的文字。用沥青黑，对比 5.73:1。**橙底绝不放白字**（白配 3.1:1 不合格，也不够工地）。 |

### Structure（结构面）
| Token | Hex | 角色 |
|---|---|---|
| `canvas` | `#b8b5ad` | 混凝土灰底面。整页浇筑层，一切构件压在它上面。 |
| `surface` | `#d9d6cd` | 预制形板面。卡片和输入框是从底面抬起来的浅色浇筑板，左缘咬一道橙色承重边。 |
| `ink` | `#17181a` | 沥青黑。正文、承重实心块、导航钢梁、页脚基座。不用纯黑，留一点沥青的暖。 |

### Text（文字层级）
| Token | Hex | 角色 |
|---|---|---|
| `ink` | `#17181a` | 一级正文与标题，压在混凝土上 8.68:1，压在形板上 12.2:1。 |
| `muted` | `#3c3e41` | 二级文字与标注，锈化钢灰。压混凝土 5.24:1、压形板 7.38:1，两处都过 AA。 |

### Line（分隔）
| Token | Hex | 角色 |
|---|---|---|
| `hairline` | `#6a6862` | 承重网格线与形板缝。1px 钢筋缝，负责画出「结构」，从不做文字。 |

语义说明：这套没有涨绿跌红那一组。**橙色一色承担全部语义**，它同时是主行动、是警告、是当前受力点。一色多义，逼系统克制，也逼每一处橙都必须有理由。

---

## Typography

### Font Family
- **Display / 编号**：`Anton`，压缩到极致的 stencil 体，字面窄、天生重，专门砸巨型编号和大标题；断网兜底 `Archivo Black`。
- **Heading / Body**：`Archivo`，工业感 grotesque，字重齐、结构方，承担小标题与正文。
- **Mono / 标注**：`IBM Plex Mono`，工程等宽体，写尺寸、荷载、构件号、图纸引线。

**中文铁律**：三条字体栈末尾一律接 `"Noto Sans SC", "PingFang SC", "Microsoft YaHei"`（无衬线）。Anton、Archivo、IBM Plex Mono 都只画拉丁与数字，中文自动落到思源黑体或苹方，重量对齐，不塌豆腐。**中文绝不用日文字体（Mochiy / Zen Maru 一律禁），简体会缺字变方块。** 巨型编号用阿拉伯数字（01 / 02 / 03），正好走 Anton，天然是这套的主角。

### Hierarchy
| Role | Size / Weight / Leading / Tracking | 用途 |
|---|---|---|
| `display-xl` | 96 / 800 / 0.9 / -1px | 巨型钢印编号、封面主标、数据英雄数字。大到出血甩出边框。 |
| `display-lg` | 56 / 800 / 0.95 / -0.5px | 过渡页章节号、金句、收尾行动句。 |
| `heading` | 28 / 700 / 1.15 / -0.2px | 卡片标题、模块小标。 |
| `body` | 17 / 400 / 1.6 / 0px | 正文。混凝土上也读得清。 |
| `body-mono` | 15 / 500 / 1.5 / 0px | 施工标注、数据表、尺寸引线。 |
| `eyebrow` | 13 / 600 / 1.2 / 2px | 钢印 kicker，全大写宽字距，像喷在墙上的段号。 |
| `button` | 16 / 700 / 1 / 1px | 按钮文字，全大写。 |
| `caption` | 13 / 400 / 1.4 / 0.3px | 页脚、状态条、脚注。 |

最大字 96 对正文 17 是 5.6:1，远超 1:4 底线。**层级用尺寸拉开，不用颜色。**

### Principles
- 大标题手动断行，按最长那行收字号，每行 `white-space:nowrap` 锁住，字号 `clamp()` 保证最窄屏也不出孤字。
- 中文限宽用 `em` 或 `px`，绝不用 `ch`（`ch` 按拉丁 0 算宽，中文会提前折行甩孤字）。
- 编号、荷载、尺寸一律走等宽，`tabular` 对齐，数字上下对得像图纸。

---

## Layout

### Spacing
4 / 8 / 16 / 24 / 40 / 80 的硬阶梯（`xs → section`）。模块内用 `md`，卡内 `lg`，段与段之间用 `xl`，整段落幕用 `section`。间距不是留白装饰，是构件之间的**受力间隙**，多一分晃、少一分挤。

### Grid & Container
- 桌面 12 列，列缝用 `hairline` 画出来，**网格是裸露的**，不藏。这是承重网格，看得见才叫结构。
- 最大容器 1200px，内容左对齐咬住网格，不做无脑居中。
- 巨型编号可以突破容器边界向左出血，像刷在承重墙外沿的构件号。

### Whitespace
留白全是混凝土色 `#b8b5ad`，它本身有材质，所以「空」也不空。呼吸段只留素混凝土，一个字不放，让下一条警示带砸下来时有落差。

---

## Elevation & Depth

这套的深度靠**硬**，不靠柔。

| 层级 | 手法 |
|---|---|
| 底面 | 混凝土 `canvas`，无阴影，就是地。 |
| 形板卡 | `surface` 抬起，硬 offset 阴影 `6px 6px 0 #17181a`，不模糊。左缘 6px `primary` 承重边。 |
| 结构块 | `ink` 实心块，平贴不悬浮，靠色重压住场，自成一层。 |
| 警示层 | `primary` 斜条纹带，永远在最上，谁都压不住它。 |

**铁律**：阴影只用硬 offset（`Npx Npx 0`），永远不模糊、不发光、不动画化。暗块不用 `backdrop-filter`，不用毛玻璃。要「重」，靠色和硬边，不靠虚化。

---

## Shapes

- **圆角**：`none` 0px 是默认，按钮、卡片、导航、结构块全是直角。`sm` 2px 只给贴纸小标（钢印微收一下角）。`pill` 只给状态点和荷载指示条。
- **45° 警示斜条纹**：橙黑等宽斜条纹带，是这套的母题。用 `repeating-linear-gradient(45deg, #ff5b1f 0 24px, #17181a 24px 48px)` 铺满分隔带，纯 CSS，零图片。
- **承重网格线**：`hairline` 1px 直线，横竖成格，露在版面上。
- **图片处理**：一律硬裁矩形，直角，双色调（沥青黑 + 混凝土灰 duotone），压高对比。**照片绝不做圆角、绝不做柔化描边。**
- **巨型编号当图形**：01 / 02 / 03 用 Anton 放到 200px 以上，橙色或黑色，出血、被斜条纹「冲压」，本身就是版面骨架。

---

## Components

**UI 组件**
- `nav-bar`：沥青黑钢梁横贯顶部，`eyebrow` 段号 + 链接全大写，直角，左右 `xl` 大边距。
- `button-primary`：警示橙实心块，黑字全大写，直角，硬 offset 阴影。**这是唯一的橙按钮，一屏一个受力点。**
- `button-secondary`：沥青黑实心块，浅形板色字，直角。次要动作压成结构块。
- `tag-caution`：橙底黑字钢印小标，`sm` 微收角，段号 / 状态标签用它。
- `status-load`：橙底黑字 `pill`，唯一的圆，标「承载中 / 高负荷」这类系统状态。
- `card-panel`：形板卡，浅色抬起，左缘 6px 橙承重边，`heading` 标题，硬 offset 阴影。
- `card-structural`：沥青黑结构块，浅字，平贴，装重内容与巨型编号。
- `stat-block`：黑底巨型橙数字（`display-xl`），下压等宽 `caption` 单位标注，数据的英雄位。
- `caption-meta`：形板上的等宽标注（锈钢灰 `muted`），写尺寸 / 荷载 / 引线注释。
- `divider-rule`：`hairline` 钢筋缝 1px 直线，画承重网格与形板分缝，只画结构不放字。
- `input-field`：形板底 + `sm` 微角，聚焦时边框换橙、加硬 offset。
- `footer`：沥青黑基座，等宽 `caption`，版权与构件铭牌。

**Slide 演示组件**（16:9，见下一节）
- `slide-cover`：混凝土封面 + 巨型标题 + 顶部警示带。
- `slide-section-divider`：黑底过渡页 + 巨型橙章节号。
- `slide-stat-hero`：黑底数据页 + 出血巨型橙数字。
- `slide-quote`：混凝土金句页 + 一句占屏。
- `slide-closing`：满屏警示橙收尾牌。

---

## Presentation System

钢筋做 16:9 演示，对齐 HeiGe-PPT 的「一页一句话、黄金三秒、视觉锤」。视觉锤是**警示斜条纹带 + 巨型钢印编号**，从头贯到尾。

- **封面 `slide-cover`**：混凝土满底，顶部一条 45° 橙黑警示带压边，主标 `display-xl` 左对齐咬网格，右下角等寸构件铭牌（项目号 / 日期 / 版本，走等宽）。黄金三秒立的是「工地感」，截图就知道要动土。
- **过渡页 `slide-section-divider`**：整屏沥青黑，一个巨型橙章节号 `01` 出血甩到左侧占满高度，右侧一行 `eyebrow` 段名。一页只干一件事，报出下一段。
- **数据页 `slide-stat-hero`**：黑底，一个巨型橙数字顶天立地（`display-xl`，可放到 240px），下面一行等寸单位与说明。一页一个数，数就是视觉锤。
- **金句页 `slide-quote`**：混凝土底，一句话占屏（`display-lg`），左对齐，句末一段橙色短横做承重标记。**一页一句话**的样板。
- **收尾页 `slide-closing`**：满屏警示橙，黑色 stencil 行动句压在承重基线上，上下边缘黑橙斜条纹警戒带收口。像立在工地出口的一块警示牌，看完就动手。

节奏建议：混凝土封面（疏）→ 黑底编号（砸）→ 混凝土内容（呼吸）→ 黑底数据（砸）→ 橙色收尾（引爆）。张弛全靠底色黑白橙的交替。

---

## Signature Moment

**UI 签名时刻 · 载荷钢印分隔带（Load-Stamp Divider）**
每两个 section 之间不是一条普通分割线，是一条满幅 45° 橙黑警示斜条纹带，巨型 Anton 编号被「冲压」进条纹里（编号用混凝土色镂空穿过橙黑纹路），且编号出血甩到最左，一半露在容器外，像工地刷在承重墙上的构件号。这条带子同时干三件事：焊接上下两段、报出段号、把警示色温灌进整页节奏。换一套模板，做不出这条「会承重、会报号、会警示」三合一的分隔带。

**Deck 签名时刻 · 危险区收尾牌（Hazard-Zone Closing）**
收尾页整屏铺满警示橙，黑色 stencil 行动句居左压在页面承重基线上，页面上下边缘各一条黑橙 45° 斜条纹警戒带把整屏「围」起来，像把最后一句话立成一块工地出口的警示牌。橙底 + 黑 stencil + 双警戒带的组合，只有这套敢用满屏橙收尾，别的模板到这儿一定退回白底黑字。

---

## Do's and Don'ts

**Do**
- 一屏一个橙。橙是荷载信号，落下即受力，多一处就泄一次力。
- 编号砸大、出血、走等宽数字，让它当版面骨架。
- 网格线露出来，承重结构看得见才成立。
- 阴影只用硬 offset（`6px 6px 0`），边永远是硬的。
- 黑白橙交替制造张弛，强块后留素混凝土呼吸。

**Don't**
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及全家桶），这套只认混凝土 / 沥青 / 警示橙。
- **不做居中卡片三件套**（一标题 + 一灰副标 + 三等宽圆角卡整页重复），钢筋左对齐咬网格。
- **中文绝不用日文字体**（Mochiy / Zen Maru 等）渲染，简体缺字变豆腐，中文只走思源黑体 / 苹方兜底。
- **不动画化阴影 / 发光**，硬 offset 常亮不闪；不用 `backdrop-filter` 毛玻璃。
- 橙面不放白字（对比不足，也不够工地），橙上文字一律沥青黑。
- 照片不做圆角、不做柔边，直角硬裁双色调。

---

## Responsive Behavior

移动端是重新编排的另一段施工方案，不是把桌面端缩一缩。

| 断点 | 布局 |
|---|---|
| ≥ 1200px | 12 列裸露网格，巨型编号出血甩左，斜条纹带满幅。 |
| 768 – 1199px | 8 列，编号出血收窄，卡片双列。 |
| ≤ 767px | 单列。承重网格收成单轴，卡片竖排堆叠。 |

折叠策略：
- 巨型编号在窄屏不缩到看不见，改成顶部横向「钢印条」，编号 + 段名一行走等宽，仍旧砸。
- 45° 警示斜条纹带在窄屏变成顶端一条横向警戒条，母题不丢。
- 等宽标注从图片旁的引线，改到构件下方成注脚，保持图纸感。
- 巨型标题 `clamp()` 收字号，最长行 `nowrap` 锁死，≤390px 无孤字、无横向溢出。
- 所有动效可被 `prefers-reduced-motion: reduce` 全部关掉。

---

## Anti-Slop Pledge

把 Rebar 这个名字抹掉，这套仍一眼看得出是有人拿工地的秩序去焊出来的：混凝土底、沥青黑承重块、一色警示橙的克制、被斜条纹冲压的巨型钢印编号、硬到没有一丝虚化的边。它不是流水线随手生成的模板，是按承重逻辑排出来的结构。签名 HeiGe-Design。
