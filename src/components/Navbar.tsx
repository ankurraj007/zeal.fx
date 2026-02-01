'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

/* TODO: Replace placeholder logo with original asset */
const LOGO_TEXT = 'ZEAL.FX';

const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'PORTRAIT', href: '/portrait' },
    { name: 'PRODUCT', href: '/product' },
    { name: 'FOOD', href: '/food' },
    { name: 'TRAVEL', href: '/travel' },
    { name: 'CONTACT US', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-black/90 backdrop-blur-sm shadow-lg'
                    : 'bg-transparent'
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xl font-bold tracking-wider text-white md:text-2xl"
                        >
                            {LOGO_TEXT}
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigation.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'text-sm font-medium tracking-wide transition-colors hover:text-white',
                                        pathname === item.href
                                            ? 'text-amber-400'
                                            : 'text-white/80'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-black/95 md:hidden"
                    >
                        <div className="space-y-1 px-4 pb-6 pt-2">
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            'block py-3 text-base font-medium tracking-wide transition-colors hover:text-white',
                                            pathname === item.href
                                                ? 'text-amber-400'
                                                : 'text-white/80'
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
