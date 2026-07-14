---
version: alpha
name: AtelierBone-design-system
description: >-
  A quiet-luxury editorial system set on bone-ivory. Charcoal ink carries every
  word; a single thread of antique gold is spent once per view and never twice.
  Thin high-contrast Cormorant display plays against wide-tracked uppercase Inter
  labels, hairline gold rules, and full-bleed whitespace. Its signature move is
  restraint made visible: one drawn gold line on the page, one gilded chapter
  folio in the deck.

colors:
  primary: "#a98b4e"
  on-primary: "#1e1c18"
  ink: "#33302b"
  canvas: "#f3ede1"
  surface: "#faf6ec"
  muted: "#6b655c"
  hairline: "#d9cfbd"
  panel: "#221e18"

typography:
  display-xl:
    fontFamily: '"Cormorant Garamond", "Cormorant", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "76px"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.5px"
  display-lg:
    fontFamily: '"Cormorant Garamond", "Cormorant", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "52px"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.3px"
  heading:
    fontFamily: '"Cormorant Garamond", "Cormorant", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
  body:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.1px"
  eyebrow:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "2.4px"
  button:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "1.6px"
  caption:
    fontFamily: '"Inter", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.3px"
  body-mono:
    fontFamily: '"IBM Plex Mono", "SFMono-Regular", Menlo, Consolas, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.5px"

rounded:
  none: "0px"
  sm: "2px"
  md: "6px"
  pill: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "96px"

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    padding: "20px 40px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  eyebrow-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.xs}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  prose-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "{spacing.lg}"
  card-image:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  pull-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  folio-index:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    padding: "{spacing.sm}"
  rule-hairline:
    backgroundColor: "{colors.hairline}"
    padding: "0px"
  tag-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  footer:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    padding: "{spacing.section}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
---

# Atelier Bone · 象牙工坊

> Quiet luxury is not the absence of decoration. It is decoration rationed to a single line of gold, and the discipline never to spend it twice.

A HeiGe-Design system for galleries, fragrance houses, fine imprints, and any brand whose confidence is measured in what it leaves out. Built to run an interface (HeiGe-UI) and a keynote (HeiGe-PPT) from one set of tokens.

---

## Overview

象牙工坊 is bone-ivory paper, charcoal ink, and one thread of antique gold. That is the whole palette, and the entire system is an argument for spending the gold as slowly as possible.

The two colors that matter carry two different jobs. **Ivory (`#f3ede1`) is the room** — a warm, matte, slightly sun-aged white that never goes clinical. **Charcoal (`#33302b`) is the voice** — a soft near-black with a hint of brown that reads as ink on cotton paper, not text on a screen. Everything you read, every rule, every label lives in those two. The gold (`#a98b4e`) is not a color you use. It is a moment you save: one hairline, one plaque, one folio numeral per view.

The typographic signature is a deliberate mismatch. **A very thin, high-contrast Cormorant serif** at display sizes — hairline strokes, dramatic thick-thin, the letterforms of an engraved invitation — sits directly above **wide-tracked uppercase Inter labels** at 2.4px of tracking. The serif whispers; the label stands at attention. The tension between the two is the personality: literary but exact, romantic but engineered.

The rhythm is slow. Sections breathe at 96px. Headlines float in ivory with nothing crowding them. When something finally lands — the one stat, the one quote, the one CTA — the reader has been starved of incident just long enough to feel it.

---

## Colors

Three families. No gradients, no tints beyond what is listed, no fourth hue.

### Brand & Accent
- `primary` **`#a98b4e`** — Antique gold / 一缕暗金. The brand's entire chromatic identity. It appears as a foil plaque (primary button), as a 1px rule, and as a single display numeral. It is a **currency**: budget one gold gesture per screen. Never as body text on ivory (it fails legibility, and that failure is the point — gold is for surfaces and lines, not paragraphs).
- `on-primary` **`#1e1c18`** — Espresso black, the engraved text that sits on the gold plaque. Contrast against gold ≈ 5.25:1.

### Surface
- `canvas` **`#f3ede1`** — Bone ivory. The default page. Warm, matte, aged.
- `surface` **`#faf6ec`** — A half-shade brighter ivory. Cards lift by getting *lighter*, not by casting shadow. Paired with a hairline, that half-shade is the whole elevation story.
- `panel` **`#221e18`** — Deep espresso. The rare dark act — footer, section dividers, the gilded folio, the dark quote slide. On panel the gold reads at 5.11:1 and ivory at 14.2:1, so both are legible; this is where gold is allowed to become text.
- `hairline` **`#d9cfbd`** — A warm ivory line, one shade under canvas. The default divider. Structure without weight.

### Text
- `ink` **`#33302b`** — Charcoal. All prose, all headings on light. 11.3:1 on canvas.
- `muted` **`#6b655c`** — Warm taupe for eyebrows, captions, and metadata. Tuned dark enough to clear 4.5:1 on both ivory and surface (4.95:1 / 5.34:1) — quiet does not mean unreadable.

### Semantic
This system has no success/error palette by design. Its domains — gallery, fragrance, print — do not dashboard. If a status is ever required, render it in `ink` with a worded label, never a red or green dot.

---

## Typography

### Font Family
- **Display / headings — Cormorant Garamond (thin, high-contrast serif).** Weight 300 at large sizes so the hairline strokes stay hairline. Stack ends in `Georgia, "Noto Serif SC", "Songti SC", "STSong", serif`, so if the webfont fails to load the page degrades to a serious serif — and **Chinese resolves through Noto Serif SC / Songti SC**, never into a Japanese face. A Cormorant headline set in Simplified Chinese renders as a clean 宋体, matched in spirit.
- **Labels / body / UI — Inter.** Neutral, engineered, the opposite of the serif. Stack ends in `"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`.
- **Metadata / folios — IBM Plex Mono.** Tabular numerals for page indices and spec rows. Stack ends in `"Noto Sans SC", "PingFang SC", monospace`.

**中文铁律**: 每条能承载中文的字体栈都以系统中文字体收尾（衬线走 Noto Serif SC / Songti SC，无衬线走 Noto Sans SC / PingFang SC）。断网、被墙、webfont 超时，中文都干净落地，绝不退成豆腐块，绝不用日文字体渲染简体。

### Hierarchy
| Role | Family | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|---|
| display-xl | Cormorant | 76px | 300 | 1.02 | -0.5px | Cover headline, hero, stat-hero numeral |
| display-lg | Cormorant | 52px | 300 | 1.06 | -0.3px | Pull-quotes, stat figures, chapter numeral |
| heading | Cormorant | 28px | 500 | 1.2 | 0 | Card and section titles |
| body | Inter | 17px | 400 | 1.7 | 0.1px | Reading text, generous leading |
| eyebrow | Inter | 12px | 500 | 1.4 | 2.4px | UPPERCASE kicker above every headline |
| button | Inter | 13px | 500 | 1 | 1.6px | UPPERCASE plaque label |
| caption | Inter | 13px | 400 | 1.5 | 0.3px | Figure captions, footer legal |
| body-mono | IBM Plex Mono | 12px | 400 | 1.4 | 0.5px | Folios, index numbers, spec rows |

### Principles
- **Ratio is roughly 1 : 4.5** (body 17px → display-xl 76px). The jump is meant to feel almost too large; the whitespace absorbs it.
- **The eyebrow is always uppercase Inter at 2.4px tracking, and it is always `muted`, never gold.** Gold on ivory would be illegible; the gold belongs to the rule *beneath* the eyebrow, not the letters.
- Cormorant only earns its beauty above ~24px. Below that it thins out — keep small text in Inter.

---

## Layout

### Spacing
A 4-based scale: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 96`. Sections are separated by 96px of nothing. This is not padding; it is pacing.

### Grid & Container
- 12-column grid, but content rarely fills it. A single column of prose caps around 62–66 characters (limited in `em`/`px`, **never in `ch`** — `ch` is the width of a Latin `0` and would fold Chinese into orphans).
- Asymmetry over centering. The signature editorial move: headline pinned to a left or offset column, the right two-thirds left empty on purpose. Empty is a design element here, not leftover space.

### Whitespace philosophy
Whitespace is the most expensive material in the palette, and 象牙工坊 spends it lavishly. The rule: **before every moment that matters, subtract.** A stat, a quote, a CTA should each arrive after a stretch of ivory that made you wait for it.

---

## Elevation & Depth

There are no drop shadows in this system. Luxury on paper does not float; it lies flat and is lit.

| Layer | Technique |
|---|---|
| Base | `canvas` ivory |
| Raised (cards) | `surface` (half-shade brighter) + 1px `hairline` border. That is the entire lift. |
| Rule / divider | 1px `hairline`, or the signature 1px `primary` gold rule |
| Dark act | `panel` espresso block, used sparingly for contrast punctuation |

Depth comes from **value and line**, not blur. No `box-shadow` as a crutch, and — per production law — **no shadow is ever animated**. If a card must respond to hover, it shifts its border from `hairline` to `primary` gold or nudges 1px; it does not bloom a shadow.

---

## Shapes

| Token | Value | Use |
|---|---|---|
| none | 0px | Buttons, stat blocks, dividers — the default. Sharp corners read as bound-edge, letterpress, gallery frame. |
| sm | 2px | Cards. Barely softened, so it still feels like cut paper. |
| md | 6px | Image containers and framed plates — the only elements allowed a visible curve. |
| pill | 9999px | Only the tag-chip — a thin outlined capsule, the one rounded object, used as a deliberate contrast to all the sharp edges. |

Geometry rule: **images are full-bleed or hard-edged rectangles.** No floating rounded photo cards. A picture either bleeds off the page or sits inside a hairline frame like a plate in an art book.

---

## Imagery

Imagery is punctuation, not spectacle. This is a text-first house: on most views a single photograph does the work of ten, and it earns its place by being the only image in a screen of ivory.

| Layer | Treatment |
|---|---|
| Photography | Editorial and still — warm-desaturated or true monochrome, printed-plate tonality, never saturated stock. Full-bleed off the page edge, or set inside a single `hairline` frame like a plate in an art book. No drop shadows, no rounded photo cards. |
| Illustration | Rare and linear. If drawn at all, one-weight `ink` line art on ivory at engraving density. No flat-color spot art, no 3D render, no gradient mesh. |
| Icons | Hairline stroke (~1.25px), monochrome `ink`, geometric and quiet. Icons align to the type baseline and never carry color — the gold is spent elsewhere. |
| Charts | Ivory ground, `ink` marks, `muted` gridlines at hairline weight, and exactly one gold line or point for the series that matters. Data obeys the same one-gold rule as the page. |
| Density | Low by design. One hero image per section at most. A stretch of ivory holding no image is finished, not empty. |

Gold may appear inside a photograph as a real-world object (a gilt edge, a brass detail). That is the one place gold is allowed to sit on a light field.

---

## Components

- **nav-bar** — Ivory bar, `ink` wordmark, uppercase `eyebrow` links spaced wide. A single `hairline` under it. No fill, no shadow, no sticky glass.
- **button-primary** — The gold foil plaque. `primary` gold fill, `on-primary` espresso label, sharp corners (`none`). This *is* the one gold gesture on most screens; do not place two per view.
- **button-ghost** — Ivory ground, `ink` label, 1px `ink` outline, sharp corners. Every secondary action.
- **eyebrow-label** — Uppercase `muted` kicker at 2.4px tracking, with a 1px gold rule drawn beneath it (see Signature Moment). The header unit of the entire system.
- **card-feature** — `surface` panel, `heading` title in Cormorant, `sm` radius, hairline border. Lifts by lightness, not shadow.
- **prose-block** — `body` Inter on `canvas`, 1.7 leading, narrow measure. Built for actual reading.
- **card-image** — Hairline-framed figure on `surface`, `caption` in `muted` beneath. `md` radius.
- **stat-block** — Big `display-lg` Cormorant figure in `ink`, unit label in `muted` caption, a gold hairline underscore. Sharp corners.
- **pull-quote** — Oversized `display-lg` serif set in `ink`, floating in `section`-scale whitespace.
- **folio-index** — `body-mono` page/index numerals (`01 — 12`) in `ink`. The quiet running-head of the deck and the doc.
- **rule-hairline** — The 1px `hairline` divider element. The connective tissue of the whole layout.
- **tag-chip** — Thin outlined `pill`, uppercase `muted` label. The single rounded object in the system.
- **footer** — The dark act: `panel` espresso ground, ivory `caption` text, gold reserved for one rule or one link. Where the page finally goes dark.

---

## Presentation System

象牙工坊 as a 16:9 deck is the same discipline at podium scale. One idea per slide, no bullet lists, no template chrome. The gold is rationed even harder here — **one gold gesture across an entire section**, so that when the gilded folio appears, it lands.

- **Cover (`slide-cover`)** — Ivory field. Uppercase `eyebrow` kicker top-left with its gold hairline. A single `display-xl` Cormorant title, thin and enormous, pinned low-left with the right half of the frame left empty. The 黄金三秒: the reader knows within three seconds this is a house that trusts its own quiet. **视觉锤 = the lone thin gold rule under the eyebrow.**
- **Section divider (`slide-section-divider`)** — The dark act. Full-bleed `panel` espresso. One giant thin gold `display-lg` numeral (`01`, `02`), a wide-tracked ivory chapter title, one horizontal gold hairline at the baseline. Nothing else. This is the deck's visual hammer (see below).
- **Stat hero (`slide-stat-hero`)** — Ivory field, one colossal `display-xl` figure in `ink`, a `muted` unit label, a gold underscore. One number, whole slide. 一页一句话 rendered as 一页一个数字.
- **Quote (`slide-quote`)** — Espresso `panel`, a single `display-lg` serif line in ivory, the attribution in gold `eyebrow`. The quote is allowed to be the only thing in the room.
- **Closing (`slide-closing`)** — Back to ivory. One `display-lg` line of intent, one gold `button-primary` plaque. The single gold moment of the closing, so the last thing seen is the brand's one indulgence.

Every slide obeys: **one subject, ivory margins wider than you think, gold spent once.**

---

## Signature Moment

The move that no template reproduces, because a template cannot show restraint — it can only add.

### UI — 金线起笔 · The Drawn Gold Rule
Beneath every `eyebrow-label` sits a **single 1px gold rule (`#a98b4e`), 48px wide**, and on scroll-into-view it *draws itself* from 0 to 48px in ~280ms (animating `width`/`transform` and `opacity` only — cheap, composited, `prefers-reduced-motion` renders it already-complete). It is the **only gold pixel in the viewport**. Everything else is ivory and charcoal. The signature is not the animation; it is the discipline of stopping there — one line, drawn once, and no second gold anywhere on screen. Copy the CSS and you still won't reproduce it, because the hard part is deleting the other four golds you wanted to add.

### Deck — 金箔章序 · The Gilded Folio
The `slide-section-divider`: a full-bleed espresso field holding **one giant thin Cormorant gold numeral** (`01`) at roughly 40vh cap-height, tracked wide, floating in an ocean of dark whitespace, crossed by **one horizontal gold hairline** at its baseline and captioned by a single wide-tracked ivory chapter title. One numeral. One rule. One dark room. It is a page from a hand-bound catalogue raisonné, not a slide — and it works only because every slide around it was starved of gold to make it inevitable.

---

## Agent 配方卡

Copy-ready recipes. Every value is exact; do not invent alternates.

**速查色卡**
- Ink（正文）`#33302b` · Muted（次要）`#6b655c` · Canvas（页底）`#f3ede1` · Surface（卡片）`#faf6ec` · Hairline（分隔）`#d9cfbd` · Panel（暗场）`#221e18`
- Primary gold `#a98b4e`：一屏一次，绝不做正文，绝不在象牙底上当文字色。
- 字体：display `Cormorant Garamond`（weight 300）· 正文/标签 `Inter` · 章序 `IBM Plex Mono`。

1. **金箔按钮** — `#a98b4e` 填充，`#1e1c18` 字，Inter 13px / weight 500 / 字距 1.6px / 全大写，圆角 0px，内边距 16px 32px。全屏唯一的金，一视图一个。
2. **幽灵按钮** — `#f3ede1` 底，`#33302b` 字，1px `#33302b` 描边，圆角 0px，字体同上。所有次级动作。
3. **编辑感 Hero** — `#f3ede1` 场。Eyebrow：Inter 12px / weight 500 / 字距 2.4px `#6b655c`，下方一道 48px 宽、1px 的 `#a98b4e` 金线。主标：Cormorant Garamond 76px / weight 300 / 行高 1.02 / 字距 -0.5px `#33302b`，压在左下，右半幅留空。
4. **特性卡** — `#faf6ec` 面，1px `#d9cfbd` 描边，圆角 2px，内边距 40px。标题 Cormorant 28px / weight 500 `#33302b`；正文 Inter 17px `#33302b`，行高 1.7。靠亮度和描边起层，不用阴影。
5. **数据块** — Cormorant 52px `#33302b` 数字，`#6b655c` 单位小字，一道 1px `#a98b4e` 下划线。锐角。
6. **页脚** — `#221e18` 深咖底，`#f3ede1` 字（Inter 13px），上下内边距 96px。金只留给一道线或一个链接。

---

## Do's and Don'ts

### Do
- **Spend the gold once.** One plaque, or one rule, or one folio numeral per view. Ration it like leaf.
- **Let ivory do the work.** Widen the margins past comfortable; the empty column is the luxury.
- **Pair the mismatch on purpose** — thin Cormorant serif directly above wide-tracked uppercase Inter. The tension is the brand.
- **Lift with light and line** — brighter `surface` + hairline, never a shadow.
- **Keep corners sharp** (0–2px). Bound-edge, not bubble.
- **Go dark only in the footer, the divider, and the quote** — the espresso `panel` is a punctuation mark, not a mood.

### Don't
- **不碰紫蓝俗套渐变** — no `#667eea → #764ba2` or any of its cousins. This system has no gradient at all; a purple-blue hero would incinerate the entire proposition.
- **不做居中卡片三件套** — no title + gray subtitle + three equal centered rounded cards. Layout is asymmetric and column-led; centered SaaS triads are banned.
- **中文不用日文字体** — never render Simplified Chinese in a Japanese face (Mochiy, Zen Maru, etc.). Chinese resolves through Noto Serif SC / Songti SC (serif) or Noto Sans SC / PingFang SC (sans). No 豆腐块.
- **不动画化阴影** — never animate `box-shadow` / `text-shadow`; this system has no shadows to animate anyway, and no `backdrop-filter`.
- **Don't let gold become text on ivory.** It fails contrast and cheapens the leaf. Gold is a line, a plaque, a numeral on dark — never a paragraph.
- **Don't fill the whitespace.** If a stretch of ivory feels empty, it is finished.

---

## Responsive Behavior

Mobile is re-set, not shrunk. The deck-scale drama is re-composed for a single narrow column.

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full asymmetric grid; headlines offset, right columns deliberately empty; display-xl at full 76px. |
| 768–1199px | Two-column prose collapses to one; display scales via `clamp()`; section spacing eases from 96px toward 64px. |
| ≤767px | One column. Headlines re-flow to short balanced lines (`text-wrap: balance`), each manually-broken line locked `white-space: nowrap` so **no single character or 标点 is ever orphaned**. Eyebrow, gold rule, headline stack vertically. The gilded folio numeral shrinks but keeps its ocean of margin — proportionally, mobile gets *more* whitespace, not less. |

零孤字自检: 桌面与 ≤390px 窄屏各过一遍每个标题，确认 `scrollWidth == clientWidth`、无横向溢出、无孤字。中文限宽用 `em`/`px`，不用 `ch`。

---

## 相邻风格

同属「优雅编辑」家族，选型按气质分岔：

- **`broadsheet`（大报）**：报纸头版的密度与网格，栏窄、信息量大、黑白硬朗。要「读起来像严肃大报」选它；要「留白到奢侈、一页一个手势」留在象牙工坊。
- **`sermon-serif`（布道）**：同样衬线主导，但情绪更重、字更大、对比更戏剧。要布道式的宣告感选它；要克制到隐身的高定感留在这套。
- **`manifesto-ink`（墨宣言）**：纯墨黑白的宣言体，锋利、无金、态度外露。要锋芒毕露选它；要一线金箔的安静奢华留在象牙工坊。

**象牙工坊自己最适合**：安静高定、艺术空间、精品出版、高端品牌白皮书，凡是敢于留空、一次只花一分金的场合。

---

## Anti-Slop Pledge

Strip the name off this system and it is still unmistakably made by a person who chose to leave things out. The proof is negative: no gradient, no shadow, no centered card triad, no second gold. What remains — bone ivory, charcoal ink, thin engraved serif, one drawn line of leaf — could not fall out of a generator, because a generator adds and this system is defined by everything it refused to add. **象牙工坊 spends one thread of gold, and the discipline is the design.**

— HeiGe-Design · MIT
