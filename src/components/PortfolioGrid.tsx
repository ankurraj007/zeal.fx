'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Dynamically import ProjectModal to defer Swiper CSS loading (eliminates render-blocking)
const ProjectModal = dynamic(() => import('./ProjectModal'), {
    ssr: false,
    loading: () => null, // No loading state needed for modal
});

export interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    thumbnail: string;
    images: string[];
    description?: string;
}

interface PortfolioGridProps {
    items: PortfolioItem[];
    title?: string;
}

export default function PortfolioGrid({ items, title }: PortfolioGridProps) {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    return (
        <section id="portfolio" className="bg-neutral-950 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center text-3xl font-bold tracking-wide text-white md:text-4xl"
                    >
                        {title}
                    </motion.h2>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard
                                item={item}
                                onClick={() => setSelectedItem(item)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <ProjectModal
                item={selectedItem}
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </section>
    );
}
