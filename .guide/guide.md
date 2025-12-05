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

### 4. Registry Pattern
To add a site, you must follow the **Registry Pattern**:
1.  **Create Components**: `components/[site-name]/`
2.  **Register Site**: Add entry to `lib/registry.ts`.
3.  **Add Metadata**: Add details to `lib/site-data.ts`.

### 5. Functional Pages (ZERO TOLERANCE)
-   **ALL LINKS MUST WORK**:
    -   Every single button, link, or interactive element MUST do something.
    -   **NEVER** leave a link as `#` or empty.
    -   **CREATE COMPONENTS**: If a link goes to `/pricing`, you MUST create a `Pricing` component (even a simple one) and ensure the route works.
    -   **No "Coming Soon" Text Only**: The page must have a proper layout (Navbar, Footer) even if the content is minimal.
    -   **Broken links are a critical failure.**
-   **Interactivity**: Components must work (Accordions open, Tabs switch).

## Deployment (Vercel)
-   **Wildcard Domain**: `*.readysetui.top` must be configured in Vercel.
-   **CNAME**: Point to Vercel DNS.



> [!WARNING]
> **FINAL REMINDER**
> Follow these rules strictly. Quality and precision are paramount.
