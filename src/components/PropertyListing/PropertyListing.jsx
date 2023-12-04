import React, { useState, useEffect } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    const fetchProperties = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/properties');
            const date = await res.json();
            setProperties(date);
        } catch (error) {
            console.error('Error fetching properties', error);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <ul className="PropertyListing">
            {properties?.map((property) => (
                <li key={property?.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
