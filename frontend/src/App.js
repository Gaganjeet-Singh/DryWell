import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './landingPage/home/HomePage';
import AboutPage from './landingPage/About/AboutPage';
import ServicePage from './landingPage/Services/ServicePage';
import ContactPage from './landingPage/Contact/ContactPage';
import BookingPage from './landingPage/booking/BookingPage';


function App() {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path ="/" element={<HomePage/>}/>
                    <Route path = "/about" element={<AboutPage/>}/>
                    <Route path = "/service" element = {<ServicePage/>}/>
                    <Route path = "/contact" element = {<ContactPage/>}/>
                    <Route path ='/booking' element= {<BookingPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}

export default App;