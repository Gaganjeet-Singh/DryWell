import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Footer/>
  </React.StrictMode>
);


