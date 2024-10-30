import React from 'react'; // Importa React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faPaw, faSpa, faBanSmoking } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos
import suiteImage from "../assets/img/suitecard.jpg"; // Importa la imagen de la Suite
import tinyImage from "../assets/img/tinycard.jpg"; // Importa la imagen de la Tiny Cabin
import { Carousel } from 'react-bootstrap';
import './apifakecard.css'; // Importa el CSS de estilo

// Componente funcional ApiFakeCard
const ApiFakeCard = () => {
  // Datos de las tarjetas
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

  // Renderiza el componente
  return (
    <div className="cont-card"> {/* Contenedor principal */}
      <Carousel> {/* Componente de carrusel de Bootstrap */}
        {cardsData.map((card, index) => ( // Mapea cada tarjeta
          <Carousel.Item key={index}> {/* Cada elemento del carrusel */}
            <div className="d-flex justify-content-center"> {/* Centra el contenido */}
              <div className="card"> {/* Tarjeta */}
                <img src={card.img} alt={card.title} className="card-img-top" /> {/* Imagen de la tarjeta */}
                <div className="card-body"> {/* Cuerpo de la tarjeta */}
                  <h3 className="card-title">{card.title}</h3> {/* Título de la tarjeta */}
                  <p className="card-text">{card.description}</p> {/* Descripción */}
                  <p>Price: {card.price}</p> {/* Precio */}
                  <div className="conditions"> {/* Contenedor de condiciones */}
                    {card.conditions.map((condition, idx) => ( // Mapea condiciones
                      <div key={idx} className="condition-item"> {/* Cada condición */}
                        <FontAwesomeIcon icon={condition.icon} className="condition-icon" /> {/* Icono */}
                        <span>{condition.text}</span> {/* Texto de condición */}
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-primary price-btn">Añadir al carrito</button> {/* Botón */}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};



export default ApiFakeCard; // Exporta el componente
