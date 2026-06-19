# SAS Battle Cards — Project Structure

> Astro 5 + Tailwind 4 + TypeScript + Content Collections
> Philippine SE Competitive Intelligence Tool (v2)

---

## Deployment (GitHub Pages)

### First-Time Setup

```powershell
# 1. Make sure you're in the project folder
cd sas-battlecards

# 2. Initialize git (if not already done)
git init
git add .
git commit -m "initial commit"

# 3. Create the GitHub repo and push
gh repo create sas-battlecards --public --source=. --push

# 4. Set default branch to main
gh repo edit --default-branch main

# 5. Enable GitHub Pages (source: GitHub Actions)
gh api repos/jamie-jjt/sas-battlecards/pages -X POST -f build_type=workflow

# 6. Trigger the first deploy
gh workflow run deploy.yml
```

### After That — Every Push Auto-Deploys

```powershell
git add .
git commit -m "your message"
git push
```

The `.github/workflows/deploy.yml` handles the rest automatically.

### Manual Deploy (Without GitHub Actions)

```powershell
# Build locally
npm run build

# The dist/ folder contains the full static site
# Upload it to any static hosting (Netlify, Vercel, any web server)
```

### Live URL

```
https://jamie-jjt.github.io/sas-battlecards/
```

---

## Project Structure

```
sas-battlecards/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions: build + deploy on push
│
├── public/
│   └── favicon.svg                 # SAS-blue shield icon
│
├── src/
│   │
│   ├── components/                 # ═══ REUSABLE UI COMPONENTS ═══
│   │   │
│   │   ├── battlecard/             # Battle card page sections
│   │   │   ├── BattleCardHeader    # Sticky header: name, category, threat, tagline
│   │   │   ├── CollapsibleSection  # Accordion with <details> + chevron animation
│   │   │   ├── ComparisonGrid     # Feature table: ✅ Full / 🟡 Partial / ❌ None
│   │   │   ├── LandmineList       # Numbered danger questions + expandable details
│   │   │   ├── ObjectionItem      # Conversation flow (speech bubbles)
│   │   │   └── WinPoint           # Green-accent differentiator with proof point
│   │   │
│   │   ├── cards/                  # Card components for grid pages
│   │   │   ├── CompetitorCard     # Full card for /battlecards/ index
│   │   │   └── QuickAccessCard    # Compact card for dashboard
│   │   │
│   │   ├── global/                 # App-wide layout components
│   │   │   ├── Header             # Fixed top nav + search trigger + theme toggle
│   │   │   ├── Footer             # Minimal footer
│   │   │   ├── MobileNav          # Bottom tab bar (mobile only, 5 tabs)
│   │   │   ├── Breadcrumb         # Navigation trail
│   │   │   ├── SkipLink           # Accessibility: skip to main content
│   │   │   └── ThemeToggle        # Dark/light switch (localStorage + system pref)
│   │   │
│   │   ├── search/                 # Search functionality
│   │   │   ├── SearchModal        # Cmd+K overlay (keyboard nav, grouped results)
│   │   │   └── SearchTrigger      # Button that opens search
│   │   │
│   │   └── ui/                     # Primitive UI elements
│   │       ├── Badge              # Category / threat / status pill
│   │       ├── CopyButton         # Clipboard copy with ✓ feedback
│   │       ├── CountdownTimer     # Deadline countdown (color-coded urgency)
│   │       ├── FilterChips        # Toggleable filter bar (client island)
│   │       └── ThreatBadge        # 🔴 High / 🟡 Medium / 🟢 Low
│   │
│   ├── content/                    # ═══ ALL CONTENT (JSON, SCHEMA-VALIDATED) ═══
│   │   │
│   │   ├── config.ts              # Zod schemas for all collections
│   │   │
│   │   ├── battlecards/           # One JSON file per competitor
│   │   │   ├── databricks.json    # ML Platform — 🔴 High — P1
│   │   │   ├── microsoft.json     # Cloud Data — 🔴 High — P1
│   │   │   ├── dataiku.json       # ML Platform — 🟡 Medium — P1
│   │   │   ├── fico.json          # Fraud/FinCrime — 🔴 High — P1
│   │   │   ├── nice-actimize.json # Fraud/FinCrime — 🔴 High — P1
│   │   │   ├── powerbi.json       # BI/Visualization — 🔴 High — P1
│   │   │   └── opensource.json    # Open Source — 🔴 High — P1
│   │   │
│   │   └── scoping/              # Discovery questions by industry
│   │       ├── banking.json       # 12 PH-localized questions (BSP, AFASA, AML)
│   │       └── universal.json     # 10 universal questions (any industry)
│   │
│   ├── layouts/                    # ═══ PAGE LAYOUTS ═══
│   │   ├── BaseLayout.astro       # HTML shell, meta, fonts, header/footer, SW
│   │   └── BattleCardLayout.astro # Battle card: sticky header + sidebar TOC
│   │
│   ├── lib/                        # ═══ UTILITIES & TYPES ═══
│   │   └── types.ts               # All TypeScript interfaces (BattleCard, Regulation, etc.)
│   │
│   ├── pages/                      # ═══ ROUTES (auto-generates HTML) ═══
│   │   ├── index.astro            # / → Dashboard (countdown, quick access, search)
│   │   ├── wizard.astro           # /wizard/ → 5-step prep wizard → PrepSheet
│   │   └── battlecards/
│   │       ├── index.astro        # /battlecards/ → Grid + category/threat filters
│   │       └── [slug].astro       # /battlecards/[name]/ → Individual card (dynamic)
│   │
│   └── styles/                     # ═══ DESIGN SYSTEM ═══
│       ├── global.css             # Tailwind + tokens + dark/light + print CSS
│       └── fonts.css              # Inter Variable + JetBrains Mono
│
├── astro.config.mjs               # Site config (base: /sas-battlecards)
├── tsconfig.json                  # Strict TS + path aliases (@/, @components/, etc.)
├── package.json                   # v2.0.0 — Astro 5, Tailwind 4, Pagefind
├── .gitignore                     # node_modules, dist, .astro
└── README.md                      # Setup + contribution guide
```

---

## Key Files Explained

| File | What It Does |
|------|-------------|
| `src/content/config.ts` | Defines the shape of all content (Zod schemas). If your JSON doesn't match, build fails. |
| `src/content/battlecards/*.json` | The actual battle card data. Add a new file = new page auto-generated. |
| `src/pages/battlecards/[slug].astro` | Dynamic route — reads from content collection and renders the card. |
| `src/styles/global.css` | All design tokens (colors, borders, text). Both dark and light themes defined here. |
| `src/lib/types.ts` | TypeScript interfaces — shared across all components for type safety. |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on every push to main. |

---

## How to Add a New Battle Card

1. Copy any existing JSON file in `src/content/battlecards/`
2. Change the `slug` field (this becomes the URL: `/battlecards/your-slug/`)
3. Fill all required fields (build will fail if you miss any — Zod validates)
4. Run `npm run build` locally to verify
5. Push to main → deploys in ~2 minutes

**Required fields per battle card:**
- slug, name, category, threatLevel, priority, lastUpdated, tagline
- overview (6 sub-fields)
- whereWeWin (array of headline + explanation + proofPoint)
- whereTheyWin (array of area + whyItMatters + howToNeutralize)
- features (array of capability + sas + competitor + notes)
- landmines (array of question + expectedAnswer + whatToSayNext)
- objections (array of objection + whyTheySayIt + response + proofPoints)
- phContext (localPresence, knownCustomers, localPricing, regulatoryGaps)
- betterTogetherDecision (partnerWhen, competeWhen)
- proofPoints (array of type + title + detail)
- relatedRegulations, relatedSolutions (string arrays)

---

## Local Development

```powershell
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
# → Open http://localhost:4321/sas-battlecards/

# Build for production
npm run build
# → Output in dist/

# Preview production build
npm run preview

# Type check
npm run check
```

---

## Design System Quick Reference

### Colors (CSS Variables)

| Token | Dark Value | Use |
|-------|-----------|-----|
| `--color-bg-base` | `#0d1117` | Page background |
| `--color-bg-surface` | `#161b22` | Cards, panels |
| `--color-bg-elevated` | `#1c2128` | Hover states, modals |
| `--color-border-default` | `#30363d` | Standard borders |
| `--color-text-primary` | `#e6edf3` | Headings, main text |
| `--color-text-secondary` | `#8b949e` | Descriptions |
| `--color-sas-blue` | `#0078D4` | Primary actions |
| `--color-sas-teal` | `#00B4D8` | Accents |
| `--color-success` | `#3fb950` | SAS wins, positive |
| `--color-danger` | `#f85149` | Landmines, high threat |
| `--color-warning` | `#d29922` | Caution, medium threat |

### Category Colors

| Category | Color | Token |
|----------|-------|-------|
| ML/AI Platform | Purple | `--color-cat-ml` |
| Cloud Data | Blue | `--color-cat-cloud` |
| Fraud/FinCrime | Red | `--color-cat-fraud` |
| GRC/Risk | Amber | `--color-cat-grc` |
| BI/Visualization | Green | `--color-cat-bi` |
| Data Prep | Light Blue | `--color-cat-prep` |
| Open Source | Gray | `--color-cat-oss` |

---

## Pages Generated (Current)

| URL | Page | Source |
|-----|------|--------|
| `/` | Dashboard | `src/pages/index.astro` |
| `/wizard/` | Prep Wizard | `src/pages/wizard.astro` |
| `/battlecards/` | Card Index | `src/pages/battlecards/index.astro` |
| `/battlecards/databricks/` | Databricks | `src/content/battlecards/databricks.json` |
| `/battlecards/microsoft/` | Microsoft | `src/content/battlecards/microsoft.json` |
| `/battlecards/dataiku/` | Dataiku | `src/content/battlecards/dataiku.json` |
| `/battlecards/fico/` | FICO | `src/content/battlecards/fico.json` |
| `/battlecards/nice-actimize/` | NICE Actimize | `src/content/battlecards/nice-actimize.json` |
| `/battlecards/powerbi/` | Power BI | `src/content/battlecards/powerbi.json` |
| `/battlecards/opensource/` | Python/R | `src/content/battlecards/opensource.json` |

**Total: 10 pages**
