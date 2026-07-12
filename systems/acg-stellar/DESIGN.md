---
version: alpha
name: acg-stellar-design-system
description: >-
  acg-stellar (二次元星轨) is a maximalist anime-fan identity built on speed and
  sparkle. Idol-magenta #FF1F8F leads, clashing against cyber-cyan and
  star-yellow over a starlight-white canvas, with heavy near-black type carrying
  the shout. Sharp italic Archivo display collides with rounded Nunito body. The
  signature is a diagonal shear split cut by converging speed lines, focused on a
  single four-point white sparkle. It fuses UI and 16:9 deck into one high-energy,
  manga-impact system. Authored by HeiGe-Design.

colors:
  primary: "#FF1F8F"
  on-primary: "#1A0F2E"
  ink: "#16122B"
  canvas: "#F4F5FB"
  surface: "#FFFFFF"
  muted: "#5B5470"
  hairline: "#DAD8E8"
  accent: "#12E6FF"
  spark: "#FFE500"

typography:
  display-xl:
    fontFamily: '"Archivo", "Arial Narrow", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 88px
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: -2px
  display-lg:
    fontFamily: '"Archivo", "Arial Narrow", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 56px
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: -1.2px
  heading:
    fontFamily: '"Archivo", "Arial Narrow", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.4px
  body:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: 0px
  body-mono:
    fontFamily: '"JetBrains Mono", "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0px
  button:
    fontFamily: '"Baloo 2", "Nunito", "Noto Sans SC", "PingFang SC", sans-serif'
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.3px
  caption:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: '"JetBrains Mono", "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 3px

rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 20px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  section-heading:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    padding: "{spacing.md} {spacing.md}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  rule-divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    height: 2px
  stat-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.spark}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  badge:
    backgroundColor: "{colors.spark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  tag-chip:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  figure-caption:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    padding: "{spacing.section} {spacing.xl}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.spark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# 二次元星轨 · acg-stellar

> KIRA★RUSH 是一个 HeiGe-Design 原创虚构的 ACG 社区品牌。它把「速度」和「闪光」两件事做到极端。一屏冲刺，一颗星爆。撞色不调和，斜切不对齐，字大到有点过分。这是给二次元人群造的、带风的界面。

## Overview

这套的气质总述：**冲刺感**。人物入场自带速度线，命中瞬间迸出一颗四角白星。它不追求耐看，它追求「三秒内把人拽进去」。

主色的两个角色分工明确。**偶像品红 #FF1F8F 是喊话的那个人**，占据大按钮、金句页、命中焦点，是全场唯一有资格发光的颜色。**电子青 #12E6FF 是速度本身**，走描边、速度线、标签、分区，负责制造运动方向感。第三方 **星芒黄 #FFE500** 只在数据和星爆上出现，是「打中了」的那声脆响。三色互相不让步，形成 CMY 式的动漫撞色，这是维持张力的核心。

字体签名走「锐利 × 圆润」的碰撞。标题用 Archivo 超粗斜体（900 italic），像被速度拉斜的招牌；正文用 Nunito 圆体，把冲击力接住、让人读得下去。数字单独交给 JetBrains Mono，做成计分板一样的等宽读数。

整体节奏不是均匀铺满，而是「爆一下，喘一口」。一屏轰炸信息，下一屏只留一句话加一颗星。张弛靠版式，不靠继续堆色。

## Colors

高明度撞色是这套的立身之本。规则只有一条：**同屏最多三个纯色主角同时在场，其余全部退给中性。**

### Brand & Accent

| Token | Hex | 角色 | 用途 |
|---|---|---|---|
| `primary` | `#FF1F8F` | 偶像品红 | 主按钮、金句页底、命中焦点、CTA。全场唯一发光色 |
| `accent` | `#12E6FF` | 电子青 | 速度线、描边、标签芯片、分区色、图表次序 |
| `spark` | `#FFE500` | 星芒黄 | 数据数字、星爆闪光、勋章徽章、命中高亮 |

### Surface

| Token | Hex | 用途 |
|---|---|---|
| `canvas` | `#F4F5FB` | 页面底色，星光白带一点冷，作速度线和星芒的画布 |
| `surface` | `#FFFFFF` | 卡片面，纯白让粗黑描边卡片跳出来 |

### Text

| Token | Hex | 用途 |
|---|---|---|
| `ink` | `#16122B` | 正文与标题主色，近黑带一丝夜紫。也当深色区块底 |
| `on-primary` | `#1A0F2E` | 落在亮色填充（品红/青/黄）上的重黑字，漫画音效那种粗黑 |
| `muted` | `#5B5470` | 次要文字、图注、元信息 |
| `hairline` | `#DAD8E8` | 1px 分隔线、导航底边 |

**主色用色纪律**：亮色填充上一律压重黑字（`on-primary`），不用白字。品红上压白字对比只有 3.6:1，读不清且泄气；压近黑字到 5.1:1，既合规又是最正的动漫海报观感。深色区块（`ink` 底）上，星芒黄跳到 14:1、电子青跳到 12:1，是全套最亮的两处命中。

## Typography

### Font Family

- **Display / Heading**：`"Archivo"` 打头，超粗字重配 `font-style: italic` 做速度斜切；断网兜底 `"Arial Narrow"` 保留压缩锐利感，中文兜底 `"Noto Sans SC" / "PingFang SC" / "Microsoft YaHei"`。中文标题渲染为粗正体，拉丁渲染为锐利斜体，二者同场是刻意的碰撞。
- **Body / Caption / Button**：`"Nunito"`（圆体，接得住冲击又读得顺），`"Baloo 2"` 给按钮加胖圆手感，中文兜底同上。
- **Numbers**：`"JetBrains Mono"` 等宽计分板数字，纯数字场景无需中文，末尾兜底 `monospace`。

**中文铁律**：中文绝不用日文字体（Mochiy、Zen Maru 等）渲染，简体会缺字变豆腐。要圆润中文就靠 `Noto Sans SC`，要俏皮备选 `ZCOOL KuaiLe`。所有能承载中文的字体栈末尾都带系统兜底，webfont 加载失败也不塌成 Times。

### Hierarchy

| Role | Font | Size | Weight | 用途 |
|---|---|---|---|---|
| `display-xl` | Archivo italic | 88px | 900 | 封面主标、Hero 冲刺大字 |
| `display-lg` | Archivo italic | 56px | 900 | 分区标题、金句、数据大字 |
| `heading` | Archivo | 28px | 800 | 卡片标题、区块小标 |
| `body` | Nunito | 17px | 500 | 正文，行高 1.7 留呼吸 |
| `body-mono` | JetBrains Mono | 15px | 600 | 计分板数字、指标 |
| `button` | Baloo 2 | 16px | 700 | 按钮文字 |
| `caption` | Nunito | 13px | 600 | 图注、导航、标签 |
| `eyebrow` | JetBrains Mono | 12px | 700 | 全大写 kicker，字距 3px，速度感前缀 |

### Principles

- **字号对比拉到 1:5 以上**。`display-xl` 88px 对正文 17px，最大那个字就是要「大到有点过分」。
- **标题左对齐或沿斜切线对齐**，绝不无脑居中。斜切线本身就是版式的骨。
- **斜体只给拉丁**。中文不做假斜体（会糊），靠字重和错位制造速度。

## Layout

### Spacing

8pt 基准的等比步进：`xs 4` / `sm 8` / `md 16` / `lg 24` / `xl 40` / `section 80`。

- 组件内边距走 `sm`–`lg`。
- 区块之间用 `section`（80px）拉开，给「喘一口」的呼吸。
- 撞色越猛，留白越要舍得给，否则整页糊成一团。

### Grid & Container

- 桌面 12 栏，最大容器 1200px。
- **斜切分屏是核心版式**：主视觉区用一条 45°（或 22.5°）斜切线把画面劈成两个撞色区（品红区 / 青-墨区），内容沿斜线错位排布，不走规整矩形。
- 信息墙区块允许密集堆叠、轻微旋转（±3°）的贴纸式卡片，制造「热闹」，但每墙只允许一个视觉主角。

### Whitespace 哲学

留白是节奏工具，不是均匀撒满每条缝。爆炸屏之后必须跟一屏只有一句话加一颗星的空屏。密度的价值来自它旁边的空。

## Elevation & Depth

这套不靠柔和阴影分层，靠**硬描边 + 速度线 + 星芒**制造纵深。

| 层级 | 手法 |
|---|---|
| 底层 | `canvas` 星光白，可叠极淡的放射状速度线纹理（静态 SVG） |
| 卡片层 | `surface` 纯白 + `3px` 实心 `ink` 描边，漫画分格感，可加 `4px 4px 0` 硬 offset 阴影（不模糊、不动画） |
| 焦点层 | 品红填充 + 星芒白四角星命中点，全场最亮 |
| 深色区 | `ink` 底承载数据爆发页，青/黄在其上达到最高对比 |

**深度铁律**：星芒的「光」用静态 `box-shadow` 或 SVG 描边模拟，**绝不动画化阴影**（逐帧重绘掉帧）。速度线是静态图层或一次性 `transform` 扫入，不做常驻发光循环。不使用 `backdrop-filter`。

## Shapes

### Border Radius

| Token | Value | 用途 |
|---|---|---|
| `none` | 0px | 斜切分屏、速度面板、所有 slide、锐利边 |
| `sm` | 6px | 徽章、导航 |
| `md` | 12px | 数据块 |
| `lg` | 20px | 特性卡（圆润接住撞色） |
| `pill` | 9999px | 胶囊按钮、标签芯片 |

**几何语言**：锐利的斜切（`none`）负责速度，胖圆的胶囊（`pill`）负责亲和。二者对撞，正是「锐利斜体 × 圆体」在形状上的延续。图片一律做斜切平行四边形裁切，不用圆角矩形。

## Components

- **button-primary**：品红胶囊，压重黑字（对比 5.1:1）。这是唯一发光的行动点，一屏最多一个。
- **button-secondary**：白底品红描边胶囊，`ink` 字。次级动作，退到主按钮身后。
- **section-heading**：Archivo 800 区块小标，左对齐贴斜切线。
- **card-feature**：白底 `3px` 近黑描边、`lg` 圆角，漫画分格。允许 ±3° 轻微旋转堆叠。
- **stat-block**：`ink` 底计分板，星芒黄等宽数字（对比 14:1），像刚打出的分数。
- **badge**：星芒黄底重黑字 kicker 徽章，`sm` 角。用于「NEW」「LIVE」「限定」这类命中标记。
- **tag-chip**：电子青胶囊，重黑字（对比 12:1）。速度感分类标签，可成排堆叠。
- **figure-caption**：`muted` 灰紫图注，压在 canvas 上（对比 6.5:1），退到最后。
- **nav-bar**：白底 `ink` 字，`2px` hairline 底边，克制不抢戏，把舞台让给内容。
- **footer**：`ink` 底，星光白字（对比 16:1），顶部一道 `4px` 品红实线收口。

## Presentation System

把这套做成 16:9 演示时，对齐 HeiGe-PPT 的三条：**一页一句话、黄金三秒、视觉锤**。视觉锤固定为「斜切分屏 + 速度线 + 四角星芒」三件套，每页至少命中其一。

- **封面 slide-cover**（`display-xl`，canvas 底）：45° 斜切把画面劈成品红区和墨区，主标 Archivo 斜体沿斜线断开横跨接缝，速度线从右下角向标题汇聚，交点落一颗星芒白四角星。黄金三秒靠这颗星立住气质。
- **过渡 slide-section-divider**（`ink` 底，青字）：满屏深墨，一个巨型电子青章节号（01 / 02）压在正中，背后放射状速度线向号码收束。一页只干一件事：报下一幕。
- **数据 slide-stat-hero**（`ink` 底，星芒黄字）：漫画命中框。巨型等宽黄数字居斜切偏心位，身后白色速度线放射如冲击帧，数字顶端一颗星爆。单位小字压在数字肩上。一页只讲一个数。
- **金句 slide-quote**（品红底，重黑字）：满屏偶像品红，一句占屏狠话用 `display-lg` 压上重黑字（对比 5.1:1），右下角一颗青色星点收尾。一页一句话的极致。
- **收尾 slide-closing**（`ink` 底，星光白字）：深墨底 + 一颗最大的星芒白四角星居中，一行行动号召，配一枚品红胶囊按钮。冲刺终点，命中，收束干脆。

## Signature Moment

**换个模板绝对做不出来的两个签名时刻，写死在这里。**

### UI 签名：斜切星爆 Hero（Diagonal Star-Burst Hero）

首屏被一条对角线斜切成两半，左上品红、右下墨青，接缝是硬边。多条电子青速度线从四周向接缝中点汇聚，命中点迸出一颗**四角白星**（十字光芒 + 星芒描边，静态 SVG）。Archivo 斜体大标题正好横跨这条斜切接缝，一半字压在品红上、一半压在墨区上，视觉张力全部集中在那颗星。载入时速度线用一次性 `transform` 从边缘扫入到位即停，星芒用 `opacity` 淡入，全程不碰阴影动画、不常驻 rAF。这个「斜切 + 汇聚速度线 + 命中星爆」的合成，是这套的身份证。

### Deck 签名：满屏冲刺数据页（Impact-Frame Stat Slide）

`slide-stat-hero` 的漫画命中框。深墨满屏，一个巨型等宽星芒黄数字偏心压在斜切位上，身后是一整圈白色放射速度线，像热血漫定格的冲击帧，数字尖端顶着一颗星爆。观众三秒内先被速度线拽到数字，再被星芒钉住结论。这一页离开「速度线放射 + 等宽黄数字 + 顶点星爆」的配方就复现不出来。

## Do's and Don'ts

### Do

- 同屏最多三个纯色主角（品红 / 青 / 黄），其余退给中性，撞色才有张力。
- 亮色填充一律压重黑字（`on-primary`），漫画音效那种粗黑。
- 用斜切线当版式骨架，内容沿斜线错位对齐。
- 每页命中「斜切 / 速度线 / 星芒」三件套至少其一。
- 爆炸屏后跟一屏空屏，靠留白造节奏。
- 字号对比拉到 1:5，最大字大到有点过分。

### Don't

- **不碰紫蓝俗套渐变**（`#667eea → #764ba2`）及其全家桶，这是 AI 界面的身份证。
- **不做居中卡片三件套**（一行标题 + 一行灰副标 + 三个等宽圆角卡）整页重复。
- **中文不用日文字体**（Mochiy、Zen Maru 等）渲染，简体缺字变豆腐，中文走 Noto Sans SC / PingFang SC。
- **不动画化阴影 / 星芒发光**，逐帧重绘掉帧；发光用静态 shadow，速度线用一次性 transform。
- 不用 `backdrop-filter`（滚动持续重绘），半透明纯色替代。
- 亮色上不压白字（对比不够，且泄了动漫的气）。

## Responsive Behavior

移动端是**重新编排**的另一段叙事，不是桌面端缩一缩。

| 断点 | 布局 |
|---|---|
| ≥1200px | 12 栏，斜切分屏满血，信息墙密集堆叠 |
| 768–1199px | 8 栏，斜切角度收缓（22.5°），卡片旋转收到 ±1.5° |
| ≤767px | 单栏纵向冲刺流，斜切从「左右分屏」改为「上下分段」，速度线改竖向下冲，星芒缩小但保留命中点 |

折叠策略：

- `display-xl` 用 `clamp(40px, 9vw, 88px)`，最长行加 `white-space: nowrap` 锁整行，保证 ≤390px 也不出孤字、不横向溢出。
- 手动断行标题按最长行收敛字号，绝不把单字或标点甩到独立一行。
- 中文限宽用 `em` 或 `px`，不用 `ch`（`ch` 是拉丁 0 宽，会让中文提前折行出孤字）。
- 信息墙在窄屏改为纵向单列，堆叠改为顺序展开，密度让位于可读。
- 所有速度线 / 星芒动画都能被 `@media (prefers-reduced-motion: reduce)` 一键关掉。

## Anti-Slop Pledge

抹掉品牌名，这套依然一眼是用心做的：斜切接缝上那颗汇聚速度线命中的四角星芒，是任何流水线模板都拼不出来的手感。品红只发一次光，青只跑速度，黄只报命中，克制处见功夫，热闹处有主角。

---

*Authored by HeiGe-Design · MIT · 原创虚构品牌，不逆向任何真实公司。*
