import React from 'react';
import Cardcabin from './Cardcabin';
import { useCart } from '../context/CartContext';
import './home.css';  // Asegúrate de importar el CSS
import './responsive.css';

const Home = ({ onOpenMiniCart }) => {

  return (
    <>
      <div className='fondo'>
        <div className="home-container">  {/* Aplica el fondo y el espaciado */}
          <Cardcabin onOpenMiniCart={onOpenMiniCart} />  {/* Renderiza las cards */}
        </div>
      </div>
    </>
  );
};    

export default Home;
