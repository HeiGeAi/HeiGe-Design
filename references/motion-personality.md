# 动效性格（Motion Personality）· 11 家族预设

**动效是设定集的性格层，静态 token 之外的第二层指纹。** 每套 DESIGN.md 可加一个可选 `## Motion` 章节写自己的动效性格；某套没写时，按它所属家族取本文件的预设。性能红线只有一份，守 `references/production-checklist.md` 第三节，本文件只管性格。

**介质纪律**：屏幕要动，纸面要静。线上部署的页面动效按本文件全开；打印路径必须 `@media print` 全静态化（动画全停、等待入场的元素强制落位、氛围层清场），落地写法见 HeiGe-UI `references/motion-forging.md` 第六章打印静态化铁律。

## 怎么写进 DESIGN.md

`## Motion` 章节放在 `## Components` 之后，结构固定：三行定性 + 一张小表定量 + 一两个签名动效。

- 三行定性：**签名曲线**（从下面曲线族选一条）、**氛围签名**（循环动画，至多选一个）、**hover 语言**（四选一）。
- 小表定量：微反馈 ms / 入场 s / stagger 间隔，从时长阶梯里取档写死。
- 签名动效：与该套 `## Signature Moment` 挂钩的一到两个招牌动作。

**位置铁律**：动效 token 只写正文。禁进 YAML front matter（`motion` 顶层键 lint 不报错，官方 export 器会静默丢弃，等于白写），禁进 components 子 token（lint 直接报 error）。

**性格差异靠组合差异体现**：曲线从曲线族选，档位从阶梯取，禁止每套自造新曲线新档位。

## 共享 token（全库统一）

### 曲线族（按职能分工）

| 曲线 | 职能 |
|---|---|
| `cubic-bezier(0.22, 1, 0.36, 1)` | 表演曲线。一切入场、状态切换、确认动画，长尾 easeOut |
| `cubic-bezier(0.4, 0, 0.2, 1)` | 功能曲线。路由转场、功能性位移 |
| `cubic-bezier(0.34, 1.56, 0.64, 1)` | 弹性曲线。overshoot 回弹，玩味系专用 |
| `linear` | 一切无限循环。循环带缓动必露接缝 |
| `ease-in-out` | 呼吸与往返：辉光呼吸、慢漂浮 |
| `steps(1)` | 机器感硬切：终端光标、LED 闪烁 |

### 时长阶梯（八档）

| 档位 | 数值 | 用途 |
|---|---|---|
| 微反馈 | 200~240ms | 链接、按钮、tab |
| 颜色层 | 240~300ms | 色变、hover 换装 |
| 小组件开合 | 0.3~0.35s | 手风琴、弹层暗幕、盖章 |
| 标准入场 | 0.4~0.45s | 卡片入场、确认动画 |
| 内容块入场 | 0.55~0.7s | 滚动触发的区块 |
| 仪式大件 | 0.8~0.9s | hero 巨字、大区块、尺子线 |
| 测量档 | 1.0~1.4s | count-up、进度条、雷达展开 |
| 循环档 | 2~6s（marquee 60~80s，星空漂移 90~150s） | 氛围层，多实例周期互质 |

规律：**元素越大越慢。交互反馈 ≤350ms，入场表演 ≥0.55s，测量仪式 ≥1s。**

### stagger（六档 + 两策略）

- 档位：0.05 / 0.06 / 0.07 / 0.08 / 0.09 / 0.10~0.12s。感知边界：<0.05 看不出次序，>0.12 后排等待感明显。
- 顺序本身有语义（章节、宣言逐行）用线性累积 `i * delay`；大网格用 `(index % cols) * delay` 取模，等待封顶。
- **列表超过一屏必须取模或封顶 delay。**

### hover 语言（四选一）

| 语言 | 写法 | 气质 |
|---|---|---|
| 印章抬起 | `translate(-2~-3px)` + 硬阴影画在伪元素上，位移量与阴影偏移互补 | 光源固定、纸片离桌，工业感 |
| 通电变色 | 边框 + 文字 + 辉光伪元素 opacity 同拍变色，三属性互为证据 | 通电感，科技系 |
| 门控流光 | shimmer 常驻循环，hover 只开 300ms opacity 门，永不重播起点 | 高级感，循环外置 |
| 内描边 | `inset 0 0 0 1px`，零布局抖动 | 安静，专给只读元素 |

配套语义：会动的卡等于能点，只亮边的卡等于只读。focus 态比 hover 更安静（ring 无位移，用 `:focus-visible`）。

### 氛围签名（至多选一，剂量纪律）

候选：网格流（位移必须等于格距整数倍才无缝）/ 扫描光带 / 呼吸辉光（只动 opacity）/ shimmer / 闪烁（92% 时间静止）/ marquee（数据翻倍 + translateX(-50%) + 两侧遮罩）/ 慢漂浮 float。

纪律：alpha ≤ 0.18；多实例错开 delay、周期互质；`pointer-events: none` + `aria-hidden` 必挂；循环写成全局 CSS 类当契约，组件层只控可见度。**做完眯眼看，能明确说出哪里在动就是超标。**

### 性能红线（引用一份，两处维护是债）

全部守 `references/production-checklist.md` 第三节：无限动画只动 transform/opacity；不动画化 box-shadow / text-shadow / filter；不用 backdrop-filter；禁常驻 rAF（count-up 这类有限时长测量动画可用）；一切动画支持 `prefers-reduced-motion: reduce`。

工程细节补一条：熔断用 `animation-duration: 0.001ms` 保住 animationend 事件，位移循环类（marquee 等）单独 `animation: none`，压时长会瞬移半截。

## 11 家族预设

### 01 凶悍工业 Brutalist
forge-anvil / rebar-concrete / riot-press / ironclad-ledger / brut-signal

- 性格一句话：**机械动作，零件到位，"咔"一声收尾。**
- 签名曲线：`steps(1)` 硬切当招牌，位移用功能曲线，时值全库最短。
- 氛围签名：LED 微闪或终端光标（steps(1)，92% 静止）。
- hover 语言：印章抬起；按下 offset 归零瞬时压实，零缓动。
- 定量：微反馈 200ms / 入场 0.4s / stagger 60ms 取模。
- 签名动效候选：按压归位（主体瞬时 translate 压到伪元素影子上）、宣言逐行硬入场（整行出现，间隔 120ms）、LED 事件闪。

### 02 暗色科技 Dark-Tech
nocturne-teal / aurora-mesh / carbon-lime / midnight-trust / obsidian-flux / void-hud

- 性格一句话：**仪表读数在动，界面本身是静的。**
- 签名曲线：表演曲线 `cubic-bezier(0.22, 1, 0.36, 1)`。
- 氛围签名：呼吸辉光（只动 opacity）、扫描光带、星空视差（两层星点贴片 90/150s 慢漂，深空/监控/太空题材首选，位移量=贴片高才无缝），三选一。
- hover 语言：通电变色或门控流光。
- 定量：微反馈 220ms / 入场 0.6s / stagger 70ms 取模。
- 签名动效候选：解码数字 count-up（1.4s 有限 rAF + tabular-nums + 落定 scale 1.08→1）、呼吸点（opacity + scale，2~4s）、雷达两段式展开（空框先立、多边形从圆心 1.3s 展开）。

### 03 优雅编辑 Editorial
sermon-serif / noir-vermilion / broadsheet / atelier-bone / manifesto-ink

- 性格一句话：**翻页节奏，纸自己从来一动也不动。**
- 签名曲线：表演曲线，时值放到仪式档。
- 氛围签名：无循环。静止本身就是文人感。
- hover 语言：生长下划线（动 width 保 1px 锐利）+ 内描边给只读卡。
- 定量：微反馈 220ms / 入场 0.8s / stagger 100ms 线性。
- 签名动效候选：主配角降权（主角带位移，编辑注纯淡入且 delay 卡在主角中段）、尺子线落款（scaleX 0→1，origin left）、序号硬切（强调页直接切换，切换本身即仪式）。

### 04 瑞士纪律 Swiss
helvetic-ledger / grid-bureau / datum-signal / akkurat-mono

- 性格一句话：**制表精度，动效存在感压到最低。**
- 签名曲线：功能曲线 `cubic-bezier(0.4, 0, 0.2, 1)`，全家族唯一。
- 氛围签名：无。
- hover 语言：内描边或 1px 底线变色，零位移。
- 定量：微反馈 200ms / 入场 0.4s / stagger 50ms 取模。
- 签名动效候选：尺子线（2px 分隔线 scaleX 展开 0.6s，网格系统里唯一被允许的表演）、进度条充能（先入场后充能，两层时序嵌套）。

### 05 复古未来 Retro-Future
synthwave-drive / y2k-chrome / arcade-crt / vaporwave-marble / cassette-futurism

- 性格一句话：**循环是主角，屏幕永远在通电。**
- 签名曲线：表演曲线 + steps(1) 光标点缀。
- 氛围签名：扫描光带或网格流选一，linear 匀速。
- hover 语言：通电变色，辉光走伪元素 opacity。
- 定量：微反馈 220ms / 入场 0.55s / stagger 70ms 取模。
- 签名动效候选：CRT 开机（一次性扫描带扫过 + 标题 opacity 通道 linear 闪两下，位移通道保持顺滑，一软一硬叠出电流感）、marquee 跑马灯、steps 光标。

### 06 有机自然 Organic
clayfield / morandi-still / linen-fold / harvest-warm

- 性格一句话：**向光生长，慢而柔，绝不弹跳。**
- 签名曲线：表演曲线 + ease-in-out 呼吸。
- 氛围签名：慢漂浮 float 12s 往返，至多一处。
- hover 语言：轻抬 3px，300ms。
- 定量：微反馈 240ms / 入场 0.7s / stagger 80ms 线性。
- 签名动效候选：生长入场（scale 0.97→1 + 小位移缓慢舒展）、呼吸辉光低剂量、逐行浮现。

### 07 玩味玩具 Playful
boing-candy / jelly-pop / sticker-club / doodle-note

- 性格一句话：**玩具物理：落地、压扁、回弹、站稳。**
- 签名曲线：弹性曲线 `cubic-bezier(0.34, 1.56, 0.64, 1)`，全库唯一默认 overshoot 的家族；过冲过 1 必须回落到 1，弹簧要闭环。
- 氛围签名：至多一处慢漂浮；能量预算全给交互，背景保持干净。
- hover 语言：大位移抬起 6~8px（硬阴影画在伪元素上）；tap 小按钮 scale 0.95、宽卡 0.985。
- 定量：微反馈 200ms / 入场 0.45s overshoot / stagger 70ms 取模。
- 签名动效候选：squash-and-stretch 落地（scaleY 压 0.9 再弹回 1）、勾选 pop（scale 0.4→1.3→1 + rotate -20°→0）、果冻 tap。

### 08 温暖人文 Humanist
wenkai-warm / hearth-story / almanac-folk / coffee-house

- 性格一句话：**被读出来的节奏，视线走到哪，哪里亮起来。**
- 签名曲线：表演曲线，时值中慢。
- 氛围签名：无循环。暖意来自色彩和字。
- hover 语言：生长下划线或微抬 2px。
- 定量：微反馈 240ms / 入场 0.7s / stagger 90ms 线性。
- 签名动效候选：逐行浮现（段落逐行淡入上浮 16px，间隔 90ms）、主配角降权、尺子线落款。

### 09 张扬极繁 Maximalist
soundwave-wrapped / acg-stellar / collage-riot / neon-market

- 性格一句话：**满场都是声音，但每个循环各唱各的拍。**
- 签名曲线：表演曲线 + 弹性曲线点缀。
- 氛围签名：全库唯一允许两处循环的家族（如 marquee + 一处闪烁），周期必须互质，alpha 仍 ≤0.18。
- hover 语言：门控流光 + 通电变色可叠用。
- 定量：微反馈 200ms / 入场 0.45s 大位移 40px / stagger 60ms 取模。
- 签名动效候选：marquee 三件套（数据翻倍 + translateX(-50%) + 两侧遮罩，hover 暂停）、贴纸甩入（rotate overshoot 落定）、丢帧闪烁。

### 10 奢侈高定 Luxury
onyx-gold / champagne-silk / monogram-noir / marble-vein

- 性格一句话：**从容就是奢侈信号，几乎静止，动一下都有来头。**
- 签名曲线：表演曲线，时值全库最慢。
- 氛围签名：无。halo 静态常亮，永不 pulse。
- hover 语言：通电金线（颜色 300ms，零位移）或内描边。
- 定量：微反馈 240ms / 入场 0.9s / stagger 120ms 线性。
- 签名动效候选：金线落款（1px hairline 用 scaleX 从左展开 0.9s，像刻字收笔）、揭幕淡入（纯 opacity，位移 ≤8px）、锚字后亮（线先立、字后显）。

### 11 东方新中式 Neo-Chinese
moxi-void / gugong-red / song-celadon / guochao-cyber / dunhuang-mineral

- 性格一句话：**落墨与盖章，一次成形，留白即静。**
- 签名曲线：表演曲线，时值仪式档。
- 氛围签名：无循环（guochao-cyber 可借暗色科技的扫描光带，家族内唯一例外）。
- hover 语言：内描边或朱砂细下划线。
- 定量：微反馈 240ms / 入场 0.9s / stagger 100ms 线性。
- 签名动效候选：落墨显影（墨晕层用静态 radial-gradient 预渲染，入场只动 opacity + scale 0.96→1，晕染边缘是烤好的，禁动画化 filter）、盖章（从上落 -10px、0.35s、带一点 rotate 落定，全页唯一向下的入场，方向语义是盖上去）、留白过场（纯淡入）。

## 动效体检（写完自查十条）

- [ ] 千篇一律 fade-in-up 全场平铺？每个区块同参数入场等于没有编排。
- [ ] 每个元素都在动？没有主角。运动强度必须等于信息等级。
- [ ] stagger 线性累积到列表尾部等秒级？超一屏必须取模或封顶。
- [ ] 循环动画带缓动？接缝必露馅，循环一律 linear 或 ease-in-out 往返。
- [ ] hover 触发循环从头重播？缺门控层，循环外置、hover 只开 opacity 门。
- [ ] 动画 box-shadow / filter / left / height？非合成属性，掉帧源头。
- [ ] 缺 prefers-reduced-motion 熔断？或熔断把依赖 animationend 的逻辑挂起？
- [ ] delay 数值拍脑袋？每个 delay 必须说得出它在等哪个动画的哪个节点。
- [ ] 定时自动行为（auto-scroll / auto-advance）缺用户动作取消机制？
- [ ] 装饰层缺 `pointer-events: none` + `aria-hidden` 双件套？

HeiGe-Design · MIT · motion-personality
