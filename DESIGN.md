# Ard Nabta — Design System

**Reading this as:** contractor marketing site for Dubai villa owners — decisive industrial-brutalist language (The Verge neon-brutalist family, remapped to construction), not soft SaaS.

**References:** taste-skill `design-taste-frontend` + `industrial-brutalist-ui` · awesome-claude-design `design-md/brutalist/the-verge.md`

**Dials:** `DESIGN_VARIANCE: 8` · `MOTION_INTENSITY: 5` · `VISUAL_DENSITY: 3`

## Palette

```
--bg:            #FFFFFF
--ink:           #0A0A0A
--muted:         #5C5C5C
--rule:          #0A0A0A
--accent:        #FF6A00   /* hazard / site orange — sole chroma */
--accent-hover:  #E55E00
--inverse:       #0A0A0A
--inverse-text:  #FFFFFF
```

One accent. Black rules. No purple, teal, glass, or warm cream paper.

## Type

- **Display:** Archivo Black — enormous, tight, often uppercase
- **Body:** Space Grotesk — 16–18px, max ~58ch
- **Meta:** JetBrains Mono — license IDs, indices, dates

Scale: 13 / 16 / 20 / 28 / 44 / 72 / 108 / clamp to viewport. Headlines are structural architecture.

## Geometry

- Radius: **0** everywhere
- Rules: **2px** black (or white on inverse)
- No shadows, blur, or soft elevation
- Depth = inversion + scale contrast only

## Layout

- Full-bleed sections; aggressive black ↔ white inversion
- Asymmetric grids; oversized numerals as anchors (`01`, `02`)
- No three equal icon cards; no centered SaaS hero stack
- Max width 1400px for text bands; media can bleed

## Motion

- Scroll progress bar (accent) at the top of the viewport — Motion `useScroll` + spring
- Scroll reveals via Motion `whileInView` (fade + short slide) on section blocks
- Staggered list / fact entrances on hero and about
- Button press: `scale(0.98)` ≤120ms; color snaps ≤150ms
- Nav underline draw (accent) on hover; mobile menu height reveal
- Media frames: clipped 4% image zoom on hover (no float / parallax / card lift)
- Process rows invert to ink on hover
- `prefers-reduced-motion` disables reveals, springs, zooms, and menu motion

## Copy

- Concrete verbs: Request a Quote · Call Site Office · See Built Work
- No “Welcome”, “Elevate”, “seamless”, “Learn More”
- DM registration stated in plain copy, not as a graphic number badge

## Reject

Inter · rounded corners · purple/teal · glass · cream/terracotta · emoji · identical 3-up feature cards · soft gray borders
