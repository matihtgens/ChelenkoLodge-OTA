import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faSpa, faBanSmoking, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import suiteImage from "../assets/img/tinycard.webp";
import tinyImage from "../assets/img/suitecard.webp";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './apifakecard.css';
import './responsive.css';

const Cardcabin = () => {
  const { addItemToCart, setIsCartOpen } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const notify = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  // Datos de las tarjetas
  const cardsData = [
    {
      id: 1,
      title: 'Suite',
      price: 73900,
      img: suiteImage,
      description: 'Una suite lujosa con todas las comodidades para una estancia relajante.',
      additionalService: { name: 'Tinaja suite', price: 60000 },
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
      additionalService: { name: 'Tinaja tiny', price: 45000 },
      conditions: [
        { icon: faPaw, text: 'Pet Friendly' },
        { icon: faSpa, text: 'Servicios adicionales' },
        { icon: faBanSmoking, text: 'No fumar en la cabaña' }
      ]
    }
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  // Función para agregar el servicio adicional al carrito
  const addAdditionalServiceToCart = () => {
    const additionalServiceItem = {
      id: `${cardsData[currentIndex].id}-additional`,
      title: cardsData[currentIndex].additionalService.name,
      price: cardsData[currentIndex].additionalService.price,
      description: `Servicio adicional para ${cardsData[currentIndex].title}`
    };
    addItemToCart(additionalServiceItem);
    setIsCartOpen(true); // Abre el mini cart al añadir un ítem
    notify('Servicio adicional agregado!')
  };

  return (
    <div className="carousel">
      {/* Botón para la tarjeta anterior */}
      <button className="view-button view-button-left" onClick={prevCard} aria-label="Previous">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="cont-card">
        <div key={cardsData[currentIndex].id} className="card">
          <img src={cardsData[currentIndex].img} alt={cardsData[currentIndex].title} className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">{cardsData[currentIndex].title}</h3>
            <p className="card-text">{cardsData[currentIndex].description}</p>
            <p className="price">Valor por Noche: ${cardsData[currentIndex].price.toLocaleString()}</p>
            <p className="additional-service">{cardsData[currentIndex].additionalService.name} ${cardsData[currentIndex].additionalService.price.toLocaleString()}</p>

            <div className="conditions">
              {cardsData[currentIndex].conditions.map((condition, index) => (
                <div key={index} className="condition-item">
                  <FontAwesomeIcon icon={condition.icon} className="condition-icon" />
                  <span>{condition.text}</span>
                </div>
              ))}
            </div>

            {/* Botón para agregar al carrito */}
            <button
              className="btn btn-primary price-btn"
              onClick={() => {
                addItemToCart(cardsData[currentIndex]);
                setIsCartOpen(true);
                notify('Habitación agregada!');
              }}
            >
              Agregar al Carrito: ${cardsData[currentIndex].price.toLocaleString()}
            </button>

            {/* Botón para agregar servicio adicional */}
            <button
              className="btn btn-secondary additional-service-btn"
              onClick={addAdditionalServiceToCart}
            >
              Añadir Servicio Adicional: ${cardsData[currentIndex].additionalService.price.toLocaleString()}
            </button>
          </div>
        </div>
      </div>

      {/* Botón para la siguiente tarjeta */}
      <button className="view-button view-button-right" onClick={nextCard} aria-label="Next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Cardcabin;
