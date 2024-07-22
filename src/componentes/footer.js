import React from 'react';
import './footer.css';
import logo2 from './img/logo.png';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><img src={logo2} className='img2' alt=''></img>
        <p>Empresa especializada</p>
        <p>en soluciones para los</p>
        <p>cortes de luz</p></li>
        <li><h3>Av. Los Pinos y Juan Baltazar</h3>
        <iframe
                    title='Mapa de la tienda'
                    src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.8024496397544!2d-78.45127976251047!3d0.012629114338155032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a77bf36b7cdbf%3A0x7a9b936064b41d2f!2sCalle%20los%20Pinos!5e0!3m2!1ses!2sec!4v1721596065633!5m2!1ses!2sec"
                    width='500'
                    height='200'
                    style={{ border: 0 }}
                    allowFullScreen=''
                    loading='lazy'
                ></iframe></li>
        <li><h4>Teléfono:</h4>
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
