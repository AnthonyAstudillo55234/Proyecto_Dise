import React from 'react';
import './menulogin.css';
import logo from './img/logo.jpeg';

const Menulogin = () => {
  return (
      <div className='menu'>
        <img src={logo} alt=''></img>
        <div><h3>EcuaGizer</h3><p>Soluciones Eléctricas para</p><p>problemas corrientes</p></div>
      </div>
  );
};

export default Menulogin;