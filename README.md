# Kriralife website

Static Next.js site (Home, Codeveda, ForeverDays), ported from the Kriralife design canvas.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static HTML in out/
npm start        # serve out/ locally
```

Deploy the `out/` folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3).

## Production domain

URLs in canonical tags, Open Graph, JSON-LD, `sitemap.xml` and `robots.txt` use `https://kriralife.com`.
If the domain differs, build with:

```bash
NEXT_PUBLIC_SITE_URL=https://www.example.com npm run build
```

## SEO built in

- Every page is pre-rendered HTML (interactive bits hydrate on top), one `<h1>` per page, semantic landmarks
- Per-page `<title>`, meta description, keywords, canonical URL, Open Graph + Twitter large-image card (`lib/metadata.ts`)
- JSON-LD: Organization, WebSite, WebPage, BreadcrumbList, WebApplication (Codeveda), MobileApplication (ForeverDays), course list
- `sitemap.xml` (with image entries), `robots.txt`, `manifest.webmanifest`, favicon + Apple touch icon, `noindex` 404
- Self-hosted fonts via `next/font` (no render-blocking Google Fonts request), width/height on all images, lazy-loading below the fold

## Placeholders still to fill in

Search the code for `[` and `href="#"`: `[Your Name]`, app store links (`Get the app [link]`),
the ForeverDays journal `[Date]`, GitHub/LinkedIn/Instagram/X links, Privacy/Terms pages, the maker portrait,
and `you@example.com` in the ForeverDays footer. The newsletter form (`components/home/NewsletterForm.tsx`)
needs wiring to an email provider.
