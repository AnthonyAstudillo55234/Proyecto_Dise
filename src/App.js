import React from 'react';
import './App.css';
import Menu from './componentes/menu.js';
import Body from './componentes/body.js';
import Footer from './componentes/footer.js';

const App = () => {
  return (
    <div className="app">
      <Menu />
      <Body />
      <Footer />
    </div>
  );
};

export default App;