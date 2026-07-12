---
version: alpha
name: GuochaoCyber-design-system
description: >-
  Guochao Cyber collides Chinese calligraphic tradition with electric-street
  neon on a lacquer-black stage. A deep cinnabar seal red drives every call to
  action while one restrained neon-cyan glow and a single thread of imperial
  gold cut through the dark. Brush-stroke display type meets heavy gothic and
  tabular mono data, mixing Han characters with Latin at high speed. The
  signature move is a vertical cinnabar seal stamp and a wet-brush headline
  wrapped in a 1px neon outline. Built to fuse youth-culture UI and 16:9 keynote
  decks. Signed HeiGe-Design.

colors:
  primary: "#d52823"      # 国潮朱砂红 cinnabar seal red — every CTA, seal, brush accent
  on-primary: "#fdf6ea"   # carved-cream text on cinnabar (4.70:1 on primary)
  ink: "#f2ebdb"          # rice-paper bone text on the lacquer dark
  canvas: "#0c0b0d"       # 漆黑 lacquer black stage (not pure black)
  surface: "#171419"      # raised lacquer panel for cards and quotes
  muted: "#9a9088"        # warm ash secondary text (6.28:1 on canvas)
  hairline: "#2a2530"     # 1px lattice divider in the dark
  accent: "#2ff3ff"       # 霓虹青 neon cyan — the single electric glow, used sparingly
  gold: "#e8b84b"         # 明金 imperial gold thread for eyebrows and seal frames

typography:
  display-xl:
    fontFamily: '"Ma Shan Zheng", "Noto Serif SC", "Songti SC", serif'
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1px
  display-lg:
    fontFamily: '"Archivo Black", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 68px
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: -1px
  data-hero:
    fontFamily: '"Space Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, monospace'
    fontSize: 104px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -3px
  heading:
    fontFamily: '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 26px
    fontWeight: 800
    lineHeight: 1.35
    letterSpacing: 0px
  body:
    fontFamily: '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.2px
  body-mono:
    fontFamily: '"Space Mono", "JetBrains Mono", "SFMono-Regular", "Noto Sans SC", "PingFang SC", ui-monospace, monospace'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.4px
  button:
    fontFamily: '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 1px
  eyebrow:
    fontFamily: '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 3px

rounded:
  none: 0px
  sm: 3px
  md: 6px
  lg: 10px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 96px

components:
  # —— UI 界面组件 ——
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.data-hero}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  seal-badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  eyebrow-kicker:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.gold}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  rule:
    backgroundColor: "{colors.hairline}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  # —— slide 演示组件（16:9）——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.data-hero}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# 赛博国潮 · Guochao Cyber

一套把毛笔笔锋、朱砂印章和街头霓虹按在漆黑漆器台面上的东方新中式系统。传统不是背景板，霓虹也不是滤镜，两股力量正面对撞：湿墨写完最后一笔，笔尾直接甩成一道电青拖光。署名 HeiGe-Design。

## Overview

这套的气场来自**一次高速撞击**：一边是宋以来的笔墨秩序（毛笔、竖排、朱印），一边是深夜城市的霓虹信号（电青描边、数据流、机械等宽）。漆黑打底负责把两者都压进夜色里，让红与青各自发光。

- **主色的两个角色**：朱砂红 `#d52823` 是行动与身份——所有 CTA、印章、笔触落款都归它；它在漆黑上像一块刚盖下去的湿印，是画面里唯一"热"的东西。霓虹青 `#2ff3ff` 是电流与未来——只在一个焦点、一条描边、一个巨型数字上出现，一多就俗。金 `#e8b84b` 是一根细线，勾印框、挑眉标，从不铺面。
- **字体签名**：标题用毛笔楷（Ma Shan Zheng）写一句中文狠话，副标题切成超重黑体（Archivo Black + 思源黑），数据一律走等宽（Space Mono）做赛博读数。中西混排、楷体与黑体贴身站，这种张力是这套的声音。
- **整体节奏**：大面积漆黑留白，一屏一主角，红或青单点点火，绝不同时抢戏。慢起，一句砸下，霓虹一闪，收在朱印上。

## Colors

**Brand & Accent**
- `primary` 朱砂红 `#d52823`——国潮身份色，CTA / 印章 / 笔触落款。国潮种子红 `#e0332e` 的深化版，压深一档换来在奶白上 4.70:1 的 AA 对比，红味不减。
- `accent` 霓虹青 `#2ff3ff`——唯一电流色，焦点描边、巨型数据、状态点。克制到"整页只此一处"。
- `gold` 明金 `#e8b84b`——印框金线与挑眉标签，永远是线不是面。

**Surface**
- `canvas` 漆黑 `#0c0b0d`——漆器台面，不是纯黑，留一丝暖，让红更红。
- `surface` 漆面板 `#171419`——卡片与金句页的抬升面，比台面亮一档。
- `hairline` 格线 `#2a2530`——1px 窗棂分隔，暗处的秩序。

**Text**
- `ink` 宣纸骨白 `#f2ebdb`——正文与标题主色，漆黑上 16.5:1。
- `on-primary` 刻白 `#fdf6ea`——朱印上的阴刻字，像印章里挖空的笔画。
- `muted` 暖灰 `#9a9088`——次要信息，漆黑上 6.28:1，够读不抢。

**Semantic**
- 强调即 `accent` 电青，警示即 `primary` 朱砂，金 `gold` 只做仪式性点缀。系统不额外发明语义色，靠这三支撑全部层级。

## Typography

**Font Family**
- 中文展示走 `Ma Shan Zheng`（毛笔楷，Google Fonts 简体笔触），兜底 `"Noto Serif SC", "Songti SC", serif`。这是真中文字体，简体不缺字。
- 中文黑体走 `Noto Sans SC` 系列，末尾 `"PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`。
- 拉丁重体 `Archivo Black`、等宽数据 `Space Mono`，都补 `ui-monospace, monospace` / 系统无衬线兜底，断网标题不塌成 Times。
- **铁律**：中文绝不用日文字体（Mochiy / Zen Maru 等）渲染，简体会缺字变豆腐块。要俏皮中文展示体宁可用 ZCOOL 系或思源，绝不借日文。

**Hierarchy**

| Role | Font | Size / Weight | 用途 |
|---|---|---|---|
| display-xl | Ma Shan Zheng 毛笔楷 | 96 / 400 | 封面与金句的湿墨大标题 |
| display-lg | Archivo Black + 思源黑 | 68 / 900 | 过渡页 / 收尾页的黑体重锤 |
| data-hero | Space Mono | 104 / 700 | 赛博巨型读数，tabular 对齐 |
| heading | 思源黑 800 | 26 / 800 | 导航与卡片小标题 |
| body | 思源黑 400 | 17 / 400 | 正文，行高 1.75 给中文呼吸 |
| body-mono | Space Mono | 13 / 400 | 页脚与元数据的机械感 |
| button | 思源黑 700 | 16 / 700 | 按钮字，字距 1px |
| eyebrow | 思源黑 700 | 12 / 700 | 挑眉标 / 竖排印文，字距 3px |

**Principles**
- 楷体只写"一句话级别"的中文，长文永远交给黑体正文；毛笔笔触是重音，不是段落。
- 数字全部归等宽，涨跌对齐、宽度锁死，这是赛博读数的可信感来源。
- 中英贴身混排时，让拉丁略降一号、基线对齐中文，避免西文"浮起来"。

## Layout

**Spacing** 走 4 的倍数阶梯：`xs 4 / sm 8 / md 16 / lg 24 / xl 40 / section 96`。段落靠 `section` 96px 拉开呼吸，组件内靠 `md/lg`，绝不用均匀间距摊平节奏。

**Grid & Container** 桌面 12 列、最大 1200px、gutter 24px。竖排元素（印章、章节号）挂在栅格右缘当"柱"，横排正文守左缘，一横一竖形成东方版面的十字张力。

**Whitespace** 漆黑本身就是最大的留白。哲学是"墨分五色靠水，版分层次靠黑"——不靠加色块，靠让大片台面沉下去，红与青浮上来。留白服务节奏，只在主角前后加大，不平均撒。

## Elevation & Depth

| 层级 | 手法 |
|---|---|
| 台面 canvas | 漆黑基底，零阴影 |
| 抬升 surface | 比台面亮一档 + 1px `hairline` 窗棂描边 |
| 焦点 | 电青静态辉光：`box-shadow: 0 0 24px rgba(47,243,255,.35)`，常亮不闪 |
| 印章 | 朱砂实心 + 1px 电青外描，边缘微光 |

- 辉光只用静态 `box-shadow` / `radial-gradient`，**绝不动画化阴影**（逐帧重绘掉帧），**绝不用 `backdrop-filter`**（滚动持续重绘），玻璃感一律用半透明纯色替代。
- 深度靠红/青的发光对比与窗棂描边制造，不靠层层模糊堆叠。

## Shapes

| Token | 值 | 用途 |
|---|---|---|
| none | 0px | 导航 / 全部 slide / 印章外框，硬边即国潮 |
| sm | 3px | 按钮与印章，几乎方，只磨掉一丝毛刺 |
| md | 6px | 卡片 |
| lg | 10px | 数据块 |
| pill | 9999px | 挑眉小标签 |

图形母题：窗棂格（回纹 / 冰裂纹）赛博化成 1px 电青线阵当背景；图片走硬直角出血，配一道毛笔飞白的撕边或一枚朱印压角。几何整体偏方偏硬，圆角只用于最轻的标签，重元素一律方。

## Components

- **button-primary**：朱砂实心 + 刻白字，方角带 3px 磨边，像一枚盖下去的印。hover 时补一圈电青外辉光。
- **button-ghost**：漆面底 + 骨白字 + 1px 电青描边，做次级动作。
- **nav-bar**：漆黑通栏，骨白黑体导航项，底部一条 `hairline`，右上角常驻一枚竖排 `seal-badge` 当品牌锚。
- **card-feature**：漆面板 + 窗棂描边，标题黑体、正文骨白，左上角一小段金线挑眉。
- **stat-block**：漆面板上一个电青巨型等宽数字（`data-hero`），下方暖灰小标，赛博读数的仪表感。
- **seal-badge**：竖排朱印，刻白印文阴刻其中，1px 电青外描——全系统的身份图钉。
- **eyebrow-kicker**：金字挑眉小标签，胶囊形，字距 3px。
- **rule**：1px 窗棂分隔线。
- **footer**：漆黑底 + 等宽暖灰元数据，机械冷静收尾。

## Presentation System

做成 16:9 演示时，对齐 HeiGe-PPT 的**一页一句话 · 黄金三秒 · 视觉锤**：

- **封面 slide-cover**：漆黑满屏，一句毛笔中文狠话（`display-xl`）占据左下二分之一，右上角一枚竖排朱印落款，一道电青细线横切画面三分点。三秒立住"传统撞霓虹"的气质。
- **过渡 slide-section-divider**：整屏朱砂红，右缘一个巨型竖排章节号（`data-hero` 等宽）像庙柱刻字自上而下，一条电青 hairline 劈开红面，基线压一枚小刻白印。红是这套唯一敢铺满的色，过渡页就是它的主场。
- **数据 slide-stat-hero**：漆黑底，一个电青巨型等宽数字撑满画面，单位与注解压成暖灰小字贴在数字裙脚，视觉锤就是那个"大到过分"的青色读数。
- **金句 slide-quote**：漆面板底，一句话占屏，关键几个字用毛笔楷放大、笔尾甩出电青拖光，其余黑体压住。
- **收尾 slide-closing**：整屏朱砂红，一句行动号召黑体重锤（`display-lg`）居左，右下一枚刻白大印收束，干脆落章、不拖泥带水。

视觉锤统一是"朱印 + 电青拖光"，每页最多点一次火，红青绝不在同一屏平分权重。

## Signature Moment

**UI 签名时刻——朱印竖章 × 湿墨甩青**：hero 右上角钉死一枚竖排朱砂印章（`seal-badge`），刻白印文如阴刻挖空，整枚印外裹一圈 1px 电青描边并挂静态辉光；与此同时，hero 主标题是一笔湿墨毛笔楷（`display-xl`），最后一笔不收锋，直接延伸成一道渐隐的电青拖光扫出画面。一枚会发光的传统印章配一笔甩出霓虹的毛笔字——换个模板绝对做不出这口气。

**Deck 签名时刻——庙柱章节号 × 红面劈青**：过渡页（`slide-section-divider`）整屏朱砂红，右缘一个巨型竖排等宽章节号自上而下贯穿，像庙柱上凿出的编号；一条电青 hairline 从数字腰部横劈红面，基线落一枚小刻白印。红的仪式感与青的电流感在一页里正面顶住，这一屏就是全场的高点。

## Do's and Don'ts

**Do**
- 一屏一主角，红或青单点点火，让漆黑把其余一切沉下去。
- 毛笔楷只写一句狠话，长文全交黑体正文，楷体是重音不是段落。
- 数字全走等宽 tabular，涨跌对齐、宽度锁死。
- 竖排印章、章节号挂栅格右缘当"柱"，横排正文守左缘，撑起东方版面的十字张力。
- 辉光用静态 box-shadow，常亮不闪。

**Don't**
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2`）及其全家桶——这套的电流只有一支纯净电青，绝不掺紫。
- **不做居中卡片三件套**（标题+灰副标+三等宽圆角卡整页重复）——版面靠红青单点与竖排锚点起势，不靠对称卡片凑数。
- **中文绝不用日文字体**渲染，简体缺字变豆腐；要中文展示体就用 Ma Shan Zheng / 思源系。
- **不动画化阴影 / 不用 backdrop-filter**——霓虹辉光只静态发光，滚动不掉帧。
- 红与青不在同一屏平分视觉权重，金永远是线不是面。

## Responsive Behavior

| 断点 | 编排 |
|---|---|
| ≥1200px | 12 列，竖排印章/章节号挂右缘，毛笔大标题满配 |
| 768–1199px | 8 列，竖排锚点缩为角标，`display-xl` 降到 ~64px |
| ≤767px | 单列重排：印章移到标题上方横置，毛笔标题用 `clamp(40px, 11vw, 72px)` 按最长行收字号 |

移动端是**重新编排的另一段叙事**，不是桌面端缩一缩：竖排改横置、章节柱改顶部条、数据巨字改单列堆叠。

**零孤字**：手动断行的毛笔标题按最长行收敛字号，每行 `white-space:nowrap` 锁整行，`clamp()` 保证最窄屏（≤390px）也放得下，绝不把单字或标点甩成独立一行。中文限宽用 `em`/`px`，不用 `ch`（`ch` 是拉丁数字宽，会让中文提前折行）。多行居中正文加 `text-wrap:balance` 均衡行长。所有动画可被 `prefers-reduced-motion: reduce` 关掉。

## Anti-Slop Pledge

把品牌名抹掉，这一页仍一眼看得出是有人用心撞出来的：一枚发光的朱砂竖章、一笔甩成霓虹拖光的毛笔字、红面上被电青劈开的庙柱章节号——这些是流水线模板生成不出来的东方新中式撞击。断网不塌、任何屏宽不出孤字、滚动不掉帧。签名 HeiGe-Design。
