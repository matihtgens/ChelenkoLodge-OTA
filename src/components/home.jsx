import React from 'react';
import ApiFakeCard from './ApiFakeCard';
import InfoReserva from '../pages/info-reserva'; // Verifica que este componente esté en la ruta correcta
import MetodoPago from '../pages/metodopago';
import './home.css';  // Asegúrate de importar el CSS
import Register from '../pages/register';
import './responsive.css';

const Home = () => {
  return (
    <>
      <div className='fondo'>
        <div className="home-container">  {/* Aplica el fondo y el espaciado */}
          <ApiFakeCard />  {/* Renderiza las cards */}
        </div>
      </div>
      <div className='home-reserva'>
      <Register /> 
      <InfoReserva /> 
      </div>
      <div className='homepago'>
      <MetodoPago/> {/* metodopago*/}
      </div>
    </>
  );
}; 

export default Home;
