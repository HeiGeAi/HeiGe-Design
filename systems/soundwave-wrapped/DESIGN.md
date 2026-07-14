---
version: alpha
name: soundwave-design-system
description: Soundwave (声浪) is a maximalist year-in-review system for music and campaign recaps, loud on purpose. Fluorescent pink #FF2D95 leads while electric-yellow volt and cobalt blue clash on a concert near-black, deliberately dodging the purple-blue cliché. Anton condensed caps collide with Space Grotesk and Space Mono for a three-font, oversized-numeral personality. The signature is a transform-only equalizer bar row plus a full-bleed color-panel wrapped reveal where a giant number bursts in. One token set drives both a live interface and a 16:9 deck.

colors:
  primary: "#FF2D95"
  on-primary: "#140F14"
  ink: "#F7F4EC"
  canvas: "#0E0C14"
  surface: "#1B1826"
  muted: "#ADA8BC"
  hairline: "#2E2B3C"
  volt: "#FFE500"
  cobalt: "#1E4DFF"

typography:
  display-xl:
    fontFamily: 'Anton, "Archivo Black", Impact, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 120px
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: -1px
  display-lg:
    fontFamily: 'Anton, "Archivo Black", Impact, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 64px
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: -0.5px
  heading:
    fontFamily: 'Space Grotesk, Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.2px
  eyebrow:
    fontFamily: 'Space Mono, "JetBrains Mono", "Noto Sans SC", "PingFang SC", ui-monospace, monospace'
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 2.5px
  body:
    fontFamily: 'Inter, "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: 0px
  body-mono:
    fontFamily: 'Space Mono, "JetBrains Mono", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2px
  button:
    fontFamily: 'Space Grotesk, Inter, "Noto Sans SC", "PingFang SC", sans-serif'
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.4px
  caption:
    fontFamily: 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0.3px

rounded:
  none: 0px
  sm: 3px
  md: 6px
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
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  button-volt:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  tag-chip:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  data-collage-tile:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  equalizer-bars:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  hairline-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  # —— slide 演示组件（16:9，融合 HeiGe-PPT）——
  slide-cover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.on-primary}"
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
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# 声浪 Soundwave · Design System

> 一年的声音，摊开成一面会跳动的信息墙。Maximalist, loud, data-drunk. 这是给音乐年度盘点、活动战报、娱乐年报做的一套设定集：数字要大到冒犯，颜色要撞到打架，节奏要像副歌。署名 HeiGe-Design。

## Overview

声浪 是张扬极繁家族里最吵的那一套。它的气质是**数据狂欢**：把用户一年的收听、一场活动的战果，翻译成一堵满是巨型数字、彩色面板、跳动波形的信息墙，热闹、年轻、拒绝含蓄。

主色是荧光粉 `#FF2D95`，它只干两件事：一是当封面和收尾整版铺满的**能量底**，二是当行动按钮的**唯一焦点**。两个撞色辅助分工明确 —— 电黄 `#FFE500` 承载"高光数据"（那个最想让人截图的数字），电蓝 `#1E4DFF` 承载"分章与分类"（把信息墙切成板块）。三色一律高饱和平涂，绝不互相调和成渐变，更绝不滑向紫蓝俗套。中性靠一块 concert near-black `#0E0C14`，让霓虹三色在黑上炸开。

字体是**三体混搭**的故意打架：Anton 压缩黑体做占屏巨号（数字的主场），Space Grotesk 做有棱角的标题，Space Mono 做数据标签和 kicker。节奏靠彩色整版面板的轮转推进，一屏一个主角、一屏一种颜色，像专辑的曲目切换。

## Colors

### Brand & Accent
| Token | Hex | 角色 |
|---|---|---|
| `primary` | `#FF2D95` | 荧光粉。能量底 + 唯一 CTA 焦点，克制到只出现在封面 / 收尾 / 主按钮 |
| `volt` | `#FFE500` | 电黄。高光数据面板，那个要被截图的数字铺在它上面 |
| `cobalt` | `#1E4DFF` | 电蓝。分章面板与数据分类，把信息墙切板块。这是一支硬电蓝，不是紫蓝 |

三色互为撞色，永远平涂并置，永远不做互相过渡的渐变。

### Surface
| Token | Hex | 角色 |
|---|---|---|
| `canvas` | `#0E0C14` | Concert near-black，页面底，让霓虹三色炸开 |
| `surface` | `#1B1826` | 抬高的深色卡面，承载 stat / feature 卡 |
| `hairline` | `#2E2B3C` | 1px 分隔线与卡片描边，在黑上极低调 |

### Text
| Token | Hex | 角色 |
|---|---|---|
| `ink` | `#F7F4EC` | 骨白正文与标题，铺在深底上（17.7:1） |
| `on-primary` | `#140F14` | 富黑，铺在粉 / 黄这类亮面板上的文字 |
| `muted` | `#ADA8BC` | 次要文字、单位、脚注（surface 上 7.56:1） |

### Semantic
声浪没有传统的 up/down 语义色，它的语义压在三支撞色的**面板角色**上：粉=能量与召唤，黄=高光数据，蓝=分章与分类。读者靠颜色就知道这一屏是"喊话"还是"报数"。所有前景/背景配对均已过 WCAG AA：`on-primary` on `primary` 5.47:1，`on-primary` on `volt` 14.85:1，`ink` on `cobalt` 5.36:1，`ink` on `canvas` 17.7:1，`muted` on `surface` 7.56:1。

## Typography

### Font Family
三体故意打架，各司其职：
- **Display（巨号数字与标题）**：`Anton` 压缩黑体，专治占屏数字。拉丁字形由 Anton 渲染，中文自动落到 `Noto Sans SC` 的重字重，断网塌底到 `Archivo Black / Impact`，再到系统。
- **Heading（有棱角标题）**：`Space Grotesk`。
- **Body（正文）**：`Inter`。
- **Mono（数据标签 / kicker / 单位）**：`Space Mono`，等宽的怪脾气正好配数据狂欢。

**中文铁律**：每条 font stack 末尾都压 `"Noto Sans SC", "PingFang SC", "Microsoft YaHei"`（衬线场景用 `Noto Serif SC / Songti SC`）。**中文绝不用日文字体渲染**，简体会缺字变豆腐。webfont 放最前保设计，系统字体兜底保不崩。

### Hierarchy
| Role | Size | Weight | Line | Tracking | 用途 |
|---|---|---|---|---|---|
| display-xl | 120px | 800 | 0.92 | -1px | 封面标题、wrapped 巨号数字 |
| display-lg | 64px | 800 | 0.98 | -0.5px | 章号、stat 卡数字、金句 |
| heading | 30px | 700 | 1.12 | -0.2px | 卡片标题、板块名 |
| eyebrow | 13px | 700 | 1.2 | 2.5px | 全大写 kicker、导航、标签 |
| body | 17px | 400 | 1.62 | 0px | 正文段落 |
| body-mono | 15px | 400 | 1.5 | 0.2px | 数据标签、单位、脚注数字 |
| button | 15px | 700 | 1 | 0.4px | 按钮、收尾 CTA |
| caption | 13px | 500 | 1.45 | 0.3px | 脚注、图注 |

### Principles
- 最大字与正文对比 120:17 ≈ 7:1，远超 1:4。巨号就要大到有点过分。
- 三体混搭是设计，不是失手：一屏里 Anton 数字 + Space Grotesk 标题 + Space Mono 标签同时在场，靠字重和字距拉开层级。
- 数字永远用等宽或 Anton，绝不让金额 / 分钟数抖动。

## Layout

### Spacing
4 / 8 / 16 / 24 / 40 / 80 的六档尺度。密集堆叠是这套的性格，但堆叠里要有网格纪律 —— 挤，不等于乱。

### Grid & Container
- 桌面 12 栅格，信息墙用不规则跨列（3+5+4、6+6、8+4）制造拼贴错落，而不是三等分。
- 内容最大宽 1200px，但彩色面板一律**出血到视口边**，颜色顶到屏幕才够狂。
- 中文限宽用 `em / px`，绝不用 `ch`（`ch` 按拉丁 0 宽算，会让中文提前折行出孤字）。

### Whitespace
留白在这套里是稀缺品，只在两处出现：巨号数字四周的**呼吸区**，和彩色面板之间的**硬切黑缝**。信息墙可以挤，但主角数字周围必须空出来，否则狂欢变噪音。

## Elevation & Depth

| 层级 | 手法 |
|---|---|
| 底 | canvas 平铺，无阴影 |
| 卡片 | surface + 1px hairline 描边，靠色块而非投影抬起 |
| 强调 | 彩色面板直接压在黑底上，用**颜色的重量**制造层级 |
| 焦点 | 巨号数字 + 静态硬投影（offset 不模糊，贴纸感） |

深度靠**颜色权重和平面叠压**，不靠柔和阴影堆。装饰性深度就是"贴纸叠贴纸"的拼贴感：旋转 -3° 到 3° 的标签、错位压边的面板。**发光 / 阴影一律静态**，绝不逐帧动画化（发光重绘极贵）。不用 `backdrop-filter`。

## Shapes

### Border Radius
| Token | Value | 用途 |
|---|---|---|
| none | 0px | 彩色面板、stat 卡、slide 全部硬边 |
| sm | 3px | 波形条 |
| md | 6px | feature 卡 |
| lg | 14px | 数据拼贴块 |
| pill | 9999px | 按钮、贴纸标签 |

圆角是**故意的混用**：面板与卡片硬切（none/md），按钮与标签滚圆（pill）。硬边的板块 + 滚圆的贴纸并置，是这套拼贴语言的一部分，不是不统一。

### 图形 / 图片几何
图片走硬边满出血或方块裁切，叠上旋转的贴纸标签与波形条。绝不用柔角大圆卡把图裹成通用 SaaS 的样子。

## Imagery

图像在这套里是能量本身，密度高、出血狠、堆叠满，和极简派反着来。但满不等于乱，每一墙只留一个视觉主角。

| 层 | 处理 |
|---|---|
| 照片 | 硬边满出血或方块裁切，高饱和、高对比、演唱会现场感。叠上旋转的贴纸标签与波形条，绝不用柔角大圆卡把图裹成通用 SaaS 样子。人像可做三色分色 / 半调网点处理。 |
| 插画 | 平涂色块拼贴风，荧光粉 / 电黄 / 电蓝三色硬碰硬，几何切割、错位叠压。不用柔和渐变插画，不用拟物光影。 |
| 图标 | 粗描边或实心平涂，单色为主，命中焦点可染单一撞色。可轻微旋转当贴纸用，绝不多色小清新。 |
| 图表 | concert-black 底，三色平涂柱 / 块，Space Mono 等宽读数，网格用 `hairline` 极低调。一张图一个高潮数据，其余压 `muted`。 |
| 波形 | 签名图像元素，一排竖条三色平涂，靠 `transform: scaleY` 跳动。静态时也是最强的版式锚。 |
| 密度 | 高。信息墙允许挤、允许跨列拼贴、允许小角度旋转，但靠栅格纪律兜住，挤而不糊。 |

---

## Components

- **nav-bar** — canvas 底 + hairline 下边线，左品牌右 eyebrow 导航，克制不抢戏。
- **button-primary** — 荧光粉 pill，富黑字，全站唯一主焦点。
- **button-volt** — 电黄 pill，用于"看我的年度报告"这类高兴奋 CTA。
- **button-ghost** — 透明 pill + hairline 描边，次级动作。
- **tag-chip** — 电黄贴纸标签，全大写 mono，可旋转小角度，撒在信息墙上。
- **card-feature** — surface 卡 + hairline 描边，heading + body，承载文字型内容。
- **stat-block** — 硬边 surface 卡，display-lg 巨号（可染 volt / primary）+ body-mono 标签，信息墙的基本单元。
- **data-collage-tile** — 电蓝出血块，body-mono 数据 + 巨号，用来切分类板块。
- **equalizer-bars** — 签名组件，一排竖条以三色平涂，靠 `transform: scaleY` 跳动（见 Signature Moment）。
- **hairline-rule** — 1px `hairline` 细线，卡片描边与分节，在黑上极低调。
- **footer** — surface 底，muted 文字，署名与元信息。

slide 组件见下一节。

## Presentation System

声浪做成 16:9 演示时，是一张**彩色整版面板轮转**的专辑：一页一句话、黄金三秒、一记视觉锤。视觉锤永远是那个**占屏巨号数字 + 贯穿底边的波形基线**。

| 版式 | 组件 | 排法 |
|---|---|---|
| 封面 | `slide-cover` | 荧光粉出血整版，Anton 巨号标题压富黑字，底边一道波形。开场三秒立住"这是年度狂欢"。 |
| 过渡 | `slide-section-divider` | 电蓝出血整版，超大章号 `01 / 02`（volt）+ eyebrow 板块名。颜色一换观众就知道翻篇了。 |
| 数据 | `slide-stat-hero` | 电黄出血整版，一个巨号数字爆入 + Space Mono 单位。一页只报一个数，这是全场高潮。 |
| 金句 | `slide-quote` | 黑底整版，display-lg 一句歌词 / 一句结论，四周大留白呼吸。狂欢里的一次静场。 |
| 收尾 | `slide-closing` | 荧光粉出血整版，一句召唤 + button CTA + 波形收束。 |

节奏设计：粉 → 蓝 → 黄 → 黑 → 粉 的色块轮转本身就是 pacing。强数据页（黄）后面必跟一页金句黑场做张弛，不让观众从头嗨到尾变麻木。

## Signature Moment

**UI 签名时刻 · The Live Equalizer（活波形）**
主视觉下方一排 24 条竖直波形条，以荧光粉 / 电黄 / 电蓝三色交替平涂，锚定底边。它只靠 `transform: scaleY` 逐条起伏跳动（合成器友好、不重排、不重绘），像一段正在播放的声浪，给年度数据当"心跳"。hover 或滚动进场时活起来，到位后冻结成一段静态波形。`prefers-reduced-motion` 下直接给一段冻结波形，不跳。换个模板做不出这条"会呼吸的数据心跳"。

**Deck 签名时刻 · The Wrapped Reveal（爆数一屏）**
`slide-stat-hero` 上，电黄整版铺满，一个 Anton 巨号数字（如 `47,213`）以 scale + opacity 爆入，落在一条从左出血到右的冻结波形基线上，单位用 Space Mono 小字压角。一屏只有一个数字、一种颜色、一记锤 —— 黄金三秒里让人只记住这一个数。这是"年度盘点"最想让人截图转发的那一屏。

## Agent 配方卡

给 coding agent 直接抄的落地卡，数值精确，别自己换。

**速查色卡**
- Ink（正文）`#F7F4EC` · Muted `#ADA8BC` · Canvas（演唱会黑底）`#0E0C14` · Surface（面）`#1B1826` · Hairline `#2E2B3C`
- 三撞色：荧光粉 primary `#FF2D95` / 电黄 volt `#FFE500` / 电蓝 cobalt `#1E4DFF`，永远平涂不互调；富黑字 on-primary `#140F14`。
- 字体：巨号 display `Anton` / 标题·按钮 `Space Grotesk` / eyebrow·等宽 `Space Mono` / 正文 `Inter`。

1. **主按钮** — `#FF2D95` 填充，`#140F14` 字，Space Grotesk 15px weight 700，圆角 9999px，内边距 16px 40px。全站唯一主焦点。
2. **电黄按钮** — `#FFE500` 填充，`#140F14` 字，同规格。给「看我的年度报告」这类高兴奋 CTA。
3. **数据封面 / Hero** — `#0E0C14` 底，Anton 120px weight 800 巨号（可染 `#FFE500` 或 `#FF2D95`）压屏，身后一排三色波形竖条，一枚旋转电黄贴纸标签点缀。一屏一个数字主角。
4. **特性卡** — `#1B1826` 面，1px `#2E2B3C` 描边，圆角 6px，内边距 24px。标题 Space Grotesk 30px weight 700 `#F7F4EC`，正文 Inter 17px。
5. **数据拼贴块** — `#1E4DFF` 电蓝出血块，圆角 14px，Space Mono 等宽数据 + Anton 巨号 `#F7F4EC`，用来切分板块。
6. **贴纸标签** — `#FFE500` 电黄底，`#140F14` 全大写 mono 字，圆角 9999px，可旋转小角度撒在信息墙上。
7. **页脚** — `#1B1826` 面，`#ADA8BC` 字，署名与元信息，克制收尾。

---

## Do's and Don'ts

**Do**
- 让一个数字大到冒犯，四周留足呼吸，一屏一个主角。
- 三支撞色平涂并置，靠颜色重量和整版出血制造层级。
- 信息墙用不规则跨列拼贴，配旋转贴纸标签，挤而有网格纪律。
- 波形与阴影一律静态或只动 `transform`，`prefers-reduced-motion` 一键停。
- 每条字体栈压中文系统兜底，断网不塌。

**Don't**
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及其全家桶），三色永远平涂不互调。
- **不做居中卡片三件套**（标题 + 灰副标 + 三等宽圆角卡整页重复）。
- **中文绝不用日文字体**（Mochiy / Zen Maru 等）渲染，简体会缺字变豆腐。
- **不动画化阴影 / 发光**，不用 `backdrop-filter`，不挂常驻 rAF 循环。
- 别把巨号数字缩成温吞小字，那就丢了这套的全部气场。

## Responsive Behavior

| 断点 | 编排 |
|---|---|
| ≥1200px | 12 栅格信息墙，不规则跨列拼贴，波形 24 条 |
| 768–1199px | 收成 6 栅格，面板两两堆叠，波形降到 16 条 |
| ≤767px | 信息墙**重新编排**为纵向色块序列，一屏一面板一数字，波形降到 10 条 |

移动端是把信息墙**重新编排成竖向翻页的色块流**，不是把桌面拼贴等比缩小。巨号数字用 `clamp()` 控制，保证最长那行在 ≤390px 也放得下、不出孤字、不横向溢出。手动断行的标题每行锁 `nowrap`，按最长行收字号。

## 相邻风格

同属「张扬极繁」家族，按能量类型分岔：

- **`acg-stellar`（二次元星轨）**：同样高饱和撞色，但走二次元速度线加星爆，斜切分屏、冲刺感强。做 ACG / 游戏 / 年轻社区选它；做音乐 / 年度报告那种数据高潮留在声浪。
- **`neon-market`（霓虹夜市）**：霓虹招牌加夜市烟火气，暖、闹、市井。做餐饮 / 夜经济 / 市集选它；要演唱会级冷冽三色撞击留在这套。
- **`collage-riot`（拼贴暴动）**：剪贴报刊拼贴风，纸感、手撕边、复古暴动感。做潮流杂志 / 街头文化选它；要屏幕原生的荧光平涂和会跳的波形留在声浪。

**声浪自己最适合**：音乐年度报告、Spotify-Wrapped 式回顾、演唱会 / 音乐节、品牌 campaign 大促，凡是要一个数字炸场、有主角有高潮的场合。

---

## Anti-Slop Pledge

抹掉品牌名，这一页仍能一眼看出是用心做的：三支撞色平涂在 concert-black 上炸开，Anton 巨号压着一条会跳的波形，三体字故意打架却各归各位 —— 没有紫蓝渐变、没有居中三卡、没有 emoji 撑场。这是一套有主角、有高潮、有签名心跳的声浪，不是流水线吐出来的通用模板。
