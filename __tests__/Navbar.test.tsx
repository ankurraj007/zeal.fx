import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/Navbar';

// Mock framer-motion to avoid animation complications in tests
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
        span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <span {...props}>{children}</span>,
    },
    AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

describe('Navbar', () => {
    it('renders the logo text', () => {
        render(<Navbar />);
        expect(screen.getByText('GAURAV SHOOTS')).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<Navbar />);
        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /fashion/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /product/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /food/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /inspirations/i })).toBeInTheDocument();
    });

    it('has a mobile menu toggle button', () => {
        render(<Navbar />);
        const toggleButton = screen.getByRole('button', { name: /toggle mobile menu/i });
        expect(toggleButton).toBeInTheDocument();
    });

    it('toggles mobile menu on button click', () => {
        render(<Navbar />);
        const toggleButton = screen.getByRole('button', { name: /toggle mobile menu/i });

        // Initial state - mobile menu should not show extra links
        fireEvent.click(toggleButton);

        // After click, aria-expanded should be true
        expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

        // Click again to close
        fireEvent.click(toggleButton);
        expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    });
});
