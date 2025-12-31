import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import ContactForm from './ContactForm';
import Footer from '../Footer';

function ContactPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <ContactForm/>
            <Footer/>
        </>
     );
}

export default ContactPage;