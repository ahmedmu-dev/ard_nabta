# [BRAND_NAME] — Steel & Structural Construction Landing Page: Planning Document

> Status: **Planning only.** No code has been written yet. This document is the spec to build from in a future session.
> Brand name is undecided — every occurrence of `[BRAND_NAME]` below is a find-and-replace placeholder for the real company name once supplied.

---

## 1. Project Overview

This document plans a new marketing/landing page website for **[BRAND_NAME]**, a fictional structural-steel and pre-engineered-building manufacturer serving construction and infrastructure clients (metros, airports, malls, factories, power plants, warehouses, etc.) across the Middle East, expanding into Africa. The site's structure and information architecture are inspired by the reference site [ebsl.com](https://www.ebsl.com/) (Emirates Building Systems) — a conservative, image-heavy, mega-nav corporate site typical of the industry — but **[BRAND_NAME] is an entirely independent, invented company**. No EBS branding, parent-company references, project names, or client names are reused anywhere in this plan; all company-specific content below is clearly fictional placeholder/sample copy to be swapped before launch. Product category names (e.g. "Structural Steel," "Pre-Engineered Buildings") are kept as-is since they're generic industry terms, not EBS brand names. The build target is a fast, professional, single-brief Fiverr-scale deliverable: a polished Next.js homepage in v1, with a clear path to a fuller multi-page site in v2.

---

## 2. Tech Stack & Tooling

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** + React + TypeScript | Already decided by client; supports metadata API, image optimization, easy route expansion for v2, deploys cleanly to Vercel. |
| Styling | **Tailwind CSS** (utility-first) | Fast to build and iterate on a fixed-scope gig; no CSS-in-JS overhead. Follow this environment's react-expert conventions: TypeScript strict mode, App Router, Tailwind utility classes co-located in component files, `tailwind.config.ts` as the single source of design tokens, no ad-hoc CSS modules unless a utility genuinely can't express something. |
| Icons | **lucide-react** | Lightweight, tree-shakeable, covers nav/social/UI icons (phone, mail, chevrons, socials) without a heavy icon-font dependency. |
| Fonts | **`next/font/google`** | Self-hosted Google Fonts with zero layout shift and automatic `font-display: swap`; no external font CDN call needed. |
| Images | **`next/image`** | Automatic resizing/format negotiation (WebP/AVIF), lazy loading below the fold, required for the image-heavy product/project sections. |
| Carousel (optional, v2) | Skip for v1 | Reference site's project lists work fine as a responsive grid; adding a carousel library (embla/swiper) is an unnecessary dependency for a v1 landing page. Revisit only if the client specifically wants a slider for Featured Projects. |
| Forms | Static UI in v1; wire to **Formspree** or a simple Next.js Route Handler + transactional email service (e.g. Resend) in v1.5/v2 | Keeps v1 scope to front-end only; avoids building backend infra the gig hasn't asked for yet. |
| Linting/Formatting | ESLint (Next.js default config) + Prettier | Standard, low-maintenance. |
| Deployment | **Vercel** | Native Next.js support, zero-config, free tier sufficient for a marketing site. |

**Deliberately excluded for v1**: CMS (Sanity/Contentful), database, auth, analytics beyond a single Vercel Analytics or GA4 snippet, animation libraries (Framer Motion optional nice-to-have only, not required). Keep the dependency list lean — this is a fixed-scope, early-review Fiverr gig, not a platform build.

---

## 3. Information Architecture / Sitemap

Full nav mirrors the reference site's structure. **V1 scope decision**: ship one robust, well-built homepage covering Home, Products, Services, a Projects preview, an About teaser, and Contact — all as in-page sections/anchors. Defer full standalone routes (About, Products, Services, Projects, Clients, News, Careers, Contact as separate pages with sub-pages) to v2. Rationale: a single homepage that covers 80% of what a prospective client needs (who you are, what you make, proof of work, how to reach you) ships faster, is easier to review/approve on a fixed-price gig, and every v2 route can be added later without restructuring the homepage — the nav config below is already written as if v2 routes exist, so the switch from anchor to route is a one-line change per nav item.

| Nav Item | v1 Treatment | v2 Treatment |
|---|---|---|
| Home | `/` (the homepage itself) | same |
| About Us | Anchor `#about` (teaser section on homepage) | Full route `/about` + sub-pages: The Company, Leadership Team, Mission/Vision/Values, CEO's Message, Client Advantage, HSE/ISO Certificates |
| Products | Anchor `#products` (grid on homepage) | Full route `/products` + `/products/[slug]` detail pages for each of the 6 product lines |
| Services | Anchor `#services` (cards on homepage) | Full route `/services` + `/services/[slug]` for Structural Design, Fabrication, Erection |
| Projects | Anchor `#projects` (featured preview on homepage) | Full route `/projects` with 12 category filters + `/projects/[slug]` case studies |
| Client List | Not in v1 nav (folded into homepage social proof, if used) | Full route `/clients` (Clients logos + Testimonials) |
| News | Anchor `#news` (latest 3 items on homepage) | Full route `/news` + `/news/[slug]` |
| Careers | Not in v1 nav | Full route `/careers` with listings |
| Contact Us | Anchor `#contact` (form + info on homepage) | Full route `/contact`, possibly with a map embed |

**v1 top-level nav (desktop mega-nav simplified to anchor links):** Home · About · Products · Services · Projects · News · Contact — plus a "Get a Quote" CTA button.

---

## 4. Section-by-Section Homepage Breakdown

Each section below includes purpose, layout pattern, sample placeholder copy (realistic but clearly fictional — flagged for replacement in the Section 8 checklist), and the component it maps to.

### 4.1 Top Contact Bar
- **Purpose**: Quick-glance trust signals and contact info above the fold, matching the reference site's convention.
- **Layout**: Thin full-width strip, dark background, flex row — phone/email on the left, social icons on the right. Collapses to just social icons (or hides entirely) on mobile to save vertical space.
- **Content**: `+971 [XX] XXX XXXX` · `info@[brandname].com` (placeholder domain) · social icons (LinkedIn, Instagram, Facebook, YouTube — X/Twitter optional, industry relevance is lower now). **No parent-company badge** — [BRAND_NAME] is independent, so the EBS-style "a [Parent Co] subsidiary" badge is dropped entirely. Optional replacement: a small "ISO 9001:2015 Certified" text badge (placeholder, confirm real certification before use).
- **Component**: `TopBar.tsx`

### 4.2 Main Navigation
- **Purpose**: Primary wayfinding; anchors to homepage sections in v1, will point to real routes in v2.
- **Layout**: Sticky header, logo left, nav links center/right, "Get a Quote" button far right, hamburger menu on mobile (`<1024px`).
- **Content**: Logo wordmark `[BRAND_NAME]` (placeholder logo mark until real logo supplied) + nav items per Section 3.
- **Component**: `Header.tsx` (wraps `Logo.tsx`, `Nav.tsx`, `MobileMenu.tsx`)

### 4.3 Hero
- **Purpose**: Immediate positioning statement — what the company does, for whom, with a clear next action.
- **Layout**: Full-width section, large background image (steel fabrication yard or structural frame, dark overlay for text contrast) or a two-column layout with headline/copy left and hero image right. Two CTAs.
- **Sample copy**:
  - Eyebrow: `STRUCTURAL STEEL & PRE-ENGINEERED BUILDINGS`
  - H1: `Building the Steel Frameworks Modern Infrastructure Stands On`
  - Paragraph: `[BRAND_NAME] designs, fabricates, and erects structural steel and pre-engineered buildings for the region's most demanding infrastructure, industrial, and commercial projects. From first sketch to final bolt, our in-house engineering and fabrication teams deliver steel structures built to last generations.`
  - Primary CTA: `Get a Quote` → `#contact`
  - Secondary CTA: `View Our Work` → `#projects`
  - Optional stat strip beneath hero (placeholder values): `[XX]+ Years in Operation` · `[XXX]+ Projects Delivered` · `[X] Countries Served` · `ISO [XXXX] Certified`
- **Component**: `Hero.tsx` (+ optional `StatsBar.tsx`)

### 4.4 Products Grid
- **Purpose**: Show product-line breadth at a glance, matching the reference's 6-card grid.
- **Layout**: Responsive grid — 1 col mobile, 2 col tablet, 3 col desktop. Each card: image, product name, one-line description, subtle hover state.
- **Content** (6 cards, generic industry terms retained per brief):

| Product | Sample one-line description |
|---|---|
| Structural Steel | Custom-engineered steel frameworks fabricated to project-specific load and design requirements. |
| Pre-Engineered Buildings | Fast-track, factory-fabricated steel buildings optimized for cost and speed of erection. |
| Building Subsystems | Mezzanines, crane systems, and secondary structures integrated into your primary steel frame. |
| Sheeting Systems | Roof and wall cladding systems engineered for weather performance and thermal efficiency. |
| Steel Decking | Composite and non-composite decking solutions for floor and roof slab construction. |
| Crane Bridge Girders | Heavy-duty girders engineered for industrial crane systems and material-handling loads. |

- **Component**: `ProductGrid.tsx` (maps over `ProductCard.tsx`)

### 4.5 Featured Projects
- **Purpose**: Social proof / portfolio credibility — the section that does the most persuasive work on a B2B industrial site.
- **Layout**: Grid or 2-column list, each entry: project thumbnail, project name, client/sector tag, short one-liner.
- **Sample content (fictional placeholders — flagged for replacement)**:

| Project (fictional placeholder) | Sector | One-liner |
|---|---|---|
| Meridian Metro Rail Extension | Transit | Structural steel package for 4 elevated station platforms. |
| Falcon Bay International Airport — Terminal 3 | Aviation | Roof steel and cladding for a 45,000 m² terminal expansion. |
| Horizon Logistics Hub | Warehousing | Pre-engineered building package across 6 warehouse units. |
| Crescent Power Station Upgrade | Energy | Structural steel support for turbine hall retrofit. |

- **Component**: `FeaturedProjects.tsx` (maps over `ProjectCard.tsx`)

### 4.6 Leadership Message
- **Purpose**: Humanize the brand, signal experience and stability — mirrors the reference's Chairman's Message.
- **Layout**: Two-column — portrait photo left/right, short quote and name/title opposite.
- **Sample copy (fictional name, clearly a placeholder)**:
  > "Every project that carries the [BRAND_NAME] name reflects the same standard we set on day one: engineering integrity, on-time delivery, and steel you can trust for decades. That commitment is what's taken us from a single fabrication yard to a regional name in structural steel."
  > — **Amir Farouk (placeholder name), Chief Executive Officer**
- **Component**: `LeadershipQuote.tsx`

### 4.7 About Teaser
- **Purpose**: v1 substitute for the full `/about` route — short company positioning + link to more (v2).
- **Layout**: Simple two-column or centered text block with a supporting image.
- **Sample copy**: `Founded on a commitment to precision engineering, [BRAND_NAME] has grown into a full-service structural steel manufacturer — combining in-house design, fabrication, and erection under one roof. We hold ourselves to international HSE and quality standards on every project, from single-story warehouses to multi-terminal airports.`
- **Component**: `AboutTeaser.tsx`

### 4.8 Services
- **Purpose**: Clarify the three service pillars, matching the reference's 3-card layout.
- **Layout**: 3-column card grid (stacks to 1 column on mobile), icon + title + short description each.

| Service | Sample description |
|---|---|
| Structural Design | In-house engineering team delivers structural analysis and design optimized for cost, speed, and code compliance. |
| Fabrication | State-of-the-art fabrication facilities producing precision steel components at scale. |
| Erection | Experienced field crews handle safe, on-schedule erection from foundation to final steel. |

- **Component**: `ServicesSection.tsx` (maps over `ServiceCard.tsx`)

### 4.9 News
- **Purpose**: Signals an active, credible business (recency = trust) — v1 shows latest 3 only.
- **Layout**: Simple reverse-chronological list or 3-card row, date + headline + one-line summary.
- **Sample content (fictional placeholders)**:
  - `[Month] 2026 — [BRAND_NAME] Completes Structural Steel Package for Horizon Logistics Hub`
  - `[Month] 2026 — [BRAND_NAME] Achieves ISO 3834 Welding Certification`
  - `[Month] 2026 — [BRAND_NAME] to Exhibit at Middle East Steel & Construction Expo 2026`
- **Component**: `NewsList.tsx` (maps over `NewsCard.tsx`)

### 4.10 Contact CTA / Footer Contact
- **Purpose**: Convert interest into an inquiry — final call to action before the footer.
- **Layout**: Full-width banner or two-column (form left, contact info/map right).
- **Content**: Short form (Name, Email, Phone, Message) + direct contact info repeated (`+971 [XX] XXX XXXX`, `sales@[brandname].com`, placeholder address `[Street], [City], [Country]`).
- **Component**: `ContactCTA.tsx` (wraps `ContactForm.tsx`)

### 4.11 Footer
- **Purpose**: Secondary navigation, legal, and final trust signals, matching the reference's multi-column footer.
- **Layout**: 4-column grid on desktop (About links, Products links, Services links, Projects categories) collapsing to accordion/stacked on mobile, with a bottom bar for copyright/legal/social.
- **Content**: Link columns per Section 3 sitemap · social icons (repeat from top bar) · `© 2026 [BRAND_NAME]. All rights reserved.` · `Privacy Policy` · `Terms & Conditions` · `Sitemap` · phone/email repeated · optional small "Site by [Developer/Freelancer Name]" credit line (only if the freelancer wants attribution — confirm before including).
- **Component**: `Footer.tsx`

---

## 5. Component Breakdown

| Component | Path | Responsibility |
|---|---|---|
| `TopBar` | `components/layout/TopBar.tsx` | Renders contact strip + social icons above the header. |
| `Header` | `components/layout/Header.tsx` | Sticky wrapper containing logo, `Nav`, CTA button, `MobileMenu` trigger. |
| `Nav` | `components/layout/Nav.tsx` | Desktop nav links, handles anchor vs. route logic from a shared nav config. |
| `NavDropdown` | `components/layout/NavDropdown.tsx` | Reusable dropdown/mega-menu item (used in v2 when Products/Services/Projects become real routes with sub-items). |
| `MobileMenu` | `components/layout/MobileMenu.tsx` | Slide-in/collapsible mobile nav, keyboard/focus-trap accessible. |
| `Footer` | `components/layout/Footer.tsx` | Multi-column footer, legal bar, social icons. |
| `Hero` | `components/sections/Hero.tsx` | Headline, subhead, dual CTA, background image. |
| `StatsBar` | `components/sections/StatsBar.tsx` | Optional strip of key stats under the hero. |
| `ProductGrid` | `components/sections/ProductGrid.tsx` | Section wrapper + heading for the 6-item product grid. |
| `ProductCard` | `components/sections/ProductCard.tsx` | Single product image/name/description card. |
| `FeaturedProjects` | `components/sections/FeaturedProjects.tsx` | Section wrapper for the project preview grid/list. |
| `ProjectCard` | `components/sections/ProjectCard.tsx` | Single project thumbnail/name/sector/one-liner card. |
| `LeadershipQuote` | `components/sections/LeadershipQuote.tsx` | Portrait + quote + name/title block. |
| `AboutTeaser` | `components/sections/AboutTeaser.tsx` | Short company blurb + supporting image. |
| `ServicesSection` | `components/sections/ServicesSection.tsx` | Section wrapper for the 3 service cards. |
| `ServiceCard` | `components/sections/ServiceCard.tsx` | Single service icon/title/description card. |
| `NewsList` | `components/sections/NewsList.tsx` | Section wrapper for latest news items. |
| `NewsCard` | `components/sections/NewsCard.tsx` | Single news date/headline/summary block. |
| `ContactCTA` | `components/sections/ContactCTA.tsx` | Final CTA banner + `ContactForm` + contact info. |
| `ContactForm` | `components/sections/ContactForm.tsx` | Controlled form UI (name/email/phone/message), submit handler stubbed for v1. |
| `Button` | `components/ui/Button.tsx` | Shared primary/secondary/outline button variants. |
| `SectionHeading` | `components/ui/SectionHeading.tsx` | Consistent eyebrow + heading + optional subtext pattern used across sections. |
| `Container` | `components/ui/Container.tsx` | Max-width/padding wrapper for consistent horizontal rhythm. |
| `Badge` | `components/ui/Badge.tsx` | Small pill used for sector tags, certifications, "New" labels on news items. |

---

## 6. Design System

> All values below are **recommendations/placeholders**, not final brand decisions — swap freely once a real brand identity exists.

### 6.1 Color Palette Options

Reference site (EBS) reads as a conservative navy-corporate palette. [BRAND_NAME] should look distinctly different while staying trustworthy/industrial. Three options, pick one as default:

**Option A — Steel Graphite + Safety Amber (recommended default)**

| Token | Hex | Use |
|---|---|---|
| `primary` (graphite) | `#1C2229` | Header/footer backgrounds, dark section backgrounds |
| `primary-muted` (slate) | `#3A4552` | Secondary text on dark, borders |
| `accent` (safety amber) | `#F2A71B` | CTAs, links, highlights, hover states |
| `accent-dark` | `#D68C0A` | Button hover/active state |
| `background` | `#FFFFFF` | Default page background |
| `surface` | `#F5F6F7` | Alternating section backgrounds, card backgrounds |
| `text-body` | `#3F454B` | Body copy |
| `text-heading` | `#1C2229` | Headings |

*Rationale*: Amber/safety-orange is a natural industrial-construction accent (hard-hat/safety signage association) and is visually distinct from EBS's navy-blue system.

**Option B — Deep Teal + Warm Bronze**

| Token | Hex | Use |
|---|---|---|
| `primary` | `#0B3D3E` | Dark backgrounds |
| `primary-muted` | `#145252` | Secondary dark surfaces |
| `accent` (bronze) | `#C08552` | CTAs, links, highlights |
| `accent-dark` | `#A06B3E` | Hover/active state |
| `background` | `#FFFFFF` | Page background |
| `surface` | `#F4F6F5` | Alternating sections |
| `text-body` | `#33403F` | Body copy |
| `text-heading` | `#0B3D3E` | Headings |

**Option C — Graphite + Electric Blue**

| Token | Hex | Use |
|---|---|---|
| `primary` | `#14181C` | Dark backgrounds |
| `primary-muted` | `#2E3540` | Secondary dark surfaces |
| `accent` (electric blue) | `#2D9CFF` | CTAs, links, highlights |
| `accent-dark` | `#1580E0` | Hover/active state |
| `background` | `#FFFFFF` | Page background |
| `surface` | `#F3F5F7` | Alternating sections |
| `text-body` | `#3A4048` | Body copy |
| `text-heading` | `#14181C` | Headings |

**Default recommendation: Option A (Steel Graphite + Safety Amber)** — most differentiated from the navy-corporate reference look while still reading as serious/industrial. Options B and C are drop-in Tailwind config swaps (just change the token hex values) if the client prefers a cooler or bluer feel.

### 6.2 Typography

- **Headings**: `Oswald` (Google Font via `next/font/google`) — a condensed, bold industrial sans that reads well in all-caps for eyebrows/labels and strong for H1–H3.
- **Body**: `Inter` (Google Font via `next/font/google`) — highly legible, neutral, standard for body copy and UI text.

| Element | Size (mobile → desktop) | Weight |
|---|---|---|
| H1 | `2rem → 3.25rem` | 600–700 (Oswald) |
| H2 | `1.5rem → 2.25rem` | 600 (Oswald) |
| H3 | `1.25rem → 1.5rem` | 500 (Oswald) |
| Body | `1rem` | 400 (Inter) |
| Small/eyebrow | `0.75rem–0.875rem`, uppercase, letter-spaced | 500–600 (Oswald or Inter) |

### 6.3 Spacing & Breakpoints

- Use Tailwind defaults: `sm 640px`, `md 768px`, `lg 1024px`, `xl 1280px`, `2xl 1536px`.
- Section vertical padding: `py-16` mobile, `py-24` desktop.
- Content container: `max-w-7xl` (1280px), horizontal padding `px-6` mobile, `px-8` desktop.
- Card grid gaps: `gap-6` mobile, `gap-8` desktop.

### 6.4 Buttons & CTAs

- **Primary**: solid `accent` background, dark text (Option A) or white text depending on contrast check, rounded `rounded-md`, hover darkens to `accent-dark`, visible `focus-visible` ring in a contrasting color.
- **Secondary**: outline style — 1–2px border in `primary` or white (on dark backgrounds), transparent background, fills on hover.
- Consistent padding (`px-6 py-3`), consistent type (Oswald, uppercase or title-case, letter-spaced).

### 6.5 Cards

- White/`surface` background, subtle `border` or `shadow-sm`, `rounded-lg`, image at a fixed aspect ratio (e.g. `aspect-[4/3]`) via `next/image` with `fill`, hover state = slight lift (`hover:-translate-y-1`) + shadow increase, consistent internal padding.

---

## 7. Next.js Project Structure

```
[brand-name]-site/
├── app/
│   ├── layout.tsx                # Root layout: fonts, metadata defaults, TopBar/Header/Footer wrap
│   ├── page.tsx                  # v1 homepage — assembles all sections in order
│   ├── globals.css               # Tailwind directives + minimal global resets
│   ├── sitemap.ts                # Next.js sitemap generation (App Router convention)
│   ├── robots.ts                 # Next.js robots.txt generation
│   ├── opengraph-image.png       # Static OG image for v1 (or opengraph-image.tsx for dynamic, v2)
│   │
│   ├── about/                    # v2
│   │   └── page.tsx
│   ├── products/                 # v2
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── services/                 # v2
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── projects/                 # v2
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── clients/                  # v2
│   │   └── page.tsx
│   ├── news/                     # v2
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── careers/                  # v2
│   │   └── page.tsx
│   └── contact/                  # v2
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx
│   │   ├── Header.tsx
│   │   ├── Nav.tsx
│   │   ├── NavDropdown.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── LeadershipQuote.tsx
│   │   ├── AboutTeaser.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── NewsList.tsx
│   │   ├── NewsCard.tsx
│   │   ├── ContactCTA.tsx
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       ├── Container.tsx
│       └── Badge.tsx
│
├── lib/
│   ├── data/
│   │   ├── nav.ts                # Single source of truth for nav items (anchor vs route aware)
│   │   ├── products.ts           # 6 product entries (placeholder copy + image refs)
│   │   ├── projects.ts           # Featured project entries (placeholder)
│   │   ├── services.ts           # 3 service entries
│   │   └── news.ts               # News items (placeholder)
│   ├── constants.ts              # Site name, contact info, social links (all placeholder)
│   └── types.ts                  # Shared TS types (Product, Project, Service, NewsItem, NavItem)
│
├── public/
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── products/
│       ├── projects/
│       ├── leadership/
│       └── news/
│
├── tailwind.config.ts            # Design tokens: colors, fonts, container, breakpoints
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md                     # Run instructions, env vars, deployment notes
```

---

## 8. Assets & Content Checklist

Everything below is placeholder in the plan and **must be supplied/confirmed before launch**:

- [ ] **Brand name** (replaces every `[BRAND_NAME]` token)
- [ ] **Logo** (SVG preferred, plus favicon set)
- [ ] **Final color palette** — confirm Option A, B, C above, or supply real brand colors
- [ ] **Font choice confirmation** — confirm Oswald/Inter pairing or supply brand fonts
- [ ] **Product photography** — 6 images (Structural Steel, Pre-Engineered Buildings, Building Subsystems, Sheeting Systems, Steel Decking, Crane Bridge Girders)
- [ ] **Project case studies** — real project names, clients (with permission to name them), locations, photos
- [ ] **Client logos** (with permission to display) — for a v2 `/clients` page or homepage social-proof strip
- [ ] **Leadership photo(s) & real bio/quote** — replaces the fictional "Amir Farouk" placeholder
- [ ] **Real phone number(s), email address(es), physical address**
- [ ] **Social media links** (LinkedIn, Instagram, Facebook, YouTube, etc. — confirm which are actually active)
- [ ] **News items** — real milestones, certifications, press, exhibition appearances
- [ ] **Careers listings** (if/when `/careers` route is built in v2)
- [ ] **Certifications** — ISO numbers, HSE certifications (only display real, verifiable ones)
- [ ] **Legal copy** — Privacy Policy and Terms & Conditions text
- [ ] **Google Analytics / Vercel Analytics ID** (if analytics desired)
- [ ] **Domain name** for deployment

---

## 9. SEO & Metadata

- **Root metadata**: Define defaults in `app/layout.tsx` via the Metadata API — `title` (with a template like `%s | [BRAND_NAME]`), `description`, `keywords` (light use), `metadataBase`, default Open Graph object (title, description, image, locale, type), Twitter card metadata.
- **Per-page metadata**: For v1, the homepage `page.tsx` sets its own specific `title`/`description` (overriding the template default). For v2 routes, each `page.tsx` exports its own `metadata` (or `generateMetadata` for dynamic `[slug]` routes pulling from `lib/data/*`).
- **Sitemap**: `app/sitemap.ts` using the App Router `MetadataRoute.Sitemap` convention — lists homepage in v1; add each v2 route as it's built.
- **Robots**: `app/robots.ts` — allow all, point to the sitemap URL.
- **Open Graph image**: Ship one static `opengraph-image.png` (1200×630) for v1 covering the homepage share preview. For v2, consider per-project/per-news dynamic OG images via `next/og`'s `ImageResponse` if sharing individual case studies becomes valuable — not needed for v1.
- **Structured data (optional, v2)**: `Organization` and `LocalBusiness` JSON-LD once real address/contact/logo exist — skip for v1 to avoid shipping placeholder structured data that misrepresents the business.

---

## 10. Accessibility & Performance Notes

**Accessibility**
- Semantic landmarks throughout: `header`, `nav`, `main`, `section` (with `aria-label` or heading per section), `footer`.
- One `h1` per page (in the Hero); logical heading hierarchy down through `h2`/`h3` for section and card titles.
- Alt text discipline: product images → `"[Product name] fabricated by [BRAND_NAME]"` pattern; project images → `"[Project name], [location/sector]"` pattern; decorative background images → empty `alt=""`.
- Mobile menu and any dropdown: full keyboard operability (Tab/Shift+Tab, Escape to close, focus trap while open, focus returns to trigger on close).
- Visible `focus-visible` rings on all interactive elements (links, buttons, form fields) — don't rely on default browser outline alone if it's being overridden.
- Form fields (Contact form) all have associated `<label>` elements, not placeholder-only labels.
- Color contrast: verify body text and button text/background combinations hit at least 4.5:1 (particularly check accent-on-white and white-on-accent combinations from Section 6.1 before finalizing).

**Performance**
- All images through `next/image` with explicit `sizes` and either `fill` + aspect-ratio wrapper or explicit `width`/`height` — no unoptimized `<img>` tags.
- Hero image: `priority` (above the fold); all other section images lazy-load by default.
- Keep bundle lean: no animation library, no carousel library, no icon-font — per Section 2.
- Target Lighthouse scores before calling v1 "done": Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100.
- Avoid layout shift: reserve space for images/cards via aspect-ratio classes so content doesn't jump as images load.

---

## 11. Build Milestones / Step-by-Step Order

- [ ] 1. Scaffold Next.js app (`create-next-app`, TypeScript, Tailwind, App Router, ESLint) inside `personal_projects/` or a dedicated repo.
- [ ] 2. Set up folder structure per Section 7 (`components/`, `lib/`, `public/images/` subfolders) with placeholder data files in `lib/data/`.
- [ ] 3. Configure design tokens: extend `tailwind.config.ts` with the Option A palette, set up `next/font` for Oswald + Inter, define container/breakpoint conventions.
- [ ] 4. Build the layout shell: `TopBar`, `Header`/`Nav` (desktop + `MobileMenu`), `Footer` — wire into `app/layout.tsx`.
- [ ] 5. Build `Hero.tsx` with placeholder copy from Section 4.3.
- [ ] 6. Build `ProductGrid.tsx` + `ProductCard.tsx`, populate from `lib/data/products.ts`.
- [ ] 7. Build `FeaturedProjects.tsx` + `ProjectCard.tsx`, populate from `lib/data/projects.ts`.
- [ ] 8. Build `LeadershipQuote.tsx`.
- [ ] 9. Build `AboutTeaser.tsx`.
- [ ] 10. Build `ServicesSection.tsx` + `ServiceCard.tsx`, populate from `lib/data/services.ts`.
- [ ] 11. Build `NewsList.tsx` + `NewsCard.tsx`, populate from `lib/data/news.ts`.
- [ ] 12. Build `ContactCTA.tsx` + `ContactForm.tsx` (form UI only for v1; wire to Formspree/API route when ready).
- [ ] 13. Assemble `app/page.tsx` — order all sections per Section 4, confirm scroll-anchors match nav links.
- [ ] 14. Add metadata: root `layout.tsx` defaults, homepage-specific metadata, `sitemap.ts`, `robots.ts`, static OG image.
- [ ] 15. Accessibility pass: landmarks, alt text, keyboard nav on mobile menu, focus states, label/contrast check.
- [ ] 16. Performance pass: confirm all images via `next/image`, run Lighthouse, trim any unused dependencies.
- [ ] 17. Responsive QA across 375px / 768px / 1280px+ breakpoints.
- [ ] 18. Content QA: swap in real brand name, logo, colors (if changed), and everything on the Section 8 checklist once supplied.
- [ ] 19. Deploy to Vercel: connect repo, set any env vars (e.g. Formspree endpoint/API keys), connect custom domain.
- [ ] 20. Plan v2: scope out and schedule the standalone routes (About, Products, Services, Projects, Clients, News, Careers, Contact) once v1 is approved and live.
