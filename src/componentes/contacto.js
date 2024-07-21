import React from 'react';
import './contacto.css';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';

function Contacto() {
    return(
        <div className='contacto-contenedor'>
            <header className='cabecera'>
                <img src={logo} alt='Logo de la empresa' className='logo' />
                <p className='texto'><h3>EcuaGizer</h3><p>Soluciones Eléctricas para problemas corrientes</p></p>
                <div class='opciones'>
          <ul>
            <li><a><Link to='/'>Regresar al Inicio</Link></a></li>
          </ul>
          </div>
            </header>
            <div className='cuerpo'> 
            <div className='contacto-info'>
                <h1>CONTACTO</h1>
                <p><strong>Teléfono: </strong> <a href="https://wa.me/+593982694885" rel="noreferrer" target='_blank'>0982694885</a></p>
                <p><strong>Email: </strong><a href="mailto:richard.soria@epn.edu.ec" rel="noreferrer" target='_blank'>richard.soria@epn.edu.ec</a></p>
                <p><strong>Dirección: </strong> <a href="https://maps.app.goo.gl/TfBukmQR84Cm3SCc6" rel="noreferrer" target='_blank'>Av. Los Pinos y Juan Bereche</a></p>
                <p><strong>Información de la Empresa:</strong></p>
                <p>Empresa especializada en soluciones para los cortes de luz, contactanos para obtener más información </p>
            </div>
            <div className='mapa-contenedor'>
                <h2>Encuéntranos en el mapa</h2>
                <iframe
                    title='Mapa de la tienda'
                    src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.8024496397544!2d-78.45127976251047!3d0.012629114338155032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a77bf36b7cdbf%3A0x7a9b936064b41d2f!2sCalle%20los%20Pinos!5e0!3m2!1ses!2sec!4v1721596065633!5m2!1ses!2sec"
                    width='600'
                    height='450'
                    style={{ border: 0 }}
                    allowFullScreen=''
                    loading='lazy'
                ></iframe>
            </div>
            </div>
        </div>

    );
}

export default Contacto;

