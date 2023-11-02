import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders app with title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Pokedex/i);
    expect(titleElement).toBeInTheDocument();
});


