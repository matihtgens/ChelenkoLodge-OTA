import React, { createContext, useContext, useState } from 'react';

// Crear un contexto para el carrito
const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    // Estado para almacenar los ítems del carrito
    const [cart, setCart] = useState([]);
    // Estado para almacenar la información de reserva
    const [reservationInfo, setReservationInfo] = useState(null);

    // Función para agregar un ítem al carrito
    const addItemToCart = (item) => {
        // Actualizar el carrito, verificando si el ítem ya existe
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                // Si el ítem ya existe, incrementar su cantidad
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // Si es un nuevo ítem, agregarlo al carrito con cantidad 1
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    // Función para obtener el total del carrito
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Función para actualizar la cantidad de un ítem en el carrito
    const updateItemQuantity = (id, delta) => {
        setCart((prevCart) => 
            prevCart.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, quantity: Math.max(cartItem.quantity + delta, 1) } // Asegura que la cantidad no sea menor a 1
                    : cartItem
            )
        );
    };

    // Función para guardar la información de reserva
    const saveReservationInfo = (info) => {
        console.log("Información de reserva guardada:", info); // Log para verificar la información
        setReservationInfo(info); // Actualiza el estado con la información de reserva
    };

    // Retornar el contexto con todas las funciones y estados
    return (
        <CartContext.Provider value={{ cart, addItemToCart, getTotal, updateItemQuantity, reservationInfo, saveReservationInfo }}>
            {children} {/* Renderizar los componentes hijos que usan este contexto */}
        </CartContext.Provider>
    );
};

// Hook personalizado para usar el CartContext fácilmente
export const useCart = () => useContext(CartContext);
