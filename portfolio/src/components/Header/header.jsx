import React from 'react';
import Navbar from '../NavBar/navbar'; 
import logo from '../../assets/logo.png';
import './header.css';
// import header.css // Make sure Navbar is in the same directory or adjust the import path accordingly

function Header({onHover}) {
  return (
    <header className="bg-white shadow-sm">
         <img src={logo} alt="Logo" className='logo' />
        <h1 className="text-center text-2xl font-bold text-gray-800 py-4 "> Muhsina Shinwari</h1>
        <Navbar onHover={onHover} />
    </header>
  );
};

export default Header;

