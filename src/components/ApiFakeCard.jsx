import { useNavigate } from "react-router-dom";
import suiteImage from "../assets/img/suitecard.jpg";  // Ruta correcta para la imagen de la suite
import tinyImage from "../assets/img/tinycard.jpg";  // Asegúrate de q
import './ApiFakeCard.css';







const ApiFakeCard = () => {
  const cardsData = [
    {
      title: 'Suite',
      price: '$73,900',
      services: ['🐾', '♨️', '🚭'], 
      img: suiteImage,  // Usa la imagen importada
      description: 'Descripción de la Suite.'
    },
    {
      title: 'Tiny Cabin',
      price: '$95,900',
      services: ['🐾', '♨️', '🚭'],
      img: tinyImage,  // Usa la imagen importada
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
          <p>Services: {card.services.join(' ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiFakeCard;
