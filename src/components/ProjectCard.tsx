'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { PortfolioItem } from './PortfolioGrid';

// Tiny blurred placeholder for instant perceived loading
const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITEHE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIRITH/2gAMAwEAAhEDEEA/ANJ8fcltlFomMLlyZDAQH3lNOlLja8qUkpA4OMc/lKQvV0XUHBFQ0Y5+ClKYw5GP/9k=';

interface ProjectCardProps {
    item: PortfolioItem;
    onClick: () => void;
}

export default function ProjectCard({ item, onClick }: ProjectCardProps) {
    return (
        <motion.button
            onClick={onClick}
            className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            aria-label={`View ${item.title} project`}
        >
            {/* Thumbnail Image */}
            <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/60">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                    <h3 className="text-xl font-bold tracking-wide text-white md:text-2xl">
                        {item.title}
                    </h3>
                    <p className="mt-2 text-sm tracking-wider text-white/80">
                        {item.category}
                    </p>
                    <span className="mt-4 inline-block text-xs tracking-[0.2em] text-amber-400">
                        VIEW PROJECT
                    </span>
                </motion.div>
            </div>
        </motion.button>
    );
}
