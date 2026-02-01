import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '@/components/ContactForm';

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        form: ({ children, onSubmit, ...props }: React.PropsWithChildren<{ onSubmit?: (e: React.FormEvent) => void }>) => (
            <form onSubmit={onSubmit} {...props}>{children}</form>
        ),
        p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
    },
}));

// Mock fetch
global.fetch = jest.fn();

describe('ContactForm', () => {
    beforeEach(() => {
        (global.fetch as jest.Mock).mockReset();
    });

    it('renders all form fields', () => {
        render(<ContactForm />);

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    it('renders the submit button', () => {
        render(<ContactForm />);
        expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    it('shows validation errors for empty required fields', async () => {
        render(<ContactForm />);

        const submitButton = screen.getByRole('button', { name: /send message/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/email is required/i)).toBeInTheDocument();
            expect(screen.getByText(/message is required/i)).toBeInTheDocument();
        });
    });

    it('shows validation error for invalid email', async () => {
        render(<ContactForm />);

        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);

        fireEvent.change(nameInput, { target: { value: 'Test User' } });
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.change(messageInput, { target: { value: 'Test message' } });

        const submitButton = screen.getByRole('button', { name: /send message/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
        });
    });

    it('submits form successfully with valid data', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true }),
        });

        render(<ContactForm />);

        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);

        fireEvent.change(nameInput, { target: { value: 'Test User' } });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Test message' } });

        const submitButton = screen.getByRole('button', { name: /send message/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.any(Object));
        });
    });

    it('clears errors when user starts typing', async () => {
        render(<ContactForm />);

        const submitButton = screen.getByRole('button', { name: /send message/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        });

        const nameInput = screen.getByLabelText(/name/i);
        fireEvent.change(nameInput, { target: { value: 'T' } });

        await waitFor(() => {
            expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
        });
    });
});
