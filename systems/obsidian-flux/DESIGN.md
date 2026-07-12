---
version: alpha
name: ObsidianFlux-design-system
description: "Obsidian Flux is a dark-tech system for creative AI tools. True black #060608 is held in near-total silence and broken by a single restrained electric violet #7c5cff used only as a point of light, never as a wall of gradient. Geist and Satoshi carry sharp, tight-tracked Latin display while a mono voice numbers the data. The signature is one glowing violet core and a single 1px light edge sweeping a hairline border. Restraint is the whole idea: subtract until only the black, the white, and one violet spark remain."

colors:
  primary: "#7c5cff"
  on-primary: "#050506"
  ink: "#eceaf4"
  canvas: "#060608"
  surface: "#0f0e17"
  muted: "#8b899c"
  hairline: "#232130"
  accent: "#9d84ff"

typography:
  display-xl:
    fontFamily: "Geist, Satoshi, 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif"
    fontSize: 76px
    fontWeight: 600
    lineHeight: 1.01
    letterSpacing: -2.4px
  display-lg:
    fontFamily: "Geist, Satoshi, 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: -1.2px
  heading:
    fontFamily: "Geist, Satoshi, 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.4px
  body:
    fontFamily: "Satoshi, Geist, 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: 0px
  body-mono:
    fontFamily: "'Geist Mono', 'JetBrains Mono', 'SFMono-Regular', ui-monospace, Menlo, monospace"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0px
  eyebrow:
    fontFamily: "'Geist Mono', 'JetBrains Mono', 'SFMono-Regular', ui-monospace, Menlo, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 2.4px
  button:
    fontFamily: "Geist, Satoshi, 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0.2px

rounded:
  none: 0px
  sm: 2px
  md: 6px
  lg: 10px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 120px

components:
  # —— UI 界面组件 ——
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "13px 22px"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "13px 22px"
  chip-accent:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: "1px"
    width: "100%"
  # —— slide 演示组件（16:9 融合 HeiGe-PPT）——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
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
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Obsidian Flux · 黑曜流光

一套给创意型 AI 工具的暗色科技设定集。真黑打底，全屏沉默，只在一个关键点上放一道电紫的光。它的锋利不来自堆料，来自减法：黑够黑、白够白、紫只有一处，克制本身就是设计。

## Overview

Obsidian Flux 的气场建立在**一处光对一整片黑**的对峙上。页面底色是真黑 `#060608`，不是灰蓝也不是深紫，是关掉一切之后的黑。在这片黑里，电紫 `#7c5cff` 只做两件事：**当主行动的填充**，和**当唯一那束发光核心**。它绝不铺满背景，绝不做紫蓝渐变墙。

主色扮演两个角色。作为 **fill**，`#7c5cff` 出现在主按钮和发光核心上，是全页唯一被点亮的东西。作为 **text**，改用更亮的 `#9d84ff`（accent），因为纯 `#7c5cff` 在抬起的卡面上对比只有约 4.4:1，做小字不够安全；亮一档的紫落在真黑上有约 6.9:1，做标签、序号、数据点既发光又读得清。这一层拆分是这套系统的纪律底座。

字体走当代锋利路线：Geist / Satoshi 做拉丁展示，字距收得很紧（display 到 `-2.4px`），大字像被激光切过边。数据和 kicker 交给等宽体，冷静、工程感、tabular。节奏是**大面积黑留白 + 一个高潮点**，不是从头到尾一个密度。

## Colors

### Brand & Accent
- `primary` `#7c5cff` — 电紫，全系统的光源。只做主按钮填充与发光核心，是唯一被点亮的颜色。
- `accent` `#9d84ff` — 亮一档的电紫，专供暗底上的紫色文字（标签 / 巨型序号 / 数据点）。对比更安全（真黑上约 6.9:1）。
- `on-primary` `#050506` — 电紫填充上的近黑文字。紫底配深字（约 4.7:1），比白字更锐利、更工业。

### Surface
- `canvas` `#060608` — 真黑页面底与所有演示页底。系统的沉默层。
- `surface` `#0f0e17` — 卡面，比 canvas 抬起一档，带极微的冷紫倾向而非纯灰。
- `hairline` `#232130` — 1px 分隔线与边框，永远细，永远安静。

### Text
- `ink` `#eceaf4` — 正文与标题。不是纯白，是带一丝冷的近白，落在真黑上约 17:1，长时间读不刺眼。
- `muted` `#8b899c` — 次要文字、脚注、caption。真黑上约 5.9:1，压下去但仍清晰。

### Semantic
这套刻意不设涨绿跌红的语义色。创意 AI 工具的语义压力小，多一个色就破坏"一处光"的纪律。需要强调时，只借 `accent` 那一档紫。**颜色总数收敛到黑、白、灰、两档紫**，节奏靠版式与留白，不靠加色。

## Typography

### Font Family
- 拉丁展示与标题：`Geist, Satoshi, ...`，字距收紧，锋利现代。
- 正文：`Satoshi, Geist, ...`，行高松到 1.62 给黑底喘息。
- 数据与 kicker：`'Geist Mono', 'JetBrains Mono', ...` 等宽，tabular 数字对齐。
- **中文兜底铁律**：每个能承载中文的字体栈末尾都挂 `'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif`。webfont 加载失败也不塌、不缺字。**中文绝不用日文字体（Mochiy / Zen Maru 等）渲染**，简体会缺字变豆腐。这套没有衬线角色；若某处要中文衬线，另接 `'Noto Serif SC', 'Songti SC', serif`，同样不碰日文栈。

### Hierarchy
| Role | Size / Weight | 用途 |
|---|---|---|
| display-xl | 76 / 600, tracking -2.4px | 封面主句、数据页巨型数字 |
| display-lg | 44 / 600, tracking -1.2px | 过渡页序号、金句 |
| heading | 22 / 600 | 卡片标题、导航品牌 |
| body | 16 / 400, lh 1.62 | 正文、脚注区 |
| body-mono | 14 / 500, 等宽 | 数据值、kicker |
| eyebrow | 12 / 500, tracking 2.4px | 全大写 kicker、chip |
| button | 15 / 600 | 按钮 |

### Principles
- 最大字与正文比例拉到近 5:1，`display-xl` 大到"有点过分"才立得住气质。
- display 字距为负（收紧），正文字距为 0，kicker 字距为正（撑开呼吸），三种节奏各司其职。
- 一屏一个字号高潮，其余全部压到 body / mono，不让第二个大字来抢戏。

## Layout

### Spacing
`xs 4 / sm 8 / md 16 / lg 24 / xl 48 / section 120`。暗色系的呼吸尺度偏大：模块间用 `section`（120px）级别的黑留白制造沉默，卡片内部用 `lg`（24px）保持紧致。留白不是均匀撒满，是**在高潮点前后拉开黑场**，让那一束紫光有地方发光。

### Grid & Container
12 列栅格，桌面容器 `max-width` 约 1200px。演示页锁 16:9（1280×720 基准）。栅格线不外露（这是暗色科技不是凶悍工业），但对齐到像素，左对齐优先于居中。

### Whitespace 哲学
黑就是留白。这套的"白"其实是黑：大片 `canvas` 不放任何东西，就是给主角腾出对比。**能删的都删掉，删到只剩黑、一行白字、一个紫点**，就对了。

## Elevation & Depth

| 层级 | 手法 |
|---|---|
| 0 底 | `canvas` 真黑，无阴影 |
| 1 卡面 | `surface` 抬起一档 + 1px `hairline` 边，不用投影 |
| 2 发光核心 | 静态 `box-shadow` 紫光晕（radial 感），常亮不闪 |
| 3 主行动 | 主按钮带紫色 glow shadow，是全页最高点 |

深度靠**颜色抬升 + 一处静态辉光**，不靠层层投影。辉光只用 `box-shadow` / `radial-gradient` 实现，**绝不用 `backdrop-filter`**（滚动持续重绘、卡帧），**绝不动画化阴影**（逐帧重绘极贵）。紫光核心是静止的常亮层，最多让它旁边的 1px 光边做一次性 `transform` 扫过。

## Shapes

| token | 值 | 用途 |
|---|---|---|
| none | 0px | 演示页、导航、脚注（硬边，锋利） |
| sm | 2px | 数据块，几乎直角 |
| md | 6px | 按钮、chip 内框 |
| lg | 10px | 特性卡 |
| pill | 9999px | accent chip |

整体走**小圆角 + 硬边**，锋利感来自克制的直角，不是圆润。图片与图形用直角出血或 1px 紫边框裁切，不做大圆角、不做居中圆角三件套。

## Components

- **button-primary** — 电紫填充 + 近黑字（约 4.7:1）+ 静态紫色 glow。全页唯一被点亮的按钮，一屏最多一个。
- **button-secondary** — 真黑底、白字、1px hairline 边。安静的次要行动，不发光。
- **chip-accent** — pill 形，真黑底 + 亮紫字（约 6.9:1）+ hairline 边，等宽全大写。做状态标签 / kicker。
- **card-feature** — surface 抬起 + 1px hairline，标题 ink 白、正文压 muted。hover 时上边框浮现一道紫光边（见签名时刻）。
- **stat-block** — surface + 近直角，数值走等宽 ink 白，delta / 单位用亮紫点缀。tabular 对齐。
- **nav-bar** — 真黑底、底部 1px hairline、无投影、无 blur。品牌名 ink 白，导航项 muted。
- **footer** — 真黑底、顶部 1px hairline，muted 文字（约 5.9:1），克制收尾。

组件之间靠 `surface` 抬升和 `hairline` 描边区分层级，**不靠圆角阴影三件套**。所有交互态（hover / focus / loading / empty）都以 hairline 变亮或紫光边浮现来表达，不做位移抖动。

## Presentation System

把这套做成 16:9 演示时，遵循 HeiGe-PPT 的**一页一句话 + 黄金三秒 + 视觉锤**。视觉锤只有一个：**那一束电紫核心**。每页都在真黑上排布，主角唯一。

- **封面页（slide-cover）** — 真黑满屏，底部三分之一浮起一枚电紫发光核心（`inset` 紫光晕），一句白色主句压在核心上方，等宽 kicker 在最上。黄金三秒靠"黑场里升起一束紫光"立住。
- **过渡页（slide-section-divider）** — 纯真黑，左侧一个巨型亮紫序号 `01 / 02`（display-lg，accent 紫），右侧一行白色章节名。除此之外全黑，是节奏里的"呼吸"。
- **数据页（slide-stat-hero）** — 真黑底，居中或左置一个 `display-xl` 巨型白色数字，单位与说明用亮紫小字点亮关键位，其余留黑。一页只讲一个数。
- **金句页（slide-quote）** — 整屏一句白话（display-lg），左侧一道 8px 高的紫色短光条起手，四周全黑。占屏一句话，说完即止。
- **收尾页（slide-closing）** — 真黑底，一行白色行动号召 + 一个发光的 button-primary，是全场唯一被点亮的按钮。余味留在那束紫光上。

节奏编排：封面（起）→ 数据 / 内容（张）→ 过渡（弛）→ 金句（高潮）→ 收尾（收）。强模块后面永远跟一页近乎全黑的过渡页当呼吸。

## Signature Moment

换个模板绝对做不出来的两个签名时刻，写死在这里。

**UI 签名 · 光核 + 光边扫过（Aperture Core & Light-edge Sweep）**
全页只有一处紫光核心，藏在主行动（button-primary / hero CTA）背后，是常亮的静态 radial 紫光晕。当指针移到 feature 卡或主按钮上，卡片上边框那条 1px hairline 上，一段亮紫的**光段从左扫到右一次**（只动被遮罩的 1px 高光的 `transform`，阴影本身不动、不逐帧重绘），像一道激光扫过刀刃。全页光核唯一、光边一次性，这份克制就是签名。

**Deck 签名 · 黑场里的紫色破晓（Void Horizon）**
封面是一整片真黑 16:9，唯一的光是下三分之一升起的一枚电紫核心，像黑夜里的合成日出。核心正上方一条 1px 亮紫水平光线横贯画面当"地平线"，一句白话压在光线之上，其余全部是黑的虚空。没有第二个元素、没有装饰、没有渐变墙，一束紫光对一整片黑，三秒立住。

## Do's and Don'ts

### Do
- 全页 / 全场只留**一处**电紫发光点，其余交给真黑与近白。
- 紫色做小字时用亮一档的 `accent` `#9d84ff`，保住对比与发光感。
- 大字狠狠拉大、字距收紧，让 display 像被激光切边。
- 用大片黑留白制造呼吸，把高潮放在节奏最高点。
- 辉光用静态 `box-shadow` / `radial-gradient`，常亮不闪。
- 中文字体栈末尾必挂 `Noto Sans SC / PingFang SC` 系统兜底。

### Don't
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及其全家桶）。电紫只做点光源，绝不铺成整屏渐变背景，这是这套最容易被带偏、也最必须守住的红线。
- **不做居中卡片三件套**（一行标题 + 一行灰副标 + 三个等宽圆角卡整页重复）。
- **中文不用日文字体**（Mochiy / Zen Maru 等）渲染，简体会缺字变豆腐。
- **不动画化阴影 / text-shadow**（逐帧重绘卡帧），发光只用静态 shadow。
- 不用 `backdrop-filter` 做玻璃感，用半透明纯色替代。
- 不把电紫当填充色到处刷，一多就俗、就散、就失去那一处光的份量。

## Responsive Behavior

| 断点 | 策略 |
|---|---|
| ≥1200px | 12 列，section 120px 黑留白，光核在下三分之一 |
| 768–1199px | 8 列，display-xl 用 `clamp()` 收敛，紫光核心缩小上移 |
| ≤767px | 单列重排，非缩放 |

移动端是**重新编排的另一段叙事**，不是桌面端缩一缩。手绘断点下：display 用 `clamp()` 按最窄屏（≤390px）收字号，手动断行的标题每行加 `white-space:nowrap` 锁整行，**杜绝孤字**（单字或标点甩到独立一行）；中文限宽用 `em` / `px` 不用 `ch`。紫光核心在手机上缩为一枚小光点仍居于视觉焦点，光边扫过在触屏改为点击触发的一次性动画，且全部可被 `prefers-reduced-motion: reduce` 关掉。

## Anti-Slop Pledge

抹掉品牌名，这套仍一眼看得出是用心做的：真黑不是灰蓝、紫只有一处不是满屏渐变、大字被激光切过边、黑留白是有节奏的呼吸而不是空。它靠减法和一束光立住气质，不是流水线拼出来的通用暗色模板。

---

*HeiGe-Design · MIT · slug `obsidian-flux` · 黑曜流光*
