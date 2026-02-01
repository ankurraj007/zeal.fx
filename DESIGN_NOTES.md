# Design Notes

This document explains the design decisions and any deviations from the original gauravshoots.com site.

## Color Palette

The site uses a dark, premium aesthetic with amber accents:

| Purpose | Color | CSS Variable |
|---------|-------|--------------|
| Primary Background | `#0a0a0a` | `--color-bg-primary` |
| Secondary Background | `#171717` | `--color-bg-secondary` |
| Tertiary Background | `#262626` | `--color-bg-tertiary` |
| Primary Text | `#ffffff` | `--color-text-primary` |
| Secondary Text | `rgba(255,255,255,0.8)` | `--color-text-secondary` |
| Muted Text | `rgba(255,255,255,0.6)` | `--color-text-muted` |
| Accent | `#f59e0b` (amber-500) | `--color-accent` |
| Accent Light | `#fbbf24` (amber-400) | `--color-accent-light` |

## Typography

### Fonts Used
- **Headings**: Montserrat (Google Fonts) - Regular to Bold weights
- **Body**: Inter (Google Fonts) - Clean, modern sans-serif

### Font Scale
Using Tailwind's default scale with emphasis on:
- Hero headline: `text-4xl` to `text-7xl` (responsive)
- Section headings: `text-3xl` to `text-5xl`
- Subheadings: `text-lg` to `text-xl`
- Body: `text-base` to `text-lg`
- Small/muted: `text-sm` to `text-xs`

### Tracking (Letter Spacing)
Wide letter-spacing is used throughout for a premium feel:
- `tracking-wide` for headings
- `tracking-wider` for subheadings and labels
- `tracking-[0.2em]` to `tracking-[0.3em]` for emphasis

## Responsive Breakpoints

Following Tailwind's default breakpoints:

| Breakpoint | Width | Grid Columns |
|------------|-------|--------------|
| Default (mobile) | < 640px | 1 column |
| `sm` | ≥ 640px | 2 columns |
| `md` | ≥ 768px | 2 columns |
| `lg` | ≥ 1024px | 3 columns |
| `xl` | ≥ 1280px | 3 columns |

## Animation Timings

### Durations
- Quick interactions: `200-300ms`
- Standard transitions: `300-500ms`
- Entrance animations: `600-800ms`
- Slow/dramatic: `up to 1000ms`

### Easing
- `ease-out` - Primary easing for most animations
- `ease-in-out` - For hover effects
- Spring physics via Framer Motion for interactive elements

### Scroll Animations
- Using Framer Motion's `whileInView` with `viewport={{ once: true }}`
- Staggered children with `delay: index * 0.1`

## Component Design Decisions

### Navbar
- **Sticky position** with scroll-triggered background change
- Background transitions from `transparent` to `bg-black/90` with backdrop blur
- Mobile menu uses slide-down animation with AnimatePresence
- Scroll threshold: 50px

### Hero
- **Full viewport height** (`h-screen`)
- Background image with 40% dark overlay for text contrast
- Animated scroll indicator at bottom
- Two CTAs: Primary (filled) and Secondary (outlined)

### Portfolio Grid
- CSS Grid with responsive columns
- **Hover effects**: Scale up + dark overlay with project info
- Cards use `aspect-[4/3]` for consistent sizing
- `object-cover` for image cropping

### Modal/Lightbox
- Headless UI Dialog for accessibility (focus trap, escape key)
- Swiper for image carousel with custom navigation buttons
- AnimatePresence for enter/exit animations
- Custom close button positioned above content

### Contact Form
- Underline-style inputs (border-bottom only)
- Inline validation with error messages
- Loading state on submit button
- Success/error status messages
- reCAPTCHA placeholder notice

## Accessibility Considerations

1. **Semantic HTML** - Using `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
2. **ARIA attributes** - `aria-label`, `aria-expanded`, `aria-hidden` where appropriate
3. **Focus styles** - Custom focus-visible rings using amber accent
4. **Keyboard navigation** - All interactive elements are keyboard accessible
5. **Color contrast** - White text on dark backgrounds meets WCAG AA
6. **Alt text** - All images have descriptive alt attributes

## Known Deviations

1. **Original fonts** - May use custom fonts not available publicly
2. **Exact spacing** - Pixel-perfect recreation not attempted; using Tailwind's scale
3. **Hero video** - Original may have video; this uses static image
4. **Map integration** - Using placeholder; original may have Google Maps embed
5. **reCAPTCHA** - Placeholder only; needs actual implementation with API keys
6. **Animation timing** - Approximated from visual observation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari/Chrome

No IE11 support (Next.js 16+ doesn't support IE11).

## Performance Considerations

1. **Next/Image** - Used for all images with automatic optimization
2. **Priority loading** - Hero image has `priority` prop
3. **Font optimization** - Using `next/font/google` for zero layout shift
4. **Code splitting** - Automatic via Next.js App Router
5. **CSS** - Tailwind's JIT compiler produces minimal CSS

## Future Enhancements

- [ ] Dark/light theme toggle
- [ ] Image lazy loading with blur placeholders
- [ ] Blog/journal section
- [ ] prismic/Sanity CMS integration for content management
- [ ] Analytics integration (Google Analytics, Plausible)
- [ ] Performance monitoring (Web Vitals)
