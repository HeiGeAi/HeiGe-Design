---
version: alpha
name: SynthwaveDrive-design-system
description: >-
  SynthwaveDrive is HeiGe-Design's neon night-drive system. A deep violet-black
  canvas lit by exactly two neons, a magenta primary and an electric-cyan
  accent, with no third hue to dilute the glow. Tech-geometric display type wears
  a static double-stroke neon halo while a receding 3D grid horizon and fine
  scanline texture carry the atmosphere. One token set drives both a product UI
  and a 16:9 deck.

colors:
  primary: "#ff2fb9"      # magenta neon, the sunset sign, used sparingly on key actions
  on-primary: "#12061f"   # near-black violet ink that sits on magenta or cyan fills
  ink: "#ece7ff"          # lavender-white body text on the dark canvas
  canvas: "#17102b"       # deep violet-black, the night road
  surface: "#241a49"      # raised panel, one step out of the dark
  muted: "#9a8fc4"        # dimmed lavender for secondary text
  hairline: "#34275f"     # 1px violet separator
  accent: "#2ff3ff"       # electric cyan, the grid and the road markings

typography:
  display-xl:
    fontFamily: '"Chakra Petch", "Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 76px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: 1px
  display-lg:
    fontFamily: '"Chakra Petch", "Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: 0.5px
  heading:
    fontFamily: '"Space Grotesk", "Chakra Petch", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.2px
  body:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0.1px
  body-mono:
    fontFamily: '"JetBrains Mono", "Space Mono", ui-monospace, SFMono-Regular, Menlo, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.5px
  button:
    fontFamily: '"Chakra Petch", "Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 1.5px
  caption:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: '"JetBrains Mono", "Space Mono", ui-monospace, SFMono-Regular, Menlo, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 3px

rounded:
  none: 0px
  sm: 2px
  md: 6px
  lg: 14px
  pill: 9999px

spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  # —— UI 界面组件 ——
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  badge-scanline:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  divider-hairline:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: "1px"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  # —— slide 演示组件（16:9，融合 HeiGe-PPT）——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
---

# SynthwaveDrive · 合成波

> 80 年代想象里的未来，一路霓虹飙车。深紫黑的夜路只留两盏霓虹：品红是地平线上那颗人造太阳，青是脚下不断后退的网格。速度感靠版式和留白，不靠第三种颜色。

## Overview

合成波不是"把界面调暗再加发光"。它是一辆车在午夜高速上开进无限延伸的网格地平线里的那个瞬间。整套系统把光源收到极致克制：**主色品红 `#ff2fb9`** 只负责主行动和那颗地平线上的太阳，**辅助色青 `#2ff3ff`** 负责网格、路面标线、数据高亮。除此之外没有第三种彩色，深紫黑 `#17102b` 把所有噪声吃掉，两盏霓虹才亮得起来。

主色的两个角色说清楚：品红是"该看这里"的行动信号（按钮、地平线太阳、收尾整屏），青是"结构在这里"的功能信号（描边、网格、tabular 数字）。谁都不越界，这是合成波耐看的关键。

字体签名走"科技几何无衬线 + 静态双层霓虹描边"。`Chakra Petch` 做占屏标题，宽体、带一点机械转角；`Space Grotesk` 做正文，冷静好读；`JetBrains Mono` 做 kicker 和数据，等宽表格数字像仪表盘读数。标题的辉光是**固定的双层 text-shadow**，呼吸只用 opacity 做，绝不逐帧动阴影。

整体节奏：大留白 + 底部锚定的网格地平线 + 一句占屏狠话。信息密度靠张弛，不靠堆卡片。

## Colors

### Brand & Accent
| Token | Hex | 角色 |
|---|---|---|
| `primary` | `#ff2fb9` | 品红霓虹。主行动、地平线太阳、收尾整屏。用量克制到"每屏至多一处主品红面积"。 |
| `accent` | `#2ff3ff` | 电光青。网格线、描边、路面标线、tabular 数据高亮、状态点。 |
| `on-primary` | `#12061f` | 近黑紫墨。压在品红或青实色上的文字，保证读得清。 |

### Surface
| Token | Hex | 角色 |
|---|---|---|
| `canvas` | `#17102b` | 深紫黑夜路。页面与封面底色，也是网格地平线的底。 |
| `surface` | `#241a49` | 抬升一层的面板。卡片、数据块、金句页底。 |
| `hairline` | `#34275f` | 1px 低调紫分隔线。网格辉光之外的冷静骨架。 |

### Text
| Token | Hex | 角色 |
|---|---|---|
| `ink` | `#ece7ff` | 薰衣草白正文。深底上的主文字，对 canvas 对比度 ≈ 15:1。 |
| `muted` | `#9a8fc4` | 暗紫次要文字。caption、footer、label，对 canvas ≈ 6.2:1，仍在 AA 之上。 |

主色不用纯黑不用纯白：正文用薰衣草白 `#ece7ff`（纯白在霓虹底上会刺眼、且失去紫色调性），底色用深紫黑 `#17102b`（纯黑会让品红和青失去"发光介质"）。

### 对比度自检（component 已过 WCAG AA）
所有带文字的组件两色对比度均 ≥ 4.5:1：`ink/canvas` 15.2、`ink/surface` 13.2、`accent/surface` 11.7、`primary/canvas`（stat-hero）5.5、`on-primary/primary`（按钮/收尾）5.9、`muted/canvas`（footer）6.2。最紧的是品红压深底的巨号数据，仍有 5.5 富余。

## Typography

### Font Family
- **Display / 标题**：`"Chakra Petch"`，科技几何无衬线，宽体带机械转角，承载发光描边。
- **正文 / heading**：`"Space Grotesk"`，冷静好读的现代 grotesk。
- **Mono / kicker & 数据**：`"JetBrains Mono"`，等宽 tabular 数字像仪表盘读数。
- **中文兜底铁律**：每个能承载中文的字体栈末尾都挂 `"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`。webfont 加载不到（`fonts.googleapis.com` 在国内常超时）也不会塌成 Times、不会出豆腐块。
- **中文绝不用日文字体**渲染（Mochiy / Zen Maru 等简体会缺字变豆腐）。要俏皮中文展示体走 `Noto Sans SC` 或 `ZCOOL KuaiLe`，本系统不需要。

### Hierarchy
| Role | Size / Weight | 用途 |
|---|---|---|
| `display-xl` | 76 / 700 | 封面主标题、Hero。全大写，带霓虹描边。 |
| `display-lg` | 52 / 700 | 章节过渡巨号、金句页。 |
| `heading` | 26 / 600 | 卡片标题、收尾行动句。 |
| `body` | 17 / 400 | 正文，行高 1.65 留呼吸。 |
| `body-mono` | 15 / 500 | tabular 数字、指标；slide 场景用 clamp 放大到巨号。 |
| `button` | 15 / 600 | 全大写，字距 1.5px。 |
| `caption` | 13 / 400 | 图注、footer。 |
| `eyebrow` | 12 / 600 | mono kicker，字距 3px 全大写，`// SYSTEM.ONLINE` 感。 |

### Principles
- **最大字对正文 ≥ 4:1**：display-xl 76 对 body 17，敢让标题大到有点过分。
- **kicker 用 mono**：`// DRIVE.MODE_ON` 这种等宽全大写小标是合成波的口音，别用普通无衬线。
- **标题全大写 + 字距展开**，正文正常大小写不展开，制造仪表盘 vs 人话的层级。
- **零孤字**：手动断行的标题按最长那行收字号，每行 `white-space:nowrap`，字号用 `clamp()` 保证 ≤390px 也不折断、不甩出单字。中文限宽用 `em`/`px`，别用 `ch`。

## Layout

### Spacing 系统
`sm 8 / md 16 / lg 24 / xl 40 / section 80`。8 的倍数栅格。section=80 是屏与屏之间的"呼吸闸门"，强模块之后必留一段近乎空白的暗场，让下一盏霓虹重新亮起来。

### Grid & Container
- 桌面 12 栏，gutter 24，最大内容宽 1200px，两侧留出暗场。
- **网格地平线是版式母题**：内容网格之外，页面底部永远有一层向灭点收敛的 3D 透视网格，用 CSS `perspective` + repeating-linear-gradient 画，青线 `#2ff3ff` 低强度辉光。它是背景，不参与内容排布，但定义了整套的空间感。
- 数据区用等宽 tabular 对齐到像素，读数像车载仪表。

### Whitespace 哲学
留白就是那段夜路。合成波的高级不来自元素多，来自**大片深紫黑里只亮一两处霓虹**。别把每个缝都填满，暗场是给霓虹充电的。

## Elevation & Depth

深色系不靠投影堆叠层级，靠**辉光与网格线**。

| 层级 | 手法 |
|---|---|
| 底 | canvas `#17102b` + 底部网格地平线 |
| 面板 | surface `#241a49`，比底亮一档，1px `hairline` 描边 |
| 抬升 | surface + 一道 `#2ff3ff` 低强度外辉光（静态 box-shadow） |
| 焦点 | 品红或青的**固定双层辉光**，opacity 呼吸 |

装饰性深度的三条铁律（继承生产清单）：
- 辉光只用**静态 `box-shadow` / `radial-gradient`**，常亮不闪。**绝不动画化 shadow**（逐帧重绘极贵）。
- **不用 `backdrop-filter`**（滚动持续重绘），玻璃感用半透明纯色 `rgba(36,26,73,.7)` 替代。
- 呼吸动画只动 `opacity`，模糊装饰层静止，全部能被 `prefers-reduced-motion: reduce` 关掉。

## Shapes

| Token | 值 | 用途 |
|---|---|---|
| `none` | 0px | 网格、面板、slide、nav、footer 的默认。合成波偏硬边几何。 |
| `sm` | 2px | 霓虹小标签 badge。 |
| `md` | 6px | 内容卡片，微圆软化硬边。 |
| `lg` | 14px | 数据块，容纳巨号读数。 |
| `pill` | 9999px | 按钮，胶囊描边像霓虹灯管。 |

图形几何：主体走**硬边直角 + 灭点透视线**，唯一的圆是按钮的灯管胶囊和地平线太阳的圆盘。图片裁切走硬边矩形，叠一层扫描线（`repeating-linear-gradient` 2px 间隔的极淡横纹）。

## Components

- **button-primary**：品红实色 + 近黑紫字 + 胶囊，静态品红外辉光。主行动，每屏至多一个。
- **button-secondary**：surface 底 + 青字 + 青描边胶囊，像点亮的霓虹灯管轮廓。次行动。
- **card-feature**：surface 面板 + hairline 描边 + 6px 圆角，hover 时叠一道青色外辉光（静态）。
- **stat-block**：surface + 14px 圆角，巨号 tabular 青数字 + 暗紫 label，仪表读数感。
- **nav-bar**：canvas 底 + 底边 1px hairline，左 logo 右链接，mono eyebrow 做 `// STATUS`。
- **badge-scanline**：品红小标签 + mono 全大写字，2px 硬角，叠极淡扫描线。
- **footer**：canvas 底 + 顶边 hairline，muted caption，底部露出一截网格地平线收尾。

每个组件的空态 / hover / focus / 加载态都做掉：focus 用青色 2px 外环（非阴影），加载用青色扫描线自上而下扫过。

## Presentation System

同一套 token 直接驱动 16:9 演示。对齐 HeiGe-PPT 的**一页一句话 / 黄金三秒 / 视觉锤**。

- **视觉锤（贯穿全场）**：每一页底部三分之一锁定同一条**霓虹网格地平线**，品红太阳盘落在灭点上。翻到任何一页，三秒内就知道"这是合成波"。这是全场复用的视觉锤。
- **slide-cover 封面**：canvas 底，display-xl 全大写主标带双层霓虹描边，mono eyebrow 在顶，网格地平线在底。一页一句话，标题就是那句话。
- **slide-section-divider 过渡**：surface 底，青色 display-lg 巨号 `01 / 02`，一道青扫描线自上而下揭示它。纯色 + 章节号，给节奏留白闸门。
- **slide-stat-hero 数据**：canvas 底，品红巨号 tabular 数字（body-mono clamp 放大）+ 青单位，数字大到占半屏，视觉主角唯一。
- **slide-quote 金句**：surface 底，display-lg 一句占屏狠话，青色引号，其余全暗。
- **slide-closing 收尾**：品红整屏铺满（那颗太阳升到吞掉全屏），近黑紫字写行动号召，干脆收束。

节奏曲线：暗封面 → 暗场过渡 → 品红数据高潮 → 金句余味 → 品红整屏收尾。强弱交替，绝不一个密度到底。

## Signature Moment

换个模板绝对做不出来的两个签名时刻，写死：

- **UI 签名 · 地平线启动（Drive Horizon）**：Hero 区一层 CSS `perspective` 透视网格地板向灭点后退，灭点处一颗品红径向渐变太阳，太阳身上横切几道扫描线狭缝（synthwave 落日的标志切割）。主标题用青色渲染，挂**固定的双层 text-shadow 霓虹光晕**，呼吸只用 opacity 脉冲（性能安全）。网格 + 落日 + 呼吸青标题合在一起，一眼就是 synthwave-drive，别的模板拼不出这个空间。
- **Deck 签名 · 扫描线揭示（Scanline Wipe）**：每张封面把网格地平线锁在底部三分之一当复用视觉锤；章节过渡页的巨号 `01/02` 由**一条青色扫描线自上而下扫过时逐段显影**，品红落日辉光在号码背后透出来。过场不是淡入，是一条光线扫出来的。

## Do's and Don'ts

**Do**
- 只用两盏霓虹：品红主 + 青辅，第三种彩色一律砍掉，靠深紫黑当发光介质。
- 标题全大写 + mono kicker，制造仪表盘口音。
- 底部网格地平线全场复用当视觉锤，翻页三秒可辨。
- 辉光做成固定双层 shadow，呼吸只动 opacity。
- 大留白当夜路，暗场给霓虹充电。

**Don't**
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及其全家桶）。这套是深紫黑底上的**离散双霓虹**，不是那种糊成一片的紫蓝背景，两者天差地别。
- **不做居中卡片三件套**（一行标题 + 一行灰副标 + 三个等宽圆角卡整页重复）。信息靠地平线锚定和张弛节奏组织。
- **中文绝不用日文字体**渲染（Mochiy / Zen Maru 简体缺字变豆腐），中文兜底走 Noto Sans SC / PingFang SC。
- **不动画化阴影 / text-shadow**（逐帧重绘掉帧），发光常亮不闪。
- 不用 emoji 当图标，不写"赋能/一站式/智能高效"的填充话。
- 不让霓虹面积失控，品红一屏至多一处主面积，多了就俗。

## Responsive Behavior

| 断点 | 编排 |
|---|---|
| ≥1200px | 12 栏，网格地平线全宽透视，Hero 落日居右灭点。 |
| 768–1199px | 8 栏，地平线收窄但保留灭点，stat 两列。 |
| ≤767px | 单列重排，不是缩放。 |

移动端是**重新编排的另一段叙事**：网格地平线压到屏底一条窄带，落日缩成一枚锚点圆盘；巨号标题用 `clamp()` 收敛到最长行在 ≤390px 也不折断、不出孤字；数据块从横排改竖排卡片流。导航折成底部 mono 状态条。扫描线密度调稀避免小屏摩尔纹。

自检：桌面与 ≤390px 各过一遍，确认无孤字、无横向溢出（`scrollWidth == clientWidth`）、霓虹在断网无 webfont 时仍干净显示。

## Anti-Slop Pledge

把 "SynthwaveDrive / 合成波" 这个名字从任何一页抹掉，它仍然一眼看得出是**有人认真开进那条霓虹夜路做出来的**，不是流水线随手调暗加发光的模板：底部那条向灭点收敛的网格地平线、只留两盏离散霓虹的克制、mono kicker 的仪表盘口音、扫描线揭示的过场，任意一处都在说"这是被设计过的空间，不是被生成的图层"。

— HeiGe-Design · MIT
