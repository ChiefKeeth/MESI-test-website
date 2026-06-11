# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Read `FABLE_PROGRESS.md`** (project root) before starting any work — it records what was done in previous sessions and where to resume.

## Progress & Continuity
Sessions can be cut off at any time (usage/credit limits). To make sure work is never lost:
- **`FABLE_PROGRESS.md`** in the project root is the single source of truth for session progress.
- After completing each major task or section, update it with:
  - Section/task name and completion status
  - Files changed (with a one-line note on what changed in each)
  - Any notes, blockers, or decisions made
  - A clear **Resume Point**: exactly where to pick up if interrupted
- Update it **as you go**, not only at the end — assume the session could end after any step.
- At the start of every session, read it and continue from the Resume Point without re-asking the user what to do.
- Keep it current: mark superseded items done/obsolete rather than leaving stale instructions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:\Users\keeth\AppData\Roaming\npm\node_modules\puppeteer`. Chrome cache is at `C:\Users\keeth\.cache\puppeteer\chrome\win64-149.0.7827.22\chrome-win64\chrome.exe`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- The site is now **multi-page**: `index.html` (Home), `about.html`, `divisions.html`, `contact.html`, plus legal pages `privacy.html` and `terms.html` (linked from the footer only, not the main nav)
- Shared styles live in `css/style.css` — all brand CSS variables are defined there. Do not hardcode colours.
- Shared nav and footer are injected by `js/components.js` via `initPage('pagename')`. Add new pages there too.
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

### Current Brand Asset Map
| File | Use |
|---|---|
| `brand_assets/Images/MESI Name TB trimmed.png` | **Primary wordmark** — transparent bg, auto-trimmed. Use in nav and footer. |
| `brand_assets/Images/MESI Name TB.png` | Name-only wordmark, transparent bg (untrimmed source of the above). |
| `brand_assets/Images/MESI Name.png` | Name-only wordmark on black bg. |
| `brand_assets/Images/Mesi Symbol TB.png` | Badge/icon only, transparent bg. Used as favicon and Divisions hero badge. |
| `brand_assets/Images/MESI Logo TB.png` / `MESI Logo.png` | Full logo with subtitle. Large-format contexts only. |
| `brand_assets/Images/MESI Cropped TB.png` / `MESI Cropped .png` | Badge + MESI letters. (Note: there is NO `MESI Cropped logo.png` — never reference it.) |
| `brand_assets/Images/Site Images/Hero.jpg` | Hero section background. |
| `brand_assets/Images/Site Images/Automation and electrical.jpg` | Division 01 image. |
| `brand_assets/Images/Site Images/Mechanical and mining.jpg` | Division 02 image. |
| `brand_assets/Images/Site Images/Payload and weighing.jpg` | Division 03 image. |
| `brand_assets/Images/Site Images/Logistics and transport.jpg` | Division 04 image. |
| `brand_assets/Images/Site Images/Industrial supplies.jpeg` | Division 05 image. |
| `brand_assets/Images/Site Images/Projects and egineering.jpg` | Division 06 image. |

### Brand Colours (CSS variables in `css/style.css`)
| Variable | Hex | Use |
|---|---|---|
| `--gold` | `#C9941A` | Primary accent, headings, borders |
| `--gold-light` | `#E8B030` | Hover states, gradients |
| `--green` | `#22A845` | Secondary accent, green division cards |
| `--green-dark` | `#1A7A2E` | Green gradients |
| `--bg-deep` | `#070A0D` | Page background |
| `--bg-base` | `#0E1218` | Cards, elevated surfaces |
| `--font-display` | Rajdhani | All headings |
| `--font-body` | Inter | Body copy |

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

## GitHub & Vercel Deployment Workflow

### Repository
- **GitHub repo:** `ChiefKeeth/MESI-test-website` (branch: `main`)
- **Vercel:** auto-deploys from `main` — every push to GitHub triggers a live deployment automatically. No manual Vercel step needed.

### Push workflow
1. Make and verify changes on `localhost:3000`
2. Stage files: `git add <files>` — be specific, never `git add -A` blindly
3. Commit: `git commit -m "descriptive message"`
4. Push: `git push origin main`
5. Vercel picks up the push and deploys within ~1 minute

### Rules
- **Never push without explicit user instruction.** Test everything on localhost first.
- The user will say "push it", "push to GitHub", or similar — that is the trigger.
- Always confirm what files are being committed (`git status`) before pushing.
- Never force-push (`--force`) to `main`.
- Commit messages should describe WHY the change was made, not just what files changed.

### Node / Git paths (if not in shell PATH)
- Node: `C:\Program Files\nodejs\node.exe`
- Git: prepend `$env:PATH = "C:\Program Files\Git\cmd;$env:PATH"` before git commands in PowerShell
