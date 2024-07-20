import React from 'react';
import './menu.css';
import logo from './img/logo.jpeg';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><img src={logo}></img></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Menu;