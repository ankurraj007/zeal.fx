'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

/* TODO: Replace placeholder with actual logo/brand name */
const BRAND_NAME = 'ZEAL.FX';

const footerNavigation = [
    { name: 'HOME', href: '/' },
    { name: 'CONTACT US', href: '/contact' },
    { name: 'INSPIRATIONS', href: '/inspirations' },
];

const portfolioLinks = [
    { name: 'PORTRAIT', href: '/portrait' },
    { name: 'PRODUCT', href: '/product' },
    { name: 'FOOD', href: '/food' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold tracking-wider text-white">
                            {BRAND_NAME}
                        </h3>
                        <p className="mt-4 text-sm text-white/75">
                            Professional photography services for fashion, products, and food.
                            Studio and outdoor shoots available.
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-sm font-medium tracking-wider text-white/75">
                            QUICK LINKS
                        </h4>
                        <ul className="mt-4 space-y-2">
                            {footerNavigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-white/80 transition-colors hover:text-amber-400"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Portfolio Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-sm font-medium tracking-wider text-white/75">
                            PORTFOLIO
                        </h4>
                        <ul className="mt-4 space-y-2">
                            {portfolioLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-white/80 transition-colors hover:text-amber-400"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="text-center text-xs text-white/70">
                        Copyright © {currentYear} {BRAND_NAME} - All Rights Reserved for the
                        pictures. All rights for Trade marks and logos on the products are of
                        the respective companies.
                    </p>
                </div>
            </div>
        </footer>
    );
}
