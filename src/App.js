import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Body from './componentes/body';
import Login from './componentes/login';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/body" element={<Body />} />
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
