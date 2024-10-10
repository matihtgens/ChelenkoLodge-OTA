import React from 'react';
import './Card.css';

function Card({ title, location, description }) {
  return (
    <div className="card">
      <div className="image-placeholder"></div>
      <h2>{title}</h2>
      <p>{location}</p>
      <p>{description}</p>
      <button className="price-button">Ver Precios</button>
    </div>
  );
}

export default Card;
