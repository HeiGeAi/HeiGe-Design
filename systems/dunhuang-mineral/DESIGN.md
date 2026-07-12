---
version: alpha
name: DunhuangMineral-design-system
description: >-
  Dunhuang-Mineral is a Neo-Oriental cave-mural system for art exhibitions,
  cultural tourism, high-end 文创, and digital collectibles. Four ground-stone
  pigments — 石青 azurite #2e6b8f, 石绿 malachite #4a8b6f, 朱砂 cinnabar #c8483a,
  土金 earth-gold #b08d3e — are layered over aged earth-wall plaster (#ece1cb),
  the way color is built up stroke by stroke on a grotto wall. Azurite leads as
  the calm structural blue; cinnabar and gold are stamped and inlaid, never
  washed. A calligraphic 楷体/魏碑 display (Ma Shan Zheng over system KaiTi)
  stands on an airy sans body, and the signature move is a 藻井 caisson medallion
  built from stacked mineral strata, with 飞天 apsara ribbon-lines carrying the eye.

colors:
  primary: "#2e6b8f"
  on-primary: "#f6f1e4"
  ink: "#2a2018"
  canvas: "#ece1cb"
  surface: "#f4ebd8"
  muted: "#5f5540"
  hairline: "#d6c8a8"
  accent: "#4a8b6f"
  seal-red: "#c8483a"
  gold: "#b08d3e"

typography:
  display-xl:
    fontFamily: '"Ma Shan Zheng", "LXGW WenKai", "KaiTi", "STKaiti", "Kaiti SC", "Noto Serif SC", "Songti SC", serif'
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: 2px
  display-lg:
    fontFamily: '"Ma Shan Zheng", "LXGW WenKai", "KaiTi", "STKaiti", "Kaiti SC", "Noto Serif SC", "Songti SC", serif'
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 1px
  heading:
    fontFamily: '"Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.5px
  body:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.2px
  numeral:
    fontFamily: '"Cormorant Garamond", "Baskerville", "Times New Roman", "Songti SC", serif'
    fontSize: 96px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -1px
  button:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 1.5px
  caption:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.4px
  eyebrow:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 4px

rounded:
  none: 0px
  sm: 3px
  md: 8px
  lg: 16px
  pill: 9999px

spacing:
  xs: 6px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 56px
  section: 100px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  card-mural:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card-cave:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  stat-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  tag-pigment:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  rule-flow:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    height: 3px
    width: 100%
  rule-hairline:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
    width: 100%
  rule-gold:
    backgroundColor: "{colors.gold}"
    rounded: "{rounded.none}"
    height: 2px
    width: 100%
  seal-stamp:
    backgroundColor: "{colors.seal-red}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 56px
    width: 56px
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  slide-cover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gold}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl} {spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Dunhuang-Mineral · 敦煌矿彩

A Neo-Oriental system pulled off a grotto wall. It looks like ground stone rubbed
into aged 土墙 plaster — 石青 azurite laid calm and wide, 石绿 malachite drawn as a
flowing 飞天 ribbon, 朱砂 cinnabar pressed as a seal, 土金 earth-gold inlaid as a
line of lattice. Color here is not painted, it is **deposited in layers**, the way a
mural is built over centuries. Warm plaster is the ground; the four minerals are the
brush; a 藻井 caisson medallion is the still center everything rotates around.

## Overview

The mood is **矿物叠层** — pigment stacked on plaster, patient and material, the
opposite of a flat digital wash. The palette runs on one lead color, three inlaid
minerals, and a warm earthen ground.

- **石青 azurite `#2e6b8f` leads.** A calm, saturated stone-blue with weight — the
  structural color that carries buttons, tags, and the chapter-divider field. It is
  the one mineral allowed to fill a large plane and hold text on it.
- **土金 earth-gold `#b08d3e` is the inlay.** Not a shine, a dug pigment. It draws
  the caisson lattice, the foil rule capping a dark panel, and — on a deep cave
  ground — the single giant stat numeral. Gold only speaks on darkness.
- **朱砂 cinnabar `#c8483a` is the seal, 石绿 malachite `#4a8b6f` is the flow-line.**
  Both are used as pure marks — a stamped red square, a ribboning green rule — never
  as a background wash and never as body text. Two minerals that live as gesture, not field.

The ground is aged earth: 土墙 canvas `#ece1cb` and a lighter plaster surface
`#f4ebd8`, both warm and grainy, never `#fff`. Ink `#2a2018` is a warm soot-brown —
it writes the body on plaster and, inverted, becomes the **深窟** cave-dark that lets
gold and cinnabar glow. The type signature is a **calligraphic 楷体/魏碑 display**
(Ma Shan Zheng brush over system KaiTi) standing on a **Song-serif heading** and an
**airy Inter body** — the carved hand, the printed structure, and the quiet reader,
in that order.

## Colors

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#2e6b8f` | 石青 azurite. The lead mineral — primary buttons, pigment tags, the chapter-divider field. The only mineral that fills a plane and carries text (`on-primary` on it ≈ 5.1:1). |
| `accent` | `#4a8b6f` | 石绿 malachite. The **飞天 flow-line** — a ribboning rule, an underline, an icon stroke. A mid-tone by nature, so it is used as a mark only, never as a text/field pairing. |
| `seal-red` | `#c8483a` | 朱砂 cinnabar. The stamped 印章 seal square and small inlays. Fill and gesture only — never a background wash, never text. |
| `gold` | `#b08d3e` | 土金 earth-gold. The caisson lattice, the foil rule capping a cave panel, the giant stat numeral. Reads only on dark ground (on `ink` ≈ 5.1:1); never white-on-gold, never gold text on plaster. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#ece1cb` | 土墙 earth-wall plaster. The page and every light slide. Warm, matte, grainy — the aged wall the mural sits on. |
| `surface` | `#f4ebd8` | A cleaner plaster panel, one step lighter than canvas, so a card reads as fresh-troweled wall laid over the ground. |
| `hairline` | `#d6c8a8` | 1px rules, card edges, mineral-dust separators. Decorative, never text. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#2a2018` | Warm soot-brown body and headings on plaster (on `canvas` ≈ 12.3:1, on `surface` ≈ 13.4:1). Inverted, it is the **深窟 cave-dark** background for covers, footers, and stat pages. |
| `on-primary` | `#f6f1e4` | Plaster-cream reversed onto azurite and cave-dark — button labels, divider numerals, cave-panel text (on `primary` ≈ 5.1:1, on `ink` ≈ 14:1). |
| `muted` | `#5f5540` | 赭石 earth-brown secondary — captions, units, meta (on `surface` ≈ 6.2:1, on `canvas` ≈ 5.7:1). AA everywhere, never a washed gray. |

**Contrast discipline (why the palette can be this rich and still pass AA).** Every
text-bearing pair is engineered to clear 4.5:1: azurite carries plaster-cream at
≈ 5.1:1, cave-dark carries cream/plaster at ≈ 12–14:1, gold-on-cave-dark sits at
≈ 5.1:1, ink-on-plaster at ≈ 12–13:1, muted-on-plaster at ≈ 5.7–6.2:1. The two
mid-tone minerals that *fail* text contrast — **malachite (≈ 3.1:1 on plaster) and
cinnabar (≈ 3.6:1 on plaster)** — are therefore confined to fill-and-gesture roles
(the flow-line, the seal) where no text pairing exists. The richness comes from
**layering pigments in space**, not from stacking two low-contrast colors on top of each other.

## Typography

### Font Family
- **Calligraphic display (楷体/魏碑): `"Ma Shan Zheng", "LXGW WenKai", "KaiTi", "STKaiti", "Kaiti SC", "Noto Serif SC", "Songti SC", serif`.**
  A brush 楷书 is the mural's voice — the human hand that painted the wall. `Ma Shan Zheng`
  gives the wet brush stroke; if it fails to load it falls to **system KaiTi / STKaiti**
  (real 楷体 on Windows and macOS), then to Noto Serif SC / Songti SC. It never falls to a
  Latin serif, and it is never faked with a Japanese font.
- **Song-serif heading: `"Noto Serif SC", "Songti SC", "STSong", serif`.** Carved,
  high-contrast 宋体 for section and card titles — the printed structure standing between the
  brush display and the sans body.
- **Body / UI sans: `"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`.**
  Quiet and legible at 1.75 leading, it lets long Chinese reading breathe without fighting the calligraphy above it.
- **Numeral: `"Cormorant Garamond", "Baskerville", "Times New Roman", "Songti SC", serif`.**
  An engraved high-contrast serif for the oversized 土金 stat figures — Latin digits carved like a stele inscription; CJK numerals fall to 宋体.

**中文铁律.** Every Chinese-bearing stack ends in a system CJK fallback (`Noto Sans SC / PingFang SC / Microsoft YaHei`
for sans; `Noto Serif SC / Songti SC / STSong` for serif; `KaiTi / STKaiti / Kaiti SC` for kai). **Chinese is never
rendered with a Japanese font** — no Mochiy / Zen / Klee families — because simplified glyphs would drop to tofu or
show Japanese variants. Cut every webfont link and the page must still render clean 简体中文.

### Hierarchy
| Role | Size | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | 80px | 400 | 1.12 | 2px | Cover title, one line per screen, plaster-cream reversed on cave-dark |
| `display-lg` | 48px | 400 | 1.2 | 1px | Section title, quote slide, closing line |
| `heading` | 26px | 700 | 1.4 | 0.5px | Card / subsection titles, carved Song |
| `body` | 17px | 400 | 1.75 | 0.2px | Paragraphs, roomy CJK leading |
| `numeral` | 96px | 600 | 1.0 | -1px | Gold stat figures, giant chapter serials |
| `button` | 15px | 600 | 1.0 | 1.5px | Buttons, tracked for restraint |
| `caption` | 13px | 400 | 1.6 | 0.4px | Units, meta, footer notes |
| `eyebrow` | 12px | 600 | 1.0 | 4px | Kickers, nav, pigment tags — tracked wide |

### Principles
- Size contrast is the drama: `display-xl` to `body` is ≈ 4.7:1. Set the brush title bigger than feels safe — a mural headline is meant to be read across a hall.
- Give the calligraphic display **positive tracking (2px)** so the wet brush strokes have air; reserve tight negative tracking for the Latin stat numerals only.
- Hold body leading at 1.75 — dense enough to read, open enough to feel like painted plaster, not a spreadsheet.
- One brush display per view. Repeat the calligraphy and it stops being a signature and becomes decoration.

## Layout

### Spacing
A generous, museum-scaled step with an outsized `section`: `xs 6 · sm 12 · md 20 · lg 32 · xl 56 · section 100`.
Vertical rhythm between major blocks is `section`; inside a mural panel it is `xl`. The wall wants room around each fragment.

### Grid & Container
- A firm column grid — mural registers, not a soft flow. Content aligns to a visible-in-spirit lattice borrowed from the 藻井: nested, concentric, square.
- Compositions are **asymmetric and layered**: text left-of-center, the caisson medallion or a giant serial anchored off-axis right, a malachite flow-line threading between them. Max content width ~1200px; the reading column caps near 32em.
- The pigment planes overlap slightly — an azurite block, a plaster panel, a gold rule — so the page reads as **strata**, one mineral laid over another, never as separated cards on a blank field.

### Whitespace philosophy
Plaster is the material, not the gap. Leave the earth-wall showing between fragments so each mineral mark lands with weight; the grain of the empty wall is part of the composition. Whitespace is **pooled toward the caisson**, not sprinkled evenly — the eye should always find one still center.

## Elevation & Depth

Depth is **pigment strata over a textured wall**, not floating cards under drop shadows.

| Layer | Treatment |
|---|---|
| Earth-wall ground | `canvas` / `ink` carrying a **baked, static plaster-grain texture** (an SVG `feTurbulence` pre-composited into a low-opacity data-URI), never a live filter. |
| Plaster panel | `surface`, one step lighter, lifted by a 1px `hairline` edge and a hair of grain — no drop shadow. |
| Mineral inlay | azurite fields, the gold caisson lattice, the malachite flow-line — flat, saturated, laid *on* the wall like troweled pigment. |
| Cave-dark | inverted `ink` panels (cover, footer, stat) where gold and cinnabar finally glow against darkness; the tonal jump from plaster to cave *is* the depth. |

**No glow, no `backdrop-filter`, no animated shadow.** The grotto atmosphere is a baked texture, not a live `filter: blur()`, so nothing re-rasterizes on scroll. Where the caisson "breathes," it does so only via a slow `opacity` fade on the gold lattice — `transform` / `opacity` only.

## Shapes

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Every slide, mural panel edge, and lattice line — the wall is rectangular; sharp is the default. |
| `sm` | 3px | The 印章 seal square — a stamp, softened by a hair like a worn stone corner. |
| `md` | 8px | Buttons and stat blocks — a small, deliberate rounding. |
| `lg` | 16px | Large mural and cave panels, softened just enough to read as troweled plaster, not a screen. |
| `pill` | 9999px | The malachite flow-line and small pigment tags only. |

The system's signature primitives are the **藻井 nested-square caisson** (concentric rotated squares, angular, mineral-layered), the **飞天 ribbon-line** (a single flowing malachite/gold bezier), and the **朱砂 seal**. Images, when they appear, are cropped to a **caisson-square or a torn-plaster edge**, never a soft rounded rectangle.

## Components

- **button-primary** — 石青 azurite fill, plaster-cream label, `md` corners. The one place a mineral becomes a UI surface. Hover deepens the azurite; focus adds a 2px azurite ring, never a glow.
- **button-secondary** — plaster `surface` ground, ink label, a single `hairline` edge. Quiet; often paired beneath a malachite flow-line instead of shouting.
- **nav-bar** — plaster `canvas` ground, `eyebrow` links tracked to 4px, one hairline bottom rule, a small caisson mark where a logo would go.
- **card-mural** — plaster `surface` panel, hairline edge, Song `heading` title, `lg` corners, roomy `xl` padding. One fragment of wall per idea.
- **card-cave** — the inverted move: a **深窟 cave-dark `#2a2018` panel** with a **土金 gold foil rule capping the top edge** and plaster-cream `body` text. Used once per view to anchor the strata, like a shrine niche cut into the wall.
- **stat-block** — a 96px engraved `numeral` in ink on plaster with a small `muted` unit. On plaster the figure stays ink (AA-safe); the gold-numeral treatment is reserved for the cave-dark stat slide.
- **stat-label** — small `muted` caption on plaster, the unit / meta beneath a figure.
- **tag-pigment** — a small azurite `pill` with a plaster-cream `eyebrow`, for category / 洞窟编号 labels. The one rounded thing in a sharp system.
- **rule-flow (飞天引线)** — the 石绿 malachite flow-line: a 3px ribboning bar, fill only, no text pairing. The connective gesture that threads the composition — see Signature Moment.
- **rule-hairline** — the 1px `hairline` mineral-dust separator: card edges, nav underline, column rules. The system's quiet connective tissue.
- **rule-gold (土金 inlay)** — a 2px `gold` foil rule, fill only. Caps the top of a `card-cave` panel and underlines the closing line — the dug-gold inlay that only appears against darkness.
- **seal-stamp (印章)** — a 56px **朱砂 square**, fill only, no text pairing in token space; in render it carries a reversed carved glyph, rotated a hair off-square like a real hand-stamp.
- **footer** — the cave-dark floods full-width: `#2a2018` ground, plaster-cream text, a gold hairline above, one seal signing off. No link soup.

## Presentation System

The same tokens drive a 16:9 deck for a gallery talk, an exhibition keynote, a 数字藏品 reveal. It is a
**mural deck** — built on 一页一句话 / 黄金三秒 / 视觉锤, where the visual锤 is the caisson medallion and the apsara flow-line.

- **Cover (`slide-cover`)** — **深窟 cave-dark** ground carrying a plaster-grain texture, a wide-tracked `eyebrow` kicker top-left, the `display-xl` **brush title in plaster-cream** low-left, and the **藻井 caisson medallion** glowing off-axis right in stacked azurite → malachite → gold strata with a cinnabar lotus core. 黄金三秒: dark wall, one glowing caisson, one brush line — the grotto lands before a word is read.
- **Section divider (`slide-section-divider`)** — a solid **石青 azurite field**, a giant `numeral` chapter serial (一 / 二 / 三 or 01 / 02) in plaster-cream anchored right, and a single **土金 apsara flow-line** sweeping from the numeral into the `display-lg` title low-left. One saturated plane, one ribbon, one number — the chapter turns on color alone.
- **Stat page (`slide-stat-hero`)** — cave-dark ground, a single **96px+ gold engraved numeral** oversized past comfort, one `muted`-toned unit, a seal in the corner. One number burning on darkness, no dashboard.
- **Quote page (`slide-quote`)** — plaster `canvas` wall, one `display-lg` brush line, opened by a **朱砂 seal** and threaded by a low malachite flow-line. The hand-brushed line after a run of carved titles is the tonal turn — felt, not read.
- **Closing (`slide-closing`)** — cave-dark floods again: one `display-lg` plaster-cream line, a gold-capped azurite `button-primary`, a last 印章 seal. The wall goes dark, the caisson fades, 余味, then stop.

Discipline across the deck: **at most one caisson and one flow-line per slide, and cinnabar only ever as a single seal.** Layer the minerals in space, never crowd them into one plane.

## Signature Moment

**UI — 藻井 (The Caisson Medallion).** The hero anchors on a single **藻井 coffered-ceiling medallion**:
concentric, 45°-rotated nested squares built as **stacked translucent mineral strata** — an outer 石青 azurite
ring, a 石绿 malachite ring, a **土金 gold lattice** of thin crossing lines, and a **朱砂 cinnabar lotus** at the
still center — all laid over baked plaster-grain so it reads as pigment dug into a wall, not a flat SVG. It sits
off-axis, and the brush `display-xl` title is set *beside* it, not centered under it. The medallion "breathes"
only through a slow `opacity` fade on the gold lattice (transform / opacity only — no shadow animation, no glow).
You cannot get this by dropping content into a template: it requires composing four ground-stone pigments as
nested rotated squares with a lotus core, over grain, off the center line.

**Deck — 飞天引线 (The Apsara Leadline).** Every section divider and the cover carry a single continuous
**hand-inked ribbon** — a flying-apsara silk streamer drawn in **土金 gold edged with 朱砂**, sweeping in one
unbroken bezier from the giant chapter numeral, across the plaster field, into the title. It is a **static
stroke path** (drawn once, then held — no perpetual animation), and it is the deck's 视觉锤: the eye is *carried*
from the number to the words the way a mural leads a pilgrim's gaze wall to wall. Change the template and the
ribbon flattens into a boring underline — the flowing mineral-edged bezier is the thing that can't be faked.

## Do's and Don'ts

**Do**
- Layer the four minerals **in space, as strata** — azurite field, malachite flow-line, gold lattice, cinnabar seal — over showing plaster grain. Depth comes from stacking pigment, not shadows.
- Let the brush 楷体 display and the plaster carry the composition; anchor every view on one still caisson center, off the center line.
- Ration cinnabar to a single stamped seal and malachite to a single flow-line per view; save gold for cave-dark ground where it glows.
- Left-weight and layer the composition; keep body leading at 1.75; hold the earth-wall texture baked and static.

**Don't**
- **Don't touch the purple-blue cliché gradient (`#667eea → #764ba2`)** or any of its family. This system is warm plaster and ground stone — no synthetic gradient wash ever.
- **Don't build the centered card triptych** (title + gray subtitle + three equal rounded cards). This is an asymmetric, layered, off-axis mural composition anchored by the caisson.
- **Don't render Chinese with a Japanese font.** 简体中文 uses Ma Shan Zheng / KaiTi / Noto Serif SC / Noto Sans SC with system CJK fallback, always.
- **Don't animate shadows or add glow / `backdrop-filter`.** The grotto atmosphere is a baked texture; the only motion is a slow `opacity` fade on the gold lattice.
- Don't let cinnabar or malachite become a background wash or carry text; don't put gold text on plaster or white text on gold; don't flatten the strata into separated cards on a blank field.

## Responsive Behavior

| Breakpoint | Layout |
|---|---|
| ≥1200px | Full layered composition: brush title left, caisson medallion + giant serial off-axis right, malachite flow-line threading between; `display-xl` at 80px; dividers keep the ribbon sweeping full-width. |
| 768–1199px | Strata compress toward center; the caisson shrinks but keeps its nested-square strata; the apsara flow-line shortens; `display-xl` ~56px. |
| ≤767px | Single-column re-composition. The cover restacks: caisson medallion moves *above* the brush title, the flow-line becomes a short vertical ribbon down the left margin, the seal pins to the top-right; the cave-dark panel goes full-width; the divider serial centers with a shortened ribbon. |

Mobile is a **re-composition, not a shrink** — the layering and the off-axis anchor are rebuilt for the narrow wall, not squeezed. Brush headlines use `clamp()` sized to the longest manually-broken line, and each line is locked with `white-space: nowrap` so the 楷体 title never drops an orphan 字 or 标点 on a 390px screen. Chinese width limits use `em` / `px`, never `ch`. Verify zero orphans and no horizontal overflow (`scrollWidth == clientWidth`) on both desktop and ≤390px before shipping.

## Anti-Slop Pledge

Strip the brand name and this page still reads as made by a hand that cared: four ground-stone pigments layered
over aged earth-wall plaster, a 藻井 caisson medallion glowing off-center in azurite, malachite, and gold with a
cinnabar lotus core, a flying-apsara ribbon carrying the eye from a giant serial into a wet-brush 楷体 title, and
a single 朱砂 seal pressed into the corner. No purple gradient, no centered card triptych, no glow, no default
font naked on the screen, no Japanese font faking Chinese. The fingerprint is the layering — a pipeline paints one
flat wash; this system deposits pigment on a wall, stratum by stratum, the way a mural is actually made.

---

*HeiGe-Design · dunhuang-mineral · MIT.*
