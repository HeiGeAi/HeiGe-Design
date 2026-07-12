---
version: alpha
name: y2k-chrome-design-system
description: Y2K liquid-chrome for fashion, toy, beauty and Gen-Z brands. Electric blue #4d5bff carries every interactive surface, chrome silver #c9ccd4 supplies the beveled metal edge, and bubblegum pink #ff86d0 pops as the single accent. Chubby rounded Baloo 2 headings wear a silver-to-blue chrome sheen while Space Mono runs the digital readouts. Signature move is a mercury-beveled pill with one four-point star glint, organic blob masks, and a strict no purple-blue gradient rule.

colors:
  primary: "#4d5bff"
  on-primary: "#ffffff"
  ink: "#16172b"
  canvas: "#ebedf5"
  surface: "#f6f7fb"
  muted: "#5a5d78"
  hairline: "#c9ccd4"
  accent: "#ff86d0"
  on-accent: "#2b1024"

typography:
  display-xl:
    fontFamily: "\"Baloo 2\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 76px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "\"Baloo 2\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -1px
  heading:
    fontFamily: "\"Baloo 2\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.4px
  body:
    fontFamily: "\"DM Sans\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", \"Hiragino Sans GB\", sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px
  body-mono:
    fontFamily: "\"Space Mono\", ui-monospace, \"SFMono-Regular\", \"Noto Sans SC\", \"PingFang SC\", monospace"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  button:
    fontFamily: "\"Baloo 2\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.2px
  caption:
    fontFamily: "\"DM Sans\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: "\"Space Mono\", ui-monospace, \"SFMono-Regular\", \"Noto Sans SC\", \"PingFang SC\", monospace"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 2.5px

rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 20px
  xl: 32px
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
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  badge-pill:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md} {spacing.lg}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  divider-chrome:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    height: 2px
  meta-caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
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

# 千禧金属 · Y2K Chrome

Liquid metal, jelly gloss, and one four-point star glint. This is the year-2000 daydream of the future rebuilt as a working design system for fashion, toy, beauty, and Gen-Z brands — chrome that flexes, pink that pops, blue that carries the weight.

## Overview

千禧金属 runs on a three-material logic, not a three-color palette. **Electric blue `#4d5bff` is the only interactive surface** — every button, every closing slide, every thing you can press glows the same electric indigo. **Chrome silver `#c9ccd4` is a material, never a fill** — it lives exclusively as beveled hairline edges, the light-catching lip on a card, the sweep across a mercury pill. **Bubblegum pink `#ff86d0` is the one permitted scream** — used once per view, on an accent chip or a full-bleed quote slide, and then it shuts up.

The rhythm is glossy but disciplined. Type is chubby and rounded (Baloo 2) so the chrome sheen has round shoulders to travel across; numbers and labels drop to Space Mono for that early-2000s digital-readout coldness. The whole system swings between **pearl-light UI** (cool silver canvas, so blue and pink burn bright) and **saturated full-bleed slides** (blue or pink edge to edge). No gray middle ground, no safe minimal.

The signature is a metal treatment you apply, not a decoration you drop in: a silver-to-blue chrome gradient on heading glyphs, an organic blob mask on imagery, and exactly one star sparkle per composition. Restraint is what keeps Y2K from becoming a costume.

## Colors

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#4d5bff` | Electric blue. Every interactive surface — buttons, links, the closing slide. White text on it clears AA (~4.9:1). |
| `accent` | `#ff86d0` | Bubblegum pink. One appearance per view: an accent chip, a badge, or a full-bleed quote slide. |
| `on-primary` | `#ffffff` | Text and icons riding on electric blue. |
| `on-accent` | `#2b1024` | Deep plum ink on bubblegum pink (~8:1). Not black — a bubblegum-native dark that keeps the sugar. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#ebedf5` | Cool pearl page base. Slightly blue-silver so chrome edges read as metal, not gray. |
| `surface` | `#f6f7fb` | Brighter chrome-white for cards, nav, secondary buttons. |
| `hairline` | `#c9ccd4` | Chrome silver. The material token — beveled borders, card lips, the metal in the mercury pill. Never a background fill. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#16172b` | Deep gunmetal-navy body and heading text. Cool chrome black, never `#000`. |
| `muted` | `#5a5d78` | Slate secondary text on light surfaces (~6:1 on canvas). Timestamps, meta, captions. |

### Semantic note
This system stays intentionally lean on semantic color. Success/warning states borrow the accent pink for attention and the ink for calm; it never introduces a second saturated hue, because two competing candy colors is exactly how Y2K collapses into clown.

## Typography

### Font Family
- **Display / Headings / Buttons — Baloo 2.** Chubby, rounded, heavy (800/700). Round shoulders are what let the chrome gradient sweep look like reflected light instead of a flat fill. Falls back through `"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif` so Chinese renders in the proper simplified system face.
- **Body / Caption — DM Sans.** A neutral, slightly geometric workhorse that gets out of the way and lets the chrome display carry all personality. Same CJK fallback tail.
- **Data / Readouts / Eyebrow — Space Mono.** Numbers, stat blocks, and uppercase digital labels. That monospaced tick is the coldest, most Y2K-terminal thing in the system, offsetting all the sugar.

**Chinese rule (hard):** every stack ends in `"Noto Sans SC", "PingFang SC", "Microsoft YaHei"` (sans) — Baloo 2 and DM Sans carry no CJK, so Simplified Chinese must land on a true system face. **Never a Japanese font** (Mochiy, Zen Maru): Simplified glyphs would drop to tofu or render as Japanese variants. If you ever need a chubby *Chinese* display face to match Baloo 2's mood, reach for `ZCOOL KuaiLe` — not a Japanese round gothic.

### Hierarchy
| Role | Family | Size | Weight | Line | Tracking |
|---|---|---|---|---|---|
| display-xl | Baloo 2 | 76 | 800 | 1.0 | -1.5 |
| display-lg | Baloo 2 | 52 | 800 | 1.05 | -1.0 |
| heading | Baloo 2 | 30 | 700 | 1.15 | -0.4 |
| body | DM Sans | 17 | 400 | 1.65 | 0 |
| body-mono | Space Mono | 15 | 400 | 1.5 | 0 |
| button | Baloo 2 | 16 | 700 | 1.0 | 0.2 |
| caption | DM Sans | 13 | 500 | 1.4 | 0.2 |
| eyebrow | Space Mono | 12 | 700 | 1.0 | 2.5 |

### Principles
- The chrome sheen is a *heading-only* treatment. Body text stays solid ink — chrome on running text is unreadable and screams template.
- Display-to-body contrast holds at roughly 4.5:1 in size. The hero word is allowed to be almost obnoxiously large; that oversize is the point.
- Eyebrows are always uppercase Space Mono with wide 2.5px tracking. They read like a device label, cold against the warm rounded display.

## Layout

**Spacing.** An 8px-derived scale: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 80`. Cards breathe on `xl` internal padding so the beveled chrome edge has room to catch light. Sections separate on `section` (80px) — Y2K wants air around each glossy object, like product shots on a white sweep.

**Grid & container.** 12-column, ~1200px max content width, 24px gutters. Blob-masked imagery is allowed to break the grid and bleed past a column edge; text never does. The tension between a strict grid and one escaping organic blob is the whole layout game.

**Whitespace.** Light UI leans on generous pearl negative space so the electric blue and bubblegum pink read as jewels, not walls. On saturated slides the logic flips: color goes edge-to-edge and whitespace becomes the dark ink margin around a single chrome word.

## Elevation & Depth

Depth here is *metal*, not soft shadow. Chrome reads through a **two-tone bevel**, not a blur.

| Layer | Treatment |
|---|---|
| Flat (canvas) | No shadow. Pearl base. |
| Raised card | 1px `hairline` top/left light edge + a static, un-animated drop shadow beneath. Never a glowing halo. |
| Mercury / chrome object | A layered linear-gradient (light silver at top → mid-gray → electric blue at bottom) simulating a reflected horizon on curved metal. Applied as background or `background-clip: text`. |
| Star glint | A single 4-point sparkle (CSS `clip-path` polygon or tiny inline SVG) with a static white core. |

Hard rules: **no `backdrop-filter`** (it repaints every scroll frame) — fake glass with a semi-transparent solid `surface`. **No animated shadows** — the chrome bevel and glint are always static; only `transform`/`opacity` may animate. The gloss must never cost a frame.

## Shapes

| Token | Value | Use |
|---|---|---|
| none | 0px | Full-bleed slides, footer. |
| sm | 6px | Meta chips, inline tags. |
| md | 12px | Stat blocks, small controls. |
| lg | 20px | Floating nav pill, mid containers. |
| xl | 32px | Jelly feature cards. |
| pill | 9999px | All buttons and badges. |

**Blob geometry.** Imagery and hero backdrops use an organic blob mask via asymmetric radius, e.g. `border-radius: 42% 58% 63% 37% / 45% 39% 61% 55%`. Keep it to one blob per view; a wall of blobs is noise. The blob is the soft foil to the pill's perfect geometry.

## Components

- **button-primary** — electric-blue pill, white label, chrome top-edge highlight. The one primary action.
- **button-secondary** — chrome-white pill with a silver `hairline` bevel and ink label. The metal, quieter twin.
- **button-accent** — bubblegum pill with deep-plum label. Reserved for one celebratory CTA (join, drop, claim).
- **badge-pill** — pink capsule, uppercase mono eyebrow. "NEW", "LIMITED", the drop counter.
- **nav-bar** — a floating chrome-white bar (`lg` radius) with a silver hairline, sitting off the top edge like a metal tray.
- **card-feature** — jelly card on `xl` radius, silver-lipped, ink body. Heading may take the chrome sheen.
- **stat-block** — mono numbers in an `md`-radius chrome tile; the figure scales up huge, label stays cool caption.
- **divider-chrome** — a 2px silver `hairline` rule with pill ends, the physical metal seam between sections.
- **meta-caption** — muted slate on a small `sm` chip for timestamps and secondary labels.
- **footer** — full-width gunmetal-ink slab, chrome-white text, sharp `none` corners to ground the page.

## Presentation System

The 16:9 deck is where 千禧金属 goes maximal. It obeys HeiGe-PPT's三条铁律：**一页一句话**（one page, one sentence），**黄金三秒**（the first three seconds set the register），**视觉锤**（one visual hammer per slide）。

- **Cover (slide-cover).** Pearl canvas, one hero word rendered in liquid chrome inside an organic blob, one star glint at its top-left. The视觉锤 is the chrome word itself — three seconds and you know this is Y2K, not corporate.
- **Section divider (slide-section-divider).** Flip to gunmetal ink. A giant chrome-beveled number `01 / 02` fills the frame, chrome-white label beneath. The dark page is the breath between bright acts.
- **Stat hero (slide-stat-hero).** Pearl canvas, one colossal Space Mono figure (the number in electric blue), unit small beside it. 一页一句话 taken literally — a single metric owns the whole slide.
- **Quote (slide-quote).** Full-bleed bubblegum pink, deep-plum display text, one word inside the line lifted to chrome. This is the emotional peak — the loudest color in the whole system, spent all at once.
- **Closing (slide-closing).** Full-bleed electric blue, white CTA, one pill button. The action is unmissable because the entire slide is the brand's one interactive color.

Deck rhythm: light → dark → light → hot pink → electric blue. It breathes, it peaks on the pink quote, it lands hard on the blue call to action.

## Signature Moment

**UI — Mercury Sparkle Button (水银星芒按钮).** The primary CTA is not a flat blue pill. It is mercury: a layered silver-to-electric-blue chrome gradient reading as a reflected horizon on curved metal, a static silver highlight lip along the top edge, and exactly **one four-point star glint** parked at the top-left corner. On hover the glint scales up (`transform` only, never an animated shadow); the metal itself stays still. It looks like a drop of liquid chrome you could press into. Swap the template and this button is gone — no generic system produces beveled mercury with a single deliberate sparkle.

**Deck — Chrome Hero Word in a Blob (铬字浮泡封面).** The cover's visual hammer is one word set in Baloo 2 800 with `background-clip: text` filling it with the silver→blue chrome gradient, floated inside an asymmetric organic blob, crowned by a lone star glint. Chrome letterform + blob container + sparkle — the three signature moves fused into a single object that is unmistakably 千禧金属 and reproducible on no other template.

## Do's and Don'ts

**Do**
- Keep electric blue as the *only* interactive color, so pressability is instantly legible.
- Spend bubblegum pink exactly once per view — one chip, one quote slide.
- Treat chrome silver as a material (bevels, hairlines, gradient sweeps), never a flat fill.
- Let one blob break the grid; keep everything else on strict alignment.
- Ship exactly one star glint per composition. Two is confetti.

**Don't**
- **Don't touch the purple-blue AI gradient** (`#667eea → #764ba2`) or any of its family. This system's blue is `#4d5bff` on solid grounds, never that cliché wash.
- **Don't build the centered-card trilogy** — title, gray subtitle, three equal rounded cards repeating down the page. Break symmetry with blobs and off-axis nav.
- **Never render Chinese in a Japanese font** (Mochiy, Zen Maru). Simplified glyphs must land on Noto Sans SC / PingFang SC.
- **Don't animate shadows or glows.** Chrome bevels and star glints are static; only `transform`/`opacity` move.
- Don't multiply candy colors, don't chrome-treat body text, don't blob everything.

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| ≥1200px | 12-col grid, floating nav pill, hero blob bleeds past a column. |
| 768–1199px | 8-col, feature cards stack to two-up, hero word `clamp()`-scales. |
| ≤767px | Single column re-narration: nav collapses to a chrome pill + sheet, hero word drops to one manually-broken line locked with `white-space: nowrap`, blob recenters. |

Mobile is a **re-composition, not a shrink**. The hero word is re-broken by hand and size-clamped so it never drops a lone character to its own line (zero orphan rule); the deck's full-bleed color slides simply restack their single sentence. Chinese widths are constrained in `em`/`px`, never `ch` (which is Latin-narrow and would force early wraps and orphans). All motion respects `prefers-reduced-motion: reduce` — the hover glint and any float animation switch off cleanly.

## Anti-Slop Pledge

Strip the name off this system and it still reads as built, not generated: mercury-beveled pills, a hand-tuned silver-to-blue chrome sweep on rounded glyphs, one deliberate star glint, one blob breaking a strict grid, and a hot-pink quote slide spent exactly once. No template ships liquid chrome with this much restraint. — HeiGe-Design
