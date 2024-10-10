import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Ingrese su destino" />
      <input type="date" placeholder="Fecha Entrada" />
      <input type="date" placeholder="Fecha Salida" />
      <button className="search-button">Buscar</button>
    </div>
  );
}

export default Navbar;
