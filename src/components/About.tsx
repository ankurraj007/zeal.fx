'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/* TODO: Replace placeholder image with original about background asset */
const ABOUT_IMAGE = '/assets/about-bg.jpg';
const OWNER_IMAGE = '/assets/owner.jpeg';

// Tiny blurred placeholder for instant perceived loading
const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITEHE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIRITH/2gAMAwEAAhEDEEA/ANJ8fcltlFomMLlyZDAQH3lNOlLja8qUkpA4OMc/lKQvV0XUHBFQ0Y5+ClKYw5GP/9k=';

/* TODO: Replace placeholder biography with actual content */
const SHORT_BIO = `Born in 2003. Born for Photography.
My love affair with the camera started a few years back. In 2024, my passion to shoot took me to the famed Asian academy of film and television where I sharpened my professional skills in photography.`;

const FULL_BIO = `Born in 2003. Born for Photography.
My love affair with the camera started a few years back. In 2024, my passion to shoot took me to the famed Asian academy of film and television where I sharpened my professional skills in photography. After that, I specialised in fashion, products and portraits. During this course, I conducted extensive Fashion shoots, Portraits and Product shoots, all the while experimenting with lights (studio and natural), colors, perspectives... and lots more.`;

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="about" className="relative bg-neutral-900 py-20 md:py-32">
            {/* Background Image (subtle) */}
            <div className="absolute inset-0 opacity-20">
                <Image
                    src={ABOUT_IMAGE}
                    alt="About background"
                    fill
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Two-column layout */}
                <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1"
                    >
                        <h2 className="text-4xl font-bold tracking-wide text-white md:text-5xl">
                            I Am Khushi Shah
                        </h2>
                        <h3 className="mt-4 text-lg font-medium tracking-wider text-amber-400 md:text-xl">
                            My Background
                        </h3>

                        <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-white/80 md:text-lg">
                            {isExpanded ? FULL_BIO : SHORT_BIO}
                        </p>

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-6 inline-flex items-center text-sm font-medium tracking-wider text-amber-400 transition-colors hover:text-amber-300"
                            aria-expanded={isExpanded}
                        >
                            {isExpanded ? 'Show Less' : 'Show More'}
                            <svg
                                className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </motion.div>

                    {/* Right: Owner Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg shadow-2xl">
                            <Image
                                src={OWNER_IMAGE}
                                alt="Khushi Shah - Photographer"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 448px"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={BLUR_DATA_URL}
                            />
                            {/* Decorative border */}
                            <div className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
