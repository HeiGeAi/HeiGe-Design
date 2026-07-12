---
version: alpha
name: ChampagneSilk-design-system
description: >-
  A couture-beauty system in champagne gold over warm ivory, lit like light
  sliding across silk. Champagne (#e8d9be) is the material; a deep couture rouge
  (#8e3b44) is the one drop of color spent on action, and a soft silk rouge
  (#d98a8a) tints the sheen. Ultra-thin Cormorant serif fades up over layered
  soft-light gradients; wide-tracked Jost small-caps stand beneath at attention.
  UI runs on ivory, the deck goes to warm espresso noir. Signature: a silk sheen
  behind the hero, a full-bleed rouge numeral dividing the deck.

colors:
  primary: "#e8d9be"
  on-primary: "#241d1a"
  ink: "#2b2320"
  canvas: "#f7f0e4"
  surface: "#fdf8f0"
  muted: "#715d4b"
  hairline: "#e6d5b8"
  accent: "#d98a8a"
  rouge: "#8e3b44"
  noir: "#211a1c"

typography:
  display-xl:
    fontFamily: '"Cormorant Garamond", "Cormorant", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "88px"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "0.4px"
  display-lg:
    fontFamily: '"Cormorant Garamond", "Cormorant", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "56px"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "0.3px"
  heading:
    fontFamily: '"Cormorant Garamond", "Cormorant", Georgia, "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.2px"
  body:
    fontFamily: '"Jost", "Century Gothic", "Futura", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0.1px"
  eyebrow:
    fontFamily: '"Jost", "Century Gothic", "Futura", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "3.2px"
  button:
    fontFamily: '"Jost", "Century Gothic", "Futura", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "2.8px"
  caption:
    fontFamily: '"Jost", "Century Gothic", "Futura", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "1.4px"

rounded:
  none: "0px"
  sm: "2px"
  md: "8px"
  lg: "16px"
  pill: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "112px"

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    padding: "22px 40px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 34px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.rouge}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 34px"
  meta-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.xs}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  prose-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  tag-soft:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  caption-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  rule-hairline:
    backgroundColor: "{colors.hairline}"
    padding: "0px"
  footer:
    backgroundColor: "{colors.noir}"
    textColor: "{colors.surface}"
    typography: "{typography.caption}"
    padding: "{spacing.section}"
  slide-cover:
    backgroundColor: "{colors.noir}"
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.rouge}"
    textColor: "{colors.surface}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.rouge}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.noir}"
    textColor: "{colors.surface}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.noir}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.section}"
---

# Champagne Silk · 香槟丝绸

> Beauty is not loud. It is champagne light moving across a fold of silk, and the single drop of rouge you almost miss until you can't look away.

A HeiGe-Design system for beauty houses, fine fragrance, jewelry, and high-end skincare — any brand whose promise is texture you want to touch. Built to drive an interface (HeiGe-UI) and a keynote (HeiGe-PPT) from one set of tokens.

---

## Overview

香槟丝绸 is champagne gold on warm ivory, with one deep rouge kept in reserve. The whole system is an argument that luxury in beauty is a **surface**, not a shout: the page should look lit, not colored.

Two colors carry the meaning. **Champagne (`#e8d9be`) is the material** — a warm, powdered gold that behaves like the sheen on satin, never a flat swatch. **Espresso ink (`#2b2320`) is the voice** — a soft brown-black that reads like text pressed into a cream card. Everything you read lives in those two on ivory. Then there is the **rouge (`#8e3b44`)**: the couture lipstick note, spent once per view on the thing you must act on, and its softer sister **`#d98a8a`** that only ever tints the silk sheen and the small glints — never a paragraph.

The typographic signature is a slow, deliberate contrast. **An ultra-thin Cormorant serif** at display sizes — hairline strokes, engraved-invitation thick-thin, set at weight 300 so it stays fragile — floats above **wide-tracked Jost small-caps** at 3.2px of tracking. The serif is a whisper of perfume; the label is the pressed foil under it. Slowness is part of the brand: the hero doesn't snap in, it **fades up** like a light being turned toward the silk.

The rhythm is generous and unhurried. Sections breathe at 112px. Ivory is left wide and quiet, so when the one rouge gesture lands — the button, the numeral, the underline — it reads like color entering a room that had none.

---

## Colors

Two working colors on ivory, one rouge in reserve, one dark act for the deck. No purple, no fourth hue.

### Brand & Accent
- `primary` **`#e8d9be`** — Champagne gold. The material of the brand. It fills the CTA plaque (with engraved espresso text), draws the silk sheen behind the hero, and becomes **text only on dark** — champagne on espresso noir reads at 12.3:1, luminous. On ivory it is a surface and a hairline, never a paragraph.
- `on-primary` **`#241d1a`** — Deep espresso, the engraved label that sits on the champagne plaque. Contrast against gold ≈ 11.9:1.
- `rouge` **`#8e3b44`** — Deep couture rouge. The one drop of true color, budgeted once per view: the secondary CTA text, the full-bleed section divider, the colossal stat numeral. On surface it reads at 6.9:1, on ivory at 6.5:1 — always legible, always deliberate.
- `accent` **`#d98a8a`** — Soft silk rouge. The powder-blush note. It tints the soft-light sheen and fills the one small `tag-soft` chip (with espresso text at 5.8:1). It never carries running copy — its job is glow, not language.

### Surface
- `canvas` **`#f7f0e4`** — Champagne-warmed ivory. The default page. Warm, matte, luminous.
- `surface` **`#fdf8f0`** — A half-shade brighter ivory. Cards lift by catching *more light*, not by casting a hard shadow.
- `hairline` **`#e6d5b8`** — A champagne line, one shade under canvas. The default divider — structure without weight.
- `noir` **`#211a1c`** — Warm espresso-plum. The dark act: the footer, and the entire deck. A near-black with a whisper of plum so the champagne and rouge sit on it warm, not clinical.

### Text
- `ink` **`#2b2320`** — Espresso. All prose and all headings on light. 12:1 on canvas.
- `muted` **`#715d4b`** — Warm mink for eyebrows, captions, metadata. Tuned dark enough to clear 4.5:1 on both ivory and surface (5.5:1 / 5.9:1) — soft, still readable.

### Semantic
No success/error palette by design. Beauty and fragrance do not dashboard. If a state must be shown, render it in `ink` with a worded label; the rouge is reserved for desire, not for warnings.

---

## Typography

### Font Family
- **Display / headings — Cormorant Garamond (ultra-thin, high-contrast serif).** Weight 300 at large sizes so the hairline strokes stay hairline — the letterforms of an engraved perfume box. Stack ends in `Georgia, "Noto Serif SC", "Songti SC", "STSong", serif`: if the webfont fails, the page degrades to a serious serif, and **Chinese resolves through Noto Serif SC / Songti SC**, never a Japanese face. A Cormorant headline set in 简体中文 renders as a clean thin 宋体, matched in spirit.
- **Labels / body / UI — Jost (geometric humanist).** Elegant, fashion-grade, the cool foil to the warm serif. Stack ends in `"Century Gothic", "Futura", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`.

**中文铁律**: 每条能承载中文的字体栈都以系统中文字体收尾（衬线走 Noto Serif SC / Songti SC，无衬线走 Noto Sans SC / PingFang SC）。断网、被墙、webfont 超时，中文都干净落地，绝不退成豆腐块，绝不用日文字体渲染简体。

### Hierarchy
| Role | Family | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|---|
| display-xl | Cormorant | 88px | 300 | 1.04 | 0.4px | Cover, hero, stat-hero numeral, big quote |
| display-lg | Cormorant | 56px | 300 | 1.1 | 0.3px | Stat figures, chapter numeral, closing line |
| heading | Cormorant | 26px | 500 | 1.25 | 0.2px | Card and section titles |
| body | Jost | 17px | 400 | 1.75 | 0.1px | Reading text, airy leading |
| eyebrow | Jost | 12px | 500 | 1.4 | 3.2px | UPPERCASE kicker above every headline |
| button | Jost | 12px | 500 | 1 | 2.8px | UPPERCASE plaque / chip label |
| caption | Jost | 13px | 400 | 1.55 | 1.4px | Captions, footer legal |

### Principles
- **Ratio is roughly 1 : 5** (body 17px → display-xl 88px). The leap is meant to feel almost too large; the ivory absorbs it.
- **The eyebrow is always uppercase Jost at 3.2px tracking, always `muted`, never gold or rouge.** The wide tracking *is* the couture cue — letterspacing does the luxury work so the color doesn't have to.
- Cormorant only earns its beauty above ~22px; below that it thins to nothing. Keep small text in Jost.

---

## Layout

### Spacing
A 4-based scale: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 112`. Sections are parted by 112px of nothing — not padding, pacing. Beauty catalogs are slow; this system is too.

### Grid & Container
- 12-column grid, rarely filled. A single column of prose caps around 60–64 characters (limited in `em` / `px`, **never in `ch`** — `ch` is the width of a Latin `0` and would fold Chinese into orphans).
- Offset over center. The signature editorial move: hero pinned low-left, the upper-right two-thirds left as pure silk-lit ivory. The empty field is where the sheen lives.

### Whitespace philosophy
Ivory is the most expensive material here, and 香槟丝绸 spends it lavishly. The rule: **before every rouge gesture, subtract.** The button, the numeral, the underline should each arrive after a stretch of quiet ivory that made you wait for the color.

---

## Elevation & Depth

Depth in this system is **light on silk**, not blur or hard shadow.

| Layer | Technique |
|---|---|
| Base | `canvas` ivory |
| Silk sheen | Static layered `radial-gradient`s — champagne core → ivory → a far whisper of `accent` rouge at one edge — blended `soft-light`. The signature decorative depth. |
| Raised (cards) | `surface` (a half-shade brighter) + 1px `hairline`, and at most one very soft, warm, **static** champagne-tinted shadow. |
| Rule / divider | 1px `hairline`, or a single champagne / rouge hairline |
| Dark act | `noir` espresso-plum, for the footer and the whole deck |

Per production law: the silk sheen is **static gradients only — no `backdrop-filter`, no animated shadow**. If it must move, it moves `opacity`, nothing else. Cards may lift on hover by warming their border toward champagne or nudging 1px; they never bloom a shadow.

---

## Shapes

| Token | Value | Use |
|---|---|---|
| none | 0px | Stat blocks, dividers, image plates — sharp, cut-card edges. |
| sm | 2px | Feature cards. Barely softened, still pressed-paper. |
| md | 8px | Soft notes and captions — a gentle curve where the tone is tender. |
| lg | 16px | Prose blocks — the one properly soft, cushioned surface. |
| pill | 9999px | Buttons and the one soft chip — thin champagne / rouge capsules against the sharp cards. |

Geometry rule: **images are full-bleed or sit inside a hairline frame** like a plate in a fragrance lookbook. No floating rounded photo cards. When a product shot appears, it bleeds off the page or is framed thin, and it is usually the only saturated thing in view.

---

## Components

- **nav-bar** — Ivory bar, `ink` wordmark, uppercase `eyebrow` links spaced wide, one `hairline` beneath. No fill, no glass, no shadow.
- **button-primary** — The champagne foil plaque. `primary` gold fill, engraved `on-primary` espresso label, `pill`. This is the one gold gesture on most screens.
- **button-ghost** — Ivory ground, `rouge` label, 1px `rouge` outline, `pill`. The secondary action wears the color the primary saved.
- **meta-label** — Uppercase `muted` kicker at 3.2px tracking, with a champagne hairline drawn beneath (see Signature Moment). The header unit of the system.
- **card-feature** — `surface` panel, `heading` in thin Cormorant, `sm` radius, hairline border, lifting by light.
- **prose-block** — `body` Jost on `surface`, 1.75 leading, narrow measure, `lg` cushioned radius. Built to actually be read.
- **tag-soft** — A single soft `accent` rouge chip, uppercase `ink` label, `pill`. The one powder-blush object.
- **stat-block** — Big `display-lg` Cormorant figure in `ink`, unit in `muted` caption, a rouge hairline underscore. Sharp corners.
- **caption-note** — `caption` in `muted` on `surface`, `md` radius. Figure notes and fine print.
- **rule-hairline** — The 1px champagne `hairline` divider. The connective tissue under every eyebrow, nav, and footer edge — structure without weight.
- **footer** — The dark act: `noir` espresso-plum ground, ivory `caption` text, a `hairline` top rule, champagne saved for one link. Where the page finally dims.

---

## Presentation System

香槟丝绸 as a 16:9 deck flips to the **dark act**: warm espresso noir carries the whole keynote, so champagne and rouge glow instead of sitting flat. One idea per slide, no bullet lists, no template chrome, and the rouge rationed to one full section.

- **Cover (`slide-cover`)** — Espresso `noir` field. Uppercase `eyebrow` kicker with its champagne hairline. A single `display-xl` Cormorant title, thin and enormous, in champagne gold, pinned low-left, the upper-right left dark and empty — and it **fades up** rather than cuts in. 黄金三秒: within three seconds you read expensive, quiet, sure of itself. **视觉锤 = the champagne title glowing on near-black, one hairline beneath.**
- **Section divider (`slide-section-divider`)** — Full-bleed deep `rouge`. One giant thin ivory `display-lg` numeral (`01`, `02`), a wide-tracked ivory chapter title, one champagne hairline across the baseline. The whole frame is the color the rest of the deck withheld. This is the deck's visual hammer (below).
- **Stat hero (`slide-stat-hero`)** — Here the deck goes light: an ivory `canvas` field, one colossal `display-xl` figure in `rouge`, a `muted` unit label, a champagne underscore. One rouge number, whole slide. 一页一句话 rendered as 一页一个数字.
- **Quote (`slide-quote`)** — Back to `noir`. A single `display-xl` serif line in ivory, attribution in champagne `eyebrow`. The line is the only thing lit in the room.
- **Closing (`slide-closing`)** — `noir` ground, one `display-lg` line of intent in champagne, one champagne `button-primary` plaque. The last light seen is the brand's one gold indulgence.

Every slide obeys: **one subject, ivory or ink margins wider than you think, rouge spent once, everything fades — nothing snaps.**

---

## Signature Moment

The moves no template reproduces, because a template can add a gradient but it cannot spend one drop of rouge and then stop.

### UI — 丝光 · The Silk Sheen
The hero background is a **triple-layered soft-light sheen**: three static `radial-gradient`s — a champagne (`#e8d9be`) core, an ivory mid, and one far whisper of soft rouge (`#d98a8a`) drifting off a single corner — composited in `soft-light` so it reads exactly like studio light sliding down a fold of satin. Over it, the ultra-thin Cormorant headline (weight 300) **fades up** — `opacity` 0→1 with an 8px `translateY`, ~900ms, composited only, `prefers-reduced-motion` renders it already-arrived — while a **1px champagne hairline unfurls** beneath the eyebrow. No card, no border, no box. Copy the CSS and you still won't reproduce it: the un-templatable part is the exact soft-light stops, the fragile serif at 300, and the discipline of keeping the rouge to a single far whisper instead of a purple wash.

### Deck — 胭脂序号 · The Rouge Numeral
The `slide-section-divider`: a **full-bleed deep rouge field** holding one oversized thin ivory Cormorant numeral (`01`) at roughly 42vh cap-height, tracked wide, floating in a sea of couture red, crossed by **one champagne hairline** at its baseline and captioned by a single wide-tracked ivory chapter title. One number. One line. One flood of the color every other slide refused. It is the lipstick page of a beauty lookbook, not a slide — and it lands only because the espresso-noir slides around it were starved of rouge to make it inevitable.

---

## Do's and Don'ts

### Do
- **Spend the rouge once.** One CTA, or one divider, or one stat numeral per view. Ration it like pigment.
- **Let the sheen be the color on light.** On ivory, the champagne soft-light gradient does the richness so you don't have to fill with hue.
- **Pair the contrast on purpose** — ultra-thin Cormorant serif directly above wide-tracked Jost small-caps. The tension is the brand.
- **Fade, don't cut.** Heroes and slides arrive on `opacity`; slowness reads as confidence.
- **Lift with light and a soft, static, warm shadow** — never a hard gray drop.
- **Take the deck fully dark** — espresso `noir` lets champagne and rouge glow.

### Don't
- **不碰紫蓝俗套渐变** — no `#667eea → #764ba2` or any cousin. The only gradient here is a champagne soft-light sheen; a purple-blue hero would vaporize the entire proposition.
- **不做居中卡片三件套** — no title + gray subtitle + three equal centered rounded cards. Layout is offset and column-led; centered SaaS triads are banned.
- **中文不用日文字体** — never render 简体中文 in a Japanese face (Mochiy, Zen Maru, etc.). Chinese resolves through Noto Serif SC / Songti SC (serif) or Noto Sans SC / PingFang SC (sans). No 豆腐块.
- **不动画化阴影** — never animate `box-shadow` / `text-shadow`, and no `backdrop-filter`. The silk sheen is a static gradient; only `opacity` ever moves.
- **Don't let champagne become body text on ivory.** It fails legibility and cheapens the foil. Champagne is a fill, a hairline, or text on dark — never a paragraph.
- **Don't over-pour the rouge.** Two rouge gestures on one screen and it stops being couture and starts being a warning label.

---

## Responsive Behavior

Mobile is re-composed, not shrunk. The deck-scale drama is re-set for one narrow column.

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full offset grid; hero low-left, upper-right left as silk-lit ivory; display-xl at full 88px. |
| 768–1199px | Prose collapses to one column; display scales via `clamp()`; section spacing eases from 112px toward 72px; the sheen re-anchors to the new corner. |
| ≤767px | One column. Headlines re-flow to short balanced lines (`text-wrap: balance`), each manually-broken line locked `white-space: nowrap` so **no single character or 标点 is ever orphaned**. Eyebrow, champagne hairline, and headline stack vertically; the rouge numeral shrinks but keeps its flood of color edge-to-edge. Mobile gets *more* breathing room per element, not less. |

零孤字自检: 桌面与 ≤390px 窄屏各过一遍每个标题，确认 `scrollWidth == clientWidth`、无横向溢出、无孤字。中文限宽用 `em` / `px`，不用 `ch`。

---

## Anti-Slop Pledge

Strip the name off this system and it is still unmistakably made by hand. The proof is in the restraint: one soft-light sheen instead of a color wash, one drop of rouge instead of a palette, a serif thin enough to break and a label tracked wide enough to breathe. What remains — champagne on ivory, espresso ink, a single couture rouge that fades in slowly — could not fall out of a generator, because a generator would reach for the purple gradient and pour the color everywhere. **香槟丝绸 spends one drop of rouge, and the patience is the design.**

— HeiGe-Design · MIT
