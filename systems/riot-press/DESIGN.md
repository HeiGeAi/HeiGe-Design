---
version: alpha
name: RiotPress-design-system
description: >
  RiotPress is an underground xerox-zine identity: hazard yellow #ffe600 slapped
  over photocopier black on gray copy-stock paper. Ultra-condensed all-caps display
  type stacks like flyposted headlines, mono stamps date every block, and crooked
  torn-tape labels carry the attitude. Hard offset shadows, zero radius, static
  half-tone grain. One token set drives both the 界面 and the 16:9 演示. No gradients,
  no soft corners, all bite.

colors:
  primary: "#ffe600"
  on-primary: "#0b0a06"
  ink: "#14130f"
  canvas: "#e7e4da"
  surface: "#171610"
  on-surface: "#f2efe4"
  muted: "#57564d"

typography:
  display-mega:
    fontFamily: 'Anton, "Bebas Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "112px"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-1px"
  display-xl:
    fontFamily: 'Anton, "Bebas Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "72px"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.5px"
  display-lg:
    fontFamily: '"Bebas Neue", Anton, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "46px"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "0.5px"
  heading:
    fontFamily: 'Archivo, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.2px"
  body:
    fontFamily: 'Archivo, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0px"
  body-mono:
    fontFamily: '"Space Mono", "JetBrains Mono", ui-monospace, "PingFang SC", monospace'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0px"
  button:
    fontFamily: '"Bebas Neue", Anton, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "1.5px"
  caption:
    fontFamily: '"Space Mono", "JetBrains Mono", ui-monospace, "PingFang SC", monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.4px"
  eyebrow:
    fontFamily: '"Space Mono", "JetBrains Mono", ui-monospace, "PingFang SC", monospace'
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "3px"

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
  section: 80px

components:
  # —— UI 界面组件 ——
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 32px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 32px
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: 20px 40px
  card-slab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 40px
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    rounded: "{rounded.none}"
    padding: 32px 40px
  tape-label:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 6px 16px
  rubber-stamp:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 18px 24px
  spec-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: 14px 0px
  meta-caption:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 8px 0px
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px 40px
  # —— slide 演示组件（16:9）——
  slide-cover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-mega}"
    rounded: "{rounded.none}"
    padding: 80px
  slide-section-divider:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 80px
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    rounded: "{rounded.none}"
    padding: 80px
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  slide-closing:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 80px
---

# RiotPress · 暴走印刷

> A xerox-zine system for people who staple manifestos to lampposts. 地下丝网印刷厂的态度，一台复印机把黑咬进灰纸，一条警示黄拍在上面。Attitude first, polish never.

## Overview

RiotPress runs on three ingredients and no fourth: **photocopier black**, **hazard yellow**, and the **gray of cheap copy stock**. That is the whole discipline. Rhythm comes from scale and slam, never from adding another color.

The two colors have fixed jobs and never trade places:

- **Hazard yellow `#ffe600`** is the *shout*. It appears only on things that demand you stop — one word in a headline, a torn tape label, a single button, a full-bleed cover. Spend it like the last coin in your pocket.
- **Photocopier black `#171610`** is the *ink*. It builds the heavy slabs, the rules, the offset shadows, the body of every word. It carries the weight so yellow can carry the meaning.

Everything else sits on **copy-stock gray `#e7e4da`** — a warm, slightly dirtied paper tone that already looks run through a machine at 2 a.m.

**Type is loud on purpose.** Ultra-condensed all-caps display (Anton / Bebas) stacks tight like flyposted headlines, three lines slammed together with nowhere to breathe. Underneath, a monospace stamps every block with a date, a code, an edition number, the way a real print shop marks a run. The tension between the screaming caps and the deadpan mono stamp *is* the voice.

Pacing is punch, rest, punch. A black slab with white type, then bare gray paper, then one yellow line that fills the frame. No smooth fades. Corners are square. Shadows are hard. Nothing apologizes.

## Colors

Seven tokens. Every one is load-bearing, none is decoration.

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#ffe600` | Hazard yellow — the single shout. CTA, tape, cover, one word per headline. Never a background for reading text. |
| `on-primary` | `#0b0a06` | Near-black stamped onto yellow. High-bite ink for tape labels and hazard covers. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#e7e4da` | Copy-stock gray. The default page. Warm, machine-dirtied, never pure white. |
| `surface` | `#171610` | Photocopier black slab. Inverted panels, nav bar, cards, footer, most演示 backgrounds. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#14130f` | Body and headlines on the gray page. Near-black, faintly warm — reads like toner, not like pixels. |
| `on-surface` | `#f2efe4` | Paper-white type sitting on the black slab. |
| `muted` | `#57564d` | Copier-gray secondary text: timestamps, run codes, fine print. Only ever on `canvas`. |

### Contrast ledger (WCAG AA, hand-checked)
Every component that pairs text on a fill clears 4.5:1 with room to spare:

- `ink` on `canvas` → ~14.7:1
- `on-surface` on `surface` → ~15.7:1
- `on-primary` on `primary` → ~15.6:1
- `muted` on `canvas` → ~5.8:1

There is no low-contrast pairing anywhere in this system, and there never should be. Punk is high contrast by definition.

## Typography

### Font Families
- **Display (Latin caps):** `Anton` for the heaviest slabs, `Bebas Neue` for labels and buttons. Both are single-weight condensed uppercase — they *are* the flyposter.
- **Body / heading:** `Archivo`, a stark grotesk that stays legible when set small under all that shouting.
- **Mono (stamps):** `Space Mono` for dates, edition numbers, run codes, spec rows — the deadpan counterweight.

### 中文铁律 (non-negotiable)
Anton and Bebas carry **no Chinese glyphs**, so every display stack falls through to a system CJK face:

```
Anton, "Bebas Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif
```

- Chinese renders in **Noto Sans SC / PingFang SC / Microsoft YaHei** — heavy, condensed enough to hold the punk weight.
- **绝不用日文字体**（Mochiy / Zen Maru 之类）渲染中文：简体会缺字变豆腐。
- Webfont first (design intact when it loads), system CJK last (still clean when it doesn't). Swap the webfont URL for garbage and the page must still read.

### Hierarchy
| Role | Font | Size | Weight | Leading | Tracking | Use |
|---|---|---|---|---|---|---|
| `display-mega` | Anton | 112px | 400 | 0.88 | -1px | Cover slam, giant stat numeral |
| `display-xl` | Anton | 72px | 400 | 0.9 | -0.5px | Section dividers, chapter numbers, closing |
| `display-lg` | Bebas | 46px | 400 | 0.96 | 0.5px | Card titles, screen-filling quotes |
| `heading` | Archivo | 24px | 800 | 1.15 | -0.2px | Nav wordmark, block titles |
| `body` | Archivo | 17px | 400 | 1.6 | 0px | Paragraphs |
| `body-mono` | Space Mono | 14px | 400 | 1.5 | 0px | Spec rows, structured data |
| `button` | Bebas | 20px | 400 | 1.0 | 1.5px | Buttons (uppercase) |
| `caption` | Space Mono | 12px | 400 | 1.4 | 0.4px | Tape labels, fine print |
| `eyebrow` | Space Mono | 12px | 700 | 1.0 | 3px | Kickers, stamp text |

### Principles
- **Contrast is at least 1:6.** The 112px slam against 17px body reads like a shout next to a whisper. If the biggest thing on screen isn't uncomfortably big, make it bigger.
- **All-caps display, tight leading.** Condensed uppercase wants to stack — set `line-height` under 1.0 and let three lines lock together as one block.
- **Zero-orphan rule:** hand-broken display lines get `white-space:nowrap` per line, and `font-size` uses `clamp()` sized to the *longest* line so it survives ≤390px without dumping a single character onto its own row. Never use `ch` to width-limit Chinese — it orphans early.
- **Mono is the anchor.** Every loud block carries one quiet mono stamp. The stamp keeps the shout from becoming noise.

## Layout

### Spacing
An 8px-based scale: `xs 4 / sm 8 / md 16 / lg 24 / xl 40 / section 80`. Slabs get `xl`+ padding; stamps and tape get `xs`–`md`. Section rhythm on the page is `section` (80px), so blocks land like separate printed sheets pasted down.

### Grid & Container
- A **bare 12-column grid** — and it shows. Grid lines are allowed to be visible hairline rules on the gray page; RiotPress does not hide its structure, it prints it.
- Content max-width ~1200px, but display slabs **bleed to the edge**. A hazard headline that stops politely inside a margin is a dead headline.
- Alignment is **hard left**, ragged right, like a typewriter draft. No centered columns of running text.

### Whitespace
Whitespace here is not calm, it is *pressure*. Big empty gray gaps exist so the next black slab hits harder. Group tightly, then leave a brutal void, then slam. Even density everywhere is the one thing this system cannot do.

## Elevation & Depth

Depth is **physical, not soft**. Nothing floats on a blur.

| Layer | Treatment |
|---|---|
| Page | Flat copy-stock gray with static half-tone grain |
| Slab / card | Hard offset shadow `6px 6px 0 #171610` — no blur, no alpha, just displacement |
| Tape / sticker | Sits *above* the slab, rotated, casting a tight `2px 3px 0` hard shadow |
| Stamp | Ink pressed *into* the page — no shadow, slight rotation, faint edge noise |

- **Xerox grain** is the signature texture: a tiled `feTurbulence` / half-tone PNG at ~6–10% opacity over the whole page, **static**. It reads as photocopied toner, not as a filter.
- **Never** `backdrop-filter`. **Never** an animated shadow. Glow is not in this vocabulary at all — this is toner, not neon.

## Shapes

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Everything structural. Buttons, cards, slabs, dividers — all square. |
| `sm` | 2px | Tape labels only — the barely-there softness of a cut sticker corner. |
| `pill` | 9999px | The round rubber stamp badge, and nothing else. |

Geometry is torn and taped, not rounded. Image crops use **hard diagonal cuts** and **torn-paper masks**, never soft radii. A rounded card in RiotPress is a bug.

## Components

- **button-primary** — hazard-yellow block, black uppercase Bebas, square corners, hard offset shadow. The one thing on the page you're allowed to want.
- **button-ghost** — gray fill, heavy 3px ink border, black uppercase label. Secondary action, still square, still loud.
- **nav-bar** — a full black bar across the top, paper-white wordmark left, mono links right. It reads like a masthead stamped in ink.
- **card-slab** — black slab, paper-white Bebas title, `6px 6px 0` hard shadow. Cards are pasted sheets, never floating panels.
- **stat-block** — giant Anton numeral in ink on gray, mono unit-label stamped beneath. The number is meant to be almost too big for its box.
- **tape-label** — yellow strip, black mono text, 2px corner, rotated crooked. The attitude carrier (see Signature Moment).
- **rubber-stamp** — round badge, ink eyebrow text, pressed into the page with slight rotation. Editions, approvals, "SIDE A".
- **spec-row** — mono key/value row on gray with a heavy ink underline. The zine's index page.
- **meta-caption** — muted copier-gray mono fine print. Dates, run codes, disclaimers.
- **footer** — black slab, paper-white body, big mono edition stamp. The colophon of the print run.

## Presentation System

RiotPress collapses into a **16:9 deck** using the exact same tokens — a slide is just a slab that fills the frame. It obeys HeiGe-PPT's three laws:

**一页一句话 (one line per slide).** No slide carries a paragraph. A slide is one headline slab, or one number, or one quote. If it needs bullet points, it's two slides.

**黄金三秒 (first three seconds).** Every slide lands its meaning before the audience finishes reading. The hazard-yellow cover, the giant stat, the screen-filling quote — each is legible from the back row instantly.

**视觉锤 (visual hammer).** The hammer is always the same: **one hazard-yellow element on a black-or-gray field**. One tape label, one word, one number in yellow. The audience remembers the yellow.

| Slide | Component | Build |
|---|---|---|
| Cover | `slide-cover` | Full-bleed hazard yellow. One screen-filling black Anton line — the harsh line. A strip of hazard tape across the bottom edge. |
| Section divider | `slide-section-divider` | Black slab. A giant yellow chapter number (`01`) bleeding off-frame, section title stamped small in mono beside it. |
| Data / stat | `slide-stat-hero` | Gray page. One monstrous ink numeral, a yellow underline slashed beneath it, mono caption stamped below. |
| Quote | `slide-quote` | Black slab. One Bebas quote filling the frame, a single word flipped to yellow. Attribution in mono. |
| Closing | `slide-closing` | Black slab. The call to action in Anton, a yellow tape label slapped crooked over it saying what to do next. |

Transitions are **hard cuts** — no dissolves, no slides-in. The deck should feel like flipping through a stapled zine, page slamming onto page.

## Signature Moment

Two moments this system owns. Swap the template and they vanish.

**UI — THE TAPED SLAP.**
A hazard-yellow `tape-label` slapped across the top-left corner of a black `card-slab`, rotated **-2.5°**, with a **torn-edge mask** on both ends (irregular clip-path, not a straight cut) and a tight `2px 3px 0` hard shadow so it lifts off the slab like real gaffer tape. The whole card wears a static xerox half-tone grain at ~8% opacity. It looks like someone physically taped a label onto a photocopy — a warmth and wrongness no rounded-card template can fake.

**Deck — THE HAZARD COVER (占屏狠话).**
A single slide, **full-bleed `#ffe600`**, carrying **one** screen-filling black Anton sentence — the harsh line, broken by hand into stacked all-caps rows with zero orphans, tracking pulled tight so the words lock into a solid block. A strip of black-and-yellow hazard tape runs across the bottom bleed. No logo, no subtitle, no room. Three seconds and it's burned in. That is the opening slam of every RiotPress deck.

## Do's and Don'ts

**Do**
- Spend yellow like it's rationed — one shout per view, never two.
- Break display headlines by hand and stack them tight; check every one at ≤390px for orphans.
- Let the grid and the offset shadows show. Structure is the aesthetic.
- Stamp every loud block with one deadpan mono line — date, code, edition.
- Keep the xerox grain static and cheap-looking on purpose.

**Don't**
- **不碰紫蓝俗套渐变** (`#667eea → #764ba2` 及其全家桶). This system has no gradients at all — flat ink or flat yellow only.
- **不做居中卡片三件套**: no row of three equal rounded cards under a centered title-and-subtitle. Slabs are asymmetric, taped, offset, ragged-left.
- **中文绝不用日文字体渲染**: Chinese falls through to Noto Sans SC / PingFang SC / Microsoft YaHei, never Mochiy / Zen Maru.
- **不动画化阴影 / 不发光**: shadows are hard and static, `6px 6px 0`. No blur, no glow, no `backdrop-filter`.
- Don't round the corners, don't soften the contrast, don't let anything look polished.

## Responsive Behavior

| Breakpoint | Layout |
|---|---|
| ≥1200px | Full 12-col grid, bleed slabs, tape at full crook, 112px display |
| 768–1199px | 6-col, display `clamp()` down to ~64px, shadows shorten to `4px 4px 0` |
| ≤767px | Single column, headlines re-broken for the narrow measure, tape re-anchored top of block, display `clamp()` floor ~40px |

Mobile is a **re-paste, not a shrink**. Headlines get new hand-breaks sized to the phone's width (never a scaled-down desktop line), the taped label moves from the card corner to a full-width strip across the top, and the offset shadow tightens so it never causes horizontal scroll. On every width: `scrollWidth === clientWidth`, zero orphans, zero overflow. All motion respects `prefers-reduced-motion: reduce`.

## Anti-Slop Pledge

Strip the name off any RiotPress page and it still reads as **made by a person with a grudge and a photocopier** — not squeezed out of a template. The proof is in the parts a generator never bothers with: the tape rotated a specific -2.5°, the torn clip-path edges, the mono stamp that dates the run, the hazard line hand-broken to sit orphan-free at 390px, the one coin of yellow spent on exactly one word. High contrast, hard shadows, real toner grain. If it ever looks safe, smooth, or centered, it isn't finished — it's been laundered.

— HeiGe-Design · MIT
