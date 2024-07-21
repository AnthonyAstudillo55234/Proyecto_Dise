import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import logo from './img/logo.png';

const Menu = () => {
  return (
    <div class='menu_inicio'>
      <div class='presentacion'>
        <img src={logo} alt="Logo" />
        <p>EcuaGizer</p>
      </div>
      <div className='opciones'>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/registrar">Registrar</Link></li>
        </ul>
      </div>
    </div>

    
  );
};

export default Menu;
