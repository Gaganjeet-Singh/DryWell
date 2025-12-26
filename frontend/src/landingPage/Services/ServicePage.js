import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Types from './Types';

function ServicePage() {
    return ( 
        <>
            <Navbar/>
            
            <Hero/>
            <Types/>
            
            <Footer/>
        </> 
    );
}

export default ServicePage;