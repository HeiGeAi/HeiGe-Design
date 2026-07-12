---
version: alpha
name: forge-anvil-design-system
description: An aggressively industrial, high-contrast dark system for devtools and infrastructure. Iron-black canvas, one acid-green electric voltage, concrete-gray structure. Archivo Black manifesto headlines over JetBrains Mono data, hard non-blurred offset shadows, and exposed machine-bed grid rulers. Built to boot cold and hit hard.

colors:
  primary: "#c8ff00"      # acid green — the electric "power on" voltage, used with restraint
  on-primary: "#0c0d0e"   # iron black text stamped on acid surfaces
  ink: "#f5f6f3"          # near-white contrast text (not pure #fff), 17.9:1 on canvas
  canvas: "#0c0d0e"       # iron black — the cold machine bed, page floor
  surface: "#17191b"      # lifted black — panels and cards, one notch off the bed
  muted: "#9a9d9f"        # concrete gray — secondary text and mono labels, 7.1:1 on canvas
  hairline: "#313437"     # exposed grid line / 2px machine border
  molten: "#ff5a1f"       # forge heat — extreme-restraint status accent (live / running hot)

typography:
  display-xl:
    fontFamily: '"Archivo Black", "Space Grotesk", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "84px"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-2.4px"
  display-lg:
    fontFamily: '"Space Grotesk", "Archivo", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "52px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-1.2px"
  data-hero:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "72px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-2px"
  heading:
    fontFamily: '"Space Grotesk", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.5px"
  body:
    fontFamily: '"Space Grotesk", "Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "0px"
  mono:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0px"
  kicker:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "2px"
  button:
    fontFamily: '"Space Grotesk", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "0.6px"
  caption:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.4px"

rounded:
  none: 0px
  sm: 2px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px

components:
  # —— UI 界面组件 ——
  # 硬 offset 阴影与 2px 边框是本套签名，属方法论层，见 body ## Elevation & Depth；
  # front matter 只保留 lint 认可的 token 子键，保证 0 error。
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.none}", padding: "16px 32px" }
  button-secondary: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.none}", padding: "16px 32px" }
  nav-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.none}", padding: "20px 32px" }
  eyebrow-tag: { backgroundColor: "{colors.surface}", textColor: "{colors.primary}", typography: "{typography.kicker}", rounded: "{rounded.sm}", padding: "6px 12px" }
  card-spec: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.heading}", rounded: "{rounded.none}", padding: "32px" }
  spec-body: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.none}", padding: "0 32px 32px 32px" }
  stat-block: { backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.data-hero}", rounded: "{rounded.none}", padding: "24px 0" }
  status-live: { backgroundColor: "{colors.surface}", textColor: "{colors.molten}", typography: "{typography.mono}", rounded: "{rounded.pill}", padding: "6px 14px" }
  rule-line: { backgroundColor: "{colors.hairline}", height: "2px", width: "100%" }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.muted}", typography: "{typography.caption}", rounded: "{rounded.none}", padding: "48px 32px" }
  # —— slide 演示组件（16:9 融合 HeiGe-PPT）——
  slide-cover: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "80px" }
  slide-section-divider: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "80px" }
  slide-stat-hero: { backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.data-hero}", rounded: "{rounded.none}", padding: "80px" }
  slide-quote: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "96px 80px" }
  slide-closing: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "80px" }
---

# 熔炉 · COLDFORGE

> Brutalist industrial design system for devtools, infrastructure, open source, hard tech.
> Family 01 · slug `forge-anvil` · HeiGe-Design 原创虚构品牌，署名 HeiGe-Design，MIT。

一台冷启动的重型机床。铁黑机床床身上只有一个东西会发光：那道酸绿电压。所有东西都是硬边、直角、承重的，没有一处圆滑讨好。它不解释自己，它宣言。

## Overview

熔炉是给开发者工具写的宣言体。它的气质来自三样东西的对立：**铁黑的冷、酸绿的电、混凝土灰的重**。

主色 `#c8ff00` 酸绿电光有两个角色。它是**电压**，界面里唯一会亮的东西，出现即代表"通电 / 运行 / 可点"；它也是**印章**，砸在黑色按钮背后的一道硬 offset 就是这套的签名。辅助的 `molten #ff5a1f` 熔炉橙是第三个角色，极度克制，只在"正在锻造 / 跑热了"的实时状态里出现一点，是整屏唯一一个暖像素。

字体签名是一次冲撞：**Archivo Black 超粗黑体的宣言** 撞上 **JetBrains Mono 等宽的机器读数**。标题不是排版，是浇铸；数据不是文字，是仪表。

整体节奏靠**极端对比 + 裸露网格**，不靠堆颜色。一屏一句狠话，四周是像机床工作台一样刻着坐标的网格标尺。留白不是优雅，是给那句狠话腾出撞击空间。

## Colors

克制到只有一个亮色。黑白灰是骨架，酸绿是电，熔炉橙是余温。

### Brand & Accent
| Token | Hex | 角色 |
|---|---|---|
| `primary` | `#c8ff00` | 酸绿电压。按钮、活动态、巨型数字、印章 offset。全页最亮，出现即"通电"。 |
| `molten` | `#ff5a1f` | 熔炉橙。极端克制，只标"实时 / 运行 / 跑热"，全屏唯一暖像素。 |

### Surface
| Token | Hex | 角色 |
|---|---|---|
| `canvas` | `#0c0d0e` | 铁黑床身，页面底。不是纯黑，是冷灰黑。 |
| `surface` | `#17191b` | 抬起一档的黑，卡片与面板。靠这一档差 + 硬黑 offset 拉出层级。 |
| `hairline` | `#313437` | 裸露网格线、2px 机床边框。全套的"结构线"都是它。 |

### Text
| Token | Hex | 对比度 |
|---|---|---|
| `ink` | `#f5f6f3` | 近白正文，17.9:1 on canvas。不用纯白，减一点刺眼保留工业冷。 |
| `muted` | `#9a9d9f` | 混凝土灰次要文字与 mono 标注，7.1:1 on canvas。 |
| `on-primary` | `#0c0d0e` | 酸绿面上的黑字，16.5:1，狠对比。 |

### Semantic
熔炉不做花哨语义色。运行态 = `molten` 橙，其余状态用 `primary` 酸绿（可点 / 通过）与 `muted` 灰（禁用 / 静默）表达。全部对比度自检 ≥ 4.5:1（AA）：`molten` on surface 5.65:1，`primary` on surface 14.9:1。

## Typography

一次浇铸撞一次读数。

### Font Family
- **展示体（浇铸）**：`Archivo Black` 打头，`Space Grotesk` 700 兜底，用于宣言级大标题。
- **正文 / 小标题**：`Space Grotesk`，几何无衬线，有工业棱角不圆滑。
- **数据 / kicker / 代码（读数）**：`JetBrains Mono`，所有数字、状态、坐标标签、命令行式 kicker 全走等宽。

**中文铁律**：每条能承载中文的字体栈末尾都压了系统兜底 `"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`。Archivo Black 不含中文，中文大标题会优雅回落到 Noto Sans SC 900，依然够黑够重。**中文绝不用日文字体渲染**（Mochiy / Zen Maru 一律禁用，简体会缺字变豆腐）。断网时拉丁展示体回落到 Helvetica Neue，不塌成 Times。

### Hierarchy
| Role | Font | Size / Weight | 用途 |
|---|---|---|---|
| `display-xl` | Archivo Black | 84px / 900 · ls -2.4px | 占屏宣言、封面、金句页 |
| `display-lg` | Space Grotesk | 52px / 700 | 章节标题、过渡页词、收尾页 |
| `data-hero` | JetBrains Mono | 72px / 700 | 巨型数字、指标、章节号 |
| `heading` | Space Grotesk | 30px / 700 | 卡片标题、区块小标 |
| `body` | Space Grotesk | 17px / 400 · lh 1.62 | 正文段落 |
| `mono` | JetBrains Mono | 14px / 500 | 导航、状态、内联数据、代码 |
| `kicker` | JetBrains Mono | 13px / 600 · ls 2px | `[ SYSTEM ONLINE ]` 式眉标 |
| `button` | Space Grotesk | 15px / 700 · ls 0.6px | 按钮标签，偏大写 |
| `caption` | JetBrains Mono | 12px / 400 | 页脚、坐标、注脚 |

### Principles
- 最大字与正文比 ≈ 5:1（84px vs 17px），最大那个字大到"有点过分"才对味。
- 标题字距收紧（负 letter-spacing），行高压到 0.96，让宣言像一块整铸的铁。
- kicker 与所有数据统一走等宽，字距 +2px，制造"仪表读数"感。
- 左对齐 / 网格对齐是默认，绝不无脑居中；力量来自对齐纪律。

## Layout

### Spacing
8pt 基准的机械刻度：`xs 4 / sm 8 / md 16 / lg 24 / xl 48 / section 96`。组件内部收紧（16–32px），区块之间放到 `section 96px`，让强模块后面有一大口呼吸。

### Grid & Container
12 列，gutter 24px，最大容器 1200px。**网格是被看见的**：列线、基线以 `hairline #313437` 裸露在背景上，边缘刻着 mono 坐标（`X01 X02 … / 00 · 01 · 02`），像机床工作台的量尺。内容对齐到这套线，一格不差。

### Whitespace
留白是撞击的助跑距离，不是均匀撒的糖。宣言的四周留到过分，卡片内部收到紧绷。张弛就是这么来的：一屏狠话 + 大留白，接一屏密排的 mono 规格表。

## Elevation & Depth

熔炉没有柔和阴影，只有**硬 offset**。

| 层级 | 手法 |
|---|---|
| 床身 canvas | 无阴影，纯铁黑底 + 裸露网格 |
| 抬起 surface | `6px 6px 0 #000000` 硬黑 offset（不模糊）+ 2px `hairline` 边框 |
| 通电元素 | 黑按钮背后 `6px 6px 0 {primary}` 硬酸绿 offset —— 签名"电压印章" |
| 按下态 | offset 归零 `0 0 0`，元素向右下"咔"地压实，机械感，无缓动软化 |

**装饰性深度铁律**：offset 阴影一律硬边零模糊；不用 `backdrop-filter`（滚动持续重绘）；不动画化 `box-shadow`（逐帧重绘极贵）。发光就静态常亮。深色系的层级靠"surface 抬一档 + 硬黑 offset + 边框"三件套，不靠毛玻璃。

## Shapes

- **直角是信仰**。`rounded.none = 0px` 是默认，按钮、卡片、面板、slide 一律硬角。
- `rounded.sm = 2px` 只给 eyebrow 眉标一点点收边，几乎察觉不到。
- `rounded.pill = 9999px` 全套仅用在一处：`status-live` 的胶囊状态灯，圆形是为了和满页直角形成一个刻意的异类。
- 图片按矩形硬裁，2px `hairline` 边框框住，右下压一道硬黑 offset。绝不有机 blob、绝不羽化边缘。

## Components

- **button-primary**：酸绿实心 + 黑字 + 硬黑 offset。全页唯一"最亮可点"，一屏最多一个。
- **button-secondary**：黑底 + 近白字 + 2px 酸绿边 + **硬酸绿 offset** `6px 6px 0 {primary}`。签名"电压印章"，黑块背后透出一道酸绿硬影。
- **nav-bar**：铁黑条 + mono 导航项 + 底部 2px `hairline`。导航是等宽的，像终端菜单。
- **eyebrow-tag**：surface 底 + 酸绿 mono kicker，`[ SYSTEM ONLINE ]` 式眉标，前缀一个 `molten` LED 点。
- **card-spec / spec-body**：surface 面 + 2px `hairline` 边 + 硬黑 offset，标题 heading、正文 body 同框。规格卡不是圆角小卡，是硬边配件。
- **stat-block**：铁黑底 + 左侧 4px 酸绿承重线 + `data-hero` 巨型等宽数字。数字是仪表读数。
- **status-live**：唯一的胶囊，surface 底 + `molten` 橙字 + 橙点，标"运行中 / 跑热"。全屏唯一暖色。
- **rule-line**：2px 高的 `hairline` 实色横线，裸露网格与分节的基本零件，反复铺成机床工作台的量尺。
- **footer**：铁黑 + `muted` 灰 caption + 顶部 2px `hairline` 分线（用 rule-line），压满坐标注脚。

## Presentation System

同一套 token 直接驱动 16:9 演示。原则对齐 HeiGe-PPT：**一页一句话、黄金三秒、视觉锤**。

- **封面 `slide-cover`**：铁黑满屏 + `display-xl` 占屏宣言（一句狠话，最长行收敛字号锁不折断），左上 mono kicker + `molten` LED，四边刻 mono 坐标标尺。黄金三秒里，观众先被那句巨字撞到，再注意到只有一处在发绿光。
- **过渡 `slide-section-divider`**：整屏翻成 **酸绿满版** + 黑色 `data-hero` 三位章节号（`001 / 002`）。夹在两张纯黑内容页之间，每换一章屏幕就"闪"一次酸绿，视网膜残像即导航。这是本套最锋利的一击。
- **数据 `slide-stat-hero`**：铁黑底 + 一个 `data-hero` 巨型等宽数字占据画面，单位与 delta 用 `molten` / `muted` 压小在右下。一页只讲一个数。
- **金句 `slide-quote`**：铁黑 + `display-xl` 一句话，酸绿引号或酸绿下划线作视觉锤，其余全部留黑。
- **收尾 `slide-closing`**：铁黑 + `display-lg` 行动号召 + 一个酸绿实心 CTA（button-primary 同款），干脆收束，不拖泥带水。

视觉锤全程只有一个：**那道酸绿电压**。它在封面是 LED，在过渡是满版，在数据是数字，在金句是引号，在收尾是 CTA。一以贯之，观众记住的就是"那个只有一个亮绿的黑 deck"。

## Signature Moment

**写死两个换模板绝对做不出来的时刻：**

- **UI 签名 · 冷启动宣言 + 电压印章（Cold-Start Manifesto）**
  首屏是一整面 `display-xl` 的 Archivo Black 巨型宣言，占满一屏，四周裸露刻着 mono 坐标的机床网格标尺。左上角一枚 `[ SYSTEM ONLINE ]` 等宽 kicker，前面点着全页唯一的 `molten` 橙色 LED。所有黑色的次级按钮背后都压着一道 `6px 6px 0 {primary}` 的**硬酸绿 offset**——黑块背后透出一道酸绿硬影，像通电前的余压。按下时 offset 归零、元素向右下"咔"地压实，无任何缓动软化。这套"巨字宣言 + 坐标标尺 + 酸绿硬印章"的组合，是熔炉的指纹。

- **Deck 签名 · 酸绿闪断章（Acid Slam Divider）**
  章节过渡页整屏翻成 `#c8ff00` 满版酸绿，正中一个黑色 `data-hero` 三位章节号（`001`）。它被刻意夹在两张纯铁黑内容页中间，于是每次切章，屏幕就从全黑猛地闪一记满版酸绿再落回黑——视网膜残像本身成了章节分隔符。没有第二套配色能承受这种满版酸绿的暴击，这是熔炉独有的"用刺眼当导航"。

## Do's and Don'ts

**Do**
- 一屏一句狠话，字大到过分，四周留到过分。
- 酸绿当电压用，一屏最多亮一两处；其余全交给黑白灰的骨架。
- 网格、坐标、边框全部裸露出来，把"承重结构"当装饰。
- offset 阴影硬边零模糊，按下归零，机械地"咔"一下。
- 数字与状态全走 JetBrains Mono 等宽，像仪表读数。

**Don't**
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及全家桶），那是 AI 界面的身份证。
- **不做居中卡片三件套**（标题 + 灰副标 + 三个等宽圆角卡整页重复），熔炉是左对齐硬边、非对称承重。
- **中文不用日文字体渲染**（Mochiy / Zen Maru 等），简体缺字变豆腐；中文回落 Noto Sans SC / PingFang SC。
- **不动画化阴影 / 不用 backdrop-filter**，发光只静态常亮，滚动不掉帧。
- 不给任何东西加圆角讨好，不用柔和弥散阴影，不把酸绿铺满背景稀释成霓虹。

## Responsive Behavior

| 断点 | 编排 |
|---|---|
| ≥1200px | 12 列裸露网格，坐标标尺全显，宣言 84px，卡片并排。 |
| 768–1199px | 8 列，坐标标尺简化为边缘刻度，宣言 clamp 收到 ~56px。 |
| ≤767px | 单列纵向堆叠，宣言 clamp 收到 ~36px 并按最长行锁 `white-space:nowrap` 防孤字；网格退成左侧一条 4px 酸绿承重线；`section` 间距压到 56px；硬 offset 减到 `4px 4px 0`。 |

移动端是**重新编排的另一段叙事**，不是桌面缩小。巨型宣言在窄屏用 `clamp()` 按最长行收字号、逐行锁 `nowrap`，**零孤字、零横向溢出**；中文限宽用 `em`/`px` 不用 `ch`。所有动画可被 `@media (prefers-reduced-motion: reduce)` 关掉。

## Anti-Slop Pledge

把 COLDFORGE 这个名字抹掉，这一页仍一眼看得出是有人硬手做出来的：一句浇铸的巨型宣言、一道只在该亮处亮的酸绿电压、一圈裸露刻度的机床网格、一记按下会归零的硬印章。它不是流水线吐出来的圆角紫蓝模板，它是一台冷启动的重型机床。
