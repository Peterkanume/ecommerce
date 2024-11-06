import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/offers/offers';

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular /> {/* Capitalized "Popular" */}
            <Offers />
        </div>
    );
}

export default Shop;
