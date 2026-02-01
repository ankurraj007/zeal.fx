# Changelog

All notable changes and differences from the original site are documented here.

## [1.0.0] - 2026-01-31

### What's Included

#### ✅ Implemented Features
- **Sticky Navigation** - Transparent-to-solid transition on scroll with mobile hamburger menu
- **Full-Screen Hero** - Background image with animated headline and CTAs
- **About Section** - Expandable biography text with "Show More/Less" functionality
- **Portfolio Grid** - Responsive 3/2/1 column grid with hover effects
- **Lightbox Modal** - Full-screen modal with Swiper carousel for image galleries
- **Contact Form** - Client-side validation with API endpoint stub
- **Contact Info** - Address, phone, hours, and WhatsApp integration
- **Footer** - Navigation links, portfolio links, and copyright
- **Scroll-to-Top** - Floating button appears on scroll
- **Cookie Banner** - GDPR-style consent banner with localStorage persistence
- **SEO** - Meta tags, Open Graph, and semantic HTML structure

#### 🔲 Placeholders (Replace Before Production)

| Item | Location | Notes |
|------|----------|-------|
| Hero Image | `public/assets/hero.jpg` | Replace with actual studio/photography image |
| About Background | `public/assets/about-bg.jpg` | Replace with actual background |
| Portfolio Images | `public/assets/portfolio/*.jpg` | Replace all placeholder images |
| OG Image | `public/assets/og-image.jpg` | Replace for social sharing |
| Brand Name | Multiple files | Search "GAURAV SHOOTS" and replace |
| Biography Text | `src/components/About.tsx` | Replace placeholder biography |
| Contact Info | `src/components/ContactInfo.tsx` | Update address, phone, hours |
| Social Links | `src/components/ContactInfo.tsx` | Add actual social media URLs |
| Email Integration | `src/app/api/contact/route.ts` | Integrate with EmailJS/Nodemailer |

#### ⚠️ Known Differences from Original Site

1. **Fonts** - Using Google Fonts (Inter, Montserrat) as approximations. Original site may use custom/licensed fonts.

2. **Exact Colors** - Colors are approximated from visual inspection. Fine-tune in `globals.css`.

3. **Google Maps** - Map placeholder included. Add Google Maps embed or static image.

4. **reCAPTCHA** - Placeholder notice included. Actual reCAPTCHA integration requires API keys.

5. **Animation Timing** - Animation durations and easing curves may differ slightly.

6. **Image Aspect Ratios** - Portfolio uses 4:3 aspect ratio. Adjust if original uses different ratios.

### Technical Stack

- **Next.js 16.1** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Swiper** for image carousels
- **Headless UI** for accessible modal/dialogs
- **Heroicons** for icons
- **Jest + React Testing Library** for testing

### Legal Notice

This project is a reproduction/template and does **not** include any copyrighted content from the original site. All images are AI-generated placeholders. Replace with your own licensed assets before production deployment.
