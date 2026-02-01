import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for combining Tailwind CSS classes safely
 * Merges conflicting classes and filters falsy values
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
