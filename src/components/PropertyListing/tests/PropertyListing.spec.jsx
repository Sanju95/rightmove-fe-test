import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

describe('PropertyListing', () => {
    // it('should render five property cards', async () => {
    //     render(<PropertyListing />);
    //     const propertiesList = screen.getByRole('list');
    //     const propertyCards = await within(propertiesList).findAllByRole('listitem');
    //     expect(propertyCards).toHaveLength(5);
    // });

    const mockProperties = [
        {
            id: 1,
            bedrooms: 2,
            summary: 'Property 1',
            price: 100,
        },
        {
            id: 2,
            bedrooms: 3,
            summary: 'Property 2',
            price: 200,
        },
    ];

    it('renders PropertyCards after fetching data', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockProperties),
        });

        render(<PropertyListing />);

        await waitFor(() => {
            const propertyCards = screen.getAllByRole('listitem');
            expect(propertyCards).toHaveLength(2);
            expect(screen.getByRole('list')).toMatchSnapshot();
        });
    });
});
