import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import stackoverflow from '../../assets/stack.png';
import './footer.css'; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer">

     <span className='FooterMenuItem'>
        <a href="https://github.com/your-github"> <img src={github}alt="GitHub" className="footer-icon" /></a></span> 
     <span className='FooterMenuItem'>
        <a href="https://www.linkedin.com/in/your-linkedin"> <img src={linkedin} alt="LinkedIn" className="footer-icon" /></a></span>
     <span className='FooterMenuItem'>
        <a href="https://stackoverflow.com/users/your-stackoverflow"> <img src={stackoverflow} alt="stackoverflow" className="footer-icon" /></a></span>
    </footer>

  );
};

export default Footer;