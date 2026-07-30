---
version: alpha
name: NeonMarket-design-system
description: >-
  NEON MARKET is a maximalist night-market signage system. A deep-night canvas
  gets ignited by four neon accents: signage red, lantern amber, tube cyan and
  magenta, stacked dense and slightly askew like an alley of glowing signboards.
  Heavy Archivo Black meets a Monoton neon-tube script and Space Mono price
  tags. The signature move is a wall of self-glowing stall signs that ignite on
  load. No purple gradients, no centered card trio.

colors:
  primary: "#ff2e4d"
  on-primary: "#140b0d"
  ink: "#f7ede9"
  canvas: "#0d0b0f"
  surface: "#181419"
  muted: "#a89aa2"
  hairline: "#332b32"
  accent-cyan: "#22e6e6"
  accent-lantern: "#ffc21f"
  accent-pink: "#ff5cc8"

typography:
  display-xl:
    fontFamily: '"Archivo Black", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 76px
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: -1.5px
  display-neon:
    fontFamily: '"Monoton", "Ma Shan Zheng", "Noto Sans SC", "PingFang SC", cursive'
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.5px
  heading:
    fontFamily: '"Archivo", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 30px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.3px
  body:
    fontFamily: '"Archivo", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px
  body-mono:
    fontFamily: '"Space Mono", "JetBrains Mono", ui-monospace, monospace'
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0px
  button:
    fontFamily: '"Archivo", "Noto Sans SC", "PingFang SC", sans-serif'
    fontSize: 15px
    fontWeight: 800
    lineHeight: 1
    letterSpacing: 0.6px
  caption:
    fontFamily: '"Archivo", "Noto Sans SC", "PingFang SC", sans-serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: '"Space Mono", "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
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
  section: 88px

components:
  divider-hairline:
    backgroundColor: "{colors.hairline}"
    height: 1px
    width: 100%
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent-cyan}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.lg} {spacing.xl}"
  card-stall:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  menu-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  stat-price:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent-lantern}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  badge-neon:
    backgroundColor: "{colors.accent-pink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.xl}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent-lantern}"
    typography: "{typography.body-mono}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent-cyan}"
    typography: "{typography.display-neon}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent-pink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
---

# 霓虹夜市 · NEON MARKET

> 张扬极繁 Maximalist · slug `neon-market`
> 夜市街头的招牌轰炸。深夜底色被四道霓虹点着，红黄青粉挤在一条巷子里，谁都想被先看见。
> Signed HeiGe-Design · MIT · 无致谢。

## Overview

霓虹夜市把一整条夜市巷子的视觉密度压进一套设计系统。底色是潮湿的深夜 `#0d0b0f`，安静、几乎全黑，只为了让招牌亮得更狠。四种霓虹色轮流当主角：**signage red 招牌红**领跑，lantern amber 灯笼黄、tube cyan 电青、magenta 品红各占一片摊位，靠版式的挤压和轻微歪斜制造街头的热闹，而非靠均匀铺色。

主色 `#ff2e4d` 在这套里有两个身份：它是唯一的行动色（按钮、过渡页、关键锚点只认这一支红），也是招牌墙里那块最亮的灯管。字体走**招牌粗黑 + 手写霓虹管**的双轨：Archivo Black 顶住占屏大字的重量，Monoton 的双线灯管字负责那句会发光的狠话，Space Mono 把价目钉成一张张价签。中文全部落到思源黑体 900 与 PingFang 的系统兜底上，招牌该有的分量一个都不少。

节奏上它敢挤也敢空。信息墙密到贴脸，然后一整屏黑给你喘一口，再甩出一个占屏价格砸下来。这套的气场来自密度差，不来自颜色多。

## Colors

### Brand & Accent
| Token | Hex | 角色 |
|---|---|---|
| `primary` | `#ff2e4d` | 招牌红。唯一行动色 + 招牌墙主灯，克制使用，只点关键处。 |
| `accent-cyan` | `#22e6e6` | 电青灯管。次级按钮描边、金句页、冷色对撞。 |
| `accent-lantern` | `#ffc21f` | 灯笼黄。价目高亮、数据页巨型数字，暖场核心。 |
| `accent-pink` | `#ff5cc8` | 品红。贴纸徽章、收尾页余味，最年轻的一支。 |

四色互不融合，绝不做成一条渐变。它们是四块独立招牌，各自发各自的光。

### Surface
| Token | Hex | 角色 |
|---|---|---|
| `canvas` | `#0d0b0f` | 深夜底。近黑带一丝暖，让霓虹浮出来。 |
| `surface` | `#181419` | 摊位面板 / 卡片面，比底色亮一档。 |
| `hairline` | `#332b32` | 1px 巷影分隔线，收住密集信息。 |

### Text
| Token | Hex | 角色 |
|---|---|---|
| `ink` | `#f7ede9` | 正文暖白，不用纯白，像灯下的纸。 |
| `on-primary` | `#140b0d` | 招牌红 / 品红上的深墨字，扛住 5.3:1 对比。 |
| `muted` | `#a89aa2` | 次要文字，暗下去的招牌边角。 |

### 对比度自检（WCAG AA ≥ 4.5:1）
- `on-primary` on `primary` ≈ **5.3:1** ✓（红底深字，深字比白字更稳）
- `accent-cyan` on `surface` ≈ **12:1** ✓
- `accent-lantern` on `surface` ≈ **11.5:1** ✓
- `accent-lantern` on `canvas` ≈ **12.1:1** ✓
- `accent-pink` on `surface` ≈ **6.8:1** ✓
- `on-primary` on `accent-pink` ≈ **7.1:1** ✓
- `ink` on `canvas` ≈ **16.9:1** ✓ ｜ `muted` on `canvas` ≈ **7.3:1** ✓

所有带文字的组件都做过心算，没有一组踩在 4.5 线以下。

## Typography

### Font Family
- **招牌大字 display-xl**：`Archivo Black`，中文兜底 `Noto Sans SC / PingFang SC / Microsoft YaHei`，weight 900。用来砸占屏标题，重到像浇筑出来的。
- **霓虹灯管 display-neon**：`Monoton`（拉丁双线灯管字）→ `Ma Shan Zheng`（中文毛笔手写，承接"手写霓虹管"那一路）→ 系统黑体兜底。这是签名字面，只在最想让人记住的一句上用。
- **正文 / 数据**：`Archivo` 家族做 heading 与 body，`Space Mono` 做价目与序号。等宽数字是夜市的语言，一切价钱、编号、摊位号都走它。
- **kicker eyebrow**：`Space Mono` 大写 + 2.4px 字距，像摊位的营业执照编号。

**中文铁律**：`Ma Shan Zheng` 是中文毛笔字，非日文字体；本系统全程不使用 Mochiy / Zen Maru 等日文字体渲染中文，简体不会掉成豆腐块。所有能承载中文的字体栈末尾都压了 `Noto Sans SC / PingFang SC` 系统兜底，断网或 webfont 超时也能干净显示。

### Hierarchy
| Role | Size | Weight | 用途 |
|---|---|---|---|
| display-xl | 76px | 900 | 封面 / 收尾占屏大字，最大字与正文约 1:4.5 |
| display-neon | 56px | 400 | 金句页灯管字，签名时刻 |
| heading | 30px | 800 | 卡片标题、过渡页章节名 |
| body | 17px | 400 | 正文，行高 1.65 给密集信息留呼吸 |
| body-mono | 20px | 700 | 价目、数据、序号（可放大到占屏） |
| button | 15px | 800 | 按钮文字，0.6px 字距 |
| caption | 13px | 500 | 脚注、页脚 |
| eyebrow | 12px | 700 | 大写 kicker，2.4px 字距 |

### Principles
- 最大字**敢大到有点过分**，招牌就该抢人。
- 价钱永远等宽，整列右对齐到小数点，像真实价目板。
- 灯管字每屏最多一处，多了就成灯饰厂，不成招牌。

## Layout

### Spacing
4 / 8 / 16 / 24 / 40 的基础梯，`section` = 88px 做屏间大呼吸。密集区（招牌墙、菜单列）用 8 与 16 咬紧，喘息区（金句、数据页）直接上 88 拉空。密度差就是这套的呼吸。

### Grid & Container
桌面 12 列，内容最大宽 1200px。招牌墙用 **masonry 错落网格**，每块卡片带 −2° 到 +2° 的轻微旋转，模拟真实巷子里挂歪的招牌。菜单区回落到单列长表，一行一摊，右侧钉价签。

### Whitespace 哲学
留白不是均匀撒的。它集中在两个位置：招牌墙四周的黑边（把热闹框住），以及数据页与金句页那一整屏黑（砸下重点前的静默）。巷子里挤，巷子口空。

## Elevation & Depth

深度全靠**静态霓虹辉光**，不靠层层阴影。

| 层级 | 手法 |
|---|---|
| 底 | `canvas` 平铺，可叠一层极淡的城市颗粒噪点（静止，不动画）。 |
| 面板 | `surface` + 1px `hairline` 描边，托起卡片。 |
| 发光招牌 | 静态 `box-shadow` 用该卡自己的霓虹色，例如红卡 `0 0 24px rgba(255,46,77,.55)`，常亮不闪。 |
| 灯管字 | `text-shadow` 双层静态光晕，做出灯管发光，同样常亮。 |

**性能铁律**：辉光只用静态 shadow，绝不动画化 `box-shadow` / `text-shadow`（逐帧重绘极贵）。不使用 `backdrop-filter`，玻璃感一律用半透明纯色替代。装饰噪点层静止，最多动 `opacity`。

## Shapes

| Token | 值 | 用途 |
|---|---|---|
| none | 0px | 招牌牌面、封面全出血，硬边。 |
| sm | 4px | 菜单行、价签，几乎方。 |
| md | 8px | 数据块。 |
| lg | 14px | 摊位卡片，招牌灯箱的圆角。 |
| pill | 9999px | 按钮、贴纸徽章，霓虹灯管的圆头。 |

几何语言是**方牌 + 圆管**的对撞：矩形灯箱做骨架，pill 圆头做灯管和贴纸。图片一律硬边满出血，像贴在墙上的海报，四角压胶带。

## Components

- **button-primary**：招牌红实心 + 深墨字，pill，行动号召唯一形态。hover 时静态辉光加亮一档（改 shadow 强度用类切换，不做动画）。
- **button-secondary**：`surface` 底 + 电青描边 + 电青字，冷色副按钮，和主红形成对撞。
- **nav-bar**：`canvas` 底 + 底部 1px `hairline`，导航项走 eyebrow 大写等宽，像一排摊位号。
- **card-stall**：摊位卡。`surface` 面 + `hairline` 边 + 自身霓虹辉光，标题 heading，配一枚价签与 badge。招牌墙的基本单元。
- **menu-row**：菜单行。左菜名（body）右价钱（等宽），1px 分隔，密排成一张价目板。
- **stat-price**：价目块。灯笼黄等宽大字，`surface` 托底，把一个数字亮成招牌。
- **badge-neon**：品红贴纸徽章，pill，深墨字，歪贴在卡片角上（"热卖 / 限量 / 今日"）。
- **footer**：`canvas` 底 + 顶部 `hairline`，muted 小字收尾，等宽版权号。

所有交互态（hover / focus / active / 空状态 / 加载态）都用颜色与辉光强度切换实现，键盘 focus 用 2px 电青外环，可见且不刺眼。

## Presentation System

16:9 演示版式，对齐 HeiGe-PPT 的**一页一句话 / 黄金三秒 / 视觉锤**。夜市的逻辑是"先被看见，再被记住"，所以每一页只准有一个亮点。

| 版式 | 组件 | 排法 |
|---|---|---|
| 封面 | `slide-cover` | 深夜满屏，四块霓虹招牌错落挂上，**黄金三秒内逐一点亮**，最后亮的那块是标题，即视觉锤。点亮后定住，只留一句话。 |
| 过渡 | `slide-section-divider` | 招牌红满铺 + 深墨巨型章节号，像整条巷子突然只剩一块红牌，硬切换章。 |
| 数据 | `slide-stat-hero` | 全黑底，一个占屏灯笼黄等宽价格砸下来，带静态光晕，周围散几张极小价签当配角。一屏一个数。 |
| 金句 | `slide-quote` | 全黑底 + 一句电青灯管字（display-neon），占屏一句话，四周大留白，是整套节奏的最高点。 |
| 收尾 | `slide-closing` | `surface` 底 + 品红占屏大字 + 招牌红按钮，行动号召干脆收束，留一口烟火余味。 |

**视觉锤放哪**：封面最后点亮的招牌、数据页那个占屏数字、金句页那句灯管字。每份 deck 全场只留一到两个视觉锤，其余全部压成配角。

## Signature Moment

**换个模板绝对做不出来的两个时刻，写死如下。**

### UI 签名时刻 · 霓虹招牌墙（Neon Signboard Wall）
把 `card-stall` 网格做成一条巷子：卡片以 masonry 错落排列，每块带 −2° 到 +2° 轻微旋转，各自发各自颜色的静态辉光（红/黄/青/粉），标题用 Monoton 双线灯管字，右下角钉一张 Space Mono 价签，角上歪贴一枚品红 badge。**页面加载时招牌逐块"点亮"**：用 `opacity` 分步 keyframe 做一次性通电闪烁（0→亮→微灭→常亮），一轮即停，不常驻 rAF，不动画阴影。`prefers-reduced-motion` 下直接常亮跳过闪烁。整墙看上去就是一条通了电的夜市巷子，密、亮、歪，且真的在发光。

### Deck 签名时刻 · 招牌轰炸开场（Signboard Barrage）
`slide-cover` 上四块霓虹招牌（红/黄/青/粉）在**开场三秒内错峰点亮**，每块延迟约 300ms，用 `opacity` + `transform` 合成器动画完成，末块是标题即视觉锤。三秒后全部定住，画面只剩那一句话与常亮的光。第一眼的信息轰炸和随后的静默定格，构成这套 deck 的黄金三秒。

## Do's and Don'ts

### Do
- 让招牌红只出现在行动点和那块最亮的灯，克制到全屏只认它一支红。
- 用密度差讲节奏：巷子里挤到贴脸，巷子口整屏留黑。
- 价钱、编号、摊位号全部走等宽，右对齐成真实价目板。
- 辉光常亮、静态、发自各卡自己的颜色，让每块招牌像真的通了电。
- 招牌敢挂歪，−2° 到 +2° 的轻微旋转就是街头的真实。

### Don't
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及其全家桶），这套用四色硬对撞，绝不融成一条彩虹。
- **不做居中卡片三件套**（一标题 + 一灰副标 + 三等宽圆角卡），招牌墙是错落 masonry，不是对称三栏。
- **中文绝不用日文字体渲染**（Mochiy / Zen Maru 等），手写走 Ma Shan Zheng 中文毛笔字，兜底压思源黑体 / PingFang。
- **不动画化阴影 / 辉光**，通电感靠静态 shadow，闪烁只用 `opacity` 做一次性通电，不逐帧重绘。
- 不把四种霓虹平均铺满，那是灯饰厂，不是招牌。

## Responsive Behavior

| 断点 | 编排 |
|---|---|
| ≥ 1024px | 招牌墙 masonry 多列错落，封面四招牌同屏点亮。 |
| 640–1023px | 招牌墙收到两列，旋转角减半，价签移到卡片底部。 |
| ≤ 639px | 重新编排为单列竖向巷子：招牌自上而下逐块滚动进入，一次一块点亮；菜单回落到全宽长表；封面招牌改为纵向堆叠，只点亮标题一块。 |

移动端是把"一条横巷"重新讲成"一条竖巷"，重新编排叙事，不是把桌面端等比缩小。

**零孤字铁律**：占屏大字按最长一行收敛字号，用 `clamp()` 保证在 ≤390px 也放得下，手动断行处加 `white-space:nowrap` 锁整行；居中多行正文用 `text-wrap:balance` 均衡各行；中文限宽用 `em / px`，绝不用 `ch`（会让中文提前折行出孤字）。出货前在桌面与 390px 各扫一遍每个标题，确认无孤字、无横向溢出。

## Anti-Slop Pledge

把 NEON MARKET 的名字抹掉，这一屏仍一眼看得出是有人蹲在夜市里，把招牌怎么挂歪、灯管怎么发光、价签怎么钉、哪块牌先亮，一处一处调出来的。它有密度、有对撞、有一条通了电的巷子，不是三栏卡片加紫蓝渐变的流水线货。签名 HeiGe-Design。
