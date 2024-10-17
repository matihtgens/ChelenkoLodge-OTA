import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Importamos el componente para los íconos
import { faPaw, faSpa, faBanSmoking } from '@fortawesome/free-solid-svg-icons'; // Importamos los íconos
import suiteImage from "../assets/img/suitecard.jpg";
import tinyImage from "../assets/img/tinycard.jpg";
import './ApiFakeCard.css';

const ApiFakeCard = () => {
  const cardsData = [
    {
      title: 'Suite',
      price: '73,900',
      conditions: [
        { icon: faPaw, text: 'Pet Friendly' },
        { icon: faSpa, text: 'Servicios adicionales' },
        { icon: faBanSmoking, text: 'No fumar en la cabaña' }
      ],
      img: suiteImage,
      description: 'Descripción de la Suite.'
    },
    {
      title: 'Tiny Cabin',
      price: '95,900',
      conditions: [
        { icon: faPaw, text: 'Pet Friendly' },
        { icon: faSpa, text: 'Servicios adicionales' },
        { icon: faBanSmoking, text: 'No fumar en la cabaña' }
      ],
      img: tinyImage,
      description: 'Descripción de la Tiny Cabin.'
    }
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.img} alt={card.title} className="card-img" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <p>Price: {card.price}</p>
          <div className="conditions">
            {card.conditions.map((condition, idx) => (
              <div key={idx} className="condition-item">
                <FontAwesomeIcon icon={condition.icon} className="condition-icon" />
                <span>{condition.text}</span>
              </div>
            ))}
          </div>
          <button className="price-btn">Reservar por {card.price}</button>
        </div>
      ))}
    </div>
  );
};

export default ApiFakeCard;
