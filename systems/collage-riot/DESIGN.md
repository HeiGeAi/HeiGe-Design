---
version: alpha
name: CollageRiot-design-system
description: A ransom-note collage system for music-festival sponsorship pitches and street-culture events. Four process inks — fluoro pink, process cyan, marker yellow, key black — clash on warm newsprint like a poster torn off a wall and re-pasted. Headlines are cut-and-spliced across Anton and Archivo Black, anchored by rotated masking-tape stickers and hard static offset shadows. Sharp cut edges, bare column rules, mono date-stamps. Loud, printed, physical. Nothing here reads as a template — it reads as glue, scissors, and a photocopier at 2am.

colors:
  primary: "#FF1F8E"
  on-primary: "#0A0A0A"
  ink: "#17140F"
  canvas: "#EDE7D8"
  surface: "#F7F2E8"
  muted: "#5E5749"
  hairline: "#26221B"
  accent: "#00AEEF"
  highlight: "#FFE500"

typography:
  display-xl:
    fontFamily: '"Anton", "Archivo Black", "Arial Narrow", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 92px
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: -1.5px
  display-lg:
    fontFamily: '"Archivo Black", "Arial Black", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 52px
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: -0.6px
  heading:
    fontFamily: '"Space Grotesk", "Archivo", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.3px
  body:
    fontFamily: '"Space Grotesk", "Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px
  body-mono:
    fontFamily: '"Space Mono", "JetBrains Mono", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  eyebrow:
    fontFamily: '"Space Mono", "JetBrains Mono", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace'
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 3px
  button:
    fontFamily: '"Archivo Black", "Space Grotesk", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 15px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: 0.4px
  caption:
    fontFamily: '"Space Grotesk", "Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 26px"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 26px"
  nav-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  data-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  tag-sticker:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  chip-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  caption:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  column-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "0px"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.highlight}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.lg}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  slide-closing:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Collage Riot · 拼贴暴动

A ransom-note collage system built for the moment a music festival has to sell itself to a sponsor. Not a brochure. A poster ripped off a wall, photocopied twice, and glued back together at the wrong angle — on purpose.

## Overview

Collage Riot runs on four **process inks** slammed together the way a riso machine slams them: fluoro pink, process cyan, marker yellow, key black. The two lead roles: **fluoro pink `#FF1F8E` is the riot** — it carries every primary action and every rotated sticker, and it is used loud but rationed. **Key-black ink is the workhorse** — it prints the type, the column rules, the hard offset shadows, and every heavy structural edge. Cyan and yellow are the two other cans of ink you reach for when one color is not enough noise.

Everything sits on **warm newsprint `#EDE7D8`**, with a slightly brighter **pasted-paper `#F7F2E8`** for cutouts that were glued on top. The type is a deliberate mismatch: **Anton** (tall condensed newspaper headline) spliced against **Archivo Black** (fat grotesque), so two adjacent words in one headline read as two cut scraps from two different magazines. **Space Grotesk** keeps the body legible; **Space Mono** stamps the dates, prices, and kicker labels like a photocopier margin.

The rhythm is physical. Sharp cut edges (radius 0 almost everywhere), bare column rules, hard static drop-shadows, and one round element on the whole page — the sticker — which is the only pill in the system. Density is the point, but the density is choreographed: a wall of noise, then one black slide, then a wall of noise again.

## Colors

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#FF1F8E` | Fluoro process pink. The riot. Primary buttons, rotated stickers, the loudest cut in a headline. Rationed. |
| `accent` | `#00AEEF` | Process cyan. The second ink. Stat heroes, chips, the "other half" of a two-color overprint. |
| `highlight` | `#FFE500` | Marker yellow. Stat blocks, highlighter swipes over black type, the third can of ink. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#EDE7D8` | Warm newsprint. The page. The paper everything is torn from. |
| `surface` | `#F7F2E8` | Pasted cut-paper. Brighter than newsprint — a scrap glued on top, so it lifts. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#17140F` | Newsprint ink. Body, headlines, borders, shadows. Warm near-black, never pure `#000`. |
| `on-primary` | `#0A0A0A` | Key-black overprint that sits on the fluoro pink. Black ink on pink paper. |
| `muted` | `#5E5749` | Faded newsprint gray. Captions, credits, fine print. |

### Structural
| Token | Hex | Role |
|---|---|---|
| `hairline` | `#26221B` | Printed column rule. Near-black thin line that divides collage columns like a broadsheet. |

**Contrast, checked and passing WCAG AA (≥4.5:1):** black `on-primary` on fluoro pink ≈ 5.5:1 · ink on cyan ≈ 7.3:1 · ink on marker yellow ≈ 14.4:1 · ink/canvas ≈ 14.9:1 · ink on pasted-paper ≈ 16.5:1 · muted on newsprint ≈ 5.8:1. The pink carries **black type only** — never white. That is not a limitation, it is the point: this is CMYK overprint, and key black is what you print with.

## Typography

### Font Family
- **Display / headlines:** `Anton` (condensed newspaper cut) for `display-xl`, `Archivo Black` (fat grotesque) for `display-lg`. Mixing them inside one headline is the ransom-note signature — do it on purpose.
- **UI / body:** `Space Grotesk`, with `Inter` as the metric-compatible backup.
- **Marks / kickers / data:** `Space Mono` — dates, prices, ticket codes, eyebrow stamps.
- **Chinese fallback (mandatory):** every stack ends in `"Noto Sans SC", "PingFang SC", "Microsoft YaHei"`. Anton and Archivo Black are Latin-only; Chinese characters fall to Noto Sans SC at heavy weight, which renders black and confident next to the Latin cut. **Never render Chinese with a Japanese font (Mochiy / Zen Maru) — simplified glyphs drop to tofu.** Weights on display roles are pushed to 800–900 so the CJK fallback lands heavy, not thin.

### Hierarchy
| Role | Family | Size | Weight | Line | Tracking |
|---|---|---|---|---|---|
| `display-xl` | Anton | 92 | 800 | 0.90 | -1.5 |
| `display-lg` | Archivo Black | 52 | 900 | 0.98 | -0.6 |
| `heading` | Space Grotesk | 26 | 700 | 1.15 | -0.3 |
| `body` | Space Grotesk | 17 | 400 | 1.65 | 0 |
| `body-mono` | Space Mono | 14 | 400 | 1.50 | 0 |
| `eyebrow` | Space Mono | 12 | 700 | 1.20 | +3 |
| `button` | Archivo Black | 15 | 900 | 1.00 | +0.4 |
| `caption` | Space Grotesk | 13 | 500 | 1.40 | +0.2 |

### Principles
- **Splice, don't unify.** A hero headline should read as scraps: `LOUD` in Anton, `ER` in Archivo Black, one word tilted -3°. The mismatch is the design.
- **All-caps headlines, mono stamps.** Display goes uppercase and cut; anything that looks like a date/price/code goes into Space Mono like a printer's margin note.
- **Set the largest word "a little too big."** display-xl to body is >5:1. Let the biggest cut dominate; everything else is a supporting scrap.
- **Load webfonts first, keep system fallbacks.** Newsprint must survive a failed `fonts.googleapis.com` — swap the font URL for a dead link and the page still reads cleanly in system fonts.

## Layout

**Spacing scale:** `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 80`. Collage lives on the small end (tape overlaps, tight sticker padding) and the large end (a full-bleed section of pure noise), rarely in the middle.

**Grid & container:** a bare, visible **column grid** — think broadsheet, not SaaS. Cutouts snap to columns but are then nudged and rotated ±2–4° off the grid so they read as pasted, not placed. The grid lines themselves show as `column-rule` hairlines. Container max-width is generous; content bleeds to the edge often, because a torn poster does not respect margins.

**Whitespace philosophy:** whitespace here is *newsprint showing through the collage* — the gaps between scraps, not calm negative space. Use it to keep the noise readable: dense cluster, then a bare newsprint gutter, then the next cluster. The page breathes in the gutters, not in politeness.

## Elevation & Depth

Depth is **physical paper**, faked with two moves only:
1. **Hard offset shadow** — `4–6px 4–6px 0 #17140F`, zero blur, static. This is a printed drop-shadow, a scrap casting a hard edge onto the page. It never animates (animating a shadow repaints every frame and drops frames).
2. **Layered paper** — pasted `surface` scraps sit visually above `canvas` because they are brighter and carry a hard shadow; tape strips and stickers sit above those.

No `backdrop-filter`. No blur behind glass. No soft ambient shadows. The whole depth model is: ink is flat, paper is stacked, shadows are hard and still.

## Shapes

**Border radius:** `none 0 · sm 2 · md 4 · lg 8 · pill 9999`. The default is **0** — cut edges, torn edges, scissored corners. `sm`/`md` are for the odd pasted block that got trimmed with a rounded corner. `pill` exists for exactly one thing: **the round sticker.** If a rectangle is rounded, ask why it is not a sticker.

**Geometry & images:** photos are cutouts — hard-clipped rectangles or torn-edge masks (a jagged clip-path), tilted ±2–4°, often with a strip of masking tape across one corner. Halftone / dot-screen texture on images sells the photocopy. Duotone the photos into two process inks when you want them to belong.

## Components

- **button-primary** — Fluoro pink block, black type, radius 0, hard black offset shadow. On press it settles into the shadow (offset → 0 via `transform`, never via shadow animation).
- **button-secondary** — Solid key-black block, newsprint type. The quiet counterpart; still a hard cut rectangle.
- **nav-bar** — A black masthead bar, newsprint wordmark in `heading`. Reads like the top strip of a newspaper. Nav items are mono stamps.
- **card-feature** — A pasted `surface` scrap on newsprint, hard black offset shadow, tilted a degree or two, a `tag-sticker` pinning one corner.
- **stat-block** — Marker-yellow rectangle, giant black `display-lg` number, a mono unit label. A highlighter swipe over a statistic.
- **data-tag** — A mono date/price/code stamp on bare newsprint. The photocopier-margin element.
- **tag-sticker** — The one round element. Fluoro-pink pill, black uppercase mono, rotated. Pins cutouts, calls out prices, screams "LINEUP DROP".
- **chip-accent** — Cyan pill twin of the sticker, for the second ink. Ink type, passes AA.
- **caption** — Muted credit line on newsprint. Photo credits, footnotes, the small true things.
- **column-rule** — The bare hairline dividing collage columns. Structure you can see.
- **footer** — Full black slab, newsprint type, a wall of ticket tiers / partners / small print set like a gig poster's bottom third.

## Presentation System

16:9, built on **one page = one shout**, **the golden three seconds**, and **one visual hammer per slide.**

- **Cover (`slide-cover`)** — Newsprint page. A spliced Anton/Archivo headline eats two-thirds of the frame, tilted, with two rotated stickers and one strip of tape. The visual hammer is the headline itself; the three-second read is the festival name and the dates, nothing else competes.
- **Section divider (`slide-section-divider`)** — Full key-black slide. A single giant **fluoro-marker-yellow** section number (`01 / 02 / 03`) prints huge. This black slide is the *rest* between two walls of collage — the choreographed breath.
- **Stat hero (`slide-stat-hero`)** — Full **cyan** flood, one enormous black number, one mono unit. "48,000 ATTENDEES." The number is the hammer; the ink flood is the shout.
- **Quote (`slide-quote`)** — A single pasted-paper scrap on newsprint, one line of Archivo Black, a tape strip and a sticker. One sentence, torn out and pinned up.
- **Closing (`slide-closing`)** — Black slab, newsprint call-to-action, one fluoro-pink `button-primary` cut into it: "BECOME A PARTNER." Hard stop, no fade-out mush.

Rhythm across the deck: **noise → black → noise → cyan → black → close.** The black and single-ink slides are the exhale; the collage slides are the inhale. Never two collage walls back to back without a breath between.

## Signature Moment

**UI — The Ransom Splice.** The hero headline is not one typeface at one size on one baseline. Each word is a torn cutout: alternating Anton and Archivo Black, alternating fluoro pink and key black and one cyan word, each tilted a degree or three off horizontal, each carrying a hard static offset shadow, each pinned by a strip of masking tape or a rotated `tag-sticker`. It sits on a bare newsprint column grid whose rules show through the gaps. On hover the tape-anchored words nudge and settle (`transform`/`opacity` only). Change the template and you get one clean centered headline — you cannot fake glue and scissors with a font swap.

**Deck — The Torn Reveal.** A `slide-section-divider`: a full key-black slide printing a giant fluoro-pink section number. A **torn newsprint strip** rips diagonally across the frame — a jagged clip-path mask — and underneath the tear the next section title shows in cyan, as if the poster was torn off the wall to reveal the one behind it. The reveal is a one-shot `clip-path` sweep (transform/opacity budget only), then it holds still. The torn-paper edge is real geometry, not a filter, so it survives at any resolution and never repaints on scroll.

## Do's and Don'ts

**Do**
- Splice two display faces inside one headline and tilt words a few degrees — the mismatch is the identity.
- Ration the fluoro pink. It is the riot; if everything is pink, nothing is.
- Overprint the inks — pink over cyan, black over yellow — and let halftone/duotone photos sell the photocopy.
- Keep edges cut and shadows hard and static. Let newsprint show through the gaps as the breathing room.
- Pin cutouts with tape strips and one round sticker per cluster.

**Don't**
- **Don't touch the purple-blue cliché gradient** (`#667eea → #764ba2`) or any of its family. This system is CMYK process ink, not a login screen.
- **Don't build the centered-card triptych** — one title, one gray subtitle, three equal rounded cards. That is the opposite of collage. Scraps are unequal, rotated, and overlapping.
- **Don't render Chinese with a Japanese font.** Simplified glyphs go to tofu. Use Noto Sans SC / PingFang SC.
- **Don't animate shadows or glow.** Hard offset shadows are static; motion lives in `transform`/`opacity` only.
- Don't round the corners of everything — radius 0 is the default; the only pill is the sticker.
- Don't neaten the grid into perfect alignment — pasted, not placed.

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full collage wall: multi-column bare grid, overlapping rotated cutouts, tape and stickers, hero at `display-xl` 92px. |
| 768–1199px | Fewer columns, cutouts re-stacked and re-tilted for the narrower wall; rotations reduced so overlaps still read; hero clamps down. |
| <768px | **Re-choreographed, not shrunk.** Collage becomes a vertical scroll of stacked scraps — one cutout, one sticker, one stat per band — like flipping through torn pages. Rotations dial back to ±1–2° so nothing clips off-screen. Hero drops to a `display-lg` scale. |

Mobile rules from the production checklist: headline font sizes use `clamp()` with `white-space:nowrap` per manually-broken line so no single character or `，` is orphaned onto its own line at ≤390px; Chinese width limits use `em`/`px`, never `ch`; every decorative rotation and the torn-reveal sweep collapse under `@media (prefers-reduced-motion: reduce)`.

## Anti-Slop Pledge

Strip the brand name off and this page still reads as **glue, scissors, and a photocopier at 2am** — four process inks overprinted on newsprint, headlines cut from two magazines and taped down crooked, one round pink sticker, hard shadows that never move. No purple-blue gradient. No centered card triptych. No system-font hero. If it looks like a template could have poured it out, it is not Collage Riot yet — go tear something.

— HeiGe-Design · MIT
