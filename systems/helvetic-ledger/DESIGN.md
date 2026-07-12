---
version: alpha
name: Rulewerk-design-system
description: >-
  Rulewerk is a Swiss ledger system built on one law: value and the grid do the
  work, colour never fills — it only signals. Near-black ink sits on a warm-neutral
  paper canvas, everything snapped to a twelve-column baseline grid with exposed
  hairline rules and tabular figures. The single hue is a calibrated signal red,
  used the way an accountant uses it — the one number that is in the red. Two
  signatures anchor it: a data table where the negative figure breaks the grid,
  and a near-empty divider whose whitespace is the visual hammer.

colors:
  primary: "#d81f1a"      # signal red — the one earned accent, calibrated AA-safe from seed #e5342a
  on-primary: "#ffffff"   # crisp white text on red (5.08:1)
  ink: "#141414"          # near-black body & figures (never pure #000)
  canvas: "#f5f5f3"        # warm-neutral ledger paper (never pure #fff)
  surface: "#ffffff"      # ruled card / table face, one value-step above canvas
  muted: "#616160"        # secondary text, units, meta (5.6:1 on canvas)
  hairline: "#dcdcd9"     # the 1px ledger rule — the whole system's connective tissue
  subtle: "#efeeeb"       # inset / zebra-row fill, quietest value-step

typography:
  display-xl:
    fontFamily: '"Neue Haas Grotesk Display Pro", "Inter", "Helvetica Neue", Helvetica, Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-1.8px"
  display-lg:
    fontFamily: '"Neue Haas Grotesk Display Pro", "Inter", "Helvetica Neue", Helvetica, Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.8px"
  heading:
    fontFamily: '"Neue Haas Grotesk Display Pro", "Inter", "Helvetica Neue", Helvetica, Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.2px"
  body:
    fontFamily: '"Inter", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0px"
  body-mono:
    fontFamily: '"IBM Plex Mono", "SFMono-Regular", ui-monospace, "JetBrains Mono", "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0px"
  stat-figure:
    fontFamily: '"IBM Plex Mono", "SFMono-Regular", ui-monospace, "JetBrains Mono", "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "-1.2px"
  eyebrow:
    fontFamily: '"Inter", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "2px"
  button:
    fontFamily: '"Inter", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "0.4px"
  caption:
    fontFamily: '"Inter", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.2px"

rounded:
  none: 0px
  sm: 2px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px

components:
  # —— UI 界面组件 ——
  nav-bar: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.eyebrow}", rounded: "{rounded.none}", padding: "{spacing.md} {spacing.xl}" }
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.none}", padding: "{spacing.sm} {spacing.md}" }
  button-secondary: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.none}", padding: "{spacing.sm} {spacing.md}" }
  card-feature: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.heading}", rounded: "{rounded.none}", padding: "{spacing.xl}" }
  stat-block: { backgroundColor: "{colors.subtle}", textColor: "{colors.ink}", typography: "{typography.stat-figure}", rounded: "{rounded.none}", padding: "{spacing.lg}" }
  data-table: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body-mono}", rounded: "{rounded.none}", padding: "{spacing.sm} {spacing.md}" }
  badge-signal: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.eyebrow}", rounded: "{rounded.sm}", padding: "{spacing.xs} {spacing.sm}" }
  status-dot: { backgroundColor: "{colors.primary}", rounded: "{rounded.pill}", padding: "{spacing.xs}" }
  divider-rule: { backgroundColor: "{colors.hairline}", rounded: "{rounded.none}", padding: "{spacing.xs}" }
  caption: { backgroundColor: "{colors.canvas}", textColor: "{colors.muted}", typography: "{typography.caption}", rounded: "{rounded.none}", padding: "{spacing.xs}" }
  section-header: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  footer: { backgroundColor: "{colors.ink}", textColor: "{colors.canvas}", typography: "{typography.caption}", rounded: "{rounded.none}", padding: "{spacing.xl} {spacing.section}" }
  # —— slide 演示组件（融合 HeiGe-PPT · 16:9）——
  slide-cover: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-section-divider: { backgroundColor: "{colors.ink}", textColor: "{colors.canvas}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-stat-hero: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.stat-figure}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-quote: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-closing: { backgroundColor: "{colors.ink}", textColor: "{colors.canvas}", typography: "{typography.body}", rounded: "{rounded.none}", padding: "{spacing.section}" }
---

# Rulewerk · 账本

A Swiss ledger system by **HeiGe-Design**. Fictional brand, original system — no real company is referenced.

> One law governs everything below: **the grid and the value do the work; colour is not a fill, it is a signal.** In an account book you write in black and you write in red, and the red is never decoration — it is the number that went wrong. Rulewerk builds an entire interface and deck language on that single accountant's discipline.

---

## Overview

Rulewerk is the International Typographic Style put to work on money. The whole surface is **ink on paper**: near-black `#141414` figures on a warm-neutral canvas `#f5f5f3`, everything aligned to a twelve-column baseline grid with the hairline rules **left exposed**, the way a real ledger shows its ruled lines. Numbers are set in tabular monospace so columns lock to the pixel. Nothing is rounded, nothing casts a shadow, nothing glows.

The palette has exactly **two inks and one signal**. Ink and paper carry 95% of the page. The signal — a single calibrated red — appears only where the data earns it: a negative delta, an alert, the one figure a reader must not miss. Because red is rationed this hard, one red mark on a monochrome page hits like a struck bell.

The two roles of the primary colour: **(1) semantic** — "in the red" for loss, variance, warning; **(2) the visual hammer** — the one place per view where the perfect grid is deliberately broken and the red mark sits in the wound. Hierarchy is built from **size, weight, and whitespace**, never from adding hues. If a layout needs a second colour to be legible, the layout is wrong.

---

## Colors

Two inks, one signal, three value-steps of paper. That is the entire system, and the restraint is the brand.

### Brand & Signal
| Token | Hex | Role |
|---|---|---|
| `primary` | `#d81f1a` | Signal red. The only chromatic accent. Reserved for negative deltas, alerts, and the single grid-break mark per view. Calibrated one step deeper than the reference seed `#e5342a` so white-on-red reaches **5.08:1** and red-on-canvas reaches **4.9:1** — the signal stays legible without changing its meaning. |
| `on-primary` | `#ffffff` | Crisp white for text sitting on the red signal. |

### Surface (three value-steps of paper)
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#f5f5f3` | Page ground — a faint warm neutral, the ledger paper. Never pure white. |
| `surface` | `#ffffff` | Card and table face. One value-step above canvas — this is how Rulewerk elevates, not with shadow. |
| `subtle` | `#efeeeb` | Inset panels and zebra rows. The quietest step; separates data bands without a line. |
| `hairline` | `#dcdcd9` | The 1px ruled line. The connective tissue of the whole grid — columns, table rules, section breaks. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#141414` | Body, headings, and every positive/neutral figure — "in the black". Near-black, never `#000`. |
| `muted` | `#616160` | Units, meta, captions, table headers. **5.6:1 on canvas** — quiet but never sub-legible. |

### Semantic (the accountant's convention)
Rulewerk needs no green. Positive and neutral figures are simply `ink` — *in the black*. Negative figures, variances, and alerts are `primary` — *in the red*. The palette **is** the semantics: black is fine, red is not, and that is the oldest financial signal there is.

---

## Typography

**Font family.** Latin display and text run on Neue Haas Grotesk / Inter — the Helvetica lineage, the grammar of Swiss design. Every figure runs on **IBM Plex Mono** for true tabular alignment, because a ledger whose columns don't lock is not a ledger.

- **Sans stack:** `"Neue Haas Grotesk Display Pro", "Inter", "Helvetica Neue", Helvetica, Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`
- **Mono stack:** `"IBM Plex Mono", "SFMono-Regular", ui-monospace, "JetBrains Mono", "Noto Sans SC", "PingFang SC", monospace`

**Chinese fallback is mandatory.** Both stacks end in `Noto Sans SC` / `PingFang SC` / `Microsoft YaHei` so 中文 renders cleanly even if the webfont fails. **中文绝不用日文字体渲染**（Mochiy、Zen Maru Gothic 之类），简体会缺字变豆腐块。Latin display faces also carry system fallbacks so a headline never collapses to Times on a dead connection.

### Hierarchy
| Role | Size | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | 64 | 800 | 1.02 | -1.8px | Cover statement, hero headline. Flush-left, one line. |
| `display-lg` | 40 | 700 | 1.06 | -0.8px | Section titles, divider numbers, pull-quotes. |
| `heading` | 22 | 600 | 1.25 | -0.2px | Card and block headings. |
| `body` | 16 | 400 | 1.6 | 0 | Running text. Generous leading, disciplined measure. |
| `body-mono` | 15 | 500 | 1.5 | 0 | **Every figure in every table.** Tabular monospace. |
| `stat-figure` | 56 | 600 | 1.0 | -1.2px | The hero number on a stat block or stat slide. Monospace. |
| `eyebrow` | 12 | 600 | 1.0 | 2px | Uppercase kicker, nav labels. Tracked wide — Swiss to the bone. |
| `button` | 14 | 600 | 1.0 | 0.4px | Actions. |
| `caption` | 13 | 400 | 1.45 | 0.2px | Meta, footnotes, footer, table headers. |

### Principles
- **Scale is the hierarchy.** The jump from `body` (16) to `display-xl` (64) is 1:4 — the maximum contrast the atlas asks for, and it means no colour is ever needed to separate a headline from a paragraph.
- **Everything left-aligns** to the grid. Centred type is used only on `slide-quote`, and only once. No page is centre-set by default.
- **Tabular figures everywhere.** All `body-mono` and `stat-figure` runs use `font-feature-settings: "tnum" 1` so a column of numbers reads as a column, not a ragged edge.

---

## Layout

**Spacing** is an 8-based ledger scale: `xs 4 / sm 8 / md 16 / lg 24 / xl 48 / section 96`. Every gap and pad is one of these six values — no arbitrary spacing survives review.

**Grid & container.** A strict **12-column baseline grid**, max container 1200px, 24px gutters. The rules are not hidden — hairline column lines and the horizontal baseline show through as faint `#dcdcd9` lines, the way ruled paper does. Content snaps to columns; nothing floats free.

**Whitespace philosophy.** Whitespace in Rulewerk is not padding, it is **structure**. The system deliberately leaves one column (or one full band) empty in every dense view — that reserved emptiness is where the eye rests and where the one signal mark lands. See *Signature Moment*. Away from that break, whitespace is even and disciplined: `section` (96px) between page sections, `xl` (48px) inside blocks, `lg`/`md` for local rhythm.

---

## Elevation & Depth

Rulewerk is **flat by law**. There is no drop shadow anywhere in the system — Swiss design earns depth from value and rule, not from blur.

| Layer | Method |
|---|---|
| Page ground | `canvas` `#f5f5f3` |
| Raised (card, table) | `surface` `#ffffff` — one value-step up, plus a 1px `hairline` border |
| Inset (zebra, panel) | `subtle` `#efeeeb` — one value-step down |
| Anchor (footer, closing) | `ink` `#141414` — the heaviest surface, used to close a page |

**Focus and interaction states** are drawn, never softened: a 2px solid `ink` outline offset 2px for focus, an underline that thickens on hover, the `status-dot` blinking to `primary` for a live figure. No `backdrop-filter`, no glow, no animated shadow — there is no shadow to animate.

---

## Shapes

**0px is the radius law.** `rounded.none` is the default on every surface, button, card, table, and slide. Sharp corners are the Swiss signature and the opposite of the AI-default 8px-round.

- `rounded.sm` (2px) — the single concession, used only on the `badge-signal` chip so it reads as a stamped label rather than a cut edge.
- `rounded.pill` — reserved for one element only: the `status-dot`, a 8px red circle marking a live/loss figure. The lone curve in a rectilinear system, which is exactly why it draws the eye.

**Image and figure geometry.** Photographs and charts are cropped to strict rectangles aligned to the column grid — no rounded corners, no organic masks. Charts are drawn in ink hairlines with a single red mark on the one series that matters.

---

## Components

- **nav-bar** — White surface, `eyebrow` labels tracked wide and uppercase, a single `hairline` bottom rule. A red `status-dot` sits beside the live metric. No pills, no shadow.
- **button-primary** — Solid `primary` red, white label, 0px corners. Used once per view, for the one committing action.
- **button-secondary** — White surface, `ink` label, 1px `hairline` border. The default action; red is not spent on it.
- **card-feature** — White `surface`, 1px `hairline` frame, `heading` + `body`, generous `xl` padding. Elevation is the border and the value-step, never a shadow.
- **stat-block** — `subtle` inset panel, a `stat-figure` in `ink`, a `muted` unit and label. If the delta is negative it flips to `primary` and gains a red `status-dot`.
- **data-table** — The core object. White surface, `body-mono` cells, `subtle` zebra rows, `hairline` rules, `muted` uppercase headers. Every figure locked to the tabular grid. This is where the UI signature lives.
- **badge-signal** — Red `sm`-cornered chip, white `eyebrow` text. The "in the red" / alert stamp.
- **status-dot** — 8px red `pill` circle. The only curve in the system; marks a live or negative figure.
- **divider-rule** — A 1px `hairline` element — the ruled line made a component, used to break bands and columns.
- **caption / section-header / footer** — Meta in `muted`, section titles in `display-lg`, and a heavy `ink` footer that closes the page like the bottom rule of a ledger sheet.

---

## Presentation System

The same tokens drive a **16:9 deck**. HeiGe-PPT discipline maps cleanly onto Swiss order — *one sentence per slide, the discipline readable in the golden three seconds, one visual hammer.*

- **slide-cover** — Paper canvas. A tracked `eyebrow` kicker, one 8px red hairline rule beneath it, then a flush-left `display-xl` statement of **one line**. The exposed baseline grid reads "system, rigour, money" in the first three seconds. No centred hero, ever.
- **slide-section-divider** — The deck's hammer. Near-empty ink-or-paper field, a hairline vertical rule dropped at the 8-column mark (**off-centre, on purpose**), an oversized thin index number (`03`) set hard against that rule, and one 8px red tick at its foot. Whitespace is the whole slide; red is one tick.
- **slide-stat-hero** — White surface, one `stat-figure` at commanding size, a `muted` unit beside it, and a single red underline rule marking the variance. One number, one line of colour.
- **slide-quote** — The one centred moment. A `display-lg` sentence, a lone red opening tick, oceans of paper around it. One sentence, held.
- **slide-closing** — Ink anchor slide. A single line in `body`, one red `button-primary` call to action. The page closes in black with one red door out.

**Rhythm.** cover (statement) → divider (breath) → stat-hero (proof) → quote (conviction) → closing (act). Dense proof pages are always followed by a near-empty divider — strong module, then a full-slide exhale. The high point of any deck is a stat-hero or the quote, placed at the peak, never buried between two data slides.

---

## Signature Moment

Two moments no template can reproduce, because both are *earned by the data*, not applied as style.

**UI — The Red Ledger Break.** A pristine monochrome data table: every figure ink-black, baseline-aligned, columns locked in tabular mono, hairline rules showing. Exactly one figure is negative — *in the red*. That figure is set in `primary`, gains the red `status-dot`, and is allowed to **hang past the right rule into the reserved margin column**, breaking the otherwise perfect grid. One colour, one break, both spent on the single number that matters. Remove the loss and the grid heals — the design literally responds to the data.

**Deck — The Hairline Divider.** A section-divider slide that is 95% empty. A single hairline vertical rule is dropped at the 8-column mark — deliberately off the optical centre — an oversized thin section index sits hard against it, and one 8px signal-red tick marks the rule's foot. The **whitespace itself is the visual hammer**; the red tick is the only ink of colour on the slide. It works because everything around it is disciplined enough to make emptiness feel intentional.

---

## Do's and Don'ts

**Do**
- Keep red under 5% of any surface. Spend it on the one figure, alert, or action that must not be missed.
- Snap everything to the 12-column baseline grid and leave the hairline rules exposed.
- Set every number in tabular monospace so columns lock to the pixel.
- Build hierarchy from size, weight, and whitespace — never from adding a hue.
- Reserve one empty column or band per dense view; that is where the signal lands.

**Don't**
- **不碰紫蓝俗套渐变** `#667eea → #764ba2` 及其全家桶。This system has no gradients at all — flat inks only.
- **不做居中卡片三件套**（一行标题 + 一行灰副标 + 三个等宽圆角卡）。Rulewerk is left-aligned and grid-set; the centred-trio is the AI-default this brand exists to refute.
- **中文绝不用日文字体**（Mochiy、Zen Maru Gothic 等），简体会缺字变豆腐；中文一律走 Noto Sans SC / PingFang SC 兜底。
- **不动画化阴影或发光。** There is no shadow and no glow to animate — depth comes from value-steps and hairlines, and it stays perfectly still.
- Don't round the corners. `0px` is the law; the only curve permitted is the single `status-dot`.
- Don't spread red across two elements in one view. One signal per screen, or it stops being a signal.

---

## Responsive Behavior

Mobile is a **re-composition of the ledger, not a shrink of it.**

| Breakpoint | Grid | Behaviour |
|---|---|---|
| ≥1200px | 12 columns | Full ruled grid, exposed hairlines, reserved margin column intact. |
| 768–1199px | 8 columns | Container fluid; tables keep all columns, gutters tighten to `md`. |
| ≤767px | 4 columns | Tables **reflow to stacked key-value rows** — each row a label in `muted` and a figure in `body-mono`; the negative figure stays red and keeps its status-dot. `display-xl` scales via `clamp()` so the cover statement never orphans a character. |

The grid-break signature survives every width: on mobile the reserved empty column becomes a reserved empty row, so the one red mark always has its margin to hang into.

---

## Anti-Slop Pledge

Strip the name off any Rulewerk page and it is still unmistakably a made thing: monochrome ink on ruled paper, one calibrated red spent only where a number went wrong, corners cut sharp, columns locked to the pixel, and a single deliberate break in an otherwise perfect grid. No purple gradient, no rounded-card trio, no shadow, no filler. This is not a template that happened to be tinted — it is the accountant's oldest discipline, drawn with a designer's precision. Every red mark on this system was earned.

— **HeiGe-Design** · MIT · slug `helvetic-ledger`
