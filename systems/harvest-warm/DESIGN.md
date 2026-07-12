---
version: alpha
name: Croftmark-design-system
description: >-
  Croftmark is a woodcut-warm system for organic agriculture, farm-to-table and
  market brands. Earth-brown ink presses onto a kraft-cream field, wheat-gold
  stamps the harvest, deep leaf-green lines the margins. Fraunces cuts old
  seed-catalogue serifs against rounded Nunito, so headlines read carved and copy
  reads hand-warmed. The signature is the perforated stamp edge and hand-set
  produce label: every card and cover looks like a crate stencil pressed onto
  paper, never a stock SaaS panel.

colors:
  primary: "#8a5a2b"       # earth brown / 土棕 · tilled-soil ink, the workhorse dark
  on-primary: "#f9f3e2"    # warm cream set on brown fields
  ink: "#2e2114"           # dark bark, body text (never pure black)
  canvas: "#f4ebd9"        # kraft cream, the paper the whole system is printed on
  surface: "#fbf5e7"       # linen card, one shade above canvas
  muted: "#71603f"         # aged-twine brown for secondary text
  hairline: "#d8c7a3"      # 1px kraft stitch line
  accent: "#e0a83b"        # wheat gold / 麦金 · the harvest stamp, ink-on-gold only
  leaf: "#4c6a2c"          # deep field green / 叶绿 · fresh-cut margin, cream-on-green

typography:
  display-xl:
    fontFamily: '"Fraunces", "Georgia", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -1.6px
  display-lg:
    fontFamily: '"Fraunces", "Georgia", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.5px
  heading:
    fontFamily: '"Nunito", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 22px
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: -0.2px
  body:
    fontFamily: '"Nunito", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px
  numeral:
    fontFamily: '"Fraunces", "Georgia", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 76px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -2px
  button:
    fontFamily: '"Nunito", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 15px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: 0.4px
  caption:
    fontFamily: '"Nunito", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: '"Nunito", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: 2.4px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 14px
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
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  badge-harvest:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  tag-fresh:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  card-crate:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  feature-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "{spacing.md}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.numeral}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  meta-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  seal-stamp:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  divider-stitch:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
  footer:
    backgroundColor: "{colors.primary}"
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
    textColor: "{colors.primary}"
    typography: "{typography.numeral}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
---

# Croftmark · 丰收

一套给土地做的设计系统。它不像软件，像一张压在牛皮纸上的旧种子目录：油墨略微失准，边缘打着邮票齿孔，角上盖着一枚手压的产地印章。做有机农产、农场直供、周末市集的品牌，用它。

## Overview

Croftmark 的气场来自**印刷厂而非设计软件**。整套系统假设自己被印在一张 kraft 牛皮纸上，所有元素都是压印上去的：标题是刻出来的，标签是盖上去的，分隔线是缝上去的。

主色 `#8a5a2b` 土棕承担两个角色。第一它是**油墨**：正文之外所有"被压印"的深色块（页脚、过渡页、按钮）都是这一坨翻耕过的土。第二它是**地平线**：页面底部那道深棕带，是每一屏的地面，内容长在它上面。

字体签名是一次**刻与揉的对撞**。标题走 Fraunces，老式种子目录里那种高对比、微微歪扭的衬线，像木刻刀在梨木上走出来的；正文走 Nunito，圆终端、暖，像被手摩挲过。两者一硬一软，刚好是"土地"和"作物"的关系。

节奏是**田垄式**的：一垄密（信息、数据、清单），一垄松（一句金句、一片留白、一枚印章），交替往下走，绝不从头到尾一个密度。

## Colors

三色配方，克制到只有一主两辅，节奏靠版式不靠堆色。

### Brand & Accent
- `#8a5a2b` **土棕 primary** — 翻耕土的深色，全系统的油墨。用作页脚、过渡页、主按钮、大数字。它在 kraft 底上是 4.96:1，够格当强调文字，也够沉当整块背景。
- `#e0a83b` **麦金 accent** — 成熟麦穗的金。它偏亮，**只做背景配深字**（丰收徽章、CTA 印章），绝不拿金字压浅底（金压米是 1.8:1 的隐形字）。
- `#4c6a2c` **叶绿 leaf** — 深田绿，比嫩叶更沉，为的是能背奶油色文字（6.3:1）。用作"现摘"绿标、齿孔框描线、木刻插画的线条墨色。

### Surface
- `#f4ebd9` **canvas** — kraft 牛皮纸，全系统印在它上面。
- `#fbf5e7` **surface** — 亚麻卡面，比 canvas 高一阶，卡片浮起半毫米。
- `#d8c7a3` **hairline** — 缝线色，做 1px 分隔和齿孔虚线。

### Text
- `#2e2114` **ink** — 深树皮色正文，不用纯黑（纯黑在暖纸上像塑料）。在 kraft 上 13:1。
- `#71603f` **muted** — 陈麻绳棕，做次要文字、图注、日期戳。在 surface 上 5.6:1。
- `#f9f3e2` **on-primary** — 压在土棕上的暖奶油字，5.3:1。

节奏原则：**一屏最多让金色出现一次**。金是丰收的重音，出现两次就贬值。绿永远在边缘（描线、标签、图注），不进主场。

## Typography

### Font Family
- **展示 / 数字：Fraunces** — 老式衬线 display，带光学尺寸的农书气。中文兜底 `"Noto Serif SC", "Songti SC", "STSong", serif`，断网也是干净宋体不塌成 Times。
- **标题 / 正文 / 按钮：Nunito** — 圆终端人文无衬线，暖。中文兜底 `"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`。
- **中文铁律**：能承载中文的两条字栈末尾都挂了系统兜底，简体永不缺字。**中文绝不用日文字体渲染**（Mochiy / Zen Maru 那一挂），简体会缺字变豆腐。

### Hierarchy
| role | family | size / weight | 用途 |
|---|---|---|---|
| display-xl | Fraunces | 64 / 800 | 封面主宣言，一屏一句 |
| display-lg | Fraunces | 40 / 700 | 过渡页 / 金句 / 收尾 |
| numeral | Fraunces | 76 / 800 | 收成大数字（老式数字最美） |
| heading | Nunito | 22 / 800 | 卡片标题、品牌字 |
| body | Nunito | 17 / 400 | 正文，行高 1.7 给它喘气 |
| button | Nunito | 15 / 800 | 按钮，字距 +0.4 |
| caption | Nunito | 13 / 500 | 图注、日期戳 |
| eyebrow | Nunito | 12 / 800 | 盖章式小标签，字距 +2.4 全大写 |

### Principles
- **最大字与正文 ≥ 1:4**：numeral 76 对 body 17，敢大到有点过分。
- **数字用 Fraunces 的老式数字**（oldstyle figures），"1,240 亩""340 农户"在种子目录里就该是这个样子，比等宽 tabular 有温度。
- **eyebrow 永远盖章式**：全大写 + 字距 2.4，读起来像被橡皮章压上去的一行小字。
- 手动断行标题按最长行收字号，配 `text-wrap:balance`，窄屏 ≤390px 不出孤字。中文限宽用 `em` 不用 `ch`。

## Layout

### Spacing
4 / 8 / 16 / 24 / 40 / 80 的六阶田垄。section 80px 是垄与垄之间的沟，模块之间必须有这道沟，不许挤在一起。

### Grid & Container
- 桌面 12 列，gutter 24，最大内容宽 1120px，两侧留 kraft 边像种子目录的装订留白。
- **裸露的缝线网格**：列与列之间偶尔露一道 `#d8c7a3` 缝线，提醒你这是印出来的，不是渲染的。
- 卡片按**板条箱**排列：不追求等高等宽，允许一大两小、错落，像市集摊位上码的果箱。

### Whitespace
留白是**垄沟不是填充**。大留白只出现在模块之间（那道 80px 的沟）和封面四周（装订边），模块内部反而信息密实。均匀撒白 = AI slop，这里拒绝。

## Elevation & Depth

深度靠**压印和纸感**，不靠悬浮阴影。

| 层 | 手法 |
|---|---|
| 纸底 | 静态 kraft 颗粒（SVG feTurbulence 一次性铺底，不动画） |
| 卡片 | 极浅 offset 阴影 `2px 3px 0 rgba(46,33,20,.10)`，硬边不模糊，像纸叠在纸上 |
| 印章 | 轻微套印失准：印章相对卡片旋转 -3°、错位 2px，制造手盖的"没对准" |
| 齿孔 | 卡片边缘的邮票齿孔用 `radial-gradient` 打洞，把 canvas 底色透出来 |

**禁 backdrop-filter，禁动画化阴影**。要"浮"就用硬 offset 常亮阴影，滚动不重绘不掉帧。

## Shapes

| token | 值 | 用途 |
|---|---|---|
| none | 0 | 过渡页 / 封面，硬边如裁纸刀 |
| sm | 4 | 绿标、二级按钮，微倒角 |
| md | 8 | 主按钮，像贴纸标签 |
| lg | 14 | 板条箱卡片、数据块 |
| pill | 9999 | 丰收徽章、圆形产地印章 |

图片走**邮票裁切**：主图外框是一圈齿孔虚线，四角切成邮票钝角。木刻插画（麦穗、萝卜、鸡、篮子）永远单色土棕或叶绿描线，绝不用照片级渲染，保持刻痕感。

## Components

- **nav-bar** — kraft 底，品牌字用 Fraunces heading，底部一道缝线 `divider-stitch` 收口。左品牌右导航，不居中。
- **button-primary** — 土棕底奶油字，rounded md，像一枚压上去的木牌，hover 时 offset 阴影加深 1px（不做位移动画）。
- **button-secondary** — 亚麻底深字，rounded sm，描一圈缝线边。
- **badge-harvest** — 麦金底深字胶囊，全大写盖章文案（"当季 / IN SEASON"）。金 + 深字 7.3:1。
- **tag-fresh** — 深绿底奶油字小标，"现摘 / FRESH-CUT"，盖在图片左上角，套印失准 -3°。
- **card-crate** — 板条箱卡：亚麻面 + 齿孔边 + 右上角一枚旋转产地印。标题 heading，正文 body。
- **stat-block** — 收成数据块：Fraunces 大数字（土棕）+ caption 单位，下方缝线。
- **meta-label** — 陈麻绳色小注（采收日期、批次号），像种子袋背面的印章日期。
- **seal-stamp** — 圆形产地印：canvas 底、土棕字、pill 圆框，外圈叶绿描线，永远歪 -3° 盖着。
- **divider-stitch** — 缝线分隔，1px 虚线，模块之间的垄沟标记。
- **footer** — 整块土棕地面带，奶油字，像内容长在土里，收在页脚这道地平线上。

## Presentation System

做成 16:9 演示时，对齐 HeiGe-PPT 的**一页一句话 / 黄金三秒 / 视觉锤**。

**视觉锤**：邮票齿孔框 + 单色木刻农物插画（麦穗 / 萝卜 / 篮子）+ kraft 颗粒底。三样只要出现一样，三秒内就认出"这是丰收那套"。

- **封面 slide-cover**：kraft 满屏，一句 Fraunces 巨号宣言左对齐压在下三分之一，右上角一枚歪着的产地圆印。黄金三秒立住"土地感"。
- **过渡页 slide-section-divider**：整屏土棕地面，超大 Fraunces 章节号（01 / 02）盖在正中，号外套一圈出血的齿孔框，顶部一排邮戳取消线做进度刻度。硬边 none。
- **数据页 slide-stat-hero**：kraft 底，一个 76px+ 的土棕老式大数字占据视觉高点，麦金只做数字下方一道短重音线。一屏一个数，别堆。
- **金句页 slide-quote**：亚麻底，一句 Fraunces 引言占屏，左侧一枚叶绿木刻引号章。留白给它喘。
- **收尾页 slide-closing**：回到土棕地面，一句行动号召 + 一枚麦金 CTA 印章，收得干脆，像把最后一箱货码上车。

节奏：封面(松) → 数据(密) → 金句(松) → 清单(密) → 收尾(松)，田垄交替，绝不匀速。

## Signature Moment

换个模板绝对做不出来的两个签名时刻，写死：

- **UI 签名 · 邮票齿孔板条箱卡**：卡片四边是真打了齿孔的邮票边（`radial-gradient` 把 canvas 底色打成一圈半圆缺口），右上角压着一枚 -3° 歪、错位 2px 的"产地直供 / FARM PRESSED"叶绿橡皮章，套印故意没对准。整张卡像从市集果箱上撕下来的一张贴标，不是一块 SaaS 面板。
- **Deck 签名 · 丰收计数邮戳过渡页**：过渡页顶部一排随章节推进逐格盖实的木刻麦穗邮戳（像明信片上的邮政取消线），下方超大 Fraunces 章节号嵌在一个出血到画面外的齿孔邮票框里，土棕地面把整页压成一张寄出的包裹单。

## Do's and Don'ts

**Do**
- 一屏只让麦金出现一次，把它当丰收的重音。
- 数字用 Fraunces 老式数字，比等宽更有种子目录的温度。
- 印章一律歪 -3°、错位 2px，手盖的失准就是灵魂。
- 木刻插画单色描线（土棕或叶绿），保刻痕感。
- 板条箱式错落排卡，允许一大两小。

**Don't**
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及全家桶），那是 AI 界面的身份证，和土地毫无关系。
- **不做居中卡片三件套**（一标题 + 一灰副标 + 三等宽圆角卡整页复读），这套走板条箱错落 + 左对齐。
- **中文不用日文字体**渲染（Mochiy / Zen Maru 等），简体缺字变豆腐，中文只走 Noto Serif SC / Noto Sans SC / 思源系。
- **不动画化阴影 / text-shadow**，齿孔和套印都是静态压印，滚动不掉帧。
- 不拿麦金金字压 kraft 浅底（1.8:1 隐形字），金只做背景配深字。
- 不用照片级渲染的农物图，会杀掉整套的木刻手作感。

## Responsive Behavior

| 断点 | 编排 |
|---|---|
| ≥1120px | 12 列，板条箱错落，装订留白，缝线网格可见 |
| 768–1119px | 8 列，卡片两列，齿孔边保留，印章缩到角标 |
| ≤767px | 单列纵向种子目录：卡片顺序码放，过渡页章节号缩到 40px 但齿孔框保留，缝线转为整屏横向垄沟 |

移动端是**把种子目录重新装订成小开本**，不是把桌面版等比缩小。封面巨号标题在窄屏按最长行收字号（`clamp()`），齿孔间距随宽度重算，任何屏宽零孤字、零横向溢出。所有动画可被 `prefers-reduced-motion: reduce` 一键关停。

## Anti-Slop Pledge

抹掉 Croftmark 这个名字，这套仍一眼是人手做的：邮票齿孔是真打的洞，产地印是真歪的，麦金一屏只响一次，大数字是老式衬线不是等宽。它闻起来像牛皮纸和油墨，不像流水线吐出来的又一个圆角卡片模板。

Signed, HeiGe-Design.
