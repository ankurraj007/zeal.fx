import type { Metadata } from 'next';
import PortfolioGrid, { type PortfolioItem } from '@/components/PortfolioGrid';

export const metadata: Metadata = {
    title: 'Food Photography',
    description:
        'Food photography portfolio featuring culinary arts, restaurant menus, and beverage photography.',
};

/* 
 * TODO: Replace placeholder images with actual food portfolio images
 * Recommended sizes: 800x600px thumbnails, 1920x1280px full images
 */
const foodPortfolio: PortfolioItem[] = [
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
        id: 'food-2',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/food2.webp',
        images: ['/assets/portfolio/food2.webp'],
        description: 'Elegant food photography for fine dining establishments.',
    },
    {
        id: 'food-3',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/food3.png',
        images: ['/assets/portfolio/food3.png'],
        description: 'Artistic food photography showcasing gourmet dishes.',
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
        id: 'food-5',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/food5.png',
        images: ['/assets/portfolio/food5.png'],
        description: 'Appetizing photography for restaurant menus.',
    }, {
        id: 'food-6',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/food6.webp',
        images: ['/assets/portfolio/food6.webp'],
        description: 'Appetizing photography for restaurant menus.',
    },
];

export default function FoodPage() {
    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <section className="bg-neutral-900 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-wide text-white md:text-5xl lg:text-6xl">
                        FOOD
                    </h1>
                    <p className="mt-4 text-lg tracking-wider text-white/75">
                        Culinary • Restaurant • Beverages
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <PortfolioGrid items={foodPortfolio} />
        </div>
    );
}
