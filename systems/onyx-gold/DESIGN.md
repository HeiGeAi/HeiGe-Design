---
version: alpha
name: OnyxGold-design-system
description: Onyx-Gold is a couture-restraint system for haute horology, high jewellery and private banking. A near-absolute onyx canvas is held in vast negative space, cut only by hairline brushed-gold rules and anchored by a single luminous gold word. Type is a thin high-contrast serif set in wide-tracked uppercase, paired with a quiet geometric sans and tabular gold numerals. No gradients, no glow animation, no filler. The black does the talking and one gold moment carries the whole page.

colors:
  primary: "#b8912e"
  on-primary: "#060606"
  ink: "#ede6d3"
  canvas: "#060606"
  surface: "#100e0a"
  muted: "#a69b80"
  hairline: "#4a3d22"
  accent: "#e4c466"

typography:
  display-xl:
    fontFamily: '"Cormorant Garamond", "Cormorant", "Didot", "Bodoni MT", "Noto Serif SC", "Songti SC", serif'
    fontSize: 76px
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: 2px
  display-lg:
    fontFamily: '"Cormorant Garamond", "Cormorant", "Didot", "Bodoni MT", "Noto Serif SC", "Songti SC", serif'
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 1px
  heading:
    fontFamily: '"Cormorant Garamond", "Cormorant", "Didot", "Noto Serif SC", "Songti SC", serif'
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.4px
  body:
    fontFamily: '"Jost", "Futura", "Century Gothic", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.2px
  body-mono:
    fontFamily: '"Fragment Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", monospace'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.5px
  eyebrow:
    fontFamily: '"Jost", "Futura", "Century Gothic", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 4px
  button:
    fontFamily: '"Jost", "Futura", "Century Gothic", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 3px
  caption:
    fontFamily: '"Jost", "Futura", "Century Gothic", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.3px

rounded:
  none: 0px
  sm: 2px
  md: 4px
  pill: 9999px

spacing:
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 120px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg} {spacing.md}"
  hallmark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.section} {spacing.xl}"
  rule-gold:
    backgroundColor: "{colors.hairline}"
    height: 1px
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.md}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Onyx-Gold · 玄金

A couture-restraint system by **HeiGe-Design**. Fictional maison of reference: **Noctaurum · 玄金**. Built for haute horology, high jewellery, private banking and any house whose value lives in what it refuses to show.

The whole system runs on one rule: **the black is the material, the gold is the signature, and negative space is the luxury.** One page carries one gold moment. Everything else recedes into onyx.

## Overview

Most systems fill space to prove effort. This one earns trust by leaving space empty. The canvas is a near-absolute onyx (`#060606`), warm enough to read as lacquer rather than screen-black, and it occupies most of every layout. Against it, brushed gold plays two distinct roles, and only two:

- **Structure gold** (`#b8912e`, `primary`): the hairline rules, the outlines, the one filled button. It is a metal edge, never a fill of convenience.
- **Anchor gold** (`#e4c466`, `accent`): the single lit word or numeral per view, the thing the eye lands on. It carries a static halo, never a moving one.

Type is a thin, high-contrast serif (Cormorant Garamond family) set in wide-tracked uppercase for display, the way an engraved caseback or a jewellery invitation is set. Body and labels drop to a quiet geometric sans (Jost family) so the serif keeps its ceremony. Numerals live in a refined monospace for perfect vertical alignment, the way a movement's specifications are tabulated.

Rhythm is deliberate and slow. Sections are separated by `120px` of air, not by boxes. Nothing bounces, nothing glows on a timer. The luxury signal is composure.

## Colors

### Brand & Accent

| Token | Hex | Role |
|---|---|---|
| `primary` | `#b8912e` | Brushed structure gold. Hairline rules, outlines, the single filled action, the closing ground. Never a decorative fill. |
| `accent` | `#e4c466` | Anchor gold, a lit champagne tone. The one glowing word or numeral per view. Carries a static radial halo only. |

Two golds, never mixed on one element. Structure gold is the metal that frames; anchor gold is the light that lands. Keeping them apart is what stops the page from reading as a gradient.

### Surface

| Token | Hex | Role |
|---|---|---|
| `canvas` | `#060606` | Page ground. Lacquer-warm onyx, occupies the majority of every layout. |
| `surface` | `#100e0a` | The barely-lifted card plane, a warm near-black. Read as a subtle change of depth, felt more than seen. |
| `hairline` | `#4a3d22` | Dim gold for 1px rules and card borders. A restrained gold, not the bright metal, so structure whispers. |

### Text

| Token | Hex | Role |
|---|---|---|
| `ink` | `#ede6d3` | Primary text. Warm ivory, never pure white. Reads as engraved bone on lacquer (16.3:1 on canvas). |
| `muted` | `#a69b80` | Secondary text, captions, footnotes. Warm taupe (7.4:1 on canvas), legible but stood down. |
| `on-primary` | `#060606` | Onyx set on gold, for the one filled button and the closing inversion (6.9:1). |

### Semantic

This system carries no up/down or success/error palette by design. A couture house does not paint status green. State is communicated through the gold: present (structure gold outline), active (anchor gold with halo), or absent. Any product needing true semantic signalling should layer it at the application level and keep it out of the brand surface.

**Contrast verified** (WCAG AA, all ≥ 4.5:1): ivory on canvas 16.3, ivory on surface 15.5, anchor on canvas 12.0, anchor on surface 11.4, muted on canvas 7.4, onyx on gold 6.9, gold on canvas 6.9.

## Typography

### Font Family

- **Display serif** — `"Cormorant Garamond", "Cormorant", "Didot", "Bodoni MT", "Noto Serif SC", "Songti SC", serif`. A thin, high-contrast serif for all display and headings, set uppercase with wide tracking. Latin display fallbacks (Didot, Bodoni MT) keep the couture feel if the webfont fails; Chinese falls to **Noto Serif SC / Songti SC**, a Song serif that carries the same ceremonial weight.
- **Support sans** — `"Jost", "Futura", "Century Gothic", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`. A quiet geometric sans for body, labels, eyebrows and buttons. Chinese falls to **Noto Sans SC / PingFang SC / Microsoft YaHei**.
- **Tabular mono** — `"Fragment Mono", "JetBrains Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", monospace`. Refined monospace for prices, references and specifications, so digits align like a movement's data sheet.

铁律：能承载中文的字体栈末尾必带系统兜底（Noto Serif SC / Songti SC 用于衬线，Noto Sans SC / PingFang SC 用于无衬线）。中文绝不用日文字体渲染，简体会缺字变豆腐块。Webfont 放最前保住设计，系统字体兜底保证断网也能读。

### Hierarchy

| Role | Size / Weight | Tracking | Use |
|---|---|---|---|
| `display-xl` | 76 / 500 | 2px | Cover statement, hero numeral. Uppercase serif, one line per view. |
| `display-lg` | 48 / 500 | 1px | Quote pages, large section titles. |
| `heading` | 26 / 600 | 0.4px | Card titles, divider labels, closing line. |
| `body` | 17 / 400 | 0.2px | Reading copy. Sans, generous 1.7 leading. |
| `body-mono` | 15 / 400 | 0.5px | Prices, references, specs. Tabular. |
| `eyebrow` | 12 / 500 | 4px | Nav links and kickers. The extreme wide tracking is the couture tell. |
| `button` | 13 / 600 | 3px | Action labels, uppercase. |
| `caption` | 13 / 400 | 0.3px | Footnotes, legal, credits. |

### Principles

- **Uppercase serif is the voice.** Display is always caps with wide tracking, the way an engraving or an invitation is set. Never a lowercase headline.
- **Contrast of size, not weight.** The jump from 17px body to 76px display carries hierarchy. Weights stay light (400 to 600); this system never shouts in bold.
- **Tracking scales inverse to size.** Small labels get 4px of air (`eyebrow`); the 76px display needs only 2px. Wide tracking on tiny text is the luxury signal.
- **Numerals belong in mono.** A price or a reference number set in the mono aligns perfectly and reads as spec, not marketing.

## Layout

### Spacing

A short, deliberately air-heavy scale, stretched long at the top for negative space: `sm 8 · md 16 · lg 32 · xl 64 · section 120`. No cramped 4px tokens exist; a couture layout never needs to pack. The gap from `xl` to `section` is intentional. There is no comfortable middle; you are either grouping tightly or opening a full room of air.

### Grid & Container

- **12-column grid**, but most content sits in 6 to 8 columns and is deliberately pushed off-center. Symmetry reads as default; asymmetry reads as chosen.
- **Content max-width ~1200px** on a full-bleed onyx page. The onyx runs edge to edge; the content is an inset object floating in it.
- **Hairline rules** (`rule-gold`, 1px) divide sections and stop short of the margins (a 64px inset). A rule that touches both edges is a border; a rule that floats is a signature.

### Whitespace philosophy

Negative space is the primary material, not the leftover. A cover devotes 70% or more of its area to empty onyx and lets one gold line hold the rest. When in doubt, remove an element and widen the margins. The brief is composure, and composure is mostly space.

## Elevation & Depth

Depth here is almost flat by intent. Luxury objects are photographed against seamless black; the product floats without a drop shadow.

| Layer | Treatment |
|---|---|
| Ground | `canvas` onyx, no shadow. |
| Card | `surface` (one warm step lifted) + 1px `hairline` border. Depth is the border and the tonal step, not a shadow. |
| Anchor | The lit gold word carries a **static radial halo** (a soft `box-shadow` / `radial-gradient` glow, always on, never animated). This is the only luminous element per view. |

Rules for depth:
- **No stacked drop shadows.** A luxury plane is defined by a hairline and a half-tone, never by `box-shadow: 0 4px 6px rgba(0,0,0,.1)`.
- **The halo is static.** 发光只用静态 box-shadow / radial-gradient，绝不逐帧动画化阴影，绝不用 backdrop-filter。A pulsing glow is a casino, not a maison.
- **One lit thing per view.** If two elements glow, neither is the anchor.

## Shapes

### Border Radius

`none 0 · sm 2 · md 4 · pill 9999`. The system is sharp. Cards, dividers, covers and the closing all use `none`: crisp lacquer edges, cut like a case. Buttons and nav soften to `sm` (2px), a barely-there chamfer that reads as machined rather than rounded. The `pill` exists for exactly one element: the round **hallmark** (a circular gold-outlined monogram stamp), the way a hallmark is punched into a caseback.

### Geometry of images & marks

- **Full-bleed or hairline-framed.** A product image either bleeds off the onyx edge or sits inside a 1px gold rule. No rounded photo thumbnails.
- **The hallmark is the only circle.** Everything structural is rectilinear; the one round form is the monogram stamp, so it reads as a seal, not a widget.
- **Rules stop short.** Inset hairline rules (not edge-to-edge borders) are the structural motif throughout.

## Components

- **nav-bar** — Onyx bar, ivory links in `eyebrow` caps with 4px tracking, a single 1px `hairline` underline. The maison name centered or left; no dropdown clutter. Reads as the header of an invitation.
- **button-primary** — The one filled gold action per view. Onyx label on brushed gold, 2px corners, wide `button` tracking. Used once, for the single most important act (Enquire, Reserve, Enter).
- **button-ghost** — Onyx ground, gold outline, gold label. The default action. It states its presence with a hairline, not a fill.
- **card-feature** — A `surface` plane lifted one warm step, bordered by 1px `hairline`, sharp corners, generous `xl` padding. Ivory `heading` title over `body` copy. Depth from tone and edge, never shadow.
- **stat-block** — A specification tile. Anchor-gold `body-mono` numeral over a muted caption label. For prices, movement reserves, carat weights. Digits align like a data sheet.
- **hallmark** — The round monogram stamp, `pill`, gold outline on onyx, `eyebrow` initials. The single circular form in the system; a punched seal.
- **footer** — Deep onyx, muted `caption` text, a top hairline. Maison name, legal line, one restrained gold link. Closes with the same composure it opened.
- **rule-gold** — The 1px dim-gold hairline divider. Inset from margins. The connective tissue of the whole layout.

Slide components share the same tokens so a deck and a site are visibly one house:

- **slide-cover** — Full onyx 16:9. One uppercase serif line in ivory with a single anchor-gold word glowing, a hairline rule beneath. 70%+ empty.
- **slide-section-divider** — A `surface` plane, chapter label in anchor gold over a large tracked number. The breath between acts.
- **slide-stat-hero** — Onyx field, one enormous anchor-gold numeral, unit tucked tight beneath it. One number owns the screen.
- **slide-quote** — Onyx field, `display-lg` ivory serif, one sentence, wide margins. Attribution in muted caption.
- **slide-closing** — The inversion. Full brushed-gold ground, onyx serif line. The one time gold becomes the room instead of the light.

## Motion

Composure is the motion language. Nothing bounces, nothing pulses, nothing loops. The luxury signal is how little moves, and how unhurried it is when it does.

- **Signature curve** — `cubic-bezier(0.22, 1, 0.36, 1)`, run at the slowest register in the library.
- **Ambient signature** — none. The anchor-gold halo is static and always on; a glow on a timer would read as a shop sign, and this is a vitrine.
- **Hover language** — gilding: border and label warm from structure gold to anchor gold over 300ms, zero displacement. Read-only surfaces take a 1px inset gold keyline.

| Motion token | Value | Use |
|---|---|---|
| micro feedback | 240ms | links, labels — color only |
| entrance | 0.9s | fades with y ≤ 8px; most elements simply appear |
| stagger | 120ms, linear `i * delay` | the few elements that enter in sequence |

Signature moves:
- **The Drawn Hairline.** The two brushed-gold rules above and below the gilt anchor draw in via `transform: scaleX(0 → 1)` from the left over 0.9s, like an engraver finishing a line. The anchor word then fades in between them, pure `opacity`.
- **The Unveiling.** Sections enter as slow opacity fades with at most 8px of travel — appearing without arriving. The house does not hurry.

All motion is removed under `@media (prefers-reduced-motion: reduce)`; hairlines and anchor render fully drawn.

## Presentation System

16:9, built for a dim room and a slow speaker. Aligned to HeiGe-PPT's three laws: **一页一句话 · 黄金三秒 · 视觉锤**.

- **一页一句话.** Every slide carries exactly one sentence or one number. If a slide needs two ideas, it is two slides. The onyx enforces this; there is nowhere to hide a bullet list.
- **黄金三秒.** The cover has to land the maison's tone before a word is spoken: a black field, one gold line, one lit word. Three seconds, and the room knows this is couture.
- **视觉锤.** The anchor gold is the hammer, used once per slide. On the cover it is a single word; on the stat page it is one numeral; on the closing it inverts to fill the frame. The eye always knows where to land because only one thing is lit.

Deck choreography:

1. **Cover** (`slide-cover`) — onyx, one serif line, one glowing gold word, one inset hairline. Maximum restraint sets the register.
2. **Section divider** (`slide-section-divider`) — a warm-black breath with a tracked chapter number. Slows the pace between acts.
3. **Stat hero** (`slide-stat-hero`) — one giant gold numeral (a reserve, a price, a year of founding), unit whispered beneath. The proof point.
4. **Quote** (`slide-quote`) — one ivory serif sentence in a sea of black. The idea that lingers.
5. **Closing** (`slide-closing`) — the gold inversion. The whole screen flips to brushed gold with an onyx line. The room feels the switch.

Pacing rule: no slide is denser than the one before it until the stat hero, which is the peak. After the peak, the quote and closing open back into air. The deck breathes in, strikes once, breathes out.

## Signature Moment

Two moments no template reproduces, both written to spec.

**UI — The Gilt Anchor.** On a full onyx field, a single word is set in anchor gold (`accent`) with a static radial halo (a soft always-on `box-shadow` glow, never animated). It is the only lit thing on the screen. Directly above and below it run two 1px brushed-gold hairlines that stop 64px short of the margins, so the rules float rather than border. Everything else on the page is ivory or muted, at least four sizes smaller. The result: one word appears to be softly illuminated inside a dark vitrine, framed by two lines of gold that go nowhere and hold everything. Change the template and you get a headline; here you get a jewel under a spotlight.

**Deck — The Gold Inversion.** The closing slide is the one time the system inverts. For the entire presentation gold has been the light on black; on the final frame the whole 16:9 flips to brushed gold (`primary`) as the ground, with a single onyx serif line (`on-primary`) set in it. No fade tricks, no motion, just the switch. After a deck of near-darkness, a full field of gold reads as the house finally revealing itself. It works precisely because it was withheld for every slide until now.

## Do's and Don'ts

**Do**

- Let onyx occupy the majority of every view. Space is the product.
- Keep structure gold and anchor gold in separate roles. Metal frames, light lands.
- Light exactly one element per view. One anchor, one hammer.
- Set display in wide-tracked uppercase serif; keep numerals in mono.
- Use inset hairline rules that stop short of the margins.
- Keep the halo static and reserve the gold inversion for the very end.

**Don't**

- 不碰紫蓝俗套渐变（`#667eea → #764ba2`）及其全家桶。This system has no gradient at all; the black is flat and the gold is a single tone.
- 不做居中卡片三件套（一行标题 + 一行灰副标 + 三个等宽圆角卡片）。Content is pushed off-center on an asymmetric grid; cards are sharp-edged and unequal.
- 中文不用日文字体渲染。衬线走 Noto Serif SC / Songti SC，无衬线走 Noto Sans SC / PingFang SC；日文字体会让简体缺字变豆腐。
- 不动画化阴影。The gold halo is always-on and static; a pulsing or breathing glow reads as a slot machine, not a maison, and it also drops frames.
- Don't add a second glowing element. Two lit things means no anchor.
- Don't round the corners into softness or drop pillowy shadows. Sharpness and the hairline are the luxury; `box-shadow: 0 4px 6px rgba(0,0,0,.1)` is banned.
- Don't fill the empty space because it feels risky. The emptiness is the whole point.

## Responsive Behavior

Mobile is a re-choreography, not a shrink. The onyx and the single anchor survive; the wide tracking and the grand margins are re-tuned so nothing breaks.

| Breakpoint | Behavior |
|---|---|
| ≥ 1200px | Full asymmetric 12-col grid. `section` (120px) breathing room. Display at 76px. |
| 768–1199px | Content narrows to 8 cols, margins compress toward `xl` (64px). Display eases toward ~56px via `clamp()`. |
| ≤ 767px | Single column, centered composition. `section` relaxes to ~72px. Display clamps to ~clamp(34px, 9vw, 48px). Eyebrow tracking drops from 4px to ~2.5px so wide caps still fit a 360px screen. |

Folding rules:
- **零孤字.** Display lines carry `text-wrap: balance`; hand-broken lines get `white-space: nowrap` and a `clamp()` size tuned to the longest line so no single character or punctuation mark is orphaned at ≤390px. 中文限宽用 em / px，绝不用 `ch`（拉丁数字宽度会让中文提前折行出孤字）。
- **The anchor stays.** The one glowing word is never dropped on mobile; it is the identity. Supporting copy folds beneath it.
- **The hairline reflows.** Inset rules recompute their inset to the mobile margin so they still float rather than touch the edge.
- **Motion is optional.** The static halo is the only effect and it is honored under `@media (prefers-reduced-motion: reduce)` with no change, since it never moved.

## Anti-Slop Pledge

Strip the maison name and this page still reads as considered, not generated: a flat lacquer-onyx field held mostly empty, one uppercase serif line, one gold word lit inside two floating hairlines, and a closing that withholds its gold until the last frame. No purple gradient, no three centered cards, no pulsing shadow, no filler. The restraint is the fingerprint. Signed HeiGe-Design.
