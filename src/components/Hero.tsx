'use client';

import Image from 'next/image';

const HERO_IMAGE = '/assets/hero.webp';

// Red-black blur placeholder for instant perceived loading
const BLUR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI2Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0NDAwMDAiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzhhMDAwMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBhMGEwYSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSI2IiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={HERO_IMAGE}
                    alt="Hero background - photography showcase"
                    fill
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    sizes="100vw"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content - Using CSS animations instead of Framer Motion for faster LCP */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <h1
                    className="animate-fade-slide-up text-4xl font-bold tracking-wide text-white md:text-6xl lg:text-7xl"
                    style={{ animationDelay: '0.1s' }}
                >
                    FASHION | PRODUCT | TRAVEL
                </h1>

                <p
                    className="animate-fade-slide-up mt-4 text-lg tracking-[0.3em] text-white/80 md:text-xl lg:text-2xl"
                    style={{ animationDelay: '0.3s' }}
                >
                    STUDIO / OUTDOOR
                </p>

                <div
                    className="animate-fade-slide-up mt-8 flex flex-col gap-4 sm:flex-row"
                    style={{ animationDelay: '0.5s' }}
                >
                    <a
                        href="#portfolio"
                        className="rounded-sm border-2 border-white bg-white px-8 py-3 text-sm font-medium tracking-wider text-black transition-all hover:bg-transparent hover:text-white"
                    >
                        VIEW PORTFOLIO
                    </a>
                    <a
                        href="#contact"
                        className="rounded-sm border-2 border-white bg-transparent px-8 py-3 text-sm font-medium tracking-wider text-white transition-all hover:bg-white hover:text-black"
                    >
                        GET IN TOUCH
                    </a>
                </div>

                {/* Scroll indicator */}
                <div
                    className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2"
                    style={{ animationDelay: '1s' }}
                >
                    <div className="animate-bounce flex flex-col items-center text-white/75">
                        <span className="text-xs tracking-widest">SCROLL</span>
                        <svg
                            className="mt-2 h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
