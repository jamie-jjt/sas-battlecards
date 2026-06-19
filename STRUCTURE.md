# Project Structure

> SAS Battle Cards v2 — 54 pages, Astro 5 + Tailwind 4 + TypeScript

```
sas-battlecards/
├── .github/workflows/
│   └── deploy.yml                    # Auto-deploy to GitHub Pages on push
│
├── public/
│   └── favicon.svg                   # SAS-blue shield icon
│
├── src/
│   ├── components/
│   │   ├── battlecard/               # Battle card page sections
│   │   │   ├── BattleCardHeader      # Sticky header with threat badge
│   │   │   ├── CollapsibleSection    # Animated accordion (<details>)
│   │   │   ├── ComparisonGrid        # Feature table (✅/🟡/❌)
│   │   │   ├── LandmineList          # Numbered questions + copy
│   │   │   ├── ObjectionItem         # Speech bubble conversation flow
│   │   │   └── WinPoint              # Green-accent differentiator
│   │   ├── cards/
│   │   │   ├── CompetitorCard        # Grid card for battle card index
│   │   │   ├── QuickAccessCard       # Dashboard compact card
│   │   │   ├── RegulationCard        # Regulation with countdown
│   │   │   └── SolutionCard          # Solution with industry badges
│   │   ├── global/
│   │   │   ├── Header                # Fixed nav + More dropdown + search
│   │   │   ├── Footer                # Minimal footer
│   │   │   ├── MobileNav             # Bottom tab bar + More popup
│   │   │   ├── Breadcrumb            # Navigation trail
│   │   │   ├── SkipLink              # Accessibility skip-to-content
│   │   │   └── ThemeToggle           # Dark/light with system detection
│   │   ├── search/
│   │   │   ├── SearchModal           # Cmd+K overlay + focus trap
│   │   │   └── SearchTrigger         # Button that opens search
│   │   └── ui/
│   │       ├── Badge                  # Category/threat/status pill
│   │       ├── CopyButton            # Clipboard with ✓ feedback
│   │       ├── CountdownTimer         # Regulation deadline countdown
│   │       ├── FilterChips            # Toggleable filter bar
│   │       └── ThreatBadge           # High/Medium/Low indicator
│   │
│   ├── content/                       # ALL CONTENT (JSON, Zod-validated)
│   │   ├── config.ts                 # Schemas for all collections
│   │   ├── battlecards/              # 18 competitor JSON files
│   │   │   ├── databricks.json       # ML Platform — P1 🔴
│   │   │   ├── microsoft.json        # Cloud Data — P1 🔴
│   │   │   ├── dataiku.json          # ML Platform — P1 🟡
│   │   │   ├── fico.json             # Fraud — P1 🔴
│   │   │   ├── nice-actimize.json    # Fraud — P1 🔴
│   │   │   ├── powerbi.json          # BI — P1 🔴
│   │   │   ├── opensource.json        # Open Source — P1 🔴
│   │   │   ├── palantir.json         # ML Platform — P2 🟡
│   │   │   ├── aws.json              # Cloud Data — P2 🟡
│   │   │   ├── google.json           # Cloud Data — P2 🟡
│   │   │   ├── snowflake.json        # Data Prep — P2 🟡
│   │   │   ├── feedzai.json          # Fraud — P3 🟡
│   │   │   ├── symphonyai.json       # Fraud — P3 🟡
│   │   │   ├── tookitaki.json        # Fraud — P3 🟢
│   │   │   ├── tableau.json          # BI — P2 🟡
│   │   │   ├── cloudera.json         # Cloud Data — P3 🟡
│   │   │   ├── informatica.json      # Data Prep — P3 🟡
│   │   │   └── sap-analytics.json    # BI — P3 🟡
│   │   ├── regulations/              # 6 PH regulations
│   │   │   ├── bsp-1213.json         # FMS deadline June 2026
│   │   │   ├── afasa.json            # RA 12010
│   │   │   ├── bsp-1112.json         # Model Risk Management
│   │   │   ├── amla.json             # Anti-Money Laundering
│   │   │   ├── dpa.json              # Data Privacy Act
│   │   │   └── ic-rbc2.json          # Insurance RBC2
│   │   ├── solutions/                # 6 SAS products
│   │   │   ├── fraud-management.json
│   │   │   ├── model-manager.json
│   │   │   ├── intelligent-decisioning.json
│   │   │   ├── visual-analytics.json
│   │   │   ├── anti-money-laundering.json
│   │   │   └── risk-management.json
│   │   ├── scoping/                  # 7 industry question sets
│   │   │   ├── banking.json          # 12 questions
│   │   │   ├── insurance.json        # 8 questions
│   │   │   ├── telco.json            # 8 questions
│   │   │   ├── government.json       # 8 questions
│   │   │   ├── retail.json           # 7 questions
│   │   │   ├── healthcare.json       # 7 questions
│   │   │   └── universal.json        # 10 questions
│   │   ├── objections/               # 4 theme files (12 total)
│   │   │   ├── cost.json
│   │   │   ├── legacy.json
│   │   │   ├── open-source.json
│   │   │   └── already-have.json
│   │   └── sizing/                   # 4 profiles
│   │       ├── small.json
│   │       ├── medium.json
│   │       ├── large.json
│   │       └── enterprise.json
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro          # HTML shell + ARIA + print scripts
│   │   └── BattleCardLayout.astro    # Card layout + mobile section nav + desktop TOC
│   │
│   ├── lib/
│   │   └── types.ts                  # All TypeScript interfaces
│   │
│   ├── pages/                         # 54 generated pages
│   │   ├── index.astro               # Dashboard (countdown, quick access)
│   │   ├── wizard.astro              # 5-step prep wizard (URL state)
│   │   ├── battlecards/
│   │   │   ├── index.astro           # Grid + category/threat filters
│   │   │   └── [slug].astro          # Dynamic: 18 individual cards
│   │   ├── regulations/
│   │   │   ├── index.astro           # Grid + issuing body/industry filters
│   │   │   └── [slug].astro          # Dynamic: 6 regulation details
│   │   ├── solutions/
│   │   │   ├── index.astro           # Grid + industry filter
│   │   │   └── [slug].astro          # Dynamic: 6 solution details
│   │   ├── scoping/
│   │   │   ├── index.astro           # 3-path entry
│   │   │   └── [industry].astro      # Dynamic: 7 industry question pages
│   │   ├── better-together/
│   │   │   ├── index.astro           # Partner grid
│   │   │   ├── databricks.astro
│   │   │   ├── aws.astro
│   │   │   └── microsoft.astro
│   │   ├── objections/index.astro    # AREC framework objection handler
│   │   ├── sizing/index.astro        # Tier cards + comparison table
│   │   ├── compare/index.astro       # Multi-competitor comparison
│   │   ├── notes/index.astro         # Meeting notes template
│   │   ├── tracker/index.astro       # Win/loss tracker (localStorage)
│   │   ├── intel/index.astro         # Competitive news feed
│   │   └── help/index.astro          # Quick-start guide
│   │
│   └── styles/
│       ├── global.css                # Tailwind + tokens + dark/light + print + animations
│       └── fonts.css                 # Inter + JetBrains Mono @font-face
│
├── astro.config.mjs                  # Site: jamie-jjt.github.io, base: /sas-battlecards
├── tsconfig.json                     # Strict + path aliases (@/, @components/, etc.)
├── package.json                      # v2.0.0
├── .gitignore
└── README.md
```

## Page Count: 54

| Route | Count | Source |
|-------|-------|--------|
| `/` | 1 | index.astro |
| `/wizard/` | 1 | wizard.astro |
| `/battlecards/` | 19 | index + 18 from [slug] |
| `/regulations/` | 7 | index + 6 from [slug] |
| `/solutions/` | 7 | index + 6 from [slug] |
| `/scoping/` | 8 | index + 7 from [industry] |
| `/better-together/` | 4 | index + 3 static |
| `/objections/` | 1 | index |
| `/sizing/` | 1 | index |
| `/compare/` | 1 | index |
| `/notes/` | 1 | index |
| `/tracker/` | 1 | index |
| `/intel/` | 1 | index |
| `/help/` | 1 | index |
