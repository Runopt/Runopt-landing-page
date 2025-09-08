# Crawling & Indexing — 4XX HTTP Status Codes

## Findings
- Internal navigation exposed multiple URLs that do not exist as standalone pages, resulting in 404s:
  - Mobile navbar linked to `/features`, `/faqs`, and `/signup` (no corresponding pages in `pages/`).
  - Footer linked to `/#faq` while the actual section ID is `faqs`.
- Section anchors on the homepage are available and should be used instead:
  - `components/features/index.tsx` exposes `id="features"`.
  - `components/faq/index.tsx` exposes `id='faqs'`.
  - `components/hero/index.tsx` exposes `id="home"`.
- A relative image path in the mobile navbar (`../images/logo-mobile.png`) could break in some contexts.

Context reference: `https://runopt.co/`

## Solution
- Fix internal links to point to valid in-page anchors and existing routes.
- Add permanent 301 redirects for any previously crawled/linked non-existent URLs to consolidate signals and eliminate 404s.
- Normalize static asset paths to absolute paths.

### Code edits (implemented)
- `components/navbar/index.jsx`
  - Mobile logo path: `src="/images/logo-mobile.png"` (was relative).
  - Mobile menu links:
    - `/#features` (was `/features`)
    - `/#faqs` (was `/faqs`)
    - Active state for About corrected to `/about-us`.
  - Replace non-existent `/signup` with `<CalendlyPopup />` CTA.
- `components/footer/index.tsx`
  - `/#faqs` (was `/#faq`).
- `next.config.js`
  - Add 301 redirects:
    - `/features` → `/`
    - `/faqs` → `/`
    - `/signup` → `/`

### Redirect configuration
```js
// next.config.js
async redirects() {
  return [
    { source: '/features', destination: '/', permanent: true },
    { source: '/faqs', destination: '/', permanent: true },
    { source: '/signup', destination: '/', permanent: true },
  ];
}
```

### Expected impact
- Internal 404s from navigation eliminated.
- Previously indexed/bad external links now 301 to the homepage, improving crawlability and consolidating link equity.
- More reliable asset loading via absolute paths.

## Verification and QA Checklist
- Local/preview tests
  - Navigate the site and confirm all header/footer links resolve without 404s.
  - Ensure in-page anchors scroll correctly to `#home`, `#features`, and `#faqs`.
- Redirect checks (after deploy)
  - `curl -I https://runopt.co/features` → `301` to `/`.
  - `curl -I https://runopt.co/faqs` → `301` to `/`.
  - `curl -I https://runopt.co/signup` → `301` to `/`.
- Crawl tests
  - Run a lightweight crawl (e.g., Screaming Frog in “List” mode) to confirm 0 4XX on internal links.
- Search Console
  - In Google Search Console, validate fixes for any previously reported 404s and monitor the Crawl Stats report.

## Recommended Site Audit Tools and Workflow
- Google Search Console
  - Monitor Coverage, Page indexing, and Crawl Stats; validate fixed issues.
- Bing Webmaster Tools
  - Similar to GSC; check URL inspection and crawl error reports.
- Screaming Frog SEO Spider
  - Run a full crawl (include JavaScript rendering if needed). Filter “Client Error (4xx)” and validate zero internal 4XX responses. Re-crawl after deployment.
- Ahrefs or Semrush Site Audit (if available)
  - Schedule periodic crawls; track historical 4XX counts and redirect chains.
- Sitebulb
  - Good diagnostics and visualizations; verify 4XX and redirect rules.
- Lighthouse (Chrome DevTools)
  - Run targeted audits on key pages for best-practice checks.
- Hosting/Platform logs (e.g., Vercel)
  - Inspect recent 404s and add targeted redirects for any legacy paths observed.

### Suggested verification flow
1. Deploy changes to production or a staging preview URL.
2. Validate 301s with `curl -I` and in-browser tests.
3. Run Screaming Frog crawl; confirm internal 4XX = 0 and no new redirect chains.
4. In GSC, re-validate affected issues and monitor Crawl Stats.
5. Watch server logs for residual 404s and add any necessary one-off redirects.

## Next candidates to audit (for subsequent tickets)
- 3XX redirect chains and loops (ensure only single-hop 301s where possible).
- Mixed-content or protocol mismatches (HTTP assets on HTTPS pages).
- Canonicalization and duplicate content (canonical tags, trailing slash consistency).
- Sitemap and robots directives (ensure accurate URLs and disallow rules).
- Core Web Vitals and performance regressions (LCP/INP/CLS via CrUX/GSC).

---
Report maintained in-repo to track fixes as they roll out. Add subsequent issues as new sections using the same Findings → Solution → Verification structure.


