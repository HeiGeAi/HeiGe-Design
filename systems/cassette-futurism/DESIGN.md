---
version: alpha
name: Ferrite-design-system
description: >-
  Cassette-futurism system for FERRITE, a fictional hardware house that
  imagines the future the way 1979 did: molded beige plastic lit by a single
  amber readout. Chassis orange #d9662a runs the physical push-buttons; amber
  #ffb347 is caged inside dark readout windows and never touches the beige.
  Space Grotesk stamps the faceplate legends, Space Mono drives the seven-segment
  counters. The signature move is the power-on readout, where oversized amber
  digits breathe over an engraved beige panel.

colors:
  primary: "#d9662a"      # 机箱橙 chassis orange — physical button plastic, the one loud color
  on-primary: "#1c1710"   # engraved dark legend printed onto the orange button
  ink: "#241f17"          # warm near-black body text on beige (never pure #000)
  canvas: "#e8e0cf"       # 米色 beige chassis panel — the page is a faceplate
  surface: "#f1ebdc"      # raised cream sub-panel / card
  muted: "#5e5544"        # engraved secondary label, spec-sheet grey-brown
  hairline: "#c9bfa8"     # 1px molded groove between panels
  amber: "#ffb347"        # 琥珀 amber seven-segment readout — only ever on dark
  readout: "#141009"      # near-black display glass behind the amber digits

typography:
  display-xl:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 76px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -1.4px
  display-lg:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 46px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.6px
  heading:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0px
  body:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: 0.1px
  body-mono:
    fontFamily: '"Space Mono", ui-monospace, "SFMono-Regular", Menlo, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.6px
  button:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 1.6px
  caption:
    fontFamily: '"Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: '"Space Mono", ui-monospace, "SFMono-Regular", Menlo, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 3px

rounded:
  none: 0px
  sm: 3px
  md: 7px
  lg: 12px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 88px

components:
  # —— UI 界面组件 ——
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: "{spacing.sm} {spacing.xl}" }
  button-secondary: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: "{spacing.sm} {spacing.xl}" }
  led-indicator: { backgroundColor: "{colors.readout}", textColor: "{colors.amber}", typography: "{typography.body-mono}", rounded: "{rounded.pill}", padding: "{spacing.xs} {spacing.sm}" }
  eyebrow-tag: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.eyebrow}", rounded: "{rounded.sm}", padding: "{spacing.xs} {spacing.sm}" }
  spec-label: { backgroundColor: "{colors.surface}", textColor: "{colors.muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: "{spacing.sm} {spacing.md}" }
  divider-groove: { backgroundColor: "{colors.hairline}", rounded: "{rounded.pill}", height: 2px, width: 100% }
  card-feature: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.heading}", rounded: "{rounded.lg}", padding: "{spacing.lg}" }
  stat-block: { backgroundColor: "{colors.readout}", textColor: "{colors.amber}", typography: "{typography.body-mono}", rounded: "{rounded.sm}", padding: "{spacing.lg}" }
  nav-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.heading}", rounded: "{rounded.none}", padding: "{spacing.md} {spacing.lg}" }
  footer: { backgroundColor: "{colors.readout}", textColor: "{colors.canvas}", typography: "{typography.body}", rounded: "{rounded.none}", padding: "{spacing.xl}" }
  # —— slide 演示组件（融合 HeiGe-PPT · 16:9）——
  slide-cover: { backgroundColor: "{colors.readout}", textColor: "{colors.amber}", typography: "{typography.display-xl}", rounded: "{rounded.lg}", padding: "{spacing.section}" }
  slide-section-divider: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-stat-hero: { backgroundColor: "{colors.readout}", textColor: "{colors.amber}", typography: "{typography.body-mono}", rounded: "{rounded.md}", padding: "{spacing.section}" }
  slide-quote: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-closing: { backgroundColor: "{colors.readout}", textColor: "{colors.canvas}", typography: "{typography.body}", rounded: "{rounded.none}", padding: "{spacing.section}" }
---

# FERRITE · 磁带未来 (cassette-futurism)

> A design system for hardware that never shipped, from a future that already
> feels like a memory. Beige plastic, one orange button, one amber readout.
> Signed HeiGe-Design.

## Overview

FERRITE is the imagined 1979 vision of tomorrow: a desk-sized machine cased in
warm molded plastic, its intelligence proven only by a single amber window that
glows when you flip the switch. The whole system runs on a strict material
contract, and that contract is the entire personality.

The two colors have fixed, non-negotiable jobs. **Chassis orange `#d9662a` is
plastic** — it is the color of the physical push-button, the model-number
sticker, the transport key. It lives in the light, on the beige. **Amber
`#ffb347` is light** — it is the readout, the seven-segment glow, and it is
**caged behind the dark glass of a display window and nowhere else.** Amber
never sits on beige, because a lamp on a wall in daylight is not a lamp. That one
rule keeps the system honest and keeps it from ever looking like a flat pastel
poster.

Type is a two-instrument band from the same family. **Space Grotesk** stamps the
faceplate — square, industrial, legend-like, set in wide-tracked caps for the
screen-printed labels. **Space Mono** runs the numbers — the tape counters, the
level meters, the seven-segment readouts — always tabular so digits never wobble.

Rhythm is mechanical. The page is a stack of engraved panels separated by 1px
molded grooves; you read it top to bottom the way you'd scan a control surface,
label then control then readout. The high point of any layout is always the same
gesture: a dark readout window cut into the beige, breathing amber.

## Colors

Palette discipline: one beige world (the chassis) and one dark world (the glass).
Orange is the only loud color and it is rationed. Amber is a light source, not a
fill.

### Brand & Accent
- `primary` **#d9662a** 机箱橙 — chassis orange. Physical buttons, transport
  keys, the model-number sticker. One saturated color, used sparingly. The rest
  of the loudness comes from layout, not from more hues.
- `amber` **#ffb347** 琥珀 — the seven-segment readout glow. **Only ever rendered
  on `readout` dark glass.** This is the visual hammer of the whole system.

### Surface
- `canvas` **#e8e0cf** 米色 — the beige faceplate. The page itself is a piece of
  hardware.
- `surface` **#f1ebdc** — a raised cream sub-panel, one notch lighter than the
  chassis, for cards and control clusters.
- `readout` **#141009** — near-black display glass. The window the amber lives
  behind. Warm-black, never a cold blue-black.
- `hairline` **#c9bfa8** — the molded groove that separates two beige panels. 1px,
  the color of a shadow line in plastic.

### Text
- `ink` **#241f17** — warm near-black body text on beige. Never pure `#000`;
  plastic doesn't print in absolute black.
- `on-primary` **#1c1710** — the dark engraved legend printed onto the orange
  button. Contrast on orange ≈ **5.0:1** (AA pass). Deliberately dark, not white:
  molded buttons carry recessed dark legends, not painted white ones.
- `muted` **#5e5544** — the small spec-sheet label, the secondary annotation.
  Contrast on beige ≈ **5.6:1**.

### Semantic
- Amber on readout is the "powered / live / measured value" state — contrast
  ≈ **10.7:1**, extremely legible, and the glow reads as ON.
- Orange is "actuate this" — every primary action is a physical button you press.
- There is no separate success-green / error-red. In cassette-futurism a fault is
  a **blinking amber**, a healthy value is a **steady amber**. Semantics live in
  the readout's behavior, not in adding new hues.

All textColor + backgroundColor component pairs clear WCAG AA (≥ 4.5:1):
ink/beige ≈ 12.5, ink/cream ≈ 13.8, on-primary/orange ≈ 5.0, muted/cream ≈ 6.2,
amber/readout ≈ 10.7, canvas/readout ≈ 14.5.

## Typography

**Font family.** Space Grotesk (faceplate legends, all headings) + Space Mono
(readouts, counters, model numbers, eyebrow tags). Both are Latin-only and carry
zero risk of CJK substitution.

**中文铁律.** Every stack that can carry Chinese ends in a Simplified-Chinese
system fallback: `..., "Noto Sans SC", "PingFang SC", "Microsoft YaHei",
"Hiragino Sans GB", sans-serif` for the sans roles. **中文绝不用日文字体渲染**
（不上 Mochiy / Zen Maru 这类，简体会缺字掉豆腐）。The Latin display fonts also
fall back to a system sans/mono, so a blocked webfont degrades to a clean
industrial face instead of collapsing to Times.

**Hierarchy.**

| Role | Font | Size / Weight | Tracking | Job |
|---|---|---|---|---|
| display-xl | Space Grotesk | 76 / 700 | -1.4px | Cover title, section number — faceplate stamp |
| display-lg | Space Grotesk | 46 / 600 | -0.6px | Quote slide, big statement |
| heading | Space Grotesk | 22 / 600 | 0px | Card title, nav brand, panel label |
| body | Space Grotesk | 17 / 400 | 0.1px | Running text, spec paragraphs |
| body-mono | Space Mono | 18 / 500 | 0.6px | Seven-segment readouts, counters, amber digits |
| button | Space Grotesk | 14 / 700 | 1.6px | Button legend, wide-tracked caps |
| caption | Space Grotesk | 13 / 400 | 0.2px | Fine print, spec-row labels |
| eyebrow | Space Mono | 12 / 700 | 3px | Screen-printed sticker labels, "CH-01" tags |

**Principles.**
- Faceplate legends (eyebrow, button) are **UPPERCASE with wide tracking** — they
  are screen-printed, not typeset.
- Readout digits are **always `font-variant-numeric: tabular-nums`** so a counter
  ticking 099 → 100 never shifts width. This is not optional in a readout system.
- Display-to-body ratio is roughly 4.5:1 (76 vs 17) — the faceplate title is
  meant to be almost comically large, the way a machine's product name is silk-
  screened bigger than anything else on the box.

## Layout

**Spacing.** A 4px base scale — xs 4 / sm 8 / md 16 / lg 24 / xl 40 / section 88.
Panels butt against each other with a single hairline groove; the 88px section
step is the gap between major control clusters.

**Grid & container.** A 12-column grid capped at 1200px, but the mental model is
a **rack of horizontal panels**. Content stacks into full-width strips —
label strip, control strip, readout strip — each a distinct plastic panel. Inside
a panel, controls align to an 8px sub-grid so buttons and readouts line up like
they were injection-molded into position.

**Whitespace philosophy.** Beige negative space is the plastic body of the
machine, and it is generous — the readout earns its drama by being the one dark
cutout in a calm cream field. Do not fill the beige with decoration; the empty
faceplate is the design. Density belongs *inside* the readout window (dense amber
data), not spread across the chassis.

## Elevation & Depth

Depth here is **physical, molded depth** — never glassmorphism, never a soft
drop-shadow floating a card in space. Two moves only:

1. **Recessed (readout windows, inset fields).** The display glass sits *below*
   the faceplate. Achieve with an inner shadow: `inset 0 2px 5px rgba(0,0,0,.55)`
   plus a 1px `hairline` top edge acting as the machined bevel. The amber then
   glows *up* out of the recess.
2. **Raised (buttons, keys).** Push-buttons sit *above* the panel. A 1px light
   top edge (a hair lighter than `surface`) + a hard, un-blurred bottom offset
   shadow `0 3px 0 rgba(20,16,9,.45)` gives the plastic its thickness and a real
   pressable feel (press state removes the offset and translates down 2px).

**Amber glow.** The readout's glow is a **static** `box-shadow` /
`text-shadow` — `0 0 12px rgba(255,179,71,.45)`, always on, never animated frame
by frame (animating shadow is a scroll-killer and the checklist forbids it). A
steady glow reads as "powered"; if you must signal a fault, toggle `opacity`
between two states, never re-render the shadow.

No `backdrop-filter` anywhere — the readout is opaque warm-black glass, not a
frosted blur.

## Shapes

| Token | Value | Use |
|---|---|---|
| none | 0px | Readout window bezels, section dividers, faceplate edges |
| sm | 3px | Inset readout fields, sticker tags — tight machined corners |
| md | 7px | Push-buttons, controls — chunky injection-molded plastic |
| lg | 12px | Chassis cards / sub-panels — the softer body radius |
| pill | 9999px | Status LEDs, toggle tracks, the little live indicator |

**Geometry & imagery.** Two radius families coexist on purpose: **plastic is
soft** (buttons md, panels lg — molded corners), **glass is hard** (readouts sm,
bezels none — cut screens). Decorative motifs are molded ridges (a set of 3–4
parallel hairlines, like the grip texture on a tape deck), the seven-segment
digit grid, and the recessed rectangular readout window. Images, when present,
sit inside a beveled panel like a component slotted into the chassis, never
bleeding edge-to-edge with a fashion-magazine crop.

## Components

- **button-primary** — the actuate key. Orange plastic, dark engraved legend
  (5.0:1), md radius, raised with a hard bottom-offset shadow; press translates
  down 2px and drops the offset. This is the only orange interactive element.
- **button-secondary** — a cream panel key with a hairline machined edge and ink
  legend. Same physical press behavior, quieter.
- **led-indicator** — a pill of dark readout glass with a single amber value/state
  inside (`● LIVE`, `REC`, `88`). The smallest unit of the system.
- **eyebrow-tag** — a screen-printed orange sticker with a wide-tracked mono
  legend (`CH-01`, `MODEL 88`). Sits on the beige, since it's printed plastic,
  not light.
- **spec-label** — a recessed cream spec-row: muted caption on surface (6.2:1),
  for the fine print / parameter names beside their readout values.
- **divider-groove** — the molded hairline that separates two beige panels: a
  full-width 2px bar of `hairline`, the machined seam of the chassis.
- **card-feature** — a raised cream sub-panel with hairline bevel, lg radius,
  ink heading. A module bolted onto the chassis.
- **stat-block** — the hero unit: a recessed readout window, amber body-mono
  value on warm-black glass (10.7:1), sm radius, static amber glow. Pair a big
  tabular number with a small unit tag.
- **nav-bar** — the top faceplate strip: beige, ink brand in Space Grotesk, a 1px
  hairline groove along the bottom, square corners. A row of controls, not a
  floating pill.
- **footer** — the machine's back panel: warm-black readout glass, cream text,
  square, holding the model number, a mono serial string, and the HeiGe-Design
  signature.

## Presentation System

FERRITE decks are 16:9 **control surfaces**, not slides. Each one obeys HeiGe-PPT
discipline: **one screen, one sentence; the golden 3 seconds; a single visual
hammer.** The hammer is always the same object — **the amber readout window** —
so a viewer can flip through the deck and feel a machine powering through its
states.

- **Cover (slide-cover).** The deck opens *powered on*. A beige faceplate frames
  one large inset readout window; the title lives inside the glass as amber
  display-xl (10.7:1), like a boot screen. A screen-printed orange model-number
  tag sits top-left, a row of physical buttons runs along the bottom edge. Golden
  3 seconds: the dark window on the cream body says "this is hardware" instantly.
- **Section divider (slide-section-divider).** Full-bleed **orange plastic** —
  the whole slide becomes one giant button. A huge dark chapter number
  (`02`) engraved as on-primary display-xl (5.0:1), one wide-tracked mono label
  beneath. The color flip from beige to solid orange is the chapter break.
- **Stat / data (slide-stat-hero).** Warm-black readout glass fills the frame.
  One oversized amber seven-segment number (tabular, static glow), its unit as a
  small tag, one caption line. One number per slide — the readout is the point.
- **Quote (slide-quote).** Back to the calm beige faceplate. One sentence in ink
  display-lg, left-aligned, floated in generous molded whitespace, with a single
  orange square bullet as the only mark. The chassis breathes between two lit
  screens.
- **Closing (slide-closing).** The machine at rest: warm-black glass, cream text,
  one steady amber `● READY` led-indicator, and a single orange primary button as
  the call to action. Powered down to one clear next move.

Cadence across a deck: beige → orange → black → beige → black. Calm plastic,
loud button, lit glass, breathe, act. That alternation is the rhythm.

## Signature Moment

**换个模板绝对做不出来的那一个动作。**

- **UI signature — The Power-On Readout.** A rectangular window is *cut into* the
  beige panel (inner shadow bevel + hairline top edge), its glass warm-black, and
  an oversized amber seven-segment number counts up on load to its real value —
  tabular so it never jitters, static glow so it never drops a frame, arriving and
  stopping (no perpetual `requestAnimationFrame`). Beside it, a real physical
  push-button and a pill LED that clicks to steady amber. It is unmistakable
  because it needs all five ingredients at once: the recessed beige bezel, the
  warm-black inset glass, the seven-segment/mono digits, the tabular count-to-value,
  and the always-on amber halo. Swap any one and it stops being hardware.
- **Deck signature — The Faceplate Cover.** The title slide *is* a machine's front
  panel: a cream chassis field, one inset amber readout window booting the title
  like a startup screen, a screen-printed orange model-number sticker in the
  corner, and a channel-strip of physical buttons molded along the bottom edge.
  No other template opens a deck as a piece of powered-on hardware.

## Do's and Don'ts

**Do**
- Keep amber strictly inside dark readout glass; let it be the one light source.
- Ration orange to physical buttons, transport keys, and printed stickers only.
- Make buttons feel pressable — raised with a hard bottom offset, translating down
  on press. Skeuomorphism is the point here, not a sin.
- Use tabular-nums for every readout so counters never shift width.
- Let the beige breathe; the empty faceplate is the design, not a canvas to fill.
- Separate panels with a single molded hairline groove, top to bottom.

**Don't**
- **不碰紫蓝俗套渐变** — no `#667eea → #764ba2` or any of that pastel purple-blue
  wash. This system is warm plastic and amber glass, full stop.
- **不做居中卡片三件套** — no "centered title + grey subtitle + three equal
  rounded cards" filler. Content stacks as horizontal machine panels, aligned to
  the grid, not floated in the center.
- **中文绝不用日文字体** — never render Chinese in Mochiy / Zen Maru / any Japanese
  webfont; always fall back to Noto Sans SC / PingFang SC. Simplified glyphs
  turn to tofu otherwise.
- **不动画化阴影** — never animate `box-shadow` / `text-shadow`; the amber glow is
  static. Animate `opacity` for a blink, never re-render the shadow per frame.
- Don't put amber text on the beige — a lamp in daylight is invisible, and the
  contrast fails. Amber lives on `readout` only.
- Don't reach for glassmorphism or `backdrop-filter`; the glass here is opaque
  warm-black, and blur kills scroll performance.

## Responsive Behavior

| Breakpoint | Layout |
|---|---|
| ≥ 1024px | Full rack: horizontal panels, readout window and controls side by side, 12-col grid capped 1200px |
| 768–1023px | Panels compress; readout window goes full-width above its controls |
| ≤ 767px | Single vertical stack of full-width modules; button strip becomes a fixed bottom control bar |

Mobile is a **re-mount, not a shrink.** The desktop rack (side-by-side panels)
re-lays out into a vertical column of stacked modules, exactly like the same
components re-seated into a smaller chassis. The readout window becomes a
full-width strip so the amber digits stay legible; the physical buttons collapse
into a bottom bar you thumb like a tape transport. Titles use `clamp()` sized to
their longest un-broken line with `white-space:nowrap` per line so no character is
ever orphaned onto its own row, and no title overflows a 390px screen. Chinese
width limits use `em`, never `ch`. Every motion — the count-up, the LED blink —
is disabled under `@media (prefers-reduced-motion: reduce)`.

## Anti-Slop Pledge

Strip the FERRITE name off any screen and it still reads as built, not generated:
warm beige plastic with exactly one orange button and one amber readout caged in
dark glass, panels bevelled with real molded depth, digits ticking in tabular
mono behind a steady amber halo. No purple-blue gradient, no three centered
cards, no floating soft shadows, no emoji standing in for icons. It looks like a
machine someone imagined in 1979 and cared enough to actually mold — a
first-principles material system, not a template with the colors swapped.

_Signed HeiGe-Design · MIT._
