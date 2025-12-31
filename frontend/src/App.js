import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './landingPage/home/HomePage';
import AboutPage from './landingPage/About/AboutPage';
import ServicePage from './landingPage/Services/ServicePage';
import ContactPage from './landingPage/Contact/ContactPage';


function App() {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path ="/" element={<HomePage/>}/>
                    <Route path = "/about" element={<AboutPage/>}/>
                    <Route path = "/service" element = {<ServicePage/>}/>
                    <Route path = "/contact" element = {<ContactPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}

export default App;