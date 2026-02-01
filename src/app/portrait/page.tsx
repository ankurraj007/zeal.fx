import type { Metadata } from 'next';
import PortfolioGrid, { type PortfolioItem } from '@/components/PortfolioGrid';

export const metadata: Metadata = {
    title: 'Portrait Photography',
    description:
        'Portrait photography portfolio featuring editorial, studio, and outdoor portrait shoots.',
};

/* 
 * TODO: Replace placeholder images with actual portrait portfolio images
 * Recommended sizes: 800x600px thumbnails, 1920x1280px full images
 */
const fashionPortfolio: PortfolioItem[] = [
    {
        id: 'portrait-1',
        title: 'Editorial Collection',
        category: 'PORTRAIT',
        thumbnail: '/assets/portfolio/red2.webp',
        images: [
            '/assets/portfolio/red2.webp',
            '/assets/portfolio/red3.webp',
            '/assets/portfolio/red1.webp',
        ],
        description: 'High-end editorial fashion photography.',
    },
    {
        id: 'portrait-2',
        title: 'Bridal Session',
        category: 'BRIDAL',
        thumbnail: '/assets/portfolio/bride1.webp',
        images: ['/assets/portfolio/bride1.webp', '/assets/portfolio/bride2.webp', '/assets/portfolio/bride3.webp'],
        description: 'Professional studio fashion shoot.',
    },
    {
        id: 'portrait-3',
        title: 'Indoor Fashion',
        category: 'INDOOR',
        thumbnail: '/assets/portfolio/cute1.webp',
        images: ['/assets/portfolio/cute1.webp', '/assets/portfolio/cute2.webp'],
        description: 'Natural light outdoor fashion photography.',
    },
    {
        id: 'portrait-4',
        title: 'BABY Series',
        category: 'BABY',
        thumbnail: '/assets/portfolio/baby1.webp',
        images: ['/assets/portfolio/baby1.webp', '/assets/portfolio/baby2.webp'],
        description: 'Fashion portrait photography.',
    },
    {
        id: 'portrait-5',
        title: 'OUTDOOR Fashion',
        category: 'OUTDOOR',
        thumbnail: '/assets/portfolio/outdoor1.webp',
        images: ['/assets/portfolio/outdoor1.webp', '/assets/portfolio/outdoor2.webp', '/assets/portfolio/outdoor3.webp'],
        description: 'Fashion week runway photography.',
    },
    {
        id: 'portrait-6',
        title: 'NATURE Fashion',
        category: 'NATURE',
        thumbnail: '/assets/portfolio/outdoor.webp',
        images: ['/assets/portfolio/outdoor.webp'],
        description: 'Fashion brand campaign photography.',
    },
];

export default function FashionPage() {
    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <section className="bg-neutral-900 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-wide text-white md:text-5xl lg:text-6xl">
                        PORTRAIT
                    </h1>
                    <p className="mt-4 text-lg tracking-wider text-white/75">
                        Editorial • Studio • Outdoor
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <PortfolioGrid items={fashionPortfolio} />
        </div>
    );
}
