import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import logo from './img/logo.jpeg';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><img src={logo} alt='Logo'></img></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;