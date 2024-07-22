import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import logo from './img/logo.png';

const Menu = () => {
  return (
    <div class='menu_inicio'>
      <div class='presentacion'>
        <img src={logo} alt="Logo" />
        <p class='nombre'>EcuaGizer<br></br></p>
      </div>
        <div class='opciones'>
          <ul>
            <li><Link to='/body'>Inicio</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
          </ul>
          
        </div>
    </div>
  );
};

export default Menu;
