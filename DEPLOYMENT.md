# Deployment Guide — Ferrum Steel Homepage

Steps to get the current state of this site live. Written for this repo
specifically: Next.js 16 (App Router), no database, no environment
variables required for v1 (the contact form is still a stub — see
`components/sections/ContactForm.tsx`).

Recommended host: **Vercel** (built by the Next.js team, zero-config for
this stack). Netlify steps are included as an alternative.

---

## 0. Current repo state (read this first)

This repo has **no git remote configured yet**, and there are uncommitted
changes:

- Modified: `README.md`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`,
  `next.config.ts`, `package.json`, `package-lock.json`, `postcss.config.mjs`
- Deleted: the default `public/*.svg` placeholder icons
- Untracked: `app/opengraph-image.png`, `app/robots.ts`, `app/sitemap.ts`,
  `components/`, `lib/`, `public/images/`, `tailwind.config.ts`, `plan.md`

Everything below assumes you commit and push this working tree as-is.

---

## 1. Verify the production build locally

Catch build errors before they show up on the host.

```bash
npm install
npm run build
npm run start
```

Open http://localhost:3000 and click through the page. Stop the server
(Ctrl+C) once you're happy, then continue.

## 2. Commit the current changes

```bash
git add -A
git status   # review what's staged — confirm nothing unexpected (e.g. .env files) is included
git commit -m "Ferrum Steel homepage v1"
```

## 3. Push to GitHub

If you don't already have a GitHub repo for this project:

1. Create a new **empty** repo on GitHub (no README/license/gitignore —
   this project already has its own).
2. Link it and push:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

If a remote already exists, just:

```bash
git push -u origin main
```

## 4. Deploy on Vercel

### Option A — Vercel dashboard (no CLI, recommended for a first deploy)

1. Go to https://vercel.com and sign in (GitHub login is easiest).
2. Click **Add New → Project**.
3. Select the GitHub repo you pushed in step 3.
4. Vercel auto-detects Next.js — leave the defaults:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (default)
   - Output Directory: (default, leave blank)
5. **Environment Variables**: none required for v1 — skip this section.
6. Click **Deploy**. Vercel builds and gives you a live URL like
   `https://<project>.vercel.app`.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel            # first run: links the project, deploys a preview
vercel --prod     # promotes to your production URL
```

### After deploying

- Every future `git push` to `main` auto-deploys to production.
- Pushes to other branches / PRs get their own preview URLs automatically.

## 5. (Optional) Custom domain

1. In the Vercel dashboard: **Project → Settings → Domains**.
2. Add your domain (e.g. `ferrumsteel.com`).
3. Vercel shows the DNS records to add (either an `A` record + `www` CNAME,
   or point nameservers at Vercel). Add them at your domain registrar.
4. Wait for DNS propagation (usually minutes, can take up to 24h) — Vercel
   auto-issues an SSL certificate once it verifies.

---

## Alternative: Netlify

```bash
npm install -g netlify-cli
netlify login
netlify init      # links repo, detects Next.js via @netlify/plugin-nextjs
netlify deploy --prod
```

Or via dashboard: **Add new site → Import an existing project**, pick the
GitHub repo, leave build command as `npm run build` — Netlify's Next.js
runtime plugin handles the rest automatically.

---

## Things to check after going live

- [ ] `app/sitemap.ts` and `app/robots.ts` resolve correctly at
      `/sitemap.xml` and `/robots.txt` (they use the deployed URL — confirm
      no localhost/placeholder URL is hardcoded in `lib/constants.ts`).
- [ ] OG image (`app/opengraph-image.png`) renders when the URL is shared
      (test with a link-preview tool or social share).
- [ ] Contact form: currently a stub with no backend (see
      `components/sections/ContactForm.tsx`). Submissions won't go
      anywhere until it's wired to Formspree or a Next.js Route Handler +
      email service — don't advertise the form as functional until then.
- [ ] Placeholder brand name "Ferrum Steel" — swap for the real brand
      before a public launch (see README's "Before launch" section).
