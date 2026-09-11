# Personalization Plan — ARD NABTA BUILDING CONTRACTING L.L.C

## Key finding first

The current site is built (per `plan.md`) as a fictional **structural
steel / pre-engineered building manufacturer** ("Ferrum Steel") — hero copy,
products (Steel Decking, Crane Bridge Girders...), services (Structural
Design, Fabrication, Erection), and projects (airport terminals, metro rail,
power stations) are all steel-fabrication content.

The data you provided — 3 Dubai Municipality building-completion
certificates and 11 site photos — shows ARD NABTA is a **general/residential
building contractor** (DM contractor license **1151140**), doing new villa
construction and villa extensions/modifications in Hatta, Dubai, including
work for Mohammed Bin Rashid Housing Establishment beneficiaries (government
housing). Photos confirm this: finished villa exteriors, stonework facades,
gates/fencing, interior ceiling/AC/bathroom fit-out — no steel fabrication.

**This means the rewrite isn't a rebrand — it's a re-positioning.** Products,
services, nav labels, hero copy, and About copy all need to change meaning,
not just the brand name. The plan below reflects that.

---

## What you provided

| Item | Content | Use |
|---|---|---|
| Company name | ARD NABTA BUILDING CONTRACTING L.L.C. (Arabic: أرض نبتة لمقاولات البناء ش.ذ.م.م) | `SITE_NAME` |
| Phone | 0525079810 | `CONTACT.phone` / `phoneHref` |
| Email | ahmed.musa@ardnabta.com | `CONTACT.emailInfo` |
| 3 PDFs | Dubai Municipality "Building Completion Certificates" (2 full completion, 1 modification/extension) for villas in Hatta — contractor license 1151140 | Proof-of-registration / credibility, **not** for direct publishing (see Missing & Important) |
| 11 photos + 1 video | Real villa construction: finished exteriors (2 distinct villa styles), stonework facade in-progress, boundary wall, interior ceiling/AC, finished bathroom, side alley/window detail | Hero image, project gallery, About section |

---

## Step-by-step: where this data goes

1. **`lib/constants.ts`** — swap in real values:
   - `SITE_NAME` → "Ard Nabta Building Contracting"
   - `SITE_TAGLINE` → replace "Structural Steel & Pre-Engineered Buildings" with a contracting-accurate line (draft: "General Building Contracting & Villa Construction")
   - `SITE_URL` → real domain (see Missing & Important — confirm `ardnabta.com` is actually live/owned)
   - `CONTACT.phone` / `phoneHref` → `0525079810` / `tel:+971525079810`
   - `CONTACT.emailInfo` → `ahmed.musa@ardnabta.com`
   - `CONTACT.address` → blocked, not provided (see below)
   - `SOCIAL_LINKS` → blocked, none provided (either omit the footer social row or leave placeholders hidden)

2. **`lib/data/products.ts`** (functionally "what we build") — replace the
   6 steel products with contracting offerings inferred from the
   certificates: **New Villa Construction**, **Building Extensions &
   Modifications**, **Interior Fit-Out & Finishing**, **Boundary Walls &
   External Works**. This list is a best guess from 3 documents — confirm
   with the company before publishing (see Missing & Important).

3. **`lib/data/services.ts`** — replace Structural Design / Fabrication /
   Erection with the contracting equivalent (e.g. Design & Permitting
   Liaison, Construction, Renovation & Extension) — same caveat, needs
   confirmation of actual service scope.

4. **`lib/data/projects.ts`** — replace the 4 fictional megaprojects with
   real villa projects built from your photos. Problem: the certificates
   name the *property owners* (private individuals), not marketable project
   names — see privacy note below. Plan: label projects generically
   ("Private Villa — Hatta") unless you supply owner-approved project
   names/locations to use publicly.

5. **`lib/data/news.ts`** — no real news/milestones were provided (ISO
   certification, expo attendance are fictional placeholders). Recommend
   removing this section for v1 rather than inventing content, or replacing
   with real, verifiable items if you have any (e.g. "Completed villa
   project in Hatta, June 2026" using the real completion dates from the
   certificates).

6. **Hardcoded copy that data files don't drive** (needs manual rewrite,
   not just a constants swap):
   - `components/sections/Hero.tsx` — eyebrow line and H1/subhead are
     hardcoded steel-manufacturer copy.
   - `components/sections/AboutTeaser.tsx` — paragraph literally says
     "full-service structural steel manufacturer."
   - `components/sections/LeadershipQuote.tsx` — fictional CEO "Amir
     Farouk" + quote about "structural steel." Needs a real name/title/quote
     or should be removed if no leadership photo/quote is supplied.
   - `components/sections/StatsBar.tsx` — placeholder stats (`[XX]+ Years`,
     `ISO [XXXX] Certified`) — needs real numbers or removal of stats that
     can't be verified.

7. **Images** (`public/images/**`) — replace SVG placeholders with real
   photos from `ard_nabta_content/`:
   - `hero/` → one of the finished-villa exterior shots (the white
     arched-portico villa or the two-tone stone villa are the strongest
     hero candidates — high enough quality, well-composed)
   - `projects/` → the villa photo set, captioned per project once names
     are confirmed
   - `about/` → an in-progress or interior fit-out shot works well to show
     construction quality
   - `leadership/` → blocked, no portrait provided
   - `logo/` → blocked, no logo file provided
   - Photos need renaming (currently `PHOTO-2026-09-10-...` /
     `WhatsApp Image...`) and resizing/compressing for web use — Next
     `next/image` will handle responsive sizing but source files should be
     reasonably optimized first.
   - The video (`VIDEO-2026-09-10-15-41-41.mp4`) isn't used by any current
     component — optional bonus if you want a hero background video or a
     short project reel later (v2, not required for v1).

8. **`app/opengraph-image.png` / `.alt.txt`** — currently branded for
   Ferrum Steel; regenerate once real brand assets (logo/colors) exist.

9. **`README.md` / `package.json` `name` field** — cosmetic, low priority,
   still reference "Ferrum Steel" internally.

---

## Missing — important

- **Service scope confirmation.** The 3 certificates only prove villa
  construction + one extension job. Before I write "what we do" copy, I'm
  guessing at the full offering (fit-out? commercial work? landscaping?
  government contracts specifically, or also private clients?). Wrong scope
  copy undersells or misrepresents the company.
- **Privacy/legal: don't publish the certificates as-is.** They contain
  private individuals' full names, plot numbers, and personal building
  details (villa owners who are not ARD NABTA). Publishing these documents
  or the owner names publicly on a marketing site is a personal-data
  exposure risk without their consent. Recommend: cite the **contractor
  license number (1151140)** and "Dubai Municipality registered contractor"
  as a trust signal, without showing the actual certificate images or owner
  names — or get the property owners' explicit permission first if you want
  to name/show specific projects.
- **Real, publishable project names/locations.** Related to the above —
  need project labels you're allowed to use publicly (area/community name is
  usually fine; owner name usually isn't, without consent).
- **Company logo.** No logo file was provided — every layout (header, footer,
  favicon, OG image) currently uses a Ferrum Steel placeholder mark.
- **Physical/office address.** Needed for the footer, contact section, and
  ideally a Google Maps embed / local SEO (Google Business Profile) —
  nothing was provided.
- **Confirmed live domain.** Email domain is `ardnabta.com` — confirm that
  domain is actually registered and intended for the website (`SITE_URL`,
  sitemap, and OG tags all depend on this being correct).
- **Real, verifiable stats** for the stats bar (years in operation, number
  of completed projects, trade license/registration date) — currently
  placeholders like `[XX]+ Years`; publishing an unverifiable stat is worse
  than omitting it.
- **A leadership name/photo/quote** (or a decision to drop that section) —
  currently a fictional CEO with a fabricated quote.

## Missing — not important (can launch without)

- Social media links (Instagram/Facebook/LinkedIn/YouTube) — can hide the
  footer social row until accounts exist.
- News/press section content — fine to omit for v1.
- Landline number — mobile number alone is enough for a contact CTA.
- Using the provided video — nice bonus later, no component currently
  supports it and it's not needed for a v1 launch.
- Exact/polished stat figures — round, conservative numbers are fine
  initially as long as they're true; precision can improve later.
- `package.json` name field / README internal references — purely cosmetic,
  invisible to site visitors.

---

## Suggested next step

I'd confirm the flagged "important" items with you (service scope,
publishable project names, logo, address, real stats) before writing final
copy — otherwise I'll be guessing at business facts. Once those are
answered, I can implement steps 1–8 above directly.
