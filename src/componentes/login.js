import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu1 from './menulogin';
import User from './img/Sample_User_Icon.png';

import './login.css';

function Login() {
   const navigate = useNavigate();
   const validarDatos = (e) => {
      e.preventDefault();
      const use = document.getElementById('user');
      const cla = document.getElementById('clave');
      const user = use.value;
      const clave = cla.value;
      const us = "Ecua1";
      const cl= "Hola123*";
      use.style.border='';
      cla.style.border='';
      if(user===''||clave===''){
        alert("Hay campos vacíos. Por favor, ingrese todos los datos.");
      if (user===''){
        use.style.border='1px solid red';
        return;
      }
      if(clave===''){
          cla.style.border='1px solid red';
      }}else{
      if (user!==us||clave!==cl){
        alert("Las credenciales ingresadas son incorrectas.");
        use.style.border='1px solid red';
        cla.style.border='1px solid red';
        return;
      }else{
        alert("Se ha iniciado sesión correctamente.");
        navigate('/body');
      }
    } 
   };
   const recUse = (e) => {
    e.preventDefault();
    const use = "Ecua1";
    alert("El usuario es: "+ use);
    return;
   };
   const recCla = (e) => {
    e.preventDefault();
    const cla = "Hola123*";
    alert("La contraseña es: "+ cla);
    return;
   };
  return (
    <div className="login">
      <Menu1/>
      <div className="login-container">
        <form onSubmit={validarDatos} className='for'>
        <h1></h1>
        <img src={User} alt=''></img>
        <p></p>
        <input type='text' placeholder='Nombre de usuario' id='user'></input>
        <p></p>
        <input type='password' placeholder='Contraseña' id='clave'></input>
        <p></p>
        <button type="submit" className='btn'>Iniciar Sesión</button>
        <p>------ <a onClick={recUse}>Recuperar usuario</a> ------</p>
        <p>------ <a onClick={recCla}>Recuperar contraseña</a> ------</p>
        <Link to="/registrar" className='Butn'>Registrarse</Link>
        <p></p>
        <p>Haz click para revisar los <a className='a1' href='#TerminosyCondiciones'>Términos de Servicio</a></p>
        <p>y <a className='a1' href='#PoliticasdePrivacidad'>Políticas de Privacidad</a></p>
        </form>
        <div className='foter'>
        </div>
      </div>
    </div>
  );
}

export default Login;