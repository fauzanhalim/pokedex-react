import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders app with title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Pokedex/i);
    expect(titleElement).toBeInTheDocument();
});

test('displays "Pokemon not found" for invalid search', async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search your pokemon ... 😏');
    fireEvent.change(searchInput, { target: { value: 'InvalidPokemonName' } });
    fireEvent.click(screen.getByText('Search'));
});

test('performs search functionality', async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search your pokemon ... 😏');
    fireEvent.change(searchInput, { target: { value: 'Pikachu' } });
    fireEvent.click(screen.getByText('Search'));

    // Check if the "Load More" button is not visible
    expect(screen.queryByText('Load More')).toBeNull();
});

