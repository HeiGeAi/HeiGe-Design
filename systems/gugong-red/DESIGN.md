---
version: alpha
name: GugongRed-design-system
description: >-
  Neo-Oriental heritage system founded on the deep oxblood of a palace wall
  (#9A2B2B), edged in bright imperial gold and grounded by dai-blue roof shadow.
  Heavy Song-serif titles stand vertically like an unrolled handscroll while a
  cinnabar seal breaks a hairline gold lattice frame as the signing stamp. Sharp
  zero-radius blocks, wide silk-paper whitespace, and high-contrast Didot-style
  numerals carry archival serials. Built for museums, cultural heritage, premium
  heritage craft, and archival collections. Ceremonial, restrained, unmistakably
  imperial, never a template. Signed HeiGe-Design.

colors:
  primary: "#9A2B2B"      # 宫墙红 palace-wall oxblood, the dominant field
  on-primary: "#F5EFE1"   # 绢白 silk ivory, text on red / dai
  ink: "#241A15"          # 漆黑 lacquer near-black, body text
  canvas: "#F3EAD6"       # 旧绢 aged silk paper, page ground
  surface: "#FBF6EA"      # 素笺 pale card ground
  muted: "#746351"        # 古铜 aged bronze, secondary text
  hairline: "#D9C7A0"     # 描边浅金 faint gold-dust divider
  gold: "#C9A227"         # 明金 imperial gold, outline & decoration only
  dai: "#2E3A4A"          # 黛蓝 roof-tile shadow, dark divider field
  seal: "#BE3626"         # 朱印 cinnabar seal ground

typography:
  display-xl:
    fontFamily: '"Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 72px
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: 2px
  display-lg:
    fontFamily: '"Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1px
  heading:
    fontFamily: '"Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.5px
  body:
    fontFamily: 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.2px
  numeral:
    fontFamily: '"Playfair Display", "Didot", "Bodoni MT", "Songti SC", serif'
    fontSize: 96px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-1px"
  button:
    fontFamily: 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 1.5px
  eyebrow:
    fontFamily: 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 4px
  caption:
    fontFamily: 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.3px

rounded:
  none: 0px
  xs: 2px
  sm: 6px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  # —— UI 界面组件 ——
  divider-hairline:
    backgroundColor: "{colors.hairline}"
    height: 1px
    width: 100%
  divider-gold:
    backgroundColor: "{colors.gold}"
    height: 1px
    width: 100%
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  card-lattice:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  seal-mark:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs}"
  collection-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  # —— slide 演示组件（16:9 演示版式）——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.dai}"
    textColor: "{colors.on-primary}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.dai}"
    textColor: "{colors.on-primary}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# 故宫红金 · GugongRed

宫墙气派做成一套设计系统。深宫墙红压住整个画面，明金只走勾边和落款，黛蓝当屋檐的阴影托底。楷宋大字竖着排，像一卷慢慢展开的手卷，最后盖一方朱印收尾。这套的骨相是博物院的：庄重、克制、有典藏感，绝不喧哗。

## Overview

这套系统的气质来自宫墙与典藏，不是喜庆红包那种红。**主色是宫墙红 `#9A2B2B`，一种压得很深的氧化血红**，它承担两个角色：大面积时是"墙"，小面积时是"字"。在浅色绢纸底上，它是最有分量的正文强调色；在深色页里，它整块拉成一堵墙，让绢白大字站上去。

明金 `#C9A227` 是这套的纪律线，**只做金线勾边、印章外框、极小的编号标签，绝不当底色**。金一旦铺满就俗，金只有点在关键处才贵。黛蓝 `#2E3A4A` 是第三个声部，取自屋檐琉璃在阴影里的沉色，用来做过渡页和数据页的深色场，给红金一个冷静的托底。

节奏靠三样东西撑：**竖排的楷宋大字、方到底的零圆角块面、大面积的绢纸留白**。字体本身就是设计，Song serif 的横细竖粗自带碑刻感，不需要再加装饰。

## Colors

### Brand & Accent
- **宫墙红 primary `#9A2B2B`** — 主色。深氧化红，做红墙场、红按钮、红字强调。浅底上是 6.4:1 的强对比正文色，深底上是压场的墙。
- **明金 gold `#C9A227`** — 纪律色。只走 1px 金线勾边、印框、编号标签外框。**永不作为正文字色**（金字在任何底上对比都不足），永不作为底色。
- **黛蓝 dai `#2E3A4A`** — 冷托底。做过渡页、数据页的深色场，让红金有呼吸的间隔。绢白字在其上 10:1，稳。
- **朱印 seal `#BE3626`** — 落款色。比宫墙红更亮更橘的一点朱砂，只出现在方印里，一页一印。绢白印文在其上 4.9:1。

### Surface
- **旧绢 canvas `#F3EAD6`** — 页面底，做旧的暖绢纸，不用纯白。
- **素笺 surface `#FBF6EA`** — 卡片面，比底色亮一档，靠明度差分层，不靠阴影。

### Text
- **漆黑 ink `#241A15`** — 正文。暖调近黑，不用纯黑，避免数码刺眼。绢底上 14:1。
- **古铜 muted `#746351`** — 次要文字、图注、页脚。绢底上 4.8:1，压得下去又读得清。
- **绢白 on-primary `#F5EFE1`** — 红墙与黛蓝上的反白字与印文。

### Line
- **描边浅金 hairline `#D9C7A0`** — 1px 分隔线与卡片默认边，比明金更淡，是金的"影子"，用于不该抢戏的分隔。

对比度自检（WCAG AA，均 ≥ 4.5:1）：绢白/宫墙红 6.6，宫墙红/绢纸 6.4，漆黑/绢纸 14.2，绢白/朱印 4.9，古铜/绢纸 4.8，绢白/黛蓝 10.1，宫墙红/素笺 7.1。

## Typography

**Font Family**
- 大标题与标题：`"Noto Serif SC", "Songti SC", "STSong", serif`。重字重的思源宋做碑刻感竖排大字，横细竖粗即气派，末尾必带 Songti SC / STSong 系统兜底，断网也不塌成 Times。
- 正文与按钮：`Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`。宋做骨、无衬线做肉，正文用干净人文无衬线换取长文可读，兜底到苹方 / 雅黑。
- 序号与数据：`"Playfair Display", "Didot", "Bodoni MT", "Songti SC", serif`。高对比拉丁衬线做巨号典藏编号 01 / 02，末尾兜底 Songti SC 防缺字。

**中文铁律**：所有中文栈末尾都带系统兜底；**中文绝不用日文字体（Mochiy / Zen Maru 等）渲染**，简体会缺字变豆腐。要竖排就用 `writing-mode: vertical-rl` 排真中文，不用图片假字。

**Hierarchy**

| Role | 用途 | Size / Weight | 关键 |
|---|---|---|---|
| display-xl | 封面竖排主标题 | 72 / 900 | 一页一句，竖排 |
| display-lg | 金句页 / 收尾大字 | 44 / 700 | 占屏一句 |
| heading | 卡片标题 / 导航 / 印文 | 24 / 600 | 宋体骨 |
| body | 正文 | 16 / 400，行高 1.8 | 无衬线，宽行距透气 |
| numeral | 典藏编号 / 巨型数据 | 96 / 700 | 拉丁高对比衬线 |
| button | 按钮 | 15 / 600，字距 1.5 | 宽字距压得住 |
| eyebrow | 馆藏标签 / 眉题 | 12 / 600，字距 4 | 全大写宽字距 |
| caption | 图注 / 页脚 | 13 / 400 | 古铜色，退居次位 |

**Principles**：最大字与正文至少 1:4（72 对 16）。标题竖排时逐字断，横排时靠 `text-wrap: balance` 均衡分行，绝不把单字或标点甩成孤行。中文限宽用 `em` / `px`，不用 `ch`（`ch` 是拉丁 0 宽，会让中文提前折行出孤字）。

## Layout

**Spacing** 取 4 / 8 / 16 / 24 / 40 / 80 的六档节奏，section 之间用 80 拉开呼吸，模块内用 16 / 24 收紧。留白不是均匀撒满，是像手卷的空段：一段密的碑文后面，必给一段大空。

**Grid & Container**：桌面 12 栏，最大内容宽 1180px 居中。**版心刻意偏右三分**，给竖排主标题留出右侧一整列"界行"（手卷的分行竖线），左下角放小字眉题与英文，模拟展卷的视线动线。

**Whitespace 哲学**：绢纸留白是主角之一。宁可一屏只放一句竖排大字加一方印，也不把信息塞满。密与空的对比，就是这套的呼吸。

## Elevation & Depth

**这套不靠阴影分层，靠金线与叠压。** 卡片默认只有 1px 金线勾边（hairline / gold），层级差用底色明度（canvas → surface 亮一档）表达，不加 drop-shadow。

真正的"深度"来自签名叠压：**朱印盖在金线框之上、金线框盖在红墙之上**，三层实体叠压制造纸面的物理厚度感，比任何模糊阴影都真。

深色页（红墙、黛蓝）**不加辉光、不加 `backdrop-filter`**。要发光就静态，本系统压根不需要发光。**不动画化任何 `box-shadow` / `text-shadow`**（逐帧重绘极贵），呼吸感靠留白节奏，不靠闪。

## Shapes

**Border Radius 全线归零**：宫门是方的，`rounded.none` 是默认，方块面才立得住气。仅两个例外：朱印方章取 `xs` 2px（印石的极轻倒角），馆藏小标签取 `sm` 6px。圆角一多，宫气就散。

**窗棂母题**：核心几何是隔扇窗棂的方格网，用重复线性渐变画 1px 金线格纹当装饰底或卡片框，四角配回纹 / 云纹短线收口。

**图片几何**：文物图走严格矩形出血或团扇圆光（正圆裁切）二选一，配 1px 金线勾边。不用无意义的斜切与不规则 blob，那不是宫墙的语言。

## Components

- **nav-bar**：绢纸底，宋体馆名，底部 1px 描边浅金。方正，无阴影。
- **button-primary**：红墙底，绢白字，**外围 1px 明金勾边**（金线勾边签名），零圆角。宽字距把字撑开。
- **button-ghost**：绢纸底，宫墙红字，红边框，零圆角。次级动作。
- **card-lattice**：素笺底，漆黑正文，**金线窗棂框**，零圆角。承载文物说明与图文。
- **stat-block**：素笺底，巨号拉丁序号做典藏编号，顶部描边浅金线分节。
- **seal-mark**：朱印底，绢白反白印文，金框，2px 微倒角。一页一印，是落款不是贴纸。
- **collection-tag**：素笺底，宫墙红眉题，金边小圆角，做"馆藏 · No.031"这类标签。
- **footer**：绢纸底，古铜次要字，顶部 1px 明金线收口。

## Presentation System

做成 16:9 演示时，对齐 HeiGe-PPT 的 **一页一句话 + 黄金三秒 + 视觉锤**。这套的视觉锤写死是三件套的叠压：**红墙场 + 金线窗棂框 + 一方朱印**。观众三秒内看到红墙压场、金线勾边、朱印落款，就知道这是典藏级的东西。

- **封面 slide-cover**：绢纸底，右三分竖排 72px 宋体主标题，左侧一道竖金线当界行，左下角横排英文眉题，竖列末端盖一方朱印。整屏就一句话，那句话就是竖排大字。
- **过渡页 slide-section-divider**：整屏黛蓝，左上角巨号拉丁章节号（金色描边），右侧竖排小标题，金线收边。冷色留白给眼睛一个换气。
- **数据页 slide-stat-hero**：黛蓝场，中央一个 96px 拉丁巨数（金），下方绢白小字标单位与出处。一屏一个数，别塞第二个。
- **金句页 slide-quote**：绢纸底，居中偏上一句 44px 宫墙红宋体大字，下方一道描边浅金短线，右下角一方小朱印落款。占屏一句，狠。
- **收尾页 slide-closing**：整屏红墙，绢白 44px 行动号召，底部金线，正中盖一方大朱印收卷。红墙盖章 = 闭幕。

## Signature Moment

**UI 签名：朱印破界（The Seal That Breaks the Frame）。** 每个主 CTA 与英雄卡片都裹一圈 1px 明金窗棂勾边，右上角实压一方朱印，**印章故意越过金线框几个像素、盖在框线之上**，像手工钤印时压出了边。印里两个绢白反白字。这一处"印 > 金线 > 红墙"的三层实体叠压，是换任何模板都做不出来的手感。

```css
/* 窗棂金线框 + 朱印破界 */
.lattice{
  position:relative; padding:24px; background:#FBF6EA;
  border:1px solid #C9A227;               /* 金线勾边 */
  background-image:                        /* 窗棂方格纹 */
    repeating-linear-gradient(0deg,transparent 0 47px,#D9C7A0 47px 48px),
    repeating-linear-gradient(90deg,transparent 0 47px,#D9C7A0 47px 48px);
}
.lattice::after{                           /* 朱印越过金线框 */
  content:"藏"; position:absolute; top:-14px; right:-14px;
  width:44px; height:44px; display:grid; place-items:center;
  background:#BE3626; color:#F5EFE1; border:2px solid #C9A227;
  font-family:"Noto Serif SC","Songti SC",serif; border-radius:2px;
}
```

**Deck 签名：竖排开卷（Vertical Title Unrolls）。** 封面主标题用 `writing-mode: vertical-rl` 竖排成一列大号宋字，右侧起排、自上而下，左边一道细金线当手卷的界行，横排英文眉题小小地缩在左下，竖列尽头落一方朱印。整页读起来像展开一段手卷，那一列竖字就是这页唯一的一句话。

```css
.scroll-title{
  writing-mode:vertical-rl; text-orientation:upright;
  font-family:"Noto Serif SC","Songti SC","STSong",serif;
  font-weight:900; font-size:clamp(40px,7vw,72px);
  border-right:2px solid #C9A227;          /* 界行金线 */
  padding-right:28px; color:#241A15;
}
```

## Do's and Don'ts

**Do**
- 主色克制：宫墙红压场，明金只勾边和落款，黛蓝托底，三色各司其职。
- 竖排立骨：主标题竖排楷宋，横细竖粗即气派，一页一句话。
- 方到底：零圆角块面、金线勾边、朱印叠压，实体分层不靠阴影。
- 留白当主角：一屏一句竖字加一方印，也比塞满强。
- 一页一印：朱印是落款，钤在收束处点睛。

**Don't**
- **不碰紫蓝俗套渐变（`#667eea → #764ba2`）及其全家桶**，那是 AI 界面的身份证，与宫墙气质天生互斥。
- **不做居中卡片三件套**（一行标题 + 一行灰副标 + 三个等宽圆角卡整页重复），这套靠竖排与叠压立气，不靠模板栅格。
- **中文绝不用日文字体（Mochiy / Zen Maru 等）渲染**，简体会缺字变豆腐；要中文展示体就用思源宋 / Songti SC。
- **不动画化阴影 / box-shadow**（逐帧重绘极贵），本系统本就不靠阴影，靠金线与朱印。
- 不给窗棂卡片加圆角，宫门是方的，圆角一上就散气。
- 不把整屏铺满金色，金是点睛的勾边与印，不是底色，满金即俗。
- 不用假书法滤镜或描边字冒充楷宋，要碑刻感就选真的重字重宋体。
- 不让朱印乱盖三四方，一页一印，印是落款不是贴纸。

## Responsive Behavior

| 断点 | 布局 |
|---|---|
| ≥ 1024px | 12 栏，版心偏右，竖排主标题占右侧界行列 |
| 768–1023px | 8 栏，竖排标题保留但收窄字号 clamp |
| ≤ 767px | 单列重排，**竖排转横排** |

移动端是**重新编排**，不是桌面缩一缩。窄屏下竖排主标题改回 `writing-mode: horizontal-tb` 横排（竖排在 390px 会高到爆屏），章节巨号移到标题上方，窗棂格纹底简化为单条金线，朱印从"破界叠压"改为标题下方独立钤盖。出货前在桌面与 ≤ 390px 各扫一遍：无孤字、无横向溢出（`scrollWidth == clientWidth`）。所有动画走 `@media (prefers-reduced-motion: reduce)` 可一键关停，只动 `transform` / `opacity`。

## Anti-Slop Pledge

抹掉品牌名，这套依然一眼是用心做的：**深宫墙红压场、明金只走勾边、竖排楷宋像展开的手卷、一方朱印越过金线框实压落款**。它有宫墙的方正与典藏的克制，不是任何流水线套模板能生成的那种"现代简约"安全废话。署名 HeiGe-Design。
