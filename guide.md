# Project Guide: Ready Set UI

## Overview
This project is a marketplace for landing pages. Users can browse available templates on the main domain and preview/host them on subdomains.

- **Main Domain**: `https://readysetui.vercel.app/` (Lists all sites)
- **Subdomains**: `https://[site].readysetui.vercel.app/` (Hosts specific landing pages)

## Architecture

### 1. Proxy & Routing
We use Next.js Proxy (formerly Middleware) to handle multi-tenancy. The proxy intercepts every request and checks the `Host` header.

- **Main Domain Requests**:
  - If the host is `readysetui.vercel.app` (or `localhost:3000`), the request is handled normally by `app/page.tsx`.

- **Subdomain Requests**:
  - If the host is `[site].readysetui.vercel.app`, the proxy rewrites the URL to `/site/[site]${path}`.
  - Example: `https://site-a.readysetui.vercel.app/about` -> rewritten to `/site/site-a/about`.

### 2. Registry Pattern
To support hundreds of sites, we use a **Registry Pattern**.
- **Registry File**: `lib/registry.ts`
- **How to Add a Site**:
    1. Create components in `components/[site-name]/`.
    2. Add an entry to `siteRegistry` in `lib/registry.ts`.
    3. The dynamic pages (`app/site/[site]/page.tsx`) will automatically load your component.

### 3. Folder Structure

#### `app/`
We avoid creating a separate folder for every site in `app/`. Instead, we use a dynamic route structure:

- `app/page.tsx`: The homepage of the marketplace.
- `app/site/[site]/page.tsx`: The homepage of a specific landing page.
- `app/site/[site]/[...slug]/page.tsx`: Inner pages (e.g., `/about`, `/contact`) for a specific landing page.

#### `components/`
Each site has its own folder in `components/` to keep things organized.

- `components/site-a/`: All components for "Site A".
- `components/site-b/`: All components for "Site B".

## Best Practices & Standards

### 1. Design & Shadcn UI
We use `shadcn/ui` as a base, but **do not use it out of the box**.
- **Customize**: Override default styles to match the specific site's brand. A "Puppy Tech" site should not look like a generic Shadcn dashboard (DO NOT EDIT THE SHADCN COMPONENTS THEMSELVES).
- **Premium Feel**: Use custom colors, rounded corners, and typography to make the site feel unique and high-end.
- **Components**: Use Shadcn for functionality (Accordions, Dialogs, etc.) but style them heavily.

### 2. Icons
Use premium icon libraries. Do not use generic emojis if possible.
- **Recommended**: `lucide-react` (Primary), `react-icons`, `social-react-icons`.
- **Usage**: Import specific icons to keep bundle size low.

### 3. Links & Routing (CRITICAL)
When building a site that runs on a subdomain, **always use root-relative paths**.
- **CORRECT**: `<Link href="/signup">`
- **INCORRECT**: `<Link href="/site/puppy-tech/signup">`

**Why?**
When a user visits `puppy-tech.readysetui.vercel.app`, they are already "inside" the site.
- A link to `/signup` resolves to `puppy-tech.readysetui.vercel.app/signup`.
- The proxy then rewrites this internally to `/site/puppy-tech/signup`.
- If you hardcode `/site/puppy-tech/signup`, the user ends up at `puppy-tech.readysetui.vercel.app/site/puppy-tech/signup`, which is wrong.

### 4. Functional Pages
Landing pages must be fully functional.
- **No Dead Links**: "Get Started", "Login", "Pricing" buttons must go to real pages (even if simple placeholders).
- **Interactive**: Accordions should open, forms should have validation states (even if they don't submit to a backend yet).

## Available Libraries
We have pre-installed premium libraries for you to use:

- **Styling**: Tailwind CSS (Standard).
- **Icons**: `lucide-react` (Clean, consistent icons).
- **Animations**: `framer-motion` (Complex, smooth animations).
- **Utilities**: `clsx` and `tailwind-merge` (via `lib/utils.ts` `cn` function) for robust class merging.

## How to Add a New Site

1.  **Create Components**:
    - Create a new folder in `components/` (e.g., `components/my-new-site/`).
    - Build your components (Hero, Features, Footer, etc.).

2.  **Register Site**:
    - Add the site metadata to `lib/registry.ts` (for component loading).
    - Add the site details (tags, description) to `lib/site-data.ts` (for the homepage).

3.  **Handle Routing**:
    - The registry handles the routing automatically!

## Deployment (Vercel)

To make subdomains work in production (e.g., `puppy-tech.yourdomain.com`), you need to configure a **Wildcard Domain**.

1.  Go to your Vercel Project Settings > **Domains**.
2.  Add your domain: `yourdomain.com`.
3.  Add a wildcard domain: `*.yourdomain.com`.
    - Vercel will ask you to add a `CNAME` record (usually `cname.vercel-dns.com`) or `A` record in your DNS provider (GoDaddy, Namecheap, etc.).
4.  Once verified, any request to `anything.yourdomain.com` will hit your Next.js app, and the `proxy.ts` will handle the routing!

## Local Development (Subdomains)

To test subdomains locally (e.g., `puppy-tech.localhost:3000`), you must update your OS `hosts` file.

**Windows**: `C:\Windows\System32\drivers\etc\hosts`
**Mac/Linux**: `/etc/hosts`

Add the following lines:
```
127.0.0.1   puppy-tech.localhost
127.0.0.1   site-a.localhost
127.0.0.1   site-b.localhost
```
Without this, `http://puppy-tech.localhost:3000` will fail to resolve.
