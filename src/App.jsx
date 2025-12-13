
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import {Link} from 'react-router-dom';

function App() {
  

  

  return (
    <div className="app-container">
      <div className={`landing-page .`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            <Link to="/ProductList.jsx">
            <button className="get-started-button">
              Get Started
            </button> </Link>
        </div>
        <div className="aboutus_container">
          <AboutUs />
        </div>
      </div>

    </div>
    </div>
  
  );
}

export default App; 