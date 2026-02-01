'use client';

import { Fragment, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { PortfolioItem } from './PortfolioGrid';

// Tiny blurred placeholder for instant perceived loading
const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITEHE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIRITH/2gAMAwEAAhEDEEA/ANJ8fcltlFomMLlyZDAQH3lNOlLja8qUkpA4OMc/lKQvV0XUHBFQ0Y5+ClKYw5GP/9k=';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectModalProps {
    item: PortfolioItem | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ item, isOpen, onClose }: ProjectModalProps) {
    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!item) return null;

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                {/* Backdrop */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
                </TransitionChild>

                {/* Full-screen container */}
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="relative w-full max-w-5xl">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute -top-12 right-0 rounded-full p-2 text-white/80 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 z-10"
                                    aria-label="Close modal"
                                >
                                    <XMarkIcon className="h-8 w-8" />
                                </button>

                                {/* Title */}
                                <DialogTitle className="mb-4 text-center text-2xl font-bold tracking-wide text-white md:text-3xl">
                                    {item.title}
                                </DialogTitle>
                                <p className="mb-6 text-center text-sm tracking-wider text-white/60">
                                    {item.category}
                                </p>

                                {/* Image Carousel */}
                                <div className="relative">
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        navigation={{
                                            prevEl: '.swiper-button-prev-custom',
                                            nextEl: '.swiper-button-next-custom',
                                        }}
                                        pagination={{ clickable: true }}
                                        loop={item.images.length > 1}
                                        className="aspect-[16/10] w-full"
                                    >
                                        {item.images.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="relative h-full w-full">
                                                    <Image
                                                        src={image}
                                                        alt={`${item.title} - Image ${index + 1}`}
                                                        fill
                                                        className="object-contain"
                                                        sizes="(max-width: 1280px) 100vw, 1280px"
                                                        loading="lazy"
                                                        placeholder="blur"
                                                        blurDataURL={BLUR_DATA_URL}
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Custom Navigation Buttons */}
                                    {item.images.length > 1 && (
                                        <>
                                            <button
                                                className="swiper-button-prev-custom absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/80"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeftIcon className="h-6 w-6" />
                                            </button>
                                            <button
                                                className="swiper-button-next-custom absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/80"
                                                aria-label="Next image"
                                            >
                                                <ChevronRightIcon className="h-6 w-6" />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Description */}
                                {item.description && (
                                    <p className="mt-6 text-center text-base leading-relaxed text-white/80">
                                        {item.description}
                                    </p>
                                )}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
