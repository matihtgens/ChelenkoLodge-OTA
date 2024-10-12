import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './minicart.css';

const MiniCart = ({ onClose }) => {
  const navigate = useNavigate();
  const { cart, updateQuantity, getTotal } = useCart(); 

  const formattedTotal = typeof getTotal() === 'number' ? getTotal().toFixed(2) : '0.00';

  const handleIncrease = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecrease = (id) => {
    updateQuantity(id, -1);
  };

  const handlePayClick = () => {
    navigate('/cart'); // Navegar a la página de pago
  };

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
              <h6>{item.name}</h6>
              <p className="services-list">
                Servicios: {item.services.join(', ')} {/* Cambiado de ingredients a services */}
              </p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="cart-footer">
        <p>Total: ${formattedTotal}</p>
        <button className="btn-pay" onClick={handlePayClick}>Confirmar Reserva</button>
      </div>
    </div>
  );
};

export default MiniCart;
