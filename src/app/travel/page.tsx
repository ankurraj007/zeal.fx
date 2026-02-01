import type { Metadata } from 'next';
import PortfolioGrid, { type PortfolioItem } from '@/components/PortfolioGrid';

export const metadata: Metadata = {
    title: 'Travel Photography',
    description:
        'Professional Travel photography portfolio featuring Travel, Nature, and Landscape photography.',
};


const travelPortfolio: PortfolioItem[] = [
    {
        id: 'travel-1',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/travel1.webp',
        images: [
            '/assets/portfolio/travel1.webp',
        ],
        description: 'Professional restaurant menu photography.',
    },
    {
        id: 'travel-3',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/travel3.webp',
        images: ['/assets/portfolio/travel3.webp'],
        description: 'Professional beverage and cocktail photography.',
    },
    {
        id: 'travel-2',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/travel2.webp',
        images: ['/assets/portfolio/travel2.webp'],
        description: 'Artistic culinary photography.',
    },

    {
        id: 'travel-4',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/travel4.webp',
        images: ['/assets/portfolio/travel4.webp'],
        description: 'Fine dining food photography.',
    },
    {
        id: 'travel-5',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/travel5.webp',
        images: ['/assets/portfolio/travel5.webp'],
        description: 'Professional food styling and photography.',
    },
    {
        id: 'travel-6',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/travel6.webp',
        images: ['/assets/portfolio/travel6.webp'],
        description: 'Dessert and pastry photography.',
    },
];

export default function FoodPage() {
    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <section className="bg-neutral-900 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-wide text-white md:text-5xl lg:text-6xl">
                        TRAVEL
                    </h1>
                    <p className="mt-4 text-lg tracking-wider text-white/75">
                        Travel • Nature • Landscape
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <PortfolioGrid items={travelPortfolio} />
        </div>
    );
}