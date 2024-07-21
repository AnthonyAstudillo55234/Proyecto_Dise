import React from 'react';
import './contacto.css';
import Menu1 from './menulogin';

function Contacto() {
    return(
        <div>
        <Menu1/>
        <div className="login-container">
          <form>
          <h1></h1>
          <input type='text' placeholder='Nombre de usuario'></input>
          <p></p>
          <input type='password' placeholder='Contraseña'></input>
          <p></p>
          <button type="button">Registrarse</button>
          <p>------Recuperar usuario------</p>
          <p>------Recuperar contraseña------</p>
          <button type="submit" className='btn'>Iniciar Sesión</button>
          <p></p>
          <p>Haz click para revisar los <a>Términos de Servicio</a></p>
          <p>y <a>Políticas de Privacidad</a></p>
          </form>
          <div className='foter'>
  
          </div>
        </div>
      </div>
    );
}

export default Contacto;