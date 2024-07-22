import React from "react";
import { useNavigate } from 'react-router-dom';
import Cabecera from "./cabecera_registrar";
import Footer from "./footer";
import './registrar.css';

function Registrar() {
  
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const nombre_usuario = document.getElementById('nombre_usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const contrasena_confirmar = document.getElementById('contrasena_confirmar').value;

    if (nombre === '' || apellido === '' || correo === '' || nombre_usuario === '' || contrasena === '' || contrasena_confirmar === '') {
      alert('Todos los campos son obligatorios');
      return;
    }
    if (contrasena !== contrasena_confirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(correo)) {
      alert('Correo no válido');
      return;
    }

    alert('Cuenta registrada con éxito');
    navigate('/');
  };
  const regresar = (e) =>{
    e.preventDefault();
    navigate('/');
  }
  return (
    <div>
      <Cabecera />
      <div className='formulario_registrar'>
        <h1>Registrar Cuenta</h1>
        <form onSubmit={manejarEnvio}>
          <label>Ingrese su nombre:</label>
          <input type='text' id='nombre' placeholder='Nombre' />

          <label>Ingrese su apellido:</label>
          <input type='text' id="apellido" placeholder='Apellido' />

          <label>Ingrese su correo:</label>
          <input type='email' id='correo' placeholder='Correo' />

          <label>Ingrese un nombre de usuario:</label>
          <input type='text' id='nombre_usuario' placeholder='Usuario' />

          <label>Ingrese una contraseña:</label>
          <input type='password' id='contrasena' placeholder='Contraseña' />

          <label>Confirme su contraseña:</label>
          <input type='password' id='contrasena_confirmar' placeholder='Confirmar contraseña' />

          <button type="submit">Registrar cuenta</button>
          <button type="button" onClick={regresar}>Cancelar</button>
        </form>
      </div>
      <div className='foter'>
        </div>
    </div>
  );
}

export default Registrar;
