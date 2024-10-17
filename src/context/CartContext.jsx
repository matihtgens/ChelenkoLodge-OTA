import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para actualizar la cantidad de un item en el carrito
  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } // Evita que la cantidad sea menor que 1
          : item
      );
    });
  };

  // Función para calcular el total
  const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity; // Asegúrate de que cada item tenga un precio
    }, 0);
  };

  // Función para agregar un item al carrito
  const addToCart = (item) => {
    setCart((prevCart) => {
      // Verifica si el item ya existe en el carrito
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Si ya existe, actualiza la cantidad
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Si no existe, agrega el nuevo item
        return [...prevCart, item];
      }
    });
  };

  // Función para eliminar un item del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity, getTotal, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => {
  return useContext(CartContext);
};
