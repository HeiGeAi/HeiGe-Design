---
version: alpha
name: MarbleVein-design-system
description: >-
  An architectural luxury system quarried from a single slab. Warm Carrara white
  (#f0ede8) is the field, onyx charcoal is the ink, and one cool slate vein is
  spent like a fault line — a drawn crack, never text. Cinzel Roman inscriptional
  capitals stand over a Space Grotesk drafting sans and IBM Plex Mono dimension
  callouts, so the type reads carved rather than typeset. The signature move is
  one real irregular vein that becomes the layout's structural spine, registered
  to a faint facade grid. One token set drives both an interface and a 16:9
  keynote. Sharp corners, no gradient, depth by stone value and a single hairline.

colors:
  primary: "#1f2228"      # onyx — the vein at its deepest; brand ink, primary button, closing slab
  on-primary: "#f0ede8"   # Carrara white set on onyx; never on a light surface
  ink: "#2a2d33"          # quarry charcoal for body and headings, warm-cool near-black, never #000
  canvas: "#f0ede8"       # Carrara white — the marble field, the default page
  surface: "#f6f4ef"      # honed slab, a half-shade brighter; cards lift by lightness, not shadow
  muted: "#5f636b"        # slate label for eyebrows, captions, dimensions; held above 5:1
  hairline: "#d8d3c9"     # warm joint line, the 1px stone seam; the only structural rule
  accent: "#828b97"       # the slate vein — a drawn line and a mark on dark, never body text on white
  panel: "#181a1e"        # Nero, the deep onyx slab; footer, dividers, quote — the dark act

typography:
  display-xl:
    fontFamily: '"Cinzel", "Cormorant Garamond", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "84px"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "0.5px"
  display-lg:
    fontFamily: '"Cinzel", "Cormorant Garamond", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "50px"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "1px"
  heading:
    fontFamily: '"Cinzel", "Cormorant Garamond", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.32
    letterSpacing: "1.4px"
  body:
    fontFamily: '"Space Grotesk", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0px"
  eyebrow:
    fontFamily: '"Space Grotesk", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "3px"
  button:
    fontFamily: '"Space Grotesk", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "1.6px"
  caption:
    fontFamily: '"Space Grotesk", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.2px"
  body-mono:
    fontFamily: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.4px"

rounded:
  none: "0px"
  sm: "3px"
  pill: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "96px"

components:
  # —— UI 界面组件 ——
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 34px"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 34px"
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
    padding: "{spacing.lg}"
  prose-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "{spacing.md}"
  card-image:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  dimension-note:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-mono}"
    padding: "{spacing.sm}"
  tag-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  vein-rule:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.none}"
    padding: "0px"
  hairline-rule:
    backgroundColor: "{colors.hairline}"
    padding: "0px"
  footer:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    padding: "{spacing.section}"
  # —— slide 演示组件（16:9 融合 HeiGe-PPT）——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.accent}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
---

# Marble-Vein · 大理石纹

> 石头不设计，石头是被剖开的。A slab is not composed. It is cut, and where the blade meets the vein, the whole page decides its structure.

Marble-Vein is the house language of a fictional architecture-and-stone atelier — the kind that clads a private museum, a hillside residence, a flagship in a single continuous slab. It behaves like honed marble under raking light: a cold, patient white field; one deep onyx ink; and a single grey vein that runs through everything and carries the weight. One token set drives both the interface (HeiGe-UI) and the 16:9 keynote (HeiGe-PPT).

---

## Overview

The gestalt is **一整块被剖开的石头** — one quarried slab, honed flat, lit hard. No gloss, no bevel, no product-shot drama. A warm Carrara white (`#f0ede8`) is the stone; a near-black onyx is the ink cut into it; and the whole system is an argument that a single vein, drawn once, can do the work of an entire layout grid.

**The two roles of the stone.** The white and the onyx are not "background and text" — they are **field and blade**. Carrara white (`#f0ede8`) is warm, matte, faintly aged, the surface you read *across*, never a clinical screen-white. Onyx (`#1f2228`) is the cut: brand buttons, the closing slab, the deepest inscription. Everything legible lives between the field and the blade. Between them runs the third actor.

**The vein is not a color you use. It is a line you draw once.** The slate vein (`#828b97`) is spent the way a fault runs through stone — irregular, structural, unrepeatable. It appears as one drawn crack down the layout spine, one horizontal seam under an inscription, one giant numeral on a dark slab. It is cool grey-blue against the warm white, so field and vein are always in quiet tension. It never becomes body text on white — a vein is a line, not a paragraph.

**The typographic signature is carved, not set.** Cinzel — Roman inscriptional capitals descended from letters chiseled into monuments — sets every headline in stone-cut majuscule. Under it sits Space Grotesk, a drafting-instrument grotesque that reads like the annotation on an architectural elevation, and IBM Plex Mono for the dimension callouts (`3600 mm`, `N 01`, `A-A'`). The result: titles that look quarried, labels that look drafted, numbers that look measured.

**Rhythm is slow and architectural.** Sections breathe at 96px. Content registers to a facade grid and to the vein. Big Cinzel inscription → long white silence → one mono dimension → a full-bleed stone plate → silence. When the one stat or the one quote finally lands, the reader has been walked down a long marble corridor to reach it.

---

## Colors

A monochrome quarry. White field, onyx blade, slate vein — plus one warm seam and two working greys. No gradient, no tint beyond what is listed, no fourth hue. The discipline is that the *entire* chromatic identity is the temperature difference between a warm white and a cool vein.

### Brand & Accent
- **`primary` `#1f2228` — Onyx.** The vein at its darkest value, pulled solid. The brand ink: primary buttons, the closing slab, the deepest cut. This is the color the atelier *is*. Marble white on it clears **13.6:1**.
- **`on-primary` `#f0ede8` — Carrara on Onyx.** Only ever set on `primary` or `panel`. The inscription that survives on the dark slab.
- **`accent` `#828b97` — Slate Vein.** The signature. A cool grey-blue spent like a geological fault: one drawn vein per composition, one seam, one giant section numeral on dark. On onyx it reads at **5.05:1** — legible as a mark and a numeral. On the white field it sits near 3:1, so it is **forbidden as body text on light** by design: a vein is a line and a plane, never running copy. That refusal is the brand.

### Surface
- **`canvas` `#f0ede8` — Carrara White.** The default slab. Warm, honed, matte. The field everything is cut into.
- **`surface` `#f6f4ef` — Honed Slab.** Exactly a half-shade brighter than canvas. Cards, plates, and stat plinths lift by getting *lighter under the light*, closed with a hairline seam — depth by stone value, never by shadow.
- **`hairline` `#d8d3c9` — Joint Line.** The warm 1px seam, one tone under canvas. The only structural rule in the system: column dividers, card keylines, the mast line under the nav. It is the mortar joint between slabs.
- **`panel` `#181a1e` — Nero.** The deepest onyx, below primary. The rare dark act — footer, section dividers, the quote slide. On Nero, Carrara white reads at **14.9:1** and the slate vein at **5.05:1**, so the vein is finally allowed to become a numeral and a mark.

### Text
- **`ink` `#2a2d33` — Quarry Charcoal.** All body, all headings on light. A warm-cool near-black, never `#000` — pure black on warm marble reads colder than the stone wants and vibrates at large sizes. **11.8:1** on canvas, **12.5:1** on surface.
- **`muted` `#5f636b` — Slate Label.** Eyebrows, captions, dimension callouts, second-tier metadata. Tuned dark enough to clear **5.16:1 on canvas** and **5.48:1 on surface** — quiet is not the same as unreadable, and even a dimension line must be legible.

### Semantic
This is an architecture-and-stone system, not a dashboard. There is no success-green or error-red — the domains (residence, museum, quarry, cladding spec) do not blink status. If a state must be shown, it is shown in `ink` or `muted`, in words, or as a single change in the vein. Emphasis is carried by **size, value, and the vein**, never by adding a hue.

---

## Typography

Two families and a mono do everything: a chiseled Roman capital for anything meant to be monumental, a drafting grotesque for anything meant to be built, a mono for anything meant to be measured.

### Font Family
- **Display / headings — Cinzel.** Roman inscriptional capitals, the letterforms of stone monuments. Uppercase by design, so the "细衬线大写 / thin serif uppercase" brief is native, not forced. Set at 400 so the cut stays fine. Stack: `"Cinzel", "Cormorant Garamond", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif`. If the webfont fails the page degrades to a serious serif, and **Chinese resolves through Noto Serif SC / Songti SC** — a clean 宋体 with matching monumental gravity, never a Japanese face. A Cinzel headline typed in Simplified Chinese renders as engraved 宋体, in spirit with the carved Latin caps.
- **Body / labels / UI — Space Grotesk.** A drafting-instrument grotesque: technical, precise, faintly mechanical — the annotation voice of an architectural elevation. Stack: `"Space Grotesk", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`. Chinese resolves through Noto Sans SC / PingFang SC.
- **Dimensions / folios — IBM Plex Mono.** Tabular numerals for measurements, grid references, and page indices — the dimension callouts of the drawing. Stack: `"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans SC", "PingFang SC", monospace`.

**中文铁律.** 每条能承载中文的字体栈都以系统中文字体收尾（衬线走 Noto Serif SC / Songti SC，无衬线走 Noto Sans SC / PingFang SC）。断网、被墙、webfont 超时，中文都干净落地，绝不退成豆腐块，**绝不用日文字体渲染简体**（Mochiy / Zen Maru 等在简体下缺字变豆腐）。拉丁展示体 Cinzel 后紧跟 Cormorant Garamond / Georgia，保证 webfont 加载失败时刻字气质仍在。

### Hierarchy
| Role | Family | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|---|
| display-xl | Cinzel | 84px | 400 | 1.06 | 0.5px | Cover inscription, hero, stat-hero numeral |
| display-lg | Cinzel | 50px | 400 | 1.12 | 1px | Pull-quote, stat figure, section numeral, closing |
| heading | Cinzel | 23px | 500 | 1.32 | 1.4px | Card and subsection titles, carved small caps |
| body | Space Grotesk | 16px | 400 | 1.7 | 0px | Reading text, spec prose |
| eyebrow | Space Grotesk | 12px | 500 | 1.3 | 3px | UPPERCASE kicker above every inscription |
| button | Space Grotesk | 13px | 500 | 1 | 1.6px | UPPERCASE action label |
| caption | Space Grotesk | 13px | 400 | 1.5 | 0.2px | Figure captions, footer legal |
| body-mono | IBM Plex Mono | 12px | 400 | 1.5 | 0.4px | Dimension callouts, grid refs, folios |

### Principles
- **Ratio is roughly 1 : 5.2** (body 16px → display-xl 84px). The jump should feel monumental; the white corridor absorbs it.
- **Cinzel is caps-only, and that is the point.** Do not fake lowercase, do not track it tight — carved capitals want air. Positive tracking scales *down* as size scales up (3px at eyebrow, 0.5px at 84px).
- **The eyebrow is always Space Grotesk uppercase at 3px, always `muted`, never `accent`.** The vein belongs to the *seam beneath* the eyebrow, not to the letters.
- **Left-aligned inscription, never centered display.** Carved capitals hang to a grid edge or to the vein; centered Cinzel reads as a wedding invitation, not a facade.
- **零孤字.** Hand-broken inscription lines carry `white-space: nowrap`, sized by the longest line with `clamp()` so the widest caps line still fits a ≤390px screen. Centered prose uses `text-wrap: balance`. Chinese measure is limited in `em`, **never `ch`** (ch is a Latin `0` and folds Chinese into orphans).

---

## Layout

### Spacing
A 4-based scale: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 96`. Sections are separated by 96px of white marble. That gap is not padding — it is the corridor you walk before the next room.

### Grid & Container
- **12-column facade grid.** The layout is an elevation drawing: a strict column grid, hairline joints visible where slabs meet, content registered to the grid the way stone panels register to a curtain wall. Alignment is to the pixel; a misaligned joint reads as a badly cut slab.
- **The vein is a column.** The signature structural move: **the layout's central gutter is the marble vein itself**, and everything hangs off it — the inscription butts to its left, the full-bleed plate butts to its right (see Signature Moment). The grid and the vein are composed as one object.
- **Reading measure ~60–64 characters**, capped in `em`/`px`, never `ch`. Body is a spec column, not a banner.
- **Dimension callouts live in the margin** in mono, baseline-aligned, like the measurements running along the edge of a drawing (`3600`, `A-A'`, `N 01`).

### Whitespace philosophy
White marble is the most expensive material in the palette, and Marble-Vein spends it in slabs, not sprinkles. The rule: **before every moment that matters, subtract a room.** A stat, a quote, a CTA each arrives after a stretch of empty stone that made you walk to reach it. A screen with one inscription and nothing else is not empty — it is a finished facade.

---

## Elevation & Depth

**Depth by stone value and joint, not by shadow.** Honed marble does not float; it lies flat and is lit. This system earns hierarchy the way a stone wall does.

| Layer | Technique |
|---|---|
| Base | `canvas` Carrara white |
| Raised (cards, plates, plinths) | `surface` honed slab, a half-shade brighter, closed with a 1px `hairline` joint |
| Rule / seam | 1px `hairline` joint, or the signature slate `accent` vein |
| Dark act | `panel` Nero slab — depth by inversion, the room going to stone-dark |

**Rules of depth.**
- **No drop shadows.** No `box-shadow: 0 4px 6px rgba(0,0,0,.1)`. A card is held by a lighter slab tone and a hairline joint. If it must answer to hover, it shifts its joint from `hairline` to `accent` vein, or nudges 1px — it never blooms a shadow.
- **No glow, no `backdrop-filter`.** This is stone; there is nothing to blur behind it, and per production law nothing that repaints every scroll frame.
- **Never animate a shadow, a seam, or the vein's shadow.** Depth is cut once and stated. Transitions move `opacity` and `transform` only, and everything answers to `prefers-reduced-motion`.

---

## Shapes

### Border Radius
| Token | Value | Use |
|---|---|---|
| none | 0px | The default. Buttons, plates, plinths, the vein, dividers — stone is cut with a blade, and a cut edge is square. |
| sm | 3px | Feature cards only — a single honed-edge softening, the one place a corner is eased. |
| pill | 9999px | The tag-chip alone — a thin outlined capsule, the deliberate rounded exception against a system of blade-cut edges. |

Sharp is the law. The eye should feel a cut edge, not a cushion.

### Figure geometry
- **Images are full-bleed stone plates or hard-cropped rectangles**, square corners, one desaturated honed treatment so a photograph of a slab reads as part of the wall, not a floating card. This is the "石材质感大图 / stone-texture large image": a full-height marble plate that butts directly against the vein.
- **The plate butts the vein, it does not float away from it.** One plate per view registers to the layout spine; its cut edge sits flush to the vein like two slabs meeting at a book-matched seam.

---

## Components

- **nav-bar** — Carrara bar, `ink` wordmark, uppercase `eyebrow` links spaced at 3px, closed underneath by a single `hairline` joint. No fill, no shadow, no sticky glass.
- **button-primary** — The onyx cut. `primary` fill, `on-primary` Carrara label, square corners (`none`). The one solid dark object on most screens; do not place two per view.
- **button-ghost** — Carrara ground, `ink` label, 1px `ink` outline, square corners. Every secondary action.
- **eyebrow-label** — Uppercase `muted` kicker at 3px tracking with a slate `accent` seam drawn beneath it (see Signature Moment). The header unit of the whole system.
- **card-feature** — `surface` honed slab, Cinzel `heading` in carved caps, `sm` radius, hairline joint. Lifts by lightness, not shadow.
- **prose-block** — `body` Space Grotesk on `canvas`, 1.7 leading, spec-column measure. Built for actual reading.
- **card-image** — Square-cut stone plate on `surface`, `caption` in `muted` beneath. Full-bleed or hairline-joined; no rounded photo card.
- **stat-block** — Big `display-lg` Cinzel figure in `ink`, unit set in `muted`, a slate `accent` vein drawn as its underscore. Square plinth.
- **dimension-note** — `body-mono` measurement in `muted` (`H 3600 mm`, `GRID A-A'`), hung in the margin like a drafting callout. The system's quiet running-mark.
- **tag-chip** — Thin outlined `pill`, uppercase `muted` label. The single rounded object in a blade-cut system.
- **vein-rule** — The slate `accent` line itself, `none` radius. The signature element: an irregular drawn vein used as a divider, an underscore, or the layout spine. Line only — it never carries text.
- **hairline-rule** — The 1px `hairline` joint. The mortar seam that structures every slab.
- **footer** — The dark act: `panel` Nero ground, Carrara `caption` text, one vein or one link as the only mark. Where the wall finally goes to stone-dark.

---

## Presentation System

Marble-Vein as a 16:9 deck is the same slab at podium scale — **一页一句话，黄金三秒，视觉锤**. One inscription per slide, no bullet lists, no template chrome. The vein is rationed even harder here: **one vein per section**, so when the slab splits it lands. The visual hammer of this system is not an image — it is **one grey vein cutting one stone field, with a carved capital beside it.**

- **Cover (`slide-cover`)** — Carrara field. An uppercase `eyebrow` kicker top-left over its slate seam; a single `display-xl` Cinzel inscription, enormous, hung to the left grid edge; the right two-thirds left as bare marble; a mono `dimension-note` anchoring the bottom margin like a drawing's title block. 黄金三秒: three seconds in, the audience knows this is a house that builds in stone. **视觉锤 = the lone slate seam under the eyebrow, the only non-monochrome mark on the slab.**
- **Section divider (`slide-section-divider`)** — The dark act and the deck's hammer. Full-bleed `panel` Nero. One continuous slate `accent` vein crosses the entire frame at an irregular angle; a giant `display-lg` Cinzel numeral (`I`, `II`, `III`) in slate straddles it; a wide-tracked Carrara chapter title sits at the baseline. One vein, one numeral, one dark slab (see below).
- **Stat hero (`slide-stat-hero`)** — Carrara field, one colossal `display-xl` figure in `ink`, its unit in `muted`, a slate vein drawn as the underscore. One number, whole slab. 一页一句话 rendered as 一页一个数字.
- **Quote (`slide-quote`)** — Nero `panel`, a single `display-lg` Cinzel line in Carrara white, the attribution in a slate `eyebrow`. The sentence is allowed to be the only thing carved into the room.
- **Closing (`slide-closing`)** — Onyx `primary` slab. One `display-lg` line of intent in Carrara, one square button echoed as a Carrara keyline, the atelier mark and a mono folio as a title block. The deck shuts like a quarry gate, not a slide trailing off.

**Pacing across the deck:** cover (still white) → divider (the slab splits, a breath in the dark) → content spreads (inscription + stone plate registered to the vein) → stat hero (the peak) → quote (the dark silence after) → closing (the gate shuts). The peak is placed on purpose; nothing after it competes.

---

## Signature Moment

Two moments this system can do that no template reproduces, because both require the vein and the grid to be authored as one object — a generator can add a divider, but it cannot make the crack *be* the structure.

### UI — 石脉承重 · The Load-Bearing Vein
The layout's central gutter is a **single irregular slate vein (`#828b97`)**, a real hand-authored SVG path — not a straight rule — running top to bottom down the spine of the page. It is the structural line the whole composition registers to: the Cinzel inscription butts flush to its left, the full-bleed stone plate butts flush to its right, every hairline joint meets it like a slab seam, and the eyebrow seams are short branches off it. On load it reveals **once** by a Carrara-white mask wiping down its length via `transform` only (a single composited pass; `prefers-reduced-motion` renders it already-cut) — the effect of a blade opening the stone. The signature is not the reveal; it is that the crack *is* the grid. Copy the CSS and you still can't reproduce it, because the hard part is composing one irregular path so that the type, the plate, and the joints all belong to it. Delete the vein and the page has no spine.

### Deck — 石脉分章 · The Slab Split
The `slide-section-divider`: a full-bleed Nero field split edge-to-edge by **one continuous slate vein** at an irregular geological angle. A single giant thin Cinzel numeral (`II`) in slate straddles the vein so the crack appears to run *through* the letterform, like a fault through a monument; a wide-tracked Carrara chapter title sits at the baseline; a faint facade grid registers behind. One vein, one carved numeral, one dark slab, nothing else. It is a book-matched marble panel with a chapter cut into it — and it works only because every slide around it was starved of the vein to make the split inevitable.

---

## Do's and Don'ts

### Do
- **Draw the vein once.** One irregular slate line per composition — a spine, a seam, or a numeral's fault. Ration it like a fault in real stone.
- **Register everything to the grid and the vein.** Inscription flush left of the vein, plate flush right, joints meeting at true slab seams. Pixel alignment is the luxury.
- **Carve, don't type.** Cinzel caps for the monument, Space Grotesk for the drafting label, Plex Mono for the measured dimension. Keep the three voices distinct.
- **Lift with stone value and joint** — a brighter honed slab plus one hairline, never a shadow.
- **Keep corners cut** (0–3px). Blade-edge, not bubble.
- **Go dark only in the footer, the divider, and the quote** — the Nero slab is a punctuation mark, not a mood.
- **Let the white corridor run long** before the one stat, the one quote, the one CTA.

### Don't
- **不碰紫蓝俗套渐变** — no `#667eea → #764ba2` or any of its family. This system has no gradient at all; a purple-blue hero would shatter the whole quarry proposition. Stone is one honed value, lit — never a synthetic wash.
- **不做居中卡片三件套** — no title + grey subtitle + three equal centered rounded cards repeated down the page. This is an asymmetric facade grid registered to a vein, not a SaaS landing template.
- **中文不用日文字体** — never render Simplified Chinese in a Japanese face (Mochiy, Zen Maru, etc.); 简体缺字变豆腐块。Chinese resolves through Noto Serif SC / Songti SC (serif) or Noto Sans SC / PingFang SC (sans).
- **不动画化阴影** — never animate `box-shadow` / `text-shadow`; this system has no shadows to animate, no `backdrop-filter`, and no glow. The only motion is one `transform`/`opacity` vein-reveal.
- **Don't let the vein become body text on white.** It fails contrast at ~3:1 and cheapens the mark. The vein is a line, a plane, a numeral on dark — never a paragraph.
- **Don't fill the white.** If a stretch of marble feels empty, the facade is finished.
- **Don't round the corners or bevel the stone.** Marble in this system is honed flat and cut square; softness reads as fake.

---

## Responsive Behavior

Mobile is a **re-cut of the facade**, not a shrunk desktop. The vein is re-drawn for a single narrow slab, and the drama is re-composed, not scaled down.

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full 12-col facade grid; the vein runs the central spine; inscription butts left, stone plate butts right; dimension callouts hang in the margin; display-xl at full 84px. |
| 768–1199px | Grid eases to 8 columns; the plate drops below its paragraph keeping its hairline joint; the vein migrates to a side seam; folios move inline with the eyebrow; display scales via `clamp()`; section spacing eases from 96px toward 64px. |
| ≤767px | Single slab. The vein becomes a short horizontal fault between blocks (the spine can't run a narrow column honestly, so it doesn't fake it). The inscription re-flows to short balanced lines (`text-wrap: balance`), each hand-broken line locked `white-space: nowrap` so **no single character or 标点 is ever orphaned**. Eyebrow, slate seam, and inscription stack vertically; dimension callouts move to a footer title block. |

- **The inscription always fits.** Its `display-xl` size is driven by `clamp()` against the longest `nowrap` caps line, checked at 390px, so it never overflows and never orphans.
- **Measure over columns.** On small screens the reading measure is preserved in `em`; the slab gets taller, never tighter.
- **零孤字自检**: 桌面与 ≤390px 窄屏各过一遍每个标题，确认 `scrollWidth == clientWidth`、无横向溢出、无孤字。中文限宽用 `em`/`px`，不用 `ch`。

---

## Anti-Slop Pledge

Strip the atelier name off any screen of Marble-Vein and it still reads as something a person cut by hand: one warm slab of Carrara white, one onyx blade, one grey vein spent like a real fault, capitals carved rather than typeset, and white space treated as the most expensive stone in the yard. The proof is negative — no gradient, no drop shadow, no centered card trio, no second vein, no rounded bubble. What remains could not fall out of a generator, because a generator adds a divider where this system *cuts a structural crack and hangs the whole layout off it.* Delete the vein and the page loses its spine; that dependency is the design.

*Marble-Vein — HeiGe-Design. Original fictional system. MIT.*
