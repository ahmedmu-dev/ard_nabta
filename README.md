# Ferrum Steel — Homepage (v1)

Marketing homepage for **Ferrum Steel**, a fictional structural-steel and
pre-engineered-building manufacturer. Built from `plan.md` in this repo,
which is the full spec (sitemap, copy, component breakdown, design system).

> `Ferrum Steel` is a placeholder brand name chosen for this build — see
> "Before launch" below for what to swap once a real brand is supplied.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v3 (`tailwind.config.ts` is the source of design tokens)
- `lucide-react` for icons
- `next/font/google` — Oswald (headings) + Inter (body)
- `next/image` throughout, including local SVG placeholder images

## Getting started

Requires Node 20.9+ (Next.js 16 minimum).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build (Turbopack)
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
app/                   # layout.tsx, page.tsx, globals.css, sitemap.ts, robots.ts, OG image
components/
  layout/               # TopBar, Header, Nav, NavDropdown (v2), MobileMenu, Footer
  sections/             # Hero, ProductGrid, FeaturedProjects, LeadershipQuote,
                         # AboutTeaser, ServicesSection, NewsList, ContactCTA, ...
  ui/                   # Button, SectionHeading, Container, Badge
lib/
  data/                 # nav.ts, products.ts, projects.ts, services.ts, news.ts
  constants.ts          # brand name, contact info, social links
  types.ts
public/images/          # local SVG placeholder images (hero/products/projects/leadership/about)
```

v1 ships a single homepage with in-page anchor sections (`#about`,
`#products`, `#services`, `#projects`, `#news`, `#contact`). `lib/data/nav.ts`
is the single source of truth for nav items — flipping `isRoute` + `href`
there is the only change needed once v2 standalone routes exist.

## What's stubbed / not wired up

- **Contact form** (`components/sections/ContactForm.tsx`): UI + client-side
  validation only. Submitting shows a confirmation state but sends nothing
  anywhere. Wire it to Formspree or a Route Handler + email service (Resend,
  etc.) before launch.
- **Placeholder images**: `public/images/**` are locally generated SVG
  gradient blocks (brand-colored, correctly sized/aspect-ratioed), not real
  photography. Swap the files in place — `next/image` usage, sizing, and
  aspect ratios are already correct.
- **Favicon**: default Next.js icon (`app/favicon.ico`). Replace with a real
  favicon set once a logo exists.

## Before launch

See `plan.md` Section 8 for the full checklist. In short: real brand name,
logo, product/project photography, leadership photo/bio, real contact
details, verified certifications, legal copy (Privacy Policy / Terms), and a
domain — then re-point `lib/constants.ts` and `lib/data/*.ts` at the real
content.
