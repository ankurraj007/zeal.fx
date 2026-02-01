import Hero from '@/components/Hero';
import About from '@/components/About';
import PortfolioGrid, { type PortfolioItem } from '@/components/PortfolioGrid';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import { motion } from 'framer-motion';

const featuredPortfolio: PortfolioItem[] = [
  {
    id: 'portrait-1',
    title: 'Editorial Collection',
    category: 'PORTRAIT',
    thumbnail: '/assets/portfolio/red3.webp',
    images: [
      '/assets/portfolio/red3.webp',
      '/assets/portfolio/red2.webp',
      '/assets/portfolio/red1.webp',
    ],
    description: 'High-end editorial fashion photography.',
  },
  {
    id: 'portrait-3',
    title: '',
    category: '',
    thumbnail: '/assets/portfolio/travel3.webp',
    images: ['/assets/portfolio/travel3.webp'],
    description: '',
  },
  {
    id: 'food-4',
    title: '',
    category: '',
    thumbnail: '/assets/portfolio/food4.png',
    images: ['/assets/portfolio/food4.png'],
    description: 'Appetizing photography for restaurant menus.',
  },
  {
    id: 'food-1',
    title: '',
    category: '',
    thumbnail: '/assets/portfolio/food1.webp',
    images: [
      '/assets/portfolio/food1.webp',
    ],
    description: 'Professional food photography for restaurants and culinary brands.',
  },
  {
    id: 'product-6',
    title: '',
    category: '',
    thumbnail: '/assets/portfolio/prod6.webp',
    images: ['/assets/portfolio/prod6.webp'],
    description: 'Professional studio product photography.',
  },

  {
    id: 'food-2',
    title: '',
    category: '',
    thumbnail: '/assets/portfolio/y.webp',
    images: ['/assets/portfolio/y.webp'],
    description: '',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Featured Portfolio */}
      <PortfolioGrid items={featuredPortfolio} title="FEATURED WORK" />

      {/* Contact Section */}
      <section id="contact" className="bg-neutral-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-wide text-white md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg tracking-wider text-amber-400">
              Drop us a message!
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
