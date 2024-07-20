import React from 'react';
import './footer.css';
import logo2 from './img/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <img src={logo2} class='img2'></img>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <p>&copy; 2024 Your Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
