import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();  // Crea un contexto para compartir el estado del carrito en toda la aplicación.

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  // Estado del carrito, inicializado como un array vacío.

  // Función para agregar un ítem al carrito
  const addItemToCart = (item) => {
    setCart((prevCart) => {  // Actualiza el estado del carrito
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);  // Busca si el ítem ya existe en el carrito
      if (existingItem) {
        // Si el ítem ya está en el carrito, aumenta su cantidad
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }  // Si coincide el ID, incrementa la cantidad
            : cartItem  // Si no coincide, devuelve el ítem sin cambios
        );
      } else {
        // Si el ítem no existe, agrégalo al carrito con cantidad 1
        return [...prevCart, { ...item, quantity: 1 }];  // Añade el ítem con una cantidad inicial de 1
      }
    });
  };

  // Función para calcular el total del carrito
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);  // Suma el precio multiplicado por la cantidad de cada ítem
  };

  // Función para actualizar la cantidad de un ítem en el carrito
  const updateItemQuantity = (id, delta) => {
    setCart((prevCart) =>  // Actualiza el carrito
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item  // Si el ID coincide, ajusta la cantidad
        )
        .filter((item) => item.quantity > 0)  // Filtra para eliminar ítems con cantidad 0
    );
  };

  // Función opcional para eliminar un ítem del carrito
  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));  // Filtra el carrito para eliminar el ítem con el ID proporcionado
  };

  // Proporciona el contexto del carrito con sus funciones a los componentes hijos
  return (
    <CartContext.Provider value={{ cart, addItemToCart, getTotal, updateItemQuantity, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);  // Hook personalizado para acceder al contexto del carrito
