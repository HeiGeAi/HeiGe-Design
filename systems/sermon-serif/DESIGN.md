---
version: alpha
name: sermon-serif-design-system
description: >-
  House style of a fictional editorial design studio where the serif itself is
  the argument. Warm paper (#faf7f2) carries a warm near-black ink and one
  restrained ochre; a light optical serif sets giant ragged-right pull-quotes
  against clean grotesque body text, with hanging mono folios and text that
  wraps around a single figure. Column grids, deep negative space, no gradients.
  One token set drives both a portfolio site and a 16:9 keynote. Ochre is used
  like a signature — once per view, never as fill.

colors:
  primary: "#1a1a18"      # manifesto ink — the brand's defining serif black; covers, buttons
  on-primary: "#faf7f2"   # paper set on ink
  ink: "#23201b"          # warm reading black for body and headings (never pure #000)
  canvas: "#faf7f2"       # page paper, warm off-white
  surface: "#f2ebde"      # deeper ivory card face, one paper-tone below canvas
  muted: "#6c645a"        # secondary text, captions, folios
  hairline: "#ddd4c4"     # 1px warm rule; the only structural line in the system
  accent: "#935428"       # restrained ochre — drop cap, one rule, one mark; never a background fill

typography:
  display-xl:
    fontFamily: '"Fraunces", "Fraunces 72pt", Georgia, "Noto Serif SC", "Songti SC", serif'
    fontSize: 88px
    fontWeight: 380
    lineHeight: 1.02
    letterSpacing: -2px
  display-lg:
    fontFamily: '"Fraunces", "Fraunces 72pt", Georgia, "Noto Serif SC", "Songti SC", serif'
    fontSize: 54px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -1px
  heading:
    fontFamily: '"Fraunces", "Fraunces 72pt", Georgia, "Noto Serif SC", "Songti SC", serif'
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.3px
  lead:
    fontFamily: '"Fraunces", "Fraunces 72pt", Georgia, "Noto Serif SC", "Songti SC", serif'
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.2px
  body:
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px
  eyebrow:
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 2.4px
  caption:
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0.4px
  button:
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.6px
  meta-mono:
    fontFamily: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", "Noto Sans SC", monospace'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.5px

rounded:
  none: 0px
  sm: 2px
  md: 6px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  # —— UI 界面组件 ——
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: "14px 28px" }
  button-secondary: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: "14px 28px" }
  nav-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.eyebrow}", padding: "{spacing.md} {spacing.xl}" }
  card-feature: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.heading}", rounded: "{rounded.md}", padding: "{spacing.lg}" }
  stat-block: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.xl}" }
  body-block: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", padding: "{spacing.md}" }
  lead-paragraph: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.lead}", padding: "{spacing.md}" }
  figure-caption: { backgroundColor: "{colors.canvas}", textColor: "{colors.muted}", typography: "{typography.caption}", padding: "{spacing.sm}" }
  image-frame: { backgroundColor: "{colors.surface}", textColor: "{colors.muted}", typography: "{typography.caption}", rounded: "{rounded.none}", padding: "{spacing.sm}" }
  tag-pill: { backgroundColor: "{colors.surface}", textColor: "{colors.accent}", typography: "{typography.eyebrow}", rounded: "{rounded.pill}", padding: "{spacing.xs} {spacing.md}" }
  meta-folio: { backgroundColor: "{colors.canvas}", textColor: "{colors.muted}", typography: "{typography.meta-mono}", padding: "{spacing.xs}" }
  footer: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", padding: "{spacing.section}" }
  hairline-rule: { backgroundColor: "{colors.hairline}", height: "1px", width: "100%" }
  # —— slide 演示组件（16:9 融合 HeiGe-PPT）——
  slide-cover: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-section-divider: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-stat-hero: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-quote: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-closing: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
---

# Sermon-Serif · 布道

> 衬线即宣言。The serif is not decoration on the argument. It is the argument.

Sermon-Serif is the house style of a fictional editorial design studio. It behaves like a bound monograph: warm paper, a warm near-black ink, one restrained ochre, and a light optical serif large enough to be read as a statement of belief rather than a headline. Everything else — grids, folios, rules — steps back so the type can preach.

---

## Overview

The gestalt is **a studio monograph, printed once, kept forever.** No screen chrome, no gloss. A single sheet of warm paper (`#faf7f2`) holds a warm ink (`#23201b`) and gets structured by hairlines, not boxes.

**The two roles of the brand black.** The near-black plays display and reading at once: at 88px it is a *homily* — a light-weight serif sentence ragged-right across a column grid, the loudest thing on the page without ever raising its voice; at 17px it is patient body copy with a 1.7 line height. Same ink, two temperaments.

**The signature move.** One oversized serif pull-quote, body text wrapping (`shape-outside`) around a single duotone figure, and a lot of deliberate emptiness. The ochre appears exactly once per view — a drop cap, a rule, a hung quotation mark — and never as a filled panel.

**Rhythm.** Slow. Big serif → long silence → small mono folio → figure → silence. The page breathes on purpose. If two loud things sit on one screen, one of them is wrong.

---

## Colors

A four-value palette. Paper, ink, one deeper ivory, one ochre. Everything structural is drawn with a single hairline.

### Brand & Accent
- **`primary` `#1a1a18` — Manifesto Ink.** The brand's defining black. Covers, primary buttons, closing slides, footer. This is the color the studio *is*.
- **`on-primary` `#faf7f2` — Paper on Ink.** Only ever set on `primary`. Contrast 16.3:1.
- **`accent` `#935428` — Ochre.** Earth-pigment ochre used with monastic restraint: the drop cap of a lead paragraph, one 1px rule under a kicker, the hung quotation mark, a stat unit, a tag border. Never a background, never two ochre things in one view. On paper it clears 5.5:1; on ivory 5.0:1 — legible as text, which is the point.

### Surface
- **`canvas` `#faf7f2` — Warm Paper.** The default sheet. Off-white with a trace of warmth so the page never reads as clinical screen-white.
- **`surface` `#f2ebde` — Ivory.** Exactly one paper-tone deeper than canvas. Feature cards, quote slides, stat plinths, and figure mats sit on it — depth by paper temperature, not by shadow.
- **`hairline` `#ddd4c4` — Warm Rule.** The one structural line. 1px, warm, quiet. Column dividers, card keylines, the mast rule under the nav.

### Text
- **`ink` `#23201b` — Reading Black.** Body, headings, giant serif. Warm near-black, never `#000` — a true black on warm paper vibrates and reads colder than the studio wants.
- **`muted` `#6c645a` — Secondary.** Captions, folios, metadata, second-tier labels. 5.4:1 on paper, held above AA so nothing in this system is decorative-only text you can't read.

### Semantic
This is an editorial system, not a dashboard — there is no success-green or error-red. Emphasis is carried by **size, weight, and space**, never by adding a color. If a state must be shown, it is shown in ochre or in muted, and in words.

---

## Typography

Two families do everything: a light optical serif for anything meant to be believed, a clean grotesque for anything meant to be used. A mono handles folios and metadata like a printer's marks.

### Font Family
- **Serif display — Fraunces.** Optical, characterful, a little wonky at large sizes. Set light (380–400) and huge; this is the voice of the studio.
  Stack: `"Fraunces", "Fraunces 72pt", Georgia, "Noto Serif SC", "Songti SC", serif`
- **Body sans — Inter.** Neutral, quiet, high-legibility grotesque that gets out of the serif's way.
  Stack: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`
- **Metadata mono — IBM Plex Mono.** Folios, run-marks, index numbers.
  Stack: `"IBM Plex Mono", ui-monospace, "SFMono-Regular", "Noto Sans SC", monospace`

**中文铁律.** 中文标题走 `Noto Serif SC` / `Songti SC` 兜底，中文正文走 `Noto Sans SC` / `PingFang SC` 兜底，栈末尾恒有系统字体，断网也不塌成 Times。**中文绝不用日文字体渲染**（Mochiy / Zen Maru 等在简体下缺字变豆腐块）。拉丁展示字体 Fraunces 后紧跟 Georgia，保证 webfont 加载失败时衬线气质仍在。

### Hierarchy

| Role | Family | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|---|
| display-xl | Fraunces | 88px | 380 | 1.02 | -2px | The homily / pull-quote / hero stat |
| display-lg | Fraunces | 54px | 400 | 1.08 | -1px | Cover title, section title, closing |
| heading | Fraunces | 26px | 500 | 1.25 | -0.3px | Card and subsection titles |
| lead | Fraunces | 22px | 400 | 1.5 | -0.2px | Intro paragraph with ochre drop cap |
| body | Inter | 17px | 400 | 1.7 | 0 | Reading text |
| eyebrow | Inter | 12px | 600 | 1 | 2.4px | Kicker, all-caps, above a rule |
| caption | Inter | 13px | 500 | 1.45 | 0.4px | Figure captions, footer |
| button | Inter | 14px | 600 | 1 | 0.6px | Actions |
| meta-mono | IBM Plex Mono | 13px | 500 | 1.2 | 0.5px | Folios, index, run-marks |

### Principles
- **Contrast is at least 1:5.** 88px against 17px. When the homily lands, the body must feel like a whisper next to it.
- **Ragged-right, never justified, never centered display.** The homily hangs to a left edge and lets its right edge breathe. Centered serif is greeting-card, not studio.
- **Optical size matters.** Fraunces at 88px wants -2px tracking; at 17px the body wants 0. Never track the display loose or the body tight.
- **Zero orphans.** Hand-broken display lines carry `white-space:nowrap`, sized by the longest line with `clamp()`; centered prose uses `text-wrap:balance`. Chinese width is limited in `em`, never `ch`.

---

## Layout

### Spacing
A 4-based scale — `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 80`. Section rhythm is `80px` and up; this system would rather waste a screen of paper than crowd two ideas.

### Grid & Container
- **12-column editorial grid, but used asymmetrically.** Text lives in columns 1–7; a floated figure takes 8–12. The homily can break the grid and hang off the left margin.
- **Reading measure ~64ch equivalent, set in `em`.** Body never runs the full page width — a monograph column, not a banner.
- **Hanging folios and marks** live in the outer margin in mono, aligned to the baseline, like page numbers in a bound book.

### Whitespace philosophy
Negative space is the studio's most expensive material. It is spent in large blocks between ideas, not sprinkled evenly. A screen with one sentence and nothing else is not empty — it is finished.

---

## Elevation & Depth

**Depth by paper, not by shadow.** This is a light editorial system; it earns hierarchy the way print does.

| Level | Method |
|---|---|
| Base | `canvas` paper |
| Raised | `surface` ivory, one tone deeper, closed with a `hairline` keyline |
| Floated figure | duotone image on `surface` mat, thin ink keyline, sits into the text column via `shape-outside` |
| Divider slide | `primary` ink field — depth by inversion, not layering |

**Rules of depth.**
- **No drop shadows.** No `box-shadow: 0 4px 6px rgba(0,0,0,.1)`. Cards are held by a hairline and a paper-tone shift.
- **No glow, no `backdrop-filter`.** This is a paper system; there is nothing to blur behind.
- **Never animate a shadow or a rule.** Depth is stated, not performed. Transitions move `opacity` and `transform` only, and everything answers to `prefers-reduced-motion`.

---

## Shapes

### Border Radius
| Token | Value | Use |
|---|---|---|
| none | 0px | Covers, images, quote slides, stat plinths — the default; paper has square corners |
| sm | 2px | Buttons — barely there |
| md | 6px | Feature cards only, one soft object per view |
| pill | 9999px | Category tag, the single rounded exception |

Sharp is the rule. The eye should feel edges, not cushions.

### Figure geometry
- Images run **full-bleed or hard-cropped to the grid**, square corners, one duotone treatment (ink + paper) so photographs read as part of the type block.
- Exactly **one figure per view** floats into the text with `shape-outside`; text wraps its true silhouette, not a bounding box.

---

## Components

- **button-primary** — ink field, paper label, 2px radius. The studio's only loud button. Used once per view.
- **button-secondary** — paper, ink label, a 1px ochre keyline. The quiet action; the ochre border is the accent's whole appearance here.
- **nav-bar** — paper, ink links in eyebrow caps, closed underneath by a single hairline mast rule. No logo lockup fights the type.
- **card-feature** — ivory face, hairline keyline, 6px corner (the one soft object), serif heading over sans body.
- **stat-block** — ivory plinth, square, a display-lg serif number carried by an eyebrow label; no icon.
- **body-block / lead-paragraph** — the reading column. Lead opens with an ochre drop cap two lines deep; body follows at 1.7 line height.
- **figure-caption / image-frame** — muted mono-adjacent caption hung below a square, hairline-matted duotone image.
- **tag-pill** — the single pill in the system: ochre label, ochre keyline, ivory fill. Category marker only.
- **meta-folio** — mono page number and run-mark in the margin, muted, baseline-aligned.
- **footer** — the one inverted UI surface: ink field, paper caption text, closed by a hairline. The book's colophon.

---

## Presentation System

One token set, run at 16:9. The deck is the monograph projected — **一页一句话，黄金三秒，视觉锤**. The visual hammer of this system is not an image; it is **the light serif sentence plus the single ochre mark.** Three seconds in, the audience should feel they are reading a first edition, not watching slides.

- **Cover (`slide-cover`)** — paper field. A `display-lg` serif title hangs to the left third, an eyebrow kicker sits above a 1px ochre rule, a mono folio anchors the bottom margin. Deep silence on the right. No subtitle stacked under a centered title.
- **Section divider (`slide-section-divider`)** — the one inversion: ink field, paper serif section title, a giant ochre section number set in the margin as the hammer. Depth by flipping the page black, not by adding layers.
- **Stat hero (`slide-stat-hero`)** — paper field, one `display-xl` number ragged-left filling the frame, its unit and label small in ochre and muted beneath a hairline. One number, one screen. 黄金三秒 belongs to the figure.
- **Quote (`slide-quote`)** — ivory field. A single sentence in `display-xl` light serif, ragged-right, filling the frame; the only color is one hung ochre quotation mark in the left margin. This is 一页一句话 in its purest form.
- **Closing (`slide-closing`)** — ink field, paper serif call to action, one `button-primary` echoed as a paper keyline, the studio mark and mono folio as colophon. Ends like a book closing, not a slide trailing off.

**Pacing across the deck:** cover (still) → divider (inversion, a breath) → three content spreads (figure + wrapped text) → stat hero (the peak) → quote (the silence after) → closing (the shut cover). The peak is placed on purpose; nothing after it competes.

---

## Signature Moment

Two moments this system can do that a template cannot.

**UI — “The Sermon Fold.”** The opening screen of a portfolio: one oversized light-serif sentence (`display-xl`, fluid to ~11vw) set ragged-right across the column grid, while the studio's manifesto body copy wraps — via real `shape-outside` on the figure's silhouette, not a rectangle — around a single duotone photograph floated into columns 8–12. An ochre drop cap opens the manifesto; a mono folio hangs alone in the outer margin. No hero image behind text, no button trio. The layout *is* a printed spread, and the wrap only works because the figure, the measure, and the serif were composed together. Swap any one and it collapses.

**Deck — “The One-Line Homily.”** A 16:9 quote slide where a single belief, set in giant light serif, fills the entire frame ragged-right. The only ink besides the sentence is one ochre quotation mark hung into the left margin and a mono folio bottom-right. No logo, no accent bar, no build. It holds for one long beat. The audience reads a sentence the size of a wall and remembers it — the whole slide is the visual hammer.

---

## Do's and Don'ts

**Do**
- Give the homily a whole screen. One sentence, ragged-right, real silence around it.
- Wrap body text around one duotone figure with `shape-outside`; let the silhouette, not a box, cut the column.
- Spend the ochre once per view — drop cap, or one rule, or one mark. Then stop.
- Build hierarchy from size and space; hang folios and marks in the margin like a bound book.
- Keep corners square; let the one feature card be the only soft object.

**Don't**
- **Don't touch the purple-blue AI gradient** (`#667eea → #764ba2`) or any of its family. This system has no background gradients at all — paper is paper.
- **Don't do the centered card trio** — one title, one grey subtitle, three equal rounded cards repeated down the page. This is an asymmetric column monograph, not a SaaS landing template.
- **中文绝不用日文字体渲染** (Mochiy / Zen Maru 等)；简体缺字变豆腐，中文一律走 Noto Serif SC / Songti SC / Noto Sans SC / PingFang SC 兜底。
- **Don't animate the shadow or the rule.** Depth here is stated in paper tone and one hairline; there are no drop shadows to fade and no glow to pulse.
- Don't justify or center the display serif, don't set the body full-page width, don't add a second accent color.

---

## Responsive Behavior

Mobile is a **re-composition of the spread**, not a shrunk desktop.

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full 12-col spread; homily can hang off the left margin; figure floats 8–12 with `shape-outside`; folios in the outer margin |
| 768–1199px | 8-col; figure drops below its paragraph, keeps its hairline mat; folios move inline with the eyebrow |
| ≤767px | Single column. The wrap is abandoned — figure goes full-bleed between text blocks. Homily re-sizes via `clamp()` on the longest hand-broken line so no single character orphans on a ≤390px screen. Margin folios move to a footer run-mark. |

- **The homily always fits.** Its `display-xl` size is driven by `clamp()` against the longest `nowrap` line, checked at 390px, so it never overflows and never orphans.
- **Measure over columns.** On small screens the reading measure is preserved in `em`; the page gets taller, never tighter.
- **The wrap degrades honestly.** When there isn't room for a real `shape-outside`, the text does not fake a wrap around a box — the figure simply becomes a full-width plate.

---

## Anti-Slop Pledge

Strip the studio name off any screen of Sermon-Serif and it still reads as something a person set by hand: one warm paper, one warm ink, one ochre spent like a signature, a serif large enough to be believed, and empty space treated as the most expensive material on the page. No stock gradient, no card trio, no drop-shadow filler — only type, paper, and a rule. If it could have come off a template, it isn't finished.

*Sermon-Serif — HeiGe-Design. Original fictional system. MIT.*
