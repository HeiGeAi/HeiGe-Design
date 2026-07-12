---
version: alpha
name: VoidHud-design-system
description: >-
  A cold acid-cyan HUD for multi-agent orchestration consoles. Near-black canvas,
  a single #22d3ee cyan that only ever means "live", and an amber caution accent
  that only ever means "attention". Titles run in a geometric sans; every status,
  metric, and timestamp lives in tabular monospace. The signature is the reticle:
  corner brackets and a breathing dot-matrix instead of boxes and shadows.

colors:
  primary: "#22d3ee"
  on-primary: "#04181d"
  ink: "#d7e5ec"
  canvas: "#0b0e11"
  surface: "#12171d"
  muted: "#8194a0"
  hairline: "#202a33"
  alert: "#ff8a24"
  on-alert: "#1a0e02"
  critical: "#ff4d5e"

typography:
  display-xl:
    fontFamily: '"Space Grotesk", "Inter", system-ui, -apple-system, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "64px"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-1.2px"
  display:
    fontFamily: '"Space Grotesk", "Inter", system-ui, -apple-system, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.6px"
  heading:
    fontFamily: '"Space Grotesk", "Inter", system-ui, -apple-system, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.2px"
  body:
    fontFamily: '"Inter", system-ui, -apple-system, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  mono:
    fontFamily: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.2px"
    fontFeature: '"tnum" 1, "zero" 1'
  metric:
    fontFamily: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "88px"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "-2px"
    fontFeature: '"tnum" 1, "zero" 1'
  eyebrow:
    fontFamily: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "2.6px"
  button:
    fontFamily: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "1.4px"
  caption:
    fontFamily: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.4px"

rounded:
  none: "0px"
  xs: "2px"
  sm: "3px"
  md: "6px"
  pill: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.md}"
    height: "64px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.xs}"
    padding: "{spacing.lg}"
  card-body:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
  hud-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.metric}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  status-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  badge-alert:
    backgroundColor: "{colors.alert}"
    textColor: "{colors.on-alert}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  status-critical:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.critical}"
    typography: "{typography.mono}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm}"
  divider:
    backgroundColor: "{colors.hairline}"
    height: "1px"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.xl}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.metric}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
---

# VoidHUD · 虚空仪表

A control-room aesthetic for the era of many agents. VoidHUD dresses a product or a
deck as the console an operator actually watches at 3 a.m. when forty agents are
running and one of them is about to fall over. It is not decoration. It is a
readout.

## Overview

VoidHUD is the visual language of a **multi-agent orchestration console** — the
observability layer where humans supervise fleets of autonomous workers. The mood
is cold, awake, and slightly clinical: a dark room, a wall of live telemetry, one
cyan pulse that tells you the system is breathing.

The palette runs on exactly two signal colors doing exactly two jobs. **Acid cyan
`#22d3ee` only ever means "live"** — a healthy agent, an active link, a nominal
metric, the cursor. **Amber `#ff8a24` only ever means "attention"** — a degraded
worker, a queue backing up, a threshold crossed. When cyan is everywhere the room
is calm; the instant one amber cell appears the eye goes straight to it. Color is
not styling here, it is state. Everything else is near-black carbon and a cool,
un-white ink so the two signals never have to compete with the chrome.

Type is split by job with no overlap. **Titles are a geometric sans (Space
Grotesk)** — human language, the headline a person wrote. **Every number, status,
timestamp, agent id, and log line is tabular monospace (JetBrains Mono)** —
machine language, aligned to the column so a changing digit never shifts the
layout. The rhythm is dense telemetry punctuated by large, quiet declarations: a
wall of small mono readouts, then one enormous number that matters.

The through-line — the thing that survives even after you strip the name — is the
**reticle**: instead of drawing boxes and dropping shadows, VoidHUD frames things
with corner brackets and marks life with a breathing dot. It looks aimed, not
decorated.

## Colors

The system is a two-signal palette on a carbon substrate. One primary that means
live, one accent that means attention, one reserved red for the rare true failure,
and a disciplined set of neutrals that stay out of the way.

**Brand & Signal**
- **Primary / Acid Cyan (`#22d3ee`)** — the live signal. Active buttons, links,
  the breathing status dot, the cursor, the hero metric. Used as ink-on-dark and
  as the fill of the single most important action per screen. Never a background
  wash, never a gradient.
- **On-Primary (`#04181d`)** — a near-black cyan-tinted ink that sits on top of a
  cyan fill (contrast ≈ 10:1). This is the only place dark text lands on cyan.
- **Alert / Caution Amber (`#ff8a24`)** — the attention signal. Warning badges,
  threshold breaches, the matrix cell that flips when a worker degrades. Scarce by
  design: if two amber things are on screen, something is wrong on purpose.
- **On-Alert (`#1a0e02`)** — near-black text for the inside of an amber badge
  (contrast ≈ 8:1).

**Surface**
- **Canvas (`#0b0e11`)** — the room. Near-black with a faint blue-graphite bias so
  cyan reads cooler against it. The default page and slide background.
- **Surface (`#12171d`)** — the panel. One step up from canvas, where telemetry
  cards and readout blocks sit. Separation comes from this tonal step plus a
  hairline, never from a shadow.
- **Hairline (`#202a33`)** — the 1px rule and bracket line. Structural, not
  emphatic; you feel the grid before you notice the line.

**Text**
- **Ink (`#d7e5ec`)** — primary text. A cool off-white, never pure `#ffffff`, so
  long log walls don't glare in a dark room (contrast ≈ 14:1 on surface).
- **Muted (`#8194a0`)** — secondary text, captions, metadata, inactive labels
  (contrast ≈ 6:1 on canvas). Present and legible, clearly demoted.

**Semantic**
- **Critical (`#ff4d5e`)** — reserved red, used only for a true failed/down state.
  It is deliberately rarer than amber; a healthy console should almost never show
  it. Rendered as text-on-dark, not as a fill.

Contrast note: every component pairing textColor with backgroundColor clears WCAG
AA 4.5:1 — the tightest is critical-on-surface at ≈ 5.5:1.

## Typography

Two families, split strictly by whether a human or a machine is speaking.

**Font families**
- **Space Grotesk** — geometric sans for `display-xl`, `display`, and `heading`.
  It carries the written line: covers, section titles, card headers. Techy but
  legible, with just enough character to not read as system default.
- **Inter** — the neutral sans for `body`, so long-form copy stays comfortable
  next to all the mono.
- **JetBrains Mono** — the machine voice for `mono`, `metric`, `eyebrow`,
  `button`, and `caption`. Tabular figures (`tnum`) and slashed zero (`zero`) are
  on for metrics and status so a `0` never reads as `O` and columns never jitter.

**Chinese fallback (production rule)** — every stack that can carry Chinese ends in
a system fallback so a blocked webfont never collapses the page:
sans falls back through `"Noto Sans SC", "PingFang SC", "Microsoft YaHei"`; the
mono stacks append `"Noto Sans SC", "PingFang SC"` before the generic `monospace`
so a Chinese label renders in a real Han face instead of tofu. **Chinese is never
rendered with a Japanese display font** (Mochiy / Zen Maru and friends) — simplified
glyphs go missing or turn Japanese. Latin display faces also keep a system fallback
so titles never slump to Times offline.

**Hierarchy**

| Role | Family | Size | Weight | Line | Tracking | Job |
|---|---|---|---|---|---|---|
| display-xl | Space Grotesk | 64px | 600 | 1.02 | -1.2px | Cover & closing headline |
| display | Space Grotesk | 40px | 600 | 1.08 | -0.6px | Section title, pull-quote |
| heading | Space Grotesk | 22px | 600 | 1.25 | -0.2px | Card / panel header |
| body | Inter | 16px | 400 | 1.65 | 0 | Paragraph copy |
| mono | JetBrains Mono | 13px | 500 | 1.5 | 0.2px | Status, log, telemetry |
| metric | JetBrains Mono | 88px | 600 | 1.0 | -2px | The one number that matters |
| eyebrow | JetBrains Mono | 12px | 600 | 1.4 | 2.6px | Uppercase kicker / label |
| button | JetBrains Mono | 13px | 600 | 1.0 | 1.4px | Uppercase action label |
| caption | JetBrains Mono | 12px | 400 | 1.5 | 0.4px | Footnote / meta |

**Principles**
- The `metric` role is the point of the whole system. It is monospace on purpose:
  a giant number that stays column-locked as it ticks. Display-to-body ratio is
  4:1; metric-to-body is 5.5:1 — the biggest thing is allowed to be almost
  aggressive.
- Eyebrows and buttons are uppercase mono with wide tracking. They read as machine
  labels, not marketing.
- Body copy is the only thing set in Inter. If a screen has no prose, it has no
  Inter — that's correct.

## Layout

An 8px rhythm with a 4px micro-step (`xs 4 / sm 8 / md 16 / lg 24 / xl 40 /
section 80`). Telemetry wants tight, consistent gutters; declarations want a lot of
black around them. The scale supports both without inventing one-off values.

**Grid & container** — a 12-column grid at a max content width of 1200px for
console/marketing pages. Panels align hard to the grid; the reticle brackets sit on
the panel's own bounding box, so alignment is legible at a glance. Data density is
high inside a panel and low between panels — the composition breathes at the seams,
not inside the readout.

**Whitespace philosophy** — negative space is the calm of the room. A dense
`hud-panel` earns its noise by having generous canvas around it. The worst failure
mode is uniform density: a screen where telemetry and titles share the same
breathing room reads as a spreadsheet, not a console.

## Elevation & Depth

Flat, layered by tone and line — **no drop shadows anywhere.** Hierarchy is built
from three moves:

1. **Tonal step** — `canvas → surface` is the only "elevation". A panel is lighter
   than the room; that's the whole depth model.
2. **Hairline & bracket** — a 1px `hairline` rule or a corner bracket separates
   regions. The bracket is the signature substitute for a card border.
3. **Glow, static and cheap** — the one permitted luminous effect is a soft cyan
   `box-shadow` on the live/primary element and a faint top radial-gradient wash on
   covers. It is **always static**: never animated (animating shadow repaints every
   frame and kills scroll), and **never `backdrop-filter`** (repaints on scroll) —
   glass is faked with a semi-opaque `surface` fill. The only motion the glow gets
   is a slow opacity breath on a single status dot.

## Shapes

**Architectural sharpness.** The HUD is built from straight lines and right angles;
rounding is nearly absent by design.

| Token | Value | Use |
|---|---|---|
| none | 0px | HUD panels, slides, bracket frames |
| xs | 2px | Cards, readout blocks — a hair of softness |
| sm | 3px | Buttons, inputs |
| md | 6px | Stat blocks, larger tiles |
| pill | 9999px | Status chips and dots only |

Geometry: images and video sit in sharp-cornered frames wearing corner brackets,
often with a 1px cyan top edge to imply a "live feed". Status is a `pill` dot; a
metric is a rectangle. The mixed language is intentional and consistent —
rectangles for data, pills for state.

## Components

- **nav-bar** — canvas ground, mono uppercase eyebrow links, a hairline under it,
  and a live cyan status dot at the far left reading `SYSTEM ONLINE`. The dot is the
  only colored thing until something needs attention.
- **button-primary** — solid cyan fill, near-black uppercase mono label, 3px
  corners, a static cyan glow. This is the single live action on a screen.
- **button-secondary** — canvas fill, cyan label, a 1px hairline frame. Quiet,
  outline-style, no glow.
- **card-feature / card-body** — surface panels at 2px radius, ink text, separated
  by a hairline. Headers in `heading`, prose in `body`. Depth is the tonal step
  only.
- **hud-panel** — the sharp-cornered signature container: no radius, monospace
  content, and four corner brackets drawn at its bounds instead of a full border.
  Houses the live telemetry.
- **stat-block** — a surface tile with a giant cyan `metric` number over a small
  mono unit label. Column-locked; the number can tick without reflow.
- **status-chip** — a pill of surface with a cyan mono label and a leading breathing
  dot: the live/nominal state.
- **badge-alert** — a small amber pill with near-black mono text: the caution state.
  Scarce.
- **status-critical** — surface with reserved-red mono text for a true failed state.
  Rarer than amber on purpose.
- **divider** — a 1px hairline rule; the structural separator in place of shadows.
- **footer** — canvas ground, muted mono captions, a hairline top edge; reads like
  a build-info line at the bottom of a console.

## Presentation System

VoidHUD renders 16:9 as a control-room wall. The whole deck obeys **one page, one
sentence** — never a bullet farm — and every slide wears the same **visual hammer:
the corner reticle plus one breathing cyan dot.** That constant frame is what makes
a stranger call it within the **golden three seconds** — the first slide reads as a
live console before a single word is parsed.

- **slide-cover (`slide-cover`)** — near-black field, faint cyan top wash. Top-left:
  a live cyan dot + mono eyebrow `SYSTEM ONLINE // FLEET 001`. Center-low: one
  `display-xl` line, the human sentence. Four corner brackets frame the full slide.
  The hammer lands in second one.
- **slide-section-divider (`slide-section-divider`)** — a huge cyan mono chapter
  number (`02`) low-left, a single mono label beside it, a 1px cyan scan-line across
  the frame. Nothing else. Pure punctuation between acts.
- **slide-stat-hero (`slide-stat-hero`)** — the deck's peak: one `metric` number
  filling the field, wrapped in corner brackets, a mono unit and delta beneath. One
  number owns the slide (see Signature Moment).
- **slide-quote (`slide-quote`)** — a surface panel with a left cyan tick and one
  `display` sentence occupying the screen, mono attribution below. The room goes
  quiet for a line.
- **slide-closing (`slide-closing`)** — back to canvas, a `display-xl` call to
  action, and a single glowing `button-primary` (`DEPLOY` / `START RUN`). The dot
  goes solid cyan: armed.

Deck rhythm: cover (立气质) → dense telemetry slides → a `slide-stat-hero` at the
high point → a `slide-quote` breath → closing action. Density rises to the hero
number, then releases.

## Signature Moment

Two moves that cannot be reproduced by swapping a template — they are the identity.

**UI — "The Reticle Panel."** A container that is framed by four corner brackets
(short L-strokes at each corner) instead of a border or a shadow, with a **live
dot-matrix status strip** running a monospace metric ticker along its top. In the
nominal state the leading dot breathes cyan (a slow opacity pulse, the only living
animation on the page). The instant a worker degrades, **exactly one matrix cell
flips to amber and the leading dot switches from breathing-cyan to solid-amber** —
the whole panel goes from calm to aimed without moving a pixel. Brackets + dot-matrix
+ column-locked ticker + single-cell state flip: that specific combination is the
fingerprint.

**Deck — "The Single Readout."** One 88px tabular-monospace number, set low-left in
an otherwise empty 16:9 black field, wrapped by four corner brackets that draw
inward from the frame edges as the slide enters, with a 1px cyan scan-baseline
sliding once beneath it and a small mono unit/delta caption. No chart, no
decoration, no second element. A single number, HUD-framed, allowed to be enormous.
No other system in this library ends a data slide on one framed digit like this.

## Do's and Don'ts

**Do**
- Do keep cyan meaning exactly one thing — live — and amber meaning exactly one
  thing — attention. Spend them like signal, not paint.
- Do frame with corner brackets and hairlines; separate panels with a tonal step,
  not a shadow.
- Do set every number, status, and timestamp in tabular monospace so columns never
  jitter.
- Do let one metric go enormous per screen and keep everything around it quiet.
- Do give a dense panel real black space around it — breathe at the seams.

**Don't**
- Don't touch the purple-blue starter gradient (`#667eea → #764ba2`) or any of its
  family — it is the AI-slop ID card and is banned outright.
- Don't fall into the centered card trio: one title, one gray subtitle, three equal
  rounded cards repeated down the page. VoidHUD is asymmetric, grid-aligned, left-led.
- Don't render Chinese with a Japanese font (Mochiy / Zen Maru); simplified glyphs
  break — use Noto Sans SC / PingFang SC in the fallback stack.
- Don't animate shadows or glows, and don't use `backdrop-filter` — glow is static,
  glass is a semi-opaque fill; the only motion is a single dot's opacity breath.
- Don't wash cyan or amber across a background as a gradient — they are point
  signals, not surfaces.
- Don't let every element read at the same weight; a console with no quiet is a
  spreadsheet.

## Responsive Behavior

Mobile is a re-composed console, not a shrunk one. The reticle language survives;
the layout is rebuilt around a single column.

| Breakpoint | Width | Behavior |
|---|---|---|
| Console | ≥ 1280px | 12-col grid, full four-corner brackets, multi-panel telemetry wall, nav bar with inline status. |
| Tablet | 768–1279px | 8-col grid, panels stack 2-up, brackets kept, metric clamps down one step. |
| Mobile | ≤ 767px | Single column. Full-frame brackets simplify to a top + bottom cyan rail. Telemetry streams stack vertically, each as its own bracketed strip. Nav collapses to a sticky top status bar carrying the live dot. `metric` uses `clamp()` so the hero number stays on one line at ≤ 390px with no orphaned digit. |

Rules that hold at every width: no horizontal scroll on the body (wide tables and
metric rows scroll inside their own container), hand-broken headlines lock each line
with `white-space: nowrap` and size to the longest line so nothing orphans, and all
motion is behind `prefers-reduced-motion: reduce` — the breathing dot goes solid
when motion is off.

## Anti-Slop Pledge

Strip the name off this file and it still reads as a control room built by someone
who has watched real fleets fail at 3 a.m.: cyan that only ever means live, amber
that only ever means attention, every digit column-locked in monospace, and framing
done with a reticle instead of a rounded card and a soft shadow. Nothing here is a
default. — HeiGe-Design
