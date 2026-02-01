import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Get in touch with ZEAL.FX for professional photography services. Fashion, product, and food photography available.',
};

export default function ContactPage() {
    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <section className="bg-neutral-900 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-wide text-white md:text-5xl lg:text-6xl">
                        CONTACT US
                    </h1>
                    <p className="mt-4 text-lg tracking-wider text-white/75">
                        Let&apos;s create something beautiful together
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-neutral-950 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-amber-400 md:text-3xl">
                            Drop us a line!
                        </h2>
                        <p className="mt-2 text-white/75">
                            We love our customers, so feel free to visit during normal business hours.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-12 lg:grid-cols-2">
                        {/* Contact Form */}
                        <div className="rounded-lg bg-neutral-900 p-8">
                            <ContactForm />
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            <div className="rounded-lg bg-neutral-900 p-8">
                                <ContactInfo />
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
