import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ onHover }) => {
  return (
    <nav className="navbar">
     
      <div className='desktop-menu'>
        <NavLink 
          className='desktopMenuListItem' 
          to="/about"
          onMouseEnter={() => onHover('about')}
          onMouseLeave={() => onHover('')}
        >
          About
        </NavLink>
        <NavLink 
          className='desktopMenuListItem' 
          to="/portfolio"
          onMouseEnter={() => onHover('portfolio')}
          onMouseLeave={() => onHover('')}
        >
          Portfolio
        </NavLink>
        <NavLink 
          className='desktopMenuListItem' 
          to="/contact"
          onMouseEnter={() => onHover('contact')}
          onMouseLeave={() => onHover('')}
        >
          Contact
        </NavLink>
      </div>
     
    </nav>
  );
}

export default Navbar;