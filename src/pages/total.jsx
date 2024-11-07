import React, { useState } from 'react';
import MetodoPago from './metodopago';  // Importamos el componente MetodoPago
import './responsive.css';

const Total = ({ total }) => {
  const [showPayment, setShowPayment] = useState(false);  // Estado para controlar la visibilidad de MetodoPago

  const handlePayment = () => {
    setShowPayment(true);  // Al hacer clic en "Ir a pagar", mostramos el componente MetodoPago
  };

  return (
    <div className="total-container">
      <div className="total-info">
        <h4>Total a pagar: ${total}</h4>
        <button className="btn-completar" onClick={handlePayment}>
          Continuar
        </button>
      </div>

      {/* Si showPayment es true, mostramos el componente MetodoPago */}
      {showPayment && <MetodoPago />}
    </div>
  );
};

export default Total;