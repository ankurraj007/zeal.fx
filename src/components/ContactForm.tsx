'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
        >
            {/* Name Field */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium tracking-wide text-white/80"
                >
                    Name <span className="text-amber-400">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full border-0 border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder-white/60 focus:border-amber-400 focus:outline-none focus:ring-0"
                    placeholder="Your Name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                />
                {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400">
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email Field */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium tracking-wide text-white/80"
                >
                    Email <span className="text-amber-400">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full border-0 border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder-white/40 focus:border-amber-400 focus:outline-none focus:ring-0"
                    placeholder="your@email.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                />
                {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Subject Field (Optional) */}
            <div>
                <label
                    htmlFor="subject"
                    className="block text-sm font-medium tracking-wide text-white/80"
                >
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 block w-full border-0 border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder-white/40 focus:border-amber-400 focus:outline-none focus:ring-0"
                    placeholder="What is this about?"
                />
            </div>

            {/* Message Field */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium tracking-wide text-white/80"
                >
                    Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full resize-none border-0 border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder-white/60 focus:border-amber-400 focus:outline-none focus:ring-0"
                    placeholder="Your message..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                />
                {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-400">
                        {errors.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-sm bg-amber-500 px-8 py-3 text-sm font-medium tracking-wider text-black transition-all hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-green-400"
                >
                    Thank you! Your message has been sent successfully.
                </motion.p>
            )}
            {submitStatus === 'error' && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-red-400"
                >
                    Something went wrong. Please try again or contact us directly.
                </motion.p>
            )}

            {/* reCAPTCHA Notice - TODO: Implement actual reCAPTCHA */}
            <p className="text-center text-xs text-white/70">
                This site is protected by reCAPTCHA and the Google{' '}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/90"
                >
                    Privacy Policy
                </a>{' '}
                and{' '}
                <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/90"
                >
                    Terms of Service
                </a>{' '}
                apply.
            </p>
        </motion.form>
    );
}
