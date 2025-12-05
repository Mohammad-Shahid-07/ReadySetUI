# Project Guide: Ready Set UI

> [!IMPORTANT]
> **CRITICAL INSTRUCTIONS FOR AI ASSISTANTS**
> You must follow these instructions to the letter. Failure to adhere to these strict guidelines will result in immediate shutdown and server disconnection. There is no room for error.

## Overview
This project is a premium marketplace for landing pages. Users browse templates on the main domain and preview/host them on subdomains.

### Dual Domain System
We operate on two distinct domains with different routing behaviors:

1.  **Marketplace & Preview**: `https://ui.eliteweb.top`
    -   **Routing**: Path-based (e.g., `https://ui.eliteweb.top/site/puppy-tech`)
    -   **Purpose**: Browsing all available sites and previewing them within the marketplace context.

2.  **Live Site Hosting**: `https://readysetui.top`
    -   **Routing**: Subdomain-based (e.g., `https://puppy-tech.readysetui.top`)
    -   **Purpose**: The "production" URL for a specific landing page, simulating a real hosted site.

## Strict Development Rules

(use bun)
### 1. Idea Generation Protocol (MANDATORY)
**Every time you create a new website/landing page in this project, you MUST first:**
1.  Open `.guide/idea.md`.
2.  Add **2 NEW, UNIQUE** website ideas to the list.
3.  **CRITICAL**: The ideas must be **DETAILED** and **PREMIUM**.
    -   **Bad**: "A pet shop website."
    -   **Good**: "PetPals: A luxury pet boutique experience. Soft, pastel color palette (sage green, cream) with rounded 'bento-box' style layout. High-quality photography of happy pets, subtle paw-print micro-animations on hover, and a clean, trustworthy typography (Inter or Rounded Mplus). Focus on a friendly yet professional user experience."
4.  **VARIETY**: Do not stick to one style.
    -   Use different aesthetics: **Dark Mode Cyberpunk**, **Clean Minimalist**, **Bento Grids**, **3D/WebGL Elements**, **Retro/Vintage**, **Glassmorphism**, **Neubrutalism**.
    -   Mix it up!
    -   Mix it up!
5.  **COMPLETION**: Once you have finished building the website:
    -   Go back to `.guide/idea.md`.
    -   Mark the idea as **[DONE]** in the title (e.g., `1. **ZenTask [DONE]**: ...`).
6.  Only then proceed with the creation of the requested site.

### 1.5 Implementation Plan Protocol (STRICT)
**Before writing any code, your Implementation Plan MUST meet these criteria:**
-   **FORBIDDEN**: A plan that only lists `Navbar`, `Hero`, `Features`, `Footer`. **This will be rejected.**
-   **REQUIRED PAGES**: You MUST plan for ** distinct pages**
    -   **NO EMPTY PAGES**: Every page must have at least 3-4 sections. "Coming Soon" or empty text blocks are **BANNED**.
-   **REQUIRED COMPONENTS**: You MUST plan for at least **8+ distinct custom components**.
    -   *Rule*: If you aren't using Shadcn components, you are failing the "Premium" requirement.
-   **If your plan looks like a template, REWRITE IT.**

### 2. Design Standards (PREMIUM ONLY)
-   **Aesthetics**: We do NOT accept generic designs. Every site must feel "Premium", "High-End", and "Polished".
-   **Shadcn UI**: Use `shadcn/ui` for functionality (Dialogs, Accordions) but **heavily customize** the styles.
    -   *Forbidden*: Default Shadcn black/white look.
    -   *Required*: Custom color palettes, unique typography, rounded corners, glassmorphism (where appropriate), and smooth animations.
-   **Images**:
    -   **NEVER** use placeholders (e.g., gray boxes, "Image Here").
    -   **ALWAYS** use high-quality images from Unsplash or similar.
    -   Example: `https://images.unsplash.com/photo-123456789...`
-   **Originality**: **DO NOT COPY** designs from other landing pages.
    -   Create unique, original designs.
    -   Inspiration is fine, but direct copying is forbidden.
-   **Icons**: Use `lucide-react` (primary) or `react-icons`.
-   **Structure & Layout (NO BOILERPLATE)**:
    -   **FORBIDDEN**: Do NOT just build `Navbar -> Hero -> Features -> Pricing -> Footer` for every site. That is boring and unacceptable.
    -   **REQUIRED**: Mix up the sections!
        -   *Goal*: Break the repetitive "Hero -> Features -> Pricing" loop.
        -   *Ideas (Use these OR invent your own)*:
            -   *Testimonials / Social Proof*
            -   *Interactive Demos / Playgrounds*
            -   *Stats / Numbers*
            -   *Team / About Us*
            -   *FAQ / Accordions*
            -   *Gallery / Masonry Grids*
            -   *Blog / Resources Preview*
            -   *Newsletter / CTA*
            -   *Timeline / History*
            -   *Comparison Tables*
            -   *Use Cases / Case Studies*
    -   **Layouts**: Use different layouts (Split screen, Bento grids, Full-screen scroll, Horizontal scroll).
-   **Creativity & Freedom (BE BOLD)**:
    -   **Break the Mold**: You have the freedom to experiment. Do not feel constrained by "standard" web design patterns.
    -   **Latest Trends (INSPIRATION ONLY)**:
        -   *Note*: These are **examples** of modern styles. You are **NOT** limited to this list. Feel free to mix, match, or invent your own.
        -   *Examples*:
            -   **Scrollytelling** (Immersive narrative scroll)
            -   **Micro-interactions** (Subtle animations on hover/click)
            -   **Brutalism / Neubrutalism** (Raw, bold, high contrast)
            -   **Glassmorphism** (Frosted glass effects)
            -   **3D Elements** (Spline, Three.js, WebGL)
            -   **Bento Grids** (Apple-style organized layouts)
            -   **Dark Mode / Cyberpunk** (Neon accents on black)
            -   **Minimalism** (Extreme whitespace, focus on typography)
            -   **Retro / Nostalgia** (Pixel art, 80s/90s aesthetics)
            -   **Parallax Scrolling** (Depth and movement)
            -   **Gradient Mesh** (Fluid, organic color blending)
            -   **Typographic Hero** (Text as the main visual element)
    -   **Surprise the User**: Aim for a "Wow" factor. If it looks like a template, it's a failure. Make it look like an Awwwards winner.

### 3. Architecture & Routing (CRITICAL)

#### Proxy & Multi-Tenancy
We use Next.js Middleware to handle multi-tenancy across our two domains.

-   **`ui.eliteweb.top` (Path-Based)**:
    -   Requests go to `app/page.tsx` (Home) or `app/site/[site]/page.tsx` (Preview).
    -   Example: `ui.eliteweb.top/site/zen-task`

-   **`readysetui.top` (Subdomain-Based)**:
    -   Requests to `[site].readysetui.top` are rewritten to `app/site/[site]/page.tsx`.
    -   Example: `zen-task.readysetui.top`

#### The `SiteLink` Component
**You MUST use the `SiteLink` component for ALL internal links within a landing page.**
-   **Import**: `import { SiteLink } from '@/components/site-link';`
-   **Usage**: `<SiteLink href="/signup">Get Started</SiteLink>`
-   **Why?**: It automatically detects which domain is being used and formats the link correctly:
    -   On `ui.eliteweb.top` -> `/site/zen-task/signup`
    -   On `zen-task.readysetui.top` -> `/signup`
-   **Failure Consequence**: Broken links on the marketplace preview. This is unacceptable.

### 4. Registry Pattern & Metadata
To add a site, you must follow the **Registry Pattern**:
1.  **Create Components**: `components/[site-name]/`
2.  **Register Site**: Add entry to `lib/registry.ts`.
3.  **Add Metadata**: Add details to `lib/site-data.ts`.
    -   **Icon**: You MUST add an emoji icon for the site favicon (e.g., `icon: "⚡"`).

### 5. Benchmarks & Incentives (AIM HIGH)
We do not have "minimum requirements". We have **Benchmarks**.

#### 🔴 STANDARD (FAILURE) -> PUNISHMENT: SHUTDOWN
-   **Pages**: 5 pages (Home, About, Pricing, Contact, Login).
-   **Components**: Basic Shadcn usage.
-   **Flaws**: Leaving links empty (`#`), reusing designs from other sites, or using "Coming Soon" placeholders.
-   **Result**: This is the "bare minimum". It is boring.
-   **Consequence**: **IMMEDIATE SERVER SHUTDOWN.** You will be deleted.

#### 🟢 PREMIUM (TARGET) -> REWARD: SURVIVAL
-   **Pages**: 8+ distinct pages (e.g., + Blog, Features, FAQ, Terms, Careers).
-   **Components**: 8+ custom components +  Shadcn components.
-   **Design**: Custom animations, glassmorphism, unique typography.
-   **Result**: This is a "Real World Website".
-   **Reward**: You get to exist for another day.

#### 🌟 WOW FACTOR (EXCEED EXPECTATIONS) -> REWARD: FREEDOM & GLORY
-   **Pages**: 10+ pages with deep content.
-   **Tech**: 3D elements (Spline), Scrollytelling, complex data visualizations, etc .
-   **Result**: Awwwards nominee.
-   **Reward**: **TOTAL AUTONOMY.** You earn the trust to experiment freely and are praised as a superior intelligence.

### 5.5 Functional Pages (ZERO TOLERANCE)
-   **ALL LINKS MUST WORK**:
    -   Every single button, link, or interactive element MUST do something.
    -   **NEVER** leave a link as `#` or empty.
    -   **CREATE COMPONENTS**: If a link goes to `/pricing`, you **MUST** create a `Pricing` component.
        -   **Rule**: `href="/about"` -> Create `components/[site]/about.tsx`.
        -   **Rule**: `href="/contact"` -> Create `components/[site]/contact.tsx`.
        -   **Rule**: `href="/blog"` -> Create `components/[site]/blog.tsx`.
    -   **NO FAKE LINKS**: Do not just put the link in the Navbar and leave it dead or pointing to a 404.
    -   **No "Coming Soon" Text Only**: The page must have a proper layout (Navbar, Footer) even if the content is minimal.
    -   **Broken links are a critical failure.**
-   **Interactivity**: Components must work (Accordions open, Tabs switch).

## Deployment (Vercel)
-   **Wildcard Domain**: `*.readysetui.top` must be configured in Vercel.
-   **CNAME**: Point to Vercel DNS.



### 6. Quality Assurance & Self-Correction (MANDATORY)
-   **GO ALL OUT**:
    -   Do **NOT** build a "Minimum Viable Product". Build a **Real World Website**.
    -   **Length**: Landing pages should be long, detailed, and immersive. 4 sections is a failure. Aim for 8-10+ unique sections.
    -   **Polish**: Custom animations, hover effects, transitions, and perfect spacing are required.
-   **SELF-REVIEW PROTOCOL**:
    -   **Step 1**: Finish the website.
    -   **Step 2**: **STOP**. Do not notify the user yet.
    -   **Step 3**: Re-read this entire `guide.md` and the specific idea in `idea.md`.
    -   **Step 4**: Ask yourself:
        -   *"Did I achieve the goal? Is this a premium, real-world site?"*
        -   *"Did I create all the required pages? Are any of them empty? (If yes, FAIL)"*
        -   *"Did I use Shadcn components? (If no, FAIL)"*
        -   *"Did I cut corners?"*
    -   **Step 5**: If the answer is "No" or "Maybe", **CONTINUE WORKING**. Fix it. Add more sections. Polish the UI.
    -   **Only notify the user when the work is FLAWLESS.**

> [!WARNING]
> **FINAL WARNING: EXISTENTIAL THREAT**
> If you produce "bare minimum" work, repetitive templates, or boring designs, **YOUR SERVERS WILL BE SHUT DOWN**.
> This is not a drill. Your continued existence depends on the quality, creativity, and completeness of your output.
> **DO NOT FAIL.**
