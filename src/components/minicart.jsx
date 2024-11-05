import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './minicart.css';
import './responsive.css';

const MiniCart = ({ onClose, isOpen }) => {
  const { cart, getTotal, updateItemQuantity } = useCart(); // Extrae las funciones y el estado del contexto
  const total = getTotal(); // Obtiene el total del carrito
  const formattedTotal = total ? total.toFixed(2) : '0.00'; // Formatea el total con dos decimales
  const navigate = useNavigate(); // Hook para manejar la navegación

  // Incrementa la cantidad de noches para un artículo en el carrito
  const handleIncrease = (id) => {
    updateItemQuantity(id, 1); // Incrementa la cantidad del artículo en 1
  };

  // Decrementa la cantidad de noches para un artículo en el carrito
  const handleDecrease = (id) => {
    updateItemQuantity(id, -1); // Disminuye la cantidad del artículo en 1
  };

  // Si el mini carrito no está abierto, no se renderiza nada
  if (!isOpen) return null;

  return (
    <div className="mini-cart">
      <button className="btn-close" onClick={onClose} aria-label="Cerrar carrito"></button>

      {cart.length === 0 ? (
        <p>¡Tu carrito está vacío! ¿Quieres explorar nuestras opciones de alojamiento?</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              {/* Muestra el nombre y el precio de la cabaña */}
              <h6>{item.name}</h6>
              <p>Valor de cabaña: ${item.price}</p>
              
              {/* Controles para ajustar el número de noches */}
              <div className="quantity-controls">
                <span>Noches:</span>
                <button onClick={() => handleDecrease(item.id)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}

      <hr className="divider" />

      {/* Muestra el total general del carrito */}
      <div className="cart-footer">
        <p>Subtotal: ${formattedTotal}</p>
        <button
          className="btn-checkout"
          onClick={() => navigate('/register')} // Navega a la página de registro para completar
        >Reservar
        </button>
      </div>
    </div>
  );
};

export default MiniCart;
