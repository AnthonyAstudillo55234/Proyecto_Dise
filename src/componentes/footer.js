import React from 'react';
import './footer.css';
import logo2 from './img/logo.jpeg';

const Footer = () => {
  return (
    <footer>
      <ul>
        <img src={logo2} className='img2' alt=''></img>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><h3>Av. Los Pinos y Juan Bereche</h3></li>
        <li><h4>Telefono:</h4>
        <p><a href="https://wa.me/+593982694885" rel="noreferrer" target='_blank'>0982694885</a></p>
          <h4>Email: </h4>
          <p><a href="mailto:richard.soria@epn.edu.ec" rel="noreferrer" target='_blank'>richard.soria@epn.edu.ec</a></p>
          <h4>Horarios de atención: </h4>
          <p>08h00 a 20h00</p>
          </li>
      </ul>
      <p className='derechos'>&copy; 2024 EcuaGizer. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
