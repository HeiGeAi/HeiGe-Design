---
version: alpha
name: carbon-lime-design-system
description: >-
  CarbonLime is a terminal-native dark system for CLI tools, cryptography, and
  low-level engineering. Pure carbon black (#0a0a0a) holds the void; a single
  electric lime (#b4ff39) is the only hue on the page while every other value
  stays grayscale. Monospace runs the show as display type, never decoration.
  Headlines, kickers, and data are all set in Space Mono. The signature is a
  live command line, a breathing lime block cursor trailing a mono prompt,
  framed by sharp zero-radius corners, hairline grids, and a static (never
  animated) lime glow. Terminal as interface, terminal as slide.

colors:
  primary: "#b4ff39"
  on-primary: "#0a0a0a"
  ink: "#e8ece2"
  canvas: "#0a0a0a"
  surface: "#131512"
  muted: "#868d7d"
  hairline: "#262a22"
  accent: "#6f8f2a"

typography:
  display-xl:
    fontFamily: '"Space Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace'
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -1px
  display-lg:
    fontFamily: '"Space Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace'
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.5px
  heading:
    fontFamily: '"Space Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace'
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.2px
  body:
    fontFamily: 'Inter, Geist, -apple-system, BlinkMacSystemFont, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px
  body-mono:
    fontFamily: '"JetBrains Mono", "Space Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: 0px
  eyebrow:
    fontFamily: '"Space Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 2px
  button:
    fontFamily: '"Space Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.4px
  caption:
    fontFamily: '"JetBrains Mono", "Space Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.3px

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  # ── UI 界面组件 ──
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  terminal-window:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  command-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  panel-heading:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  status-dot:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  rule-hairline:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  chip-running:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  # ── slide 演示组件 (16:9) ──
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
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
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# 碳黑电绿 · CarbonLime

> `$ whoami` → 技术味最浓的那一个。等宽体不是配料，是主角。碳黑是沉默，电绿是唯一的信号。

CarbonLime 是一套终端母语的暗色系统，为 CLI 工具、终端产品、密码学、底层工程而生。它只有一种颜色——电绿 `#b4ff39`。除此之外满屏是碳黑与灰阶。设计的张力不靠堆色，靠一个会呼吸的光标、一条 hairline 网格、和大面积不说话的黑。

---

## Overview

这套的气质总述：**一台冷启动后停在提示符前的终端**。屏幕是纯碳黑 `#0a0a0a`，深到像关机，但它是醒着的——只等你敲下一行命令。

主色只有一个，它扮演两个角色：

- **信号（Signal）**：电绿是全页唯一的高饱和色。它意味着"这里有焦点、这里可交互、这里是当前行"。因为它是唯一的颜色，任何一处电绿都自带指向性，用户的眼睛会本能地追它。绿越少，绿越贵。
- **生命体征（Life）**：电绿是那个呼吸的方块光标、那道常亮的辉光。碳黑负责"死寂"，电绿负责"活着"。一动一静，就是这套的全部戏剧。

字体签名：**等宽体直接当 display**。Space Mono 顶大标题，JetBrains Mono 顶数据与代码。字距压到负值，让大号 mono 从"打字机"收紧成"宣言"。正文是唯一的例外——为了中文长段可读，正文退回一支干净的 grotesque 无衬线（Inter + Noto Sans SC 兜底），把 mono 的态度留给标题、kicker、数据、按钮这些"终端外壳"。

整体节奏：**命令行式布局**。左对齐、行首对齐、行号 gutter、hairline 分栏。绝不居中,绝不圆润。信息像日志一样自上而下流,一行一件事。

---

## Colors

**一句话调色逻辑：碳黑 + 灰阶 + 一支电绿。第三种色相不存在。** 这是这套走极端的地方——它拒绝任何暖色告警、任何蓝色链接、任何第二种品牌色。整套系统严格双色（碳/绿）加灰阶,像一台只有绿磷光的老终端。

### Brand & Accent
| Token | Hex | 角色 |
|---|---|---|
| `primary` | `#b4ff39` | 电绿。全页唯一色相。焦点 / 当前行 / 光标 / 主按钮 / 关键数字。**克制使用**——占屏永远 < 5%。 |
| `accent` | `#6f8f2a` | 深电绿。primary 的暗态：激活边框、次级按钮描边、网格辉光线、dim 提示符。给电绿加一层"景深",不引入新色相。 |
| `on-primary` | `#0a0a0a` | 碳黑。压在电绿之上的文字(电绿太亮,必须上深字)。对比 ≈ 16.3:1。 |

### Surface
| Token | Hex | 角色 |
|---|---|---|
| `canvas` | `#0a0a0a` | 纯碳黑页面底。近乎关机的黑。 |
| `surface` | `#131512` | 终端窗口面 / 卡片面。比 canvas 亮一档、带极微绿调,像磷光在玻璃上的残留。 |
| `hairline` | `#262a22` | 1px 分隔线与网格线。永远细,永远安静。 |

### Text
| Token | Hex | 角色 |
|---|---|---|
| `ink` | `#e8ece2` | 正文与标题主色。不用纯白——带一丝绿灰,像被磷光染过的字。碳黑上对比 ≈ 16.5:1。 |
| `muted` | `#868d7d` | 次要文字:注释、行号 gutter、导航链接、页脚。碳黑上对比 ≈ 5.8:1,过 AA。 |

### Semantic
系统故意不设第二语义色。终端里的"成功/危险"用**电绿的在场与缺席**表达:电绿 = ok / 当前 / 通过;失去电绿(退成 muted 灰)= 待定 / 已归档 / 失焦。需要"错误红"时,不引入红色,而是用 primary 加 `[FAIL]` 文字标签 + 边框闪一次(不常驻)。**约束即风格。**

---

## Typography

### Font Family
- **Display / Kicker / Data / Button（mono 主角）**：`"Space Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace`。Space Mono 顶展示,JetBrains Mono 顶数据。
- **Body（无衬线,为中文长段可读）**：`Inter, Geist, -apple-system, BlinkMacSystemFont, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`。

**中文铁律（写死）**：等宽拉丁字体不含中文字形,栈末尾一律用 `Noto Sans SC / PingFang SC / 微软雅黑` 兜底——拉丁走 Space Mono,中文落到黑体,分工渲染。**中文绝不用日文字体**(Mochiy / Zen Maru 等),简体会缺字变豆腐。webfont 放最前(加载到就用),系统字体永远在后(断网也不塌成 Times)。

### Hierarchy
| Role | Font | Size / Weight | 用途 |
|---|---|---|---|
| `display-xl` | Space Mono | 64 / 700, tracking -1px | 封面 / 数据英雄页巨号 mono 标题 |
| `display-lg` | Space Mono | 40 / 700, tracking -0.5px | 过渡页章节号、金句、收尾、UI 关键数字 |
| `heading` | Space Mono | 22 / 700 | 区块标题、卡片小标 |
| `body` | Inter | 16 / 400, lh 1.65 | 中文正文长段(唯一非 mono) |
| `body-mono` | JetBrains Mono | 14 / 500 | 数据、代码、命令行、导航、终端窗口 |
| `eyebrow` | Space Mono | 12 / 600, tracking 2px | 打字机 kicker(全大写,前缀 `$` 或 `▸`) |
| `button` | Space Mono | 14 / 600 | 按钮标签(mono,像一条可执行命令) |
| `caption` | JetBrains Mono | 12 / 400 | 注释、行号、页脚、元数据 |

### Principles
- **字号对比拉到 1:4 以上**:display-xl 64 对 body 16,正好 4 倍,最大那个字"大到有点过分"才对。
- **负字距是 mono 的解药**:大号等宽天然松散,tracking 收到负值才有"宣言"的密度。
- **kicker 是打字机**:eyebrow 一律全大写 + 2px 字距 + `$ ` 或 `▸ ` 前缀,像终端里刚敲下的命令。
- **正文左对齐,永不居中**:命令行没有居中的日志。多行大标题用 `text-wrap:balance` 均衡行长,杜绝孤字。

---

## Layout

### Spacing
4 / 8 / 16 / 24 / 40 / 80 的等比节奏。终端布局偏紧凑,行与行之间用 hairline 而非大留白分隔,但**段落级(section 80)必须给足呼吸**——日志密,章节稀。

### Grid & Container
- 12 列网格,gutter 24px,最大容器 1200px,左对齐贴着一条可见的左基准线(像终端左边距)。
- **行号 gutter**:主内容区左侧留一条 48px 的 mono 行号带(`01 02 03…`,muted 色),这是命令行隐喻的骨架。
- 分栏用 hairline 竖线显式画出,不靠空隙暗示——终端是画格子的。

### Whitespace 哲学
留白不是装饰,是"沉默的碳黑"。大面积黑不是空,是"终端在等输入"的张力。留白集中在章节之间制造呼吸,不均匀撒进每条缝隙。**电绿越省,黑越有分量。**

---

## Elevation & Depth

暗色系不靠投影分层,靠**明度台阶 + 辉光**。

| 层级 | 手法 |
|---|---|
| 底层 canvas | 纯碳黑,无任何阴影 |
| 面层 surface | 明度 +1 档(`#131512`),1px hairline 描边界定边缘,不用 drop-shadow |
| 焦点层 | 电绿静态辉光:`box-shadow: 0 0 24px rgba(180,255,57,0.25)`,常亮不闪 |
| 网格深度 | 背景 radial/linear 极暗电绿网格线(accent 混入 2% 透明),制造"屏幕在发微光"的纵深 |

**性能铁律(写死)**:辉光只用**静态** box-shadow / radial-gradient,**绝不动画化阴影**(逐帧重绘光晕会掉帧)。**绝不用 backdrop-filter**(滚动持续重绘),深色玻璃感用半透明纯色替代。唯一允许动的是光标的 `opacity` 呼吸,和它合成器友好、廉价。

---

## Shapes

### Border Radius
| Token | 值 | 用途 |
|---|---|---|
| `none` | 0px | **终端窗口、卡片、slide 全部零圆角**。这是签名——CarbonLime 的窗口没有 macOS 那种圆角,是刀切的直角。 |
| `sm` | 2px | 按钮、输入框极轻的收边,近乎方 |
| `md` | 4px | 特性卡片 |
| `lg` | 8px | 数据块 |
| `pill` | 9999px | 状态点 / 标签(唯一的圆,专门留给"呼吸的那个点") |

### 图形 / 图片几何
一律直角裁切、hairline 描边。图片上叠一层极淡电绿扫描线(scanline)或碳黑压暗蒙版,让任何配图都"接进这块屏幕"。禁止有机 blob、禁止柔和大圆角——那是别的家族的语言。

---

## Components

- **nav-bar**:碳黑底,mono 链接(muted),底部一条 hairline。左端品牌用 `▸ carbonlime` 提示符式写法,当前页链接点亮电绿。零圆角贯穿。
- **button-primary**:电绿实心块 + 碳黑字,写成一条命令 `run ▸`。极小圆角(2px),hover 时电绿静态辉光亮起,不做位移动画。对比 16.3:1。
- **button-secondary**:碳黑底 + 电绿字 + `accent` 深绿描边,像一个"待执行"的次级命令。hover 描边转 primary 亮绿。
- **terminal-window**:核心容器。surface 面 + hairline 直角边框,顶栏左上角一颗**呼吸的电绿状态点**(替代红黄绿三色灯),右侧是 `~/path` mono 路径。内容 body-mono 左对齐。
- **command-input**:命令行输入。surface 底,mono 前缀提示符 `heige@carbon:~$`,输入文字 ink,**尾随一个电绿方块光标 `▉`,opacity 1→0.4 呼吸**。这是签名交互。
- **panel-heading**:区块标题,heading(mono)左对齐,前缀 `##` 或行号,下方 8px 电绿短横当"下划命令线"。
- **card-feature**:surface 卡,hairline 描边,4px 圆角。标题 mono,正文 body 无衬线中文可读。左上角一个 mono 编号 tag。**不做居中三件套**,卡片错位堆叠、尺寸不等宽。
- **stat-block**:巨型 mono 数字(display-lg,电绿),下方 caption 单位/标签(muted)。数字用 tabular 对齐,像终端里的计数器。
- **tag**:pill 形,surface 底 + 电绿字 + accent 描边,eyebrow 全大写,前缀 `#`。用于状态/分类。
- **status-dot**:唯一的圆。电绿实心小圆,opacity 呼吸,表示"在线/运行中"。
- **rule-hairline**:1px 电碳灰细线,日志行与行之间的分隔骨架。零圆角,永远细、永远安静,是命令行秩序感的来源。
- **chip-running**:深电绿(accent)实心 pill + 碳黑字,标"进程运行中"。这是 accent 的专属落点——比 primary 暗一档,给电绿家族加景深而不引入新色相。
- **footer**:碳黑底,顶部 hairline,mono caption(muted),排成一段版本号日志:`carbonlime v0.1.0 · MIT · built by HeiGe-Design`。

---

## Presentation System

把这套做成 16:9 演示,对齐 HeiGe-PPT 的三条铁律:

**一页一句话**:每张 slide 只留一行 mono——像终端一次只回一行。信息密度靠"翻页"而非"堆屏"。禁止一屏塞多栏要点。

**黄金三秒**:封面是**引导启动日志**——标题逐行浮现,行首带 `01/02/03` 行号 gutter(muted),末行尾随电绿方块光标闪一下,然后整屏在碳黑里静止。三秒内观众就知道:这是个硬核工程产品。

**视觉锤**:全场反复砸同一个锤——**碳黑虚空 + 一个电绿方块光标**。每张 slide 都有且只有一处电绿,眼睛永远知道该看哪。

| Slide | 版式 |
|---|---|
| `slide-cover` | 碳黑满屏,左对齐 mono 巨标题(display-xl,ink),kicker 是一条命令 `$ heige deploy --cover`,末尾电绿光标闪烁。 |
| `slide-section-divider` | surface 面,巨型章节号 `03`(电绿,display-lg)贴左,右侧一行 mono 章节名。hairline 网格裸露。 |
| `slide-stat-hero` | 碳黑,居中偏左一个巨号电绿数字(display-xl),单位用 muted mono 小字跟在后面,像终端输出的度量。 |
| `slide-quote` | 碳黑,一句占屏金句(display-lg,ink),行首一个电绿 `▸` 提示符,像被引用的一行命令。 |
| `slide-closing` | **电绿满屏泛光** + 碳黑字。整块屏幕被电绿"接管",CTA 写成命令 `$ heige start ▸`。这是全场唯一一次让电绿占满屏——收尾的核爆。 |

节奏:碳黑(冷)贯穿全场,只有收尾页翻转成电绿(热)。张弛全靠这一次色彩反转。

---

## Signature Moment

换个模板绝对做不出来的两个时刻,写死:

**UI 签名 · 活体命令行(The Live Prompt)**
一个 hairline 直角框的终端窗口,左上角没有 macOS 的红黄绿三色灯,只有**一颗电绿状态点在呼吸**。窗口里是真的可聚焦输入框:mono 提示符 `heige@carbon:~$`,你敲的命令是 ink 色,尾随一个实心电绿方块光标 `▉`,opacity 在 1 与 0.4 之间以 1.1s 缓动脉动。它不是装饰图片,是一个真能 focus、真能输入的活体命令行——碳黑的死寂里唯一活着的那个像素。这个"呼吸的方块 + 零圆角终端框 + 单点电绿"的组合,是 CarbonLime 的身份证。

**Deck 签名 · 引导启动封面(The Boot Cover)**
封面标题不是淡入,是**像开机日志一样逐行打出来**:每行前挂一条 mono 行号 gutter `01 / 02 / 03`(muted 灰),kicker 是一条真命令 `$ heige deploy --cover`,最后一行末尾一个电绿方块光标闪三下后停住,整屏落回碳黑沉默。三秒钟,观众看到的不是一张 PPT,是一台正在冷启动的机器。

---

## Do's and Don'ts

**Do**
- 全页只用一支电绿,占屏永远 < 5%,让它稀缺到自带指向性。
- 等宽体当主角:标题、kicker、数据、按钮全 mono,负字距收紧。
- 零圆角刀切边 + hairline 网格 + 行号 gutter,老老实实画命令行。
- 辉光只用静态 box-shadow,常亮不闪;唯一的动画是光标 opacity 呼吸。
- 左对齐、行首对齐,信息像日志一样自上而下一行一件事。

**Don't**
- **不碰紫蓝俗套渐变**(`#667eea → #764ba2`)及其全家桶——那是 AI 界面的身份证,与终端美学势不两立。
- **不做居中卡片三件套**(一标题 + 一灰副标 + 三等宽圆角卡整页重复),CarbonLime 的卡片错位、不等宽、左对齐。
- **中文绝不用日文字体**渲染(Mochiy / Zen Maru 等),简体缺字变豆腐;中文一律 Noto Sans SC / PingFang SC 兜底。
- **不动画化阴影 / 辉光**(逐帧重绘光晕掉帧),也不用 backdrop-filter;要发光就用静态 shadow。
- 不引入第二种色相当"告警红/链接蓝"——约束就是风格,失焦用退成灰表达。
- 不上圆角柔和 blob、不上大面积柔光渐变,那是有机/极光家族的语言。

---

## Responsive Behavior

移动端是**重新编排**,不是缩放。

| 断点 | 编排 |
|---|---|
| ≥ 1024px | 12 列 + 48px 行号 gutter,终端窗口并排,hairline 竖线分栏。 |
| 640–1023px | 收成单列,行号 gutter 缩到 32px,终端窗口纵向堆叠。 |
| ≤ 639px | 行号 gutter 折成行内前缀,导航塌成单行提示符 + 汉堡,标题字号用 `clamp()` 收敛。 |

**零孤字铁律**:手动断行的 mono 大标题,按最长那一行收字号,每行 `white-space:nowrap` 锁整行,`clamp()` 保证最长行在 ≤390px 也放得下;中文限宽用 `em`/`px`,**绝不用 `ch`**(会让中文提前折行出孤字)。桌面与 ≤390px 各自检一遍,确认无孤字、无横向溢出。

**动效可关**:所有动画(光标呼吸、状态点脉动、启动日志逐行)都必须被 `@media (prefers-reduced-motion: reduce)` 一键关停,关掉后光标停在实心态、日志直接全显。

---

## Anti-Slop Pledge

抹掉 CarbonLime 这个名字,这套依然一眼认得出:**一台冷启动后停在提示符前的终端,碳黑的死寂里只有一个电绿方块在呼吸。** 等宽体是主角不是配料,零圆角是态度不是偷懒,那支唯一的电绿贵到全页舍不得多用一处。它不是流水线里那张"深色 + 霓虹渐变"的通用暗色模板,是有人认真想过"绿该少到什么程度才够狠"才做出来的。

*Built by HeiGe-Design · MIT.*
