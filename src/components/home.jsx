import React from 'react';
import Cardcabin from './Cardcabin';
import './home.css';  // Asegúrate de importar el CSS
import './responsive.css';

const Home = () => {
  return (
    <>
      <div className='fondo'>
        <div className="home-container">  {/* Aplica el fondo y el espaciado */}
          <Cardcabin />  {/* Renderiza las cards */}
        </div>
      </div>
    </>
  );
}; 

export default Home;
