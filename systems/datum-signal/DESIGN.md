---
version: alpha
name: DatumSignal-design-system
description: >-
  Datum Signal is a Swiss-disciplined analytics system for BI dashboards and
  reporting products. Near-white canvas and near-black ink carry all structure;
  a single Signal Cobalt lights only the one number that matters, while tabular
  monospace figures and delta green/red report change. Strict baseline grid,
  hairline dividers, pixel-true tables, near-square corners. Hierarchy is built
  from size and spacing, never decoration. Signature: one immaculate chart with
  a single lit datum, and a decimal-locked stat hero where every digit snaps to
  the grid.

colors:
  primary: "#1f4dff"
  on-primary: "#ffffff"
  ink: "#15171c"
  canvas: "#fbfbfa"
  surface: "#ffffff"
  muted: "#565c65"
  hairline: "#e6e6e4"
  up: "#15803d"
  down: "#c62828"

typography:
  display-xl:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -1.6px
  display-lg:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.8px
  heading:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.2px
  body:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  data-xl:
    fontFamily: '"IBM Plex Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 88px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -2px
  data-lg:
    fontFamily: '"IBM Plex Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -1px
  mono:
    fontFamily: '"IBM Plex Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  button:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.2px
  caption:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0.1px
  eyebrow:
    fontFamily: '"IBM Plex Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 2px

rounded:
  none: 0px
  sm: 3px
  md: 10px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    padding: "{spacing.md} {spacing.xl}"
  divider:
    backgroundColor: "{colors.hairline}"
    height: 1px
  kicker:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.xs} 0"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.data-lg}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  field-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.xs} 0"
  data-table-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    padding: "{spacing.sm} {spacing.md}"
  delta-up:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.up}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  delta-down:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.down}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.xl}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.data-xl}"
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
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Datum Signal · 数点

一套给分析仪表盘、BI 和报表产品用的瑞士纪律设计系统。它的气质是**克制的发言**：整块屏幕保持沉默，只在真正重要的那一个数上抬高音量。结构全部交给近白与墨黑，尺寸和间距分层级，颜色只留一句话的份额。数字全部落在等宽 tabular 字面上，小数点像被磁铁吸住一样对齐；涨用绿、跌用红，变化自己报数。

---

## Overview

Datum Signal 把一张仪表盘拆成三种声部，各就各位，绝不抢戏：

- **底噪（近白 / 墨黑 / hairline）** 承载所有骨架。近白 canvas `#fbfbfa` 不是纯白，避免屏幕发死光；墨黑 ink `#15171c` 不是纯黑，长时间读表不刺眼。分隔全靠 1px hairline，不靠色块。
- **一句发言（Signal Cobalt `#1f4dff`）** 是全系统唯一的强调色。它一次只点亮一样东西：图表里唯一关键的那个数据点、表格里此刻要看的那一格、KPI 卡上此刻要盯的那个值。多点亮一处，它就贬值一分。
- **变化的报数（delta 绿 `#15803d` / 红 `#c62828`）** 是语义色，不是装饰色。它们只出现在同比、环比、涨跌箭头上，永远和一个 tabular 数字绑定。

字体签名是**无衬线做话、等宽做数**。Inter 讲结构与标题，IBM Plex Mono 承载每一个会被人逐位核对的数字。整体节奏靠严格的 8px 基线网格和大留白撑开，密度只在数据密集区（表格、KPI 墙）拉满，其余处一律留白呼吸。

**主色角色**：Signal Cobalt 是聚光灯，不是背景光。canvas 与 ink 是舞台和台词，cobalt 是那束打在主角脸上的光。

---

## Colors

### Brand & Signal

| Token | Hex | 角色 |
|---|---|---|
| `primary` | `#1f4dff` | Signal Cobalt。全系统唯一强调色，只点亮关键数、关键点、主行动。绝不做背景、绝不做渐变。 |
| `on-primary` | `#ffffff` | cobalt 面上的文字，纯白。 |

Signal Cobalt 是一支硬电光的群青，纯蓝无紫，和 AI 界面那套淡紫过渡蓝毫无血缘。它的存在感来自饱和度，不来自面积，所以永远小面积、高对比地用。

### Surface

| Token | Hex | 角色 |
|---|---|---|
| `canvas` | `#fbfbfa` | 页面底色，暖向近白。比纯白低半档，卡片浮上来时不用投影就有层次。 |
| `surface` | `#ffffff` | 卡片 / 表格 / 面板底，纯白。落在暖近白 canvas 上自然抬升。 |
| `hairline` | `#e6e6e4` | 1px 分隔线与边框。整套系统的分层主力，替代阴影。 |

### Text

| Token | Hex | 角色 |
|---|---|---|
| `ink` | `#15171c` | 正文与数据主色，近黑。对比度极高，表格逐位可读。 |
| `muted` | `#565c65` | 次要文字：字段名、单位、脚注、坐标轴标签。仍满足 AA 正文对比。 |

### Semantic（Delta）

| Token | Hex | 角色 |
|---|---|---|
| `up` | `#15803d` | 涨 / 正向 delta。深绿，白底上对比 5.0:1，配 ▲ 与 tabular 百分比。 |
| `down` | `#c62828` | 跌 / 负向 delta。深红，白底上对比 5.5:1，配 ▼ 与 tabular 百分比。 |

绿红只做涨跌语义，从不客串强调色或装饰色。要「重要」用 cobalt，要「变化方向」才用绿红，两套语言不混。

**对比度自检**（均 ≥ 4.5:1）：cobalt/白 5.9、cobalt/近白 5.7、ink/近白 17+、muted/白 6.7、up/白 5.0、down/白 5.5、canvas/ink（footer 反白）17+。

---

## Typography

### Font Family

- **无衬线（结构与话）**：`"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`
- **等宽（所有数字与代码级标注）**：`"IBM Plex Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace`

两条字体栈末尾都压了 `Noto Sans SC / PingFang SC` 系统兜底，webfont 加载失败（`fonts.googleapis.com` 被墙或超时）时中文不塌成豆腐。拉丁栈也补了 `Helvetica Neue / Arial`，断网时不塌成 Times。

**中文铁律**：中文一律走 Noto Sans SC / PingFang SC，**绝不用任何日文字体（Mochiy / Zen Maru 等）渲染中文**，简体会缺字变异体。等宽栈里中文只出现在极少数标注，同样兜到 Noto Sans SC，宁可略宽，绝不 tofu。

**tabular 铁律**：所有数字必须用等宽 tabular figures（`font-variant-numeric: tabular-nums`）。这是本系统的命门 —— 表格上下两行、KPI 前后两值、hero 数与它的 delta，个位对个位、小数点对小数点，逐位可核。比例字体会让数字跳动，本系统一律禁用比例数字。

### Hierarchy

| Role | Font | Size | Weight | 用途 |
|---|---|---|---|---|
| `display-xl` | Inter | 64 | 700 | 演示封面主句 |
| `display-lg` | Inter | 40 | 700 | 过渡页 / 金句页 / 收尾页大字 |
| `heading` | Inter | 22 | 600 | 卡片标题、导航品牌、区块标题 |
| `body` | Inter | 16 | 400 | 正文、说明、图注段落 |
| `data-xl` | IBM Plex Mono | 88 | 500 | 数据英雄页的巨型 tabular 数字 |
| `data-lg` | IBM Plex Mono | 40 | 500 | KPI 卡主数值 |
| `mono` | IBM Plex Mono | 15 | 400 | 表格单元格、delta、坐标轴数值 |
| `button` | Inter | 14 | 600 | 按钮 |
| `caption` | Inter | 13 | 500 | 字段名、单位、脚注 |
| `eyebrow` | IBM Plex Mono | 12 | 600 | kicker 眉标，全大写 +2px 字距 |

### Principles

- 层级用**尺寸**拉开，不用颜色。除强调数外，96% 的文字是 ink 或 muted 两档。
- display 收紧字距（-1.6 至 -0.8px），数据字更收（-2px），让巨数成块；正文与 mono 字距归零，保读性。
- eyebrow 用等宽 +2px 字距全大写，做仪表盘那种冷静的分区标签。
- 最大字（data-xl 88）与正文（16）比值 5.5:1，对比够狠，主角立得住。

---

## Layout

### Spacing（8px 基线）

`xs 4 / sm 8 / md 16 / lg 24 / xl 40 / section 80`。所有垂直节奏是 8 的倍数，数据行、坐标轴刻度、卡片间距全部咬合到同一条基线网格上 —— 瑞士纪律的地基。

### Grid & Container

- 桌面主容器 `max-width: 1200px`，居中，两侧 40px 安全边。
- 12 列网格，`gutter: 24px`。KPI 墙常用 4/3 列，表格与图表整幅贯通。
- 仪表盘布局按**信息密度分区**：顶部一行 KPI（稀疏、留白多），中部主图表（一个视觉锤），下部数据表（密集、逐行 hairline）。密度自上而下递增，节奏自然成型。
- 所有元素对齐到像素，禁止半像素模糊。hairline 永远 1 物理像素实线。

### Whitespace 哲学

留白是仪表盘的**降噪层**，不是装饰。KPI 之间留大白让每个数字有独处空间；进入表格区密度骤升，制造「安静 → 信息密集 → 安静」的呼吸。留白服务节奏，不均匀撒满每条缝。

---

## Elevation & Depth

这是一套**平面系统**，层次靠材质对比而非投影堆叠。

| 层级 | 手法 |
|---|---|
| 0 底 | canvas `#fbfbfa` 暖近白 |
| 1 面 | surface `#ffffff` 纯白 + 1px hairline 边框，靠白度差自然浮起 |
| 2 焦点 | 关键卡 / 高亮行：hairline 换成 1px Signal Cobalt 描边，或左侧 3px cobalt 定位条 |
| 3 悬浮 | 仅下拉、tooltip 用一层极淡投影 `0 2px 8px rgba(21,23,28,.08)`，静态、不动画 |

**深度铁律**：不动画化任何 shadow（发光逐帧重绘极贵）；不用 `backdrop-filter`（滚动持续重绘），需要半透明就用纯色 + alpha；本系统是浅色，不做辉光。分层的真正主力永远是 hairline 和留白。

---

## Shapes

### Border Radius

`none 0 / sm 3 / md 10`。整体近方，瑞士精密感。按钮、delta 徽章走 3px（软化边角但不圆润），卡片走 10px（成块但不玩具化），图表与表格用 0（数据要方正，坐标要笔直）。**不设 pill**，胶囊形太软，和仪表盘的精密气质冲突。

### 图形与图片几何

- 图表严格直角坐标，网格线是 hairline，刻度对齐基线。
- 数据点用小实心方块或 4px 圆点，关键点放大到 8px 并点亮 cobalt。
- 面积图填充用 cobalt 的低透明度（`rgba(31,77,255,.08)`），线用 cobalt 实色，非高亮系列一律走灰阶。
- 图片（若有）走硬直角裁切，与网格严格对齐，绝不做有机 blob。

---

## Components

- **nav-bar** — canvas 底 + 底部 1px hairline，品牌走 heading。极简，无投影，滚动时 hairline 常驻。
- **kicker** — cobalt 眉标（等宽 +2px 全大写），标题上方的冷静分区标签。
- **button-primary** — Signal Cobalt 实底 + 白字，3px 圆角，全系统唯一的实色按钮。主行动一屏一个。
- **button-secondary** — 白底 + ink 字 + 1px hairline 描边，次级行动。
- **card-feature** — 白面 + hairline 边 + 10px 圆角，说明型内容。
- **stat-block** — KPI 卡：白面 + hairline 边，主数值走 data-lg（40px 等宽 tabular），字段名走 field-label，涨跌挂 delta 徽章。
- **field-label** — muted 字段名 / 单位，13px，仪表盘的低音部。
- **data-table-cell** — 表格单元格：ink 数字走 mono（tabular），行间 1px hairline 分隔，数值列右对齐到小数点。
- **delta-up / delta-down** — 涨跌徽章：绿 ▲ / 红 ▼ + tabular 百分比，3px 圆角，白底。方向自己报数。
- **footer** — 唯一反白区：ink 底 + 近白字 + 顶部 hairline，收束整页，制造深浅对比的结尾节拍。

---

## Presentation System

把 Datum Signal 摊平成 16:9 演示，纪律不变，节奏更狠。核心是**一页一句话 + 黄金三秒 + 视觉锤**，视觉锤永远是那个被 cobalt 点亮的数。

- **封面（slide-cover）** — canvas 底，display-xl 主句左对齐顶到网格，上方一行 cobalt kicker，右下角一条 cobalt hairline 定位。黄金三秒里，观众先看清这套是「数据、克制、精密」。
- **过渡页（slide-section-divider）** — 唯一的反白节拍：ink 满底 + 近白大号章节名 + 一个巨型 cobalt 章节号（01 / 02）。深色页把节奏顿一下，后面数据页更亮。
- **数据页（slide-stat-hero）** — 白底，一个 data-xl 巨型 tabular 数字占屏，小数点锁在垂直基准线，下方挂 delta。这是全 deck 的高潮屏，视觉锤就是这个数。
- **金句页（slide-quote）** — 白底，display-lg 一句话占屏，一句一屏，大量留白。不放任何数字，给眼睛降噪。
- **收尾页（slide-closing）** — 唯一的 cobalt 满底页 + 白字行动号召。整个 deck 一直克制，最后让强调色接管整屏，收得干脆有余味。

节奏骨架：**封面（立气质）→ 过渡反白（顿）→ 数据英雄（高潮）→ 金句（呼吸）→ 收尾满色（爆发收束）**。密度张弛清楚，绝不从头到尾一个调子。

---

## Signature Moment

换个模板绝对做不出来的两处签名时刻。

### UI 签名 · The Lit Datum（单点点亮）

一张折线 / 柱状图，**整条序列全用石墨灰 hairline 画**，坐标网格是真 1px hairline，全部咬合 8px 基线。图里只有**唯一一个关键数据点**被 Signal Cobalt 点亮：8px cobalt 实心点 + 一条 cobalt 垂直 hairline 从该点笔直落到坐标轴 + 一个等宽 tabular 数值标注贴着那条线回落，个位、小数点严丝合缝对齐到网格。整张图安静如降噪，只有一个数在发光。这就是「分析仪表盘的克制发言」—— 图表不喧哗，只为一个数抬高音量。这个效果依赖三件事同时成立：全灰底噪、单点 cobalt、tabular 数值锁网格，缺一件就散。

### Deck 签名 · The Decimal-Locked Hero（小数点锁定的数据英雄页）

数据英雄页上，一个 data-xl 巨型数字（如 `1,284.6`）用等宽 tabular figures 排出，**每一位数字落在等宽栅格的同一列上**；正下方它的 delta（`▲ +18.4%`）用同一套等宽字排出，且**当前值与 delta 的小数点锁定在同一条垂直基准线上**，个位对个位、小数对小数。背景极淡地裸露一层 8px 基线 hairline，让人看见数字是「摆」在网格上而非「飘」着的。其中恰好一处 —— 要么某一位数字、要么整个 delta —— 被 cobalt 或 delta 色点亮，其余保持 ink。没有真 tabular 数字和像素级基线网格，这一页假装不出来。

---

## Do's and Don'ts

### Do

- 一屏只点亮一个数。Signal Cobalt 是聚光灯，用在此刻最该看的那一个值上。
- 所有数字用等宽 tabular figures，右对齐到小数点，逐位可核。
- 分层优先用 hairline 和留白，其次才考虑白度差。
- 按信息密度编排：KPI 稀疏、图表居中做锤、表格密集，制造呼吸节奏。
- delta 绿红只做涨跌语义，永远绑定一个 tabular 数字和方向箭头。
- 对齐到物理像素，hairline 永远 1px 实线，坐标笔直。

### Don't

- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及全家桶）。本系统的蓝是硬电光群青，纯蓝无紫，且从不做背景渐变。
- **不做居中卡片三件套**（一句标题 + 一句灰副标 + 三个等宽圆角卡整页复读）。本系统左对齐 + 网格 + 密度分区。
- **中文绝不用日文字体渲染**（Mochiy / Zen Maru 等），一律 Noto Sans SC / PingFang SC 兜底。
- **不动画化阴影 / 辉光**，不用 `backdrop-filter`，发光类效果本系统一概不做。
- 不用 cobalt 做大面积背景或第二强调色，多点亮一处它就贬值一分。
- 不用比例数字排数据，不用胶囊圆角，不用 emoji 当数据图标。

---

## Responsive Behavior

移动端是**重新编排**，不是桌面缩一缩。数据密度必须为窄屏重新分配。

| 断点 | 布局 |
|---|---|
| ≥ 1200px | 12 列，KPI 4 列并排，主图表整幅，表格全字段 |
| 768–1199px | 8 列，KPI 2 列，图表整幅，表格保留主字段 + 横向滚动区 |
| < 768px | 单列，KPI 纵向堆叠（每张仍是完整 stat-block），图表重绘为窄屏版（减刻度、保留那个 lit datum），宽表格转成「每行一张卡」的键值对 |

折叠策略：

- **数据表** 在窄屏不横向硬压，转成逐记录卡片（字段名 field-label + 值 mono 右对齐），保住 tabular 对齐。或包进 `overflow-x:auto` 的独立滚动容器，页面主体绝不横向滚动。
- **标题** 用 `clamp()` 按最长行收字号，手动断行处 `white-space:nowrap` 锁整行，≤390px 也不出孤字、不溢出。
- **中文限宽** 用 `em` / `px`，绝不用 `ch`（`ch` 是拉丁 0 宽，会让中文提前折行出孤字）。
- 所有动画都能被 `@media (prefers-reduced-motion: reduce)` 关掉；无限动画只动 `transform / opacity`，收敛到一两个签名动效。

---

## Anti-Slop Pledge

把品牌名抹掉，这套依然一眼看得出是**有人认真对齐过每一个像素**的仪表盘系统：整屏克制的近白与墨黑，只有一个数被那束群青点亮；每个数字逐位落在等宽栅格上，小数点锁成一条竖线；分层全靠 hairline 和留白，没有一处随手糊上去的圆角阴影。它不是模板批量吐出来的「现代简约」，是一套为「让人一眼看懂一个数」而拧到极致的秩序。

—— Signed, **HeiGe-Design**. MIT.
