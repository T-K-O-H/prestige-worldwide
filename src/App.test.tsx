import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the company name', () => {
    render(<App />);
    expect(screen.getByText(/prestige worldwide/i)).toBeInTheDocument();
  });

  it('renders the headline', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/building something nice/i);
  });

  it('renders the app version from package.json', () => {
    render(<App />);
    const version = screen.getByTestId('app-version');
    expect(version).toHaveTextContent(/^v\d+\.\d+\.\d+/);
  });
});
