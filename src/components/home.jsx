import React from 'react';
import ApiFakeCard from './ApiFakeCard';
import './Home.css';  // Asegúrate de importar el CSS

const Home = () => {
  return (
    <div className="home-container">  {/* Aplica el fondo y el espaciado */}
      <ApiFakeCard />  {/* Renderiza las cards */}
    </div>
  );
};

export default Home;
