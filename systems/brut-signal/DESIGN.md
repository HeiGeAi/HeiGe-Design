---
version: alpha
name: BrutSignal-design-system
description: "BRUT-SIGNAL is a protest-poster system built on the roughness of woodblock printing: press black, newsprint white, and one arterial blood red, nothing else. An ultra-heavy slab shouts in all caps while an ultra-black grotesque and monospaced press-marks carry the rest. Its signature is the hard red-black seam, two full-bleed planks butting at a cheap-press mis-registration, and slogans sized to fill the frame. Sharp corners, carved-grain texture, zero soft edges. For advocacy, events, manifestos, and any brand willing to take a stance."

colors:
  primary: "#e00000"
  on-primary: "#ffffff"
  ink: "#141414"
  canvas: "#f4efe3"
  surface: "#0a0a0a"
  muted: "#57534a"
  hairline: "#d7d0c2"

typography:
  display-xl:
    fontFamily: "\"Alfa Slab One\", \"Zilla Slab\", \"Roboto Slab\", \"Noto Serif SC\", \"Songti SC\", serif"
    fontSize: 104px
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-1px"
  display-lg:
    fontFamily: "\"Alfa Slab One\", \"Zilla Slab\", \"Roboto Slab\", \"Noto Serif SC\", \"Songti SC\", serif"
    fontSize: 62px
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.5px"
  heading:
    fontFamily: "\"Archivo\", \"Archivo Black\", \"Helvetica Neue\", \"Arial Black\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 30px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.2px"
  body:
    fontFamily: "\"Archivo\", \"Helvetica Neue\", Arial, \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0px"
  body-mono:
    fontFamily: "\"Space Mono\", \"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", \"Noto Sans SC\", monospace"
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0px"
  button:
    fontFamily: "\"Archivo\", \"Helvetica Neue\", Arial, \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "1.5px"
  caption:
    fontFamily: "\"Archivo\", \"Helvetica Neue\", Arial, \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2px"
  eyebrow:
    fontFamily: "\"Space Mono\", \"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", \"Noto Sans SC\", monospace"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "2.5px"

rounded:
  none: 0px
  sm: 2px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  tag-stamp:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  card-manifesto:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.canvas}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  card-plank:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  meta-caption:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  rule-hairline:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
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
    backgroundColor: "{colors.surface}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# BRUT-SIGNAL / 呐喊

> Woodblock-print protest poster, ported to a design system. Press black, newsprint white, one arterial red. Say it loud or do not say it.

## Overview

呐喊 是一套**抗议海报系统**。它的能量来自木刻版画的粗粝，和廉价印刷厂那种红黑撞在一起的直接。整套只用三种颜色：漆黑、报纸白、一道血红 `#e00000`。没有第四色，没有渐变，没有柔光。层级全靠版式和撞色拉开，颜色只负责喊。

主色 `#e00000` 在这套里只做两件事：**当满版红块（上面压纯白字），或者当一道切割画面的血红边条**。它从不细声细气地当正文红字（那会掉到对比度红线以下），要红就红成一整面墙。

字体走两条腿。标题用**木刻粗衬线**，一个 slab serif 砸满全屏，笔画厚到像刻出来的；辅助信息用**超重无衬线**和一行**等宽印记体**，像海报角落印刷厂盖的钢印。全大写，硬对齐，锐角到底。

节奏是宣言式的：一屏一句狠话，中间大量黑白呼吸，红色只在最该炸的那一屏出现一次。安静，安静，然后一声呐喊。

## Colors

**三色极简，红黑撞色是唯一的戏。**

### Brand & Accent
| Token | Hex | 角色 |
|---|---|---|
| `primary` | `#e00000` | 血红。满版红块 / 血红切割条 / 巨型序号底。只做背景与图形，压纯白字。 |
| `on-primary` | `#ffffff` | 压在血红上的纯白字。红白对比约 5.04:1，稳过 AA。 |

### Surface
| Token | Hex | 角色 |
|---|---|---|
| `canvas` | `#f4efe3` | 报纸白。带一点暖灰的纸感底，不是刺眼纯白。 |
| `surface` | `#0a0a0a` | 印刷黑。反转卡片、页脚、暗版演示页的底。近黑不纯黑，留一点油墨的厚度。 |

### Text
| Token | Hex | 角色 |
|---|---|---|
| `ink` | `#141414` | 报纸白上的正文与标题。约 16:1，狠黑。 |
| `muted` | `#57534a` | 暖灰次要文字（署名、注脚、印记）。仅用于报纸白底，约 6.7:1。 |

### Semantic / Structural
| Token | Hex | 角色 |
|---|---|---|
| `hairline` | `#d7d0c2` | 报纸白底上的安静分栏细线。多数分隔用的是 3px 黑实线（引用 `ink`），细线只在需要克制时出现。 |

**对比度自检（全部 ≥ 4.5:1）**：白字 / 血红 ≈ 5.04；`ink` / 报纸白 ≈ 16.0；报纸白 / 印刷黑 ≈ 17.3；`muted` / 报纸白 ≈ 6.7。血红从不作为文字色压在浅底上（那只有 4.3:1），要红字就把它放大成满版红块再压白字。

## Typography

### Font Family
- **Display（呐喊标题）**：`Alfa Slab One` 打头，这是海报级的超重 slab serif，笔画厚得像木刻。断网或缺字时按栈降级 `Zilla Slab → Roboto Slab`，中文落到 `Noto Serif SC`（800 重）/ `Songti SC`，全程重衬线，绝不塌成 Times。
- **Heading（超重无衬线）**：`Archivo` 800 重，硬朗方正的 grotesque，中文兜底 `Noto Sans SC / PingFang SC / Microsoft YaHei`。
- **Body / Button / Caption**：`Archivo` 常规到 700，同一套无衬线，中文同上兜底。
- **Mono（印记与数字）**：`Space Mono` 700，等宽体承载数据、单位、印刷厂钢印式 eyebrow，中文兜底 `Noto Sans SC`。

**中文铁律**：能承载中文的每条字体栈末尾都带系统兜底（无衬线 `Noto Sans SC / PingFang SC / Microsoft YaHei`，衬线 `Noto Serif SC / Songti SC`）。**中文绝不用日文字体渲染**（Mochiy / Zen Maru 一类），简体会缺字变豆腐。字体栈按字形逐字降级：拉丁字母落 `Alfa Slab One` 的厚衬线，汉字落 `Noto Serif SC` 800 的重宋，两边都是重笔画，一致成立。

### Hierarchy
| Role | Font | Size | Weight | Tracking | 用途 |
|---|---|---|---|---|---|
| `display-xl` | Alfa Slab One | 104px | 800 | -1px | 满版呐喊口号 / 封面主词 |
| `display-lg` | Alfa Slab One | 62px | 800 | -0.5px | 章节分隔 / 金句页 |
| `heading` | Archivo | 30px | 800 | -0.2px | 卡片标题 / 收尾行动号召 |
| `body` | Archivo | 17px | 500 | 0 | 正文 / 页脚 |
| `body-mono` | Space Mono | 15px* | 700 | 0 | 数据、单位、tabular 数字（*巨型数据页由组件放大） |
| `button` | Archivo | 14px | 700 | 1.5px | 按钮 / 标签 |
| `caption` | Archivo | 13px | 500 | 0.2px | 署名 / 注脚 |
| `eyebrow` | Space Mono | 12px | 700 | 2.5px | 印记式 kicker / 导航 |

### Principles
- **最大字与正文对比 ≥ 6:1**。104px 的呐喊压在 17px 的正文上，尺寸就是层级。
- **全大写做标题**，配 slab serif 的厚衬线，出木刻海报的气。
- **左对齐 / 硬网格对齐优先**，标题贴着页边或贴着红黑分栏的缝，不无脑居中。
- eyebrow 用等宽体拉宽字距，像印刷厂在海报角落盖的一行钢印。

## Layout

### Spacing
8 的倍数节拍：`xs 4 · sm 8 · md 16 · lg 24 · xl 48 · section 96`。呐喊靠留白制造张力，section 级的大留白把每句狠话隔开，让它单独站住。

### Grid & Container
- **12 栏硬网格**，网格线允许**裸露**（在部分版面直接画出来当装饰），这是 brutalist 的诚实。
- 内容主容器 `max-width` 用 `px`（约 1200px），中文限宽用 `em` 或 `px`，**绝不用 `ch`**（`ch` 是拉丁 0 的宽度，会让中文提前折行出孤字）。
- 血红切割条常常**出血**到画布边缘，制造被红色撕开的分栏。

### Whitespace 哲学
留白在这套里是**火药引信**。大段黑白留白不是空，是在给下一屏的呐喊蓄力。均匀撒满每个缝隙的排版没有气口，这里刻意做出安静区和爆发区的落差。

## Elevation & Depth

这套**不用柔和阴影**，深度靠**硬 offset 阴影**和**撞色分层**。

| 层级 | 手法 |
|---|---|
| 0 底面 | 报纸白 / 印刷黑，允许静态碳粉噪点纹理 |
| 1 卡片 | 3px 实黑边框 + 硬 offset 阴影 `6px 6px 0 #141414`（不模糊、不动画） |
| 2 强调块 | 满版血红块，直接压在黑白之上，靠颜色跳出，不靠阴影 |
| 3 印记 | 血红 / 黑色钢印贴片，轻微旋转，像盖上去的图章 |

**深度铁律**：offset 阴影是常亮的实心色块，**绝不动画化 `box-shadow` / `text-shadow`**（逐帧重绘极贵、会掉帧）。木刻碳粉纹理用静态 CSS `repeating-linear-gradient`（如 `repeating-linear-gradient(0deg, transparent 0 2px, rgba(20,20,20,.045) 2px 3px)`）叠一层低透明度，**不用 `backdrop-filter`、不用 `filter:blur` 做位移动画**。

## Shapes

### Border Radius
| Token | 值 | 用途 |
|---|---|---|
| `none` | 0px | 几乎一切。卡片、按钮、导航、页脚、演示页全是锐角。 |
| `sm` | 2px | 只给钢印贴片一点点圆，模拟裁切纸边，别的地方不用。 |

**锐角是这套的骨相。** 没有 pill，没有 12px 通用圆角。图片一律硬直角裁切或硬斜切，血红切割条是直线，不是弧线。

## Components

- **nav-bar**：报纸白底 + 底部 3px 实黑线，导航项用等宽 eyebrow 拉宽字距，像报头下面那行印刷信息。
- **button-primary**：满版血红 + 纯白全大写字，锐角，hover 时整块位移 2px 露出黑色 offset 底（不淡入、不缩放）。
- **button-outline**：报纸白底 + 3px 实黑框 + 黑字，hover 反相成黑底白字。
- **tag-stamp**：血红钢印贴片压白字，`sm` 圆角，轻微旋转 -2°，像盖上去的图章。
- **card-manifesto**：印刷黑反转卡，报纸白标题，一道血红短横在左上角起手。
- **card-plank**：报纸白木板卡，3px 黑框 + 硬 offset 阴影，右上角一枚血红直角标签。
- **stat-block**：**满版血红块 + 巨型纯白等宽数字**，单位用小号白字贴在数字肩上。数据在这套里必须红。
- **meta-caption**：报纸白底上的暖灰注脚，署名与来源，等宽感克制。
- **rule-hairline**：需要安静分隔时的报纸白细线；重分隔仍走 3px 黑实线。
- **footer**：印刷黑整块页脚，报纸白正文，顶部一道 4px 血红出血条封顶。

每个带文字的组件都做过对比度自检，最低的白字压血红也有约 5.04:1，全部过 AA。

## Presentation System

把 呐喊 做成 **16:9 演示**，一套抗议海报幻灯片。核心对齐 **一页一句话 · 黄金三秒 · 视觉锤**。

- **封面 `slide-cover`**：报纸白底，一个**巨型黑色 slab 主词**几乎占满画面，一道血红切割条从右侧出血插进来，左下角等宽钢印一行（日期 / 场次 / 编号）。黄金三秒里最先落地的是那个词，其他全是配角。
- **过渡 `slide-section-divider`**：满版**血红整屏** + 纯白巨型章节号 `01 / 02 / 03`，一句大写小标题贴在号码下缘。红屏本身就是节奏的重音，看到红就知道翻章了。
- **数据 `slide-stat-hero`**：印刷黑底 + **报纸白巨型等宽数字**，单位用血红小字贴在数字右肩，一句话结论压在底部。视觉锤是那个大到过分的数字。
- **金句 `slide-quote`**：印刷黑底，报纸白 slab 金句占屏，句首一枚血红的巨型引号当锚点，署名走等宽小字。
- **收尾 `slide-closing`**：满版血红，纯白全大写行动号召，一个白描边按钮，一行等宽落款收干净。

**视觉锤统一放在每屏唯一主角上**：封面是词、过渡是红屏与号码、数据是数字、金句是句子、收尾是号召。配角一律压到等宽小字，绝不抢戏。

## Signature Moment

### UI 签名时刻 · The Riot Seam（撞色裂缝）
满版**血红板**与**印刷黑板**在画面中央硬碰，两块之间**没有留白、没有描边**，只有一道生的竖直接缝，接缝处故意做 **3px 错位出血**，复刻廉价丝网印刷的套版没对准。一个巨型全大写 slab 口号**骑在接缝上**：压在红板一侧的字是纯白，压在黑板一侧的字是报纸白，词被那道缝一刀切开。木刻碳粉纹理用静态 CSS 横跨两板，接缝处纹理也跟着错位 3px。换任何模板都做不出这道**错位撞色缝**，因为它的记忆点恰恰是那 3px 印刷瑕疵被当成了设计。为可访问性，接缝大词旁挂一个视觉隐藏的完整语义标签兜底。

### Deck 签名时刻 · The Full-Bleed Shout（满版呐喊）
一整屏，一个词。血红 slab 主词放大到占满 90% 的 16:9 画框，压在报纸白上，一根**血红切割条**从画面一侧滑进来横穿主词底部，左下角一枚**等宽印刷厂钢印**（`PRESSED / 呐喊 / NO.____`）像海报角落的印记。整屏只有这一个词有资格存在，黄金三秒里它先声夺人，其余信息全部退成钢印小字。这一屏抹掉品牌名也一眼是抗议海报，不是通用模板。

## Do's and Don'ts

### Do
- **要红就红成一整面墙**，血红只做满版块和出血切割条，压纯白字。
- **口号大到有点过分**，104px slab 全大写，一屏一句狠话。
- **锐角到底 + 3px 实黑框 + 硬 offset 阴影**，诚实、粗粝、有攻击性。
- **红黑撞色硬碰**，接缝处留那道 3px 错位，把印刷瑕疵当签名。
- **中文用重宋 / 超重无衬线**，字体栈末尾必带系统兜底。

### Don't
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2`）及其全家桶，这套只有红黑白三色，一滴渐变都不加。
- **不做居中卡片三件套**（一行标题 + 一行灰副标 + 三个等宽圆角卡），改成红黑撞色分栏和硬左对齐。
- **中文绝不用日文字体渲染**（Mochiy / Zen Maru 等），简体会缺字变豆腐，中文走 Noto Serif SC / Noto Sans SC。
- **不动画化阴影**（`box-shadow` / `text-shadow` 逐帧发光重绘会掉帧），offset 阴影常亮不闪。
- 不把血红当浅底上的正文红字（对比度不够），不给任何东西加通用 12px 圆角与柔光。

## Responsive Behavior

| 断点 | 布局 |
|---|---|
| ≥ 1200px | 红黑双板并置，竖直撞色缝居中，display-xl 满配 104px |
| 768–1199px | 双板收窄，切割条角度变陡，display 用 `clamp()` 收到约 72px |
| ≤ 767px | **撞色缝由竖转横**：红板压黑板上下堆叠，主词改为在横缝上下切分，钢印移到底部 |

**移动端是重新编排，不是缩放。** 竖直撞色缝在窄屏没有意义，直接转成上下堆叠的横向撞色，口号跟着重新断行。手动断行的标题按最长一行收敛字号，每行 `white-space:nowrap` 锁整行，`clamp()` 保证最窄屏（≤390px）也放得下、不出孤字、不横向溢出。所有动画都能被 `@media (prefers-reduced-motion: reduce)` 关掉。

## Anti-Slop Pledge

抹掉 HeiGe-Design 的署名，呐喊 也一眼是**有人真刻出来的抗议海报**，不是流水线生成的模板。它的记忆点是那道 3px 错位的红黑撞色缝、大到过分的木刻口号、和只用三色却敢喊出声的克制。没有紫蓝渐变，没有居中卡片三件套，没有柔光圆角，没有一个 emoji 撑场面。字体加载失败也不崩，任何屏宽都不出孤字，滚动起来不掉帧。要么喊出声，要么别做这套。

— HeiGe-Design · MIT
