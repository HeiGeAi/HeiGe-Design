---
version: alpha
name: Tongshu-design-system
description: >-
  Tongshu is a folk-almanac system for craft, heritage and regional-culture
  brands. Woodblock ink presses onto parchment; folk-red and pine-green are the
  only two inks, one auspicious, one warding. Fraunces cuts carved serifs, LXGW
  WenKai hand-warms the copy, IBM Plex Mono rules the date columns. The signature
  is a carved lace-meander border framing a tear-off almanac day-leaf: a 宜 / 忌
  ledger, a lunar date, and a solar-term seal pressed askew in vermilion.

colors:
  primary: "#c23b22"       # 民间红 folk-red · 宜-column ink & seal, fill-only, cream on top
  on-primary: "#fdf6e6"    # warm rice-cream set on red or green fields
  ink: "#2a1e12"           # woodblock brown-black, body text (never pure black)
  canvas: "#ead9b8"        # 羊皮纸 parchment, the page the whole almanac is printed on
  surface: "#f4ecd6"       # rice-paper card, one shade above canvas
  muted: "#5f4f33"         # aged-catalpa brown for captions, dates, secondary text
  hairline: "#c8b083"      # 1px carved rule / woodblock line
  accent: "#3f6f52"        # 松绿 pine-green · 忌-column & margins, fill-only, cream on top

typography:
  display-xl:
    fontFamily: '"Fraunces", "Georgia", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -1.5px
  display-lg:
    fontFamily: '"Fraunces", "Georgia", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 42px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.5px
  heading:
    fontFamily: '"Fraunces", "Georgia", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.28
    letterSpacing: -0.2px
  body:
    fontFamily: '"LXGW WenKai", "Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.78
    letterSpacing: 0.1px
  body-mono:
    fontFamily: '"IBM Plex Mono", ui-monospace, "LXGW WenKai", "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.5px
  button:
    fontFamily: '"Fraunces", "LXGW WenKai", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.3px
  caption:
    fontFamily: '"LXGW WenKai", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: '"Fraunces", "LXGW WenKai", "Noto Serif SC", "Songti SC", serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.2
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
  section: 80px

components:
  # —— UI 界面组件 ——
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  solar-term-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  tag-yi:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  card-dayleaf:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  ledger-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "{spacing.md}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  meta-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  divider-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    padding: "{spacing.xl}"
  # —— slide 演示组件（16:9 版式）——
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
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Tongshu · 民历

一套照着老黄历刻出来的设计系统。它不像 App，像墙上撕下来的一张通书日页：羊皮纸底、木刻回纹花边、当中一栏红字写「宜」，一栏绿字写「忌」，角上盖一枚没对准的朱印，眉头一行小字是当日节气。做手工艺、非遗、地方品牌、文创的，用它。

## Overview

Tongshu 的气场来自**刻版房而非设计软件**。整套系统假设自己被印在一张羊皮纸上，图案都是木刻版压上去的：花边是刻的，标题是刻的，印是盖的，节气是压的。

系统只有两种墨，各司一职，这是老黄历的规矩。**民间红 `#c23b22` 是「宜」墨**：吉事、当日、行动号召、朱印落款，全走这一抹红。**松绿 `#3f6f52` 是「忌」墨**：禁忌栏、页边、收尾页那道沉下去的绿。红主动，绿守静，一屏之内红绿各归各位，绝不打架。两色都**只做底、只配奶油字**，从不拿红字绿字压浅纸（红压米是隐形字），这是配方的铁律。

字体签名是**刻与写的对撞**。标题走 Fraunces，那种高对比、微微歪扭的老衬线，像木刻刀在梨木上走出来的笔画；正文走霞鹜文楷，手写楷的暖，像毛笔在通书内页上抄下来的。一刻一写，刚好是「版」与「人」的关系。日期与计数交给 IBM Plex Mono，等宽对齐，专治黄历那种公历农历双列排。

节奏是**节气式**的：一节紧（宜忌清单、日期、密排的项目），一节松（一句金句、一片留白、一枚朱印），像二十四节气一样一张一弛往下走，绝不从头到尾一个密度。

## Colors

两墨配方，红绿各一职，节奏靠版式不靠堆色。

### Brand & Accent
- `#c23b22` **民间红 primary** — 「宜」的朱墨，全系统最主动的一抹。用作主按钮、当日标、朱印、过渡页整屏。它偏亮，**只做背景配奶油字**（奶油压红 4.9:1），绝不拿红字压羊皮纸（3.8:1 的隐形字）。红是重音，一屏最多响两次。
- `#3f6f52` **松绿 accent** — 「忌」的守墨，也是页边线的墨。比嫩叶更沉，为的是能背奶油字（5.4:1）。用作次按钮、禁忌栏、收尾页整屏、木刻纹样的描线。绿永远比红安静一档。

### Surface
- `#ead9b8` **canvas** — 羊皮纸，全系统印在它上面，暖到发旧。
- `#f4ecd6` **surface** — 米纸卡面，比 canvas 高一阶，日页浮起半毫米。
- `#c8b083` **hairline** — 刻痕线色，做 1px 分隔与回纹花边的骨。

### Text
- `#2a1e12` **ink** — 木刻墨的褐黑，正文色。不用纯黑（纯黑压在暖纸上像塑料贴纸）。在羊皮纸上 11.7:1，在米纸上 13.8:1。
- `#5f4f33` **muted** — 陈梓木褐，做节气眉批、图注、批次日期。在羊皮纸上 5.7:1，在米纸上 6.7:1，够格当次要文字。
- `#fdf6e6` **on-primary** — 压在红/绿/墨底上的暖米字，红上 4.9:1，绿上 5.4:1，墨上 15:1。

节奏原则：**红绿不同框争主**。同一模块里红当家就让绿退到边线，绿当家就让红缩成一枚小印。谁都想说话 = AI 撞色 slop，这里拒绝。

## Typography

### Font Family
- **展示 / 标题 / 数字标题：Fraunces** — 高对比老式衬线，带光学尺寸的通书刻版气。中文兜底 `"Noto Serif SC", "Songti SC", "STSong", serif`，断网也是干净宋体，绝不塌成 Times。
- **正文 / 图注：LXGW WenKai 霞鹜文楷** — 手写楷的暖，抄经体的呼吸感，正文读起来像黄历内页手抄。中文栈自带，末尾挂 `"Noto Serif SC", "Songti SC", serif` 系统兜底。
- **日期 / 计数：IBM Plex Mono** — 等宽，专治公历农历双列对齐、宜忌条数、页码。兜底 `ui-monospace, "Noto Sans SC", monospace`。
- **中文铁律**：三条能承载中文的字栈末尾都挂了系统兜底，简体永不缺字。**中文绝不用日文字体渲染**（Mochiy / Zen Maru 那一挂），简体会缺字变豆腐、或显成日文异体。要暖楷就走霞鹜文楷 / 思源系。

### Hierarchy
| role | family | size / weight | 用途 |
|---|---|---|---|
| display-xl | Fraunces | 72 / 600 | 封面主宣言，一屏一句 |
| display-lg | Fraunces | 42 / 600 | 过渡页 / 金句 / 收尾 |
| heading | Fraunces | 24 / 600 | 日页标题、卡片标题、导航品牌字 |
| body | 霞鹜文楷 | 17 / 400 | 正文，行高 1.78 给它喘气 |
| body-mono | IBM Plex Mono | 40 / 500 | 公历农历大日期、收成计数（等宽对齐最稳） |
| button | Fraunces | 16 / 600 | 按钮，字距 +0.3 |
| caption | 霞鹜文楷 | 13 / 400 | 图注、节气批注、日期戳 |
| eyebrow | Fraunces | 13 / 500 | 节气眉批小标，字距 +3 拉开如刻在梁上 |

### Principles
- **最大字与正文 ≥ 1:4**：display-xl 72 对 body 17，封面标题敢大到有点过分。
- **日期一律 body-mono 等宽**：「二〇二六 · 立夏 · 四月初九」公历农历并排时，等宽才对得齐，这是黄历的骨。
- **eyebrow 永远拉开字距**：节气二字（立夏 / 霜降）字距 +3，像刻在门楣横梁上的一行小字。
- 手动断行标题按最长行收字号，配 `text-wrap:balance`，窄屏 ≤390px 零孤字。**中文限宽用 `em` 不用 `ch`**（ch 是拉丁数字宽度，会让中文提前折行出孤字）。

## Layout

### Spacing
4 / 8 / 16 / 24 / 40 / 80 的六阶节气尺。section 80px 是节与节之间那道沟，模块之间必须留这道沟，不许挤成一坨。

### Grid & Container
- 桌面 12 列，gutter 24，最大内容宽 1120px，两侧留羊皮纸边，像通书的装订天头地脚。
- **裸露的回纹骨线**：栏与栏之间偶尔露一道 `#c8b083` 刻痕线，提醒你这是印出来的，不是渲染的。
- 日页按**通书翻页**码放：不追求等高，允许当日页大、旁日页小，像一本翻开的历书左右两页不对称。

### Whitespace
留白是**天头地脚不是填充**。大留白只出现在模块之间那道 80px 沟、封面四周的装订边；模块内部（宜忌栏、节气表）反而信息密实。均匀撒白 = AI slop，这里拒绝。

## Elevation & Depth

深度靠**压印和纸感**，不靠悬浮阴影。

| 层 | 手法 |
|---|---|
| 纸底 | 静态羊皮纸颗粒（SVG feTurbulence 一次性铺底，不动画） |
| 卡片 | 极浅硬 offset 阴影 `2px 3px 0 rgba(42,30,18,.12)`，硬边不模糊，像纸叠在纸上 |
| 朱印 | 轻微套印失准：印相对卡片旋转 -4°、错位 2px，制造手盖的「没对准」 |
| 花边 | 木刻回纹边用 `repeating-linear-gradient` 刻出，边角一圈碎口把 canvas 底色透出来 |

**禁 backdrop-filter，禁动画化阴影 / text-shadow**。要「浮」就用硬 offset 常亮阴影，滚动不重绘、不掉帧。

## Shapes

| token | 值 | 用途 |
|---|---|---|
| none | 0 | 过渡页 / 封面，硬边如裁纸刀 |
| sm | 3 | 日页、数据块、宜标，几乎不倒角，保刻版方正 |
| md | 6 | 主次按钮，像一枚压上的木牌 |
| lg | 10 | 金句暗页的内框，微微收角 |
| pill | 9999 | 节气圆牌、圆形朱印、刻痕分隔 |

图片走**回纹花边裁切**：主图外框是一圈木刻回纹（meander 万字锦），四角刻碎口。木刻纹样（缠枝、莲花、云头、节气物候）永远单色红或绿描线，绝不用照片级渲染，保刻痕感。

## Components

- **nav-bar** — 羊皮纸底，品牌字用 Fraunces heading，底部一道 `divider-rule` 刻痕线收口。左品牌右导航，不居中。
- **button-primary** — 民间红底奶油字，rounded md，像一枚盖上去的朱牌，hover 时 offset 阴影加深 1px（不做位移动画）。
- **button-secondary** — 松绿底奶油字，rounded md，「忌」的守色也能当次动作。
- **solar-term-badge** — 米纸底陈褐字胶囊，节气眉批（「立夏 · 万物并秀」），字距 +3。
- **tag-yi** — 民间红小标，宜事标签（「宜 · 开市」），盖在日页当日项左侧。红底奶油字 4.9:1。
- **card-dayleaf** — 通书日页卡（签名件）：米纸面 + 四周木刻回纹花边 + 右上角一枚 -4° 歪的朱印，内含公历农历双列 + 宜忌两栏。标题 heading，正文 body。
- **ledger-row** — 宜忌一行：羊皮纸底，左「宜」右「忌」双栏，宜项挂红小标、忌项挂绿小标，行间一道刻痕线。
- **stat-block** — 物候计数块：IBM Plex Mono 大等宽数字（墨色）+ caption 单位（如「第 47 候」），下方刻痕线收口。
- **meta-label** — 陈褐小注（农历日期、批次号、物候候应），像通书页脚的小字。
- **divider-rule** — 刻痕分隔，1px 线，节与节之间的沟标。
- **footer** — 整块木刻墨底，奶油字，像日页翻到最后压在深色底板上，收在这道地脚线上。

## Presentation System

做成 16:9 演示时，对齐 HeiGe-PPT 的**一页一句话 / 黄金三秒 / 视觉锤**。

**视觉锤**：木刻回纹花边框 + 一枚 -4° 歪的红朱印 + 眉头一行拉开字距的节气小标。三样只要出现一样，三秒内就认出「这是民历那套」。

- **封面 slide-cover**：羊皮纸满屏，上下两道木刻回纹花边横带夹住画面，一句 Fraunces 巨号宣言左对齐压在下三分之一，右上角一枚歪着的红朱印，眉头一行节气小标。黄金三秒立住「老黄历」的气。
- **过渡页 slide-section-divider**：整屏民间红，超大 Fraunces 章节号（壹 / 贰 或 01 / 02）盖在正中，号外套一圈奶油色回纹花边，一侧竖排当日节气 + 一枚奶油朱印。硬边 none，红得像撕开的封面。
- **数据页 slide-stat-hero**：羊皮纸底，一个 IBM Plex Mono 的墨色大等宽数字占据视觉高点（公历农历双列对齐），松绿只做数字下方一道短守线。一屏一个数，别堆。
- **金句页 slide-quote**：木刻墨底暗页（掌灯夜读），一句 Fraunces 奶油引言占屏，内框微收 lg 角，左下一枚红引号朱印。整场里唯一的暗页，给节奏一个深呼吸。
- **收尾页 slide-closing**：回到松绿整屏（「忌」的守色收场，沉得住），一句行动号召 + 一枚奶油 CTA 印，下方一道回纹花边地脚，收得干脆，像合上一本通书。

节奏：封面(松) → 数据(密) → 金句·暗页(松) → 宜忌清单(密) → 收尾(松)，节气交替，绝不匀速。

## Signature Moment

换个模板绝对做不出来的两个签名时刻，写死：

- **UI 签名 · 通书日页卡（宜忌日历）**：卡片四边是真刻出来的木刻回纹花边（`repeating-linear-gradient` 走出万字锦骨、边角碎口把羊皮纸底透出），卡面正中公历大数字与农历「四月初九 · 立夏」等宽双列对齐，下半张分「宜」「忌」两栏，宜项挂民间红小标、忌项挂松绿小标，右上角压一枚 -4° 歪、错位 2px 的「通书堂印」红朱印，套印故意没对准。整张卡像从墙上黄历撕下来的一页，不是一块 SaaS 面板。
- **Deck 签名 · 节气过场页**：过渡页整屏民间红，一侧竖排当日节气二字（立夏 / 霜降），字距拉到刻在梁上；正中超大 Fraunces 章节号套一圈出血到画面外的奶油回纹花边框，右下一枚奶油朱印盖住页角，把整页压成一张寄出的节气帖。红底、竖节气、歪朱印三件套一出，这页只可能是民历。

## Do's and Don'ts

**Do**
- 红绿各归各位：红管「宜」与主动，绿管「忌」与页边，同框只让一个当家。
- 日期一律 IBM Plex Mono 等宽，公历农历双列对齐才是黄历的骨。
- 朱印一律歪 -4°、错位 2px，手盖的失准就是灵魂。
- 木刻纹样单色描线（红或绿），保刻痕感。
- 节气眉批字距拉到 +3，像刻在门楣上的横批。

**Don't**
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及全家桶），那是 AI 界面的身份证，和老黄历毫无关系。
- **不做居中卡片三件套**（一标题 + 一灰副标 + 三等宽圆角卡整页复读），这套走通书翻页错落 + 宜忌双栏 + 左对齐。
- **中文不用日文字体**渲染（Mochiy / Zen Maru 等），简体缺字变豆腐，中文只走霞鹜文楷 / Noto Serif SC / 思源系。
- **不动画化阴影 / text-shadow**，回纹与套印都是静态压印，滚动不掉帧。
- 不拿红字绿字压羊皮纸浅底（隐形字），红绿只做背景配奶油字。
- 不用照片级渲染的物候图，会杀掉整套的木刻手作感。

## Responsive Behavior

| 断点 | 编排 |
|---|---|
| ≥1120px | 12 列，通书左右两页错落，装订天头地脚，回纹骨线可见，宜忌并排双栏 |
| 768–1119px | 8 列，日页两列，回纹花边保留，朱印缩到角标，宜忌仍双栏 |
| ≤767px | 单列纵向历书：日页顺序码放，宜忌由并排双栏折成上宜下忌两段，过渡页章节号缩到 40px 但回纹框保留，骨线转为整屏横向节气沟 |

移动端是**把通书重新装订成巾箱小本**，不是把桌面版等比缩小。封面巨号标题在窄屏按最长行收字号（`clamp()`），回纹花边的刻齿间距随宽度重算，任何屏宽零孤字、零横向溢出（`scrollWidth == clientWidth`）。所有动画可被 `prefers-reduced-motion: reduce` 一键关停。

## Anti-Slop Pledge

抹掉 Tongshu 这个名字，这套仍一眼是人手刻出来的：回纹花边是真刻的碎口，朱印是真歪的，红只管「宜」、绿只管「忌」，公历农历是等宽双列对齐不是随便码的数字。它闻起来像羊皮纸和松烟墨，像墙上撕下来的一张老黄历，不像流水线吐出来的又一个圆角卡片模板。

Signed, HeiGe-Design.
