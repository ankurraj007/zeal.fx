'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'cookie-consent';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem(STORAGE_KEY);
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(STORAGE_KEY, 'accepted');
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900 p-4 shadow-lg md:p-6"
                >
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
                        <div>
                            <h4 className="text-sm font-medium text-amber-400">
                                Cookie Policy
                            </h4>
                            <p className="mt-1 text-sm text-white/70">
                                This website uses cookies. By continuing to use this site, you
                                accept our use of cookies.
                            </p>
                        </div>
                        <button
                            onClick={handleAccept}
                            className="flex-shrink-0 rounded-sm bg-amber-500 px-6 py-2 text-sm font-medium tracking-wide text-black transition-colors hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                        >
                            Accept & Close
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
