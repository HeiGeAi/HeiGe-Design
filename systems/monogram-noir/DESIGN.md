---
version: alpha
name: MonogramNoir-design-system
description: MonogramNoir is a couture house system — ivory type on true noir, disciplined by a single oxblood-wine accent used once per view. A Bodoni-cut didone carries the masthead and an oversized interlocked monogram, while a wide-tracked geometric sans handles maison labels. Its signature is a repeated monogram motif ghosted across a couture module grid with one full-bleed image breaking the frame. Extreme negative space, sharp edges, slow fades. Built by HeiGe-Design.

colors:
  primary: "#111111"
  on-primary: "#EFE9DF"
  ink: "#1C1814"
  canvas: "#EFE9DF"
  surface: "#F5F0E7"
  muted: "#625B50"
  hairline: "#D8D0C2"
  wine: "#6E1423"

typography:
  monogram:
    fontFamily: '"Bodoni Moda", Didot, "Bodoni 72", "Playfair Display", "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 200px
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -4px
  display-xl:
    fontFamily: '"Bodoni Moda", Didot, "Bodoni 72", "Playfair Display", "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 76px
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: -1.5px
  display-lg:
    fontFamily: '"Bodoni Moda", Didot, "Bodoni 72", "Playfair Display", "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.8px
  heading:
    fontFamily: '"Bodoni Moda", Didot, "Bodoni 72", "Playfair Display", "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.2px
  body:
    fontFamily: '"Cormorant Garamond", "EB Garamond", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: 0.1px
  body-mono:
    fontFamily: '"Bodoni Moda", Didot, "Bodoni 72", "Playfair Display", "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.5px
  button:
    fontFamily: '"Jost", Futura, "Century Gothic", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 2.5px
  caption:
    fontFamily: '"Jost", Futura, "Century Gothic", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.3px
  eyebrow:
    fontFamily: '"Jost", Futura, "Century Gothic", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 3.5px

rounded:
  none: 0px
  sm: 2px
  md: 4px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 120px

components:
  brand-monogram: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.monogram}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  nav-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", borderColor: "{colors.hairline}", typography: "{typography.eyebrow}", rounded: "{rounded.none}", padding: "{spacing.lg} {spacing.xl}" }
  card-collection: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", borderColor: "{colors.hairline}", typography: "{typography.heading}", rounded: "{rounded.none}", padding: "{spacing.xl}" }
  card-lookbook: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: "{spacing.lg}" }
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.none}", padding: "{spacing.sm} {spacing.xl}" }
  button-secondary: { backgroundColor: "{colors.canvas}", textColor: "{colors.wine}", borderColor: "{colors.wine}", typography: "{typography.button}", rounded: "{rounded.none}", padding: "{spacing.sm} {spacing.xl}" }
  stat-block: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-mono}", rounded: "{rounded.none}", padding: "{spacing.lg}" }
  seal-maison: { backgroundColor: "{colors.wine}", textColor: "{colors.on-primary}", typography: "{typography.eyebrow}", rounded: "{rounded.pill}", padding: "{spacing.md}" }
  tag-season: { backgroundColor: "{colors.canvas}", textColor: "{colors.muted}", borderColor: "{colors.hairline}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: "{spacing.xs} {spacing.sm}" }
  input-newsletter: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", borderColor: "{colors.hairline}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: "{spacing.sm} {spacing.md}" }
  footer: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", borderColor: "{colors.hairline}", typography: "{typography.caption}", rounded: "{rounded.none}", padding: "{spacing.section} {spacing.xl}" }
  slide-cover: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-section-divider: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-stat-hero: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-mono}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-quote: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-closing: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.xl} {spacing.section}" }
---

# MonogramNoir · 字母黑

一座只有三种材料的时装屋：真黑、象牙、一封酒红蜡印。别的都靠留白和网格撑起来。

---

## Overview

字母黑是一套时装屋语言。它把品牌收缩成一个交错的衬线字母，反复压在象牙纸与真黑幕布之间，用高定裁片网格排布，让一张出血大图撕开画面。

主色只有两个角色。**真黑 `#111111` 是幕布与权威**，落地为按钮、页脚、封面幕布；**象牙 `#EFE9DF` 是纸与呼吸**，承载全部正文与大面积负空间。酒红 `#6E1423` 是第三种材料，一屏只用一次，压成封蜡印、章节序号、金句里那一个标点。

字体签名是一记 Bodoni 高对比衬线。巨号首字母组合当报头，细体大写做展示行，几何无衬线拉宽字距做时装屋标签。中文落到思源宋体兜底，绝不用日文字体渲染。

节奏是慢的。大留白铺垫，一次爆发，缓慢淡入，戛然收束。这套的气场来自克制，不来自堆料。

---

## Colors

三色一网格，节奏靠版式不靠堆色。

**Brand & Accent**
| Token | Hex | 用途 |
|---|---|---|
| primary | `#111111` | 真黑幕布，按钮、页脚、封面与金句幕布的底 |
| wine | `#6E1423` | 酒红封蜡，唯一强调色，一屏只出现一次 |

**Surface**
| Token | Hex | 用途 |
|---|---|---|
| canvas | `#EFE9DF` | 象牙纸，页面底与大面积负空间 |
| surface | `#F5F0E7` | 抬升一档的暖象牙，藏品卡与输入框 |
| hairline | `#D8D0C2` | 1px 暖分隔线，代替阴影承担分层 |

**Text**
| Token | Hex | 用途 |
|---|---|---|
| ink | `#1C1814` | 暖近黑正文，落在象牙上（对 canvas 约 14.6:1） |
| on-primary | `#EFE9DF` | 象牙字，落在真黑与酒红上（对 primary 约 15.6:1） |
| muted | `#625B50` | 暖褐灰次要文字与标签（对 canvas 约 5.55:1） |

**Semantic**
这套克制到不设涨跌红绿。酒红是全系统唯一强调，任何需要被记住的一点都交给它：封蜡印、章节大序号、金句里的引号。绝不做第二个强调色，多一色就散。

对比全部手核过 WCAG AA：最紧的一对是 muted 落在象牙上 5.55:1，仍然过线；其余正文对底均在 14:1 以上。

---

## Typography

**Font Family**

- 衬线报头（monogram / display / heading / body-mono）：`"Bodoni Moda", Didot, "Bodoni 72", "Playfair Display", "Times New Roman", "Noto Serif SC", "Songti SC", serif`。Bodoni 系高对比 didone，粗细笔画反差就是这套的时装味。断网塌回系统衬线仍立得住，中文兜底走思源宋体与宋体。
- 正文衬线（body）：`"Cormorant Garamond", "EB Garamond", Georgia, ..., "Noto Serif SC", "Songti SC", serif`。少量正文用细腻过渡衬线读，克制且优雅。
- 时装屋标签（button / caption / eyebrow）：`"Jost", Futura, "Century Gothic", "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`。几何无衬线大写拉宽字距，做导航与眉标。

中文铁律：所有能承载中文的字体栈末尾都挂系统兜底，衬线走 Noto Serif SC / Songti SC，无衬线走 Noto Sans SC / PingFang SC。中文绝不用日文字体（Mochiy、Zen Maru 等）渲染，简体会缺字变豆腐块。

**Hierarchy**

| Role | Font | Size | Weight | Tracking | 用途 |
|---|---|---|---|---|---|
| monogram | Bodoni Moda | 200px | 700 | -4px | 交错首字母组合，报头与水印母题 |
| display-xl | Bodoni Moda | 76px | 500 | -1.5px | 封面与首屏时装屋名 |
| display-lg | Bodoni Moda | 48px | 500 | -0.8px | 章节标题、金句、收尾行 |
| heading | Bodoni Moda | 24px | 600 | -0.2px | 藏品卡标题 |
| body | Cormorant Garamond | 18px | 500 | 0.1px | 正文与图注，行距 1.75 |
| body-mono | Bodoni Moda | 20px | 500 | 0.5px | 数据与价格，走 tabular 等宽衬线数字 |
| button | Jost | 13px | 500 | 2.5px | 按钮大写标签 |
| caption | Jost | 13px | 400 | 0.3px | 说明、标签、页脚 |
| eyebrow | Jost | 12px | 500 | 3.5px | 眉标与导航，maison 级宽字距 |

**Principles**
- 最大字与正文差距拉到 11:1（monogram 200 对 body 18），大字大到有点过分，才是高定。
- 展示行走衬线，标签走无衬线拉宽字距，两种材料泾渭分明。
- 数字统一走 body-mono 的 Bodoni tabular lining figures，对齐整齐，衬线数字本身就是签名。
- 全大写只给短标签与序号，正文标题保持大小写混排，才有报头气派。

---

## Layout

**Spacing**
| Token | Value | 用途 |
|---|---|---|
| xs | 4px | 标签内边、序号与字之间 |
| sm | 8px | 按钮竖向内边、输入框内边 |
| md | 16px | 封蜡印内边、字段横向内边 |
| lg | 32px | 卡片图注区、导航竖向内边 |
| xl | 64px | 藏品卡内边、按钮横向内边 |
| section | 120px | 版块间距、页脚与所有幻灯片内边 |

**Grid & Container**
高定裁片网格：桌面 12 列，列间距宽（gutter ≥ 32px），左右外边距大（≥ 120px），像样衣的裁片一样对齐到每一条基线。内容容器最宽 1280px，但正文列绝不铺满，锁在 640px 以内保持编辑感。中文限宽用 em 或 px，绝不用 ch。

**Whitespace**
留白是主料不是缝隙。版块之间留一整屏的空，让一句话独占视野。负空间越狠，那一封酒红蜡印越响。宁可少放一件展品，也要给主角留出气场。

---

## Elevation & Depth

这套不是暗色科技系，不用辉光，不堆阴影。分层靠三样：

1. **明度断层**：真黑幕布与象牙纸之间的巨大明度差本身就是最强的层级。
2. **Hairline**：`#D8D0C2` 的 1px 暖线代替卡片阴影，划分区块，克制而精确。
3. **单级压印**：只有封蜡印（seal-maison）允许一层极轻的静态阴影，模拟蜡被压进纸的物理感，`0 1px 2px rgba(17,17,17,.18)`，常亮不闪。

不动画化阴影（发光逐帧重绘极贵，且这套本就不该闪）。不使用 backdrop-filter（滚动持续重绘）。深度来自材质与留白，不来自模糊。

---

## Shapes

**Border Radius**
| Token | Value | 用途 |
|---|---|---|
| none | 0px | 主体全部直角：按钮、卡片、导航、页脚、全部幻灯片 |
| sm | 2px | 输入框，几乎察觉不到的软化 |
| md | 4px | 藏品图卡与季度标签，唯一允许的一点圆 |
| pill | 9999px | 圆形封蜡印与状态点 |

高定语言是锋利的，主体一律直角。圆只出现在封蜡印这一处圆形，与整套的直线形成一次反差。

**图片几何**
出血矩形，无圆角，画幅锁 1:1 与 3:4 两种时装拍摄比例。大图从版心撕向页面边缘出血，是这套的呼吸点。图片不描边，让它自己撞进象牙留白。

---

## Components

**brand-monogram** — 交错首字母组合的报头与水印母题。象牙底、真黑字、200px Bodoni，直角，四周 section 级留白。既做页头 logo，也做背景水印。

**nav-bar** — 时装屋顶栏。象牙底、真黑眉标字、底部一条 hairline。导航项全大写、宽字距，靠间距不靠分隔符排布。

**card-collection** — 藏品网格卡。抬升象牙面、真黑标题、hairline 描边、直角、xl 内边。卡内标题走 heading，说明走 body，克制到只有文字与一条线。

**card-lookbook** — 出血图卡。真黑幕布托一张出血大图，下方象牙字图注走 body。这是把大图撕进网格的载体，md 圆角是全套唯一一点软化。

**button-primary** — 真黑直角实心按钮，象牙大写标签，横向 xl 内边。像时装屋门牌一样沉。

**button-secondary** — 酒红描边幽灵按钮，象牙底、酒红字、酒红边、直角。全套唯一让强调色现身于交互的地方。

**stat-block** — 时装屋数字（创立年份、匠人数、成衣件数）。象牙底、真黑 Bodoni tabular 数字，配 muted 眉标单位。

**seal-maison** — 圆形酒红封蜡印，象牙字、pill 圆、单级静态压印阴影。全系统唯一的圆，也是唯一让酒红成为主角的一次。

**tag-season** — 季度与系列小标签。象牙底、muted 字、hairline 边、md 圆、极小内边。

**input-newsletter** — 页脚订阅字段。抬升象牙面、真黑字、hairline 边、sm 圆。

**footer** — 时装屋页脚。真黑幕布、象牙字、顶部一条 hairline、section 级上下留白。把整页收进一片黑里，像谢幕。

---

## Presentation System

同一套 token 直接驱动 16:9 演示。原则对齐：一页一句话、黄金三秒、视觉锤。视觉锤固定两件：交错的 Bodoni 首字母组合 + 那封酒红蜡印。

- **封面（slide-cover）**：真黑幕布，正中一个 200px 交错字母组合，下三分之一压一封酒红封蜡印，时装屋名走 display-xl 象牙大写，缓慢淡入。黄金三秒里只让人看见字母与那一点酒红。
- **过渡页（slide-section-divider）**：翻成象牙底，制造黑白节奏断层。章节号用酒红 Bodoni 大序号（01 / 02），标题走 display-lg 真黑。全场只有过渡页翻白，节奏才有起伏。
- **数据页（slide-stat-hero）**：象牙底，一个巨号 Bodoni tabular 数字独占版心，单位走 eyebrow 宽字距 muted，数字底下一道酒红短横当视觉锤。一页只讲一个数。
- **金句页（slide-quote）**：真黑幕布，一句细体 display-lg 象牙字占满屏，开头一个酒红引号。一页一句话在这里做到极致，四周全是黑留白。
- **收尾页（slide-closing）**：真黑幕布，一句 display-lg 行动号召，配一枚酒红封蜡印与 button 大写标签，像时装屋谢幕落款。

一句话一屏，主角只有一个，酒红一场只准红三次：封面蜡印、数据短横、收尾落款。

---

## Signature Moment

**UI 签名时刻 · The Monogram Watermark Grid（字母水印网格）**
一整屏象牙页，交错的 Bodoni 首字母组合被放到占满版心的尺度，压成 6% 墨色的幽灵水印铺在背景；水印之上覆一层可见的高定 12 列裁片网格，一张 3:4 的出血大图从右侧撕出版面、压断网格线；页边留白里，同一个字母组合缩小成 24px 沿基线重复成一条母题带。母题重复 + 高定栅格 + 出血大图三件事同时发生，换个模板绝对复制不出这一屏。

**Deck 签名时刻 · The Wax Seal Reveal（封蜡显影）**
封面真黑幕布静置两秒，只有一个巨号交错字母组合缓慢淡入；到第三秒，下三分之一处一枚圆形酒红封蜡印以极轻的静态压印阴影浮现，象牙宽字距的时装屋名同时淡入蜡印之下。纯黑幕布上唯一的一点酒红，就是整场演示的视觉锤。动效只用 opacity 淡入，尊重 prefers-reduced-motion，不动画化阴影。

---

## Do's and Don'ts

**Do**
- 让一句话独占一整屏，负空间越狠气场越足。
- 酒红一屏只用一次，压成封蜡、序号或一个标点。
- 主体全部直角，圆只留给那一枚封蜡印。
- 大字大到有点过分，monogram 与正文拉到 11:1。
- 分层用 hairline 与明度断层，不用阴影堆叠。
- 中文落思源宋体 / 宋体兜底，报头走 Bodoni didone。

**Don't**
- 不碰紫蓝俗套渐变（`#667eea → #764ba2`）及其全家桶，这套只有黑、象牙、酒红。
- 不做居中卡片三件套（一行标题 + 一行灰副标 + 三个等宽圆角卡整页重复）。这套靠出血大图与不对称裁片网格立骨架。
- 中文绝不用日文字体（Mochiy、Zen Maru 等）渲染，简体会缺字变豆腐。
- 不动画化阴影 / text-shadow，封蜡的压印感是静态的，常亮不闪。
- 不加第二个强调色，多一色这套就散。
- 不用 emoji 当图标，时装屋只认字母组合与封蜡印。

---

## Responsive Behavior

移动端是重新编排的另一段叙事，不是桌面端缩一缩。

| 断点 | 布局 |
|---|---|
| ≥ 1024px | 12 列高定网格，出血大图占 5–7 列并撕出右缘，字母水印铺满背景 |
| 640–1023px | 收成 8 列，出血图移到版块顶部通栏，水印字母缩小 |
| ≤ 639px | 单列叙事，字母水印缩为右上角一枚角标，出血图顶部通栏，导航折进抽屉 |

折叠策略：手机上放弃背景水印铺满，改成角标母题，保住象牙留白与那封酒红蜡印这两个识别点。标题按最长一行用 clamp() 收字号，每行 white-space:nowrap 锁整行，窄屏（≤390px）逐屏自检无孤字、无横向溢出。中文限宽用 em / px，绝不用 ch。

---

## Anti-Slop Pledge

抹掉时装屋名，这一页仍一眼看得出是有人用手排的：真黑与象牙的明度断层、Bodoni 报头的粗细反差、一封只出现一次的酒红蜡印、被出血大图撕断的裁片网格。它不是流水线吐出来的通用 SaaS 模板，是一座只用三种材料、把克制做到极致的时装屋。

Built by HeiGe-Design · MIT.
