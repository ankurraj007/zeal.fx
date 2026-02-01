export default function JsonLd() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://zealfx.vercel.app',
        name: 'ZEAL.FX',
        description:
            'Professional photography services for fashion, products, and food. Studio and outdoor shoots available.',
        url: 'https://zealfx.vercel.app',
        image: 'https://zealfx.vercel.app/assets/og-image.webp',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ranchi',
            addressRegion: 'Jharkhand',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 23.3441,
            longitude: 85.3096,
        },
        priceRange: '$$',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
        },
        sameAs: [
            'https://instagram.com/zealfx',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi'],
        },
        makesOffer: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Fashion Photography',
                    description: 'Professional fashion and portrait photography services.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Product Photography',
                    description: 'High-quality product photography for e-commerce and marketing.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Food Photography',
                    description: 'Appetizing food photography for restaurants and culinary brands.',
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
