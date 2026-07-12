---
version: alpha
name: AuroraMesh-design-system
description: >-
  Aurora Mesh (极光) is a machine-learning platform identity for the dark-tech era.
  A midnight-black canvas #0a0b12 is crossed by one drifting aurora ribbon that flows
  from aurora green #34d399 into sky blue #38bdf8. Type is engineered: Space Grotesk
  display cut into gradient text, Geist for body, Geist Mono for tabular metrics.
  The signature is a dark glass card whose 1px edge catches the aurora light drifting
  behind it. Glow is radial only, never blurred, never animated.

colors:
  primary: "#34d399"
  on-primary: "#06131f"
  accent: "#38bdf8"
  glow: "#7dd3fc"
  ink: "#e6edf3"
  muted: "#94a3b8"
  canvas: "#0a0b12"
  surface: "#12141d"
  hairline: "#232838"

typography:
  display-xl:
    fontFamily: '"Space Grotesk", "Geist", -apple-system, BlinkMacSystemFont, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -2px
  display-lg:
    fontFamily: '"Space Grotesk", "Geist", -apple-system, BlinkMacSystemFont, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 46px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1px
  heading:
    fontFamily: '"Geist", "Inter", -apple-system, BlinkMacSystemFont, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
  body:
    fontFamily: '"Geist", "Inter", -apple-system, BlinkMacSystemFont, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px
  body-mono:
    fontFamily: '"Geist Mono", "JetBrains Mono", "SF Mono", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.5px
  eyebrow:
    fontFamily: '"Geist Mono", "JetBrains Mono", "SF Mono", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 2.5px
  button:
    fontFamily: '"Geist", "Inter", -apple-system, BlinkMacSystemFont, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.2px
  caption:
    fontFamily: '"Geist", "Inter", -apple-system, BlinkMacSystemFont, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.1px

rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 16px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 28px
  xl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 26px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 26px
  badge-live:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  eyebrow-kicker:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-glass:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    height: 1px
  link-aurora:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.glow}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
---

# Aurora Mesh · 极光

> ML 平台的暗色宣言。午夜黑上一条流动的极光，从青绿滑向天蓝，其余全部让给黑。

## Overview

极光（Aurora Mesh）是暗色科技家族里冲击力最强的一套，专为机器学习平台、数据科学产品、生成式 AI 界面而生。整套系统只讲一件事：在一整片午夜黑 `#0a0b12` 上，让一条极光缓缓流过。

主色承担两个角色。**极光青绿 `#34d399` 是能量的落点**：按钮、指标、被点亮的关键数字，只有真正重要的东西才配拿到它。**天蓝 `#38bdf8` 是极光的另一端**，和青绿组成那条 `linear-gradient(120deg, {colors.primary}, {colors.accent})` 的光带，绝不单独当填充色乱用，它永远在渐变里出现。两色之外全是黑与灰，节奏靠留黑和字号拉开，不靠堆色。

字体是工程化的三层：Space Grotesk 做 display，被切成 gradient text；Geist 承载正文与界面；Geist Mono 撑起 tabular 指标。中文栈末尾一律压 Noto Sans SC / PingFang SC 系统兜底，断网也不塌。

整体节奏是**大面积留黑 + 单点发光**。一屏只允许一处极光成为主角，配角全部压回黑里呼吸。发光只用 `radial-gradient` 和静态 `box-shadow`，永远不模糊、不逐帧动。

## Colors

### Brand & Accent
| Token | Hex | 角色 |
|---|---|---|
| primary | `#34d399` | 极光青绿。能量落点：主按钮、关键指标、被点亮的数字。克制使用 |
| accent | `#38bdf8` | 天蓝。极光的另一端，只在渐变光带与次级强调里出现 |
| glow | `#7dd3fc` | 微光边。玻璃卡 1px 边、极光地平线的高光，比 accent 更亮更薄 |
| on-primary | `#06131f` | 极深午夜蓝黑。压在青绿或天蓝上的文字，保证 9:1 以上对比 |

### Surface
| Token | Hex | 角色 |
|---|---|---|
| canvas | `#0a0b12` | 午夜黑页面底。所有极光都从这里升起 |
| surface | `#12141d` | 深色玻璃卡面。比 canvas 抬高一档，作为浮层 |
| hairline | `#232838` | 1px 冷灰分隔线与常规卡边，不发光时用它 |

### Text
| Token | Hex | 角色 | 对比度 vs canvas |
|---|---|---|---|
| ink | `#e6edf3` | 正文与标题。冷白，不用纯白 | 16.6:1 |
| muted | `#94a3b8` | 次要文字、eyebrow、脚注 | 7.6:1 |

### Semantic
青绿本身就是"运行中 / 成功 / 收敛"的语义色，天蓝是"信息 / 链接 / 进行中"。系统不引入额外红黄，需要告警时用 `on-primary` 深底反白提示，保持整套黑绿蓝的克制。所有文字色对深底对比度 ≥ 7:1，组件层对比度全部 ≥ 8:1，越过 WCAG AA 一大截。

## Typography

### Font Family
- **Display / Gradient text** — Space Grotesk，几何工程感强，字腔宽，切成 gradient text 时笔画够粗接得住渐变。
- **UI / Body** — Geist，中性、屏幕友好，17px 正文行高 1.65 保证暗色下可读。
- **Metrics / Kicker** — Geist Mono，tabular 数字对齐，指标不跳动；eyebrow 全大写 + 2.5px 字距做工程标签。
- **中文兜底铁律**：每条栈末尾都压 `"Noto Sans SC", "PingFang SC", "Microsoft YaHei"`（无衬线）。**中文绝不用日文字体渲染**（Mochiy / Zen Maru 等），简体会缺字变豆腐。拉丁 display 也补 `-apple-system` 系统兜底，断网不塌成 Times。

### Hierarchy
| Role | Font | Size | Weight | Tracking | 用途 |
|---|---|---|---|---|---|
| display-xl | Space Grotesk | 72px | 700 | -2px | 首屏 gradient text 标题、数据页巨号 |
| display-lg | Space Grotesk | 46px | 600 | -1px | 章节过渡号、金句、收尾行动句 |
| heading | Geist | 22px | 600 | -0.2px | 卡片标题、模块小标 |
| body | Geist | 17px | 400 | 0 | 正文、导航项 |
| body-mono | Geist Mono | 32px | 600 | -0.5px | tabular 指标数字 |
| eyebrow | Geist Mono | 13px | 600 | 2.5px | 全大写 kicker、live 徽标 |
| button | Geist | 15px | 600 | 0.2px | 按钮标签 |
| caption | Geist | 13px | 400 | 0.1px | 脚注、时间戳、图注 |

### Principles
- 最大字与正文对比 72:17 ≈ 4.2:1，标题敢大到有点过分，才压得住整片黑。
- gradient text 只用在 display-xl / display-lg，正文永远纯 ink，渐变泛滥就廉价。
- 数字全部走 mono tabular，仪表盘刷新时位数不抖动。
- 全部左对齐或网格对齐，拒绝无脑居中。

## Layout

### Spacing
8 基准的六档：`xs 4 / sm 8 / md 16 / lg 28 / xl 48 / section 96`。模块内用 md/lg，模块间用 xl，整屏之间用 section 96px 拉开呼吸。极光需要大留黑，宁可空，不填满。

### Grid & Container
12 栏，gutter 24px，桌面容器上限 1200px。演示态锁 16:9（1280×720 基准）。极光光带斜穿网格，内容严格贴网格对齐，制造"有序内容漂浮在无序光晕之上"的张力。

### Whitespace
留白是黑的呼吸，不是缝隙填充。每屏定一个主角后，四周留出至少 section 级黑场，让那一处极光独自发亮。反面就是 AI slop 的均匀密度，从头到尾一个调子。

## Elevation & Depth

暗色系不用投影堆叠，用**光**分层。

| 层级 | 手法 |
|---|---|
| 底层 canvas | 纯午夜黑，一到两处 `radial-gradient` 极光光晕铺底，opacity 克制 |
| 浮层 surface | 深色玻璃卡，`background: rgba(255,255,255,.04)` 半透白 + 1px `glow` 微光边 |
| 强调层 | 主按钮 / 关键指标带静态青绿 `box-shadow: 0 0 40px rgba(52,211,153,.28)` 常亮辉光 |

### 深度铁律
- **辉光只用 `box-shadow` 和 `radial-gradient`**，常亮不闪。
- **绝不用 `backdrop-filter`**：滚动时持续重绘会掉帧，玻璃感用半透明纯色 + 1px 微光边替代。
- **绝不动画化 `box-shadow` / `text-shadow`**：逐帧重绘极贵。要"活"就动 `transform` / `opacity`。
- 模糊装饰层（极光 blob）一律静止，最多动 `opacity`，绝不给它加位移或缩放动画。

## Shapes

### Border Radius
| Token | 值 | 用途 |
|---|---|---|
| none | 0px | 全屏演示页、footer，硬边收束 |
| sm | 6px | eyebrow 标签、小 tag |
| md | 10px | 指标块、导航容器 |
| lg | 16px | 玻璃卡、feature 卡 |
| pill | 9999px | 按钮、live 徽标 |

### 图形几何
极光光晕是唯一的有机形：超大 `radial-gradient` 椭圆斜置，边缘极软。除此之外全走直角与克制圆角，硬朗工程感与柔软极光形成对撞。图片统一 16px 圆角深色描边，嵌进玻璃卡里像一块被点亮的面板。

## Components

- **button-primary** — 青绿实底 + `on-primary` 深字（对比 9.7:1），pill 形，静态青绿辉光。整页只出现一次，是唯一的能量落点。
- **button-secondary** — surface 底 + accent 天蓝字（对比 8.5:1）+ hairline 边，pill 形。次级动作，不发光。
- **badge-live** — accent 实底 + `on-primary` 字（对比 8.6:1），pill 形，配 eyebrow 全大写 `● LIVE`，标运行态。
- **eyebrow-kicker** — canvas 底 + muted 字，全大写 2.5px 字距的工程 kicker，压在大标题上方。
- **nav-bar** — 顶栏，canvas 底 + hairline 底边，滚动后不加毛玻璃，只加 hairline 描边强化边界。
- **card-glass**（签名组件）— surface 半透底 + ink 字 + **1px `glow` 微光边**，浮在极光光晕上，边缘采样背后的极光色。
- **card-feature** — surface 底 + hairline 边 + heading 标题，常规内容卡，不发光，把注意力让给玻璃卡。
- **stat-block** — surface 底 + 青绿 mono 指标（对比 9.5:1），tabular 数字，仪表盘的基本单元。
- **footer** — canvas 底 + hairline 顶边 + muted caption，直角收束，不留装饰。
- **divider** — 1px hairline 细线，pill 端头，模块之间的冷灰分隔，不发光时的分层手段。
- **link-aurora** — canvas 底 + glow 微光字，行内极光高亮链接，把"可点、进行中"的语义交给那道亮蓝。

> 说明：`hairline` 与 `glow` 在实现层还承担 CSS `border-color`（card 常规边用 hairline，玻璃卡 1px 微光边用 glow），design.md 组件 schema 不表达边框，故在 token 里以 `divider` / `link-aurora` 锚定它们的语义。

## Presentation System

把这套做成 16:9 keynote，核心是**一页一句话 + 黄金三秒 + 视觉锤**。视觉锤就是那条极光光带，每一页都从午夜黑里升起，位置和强度决定这页的情绪。

- **封面页 slide-cover** — 纯午夜黑，一条极光从右上斜射铺底。标题走 display-xl gradient text（青绿→天蓝），左对齐压在下三分之一。上方一行 eyebrow kicker。黄金三秒立住"这是一个会发光的 ML 平台"。
- **过渡页 slide-section-divider** — 极黑场，左侧一个巨号 `01 / 02`（青绿 display-lg），右侧一行章节名。极光收成一道细带从编号后掠过。给强模块之间留呼吸。
- **数据页 slide-stat-hero** — 全页只有一个数字：display-xl 巨号 gradient text，下方 mono 单位与一行注解。顶部一道极光地平线横贯。视觉锤最强的一屏，放在节奏高点。
- **金句页 slide-quote** — 占屏一句话，display-lg ink 白字，`text-wrap: balance` 均衡断行避免孤字。极光退成背景极淡的一抹，让文字独大。
- **收尾页 slide-closing** — 回到深黑，一句行动号召（display-lg）+ 一个青绿 button-primary。极光在按钮背后聚成一团静态辉光，把视线收到 CTA 上，干脆收束不拖泥。

版式纪律：正文永远左对齐贴网格，只有巨型数字和封面标题允许成为全屏主角。每页问一遍"这屏主角是谁"，答不出唯一答案就重排。

## Signature Moment

换个模板绝对做不出来的两个时刻，一个给界面，一个给演示。

**UI 签名 · 极光玻璃棱台（Aurora Glass Ledge）**
首屏一片午夜黑，背后一条极光 `radial-gradient` 从青绿流向天蓝，缓缓漂移（只动 `opacity`，不动位移）。前景浮一张深色玻璃卡：`rgba(255,255,255,.04)` 半透底，**1px `glow` 微光边**——这条边不是描边色，是采样了背后极光的高光，卡漂到哪，边就被那一段极光点亮到哪。标题用 gradient text 把同一条极光切进字里。玻璃、微光边、字内渐变三者共享同一条极光，这种"光穿透层级"的一致性，是堆模板做不出来的。

**Deck 签名 · 极光地平线巨数（Aurora Horizon Stat）**
一页纯黑，正中一个巨型数字用 display-xl 渲成青绿→天蓝 gradient text，页面顶部一道极光像地平线的晨曦横贯而过，其余全是黑。一个数、一条极光、满屏留黑。观众三秒内只会记住这一个数字和那道光。它的力量全来自克制——敢把整页让给一个数字，才压得出这种冲击。

## Do's and Don'ts

### Do
- 一整片午夜黑做底，一条极光做主角，其余让给黑。
- 极光永远是青绿→天蓝的渐变，两色成对出现。
- 主色只点在真正重要处：主按钮、关键指标、封面标题。
- 玻璃卡用半透明纯色 + 1px 微光边，靠光分层不靠投影。
- 数字全走 mono tabular，刷新不跳动。
- 辉光用静态 `box-shadow` / `radial-gradient`，常亮不闪。

### Don't
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及其全家桶），那是 AI 界面的身份证，本套的极光是青绿→天蓝，方向与气质完全不同。
- **不做居中卡片三件套**：标题 + 灰副标 + 三个等宽圆角卡整页重复，这是流水线感的源头。本套靠留黑与单点发光排节奏。
- **中文绝不用日文字体渲染**（Mochiy / Zen Maru 等），简体缺字变豆腐；中文一律 Noto Sans SC / PingFang SC 系统兜底。
- **不动画化阴影 / 辉光**（`box-shadow`、`text-shadow` 逐帧重绘极贵会掉帧），发光要动就只动 `opacity`。
- 不用 `backdrop-filter` 做毛玻璃，滚动重绘卡顿，用半透明纯色替代。
- 不让极光泛滥成满屏彩色噪点，一屏只留一处成为主角。

## Responsive Behavior

移动端是重新编排的另一段叙事，不是桌面缩一缩。

| 断点 | 策略 |
|---|---|
| ≥1200px | 12 栏，极光斜穿全幅，玻璃卡与内容并列 |
| 768–1199px | 8 栏，极光收窄为一道竖向光带，卡片改上下堆叠 |
| ≤767px | 单栏，极光移到首屏顶部一道横向光晕；display-xl 用 `clamp(40px, 11vw, 72px)` 收敛，按最长行加 `white-space: nowrap` 锁行防孤字 |

零孤字铁律：手动断行的大标题按最长行收字号，`clamp()` 保证 ≤390px 也放得下，绝不把单字或标点甩到独立一行。中文限宽用 `em` / `px`，不用 `ch`（`ch` 按拉丁数字宽度会让中文提前折行出孤字）。所有极光动画都能被 `@media (prefers-reduced-motion: reduce)` 一键关停。

## Anti-Slop Pledge

抹掉品牌名，这套依然一眼看得出是人用心排的：一整片午夜黑上，一条从青绿流向天蓝的极光，一张 1px 微光边采样了背后光色的玻璃卡，一个敢占满全屏的 gradient text 巨数。没有紫蓝烂渐变，没有居中三件套，没有逐帧发光的性能陷阱。它有一个换模板绝对复制不出的签名时刻，也扛得住断网、窄屏、reduce-motion 三重生产考验。这不是流水线生成的，是有人认真让一片黑发了一次光。

— HeiGe-Design · MIT
