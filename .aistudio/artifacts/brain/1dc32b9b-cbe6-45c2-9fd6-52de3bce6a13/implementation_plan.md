# Ilham Fadhli — Senior QA Engineer & SDET Portfolio

An executive-grade, recruiter-tailored web portfolio and interactive resume for Ilham Fadhli, showcasing 10+ years of quality engineering leadership across Enterprise FoodTech, E-Commerce Retail, and Mobile Gaming platforms.

## User Review & Critical Decisions

> [!IMPORTANT]
> The architectural and design decisions below reflect your selections from Phase 1. Review the structure before implementation begins.

- **Confirmed Decision 1: Three Domain-Specific Industry Themes**:
  - **Enterprise FoodTech & AI Hospitality** (`Tabsquare.AI`): Styled with clean emerald & cyan pipeline indicators, reflecting high-throughput APIs, terminal kiosks, and zero-defect deployments.
  - **Retail & E-Commerce / Consumer Tech** (`Erajaya Group`): Styled with refined sapphire & indigo accents, representing high-traffic retail storefronts (iBox, eraspace) and POS reliability.
  - **Mobile Gaming & Entertainment** (`Alegrium.io` & `Batavian Studio`): Styled with amber & violet accents, highlighting cross-platform compatibility, mobile matrix testing, and high-DAU titles (Cash Inc., Icon Pop Quiz 2).
- **Confirmed Decision 2: Recruiter-Centric Features**:
  - Full-fidelity PDF Resume Viewer embedding `/public/assets/aistudio/Ilham_Fadhli_CV_c30487d3.pdf` with download, print, zoom, and open-in-tab actions.
  - Interactive Project Case Studies with defect reduction data, QA architecture strategies, testing tools, and root cause analysis workflows.
  - Live Interactive QA Test Pipeline Simulator demonstrating automated smoke test execution, API contract checks, and TestRail/JIRA reporting.
- **Confirmed Decision 3: Priority Hierarchy**:
  - Enterprise platforms, API services, and e-commerce retail lead the primary view, with mobile gaming as an expansive specialized discipline.

---

## 1. Overview & Core Concept

- **What It Does**: Provides hiring managers and technical recruiters with an authoritative, scannable, and interactive showcase of Ilham Fadhli's 10-year career as a Senior QA Engineer and SDET. It converts standard resume bullet points into interactive case studies, measurable testing benchmarks, and directly verifiable credentials.
- **Target Audience / Persona**: Engineering managers, VP of Engineering, Lead SDETs, and tech recruiters seeking proven test automation architects, API quality specialists, and QA leaders in APAC and remote markets.
- **Key Value**: Delivers tangible proof of engineering impact (zero-defect production launches, 3 consecutive Extra-Mile awards, 40% bug turnaround reduction) with 1-click recruiter actions (downloading CV, scheduling an interview, copying verified contact details).

---

## 2. User Experience & Visual Design

### Top Bar Contract
Adheres strictly to the 1-row, 3-zone contract:
- **Zone 1 (Brand)**: `Ilham Fadhli` in Plus Jakarta Sans bold with an inline SDET subtitle.
- **Zone 2 (Nav Links)**: Single-line unboxed text navigation links: `Overview`, `Case Studies`, `Experience`, `Test Pipeline`, `Resume PDF`.
- **Zone 3 (Primary Action)**: `Download CV` with direct link to the local PDF file and a quick `Contact` modal trigger.

### Visual Identity & Theme
- **Aesthetic Direction**: High-precision engineering workbench. Minimalist dark canvas with subtle hairline borders (`border-slate-800`), crisp typography, and zero frivolous AI sparkle or fake pulsing status dots.
- **Color Palette (60-30-10 Rule)**:
  - *60% Neutral Canvas*: Stark dark slate background (`#0B0F17`) with rich dark surface panels (`#111827`).
  - *30% Structural Surfaces*: Subtle borders (`#1E293B`), quiet dividers, and clear slate-300 / slate-400 typography.
  - *10% Thematic Accents*:
    - Global Accent: Cyan-400 (`#22D3EE`) for primary interactive controls and focus rings.
    - FoodTech / Enterprise: Emerald-400 (`#34D399`).
    - E-Commerce / Retail: Blue-400 (`#60A5FA`).
    - Mobile Gaming: Violet-400 (`#A78BFA`).
- **Typography & Tabular Discipline**:
  - Display & Headings: `Plus Jakarta Sans`, tight tracking, balanced line wrapping.
  - Body Prose: `Plus Jakarta Sans` / `Inter-compatible sans`, 15px with 1.6 line height.
  - Metrics & Telemetry: Monospace tabular numbers (`font-mono tabular-nums`) for test counts, bug turnaround times, pass rates, and date ranges.
- **Zero-Pill Discipline**:
  - Tags, skills, dates, and locations are rendered as quiet, unboxed inline text with typographic separators (`·`, `/`).
  - Interactive industry switcher and case study filters are functional segmented buttons.

### Key Sections & Layout Rhythm
1. **Hero Split & Recruiter Quick Card**:
   - Left: Headline ("Senior QA Engineer & SDET"), summary, location ("Bogor, ID / Open to Remote, Hybrid & Relocation APAC"), quick contact bar (Email, LinkedIn, Phone, GitHub).
   - Right: Interactive Impact Matrix highlighting 10+ Years Experience, 3x Tabsquare Extra-Mile Award Winner (2022, 2023, 2024), 99.8% Smoke Test Pass Rate, and Enterprise APIs tested.
2. **Industry Domain Switcher & Case Studies**:
   - Segmented interactive switcher between **Enterprise FoodTech (Tabsquare.AI)**, **Retail & E-Commerce (Erajaya Group)**, and **Mobile Gaming (Alegrium / Batavian)**.
   - Deep-dive case study cards showing: Problem statement, QA Architecture, Test Automation Frameworks (Python, Selenium, Appium, JMeter), CI/CD flow, and measurable outcomes.
   - Interactive "Inspect Case Study" modal with detailed test architecture diagrams and defect management lifecycle.
3. **Interactive QA Pipeline & Automation Playground**:
   - A realistic, interactive automated testing run simulator where recruiters can trigger a mock smoke test for "Order Service API v2" or "Storefront Checkout", observing test steps, assertions, response times, and TestRail reporting in real time.
4. **Professional Career Timeline & Leadership**:
   - Chronological breakdown from Batavian Studio (2015) up to Tabsquare.AI (Present/2026).
   - Expandable achievements, company release policies enforced, team mentoring highlights.
5. **Technical Skills Taxonomy**:
   - Grouped into Test Automation & Performance, API & Backend Testing, Test Management & CI/CD, and Testing Methodologies.
6. **Integrated Full-Screen Resume PDF Viewer**:
   - Native iframe/embed viewer for `/public/assets/aistudio/Ilham_Fadhli_CV_c30487d3.pdf` with zoom controls, download button, and direct full-screen toggle.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Native Asset PDF Rendering vs Third-Party Document Embedder**:
  - *Chosen Approach*: Use the local `/public/assets/aistudio/Ilham_Fadhli_CV_c30487d3.pdf` directly via native browser object/iframe with fallback download button.
  - *Why*: Eliminates external dependencies, avoids sandboxed iframe cross-origin blocks, and guarantees 100% offline availability in AI Studio.
- **Decision 2: Industry Theming via Contextual State vs Hard Page Splits**:
  - *Chosen Approach*: Single-page fluid architecture with an active industry context controller that updates accent tokens and filters case studies dynamically.
  - *Why*: Recruiter scans need immediate single-page cohesion; recruiters rarely click across multiple disparate routes.
- **Decision 3: Interactive Smoke Test Simulator**:
  - *Chosen Approach*: Client-side deterministic execution engine allowing recruiters to simulate running a test suite (API validation, smoke tests, performance stress test) with realistic log streaming.
  - *Why*: Directly proves SDET domain competence and makes the portfolio memorable.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                     App.tsx (Main Shell)                   │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Navigation Header (Brand, Section Links, CTA Actions) │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────┬─────────────────────────────┐  │
│  │ Hero & SDET Profile     │ Career Impact KPI Matrix    │  │
│  └─────────────────────────┴─────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Industry Thematic Switcher (Tabsquare, Erajaya, Mobile)│  │
│  │  ├── Case Study Cards (Problem, Strategy, Metrics)     │  │
│  │  └── Case Study Detail Modal (Root Cause & Tools)     │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Interactive QA Pipeline Simulator (Test Runner Logs)  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Professional Experience Timeline & Awards             │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Technical Skills Matrix (Automation, APIs, CI/CD)     │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Integrated PDF Resume Viewer & Direct Download Bar    │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Footer (Verified Contact, Recruiter Copy, LinkedIn)   │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Component & State Strategy
- **State Store (`activeIndustry`)**: Tracks current selected industry (`'all' | 'enterprise-foodtech' | 'retail-ecommerce' | 'mobile-gaming'`).
- **State Store (`activeCaseStudy`)**: Controls the inspection modal for detailed testing architecture.
- **State Store (`testRunnerState`)**: Manages the interactive test runner execution (idle, running, step index, logs, completed).
- **PDF Viewer (`pdfViewMode`)**: Toggles between embedded split view and full-width reading view.
- **Contact State (`isContactModalOpen`, `copyStatus`)**: Provides instant 1-click clipboard copying for email (`ilhamfadhly15@gmail.com`) and phone (`+62 899 6001 601`).
