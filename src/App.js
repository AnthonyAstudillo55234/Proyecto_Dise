import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Body from './componentes/body';
import Login from './componentes/login';
import Registrar from './componentes/registrar';
import Contacto from './componentes/contacto';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/body" element={<Body />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
