import React from 'react';
import { Link } from 'react-router-dom';
import './cabecera_registrar.css';
import logo from './img/logo.png';

const Menu = () => {
  return (
    <div class='menu_presentacion'>
      <div class='presentacion_cabecera'>
        <img src={logo} alt="Logo" />
        <p class='nombre'>EcuaGizer<br></br>
        <p class='descripcion'>Soluciones eléctricas para problemas corrientes</p></p>
      </div>
    </div>
  );
};

export default Menu;
