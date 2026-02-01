import type { Metadata } from 'next';
import PortfolioGrid, { type PortfolioItem } from '@/components/PortfolioGrid';

export const metadata: Metadata = {
    title: 'Product Photography',
    description:
        'Professional product photography portfolio featuring commercial and brand photography.',
};

/* 
 * TODO: Replace placeholder images with actual product portfolio images
 * Recommended sizes: 800x600px thumbnails, 1920x1280px full images
 */
const productPortfolio: PortfolioItem[] = [
    {
        id: 'product-1',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/prod1.webp',
        images: [
            '/assets/portfolio/prod1.webp',

        ],
        description: 'Professional commercial product photography.',
    },
    {
        id: 'product-4',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/prod4.webp',
        images: ['/assets/portfolio/prod4.webp'],
        description: 'Lifestyle product photography.',
    },

    {
        id: 'product-3',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/prod3.png',
        images: ['/assets/portfolio/prod3.png'],
        description: 'Clean e-commerce product photography.',
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
        id: 'product-7',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/prod7.webp',
        images: [
            '/assets/portfolio/prod7.webp'
        ],
        description: 'Professional commercial product photography.',
    },

    {
        id: 'product-5',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/prod5.webp',
        images: ['/assets/portfolio/prod5.webp'],
        description: 'Product packaging photography.',
    },
    {
        id: 'product-2',
        title: '',
        category: '',
        thumbnail: '/assets/portfolio/prod2.webp',
        images: ['/assets/portfolio/prod2.webp'],
        description: 'Brand identity product shots.',
    },


];

export default function ProductPage() {
    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <section className="bg-neutral-900 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-wide text-white md:text-5xl lg:text-6xl">
                        PRODUCT
                    </h1>
                    <p className="mt-4 text-lg tracking-wider text-white/75">
                        Commercial • E-Commerce • Lifestyle
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <PortfolioGrid items={productPortfolio} />
        </div>
    );
}
