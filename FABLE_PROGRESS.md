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
