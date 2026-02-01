# GAURAV SHOOTS - Photography Portfolio

A production-ready Next.js photography portfolio website inspired by [gauravshoots.com](https://gauravshoots.com). Built with React, TypeScript, Tailwind CSS, and Framer Motion.

> **⚠️ Legal Reminder:** This project uses placeholder images and text. All copyrighted content from the original site must be replaced with your own licensed/original assets before production use.

## ✨ Features

- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Animated UI** - Smooth animations using Framer Motion
- **Portfolio Grid** - Masonry-style gallery with modal lightbox
- **Image Carousel** - Swiper-powered image slider in modals
- **Contact Form** - Validated form with API endpoint stub
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Accessible** - ARIA labels, keyboard navigation, focus management
- **Dark Theme** - Premium dark aesthetic with amber accents

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd zeal

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
zeal/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/contact/        # Contact form API endpoint
│   │   ├── fashion/            # Fashion portfolio page
│   │   ├── product/            # Product portfolio page
│   │   ├── food/               # Food portfolio page
│   │   ├── contact/            # Contact page
│   │   ├── inspirations/       # Inspirations page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout with navbar/footer
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── Navbar.tsx          # Sticky navigation bar
│   │   ├── Hero.tsx            # Full-screen hero section
│   │   ├── About.tsx           # Biography with expand/collapse
│   │   ├── PortfolioGrid.tsx   # Portfolio gallery grid
│   │   ├── ProjectCard.tsx     # Individual portfolio item
│   │   ├── ProjectModal.tsx    # Lightbox modal with carousel
│   │   ├── ContactForm.tsx     # Contact form with validation
│   │   ├── ContactInfo.tsx     # Contact details & social links
│   │   ├── Footer.tsx          # Site footer
│   │   ├── ScrollToTop.tsx     # Scroll-to-top button
│   │   └── CookieBanner.tsx    # Cookie consent banner
│   └── lib/
│       └── utils.ts            # Utility functions (cn helper)
├── public/
│   └── assets/                 # Static assets
│       ├── hero.jpg            # Hero background image
│       ├── about-bg.jpg        # About section background
│       ├── og-image.jpg        # Open Graph image
│       └── portfolio/          # Portfolio images
├── __tests__/                  # Jest test files
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🖼️ Replacing Placeholder Assets

All images in `public/assets/` are placeholders. Follow these steps to replace them:

### Hero Image (`public/assets/hero.jpg`)
- **Recommended size:** 1920x1080px or larger
- **Format:** JPG or WebP
- **Purpose:** Full-screen background for the hero section

### Portfolio Images (`public/assets/portfolio/`)
- **Thumbnail size:** 800x600px (4:3 aspect ratio)
- **Full-size:** 1920x1280px or larger
- **Format:** JPG or WebP for best compression
- **Naming convention:** `fashion-1.jpg`, `product-2.jpg`, etc.

### Open Graph Image (`public/assets/og-image.jpg`)
- **Size:** 1200x630px
- **Purpose:** Social media sharing preview

### Adding New Portfolio Items

Edit the portfolio arrays in the respective page files:
- `src/app/page.tsx` - Featured portfolio on home
- `src/app/fashion/page.tsx` - Fashion gallery
- `src/app/product/page.tsx` - Product gallery
- `src/app/food/page.tsx` - Food gallery

## ⚙️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Jest tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |

## 📧 Contact Form Integration

The contact form is set up with client-side validation and a placeholder API endpoint. To enable real email sending:

### Option 1: EmailJS (Client-side)

```bash
npm install @emailjs/browser
```

Update `src/components/ContactForm.tsx` to use EmailJS.

### Option 2: Server-side (Nodemailer/SendGrid)

Update `src/app/api/contact/route.ts` with your email provider:

```typescript
// Example with Nodemailer
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
```

Add environment variables in `.env.local`:

```env
SMTP_HOST=smtp.example.com
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables if using email integration
4. Deploy!

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Other Platforms

Build the production bundle:

```bash
npm run build
npm run start
```

The output can be deployed to any Node.js hosting platform.

## 🎨 Customization

### Colors

Edit CSS custom properties in `src/app/globals.css`:

```css
:root {
  --color-accent: #f59e0b;       /* Amber accent */
  --color-bg-primary: #0a0a0a;   /* Dark background */
  /* ... */
}
```

### Fonts

Replace Google Fonts in `src/app/layout.tsx`:

```typescript
import { CustomFont } from 'next/font/google';

const customFont = CustomFont({
  subsets: ['latin'],
  weight: ['400', '700'],
});
```

### Content

- Brand name: Search for "GAURAV SHOOTS" and replace
- Contact info: Edit `src/components/ContactInfo.tsx`
- Biography: Edit `src/components/About.tsx`
- Social links: Edit `src/components/ContactInfo.tsx` and `src/components/Footer.tsx`

## 📝 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test -- --coverage

# Run tests in watch mode
npm run test:watch
```

## 📄 License

This project structure and code are available for personal and commercial use. **Important:** All placeholder images and text must be replaced with your own licensed content before deploying to production.

---

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS.
