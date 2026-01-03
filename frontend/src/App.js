import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './landingPage/home/HomePage';
import AboutPage from './landingPage/About/AboutPage';
import ServicePage from './landingPage/Services/ServicePage';
import ContactPage from './landingPage/Contact/ContactPage';
import BookingPage from './landingPage/booking/BookingPage';
import SignupForm from './landingPage/Signup/SignupForm';
import LoginForm from './landingPage/Login/LoginForm';


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
                    <Route path = '/signup' element = {<SignupForm/>}/>
                    <Route path ='/login' element= {<LoginForm/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}

export default App;