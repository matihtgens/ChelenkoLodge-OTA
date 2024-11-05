import React, { createContext, useContext, useState } from 'react';

// Crear un contexto para el carrito
const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [reservationInfo, setReservationInfo] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addItemToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
        setIsCartOpen(true); // Asegurarse de abrir el mini cart al añadir un ítem
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const updateItemQuantity = (id, delta) => {
        setCart((prevCart) => 
            prevCart.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, quantity: Math.max(cartItem.quantity + delta, 1) }
                    : cartItem
            )
        );
    };

    const saveReservationInfo = (info) => {
        console.log("Información de reserva guardada:", info);
        setReservationInfo(info);
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, getTotal, updateItemQuantity, reservationInfo, saveReservationInfo, isCartOpen, setIsCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado para usar el CartContext fácilmente
export const useCart = () => useContext(CartContext);
