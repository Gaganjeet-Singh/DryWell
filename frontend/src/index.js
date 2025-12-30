import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HomePage from './landingPage/home/HomePage';
// import ServicePage from './landingPage/Services/ServicePage';
import AboutPage from './landingPage/About/AboutPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutPage/>
  </React.StrictMode>
);


