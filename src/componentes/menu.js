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
            <li><a><Link to='/'>Inicio</Link></a></li>
            <li><a><Link to='/contacto'>Contacto</Link></a></li>
            <li><a><Link to='/login'>Iniciar Sesión</Link></a></li>
            <li><a><Link to='/registrar'>Registrarse</Link></a></li>
          </ul>
          
        </div>
    </div>
  );
};

export default Menu;
