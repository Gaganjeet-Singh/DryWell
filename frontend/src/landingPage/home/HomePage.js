import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Choose from './Choose';
import Pickup from './Pickup';
import Working from './Working';

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Choose />
            <Working/>
            <Pickup />
            <Footer />
        </>
    );
}

export default HomePage;
