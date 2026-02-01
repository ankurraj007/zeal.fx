import { NextResponse } from 'next/server';

interface ContactFormData {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

/**
 * Contact form API endpoint
 * 
 * TODO: Integrate with email service (EmailJS, Nodemailer, SendGrid, etc.)
 * 
 * Example EmailJS integration:
 * ```
 * import emailjs from '@emailjs/browser';
 * 
 * await emailjs.send(
 *   process.env.EMAILJS_SERVICE_ID!,
 *   process.env.EMAILJS_TEMPLATE_ID!,
 *   { name, email, subject, message },
 *   process.env.EMAILJS_PUBLIC_KEY!
 * );
 * ```
 */
export async function POST(request: Request) {
    try {
        const body: ContactFormData = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, and message are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // TODO: Replace this placeholder with actual email sending logic
        // For now, just log the submission and return success
        console.log('Contact form submission:', {
            name: body.name,
            email: body.email,
            subject: body.subject || '(No subject)',
            message: body.message,
            timestamp: new Date().toISOString(),
        });

        // Simulate processing time
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for your message! We will get back to you soon.'
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
}
