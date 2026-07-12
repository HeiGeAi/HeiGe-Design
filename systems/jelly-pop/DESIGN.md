---
version: alpha
name: JellyPop-design-system
description: "Jelly-Pop (果冻) is a translucent candy playground for kids' learning products. Bubblegum magenta leads, jelly teal and lemon accent, and every surface reads like a gummy you could squish. Fat rounded display (Baloo 2 / ZCOOL KuaiLe) with a Chinese system fallback, exaggerated 40px corners, and a wobble spring on tap. Signature move — two translucent blobs overlap and multiply into a third jelly hue, printing a see-through core behind giant numbers. Warm blackberry ink, no pure black, no purple-blue slop."

colors:
  primary: "#D61F76"
  on-primary: "#FFFFFF"
  ink: "#2E1A36"
  canvas: "#FFF3F9"
  surface: "#FFFFFF"
  muted: "#7A5C77"
  hairline: "#F6D9E9"
  accent-jelly: "#07C4B4"
  accent-sun: "#FFCC33"

typography:
  display-xl:
    fontFamily: '"Baloo 2", "Fredoka", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 76px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -1px
  display-lg:
    fontFamily: '"Baloo 2", "Fredoka", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.5px
  heading:
    fontFamily: '"Baloo 2", "Fredoka", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.2px
  body:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: 0.1px
  numeral:
    fontFamily: '"Baloo 2", "Fredoka", "Noto Sans SC", "PingFang SC", sans-serif'
    fontSize: 112px
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: -2px
  button:
    fontFamily: '"Baloo 2", "Fredoka", "Noto Sans SC", "PingFang SC", sans-serif'
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.2px
  caption:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: '"Baloo 2", "Fredoka", "Noto Sans SC", "PingFang SC", sans-serif'
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 2px

rounded:
  none: 0px
  sm: 10px
  md: 18px
  lg: 28px
  xl: 40px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 28px
  xl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 30px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 30px
  button-play:
    backgroundColor: "{colors.accent-jelly}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 30px
  card-lesson:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: 28px
  card-jelly:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 32px
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  tag-pill:
    backgroundColor: "{colors.accent-sun}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  eyebrow-kicker:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.xl}"
    padding: 32px
  caption-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  divider-hairline:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    padding: 2px
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px 24px
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 96px
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 96px
  slide-stat-hero:
    backgroundColor: "{colors.accent-jelly}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.xl}"
    padding: 80px
  slide-quote:
    backgroundColor: "{colors.accent-sun}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 96px
  slide-closing:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 96px
---

# Jelly-Pop · 果冻

A translucent candy design system for kids, learning and family products. Everything on screen should look like a gummy you could press with a thumb and watch bounce back.

## Overview

Jelly-Pop is built on one physical idea: **soft translucent candy**. Not flat "playful pastels", not another rounded-corner SaaS. Real gummy behavior — squish on press, wobble back, and color that bleeds through where two jelly shapes overlap.

The palette runs on a **bubblegum magenta** primary (`#D61F76`) that carries every call-to-action, paired with two candy accents that never touch text duty on their own: **jelly teal** (`#07C4B4`) and **lemon** (`#FFCC33`). The two roles of the primary: it is the one loud voice (buttons, the divider slab, active states) and it is the ink-accent that colors kickers and links. Accents are the flavor, primary is the voice.

Type is deliberately **fat and round** — Baloo 2 as the Latin display with ZCOOL KuaiLe carrying the Chinese playful weight, then a hard system fallback so nothing ever turns to tofu. Ink is a warm **blackberry** (`#2E1A36`), never pure black, so even the darkest text feels like candy shell instead of a terminal.

Rhythm: big rounded shapes, generous air, one hero per screen, and a single spring animation that makes the whole thing feel alive without ever touching a shadow or a blur filter.

## Colors

### Brand & Accent
- **Primary — Bubblegum `#D61F76`**: the one loud color. Primary buttons, active tabs, the section-divider slab, chapter numbers, link and kicker ink. Deep enough to carry white text at 4.86:1.
- **Jelly Teal `#07C4B4`**: cool candy accent. Fills the "play" / secondary action button and the stat-hero slab. Always paired with blackberry ink (7.26:1), never with white.
- **Lemon `#FFCC33`**: warm candy accent. Tag pills, reward badges, the quote slide. Always paired with ink (10.58:1).

### Surface
- **Canvas — Pale Bubblegum `#FFF3F9`**: page background, a barely-there pink so white cards float warmly instead of clinically.
- **Surface — White `#FFFFFF`**: cards, nav, sheets. The clean plate the candy sits on.
- **Hairline `#F6D9E9`**: 1px pink separators and progress-track fills. Soft, never gray.

### Text
- **Ink — Blackberry `#2E1A36`**: all primary text. Warm-dark, reads at 14.8:1 on canvas.
- **Muted — Grape `#7A5C77`**: captions, metadata, helper text. 5.79:1 on white — legible, not a whisper.

### Semantic & translucency
Jelly overlays are **not** tokens (they must stay legible-safe), they are decorative CSS. Build the "gummy overlap" with two solid blobs at `opacity: 0.72` and `mix-blend-mode: multiply` — where bubblegum crosses jelly teal they print a deep grape core; where lemon crosses teal they print a soft lime. This third-hue-from-overlap is the whole point, and it is static (no animated filters).

## Typography

### Font Family
- **Display / Heading / Numbers**: `"Baloo 2", "Fredoka", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`. Baloo 2 gives the fat round Latin, ZCOOL KuaiLe gives Chinese the same bouncy weight.
- **Body / Caption**: `"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`. Nunito's rounded terminals keep the candy feel readable at paragraph length.
- **中文铁律**: 中文永远走 `ZCOOL KuaiLe → Noto Sans SC → PingFang SC` 这条兜底链，绝不用日文圆体（Mochiy Pop、Zen Maru）渲染简体，会缺字变豆腐。Webfont 放最前，系统字兜底，断网也不塌成 Times。

### Hierarchy

| Role | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|
| display-xl | 76px | 800 | 1.02 | -1px | slide cover title, hero headline |
| display-lg | 52px | 800 | 1.08 | -0.5px | divider / quote / closing slides |
| numeral | 112px | 800 | 0.95 | -2px | the one big number per stat |
| heading | 28px | 700 | 1.25 | -0.2px | card titles, nav |
| body | 18px | 500 | 1.65 | 0.1px | paragraphs, footer |
| button | 18px | 700 | 1 | 0.2px | all CTAs |
| caption | 14px | 600 | 1.5 | 0.2px | metadata, helper |
| eyebrow | 13px | 700 | 1 | 2px | wide-tracked kickers, tags (UPPERCASE) |

### Principles
- **Fat contrast**: display-to-body ratio is 76:18 (>4:1). The hero word should feel almost too big.
- **Round everywhere**: no thin or condensed weights anywhere — a hairline serif would break the whole world.
- **Numbers are heroes**: `numeral` is its own role because a kids product lives on "3 stars", "day 12", "98%". Give the number the stage.
- **Zero orphans**: hand-broken headlines wrap on the longest line and lock each line with `white-space: nowrap`; size the hero with `clamp()` so the longest line fits at 390px. Never limit Chinese width with `ch`.

## Layout

### Spacing
An 8-based candy scale: `xs 4 · sm 8 · md 16 · lg 28 · xl 48 · section 96`. Cards breathe on `md`–`lg` inner padding, sections separate on the full `section` rhythm. Playful does not mean cramped — the air is what lets a single fat shape read as the hero.

### Grid & Container
- Content max-width **1120px**, 12-column grid, `lg` (28px) gutters.
- Cards are chunky: minimum touch target 56px because the audience has small, imprecise fingers.
- Slides run a fixed **16:9** frame at `section` (96px) padding, one idea per frame.

### Whitespace philosophy
Air is grouped, not sprinkled. A loud bubblegum hero earns a wide margin of calm canvas around it so the eye lands, wobbles, and moves on. Density is reserved for reward moments (a wall of earned sticker badges), never for the reading path.

## Elevation & Depth

Depth here is **candy thickness**, not floating cards.

| Layer | Treatment |
|---|---|
| Base | canvas `#FFF3F9` |
| Resting card | surface white, `rounded.xl`, soft static drop `0 10px 0 #F6D9E9` (a solid candy underside, offset only) |
| Pressed | translate down 2px, shrink the offset to `0 2px 0` — reads as the gummy compressing |
| Overlay blob | two solid shapes, `opacity 0.72`, `mix-blend-mode: multiply` for the third-hue core |

- **No `box-shadow` animation** — the "press" is a `transform` + a swapped static shadow, never a per-frame glowing recolor.
- **No `backdrop-filter`** — translucency is real solid layers with blend modes, so scrolling never repaints a blur.
- Inner "jelly sheen": one static `inset 0 6px 0 rgba(255,255,255,.5)` top-light per gummy element. Static, always on.

## Shapes

### Border Radius
`none 0 · sm 10 · md 18 · lg 28 · xl 40 · pill 9999`. The system runs **exaggerated**: default card is `xl` (40px), buttons and tags are full `pill`. Only full-bleed slide color blocks drop to `none`.

### Geometry
- **Blobs over rectangles**: decorative shapes are organic gummy blobs (`border-radius: 42% 58% 63% 37% / 45% 45% 55% 55%`), not circles.
- **Image masking**: photos sit inside rounded-`xl` or blob masks, never hard rectangles.
- **Icons are fat**: 2.5px+ rounded strokes, filled candy style — big enough to read as toys, never hairline line-icons, never emoji standing in for icons.

## Components

- **button-primary**: bubblegum pill, white label, spring press. The one true CTA.
- **button-secondary**: white pill, bubblegum label, hairline ring. Quiet twin.
- **button-play**: jelly-teal pill, ink label. The "start / play / next" candy action.
- **card-lesson**: white card, `lg` radius, solid candy underside shadow. Holds one lesson, one icon, one title.
- **card-jelly**: canvas-tinted `xl` card for grouped soft content and the translucent overlap backdrop.
- **nav-bar**: white bar, ink labels, `md` radius, floating with an air gap from the top.
- **tag-pill**: lemon pill, ink eyebrow text — level tags, categories, "NEW".
- **eyebrow-kicker**: bubblegum wide-tracked micro-label above headings.
- **stat-block**: canvas tile framing one big `numeral` — progress, streaks, scores.
- **caption-note**: muted helper text on white for hints and metadata.
- **divider-hairline**: soft pink 1px rule / progress track (`pill` capped ends).
- **footer**: blackberry night slab, pale canvas text — the calm bottom of the candy world.

## Presentation System

Jelly-Pop turns into a 16:9 deck that obeys **one page = one sentence**, wins the **golden three seconds**, and lands its **visual hammer** = the translucent overlapping jelly blob printing a third hue.

- **Cover (`slide-cover`)**: pale canvas, one fat headline in blackberry, two out-of-frame gummy blobs bleeding a grape core behind the last word. Kicker pill top-left. The title wobbles once on load, then rests.
- **Section divider (`slide-section-divider`)**: full-bleed bubblegum slab, white oversized chapter number (`01`) and three words. Pure color-block reset for the eye — this is the deck's breath.
- **Stat hero (`slide-stat-hero`)**: jelly-teal `xl` slab, a single 112px number in ink, sitting exactly over a multiplied blob so it looks embedded in see-through candy. One number, one label, nothing else.
- **Quote (`slide-quote`)**: lemon full-bleed, one sentence in blackberry display-lg, screen-filling. The candy exclamation mark of the deck.
- **Closing (`slide-closing`)**: blackberry night, pale text, one bubblegum `button-primary` as the single glowing action. Calm end, clear next step.

Rhythm across the deck: canvas → color-block → canvas → color-block, so every loud frame is followed by a quiet one. No two adjacent slides share a background color.

## Signature Moment

Two moments no other template reproduces:

- **UI — the Jelly Tap.** Every button and card is a physical gummy. On press it squishes (`transform: scale(1.06, 0.9)`), then springs back through an overshoot (`scale(0.98, 1.04) → 1`) on a spring curve, while the solid underside shadow collapses from `0 10px 0` to `0 2px 0` and rebounds. Where the pressed element overlaps a neighbor, their translucent fills multiply into a darker jelly core for the frame. It is transform-and-opacity only — no animated shadow, no blur — so it stays 60fps and honors `prefers-reduced-motion: reduce` (motion off, the static candy sheen and offset shadow remain, so it still reads as gummy). This is the "捏一下会 Q 弹回来" moment.

- **Deck — the Gummy Reveal.** On `slide-stat-hero`, the giant number is not printed on the teal slab, it is printed *inside* it. Two overlapping solid blobs (teal + bubblegum) multiply directly behind the digits, so a deep grape core glows through the number as if you are reading it through a slice of see-through candy. One number, embedded in jelly, filling the golden-three-second frame. Change the template and the number goes flat on a rectangle — this is the shape that cannot be copied.

## Do's and Don'ts

**Do**
- Do let one fat bubblegum element own each screen, wrapped in calm canvas.
- Do keep accents (teal, lemon) as fills paired only with blackberry ink.
- Do make numbers the hero — big, round, one per view.
- Do build translucency with real solid layers + `mix-blend-mode`, static.
- Do exaggerate the corners (40px cards, full-pill buttons) — this is the point.
- Do give the whole thing exactly one spring animation and honor reduced-motion.

**Don't**
- **Don't touch the purple-blue slop gradient** (`#667eea → #764ba2`) or any of its family — Jelly-Pop's depth comes from candy, not from the AI default sky.
- **Don't do the centered card triptych** — one title, one gray subtitle, three equal rounded cards repeated down the page is exactly the template we refuse.
- **Don't render Chinese with Japanese fonts** (Mochiy Pop, Zen Maru Gothic) — simplified glyphs turn to tofu; always fall back through ZCOOL KuaiLe → Noto Sans SC → PingFang SC.
- **Don't animate shadows or glows** — the press is transform + swapped static shadow, never a per-frame recolor; and never `backdrop-filter`.
- Don't dilute into "gentle pastels" — jelly is saturated and translucent, not washed out.
- Don't pair an accent with white text (fails contrast) — accents always carry ink.
- Don't use emoji as functional icons — use fat rounded candy icons.

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| ≥1120px | 12-col grid, hero + floating blob cluster side by side, full 96px section rhythm |
| 768–1119px | 8-col, blob cluster moves behind hero as a single decorative layer, cards 2-up |
| ≤767px | single column, hero `clamp()` shrinks, cards stack full-width, nav collapses to a fat pill menu |
| ≤390px | headline re-broken on the longest line with `white-space: nowrap`, `numeral` clamps down, touch targets stay ≥56px |

Mobile is a **re-composition, not a shrink**: the blob backdrop simplifies to one shape, the stat-hero goes number-over-slab full-bleed, and the deck's 16:9 frames re-flow to 9:16 story cards with the same one-idea-per-frame law. Verify no orphan lines and `scrollWidth == clientWidth` at 390px before shipping.

## Anti-Slop Pledge

Strip the name off any Jelly-Pop screen and it still reads as made by hand: a warm blackberry ink instead of black, a bubblegum voice that never once becomes a purple-blue gradient, corners exaggerated on purpose, numbers built as heroes, and one gummy that actually squishes back. Two translucent blobs multiplying a third hue behind a number is not something a template hands you — it is a decision. That decision is the whole system.

*HeiGe-Design · MIT.*
