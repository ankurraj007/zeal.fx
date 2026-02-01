import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Enable modern formats for smaller file sizes (30-50% smaller)
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
