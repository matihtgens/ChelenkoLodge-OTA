import React from 'react'; 
import { useNavigate } from 'react-router-dom';  // Hook para navegar entre rutas.
import { useCart } from '../context/CartContext';  // Hook personalizado que gestiona el estado del carrito.
import './minicart.css';  // Importa los estilos CSS específicos para el MiniCart.

const MiniCart = ({ onClose, isOpen }) => {
  const { cart, getTotal, updateItemQuantity } = useCart();  // Extrae del contexto el carrito, la función para obtener el total y la de actualizar la cantidad.
  const total = getTotal();  // Calcula el total de productos en el carrito.
  const formattedTotal = total ? total.toFixed(2) : '0.00';  // Formatea el total a dos decimales, o muestra '0.00' si no hay productos.
  const navigate = useNavigate();  // Hook para navegar entre rutas de la aplicación.

  // Función que redirige a la página de reservas y cierra el carrito.
  const handleReserve = () => {
    navigate('/reservation');  // Navega a la página de reservas.
    onClose();  // Cierra el mini carrito.
  };

  // Función que incrementa la cantidad de un producto en el carrito.
  const handleIncrease = (id) => {
    updateItemQuantity(id, 1);  // Aumenta la cantidad del producto con el ID proporcionado.
  };

  // Función que disminuye la cantidad de un producto en el carrito.
  const handleDecrease = (id) => {
    updateItemQuantity(id, -1);  // Disminuye la cantidad del producto con el ID proporcionado.
  };

  // Si el carrito no está abierto, no renderiza nada.
  if (!isOpen) return null;

  return (
    <div className="mini-cart">  {/* Contenedor principal del mini carrito */}
      <button className="btn-close" onClick={onClose} aria-label="Cerrar carrito"></button>  {/* Botón para cerrar el carrito */}

      {/* Si el carrito está vacío, muestra un mensaje */}
      {cart.length === 0 ? (  
        <p>¡Tu carrito está vacío! ¿Quieres explorar nuestras opciones de alojamiento?</p>
      ) : (  
        // Si el carrito tiene productos, los recorre y los muestra
        cart.map((item) => (
          <div key={item.id} className="cart-item">  {/* Contenedor para cada producto */}
            <img src={item.img} alt={item.name} className="cart-item-img" />  {/* Imagen del producto */}
            <div className="cart-item-details">  {/* Detalles del producto */}
              <h6>{item.name}</h6>  {/* Nombre del producto */}
              <p className="services-list">Servicios: {item.services.join(', ')}</p>  {/* Lista de servicios del producto */}
              <div className="quantity-controls">  {/* Controles para aumentar o disminuir la cantidad */}
                <button onClick={() => handleDecrease(item.id)} disabled={item.quantity === 1}>-</button>  {/* Botón para disminuir la cantidad */}
                <span>{item.quantity}</span>  {/* Muestra la cantidad actual del producto */}
                <button onClick={() => handleIncrease(item.id)}>+</button>  {/* Botón para aumentar la cantidad */}
              </div>
            </div>
          </div>
        ))
      )}

      <div className="cart-footer">  {/* Pie de carrito donde se muestra el total y el botón de confirmar */}
        <p>Total: ${formattedTotal}</p>  {/* Muestra el total formateado */}
        <button className="btn-pay" onClick={handleReserve}>Confirmar Reserva</button>  {/* Botón para confirmar la reserva */}
      </div>
    </div>
  );
};

export default MiniCart;
