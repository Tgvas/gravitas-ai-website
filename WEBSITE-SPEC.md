# Gravitas AI Website — MVP Spec for Claude Code

## Overview
Build the marketing website for **Gravitas AI** at **gravitasai.xyz**. This is a premium AI services company — the site must look enterprise-grade, not like an AI template. Think Palantir meets Stripe, not "gradient orbs and floating glass cards."

**Repo:** Create `Christopher-Graves/gravitas-ai-website` on GitHub (Christopher-Graves is the Gravitas Media org)
**Hosting:** Cloudflare Pages (deploy via Wrangler)
**Domain:** gravitasai.xyz (already on Cloudflare)

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 16 (latest — `next@latest`, currently 16.2.1) | SSR/SSG, SEO-friendly, Cloudflare Pages compatible |
| Styling | Tailwind CSS v4 | Constraint-based, fast, consistent |
| Animation | Framer Motion | Viewport detection, page transitions |
| Fonts | next/font (self-hosted) | No external font requests, better LCP |
| Icons | Lucide React (minimal set) | Clean, tree-shakeable |
| Deployment | Cloudflare Pages via Wrangler | Edge performance, DDoS protection |
| Package Manager | pnpm | Fast, disk-efficient |

### Cloudflare Pages Setup
- Use `@cloudflare/next-on-pages` for Next.js on Cloudflare
- `wrangler pages deploy` for deployment
- Configure `wrangler.toml` appropriately

---

## Brand & Design System

### Color Palette
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary Background (Light) | Cream / Warm Beige | #F5F0E8 | Main page background |
| Primary Background (Dark) | Deep Navy | #0D1B2A | Hero, footer, feature callouts |
| Text on Light | Near-Black Navy | #1A2535 | Body text, headings on beige |
| Text on Dark | Off-White | #F0EDE6 | Text on navy sections |
| Accent / CTA | Warm Gold | #C49A2A | CTA buttons, highlights — SPARINGLY |
| Gold (muted) | Antique Gold | #A07820 | Hover states, decorative dividers |
| Neutral Mid | Warm Gray | #8A8070 | Secondary text, captions |

### Gold Usage Rules (CRITICAL)
- Gold on MAX 2-3 elements per page: primary CTA, one accent line, one decorative element
- **Never** gold as background fill for large sections (reads "crypto")
- **No** gold gradients. Flat gold only.
- Gold as text color only at large sizes (headlines, pull quotes)

### Typography
| Role | Font | Alternative | Notes |
|------|------|------------|-------|
| Display / Hero (H1) | Playfair Display (serif) | DM Serif Display | Weight 700, large scale, editorial |
| Section Headlines (H2, H3) | Playfair Display | Cormorant Garamond | Serif, maintains hierarchy |
| Body / UI Text | DM Sans | Plus Jakarta Sans | Clean, modern, NOT Inter |
| Monospace / Technical | IBM Plex Mono | JetBrains Mono | Code snippets, tech credibility |
| Navigation / Labels | DM Sans, 500 weight | — | Uppercase or small-caps for labels |

### Type Scale (8px Grid)
- H1 Display: 64–80px / line-height 1.1
- H2: 40–48px / line-height 1.2
- H3: 28–32px / line-height 1.3
- Body Large: 18–20px / line-height 1.6
- Body: 16px / line-height 1.65
- Small / Caption: 13–14px / line-height 1.5

### Spacing System
- Base unit: 8px. All spacing multiples of 8.
- Section padding: 96–128px vertical (enterprise sites BREATHE)
- Max content width: 1200–1280px
- Text column max-width: 680–720px for readability
- Card padding: 32–40px minimum internal

---

## ANTI-PATTERNS — DO NOT DO THESE

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Purple/teal gradient hero backgrounds | Deep navy with selective gold accent |
| Floating 3D objects / glassmorphic cards | Flat cards with subtle border + shadow |
| Stock photos of people at screens | No photography, or abstract geometric brand art |
| Three identical horizontal feature cards | Alternating content blocks, varied layouts |
| Rotating particle/orb backgrounds | Static or barely-moving backgrounds |
| "Powered by AI" badges everywhere | Specific outcomes and capabilities |
| "Get Started Free" / "Try It Now" CTAs | "Book a Strategy Call" / "See the Platform" |
| Inter + Geist font stack | Playfair Display + DM Sans |
| Five different typefaces | Exactly two: one serif, one sans-serif |
| Gold everywhere (crypto aesthetic) | Gold sparingly: CTA button + one accent per section |
| Missing legal/privacy pages | Launch with Privacy Policy + Terms |

---

## Pages to Build

### 1. Homepage (`/`)
**Hero Section (Navy background)**
- Headline: "Your AI Operations Team, Professionally Deployed." (Playfair Display, 64-80px)
- Subhead: 2-3 sentences explaining what Gravitas AI does — setup AI agent teams, consulting, automated pipelines, operations platform. Target audience: business owners, not engineers.
- Single CTA button: "Book a Strategy Call" (gold)
- Secondary link: "See How It Works →"
- NO generic AI imagery. Options: abstract geometric composition in brand colors, or pure typographic hero
- Subtle fade-in animation on text

**Services Overview Section (Beige background)**
- Alternating content blocks (NOT 3-column card grid)
- 4 services, each with: H3 name, 1-line outcome, 2-3 sentences, "Learn More →" link
  1. **AI Agent Setup** — "We deploy and configure AI agent teams using OpenClaw so your business runs smarter without hiring more people."
  2. **AI Consulting** — "Strategic guidance on where AI fits your business, what to automate first, and how to measure ROI."
  3. **Automated Pipelines** — "Custom AI pipelines that connect your tools, automate workflows, and eliminate manual busywork."
  4. **AI Operations Platform** — "A Jira-like platform for managing your AI team — track every agent, task, and result in one place."

**Platform Teaser Section (Navy background)**
- Full-width. Product description on one side.
- Position as "Jira for AI Teams" — manage AI agents through a familiar project management interface
- CTA: "Request Early Access" or "Join the Waitlist"
- This is a teaser — the product is coming, sell the vision

**Social Proof / Credibility Section (Beige)**
- Founder credentials: Chris Graves, Principal Software Engineer, built agent systems for enterprise
- No fake testimonials. Real credentials only.
- Trust signals: "US-Based Team" / "Enterprise SLA Available"

**Mid-page CTA Strip (Navy)**
- Single line: "Ready to operationalize AI in your business?"
- Gold CTA: "Book a Strategy Call"

**How It Works Section (Beige)**
- 3-4 steps showing the engagement flow:
  1. Strategy Call — understand your business needs
  2. Architecture & Setup — design and deploy your AI team
  3. Launch & Train — go live with ongoing support
  4. Scale & Optimize — grow your AI operations over time

**Pricing Preview Section (Beige)**
- Three tiers:
  | Tier | Price | Target | CTA |
  |------|-------|--------|-----|
  | Starter | $99/month | Small teams testing AI | Get Started |
  | Growth (highlighted) | $299/month | Scaling teams, multiple agents | Book a Call |
  | Enterprise | Custom | Large deployments, SLA | Contact Us |
- Note: "Setup services available from $1,500" 
- Annual/monthly toggle

**Footer (Very dark navy)**
- 4 columns: Company (About, Blog), Services (each service), Platform (Features, Pricing), Legal (Privacy, Terms)
- Social: LinkedIn, GitHub
- Contact: hello@gravitasai.xyz
- Copyright 2026 Gravitas AI LLC

### 2. Services Pages
Create individual pages for each service:
- `/services/ai-agents/` — AI Agent Setup (OpenClaw)
- `/services/ai-consulting/` — AI Consulting
- `/services/ai-automation/` — Automated Pipelines
- `/services/openclaw-setup/` — OpenClaw Configuration

Each page structure:
- Hero with service name + outcome statement
- Problem/solution narrative
- What's included (feature list)
- Process steps
- CTA: "Book a Strategy Call"

### 3. Platform Page (`/platform/`)
- The AI Operations Platform vision
- Feature highlights: Kanban boards, agent assignment, progress tracking, human-in-the-loop steering
- Position against competitors: "Not just a chatbot. A whole org chart that ships."
- CTA: "Request Early Access"

### 4. About Page (`/about/`)
- Company story and mission
- Chris Graves bio + photo placeholder
- Why Gravitas AI exists — the vision of AI teams managed like human teams
- Values / approach

### 5. Pricing Page (`/pricing/`)
- Full pricing table with feature comparison
- Three tiers (Starter, Growth, Enterprise)
- Setup services pricing
- FAQ section with common pricing questions
- FAQPage schema markup

### 6. Contact Page (`/contact/`)
- Simple contact form (name, email, company, message)
- "Book a Strategy Call" CTA (link to Cal.com or similar)
- Email: hello@gravitasai.xyz
- Response time expectation

### 7. Legal Pages
- `/privacy/` — Privacy Policy
- `/terms/` — Terms of Service

---

## Navigation

```
Gravitas AI [logo]    Services ▾   Platform   About   Pricing   [Book a Strategy Call]
```

- Sticky nav: transparent on load → solid navy after 60px scroll with subtle border-bottom
- Services dropdown: AI Agent Setup, AI Consulting, Automated Pipelines, AI Operations Platform
- Gold CTA button right-aligned
- Mobile: Full-screen overlay menu (not side drawer), large tap targets (44px min)

---

## SEO Requirements (Build into every page)

### Technical SEO
- XML sitemap at `/sitemap.xml` (auto-generated by Next.js)
- `robots.txt` allowing all important pages
- Canonical tags on every page
- Breadcrumb navigation on all interior pages

### Schema Markup (JSON-LD on every page)
- **Organization** schema on homepage + about
- **Service** schema on each service page
- **FAQPage** schema on pricing page FAQ
- **BreadcrumbList** schema on all interior pages
- **Person** schema on about page (Chris Graves)

### Meta Tags
- Title format: `[Primary Keyword] | [Value Prop] — Gravitas AI`
- Meta descriptions: 120-155 chars, keyword + CTA
- Open Graph tags on all pages (og:title, og:description, og:image)
- Twitter card meta tags
- Favicon (32px + 180px Apple touch icon)
- OG image: 1200x630px branded image

### Performance Targets
- Lighthouse: 90+ mobile, 95+ desktop
- LCP: under 2.5s
- CLS: under 0.1
- All animations: CSS transforms + opacity only (GPU-composited)
- `prefers-reduced-motion` media query respected

---

## Animation Guidelines

**DO:**
- Scroll-triggered fade-in + translate up 20-30px (400-600ms, ease-out)
- Staggered reveals for card groups (50-80ms stagger)
- Hero headline: word-by-word or fade-in (800ms max, ONLY on main hero)
- Smooth nav underline on hover (150ms)
- CTA button hover: subtle scale (1.02) + color shift (150ms)
- Card hover: lift shadow + scale (1.01) + border color shift (200ms)

**DON'T:**
- Continuous background animations
- Parallax on text content
- Loading screens (sub-1s load is the goal)
- Auto-playing video
- Scroll-jacking

---

## File Structure

```
gravitas-ai-website/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Home
│   │   ├── services/
│   │   │   ├── ai-agents/page.tsx
│   │   │   ├── ai-consulting/page.tsx
│   │   │   ├── ai-automation/page.tsx
│   │   │   └── openclaw-setup/page.tsx
│   │   ├── platform/page.tsx
│   │   ├── about/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                       # Button, Card, Input, Badge
│   ├── sections/                 # Hero, Services, Pricing, CTA, etc.
│   └── layout/                   # Nav, Footer, Breadcrumbs
├── lib/
│   ├── fonts.ts                  # next/font config (Playfair + DM Sans)
│   └── metadata.ts               # SEO helpers
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── robots.txt
├── wrangler.toml                 # Cloudflare Pages config
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Deployment

1. Initialize repo: `gh repo create Tgvas/gravitas-ai-website --public --clone`
2. Build with Next.js + `@cloudflare/next-on-pages`
3. Configure `wrangler.toml` for Cloudflare Pages
4. Deploy: `npx wrangler pages deploy .vercel/output/static` (or appropriate build output)
5. Push to GitHub, set up Cloudflare Pages to auto-deploy from `main` branch

---

## Content Tone

- **Enterprise, not startup.** "We deploy AI operations teams" not "🚀 Supercharge your business with AI!"
- **Outcome-focused.** "Reduce operational costs by 40%" not "AI-powered workflow automation"
- **Confident, not hype-y.** State capabilities directly. No exclamation points. No "revolutionary."
- **Business owner audience.** No jargon. No "LLM," "RAG," "fine-tuning" on the marketing pages. Save that for the blog.
- **Gravitas.** The name says it all. Weight, authority, seriousness.

---

## MVP Scope — What to Ship Now

**Phase 1 (this build):**
- Homepage (all sections above)
- 4 service pages
- Platform page
- About page
- Pricing page
- Contact page (form can be non-functional placeholder for now)
- Privacy + Terms pages
- Full navigation + footer
- All schema markup
- Responsive mobile design
- Deployed to Cloudflare Pages via Wrangler
- Pushed to GitHub

**Phase 2 (later):**
- Blog / Resources section
- Cal.com booking integration
- Contact form backend
- Blog CMS (Sanity or MDX)
- Case studies
- AI Glossary resource page
