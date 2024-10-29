import React from 'react';
import ApiFakeCard from './ApiFakeCard';
import Card from './card';
import Register from './register';
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
    </>
  );
}; 

export default Home;
