# 生产交付铁律（Production Checklist）

出货前**强制**逐条过。这些不是审美问题，是真实生产环境不允许的硬伤。
AI 做的界面最容易在这三处翻车：**字体加载失败就崩、某个屏宽就出孤字、滚动起来就卡**。

做不到下面三条，别交付。

---

## 一、字体可靠性（加载失败也不崩）

- **中文绝不能只靠 Google Fonts**。`fonts.googleapis.com` 在国内常被墙或超时，webfont 加载失败时若没有系统兜底，中文直接崩坏（退成默认字体、闪烁、或不可读）。
- 每个能承载中文的 `font-family` 栈，末尾都要有系统兜底：
  - 无衬线：`..., "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`
  - 衬线：`..., "Noto Serif SC", "Songti SC", "STSong", serif`
- webfont 放最前（加载到就用，保住设计），系统字体兜底（加载不到也能看）。
- 拉丁展示字体（Anton / Bebas / Bagel Fat One 等）也要补系统兜底，别让标题在断网时塌成 Times。
- **中文绝不能用日文字体渲染**（Mochiy Pop One、Zen Maru Gothic 等）：简体字会缺字变豆腐块、或显示成日文异体。要中文展示体就用 Noto Sans SC / ZCOOL KuaiLe（俏皮）/ 思源系。
- 自检：把字体链接换成无效地址跑一遍，中文仍要干净显示。

## 二、零孤字（任何屏宽都不塌）

- 大标题折行后，**绝不能把单个字或标点甩到独立一行**（孤字）。这是一眼能看出的低级排版错误，比如「界面不是生成」换行后「的，」单独一行。
- 手动断行的标题：按**最长那一行**收敛字号，并给每行加 `white-space:nowrap` 锁整行不折断；字号用 `clamp()` 保证最长行在最窄屏（≤390px）也放得下。
- 居中多行正文：用 `text-wrap:balance` 让各行长度均衡，天然避免孤字；必要时配合合适的 `max-width`。
- **别用 `ch` 给中文限宽**：`ch` 是拉丁数字 0 的宽度，远窄于一个中文字，会让中文提前折行出孤字。限宽用 `em` 或 `px`。
- 自检：出货前在桌面和窄屏（≤390px）各看一遍每个标题，确认无孤字、无横向溢出（`scrollWidth == clientWidth`）。

## 三、性能流畅（滚动不掉帧）

- **不要动画化 `text-shadow` / `box-shadow`**（发光逐帧重绘极贵）。要发光就用静态 shadow，常亮不闪。
- **不要 `backdrop-filter`**（滚动时持续重绘），用半透明纯色背景替代。
- **不要给加了 `filter:blur()` 的元素做位移 / 缩放动画**（每帧重新栅格化）。模糊装饰层就让它静止，最多动 `opacity`。
- 无限动画**只动 `transform` / `opacity`**（合成器友好），数量收敛到一两个签名动画，其余改成一次性或删掉。
- **不要常驻 `requestAnimationFrame` 循环**（比如光标跟随特效），它会一直占用主线程；计数 / 打字类动画到目标即停。
- 所有动画都要能被 `@media (prefers-reduced-motion: reduce)` 关掉。

---

## 一句话

**字体加载失败也不崩、任何屏宽都不出孤字、滚动起来不掉帧。** 这三条是生产门槛，不是加分项。
