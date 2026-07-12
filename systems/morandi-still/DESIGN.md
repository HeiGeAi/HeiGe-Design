---
version: alpha
name: morandi-still-design-system
description: >-
  Morandi Still — a hushed, high-grey system for homeware, ceramics and slow
  lifestyle brands. Anchored by a single dusty slate blue (#55676B) and warmed
  by clay-rose and dusty-sage accents over a plaster ground, it treats every
  layout as a still-life: objects grouped asymmetrically on one shared
  groundline, one directional light wash, one long soft shadow, and vast quiet
  negative space. A soft Fraunces serif carries the calm; an airy humanist sans
  breathes underneath. Restraint is the entire point, not a compromise.

colors:
  primary: "#55676B"       # 雾岩蓝 Dusty Slate — the one anchor, used sparingly
  on-primary: "#F4F0E8"    # warm cream on the slate
  ink: "#3B3833"           # 陶土墨 Umber Charcoal — body text, never pure black
  canvas: "#E7E1D6"        # 灰陶底 Plaster Ground — the page, a greyed oatmeal
  surface: "#F1ECE3"       # 素胚白 Bisque Surface — card face, a hair lighter
  muted: "#695F52"         # 灰褐 Taupe — secondary text, still legible on both grounds
  hairline: "#D6CFC2"      # 陶线 — 1px separators, a whisper darker than canvas
  accent: "#B0857A"        # 陶粉 Clay Rose — the warm still-life note, decorative only
  sage: "#96A088"          # 鼠尾草灰绿 Dusty Sage — the cool still-life note, decorative only

typography:
  display-xl:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.5px
  display-lg:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.3px
  heading:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.1px
  body:
    fontFamily: '"Mulish", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px
  eyebrow:
    fontFamily: '"Mulish", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 2.5px
  caption:
    fontFamily: '"Mulish", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2px
  button:
    fontFamily: '"Mulish", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.3px
  numeral:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 88px
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: -1px

rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 20px
  pill: 9999px

spacing:
  xs: 6px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 56px
  section: 96px

components:
  # —— UI 界面组件 ——
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  tag-still:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  figure-caption:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.sm}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  # —— 静物装饰基元（1px 规则元素，只承载单色，无文字）——
  divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    height: 1px
  accent-mark:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    height: 2px
  groundline:
    backgroundColor: "{colors.sage}"
    rounded: "{rounded.pill}"
    height: 1px
  # —— slide 演示组件（HeiGe-PPT 融合，16:9）——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  slide-stat-hero:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
---

# Morandi Still · 莫兰迪静物

> A home for homeware. The quietest system in the library — and the hardest to fake.

## Overview

Morandi Still is built from one observation: Giorgio Morandi painted the same
bottles for forty years, and the drama was never in the objects. It was in the
grey air between them. This system moves that air into a product.

The whole palette is de-saturated on purpose. There is exactly **one anchor** —
a dusty slate blue `#55676B` — and it is rationed like an expensive pigment:
one primary button, one footer band, one divider field per view. Everything
else is plaster, bisque, taupe and hairline, with two warm/cool still-life
notes (clay rose, dusty sage) touched in at 1px weight. Nothing shouts. The
composition does the talking.

Type carries the calm. **Fraunces**, a soft optical serif, holds every display
line at a light weight so headlines read like breath, not banners. An airy
humanist sans (Mulish) sits underneath at 1.7 line-height so body copy never
crowds. The rhythm is slow, asymmetric, and mostly empty — a still-life, not a
grid.

Primary's two roles: **the single point of intent** (the one action worth
taking on a screen) and **the ground of quiet** (a deep field on dividers and
footers where the eye rests). It is never a background wash and never a
gradient.

## Colors

**Brand & Accent**

| Token | Hex | Role |
|---|---|---|
| `primary` | `#55676B` | 雾岩蓝 Dusty Slate. The one anchor. Buttons, footer, divider fields. Rationed. |
| `on-primary` | `#F4F0E8` | Warm cream text sitting on the slate (5.22:1). |
| `accent` | `#B0857A` | 陶粉 Clay Rose. The warm still-life note. 1px marks and top-rules only, never a fill behind text. |
| `sage` | `#96A088` | 鼠尾草灰绿 Dusty Sage. The cool still-life note. Groundlines and stat rules only. |

**Surface**

| Token | Hex | Role |
|---|---|---|
| `canvas` | `#E7E1D6` | 灰陶底 Plaster Ground. The page. A greyed oatmeal, never white. |
| `surface` | `#F1ECE3` | 素胚白 Bisque Surface. Card face, one hair lighter than canvas — the shift is felt, not seen. |
| `hairline` | `#D6CFC2` | 陶线. 1px separators, a whisper darker than canvas. |

**Text**

| Token | Hex | Role |
|---|---|---|
| `ink` | `#3B3833` | 陶土墨 Umber Charcoal. Body and headlines. Warm, never `#000`. |
| `muted` | `#695F52` | 灰褐 Taupe. Secondary text, eyebrows, captions. Legible on both grounds (≥4.8:1). |

**Semantic** — This system deliberately has no red/green alert colors. Morandi
does not do alarm. Status is carried by the two still-life notes: `sage` for
settled/complete, `accent` (clay) for attention. If a hard error state is
unavoidable, deepen `ink`, do not import a signal red.

**Contrast ledger** (self-checked WCAG): primary/cream 5.22 · surface/primary
5.04 · canvas/ink 8.97 · surface/ink 9.92 · surface/muted 5.31. All component
text pairs clear 4.5:1.

## Typography

**Font Family**

- **Display / headings / numerals — Fraunces**, a soft-serif with optical
  sizing. Kept light (300–500) so it reads gentle at large sizes.
  Chinese display falls back to `"Noto Serif SC", "Songti SC", "STSong", serif`
  (思源宋体 / 宋体) — a warm literary serif that matches the mood.
- **Body / UI — Mulish**, a low-contrast humanist sans, airy and unhurried.
  Chinese falls back to `"Noto Sans SC", "PingFang SC", "Microsoft YaHei",
  "Hiragino Sans GB", sans-serif`.
- **Chinese is never rendered in a Japanese face** (Mochiy / Zen Maru etc.):
  simplified glyphs drop to tofu. Serif Chinese → Noto Serif SC / Songti SC;
  sans Chinese → Noto Sans SC / PingFang SC.
- Every stack ends in a system fallback, so a blocked `fonts.googleapis.com`
  degrades gracefully instead of collapsing to Times.

**Hierarchy**

| Role | Size / Weight / Leading | Use |
|---|---|---|
| `display-xl` | 64 / 400 / 1.1 | Cover statement, one line |
| `display-lg` | 40 / 400 / 1.15 | Section heads, pull-quotes |
| `heading` | 24 / 500 / 1.25 | Card titles |
| `body` | 17 / 400 / 1.7 | Paragraphs, generous air |
| `eyebrow` | 12 / 600 / — · +2.5 tracking | Uppercase kickers, nav, labels |
| `caption` | 13 / 400 / 1.5 | Metadata, footnotes |
| `button` | 15 / 600 / 1 | Actions |
| `numeral` | 88 / 300 / 0.95 | Ceramic stat figures |

**Principles** — Display contrast is at least 1:4 against body. Headlines run
light and large, never bold and loud. Tracking widens only on the small
uppercase eyebrow; everything else sits at natural spacing. Left-align by
default; the still-life comes from placement, not centering.

## Layout

**Spacing** — A 6-based scale climbing to a deliberately large `section: 96px`.
Morandi layouts are more empty than full; whitespace is the primary material,
not the leftover.

| Token | Value |
|---|---|
| `xs` | 6px |
| `sm` | 12px |
| `md` | 20px |
| `lg` | 32px |
| `xl` | 56px |
| `section` | 96px |

**Grid & Container** — 12 columns, but rarely filled symmetrically. Content
lives on a `max-width` of about 1080px with an off-center reading column
(~62%), leaving a wide quiet margin on one side where a single object or caption
floats. **Asymmetry is the house style.** Never a three-up centered row.

**Whitespace philosophy** — Space is not padding between things; it *is* the
still-life table. Objects are grouped tight, then surrounded by a lot of
nothing. One dense cluster + one large void beats an even sprinkle every time.

## Elevation & Depth

Depth is a single low, wide, soft shadow — the shadow a matte ceramic vessel
casts on a bisque shelf. No layered stacks, no glow, no glass.

| Layer | Treatment |
|---|---|
| Ground | `canvas`, flat |
| Resting card | `surface` + `0 24px 40px -28px rgba(59,56,51,0.22)` — one long, soft, warm shadow |
| Recessed | inset hairline, no shadow |

Decorative depth is a **directional light wash**: a very low-saturation
`radial-gradient` seated top-left, warm plaster easing toward a cooler grey —
the light in a north-facing studio. It never uses `backdrop-filter`, and the
one shadow is static; **shadows are never animated** (repaint cost, and it
breaks the stillness).

## Shapes

**Border Radius** — Gently rounded, never bubbly.

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Full-bleed slides, footer |
| `sm` | 6px | Tags, chips |
| `md` | 12px | Stat blocks |
| `lg` | 20px | Feature cards |
| `pill` | 9999px | Buttons |

**Geometry** — Images are cropped to **soft-cornered rectangles or tall
still-life portraits (4:5)**, grouped and overlapped slightly like objects on a
shelf, all resting on one shared horizontal groundline. No perfect circles, no
hard-edged collage. Vessels touch; they do not clip into each other.

## Components

- **button-primary** — Slate pill, cream label, one 2px settle-shadow. This is
  the single point of intent per view. If a screen has two primaries, one is
  wrong.
- **button-secondary** — Bisque pill with a hairline and slate text; the quiet
  alternative that never competes.
- **nav-bar** — Plaster ground, uppercase tracked eyebrow links, one hairline
  underneath. No blur, no drop-shadow.
- **card-feature** — Bisque face on a hairline, with a **1px clay-rose top-rule**
  as the still-life note and one long soft shadow. Left-aligned, roomy padding.
- **stat-block** — Big light Fraunces numeral, taupe eyebrow label, seated on a
  **1px dusty-sage baseline** like a figure on a shelf.
- **tag-still** — Small bisque chip, tracked taupe label. Categorization without
  color noise.
- **figure-caption** — Taupe caption on plaster, the small voice beside a
  floating still-life image.
- **footer** — The deep slate band. Cream body. Full-bleed, square corners. The
  page finally exhales into the anchor color.

**Still-life primitives** — the three 1px rule elements that do the composing:
`divider` (hairline) separates without weight, `accent-mark` (clay rose) is the
single warm note above a card, and `groundline` (dusty sage) is the shelf every
stat and object rests on. They carry a single color each and never any text —
they are lines, not boxes.

## Presentation System

16:9, and the same still-life grammar as the UI. Every slide obeys **一页一句话**
(one line per slide), **黄金三秒** (the visual reads in three seconds), and one
**视觉锤** (a single unforgettable object).

- **Cover** — Plaster field, mostly empty. A light 64px Fraunces line sits low
  on the frame, resting on a faint hairline groundline, with a tracked eyebrow
  above and one still-life photo floating in the wide right margin. The visual
  hammer is the *emptiness* — 70% of the frame is quiet.
- **Section divider** — Full-bleed **slate field**, giant light chapter numeral
  in cream. This is the exhale between acts; the color shift alone signals a
  chapter change.
- **Stat hero** — One `numeral` at 88px+ rendered as a ceramic figure, resting
  on a **dusty-sage groundline** with one long soft shadow, unit and label in
  small taupe caption beneath. One number, nothing else.
- **Quote** — Plaster ground, a `display-lg` line set off-center, opened by a
  single **clay-rose mark** (a 1px rule or oversized quote glyph). One breath,
  one thought.
- **Closing** — Back to the slate band. A short line in cream, one
  button-primary's-worth of call-to-action, caption credit below. The deck ends
  the way the page does: settled into the anchor.

Deck rhythm: plaster · plaster · **slate divider** · plaster · plaster ·
**slate close**. The two slate fields are the only loud moments, and they are
loud only by contrast with all that grey air.

## Signature Moment

**换个模板绝对做不出来的那一个时刻。**

- **UI — 窗台静物排布 (Windowsill Still-Life Layout).** Cards do not sit in a
  centered grid. They are grouped *asymmetrically* along one shared invisible
  groundline (a single hairline running behind the cluster), overlapping
  slightly like vessels on a sill, each casting one long soft warm shadow in the
  same direction, all under a single top-left light wash — with a large,
  deliberate void on one side holding just a caption. It is composition, not
  arrangement. A generic card grid physically cannot produce it, because the
  layout logic is *grouping + groundline + shared light*, not *repeat and
  space-evenly*.

- **Deck — 静物过渡页 (Still-Life Section Divider).** A full-bleed slate field
  with one oversized, light-weight Fraunces chapter numeral resting on a
  groundline near the lower third, casting a single long soft shadow, with vast
  emptiness above it. No box, no bar, no icon — a number sitting on a shelf like
  a Morandi bottle. The stillness is the signature.

## Do's and Don'ts

**Do**

- Ration the slate. One primary point of intent per view; let the rest be grey.
- Group tight, then surround with a large void. Whitespace is the table.
- Keep display type light and large; let size, not weight, carry hierarchy.
- Align left, place asymmetrically, seat objects on a shared groundline.
- Touch the clay-rose and sage notes at 1px. They season; they never fill.

**Don't**

- **Don't touch the purple-blue cliché gradient** (`#667eea → #764ba2`) or any
  of its cousins — it is the opposite of this system's soul.
- **Don't build the centered card trio** (title + grey subtitle + three equal
  rounded cards). Asymmetric still-life grouping only.
- **Don't render Chinese in a Japanese font** (Mochiy / Zen Maru / etc.) —
  simplified glyphs break to tofu. Serif → Noto Serif SC / Songti SC; sans →
  Noto Sans SC / PingFang SC.
- **Don't animate the shadow** (or any shadow/glow). The one shadow is static;
  motion breaks the stillness and repaints every frame.
- Don't saturate anything to "make it pop." If it pops, it left the system.
- Don't use pure black or pure white. Umber ink and plaster ground, always.

## Responsive Behavior

Mobile is a **re-composition**, not a shrink. The still-life cluster restacks
into a single vertical column, the shared groundline becomes the left edge, and
the wide void moves to generous top/bottom breathing room.

| Breakpoint | Behavior |
|---|---|
| ≥ 1200px | Full asymmetric still-life; off-center reading column, wide quiet margin |
| 768–1199px | Cluster tightens; void narrows but survives; type steps down one rung |
| < 768px | Single column, one object per row, groundline → left rule, `section` padding trimmed to `xl` |

Guardrails: hand-broken display lines lock each line with `white-space:nowrap`
and size with `clamp()` so **no orphan character** drops to its own line at any
width down to 390px; body limits use `em`/`px`, never `ch` (which orphans
Chinese early). Every animation respects `prefers-reduced-motion: reduce`.

## Anti-Slop Pledge

Strip the name off this file and you will still see a person's hand: a rationed
single pigment, a deliberate off-center void, one light source, one long soft
shadow, and objects that rest together like a painting held its breath. This is
the calm you compose, not the calm a template defaults to.
