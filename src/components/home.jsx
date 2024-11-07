import React from 'react';
import Cardcabin from './Cardcabin';
import DetalleReserva from '../pages/DetalleReserva';  // Importa el componente DetalleReserva
import MetodoPago from '../pages/metodopago';  // Importa el componente MetodoPago
import './home.css';  // Asegúrate de importar el CSS
import './responsive.css';  // Si tienes un archivo para media queries

const Home = ({ onOpenMiniCart }) => {
  return (
    <>
      <div className='fondo'>
        <div className="home-container">
          {/* Tarjetas de cabañas */}
          <div className="card-container">
            <Cardcabin onOpenMiniCart={onOpenMiniCart} />
          </div>
          
          {/* DetalleReserva y MetodoPago al lado */}
          <div className="payment-container">
            <div className="detalle-reserva">
              <DetalleReserva />  {/* Componente DetalleReserva */}
            </div>
            <div className="metodo-pago">
              <MetodoPago />  {/* Componente MetodoPago */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
