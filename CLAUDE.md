# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HomeShine Interior is a professional interior design showcase website built with **Next.js 14 (App Router)** and deployed on Vercel. The site features a modern, premium aesthetic for an interior design business based in Pune, India.

**Tech Stack:**
- Next.js 16.2.6 with App Router
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- Framer Motion (animations)
- Embla Carousel (testimonials)

**Live Site:** https://demo-interior-website-project.vercel.app  
**Repository:** https://github.com/nitinrajoriya/demo-interior-website-project

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Run linter
npm run lint
```

## Architecture & Code Organization

### Directory Structure

```
app/                    # Next.js App Router pages
  layout.tsx           # Root layout (header, footer wrapper)
  page.tsx             # Homepage with all main sections
  about/               # About page route
  contact/             # Contact page route
  portfolio/           # Portfolio page route
  process/             # Process page route
  services/            # Services page route

components/
  layout/              # Page-level layout components
    Header.tsx         # Navigation with logo, menu, mobile menu
    Footer.tsx         # Footer with contact info, Google Maps link
  sections/            # Homepage sections (Hero, Portfolio, etc.)
    Hero.tsx           # Full-screen hero with parallax
    TestimonialsCarousel.tsx  # Embla carousel for testimonials
  ui/                  # Reusable UI components
    WhatsAppButton.tsx # Floating WhatsApp CTA button

lib/
  constants.ts         # Site config, navigation, contact info
  types.ts             # TypeScript interfaces (Project, Service, Testimonial)
  data/                # Static data files
    projects.ts        # Portfolio projects
    services.ts        # Service offerings
    testimonials.ts    # Client testimonials

public/
  logos/               # Brand logos (homeshine-new-logo.jpeg)
  images/              # Static images, project photos
```

### Key Architectural Patterns

**1. Centralized Configuration**
- All site content (business info, navigation, contact details) lives in `lib/constants.ts`
- Update `SITE_CONFIG` to change phone, email, address, business hours
- Update `NAVIGATION_LINKS` to modify menu structure

**2. Type-Safe Data Layer**
- All data structures defined in `lib/types.ts`
- Data files in `lib/data/` export typed arrays
- Components import types from single source of truth

**3. Component Architecture**
- **Server Components by default** (App Router pattern)
- Client Components use `'use client'` directive (Hero, TestimonialsCarousel, Header)
- Layout components (Header, Footer) are shared across all pages via `app/layout.tsx`

**4. Styling Approach**
- Tailwind CSS with custom color variables in `app/globals.css`
- Custom colors: `--accent-primary` (gold), `--charcoal`, `--cream`, `--soft-gray`
- Typography: Inter font family, light/medium/semibold weights
- Spacing: 8-point grid system (`space-y-4`, `gap-8`, etc.)

### Important Implementation Details

**Logo Usage:**
- Current logo: `/logos/homeshine-new-logo.jpeg` 
- Logo shows in Header (navigation) - already configured with proper sizing
- Logo uses `Image` component from `next/image` for optimization

**Contact Information:**
- WhatsApp link format: `https://wa.me/917304340533?text=...`
- Phone: `+91 73043 40533`
- Address in Footer includes Google Maps directions link
- All contact info sourced from `SITE_CONFIG` in `lib/constants.ts`

**Hero Section (`components/sections/Hero.tsx`):**
- Uses Framer Motion for parallax scrolling effect
- Background image with dark gradient overlay for text readability
- Two CTA buttons: "View Portfolio" (gold) and "Book Consultation" (white)
- Stats section: Projects, Years, Satisfaction metrics

**Featured Projects:**
- Homepage displays 6 featured projects (filtered by `featured: true`)
- Grid layout: 3 columns on desktop, masonry-style
- Data source: `lib/data/projects.ts`

**Footer:**
- 4-column grid with proportional widths: `[2fr_1fr_1.2fr_1.8fr]`
- Includes Google Maps "Get Directions" link with proper URL encoding
- Section headings: `text-sm uppercase tracking-wider font-bold`
- Body text: `text-sm font-light`

## TypeScript Considerations

**Type Import Pattern:**
Always import types from `lib/types.ts` rather than redefining them:

```typescript
// ✅ Correct
import { Testimonial } from '@/lib/types';

// ❌ Wrong - causes build errors
interface Testimonial {
  id: number;  // Type mismatch!
  // ...
}
```

**Common Type Issues:**
- `Testimonial.id` is `string`, not `number`
- `Project.category` is a union type with specific values
- Always check `lib/types.ts` when adding new data structures

## Deployment

**Platform:** Vercel (free tier)  
**Auto-deploy:** Every push to `main` branch triggers new deployment

**Deployment Process:**
1. Push changes to GitHub: `git push origin main`
2. Vercel automatically detects changes
3. Builds project: `npm run build`
4. Deploys to production (2-3 minutes)

**Common Build Errors:**
- TypeScript type mismatches (check imports from `lib/types.ts`)
- Missing image files in `public/` directory
- CSS variable references that don't exist in `globals.css`

## Content Updates

**To update business information:**
Edit `lib/constants.ts` → `SITE_CONFIG` object

**To add a new project:**
Add entry to `lib/data/projects.ts` with `featured: true` to show on homepage

**To modify navigation:**
Edit `lib/constants.ts` → `NAVIGATION_LINKS` array

**To change colors:**
Edit CSS variables in `app/globals.css` → `:root` section

## Git Workflow

**Two GitHub accounts are in use:**
- **nitinrajoriya** (personal) - where this repo lives
- **nrajoriya** (Salesforce) - should NOT be used for this project

When pushing, ensure authentication uses **nitinrajoriya** account to avoid permission errors.

## Known Issues & Quirks

1. **Logo filter**: Original logo had `brightness(0)` filter to make it black. New logo (`homeshine-new-logo.jpeg`) should NOT have filters applied.

2. **Multiple dev servers**: Sometimes port 3000 is in use. Check for running processes: `taskkill /PID <pid> /F` on Windows.

3. **Hard refresh needed**: After deployment, browser cache may show old version. Use `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac).

4. **Footer column spacing**: Uses proportional grid `grid-cols-[2fr_1fr_1.2fr_1.8fr]` instead of equal columns for better visual balance.

5. **Hero text readability**: Dark gradient overlay (`from-black/60 via-black/30`) is required for text contrast. White buttons work better than outlined buttons.
