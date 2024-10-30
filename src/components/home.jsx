import React from 'react';
import ApiFakeCard from './ApiFakeCard';
import InfoReserva from '../pages/info-reserva'; // Verifica que este componente esté en la ruta correcta
import MetodoPago from '../pages/metodopago';
import './home.css';  // Asegúrate de importar el CSS

const Home = () => {
  return (
    <>
      <div className='fondo'>
        <div className="home-container">  {/* Aplica el fondo y el espaciado */}
          <ApiFakeCard />  {/* Renderiza las cards */}
        </div>
        <div>
        </div>
      </div>
      <div className='home-reserva'>
      <InfoReserva /> {/* Asegúrate de que este componente esté bien configurado */}
      <MetodoPago /> {/* metodopago*/}
      </div>
    </>
  );
}; 

export default Home;
