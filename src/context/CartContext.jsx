// CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Añadir ítem al carrito
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Calcular el total del carrito
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Función para hacer autoscroll a la sección de reservas
  const scrollToReserva = () => {
    const reservaSection = document.getElementById('reserva');
    if (reservaSection) {
      reservaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getTotal, scrollToReserva }}>
      {children}
    </CartContext.Provider>
  );
};

