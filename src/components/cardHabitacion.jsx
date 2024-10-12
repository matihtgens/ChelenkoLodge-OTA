import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.css';

const CardHabitacion = ({ name, price, location, img, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(1); // Agrega una habitación al carrito
    alert(`¡${name} ha sido agregada a tu reserva!`); // Alerta al agregar
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Ubicación: {location}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text mb-0">Precio por noche: ${price}</p>
          <div>
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              🛏️ Reservar
            </button>
            <Link to={`/habitacion/${name}`} className="btn btn-details">
              Detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CardHabitacion.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CardHabitacion;
