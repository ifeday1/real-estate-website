import React from 'react';
import Navbar from './Navbar';


const Header = () => {
  return (
    <div className='header'>
    <Navbar />
    <div className='intro'>
    <p>Looking for a property !</p>
    <h1><span>Buy</span>and <span>Sell</span> Proeprties</h1>
    <p className='details'>We sell afforadle and reliable houses, the best plug to can 
    ever see with good customer service </p>
    <a href='#' className='header-btn'>Details  </a>
    </div>
    </div>
  )
}

export default Header;