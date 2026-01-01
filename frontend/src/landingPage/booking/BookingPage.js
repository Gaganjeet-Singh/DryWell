import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Footer from '../Footer';
import BookingForm from './BookingForm';

function BookingPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <BookingForm/>
            <Footer/>
        </>
     );
}

export default BookingPage;