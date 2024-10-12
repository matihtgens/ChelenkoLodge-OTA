import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateQuantity = (id, quantity) => {
    // Lógica para actualizar la cantidad
  };

  const getTotal = () => {
    // Lógica para calcular el total
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => {
  return useContext(CartContext);
};
