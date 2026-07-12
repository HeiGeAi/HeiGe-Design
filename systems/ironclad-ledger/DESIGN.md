---
version: alpha
name: IroncladLedger-design-system
description: >-
  Ironclad Ledger is a brutalist fintech system for hardcore builders. Gun-metal
  asphalt, oxidized-rust red, and one credit-green. Every figure is set in tabular
  monospace, so amounts align to the decimal like stamped metal. Hard 2px borders,
  zero radius, and blur-free offset shadows give each data block the weight of a
  machined plate. Headlines run in heavy grotesque; the ledger row is the hero.

colors:
  primary: "#b7410e"
  on-primary: "#f5efe3"
  ink: "#f5efe3"
  canvas: "#1b1d20"
  surface: "#26282c"
  muted: "#9a9ca1"
  hairline: "#3a3d42"
  up: "#3fb950"

typography:
  display-xl:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -2px
  display-lg:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1px
  heading:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.3px
  body:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  figure-hero:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 88px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.5px
  body-mono:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.5px
  data-mono:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  eyebrow:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 3px
  button:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.4px
  caption:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px

rounded:
  none: 0px
  sm: 2px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 96px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.data-mono}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  callout:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ledger-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.data-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  delta-up:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.up}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  tag-spec:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  status-dot:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.section} {spacing.xl}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.figure-hero}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
---

# Ironclad Ledger · 铁账

A fintech built for the people who build fintech. No pastel gradients, no soft reassurance. This is the interface of a machined tool: gun-metal plate, oxidized rust on the load-bearing edge, and numbers stamped in monospace so hard you could read them off a torque wrench. It settles money for developers, and it looks like it settles money for developers.

Family: 凶悍工业 Brutalist. Attitude: hard, high-contrast, unapologetic. The screen is a control panel, not a landing page.

## Overview

铁账 runs on two moods and one release valve.

**Gun-metal asphalt** (`#1b1d20` canvas, `#26282c` surface) is the chassis. Everything is bolted onto dark metal, and the metal never apologizes for being dark. Depth is built by stacking plates and casting hard shadows, never by blur or glow.

**Oxidized rust** (`#b7410e` primary) is the structural weld. It is not decoration. It marks the load-bearing edge: the primary action, the debit column, the section rivet, the one number that costs you money. Rust reads as risk, and risk is exactly what a settlement tool should color.

**Credit green** (`#3fb950` up) is the only release valve. It fires once per view, on the number that went your way. When everything else is metal and rust, one green delta lands like a green light on a dashboard.

Rhythm comes from the grid, not from color count. Three tokens do the talking. The tabular monospace figure is always the loudest voice in the room; the heavy grotesque headline sets it up, then gets out of the way. Two roles for the color, one rule for the type: **amounts are monospace, always, so they align to the decimal like they were milled.**

## Colors

### Brand & Accent

| Token | Hex | Role |
|---|---|---|
| `primary` | `#b7410e` | Oxidized rust. The load-bearing weld. Primary action background, debit/negative marker, section rivet, one hero number. Never a small text color on dark; it lives as a fill, a rail, or a huge display accent. |
| `up` | `#3fb950` | Credit green. Positive delta, gain, "settled" state. Fires once per view. The single green light on the panel. |

Negative deltas and debits reuse `primary` rust. This is deliberate: in 铁账, rust is decay is loss. Green gains, rust bleeds. Two semantics, two colors, no third red needed.

### Surface

| Token | Hex | Role |
|---|---|---|
| `canvas` | `#1b1d20` | Asphalt black. Page and full-bleed slide base. |
| `surface` | `#26282c` | Gun-metal plate. Data blocks, cards, ledger rows, quote slides. Lifts off canvas by shadow, never by a lighter tint alone. |
| `hairline` | `#3a3d42` | The 2px machined seam between plates. Structural, visible, load-bearing. |

### Text

| Token | Hex | Role |
|---|---|---|
| `ink` | `#f5efe3` | Bone white. All body, headlines, figures on dark. Warm off-white, never pure `#ffffff`. Reads at 12.9:1 on surface, 14.8:1 on canvas. |
| `on-primary` | `#f5efe3` | Bone on rust. Button labels, divider numerals. Verified 4.86:1 on `#b7410e`. |
| `muted` | `#9a9ca1` | Gun-metal gray. Captions, spec tags, secondary metadata. 6.2:1 on canvas. |

### Semantic

- `up` `#3fb950` → credit, gain, positive delta, healthy status.
- `primary` `#b7410e` → debit, loss, danger, destructive action, negative delta.
- `status-dot` in rust = live/settling; the same dot filled green = settled.

## Typography

### Font Family

Two families, split by job. **Space Grotesk** (heavy grotesque) owns headlines and UI chrome. **JetBrains Mono** owns every number, every ledger cell, every eyebrow. The monospace is not a code affectation here; it is the reason amounts line up.

- Sans stack: `"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`
- Mono stack: `"JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace`

**中文铁律**: both stacks end in a simplified-Chinese system fallback (Noto Sans SC / PingFang SC / Microsoft YaHei / Hiragino Sans GB). If the webfont fails to load, Chinese still renders clean instead of collapsing to Times or tofu blocks. **中文绝不用日文字体渲染** (no Mochiy, no Zen Maru). Chinese glyphs inside a monospace cell fall to Noto Sans SC and stay readable, even if they lose fixed-width; that tradeoff is intentional and correct.

### Hierarchy

| Role | Family | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|---|
| `display-xl` | Space Grotesk | 72 | 700 | 1.0 | -2px | Slide cover word |
| `display-lg` | Space Grotesk | 44 | 700 | 1.05 | -1px | Section headline, quote, closing |
| `heading` | Space Grotesk | 24 | 600 | 1.2 | -0.3px | Card and block titles |
| `body` | Space Grotesk | 16 | 400 | 1.6 | 0 | Prose, callouts, descriptions |
| `figure-hero` | JetBrains Mono | 88 | 700 | 1.0 | -1.5px | The house-sized stat number |
| `body-mono` | JetBrains Mono | 40 | 600 | 1.1 | -0.5px | UI stat figures, key amounts |
| `data-mono` | JetBrains Mono | 15 | 500 | 1.5 | 0 | Ledger rows, nav ticker, tables |
| `eyebrow` | JetBrains Mono | 12 | 600 | 1.2 | 3px | Spec labels, kickers, ALL CAPS |
| `button` | Space Grotesk | 15 | 600 | 1.0 | 0.4px | Action labels |
| `caption` | JetBrains Mono | 12 | 500 | 1.4 | 0.2px | Delta chips, footnotes, footer |

### Principles

- **Amounts never leave monospace.** Enable `font-variant-numeric: tabular-nums` on every mono role so digits do not shimmer when they change.
- **Contrast ratio 1:4.9** between `figure-hero` (88) and `body` (16). The number always wins the screen.
- **Eyebrows are torque specs.** ALL CAPS, 3px tracking, mono. They read like a stamp on a machine part, not a marketing kicker.
- **Never letter-space Chinese.** The wide tracking is for Latin eyebrows only. Chinese eyebrows drop to 0.5px or use inter-character spacing sparingly.

## Layout

### Spacing

An 8-based scale with one big jump for section breathing. `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 96`. Data blocks pack tight at `sm`/`md`; sections breathe hard at `section`. The contrast between a dense ledger and the 96px gap after it is the张弛 that keeps the page from being a wall.

### Grid & Container

- 12-column grid, **visible** on wide layouts. In 铁账 the grid is not a guideline you hide; the hairlines are drawn. Exposed structure is the aesthetic.
- Max content width 1200px, left-aligned to a hard rail, never centered into a lonely column.
- Gutters 24px. Ledger tables ignore gutters and run edge to edge inside their plate.

### Whitespace Philosophy

Negative space is a machined tolerance, not a decorative void. Use `section` gaps to isolate one loud thing, then pack the supporting data dense underneath it. The page should feel like a spec sheet: crowded where the data lives, empty where the eye needs to reset. Never spread everything evenly; even spacing reads as no decisions made.

## Elevation & Depth

Depth is stamped, not diffused. Plates sit on plates; the shadow is a hard offset with zero blur, like a metal card casting a shadow under a single overhead lamp.

| Layer | Treatment |
|---|---|
| Base | Canvas `#1b1d20`, flat. |
| Plate | Surface `#26282c` + 2px `hairline` border + `4px 4px 0 rgba(0,0,0,0.55)` hard offset shadow. |
| Raised (hover) | Same plate, shadow grows to `6px 6px 0 rgba(0,0,0,0.6)`, and the plate translates -2px/-2px so it visibly lifts toward the light. |
| Load-bearing | Any plate carrying a debit or a primary action gets a 4px `primary` rail on its left edge. |

**暗色系深度铁律**: glow is banned, `backdrop-filter` is banned, `box-shadow` is never animated frame-by-frame. The lift on hover animates `transform` only; the shadow snaps between two static states. Hard shadows are cheap to paint and read as heavier than any blur.

## Shapes

### Border Radius

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Everything structural: buttons, cards, plates, ledger rows, slides. The house style is square. |
| `sm` | 2px | Tiny inline chips only: delta pills, spec tags. Just enough to read as a "chip," not a "bubble." |
| `pill` | 9999px | The status dot, and only the status dot. |

Corners are square by mandate. A brutalist ledger with rounded cards is a contradiction. The 2px on chips is the single concession, and it is nearly invisible.

### Geometry

- Images and charts are cropped to hard rectangles with a 2px `hairline` frame. No rounded photo corners.
- Rivets and dots (see Signature) are perfect circles via `pill`, used as mechanical punctuation.
- Dividers are 2px solid rules, full-bleed inside their container.

## Components

- **nav-bar** — Canvas bar, bone text in `data-mono`, a live rust `status-dot` on the left, a running mono ticker of last-settled amounts. Bottom edge is a 2px hairline. Feels like the status strip on a machine.
- **button-primary** — Rust fill, bone label, square corners, 2px bone border, hard `4px 4px 0 #000` shadow. The one action that moves money. Hover pushes it -2px into a deeper shadow.
- **button-secondary** — Surface plate, bone label, 2px hairline border, square. The safe path.
- **card-feature** — Gun-metal plate, `heading` title, hairline border, hard shadow. A spec card, left-aligned, never centered.
- **callout** — Surface plate, `body` prose, for the one paragraph that needs to sit in a box.
- **stat-block** — The core UI unit. A plate holding a `body-mono` tabular amount, an `eyebrow` label above it, a `delta-up` chip, and a 4px rust load-bearing rail on the left.
- **ledger-row** — The hero (see Signature). Surface row, `data-mono` cells, decimal-aligned amount column, hairline divider below, a hash stamp in `muted`.
- **delta-up** — Green chip, `caption` mono, 2px corner. Positive change. Its rust twin (same shape, `primary` text) marks a loss.
- **tag-spec** — Canvas chip, `muted` `eyebrow`, torque-spec label like `SETTLEMENT · T+0`.
- **status-dot** — Rust circle = live/settling. Swap fill to `up` for settled.
- **divider** — 2px hairline rule, full-bleed.
- **footer** — Canvas, `muted` `caption`, mono legal line and build hash. Reads like a firmware version string.

## Presentation System

铁账 as a 16:9 deck is a control-room readout. Every slide obeys **一页一句话** (one screen, one claim) and leads with a **黄金三秒** hook that is almost always a number. The **视觉锤** is consistent across the deck: the tabular monospace figure, decimal-aligned, with a rust rail. If a slide has no number, it has a rivet.

- **slide-cover** — Asphalt field, left-aligned. Tiny rust `eyebrow` spec line at top (e.g. `IRONCLAD LEDGER · SETTLEMENT ENGINE`), then a `display-xl` grotesque word punched large, then a single 2px rust rule beneath. No centering, no subtitle sprawl. The word carries the screen.
- **slide-section-divider** — See Signature. Full-bleed rust interstitial. The chapter break is a color event.
- **slide-stat-hero** — Asphalt field, one `figure-hero` number at 88px+ (clamped up on wide screens), decimal-aligned, with a mono unit tag and a green or rust delta stamped beside it like a gauge reading. This is the money shot: 黄金三秒 is the number itself.
- **slide-quote** — Gun-metal plate filling the frame, a `display-lg` line of text, one rust rule as the pull mark. Used for the single strongest claim, never for filler.
- **slide-closing** — Asphalt, a `display-lg` call to action, a `button-primary` rust CTA, and the mono build hash in the corner. Ends like a machine powering down: hard cut, no fade to mush.

Deck rhythm: cover → dense data slides → a rust divider to reset the eye → the hero stat at the peak → quote → hard closing. The rust dividers are the张弛; they are the only slides with no data, and that emptiness is what makes the next number hit.

## Signature Moment

**UI signature: 承重账条 · The Load-Bearing Ledger Strip.**
A full-width ledger where every amount is `data-mono` tabular and aligned on the decimal point, so a column of numbers reads like it was milled on one axis. Credits sit in green, debits bleed rust. Down the left edge runs a 4px `primary` load-bearing rail. Each row carries a truncated transaction hash stamped in `muted` mono at the far right, like a serial number pressed into metal. The whole strip is a gun-metal plate lifted by a hard `4px 4px 0 #000` offset shadow, no blur, so it reads as a stamped plate you could pick up. Decimal-column alignment plus the oxide rail plus the hard-stamp shadow plus the hash serial: no generic template produces this. It is a financial statement that looks machined.

**Deck signature: 铆钉分节页 · The Rivet Section Divider.**
The chapter break is a full-bleed rust field (`slide-section-divider`, `primary` background). Punched into it, a giant bone `display-lg` chapter numeral (`03`) set in tabular monospace, flanked top and bottom by a single row of `pill` rivet dots in bone at reduced opacity, and one torque-spec `eyebrow` line like `SECTION · SETTLEMENT`. The oxide field itself is the hammer between chapters. After slides of dark metal, an entire screen of rust is a physical impact, and the rivet rows make it read as a bolted bulkhead, not a color-block slide.

## Do's and Don'ts

**Do**

- Set every amount in monospace and align it on the decimal. This is the whole personality.
- Fire rust only on the load-bearing edge: primary action, debit, danger, section break. Scarcity is what makes it read as a weld and not as a theme color.
- Cast hard offset shadows with zero blur. Stamp plates, do not float them.
- Expose the grid. Draw the hairlines. Structure is the aesthetic.
- Left-align to a rail. Let one loud number own each screen and pack the supporting data dense beneath it.
- Fire green exactly once per view, on the number that went the user's way.

**Don't**

- **不碰紫蓝俗套渐变**: no `#667eea → #764ba2` and no member of that family. This system is metal and rust; a soft indigo gradient would erase it instantly.
- **不做居中卡片三件套**: no center-aligned "title + gray subtitle + three equal rounded cards" block. 铁账 is left-railed, square-cornered, and asymmetric by mandate.
- **中文不用日文字体**: never render Chinese with Japanese fonts (Mochiy, Zen Maru). Simplified glyphs will drop to tofu. Always fall back to Noto Sans SC / PingFang SC.
- **不动画化阴影**: never animate `box-shadow` or `text-shadow` frame-by-frame, and never use glow or `backdrop-filter`. Hover lifts animate `transform` only; the hard shadow snaps between two static states.
- Do not round the corners of structural elements. Square is the house style; 2px is the only concession, on chips.
- Do not spread rust or green everywhere. Two accents that fire everywhere are zero accents.

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full 12-column grid, hairlines exposed. Ledger runs all columns: date, memo, hash, amount. Stat blocks in a 3-up row. |
| 768–1199px | Grid collapses to 8 columns. Ledger drops the memo column, keeps date, amount, hash. Stat blocks 2-up. |
| ≤767px | Single column, re-composed. The ledger becomes stacked cards: amount as the `body-mono` headline of each card, date and hash demoted to a `caption` line beneath. Nav ticker truncates to the single latest amount plus the `status-dot`. Section dividers keep their full-bleed rust; the numeral scales with `clamp()`. |

Mobile is a re-layout, not a shrink. The desktop ledger table would force a monospace amount to wrap or a hash to overflow on a 390px screen, so on mobile the row **becomes a card** with the amount promoted to hero and the metadata demoted. Headlines use `clamp()` sized to the longest line, with `white-space: nowrap` on each hand-broken line, so no single glyph or decimal is ever orphaned to its own row at the narrowest width. Chinese is width-limited in `em`, never `ch`, so it never folds early into a lonely character.

## Anti-Slop Pledge

Strip the name off this system and it still reads as built by someone who cared. The tell is not a logo; it is the decimal column that lines up like it was milled, the rust that only ever welds the load-bearing edge, the hard shadow with no blur, the hash stamped into every row like a serial number. No template ships a ledger that looks machined. 铁账 is not generated. It is fabricated, and it shows its bolts.

*Ironclad Ledger · 铁账 — a HeiGe-Design original system. MIT. Signed HeiGe-Design.*
