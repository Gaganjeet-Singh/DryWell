import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Hero from './Hero';
import Value from './Value';
import Team from './Team';

function AboutPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Value/>
            <Team/>
            <Footer/>
        </>
     );
}

export default AboutPage;