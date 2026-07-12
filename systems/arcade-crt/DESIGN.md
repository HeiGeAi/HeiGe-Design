---
version: alpha
name: arcade-crt-design-system
description: A phosphor-green cathode-ray design system for indie games, retro hardware, and pixel art. Everything lives inside a simulated CRT tube — static scanlines, a barrel-vignette curve, and a steady green bloom on #33ff66 — with amber #ffb000 as the second phosphor gun for score readouts and the INSERT COIN call to action. Pixel dot-matrix display type and VT323 terminal readouts sit on true arcade black. Sharp pixel edges everywhere; only the glass corners round. No animated glow, no purple gradients.

colors:
  primary: "#33ff66"
  on-primary: "#041006"
  ink: "#cfffd8"
  canvas: "#060806"
  surface: "#0e150e"
  muted: "#6fae83"
  hairline: "#1c3a26"
  accent: "#ffb000"
  on-accent: "#1a0f00"

typography:
  display-xl:
    fontFamily: "\"Press Start 2P\", \"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.5px
  display-lg:
    fontFamily: "\"Press Start 2P\", \"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 34px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.5px
  heading:
    fontFamily: "\"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", monospace"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0px
  body:
    fontFamily: "\"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", monospace"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0px
  readout:
    fontFamily: "\"VT323\", \"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", monospace"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 1px
  button:
    fontFamily: "\"Press Start 2P\", \"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 1px
  caption:
    fontFamily: "\"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.3px
  eyebrow:
    fontFamily: "\"Press Start 2P\", \"JetBrains Mono\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 2px

rounded:
  none: 0px
  sm: 3px
  md: 10px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  screen-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 2px
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.readout}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  input-terminal:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  coin-badge:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  status-dot:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg} {spacing.xl}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.sm}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.readout}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Arcade-CRT · 街机荧光

> Cathode Arcade — a design system that boots instead of loading. Phosphor green on tube black, amber for the score, and a curved glass screen you can feel through the pixels.

## Overview

街机荧光 is not "dark mode with a green accent." It is a **cathode-ray tube rendered in software**. Every surface is the inside of a 1985 arcade monitor: true tube black at the back, a fine horizontal scanline grid laid over everything, a slow barrel curve pulling the corners into shadow, and text that does not sit on the screen so much as **glow out of it**.

Two phosphors run the whole show. **Phosphor green `#33ff66`** is the electron gun — it draws the interface, the cursor, the "PLAYER 1" state, the thing your eye is meant to land on. **Amber `#ffb000`** is the second gun, reserved for one job: **numbers that matter** — the score, the timer, the credit count, and the single "INSERT COIN" call to action. Green tells you where you are; amber tells you what it costs. Nothing else is colored. Discipline is the aesthetic.

The type is deliberately low-resolution. Pixel dot-matrix (`Press Start 2P`) for the words that shout, VT323 terminal readouts for the numbers that count, and a clean monospace for the paragraphs a human actually reads. Rhythm comes from **one loud pixel headline, then a wall of quiet mono**, not from stacking colors. The signature is the screen itself: scanlines, curvature, bloom, and a blinking block cursor that never stops waiting for input.

## Colors

### Brand & Accent
- **`primary` `#33ff66`** — phosphor green, the P1 electron gun. Primary buttons, the block cursor, active/PLAYER-1 states, headline glow, the on-screen "ready" signal. Bright enough that on tube black it reads at ~14.8:1 as text and ~14.4:1 as a fill under near-black ink.
- **`accent` `#ffb000`** — amber phosphor, the second gun. Score readouts, timers, credit counters, warnings, and the INSERT COIN CTA. Never decorative — amber always means *a number or a coin*.
- **`on-primary` `#041006`** — near-black tube-green, the text laid on top of a solid green fill. ~14.4:1 on `primary`.
- **`on-accent` `#1a0f00`** — near-black amber-brown, the text laid on top of a solid amber fill. ~10.6:1 on `accent`.

### Surface
- **`canvas` `#060806`** — true arcade black, faintly green-warmed (a live tube is never pure #000). The back of every screen.
- **`surface` `#0e150e`** — a hair lifted from canvas: the bezel interior, cards, nav, the raised inside of the monitor housing.
- **`hairline` `#1c3a26`** — dim green, one scanline dark. All 1px borders, dividers, and the scanline overlay tint. Never used for text.

### Text
- **`ink` `#cfffd8`** — phosphor-white, a green-tinted off-white for body copy and card text. ~16.8:1 on `surface`, ~17.9:1 on `canvas`. This is what long paragraphs are printed in — bright but not the saturated green, so a screen of text never buzzes.
- **`muted` `#6fae83`** — dimmed phosphor for captions, footer, timestamps, and "CREDIT 00" fine print. ~7.6:1 on `canvas`.

### Semantic
No red, no third hue. On a real arcade board "danger" was amber flashing faster, and "clear" was green — so **state is carried by the two phosphors plus blink rate**, not by adding colors. This is the constraint that keeps the system unmistakable.

## Typography

### Font Family
- **Display / buttons / eyebrow — `Press Start 2P`.** The canonical pixel dot-matrix face. It is Latin + numerals only, so it carries the arcade words — `GAME START`, `HIGH SCORE`, `STAGE 02`, `1UP` — and the digits. **It has no CJK glyphs**, so any Chinese in a display string falls through to `Noto Sans SC` / `PingFang SC` automatically. Design intent: **headlines lead in Latin/number, Chinese is carried by `heading` and `body`.**
- **Readout — `VT323`.** A glowing single-weight terminal face. This is the amber number: score, timer, big stat. Monospace, so digits never jitter as they tick.
- **Heading & body — `JetBrains Mono`.** A clean, humane monospace for Chinese-and-Latin running text. `heading` at weight 700, `body` at 400. When the string is Chinese, it renders in `Noto Sans SC` (700 headings come out genuinely bold, not faux-bold).

**中文兜底铁律.** Every stack that can carry Chinese ends in `"Noto Sans SC", "PingFang SC", "Microsoft YaHei"`. **中文绝不用日文字体渲染**（Zen Maru / Mochiy 等一律禁用，简体会缺字变豆腐）. Pixel and terminal faces are all Latin-only by design; the CJK fallback does the heavy lifting for Chinese and never breaks if a webfont times out.

### Hierarchy
| Role | Font | Size | Weight | Use |
|---|---|---|---|---|
| display-xl | Press Start 2P | 52px | 400 | Title screen, cover headline |
| display-lg | Press Start 2P | 34px | 400 | Section titles, quote screen, closing |
| heading | JetBrains Mono | 20px / 700 | 700 | Card titles, nav wordmark, Chinese headers |
| body | JetBrains Mono | 15px | 400 | Paragraphs, list copy, input text |
| readout | VT323 | 44px | 400 | Amber score / stat / timer numbers |
| button | Press Start 2P | 12px | 400 | Arcade menu buttons, all-caps |
| caption | JetBrains Mono | 12px | 400 | Footer, fine print, credits |
| eyebrow | Press Start 2P | 10px | 400 | `1UP` / `PLAYER 1` micro-labels, +2px tracking |

### Principles
- **Contrast is brutal on purpose.** display-xl at 52px against 15px body is a >3:1 size jump; on a cover the pixel headline should feel *slightly too big*.
- **Pixel type is always uppercase.** Lowercase in `Press Start 2P` is cramped; buttons and eyebrows are `text-transform: uppercase`.
- **Line-height is generous for pixels.** Dot-matrix glyphs need air — display lines never drop below 1.25, body sits at 1.75 so a mono wall stays readable.
- **Numbers are amber, always VT323.** A number in green is a bug.

## Layout

### Spacing
An 8px base ladder: `xs 4 / sm 8 / md 16 / lg 24 / xl 48 / section 96`. The tube grid is rigid — everything snaps to it, like a HUD laid over a game field. `section 96` is the vertical gap between full "screens."

### Grid & Container
- **12-column HUD grid**, but the interface is framed like a game screen: a persistent top nav-bar (score/state HUD), the play-field content, and a bottom footer (`CREDIT 00`, controls legend).
- Content max-width ~1120px, but the **screen-frame** (bezel) wraps it so the "monitor" never spans edge-to-edge on wide displays — there is always a strip of cabinet-dark around the glass.
- Alignment is **left and grid-locked**, never centered soup. The HUD reads left-to-right like `1UP  SCORE 004200  HI 019800`.

### Whitespace
Negative space here is **tube black doing work** — the dark corners of the barrel vignette, the gap between a loud pixel headline and the mono paragraph below. Do not fill the void with cards; let the black frame the glow. One bright thing per screen, surrounded by dark.

## Elevation & Depth

There is no material elevation — a CRT is flat glass. Depth is **optical, not physical**:

| Layer | Technique |
|---|---|
| Screen field | `canvas` flat black |
| Panel / card | `surface`, +1px `hairline` border, `rounded.sm` glass corner |
| Bezel housing | `screen-frame`: 3px `hairline` border, `rounded.md`, sits *around* the glass |
| Scanlines | static `repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,.35) 2px 3px)` overlay, pointer-events none |
| Barrel vignette | static `radial-gradient(ellipse at center, transparent 58%, rgba(0,0,0,.55) 100%)` |
| Phosphor bloom | static `text-shadow: 0 0 6px rgba(51,255,102,.55)` on green, `0 0 6px rgba(255,176,0,.45)` on amber |

**Performance铁律.** Bloom is a *static* text-shadow — **never animated** (per-frame shadow repaint kills scroll). Scanlines and vignette are static gradients, not `backdrop-filter`. The only motion is the cursor blink (opacity step) and, optionally, a one-shot power-on sweep. All motion is `transform`/`opacity` only and dies under `prefers-reduced-motion: reduce`.

## Shapes

- **`none` 0px is the default.** Buttons, inputs, stat blocks, nav, HUD, every slide — sharp pixel edges. The content is drawn by an electron gun on a raster; it cannot have soft corners.
- **`sm` 3px** — the *glass* corner. Cards and the cover screen get a whisper of radius because the CRT tube's face is slightly rounded. This is the only place a UI element rounds.
- **`md` 10px** — the *cabinet* corner, used solely on `screen-frame`, the plastic bezel around the glass.
- **`pill` 9999px** — reserved for the `status-dot` power LED and nothing else.
- Images and figures are hard-cropped rectangles, ideally posterized / dithered to read as low-color sprites. Avatars are square, never circles — a sprite is a grid of pixels.

## Components

- **button-primary** — the green "START" key. Solid `primary`, near-black label, zero radius. On press it inverts (fill goes `canvas`, text goes `primary`) and the block cursor flicks. This is the one truly bright fill on a screen.
- **button-secondary** — amber-outlined "OPTIONS." `surface` fill, 2px `accent` border, amber label (~10:1). Ghost-quiet until hovered, when the border thickens to a full amber fill preview.
- **nav-bar** — the top HUD strip. `surface`, 1px `hairline` bottom edge, `heading` wordmark on the left, live `status-dot` + `SCORE`/`HI` readouts on the right. Fixed, never scrolls away — the HUD is always on.
- **card-feature** — a screen panel. `surface`, hairline border, 3px glass corner, `body` copy. Title in `heading`, optional amber `readout` figure. Hover raises the phosphor bloom on its border, not a drop shadow.
- **screen-frame** — the cabinet bezel: a 3px `hairline` border + `rounded.md`, wrapping a block of glass content. Use it around heroes and demo screens so the interface always reads as *a monitor*, not a webpage.
- **divider** — a single `hairline` scanline rule, 2px tall, sharp. Separates HUD rows and list items; it *is* one dark scanline made structural.
- **stat-block** — a HUD tile: tiny green `eyebrow` label + giant amber `readout` number on flat `canvas`. `042 100`, `99 FPS`, `03:12`. Digits are VT323 so they tick without reflow.
- **input-terminal** — command line. `canvas` field, hairline border, `body` mono text, and a **solid green block caret** that blinks. Placeholder in `muted`. Focus thickens the border and lights the caret.
- **coin-badge** — a solid amber chip, `eyebrow` label in near-black: `INSERT COIN`, `+1 UP`, `NEW`. The only place amber becomes a fill in the UI.
- **status-dot** — the pill power LED, solid green with a static bloom. Green = online, and it may blink slowly for "waiting."
- **footer** — `CREDIT 00 — PRESS START` bar. `canvas`, hairline top, `muted` `caption`, controls legend on the right.

## Presentation System

街机荧光 as a 16:9 deck is an **arcade attract-mode sequence**. One screen, one message, HUD always present. 对齐 HeiGe-PPT 的一页一句话 / 黄金三秒 / 视觉锤：

- **Cover (`slide-cover`)** — the title screen. Big `display-xl` pixel title in phosphor-white, a green `PRESS START` blinking below, `1UP` / `HI-SCORE` HUD in the top corners. **黄金三秒**：the scanlines + a one-shot power-on sweep make the audience feel the tube warm up before the first word lands. Chinese subtitle rides in `heading`, Latin/number title in pixels.
- **Section divider (`slide-section-divider`)** — `STAGE 01` / `STAGE 02` in amber `display-lg`, dead-center of black, with a horizontal scanline-wipe transition. This is the level-select beat between chapters.
- **Stat hero (`slide-stat-hero`)** — one enormous amber `readout` number filling the screen: `+312%`, `48ms`, `1,000,000`. A small green `eyebrow` caption underneath. **视觉锤 = the score.** The number ticks up from 0 on entry (VT323, count-to-target-then-stop, no rAF left running).
- **Quote (`slide-quote`)** — a single line in phosphor-green `display-lg`, occupying the screen with a blinking block cursor at the end of the sentence, as if the machine just finished typing it. Everything else is void.
- **Closing (`slide-closing`)** — the signature. See below.

Deck rhythm: warm-up cover → alternating quiet content screens and loud amber stat-heroes → one green quote for the turn → the amber INSERT COIN close. Every screen keeps the HUD, so the whole deck feels like one continuous play session, not slides.

## Signature Moment

**UI signature — The Phosphor Tube.** The entire viewport *is* a cathode-ray tube, and it boots. On load a single bright horizontal line flashes at center and expands top-and-bottom to fill the screen (the classic CRT power-on), content resolves through a downward scanline sweep, and then the tube settles into its steady state: a fine static scanline grid over everything, a barrel-vignette pulling the four corners dark, a green phosphor bloom on every headline, and a **solid green block cursor blinking after the last word of the hero line** — the machine, waiting for input. Swap the palette or the fonts and this reads as arcade *immediately*; no template produces the power-on sweep + scanline + curvature + block cursor as one coherent object. (All static except the blink and the one-shot sweep; both `opacity`/`transform` only; both off under reduced-motion.)

**Deck signature — INSERT COIN close.** The final slide is a **full-bleed amber phosphor screen**. Giant pixel `GAME OVER` holds for a beat, then flips to `INSERT COIN TO CONTINUE`, blinking on a steady half-second cadence, with a live `CREDIT 01` VT323 readout counting in the bottom corner and the scanlines still rolling over the amber. It is the single most recognizable ending in the medium, rebuilt as a call to action — the audience's muscle memory tells them exactly what to do next.

## Do's and Don'ts

**Do**
- Keep **green for the interface, amber for the numbers**. If you're reaching for a third color, you've lost the plot — change the blink rate instead.
- Let **tube black do the framing**. One bright element per screen, surrounded by vignette dark.
- Wrap real interfaces in the **screen-frame bezel** so it always reads as a monitor.
- Use **uppercase pixel type for labels, clean mono for paragraphs, VT323 for every number.**
- Keep bloom and scanlines **static**; earn motion only with the cursor blink and a one-shot power-on.

**Don't**
- **不碰紫蓝俗套渐变** (`#667eea → #764ba2` 及其全家桶). This system's soul is a single-hue phosphor; a purple-blue gradient is the exact opposite of everything here.
- **不做居中卡片三件套** — no "title + gray subtitle + three equal rounded cards" grid. Layout is a left-locked HUD, not a centered SaaS template.
- **中文绝不用日文字体** (Zen Maru / Mochiy 等). Pixel/terminal faces are Latin-only; Chinese must fall to `Noto Sans SC` / `PingFang SC`, never a Japanese face.
- **不动画化阴影/辉光** — never animate `text-shadow` or `box-shadow`; bloom is a static, always-on glow. No `backdrop-filter`, no drop shadows on hover.
- Don't round the pixels — content stays at `rounded.none`; only glass (`sm`) and the cabinet (`md`) round.
- Don't use emoji as icons; draw a sprite or use a pixel glyph.

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| ≥1120px | Full HUD: nav-bar with score + HI + status-dot, bezel-framed content, footer legend. |
| 768–1119px | HUD compresses — `HI-SCORE` drops, `SCORE` and `status-dot` stay. Two-column card grids collapse to one. |
| ≤767px | **Re-authored, not scaled.** The screen becomes a portrait handheld: nav shrinks to wordmark + status-dot, the score readout moves into a sticky bottom HUD (`CREDIT` + primary action), stat-heroes stack full-width, `display-xl` steps down via `clamp(28px, 9vw, 52px)`. |

**零孤字铁律.** Pixel headlines are hand-broken with `white-space: nowrap` per line and sized with `clamp()` so the longest line still fits at ≤390px — a dot-matrix orphan (`的，` alone on a line) is unforgivable at this resolution. Chinese line-limits use `em`/`px`, never `ch`. Verify no horizontal overflow (`scrollWidth == clientWidth`) on desktop and narrow before shipping.

**字体可靠性.** `Press Start 2P` / `VT323` load from webfont but every stack falls to system mono + `Noto Sans SC`; kill the font links and the page stays clean pixel-mono with readable Chinese — it never collapses to Times.

## Anti-Slop Pledge

Strip the name off this file and it is still, unmistakably, a hand-built cathode-ray world — you can feel the tube warm up, count the scanlines, and watch the block cursor wait for a coin. Two phosphors, one curved screen, zero purple gradients. Not a template with a green tint; a machine that boots.

— HeiGe-Design
