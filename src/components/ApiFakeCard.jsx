import React from 'react';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faSpa, faBanSmoking } from '@fortawesome/free-solid-svg-icons';
import suiteImage from "../assets/img/tinycard.jpg";
import tinyImage from "../assets/img/suitecard.jpg";
import imageext from "../assets/img/chelenko-tiny2.webp";
import './apifakecard.css';
import './responsive.css';

const ApiFakeCard = () => {
  const { addItemToCart } = useCart();

  // Datos de las tarjetas, con información específica para cada una
  const cardsData = [
    {
      id: 1,
      title: 'Suite',
      price: 73900,
      img: suiteImage,
      description: 'Una suite lujosa con todas las comodidades para una estancia relajante.',
      conditions: [
        { icon: faPaw, text: 'Pet Friendly' },
        { icon: faSpa, text: 'Servicios adicionales' },
        { icon: faBanSmoking, text: 'No fumar en la cabaña' }
      ]
    },
    {
      id: 2,
      title: 'Tiny Cabin',
      price: 95900,
      img: tinyImage,
      description: 'Una pequeña cabaña acogedora, perfecta para una escapada tranquila.',
      conditions: [
        { icon: faPaw, text: 'Pet Friendly' },
        { icon: faSpa, text: 'Servicios adicionales' },
        { icon: faBanSmoking, text: 'No fumar en la cabaña' }
      ]
    }
  ];

  return (
    <div className="cont-card">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.img} alt={card.title} className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.description}</p>
            <p className="price">Precio: ${card.price.toLocaleString()}</p>
            
            <div className="conditions">
              {card.conditions.map((condition, index) => (
                <div key={index} className="condition-item">
                  <FontAwesomeIcon icon={condition.icon} className="condition-icon" />
                  <span>{condition.text}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-primary price-btn" onClick={() => addItemToCart(card)}>
              Valor por noche: ${card.price.toLocaleString()}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiFakeCard;
