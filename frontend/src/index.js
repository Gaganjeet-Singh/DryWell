import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import Hero from './landingPage/home/Hero';
import Choose from './landingPage/home/Choose';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero/>
    <Choose/>
    <Footer/>
  </React.StrictMode>
);


