import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Body from './componentes/body';
import Login from './componentes/login';
import Registrar from './componentes/registrar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/body" element={<Body />} />
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
