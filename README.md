

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
