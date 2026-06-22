# FABLE_PROGRESS.md — MESI Website Redesign Session

**Date:** 2026-06-11 · **Status: ALL SECTIONS COMPLETE** · Verified on localhost:3000 — **pushed/deployed** as commit `e4acc4f` on `main` (Vercel auto-deployed).

## Section Status
| Section | Status | Notes |
|---|---|---|
| Read-first / codebase map | ✅ | All files read before editing |
| Broken asset fixes | ✅ | See "Pre-existing bugs fixed" |
| 1 — Navigation bar | ✅ | Wordmark logo, focus states, improved mobile menu |
| Border effect (CodePen) | ✅ | `.shine-border` system in `css/style.css` |
| 2 — Readability audit | ✅ | Footer + global text contrast lifted via CSS vars |
| 3 — Divisions page | ✅ | Hero symbol badge w/ shine ring + glow; pills fixed |
| 4 — About page (particles + BEE) | ✅ | Particles kept (see decisions); BEE section added |
| 5 — Full site audit | ✅ | All four pages reviewed + screenshot-verified |
| 6 — Cohesion & performance | ✅ | Shine system applied consistently; no `transition:all` remains |
| 7 — Workflow docs | ✅ | Below |

## Files Changed This Session
- `js/components.js` — nav rebuilt around `MESI Name TB trimmed.png` wordmark; footer rebuilt (readable colours, wordmark, BEE chips, Transformation & BBBEE link); mobile menu: aria-expanded, hamburger↔X icon swap, Escape + outside-click close, slide-in animation.
- `css/style.css` — text-colour variables lifted for contrast (`--text-muted #B3AB99`, `--text-dim #9A9181`, `--text-faint #837B6C`); new `.shine-border` (+ `--green`, `--static`, `--thick` variants) with `@property` conic rotation + reduced-motion fallback; nav brand/wordmark styles; focus-visible states for nav links, hamburger, footer links; Divisions hero symbol enlarged to 440px badge with layered gold/green glow; BEE section styles (`.bee-grid`, `.bee-badge`, `.bee-pillar`); chip `chip-lit-green`.
- `index.html`, `about.html`, `divisions.html`, `contact.html` — all hardcoded dim text hexes (`#5A5550`, `#4A4540`, `#8A8070`, `#6B6560`, `#A8A090`) replaced with `var(--text-*)`; favicons → `Mesi Symbol TB.png`.
- `about.html` — new **BEE / Transformation** section (`#bee`) between Core Values and Why MESI; fixed two broken parallax image paths.
- `divisions.html` — hero symbol wrapped in shine ring; pill nav `transition:all` → specific properties.
- `contact.html` — sidebar divisions card got static shine border.
- `brand_assets/Images/MESI Name TB trimmed.png` — **new derived asset** (transparent padding auto-trimmed from `MESI Name TB.png`, 859×215) for crisp nav/footer rendering. Source asset untouched.
- `screenshot.mjs` — now scrolls through the page before capture so `.reveal` content is visible in full-page screenshots.
- `CLAUDE.md` — brand asset map corrected to the renamed files.
- New QA helpers (keep, they're useful): `shot-section.mjs` (viewport shot at scrollY/selector), `shot-mobile-menu.mjs` (390px + open menu), `check-console.mjs` (console errors / failed requests on all pages).

## Pre-existing Bugs Fixed
1. `MESI Cropped logo.png` did not exist (assets were renamed in the working tree) — nav logo, footer logo, and all four favicons were broken. Replaced with `MESI Name TB trimmed.png` (nav/footer) and `Mesi Symbol TB.png` (favicons).
2. `about.html` parallax backgrounds pointed at nonexistent `brand_assets/Images/cropped/{teamwork,hse}.png` — repointed to the existing WhatsApp photos used for those subjects.
3. Stale `IMG.logo` entry in `components.js` fixed.
4. Footer text was `#2E2A26`/`#222018` on `#040608` (~1.5:1 contrast — unreadable). Fixed definitively via the lifted variable scale.

## Verification Done
- All four pages screenshot at 1440px (full page + section close-ups) — 2+ comparison rounds.
- Mobile 390px: nav wordmark, hamburger open/close (icon swaps, menu animates, active link shown).
- `check-console.mjs`: zero console errors / page errors / failed requests on all pages.
- All `brand_assets/` references verified to exist on disk (serve.mjs masks 404s by falling back to index.html, so this needed a filesystem check).

## Assets Needed (client to source)
| Where | What would work |
|---|---|
| About — intro section | Authentic team or facility photo (currently text + stat cards only). |
| About — BEE section | Optional: leadership/team photo to humanise the section (works without it). |
| About — Vision/HSE parallax washes | Currently low-opacity WhatsApp photos; higher-quality branded shots would be better. |
| Contact | Optional: office photo or embedded map for the address card. |
| ~~Footer~~ | ~~Real Privacy Policy / Terms of Use pages~~ — **DONE 2026-06-11**: `privacy.html` + `terms.html` built and linked from footer. Client should review legal copy (entity name "MESI" may need full registered name / reg. number). |
| Contact form | A form backend (Formspree/own endpoint) — submission is currently simulated in JS only. |

## Design Decisions for Client Review
1. **About hero particles kept** — identical treatment to the approved Divisions header, so the inner pages feel like one system. Removing/softening is a one-line change if preferred.
2. **Text contrast lifted site-wide** — the muted/dim/faint greys were below WCAG ratios on the near-black backgrounds (footer especially). Hierarchy is preserved but everything is now legible; the site reads slightly "brighter" than before.
3. **Border effect interpretation** — the CodePen's conic-gradient ring was adapted as a brand-metallic shine: animated on the Divisions hero badge and the two BEE badges (gold + metallic green), static on stat cards and the contact sidebar. The liquid-metal WebGL shader was deliberately not imported (heavy dependency, clashing aesthetic).
4. **Nav logo** = trimmed transparent wordmark + small caps subtitle; the old badge+text combo removed. Footer matches.
5. **BEE pride chips** ("Level 1 BBBEE", "100% Black Women-Owned") added to the footer so the certification is visible site-wide, not only on About.
6. **Favicon** switched to the gear symbol (reads far better at 16–32px than a wordmark).

## Deploy Workflow (Section 7)
Development happens on localhost (`node serve.mjs` → http://localhost:3000). When the client says **"deploy" / "push to Vercel"**:
```powershell
$env:PATH = "C:\Program Files\Git\cmd;$env:PATH"
git status                          # confirm exactly what's being committed
git add <specific files>            # never blind git add -A
git commit -m "why-focused message"
git push origin main                # Vercel auto-deploys from main in ~1 min
```
Repo: `ChiefKeeth/MESI-test-website` · Vercel: keethan-balkisson-s-projects/mesi-test-website.
Note: untracked brand asset renames (`MESI Name TB.png` etc.) and the deleted old logo files must be included in the commit or the deployed site will have broken images.

---

# Session 2026-06-11 (later) — Legal Pages

**Task:** Client asked for Terms of Use + Privacy Policy pages ("ill leave the designing up to you and edit later if needed"). **Status: COMPLETE**, verified on localhost — **not yet pushed** (waiting for client's "push it").

## Files Changed
- `privacy.html` — **new page.** POPIA-aligned Privacy Policy (11 sections), brand hero with Last Updated chips, sticky TOC sidebar with scrollspy, shine-border Information Officer contact card.
- `terms.html` — **new page.** Terms of Use (11 sections: acceptance, acceptable use, IP, quotations disclaimer, third parties, liability w/ CPA carve-out, indemnity, privacy x-ref, SA governing law, changes, contact).
- `css/style.css` — new shared `.legal-*` block (layout grid 250px+1fr, sticky `.legal-toc` w/ active states, `.legal-section/h2/num/body/list` + green list variant; ≤900px TOC becomes pill chips; ≤767px override so the global `section` padding rule doesn't inflate `.legal-section`).
- `js/components.js` — footer Privacy/Terms links now point to the real pages (were `#`); new `_initLegalTOC()` scrollspy (IntersectionObserver, no-op on other pages) called from `initPage()`.
- `check-console.mjs` — page list extended with the two new pages.
- `CLAUDE.md` — multi-page list updated to mention the legal pages (footer-only links).

## Notes / Decisions
- Legal copy is placeholder-quality-but-real: POPIA (Act 4 of 2013) for privacy, SA governing law + Consumer Protection Act carve-out for terms. Entity is just "MESI" — client may want full registered name + reg number. Last Updated date: 11 June 2026.
- **Gotcha found:** `overflow:hidden` on a section ancestor breaks `position:sticky` — legal pages use `overflow:clip` instead. (contact.html's sticky sidebar has this same latent bug — left untouched, mention to client if it matters.)
- Verified: 2 screenshot rounds desktop (1440) + mobile (390), scrollspy active states confirmed, `check-console.mjs` clean on all 6 pages.

## Resume Point
Legal pages were pushed as commit `9e1c796`. Dev server: `node serve.mjs` → http://localhost:3000.

---

# Session 2026-06-18 — Divisions Hero Symbol + Brand Tagline Fix

**Status: COMPLETE**, verified on localhost, **pushed**.

## Changes
1. **Divisions hero symbol** — removed the rotating metallic `.shine-border` ring from the MESI symbol badge (`divisions.html`), enlarged `.mesi-symbol-wrap` 440px → 560px (`css/style.css`), kept the gold/green glow (`drop-shadow` filters on `.mesi-symbol-img` + radial-gradient background on `.mesi-symbol-ring`). Pushed as `733e445`.
2. **Brand tagline correction** — client clarified MESI stands for "Mechanical & Electrical Systems Integration" (matches `brand_assets/brand-guide.html`, which already had this correct). The site-wide subtitle/tagline previously read "Engineering & Industrial Solutions" — corrected in:
   - `js/components.js` — nav `.nav-brand-sub` and footer subtitle under wordmark.
   - `<title>` tags in `index.html`, `about.html`, `divisions.html`, `contact.html`, `privacy.html`, `terms.html`.
   - Verified no overflow/wrap at 900–1440px nav widths (checked via puppeteer bounding-rect script, then deleted the script). Pushed as `02ea7bb`.
   - **Not changed:** longer descriptive body copy (meta descriptions, about.html intro paragraph, footer blurb) that says things like "multidisciplinary engineering and industrial solutions company" — these describe the business, not the acronym, and were left as-is. Flag to client if they want that copy aligned too.

## Resume Point
Both changes deployed. Last commit: `02ea7bb`. Dev server: `node serve.mjs` → http://localhost:3000.

---

# Session 2026-06-22 — Contact Form Backend + Go-Live

**Status: SITE IS LIVE** at `https://mesigroup.co.za` (SSL valid). One outstanding item below, everything else complete.

## Changes
1. **Contact form backend** — `api/contact.js` (new Vercel serverless function) sends via Resend instead of the old fake `setTimeout`. Routes to `sales@mesigroup.co.za` if a specific division is selected, `info@mesigroup.co.za` if blank/"General Enquiry". `contact.html`'s `handleSubmit` now does a real `fetch('/api/contact')`.
2. **Email domain correction** — site-wide `mesi.co.za` → `mesigroup.co.za` (the real registered domain) across `contact.html`, `index.html`, `privacy.html`, `terms.html`, `js/components.js`.
3. **Resend domain verification** — `mesigroup.co.za` verified in Resend (DKIM + SPF + MX on a `send.` subdomain, doesn't touch the existing cPanel mail setup at domains.co.za). `FROM_EMAIL` sends as `noreply@mesigroup.co.za`.
4. **Spam protection** — hidden honeypot field (`website`, bots get a fake `200 ok` so they don't adapt) + Cloudflare Turnstile widget, verified server-side in `api/contact.js` before any email sends. Needed because Vercel's Deployment Protection had to be turned off for Production (was blocking real visitors with a Vercel-login wall) — turning it off made `/api/contact` publicly POST-able, hence the spam protection.
5. **SEO basics** — added `robots.txt` + `sitemap.xml` (neither existed before).
6. **Custom domain connected** — `mesigroup.co.za` + `www.mesigroup.co.za` added to the Vercel project, apex A record at domains.co.za changed from `169.239.218.68` → `76.76.21.21`. SSL auto-provisioned. All 6 pages + robots.txt/sitemap.xml verified `200` on the live domain.
7. **Secrets workflow** — added a "Secrets & API Keys" section to `CLAUDE.md`: future API keys go into `.env` via a placeholder rather than being typed into chat.

## Environment / Accounts Set Up This Session
- **Resend** (resend.com, signed in as keethanb@gmail.com) — domain `mesigroup.co.za` verified, API key in `.env` (`RESEND_API_KEY`) and Vercel env vars (Production + Preview).
- **Cloudflare Turnstile** — widget created for `mesigroup.co.za` (+ localhost for testing). Secret key in `.env` (`TURNSTILE_SECRET_KEY`) and Vercel env vars. Site key hardcoded in `contact.html` (public by design).
- **Vercel CLI** authenticated locally (`npx vercel`) and linked to `keethan-balkisson-s-projects/mesi-test-website`.
- **Vercel Deployment Protection** turned off for Production (was gating real visitors behind a Vercel login wall — caught during go-live testing, not present before this session... actually it was already on, just never noticed until now).

## Known Gotcha (not a bug, just a Windows quirk)
`vercel dev` crashes locally on Windows with a libuv assertion error (`UV_HANDLE_CLOSING`) whenever `api/contact.js` makes more than one outbound fetch in a single invocation (Turnstile verify + Resend send). This does **not** happen on real Vercel infrastructure (Linux) — confirmed via a real preview deployment. If local testing of `/api/contact` is needed again, prefer invoking the handler directly with a mock req/res (bypassing `vercel dev`) over trusting the local dev server's response.

## Outstanding — Not Yet Resolved
- **Legal entity name in `privacy.html` / `terms.html`**: currently just says "MESI." Flagged back on 2026-06-11 too. Need the **full registered company name + company registration number** from the owner (via the user's mother, who does bookkeeping/consulting for the company) to make the legal pages accurate. Low urgency — doesn't block the site being live — but should be revisited before relying on these pages for actual legal protection.

## Resume Point
Site is live and fully functional. Next session: check if the user has the registered entity name/reg number yet; if so, update `privacy.html` + `terms.html` and push. Otherwise, ask again or move to other work (e.g. sourcing the optional real photos listed in the "Assets Needed" table near the top of this file).

---

# Session 2026-06-22 (cont.) — SEO / AI-Discoverability / Advertising Punch List

**Goal:** get the live site found by search engines, surfaced by AI chatbots/answer engines, and laid out a B2B-appropriate advertising plan. Status of each item tracked below — **check this list first if resuming.**

## A. Technical SEO/AI (implemented by Claude, in this repo)
- [x] Canonical `<link rel="canonical">` tag on all 6 pages
- [x] Open Graph + Twitter Card meta tags on all 6 pages (using `Hero.jpg` as default share image)
- [x] JSON-LD `Organization` schema on index/about/divisions/contact (name, logo, address, contact points). Skipped on privacy/terms — low-value for legal pages.
- [x] JSON-LD `Service` schema per division (6 entries) on `divisions.html`, linked via `provider: {"@id": ".../#organization"}`
- [x] `llms.txt` created at project root — plain-language company/division/contact summary for AI crawlers
- [x] Image `alt` text audit — all real `<img>` tags already have good descriptive alt text (divisions.html); division thumbnails elsewhere are CSS background-images behind text headings that already name the division, so no `alt` needed there. Nothing to fix.
- [x] `sitemap.xml` — added `<lastmod>2026-06-22</lastmod>` to all 6 URLs (was missing entirely before)
- [x] Verified on localhost: all 6 pages + llms.txt + sitemap.xml return 200, JSON-LD validated as parseable JSON via a Node script. **Not yet pushed** — ask user before committing per CLAUDE.md push rule.

## B. External actions (user/owner to do — Claude can advise but not execute)
- [ ] Google Search Console: verify `mesigroup.co.za`, submit `sitemap.xml`
- [ ] Bing Webmaster Tools: same
- [ ] Google Business Profile: create/claim listing for local + Maps search
- [ ] LinkedIn company page (B2B buyers — plant engineers, procurement, mining ops — live here, not on consumer social)
- [ ] South African industrial/engineering directory listings (e.g. SAIMechE, IMIESA-type bodies, Yellow Pages SA)
- [ ] Google Search Ads on long-tail high-intent industrial terms (skip Facebook/Instagram/TikTok — wrong audience for B2B procurement)
- [ ] Case-study/project content pages per division (real project write-ups) — doubles as SEO content + LinkedIn-shareable proof; needs project examples from the owner first

## Resume Point
If interrupted, re-open this file and continue down section A's checkboxes top to bottom (each is an independent, resumable HTML edit). Section B is a handoff list for the user/owner, not blocked by anything in A.
