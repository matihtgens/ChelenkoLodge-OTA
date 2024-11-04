import React from 'react';
import { useNavigate } from 'react-router-dom';  // Hook para navegar entre rutas de la aplicación.
import { useCart } from '../context/CartContext';  // Importa el contexto personalizado del carrito.
import './minicart.css';  // Importa el archivo de estilos CSS para MiniCart.
import './responsive.css';

const MiniCart = ({ onClose, isOpen }) => {
  const { cart, getTotal, updateItemQuantity } = useCart();  // Extrae el carrito, total y actualización de cantidad del contexto.
  const total = getTotal();  // Calcula el total de productos en el carrito.
  const formattedTotal = total ? total.toFixed(2) : '0.00';  // Formatea el total a dos decimales, o muestra '0.00' si no hay productos.
  const navigate = useNavigate();  // Hook para navegar entre rutas de la aplicación.

  // Función para navegar a la página de reservas y cerrar el carrito.
  const handleReserve = () => {
    navigate('/reservation');  // Navega a la página de reservas.
    onClose();  // Cierra el mini carrito.
  };

  // Función para incrementar la cantidad de un producto en el carrito.
  const handleIncrease = (id) => {
    updateItemQuantity(id, 1);  // Aumenta la cantidad del producto con el ID proporcionado en 1.
  };

  // Función para disminuir la cantidad de un producto en el carrito.
  const handleDecrease = (id) => {
    updateItemQuantity(id, -1);  // Disminuye la cantidad del producto con el ID proporcionado en 1.
  };

  // Si el carrito no está abierto, no renderiza nada.
  if (!isOpen) return null;

  return (
    <div className="mini-cart">  {/* Contenedor principal del mini carrito */} 
      <button className="btn-close" onClick={onClose} aria-label="Cerrar carrito"></button>  {/* Botón para cerrar el carrito */} 

      {cart.length === 0 ? (  // Verifica si el carrito está vacío.
        <p>¡Tu carrito está vacío! ¿Quieres explorar nuestras opciones de alojamiento?</p>  // Muestra mensaje si no hay productos.
      ) : (  
        cart.map((item) => (  // Si el carrito tiene productos, los recorre y los muestra.
          <div key={item.id} className="cart-item">  {/* Contenedor para cada producto en el carrito */}
            <img src={item.img} alt={item.name} className="cart-item-img" />  {/* Imagen del producto */}
            <div className="cart-item-details">  {/* Contenedor para los detalles del producto */}
              <h6>{item.name}</h6>  {/* Nombre del producto */}
              <p>{item.quantity} × ${item.price}</p>  {/* Muestra cantidad y precio del producto */}
              <div className="quantity-controls">  {/* Controles de cantidad del producto */}
              <button onClick={() => handleDecrease(item.id)} disabled={item.quantity === 1}>-</button>  {/* Botón para disminuir la cantidad, deshabilitado si es 1 */}
              <span>{item.quantity}</span>  {/* Muestra la cantidad actual del producto */}
              <button onClick={() => handleIncrease(item.id)}>+</button>  {/* Botón para aumentar la cantidad */}
          </div>
            </div>
          </div>
        ))
      )}

      <hr className="divider" />  {/* Línea divisoria entre los productos y el total */}

      <div className="cart-footer">  {/* Pie del carrito con el subtotal y botón de reserva */}
        <p>Subtotal: ${formattedTotal}</p>  {/* Muestra el subtotal formateado */}
        <button className="btn-checkout" onClick={handleReserve}>Go Checkout</button>  {/* Botón para ir al proceso de reserva */}
      </div>
    </div>
  );
};

export default MiniCart;
