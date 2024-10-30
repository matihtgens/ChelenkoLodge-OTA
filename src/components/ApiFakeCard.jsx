import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faPaw, faSpa, faBanSmoking } from '@fortawesome/free-solid-svg-icons'; 
import suiteImage from "../assets/img/suitecard.jpg";
import tinyImage from "../assets/img/tinycard.jpg";
import './apifakecard.css';

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
    <div className="cont-card">
      <div className="col-12 row justify-content-center card-contain"> {/* Centra las tarjetas */}
        {cardsData.map((card, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-sm-12"> {/* Responsivo */}
            <div className="card">
              <img src={card.img} alt={card.title} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.description}</p>
                <p>Price: {card.price}</p>
                <div className="conditions">
                  {card.conditions.map((condition, idx) => (
                    <div key={idx} className="condition-item">
                      <FontAwesomeIcon icon={condition.icon} className="condition-icon" />
                      <span>{condition.text}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary price-btn">Reservar por {card.price}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiFakeCard;
