import React from 'react';
import generador from './img/generador.jpg';
import regulador from './img/regulador.jpg';
import extension from './img/extension.jpg';
import './body.css';

const Body = () => {
  return (
    <div className="body">
      <div className="products">
        <div className="product">
          <img src={generador} alt="Product" />
          <h2>GENERADOR DE ENERGIA</h2>
          <p>Es un dispositivo capaz de suministrar energía eléctrica durante un corte de electricidad.</p>
          <a href=''>Ver mas</a>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="product">
          <img src={regulador} alt="Product" />
          <h2>REGUALDOR DE VOLTAJE</h2>
          <p>Un dispositivo electrónico diseñado para mantener un nivel de tensión constante o regulable.</p>
          <a href=''>Ver mas</a>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="product">
          <img src={extension} alt="Product" />
          <h2>EXTENSION DE ELECTRICIDAD
          </h2>
          <p>Es un dispositivo diseñado para proveer energía de manera temporal en los lugares donde un tomacorriente no alcanza.</p>
          <a href=''>Ver mas</a>
          <br></br>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="products">
        <div className="product">
          <img src={generador} alt="Product" />
          <h2>GENERADOR DE ENERGIA</h2>
          <p>Es un dispositivo capaz de suministrar energía eléctrica durante un corte de electricidad.</p>
          <a href=''>Ver mas</a>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="product">
          <img src={regulador} alt="Product" />
          <h2>REGUALDOR DE VOLTAJE</h2>
          <p>Un dispositivo electrónico diseñado para mantener un nivel de tensión constante o regulable.</p>
          <a href=''>Ver mas</a>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="product">
          <img src={extension} alt="Product" />
          <h2>EXTENSION DE ELECTRICIDAD</h2>
          <p>Es un dispositivo diseñado para proveer energía de manera temporal en los lugares donde un tomacorriente no alcanza.</p>
          <a href=''>Ver mas</a>
          <br></br>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="products">
        <div className="product">
          <img src={generador} alt="Product" />
          <h2>GENERADOR DE ENERGIA</h2>
          <p>Es un dispositivo capaz de suministrar energía eléctrica durante un corte de electricidad.</p>
          <a href=''>Ver mas</a>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="product">
          <img src={regulador} alt="Product" />
          <h2>REGUALDOR DE VOLTAJE</h2>
          <p>Un dispositivo electrónico diseñado para mantener un nivel de tensión constante o regulable.</p>
          <a href=''>Ver mas</a>
          <br></br>
          <button>Buy Now</button>
        </div>
        <div className="product">
          <img src={extension} alt="Product" />
          <h2>EXTENSION DE ELECTRICIDAD</h2>
          <p>Es un dispositivo diseñado para proveer energía de manera temporal en los lugares donde un tomacorriente no alcanza.</p>
          <a href=''>Ver mas</a>
          <br></br>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
