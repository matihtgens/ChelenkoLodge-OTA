import React from 'react';
import './Card.css'; // Importa el archivo CSS donde están los estilos de las tarjetas.

const Card = ({ name, price, services, details }) => { // Componente que recibe props: 'name', 'price', 'services', y 'details'.
    return (
        <div className="card-container">  {/* Contenedor principal de la tarjeta con su clase CSS */}
            <div className="card-image">  {/* Contenedor de la imagen de la tarjeta */}
                <img src="/ruta/a/tu/imagen" alt={name} />  {/* Imagen de la tarjeta, asegúrate de proporcionar la ruta correcta */}
                <button className="wishlist-btn">  {/* Botón para agregar la tarjeta a "favoritos", con un ícono de corazón */}
                    <i className="bi bi-heart"></i>  {/* Icono de corazón de Bootstrap Icons */}
                </button>
            </div>
            <div className="card-content">  {/* Contenedor del contenido textual de la tarjeta */}
                <h3>{name}</h3>  {/* Título de la tarjeta, en este caso, el nombre del alojamiento */}
                
                <div className="services">  {/* Contenedor de los servicios representados por íconos */}
                    {services.map((service, index) => (  // Recorre la lista de servicios y muestra un ícono por cada uno.
                        <i key={index} className={`service-icon ${service}`}></i>  // Asigna el ícono apropiado a cada servicio.
                    ))}
                </div>
                
                <h4>Detalles</h4>  {/* Título para la sección de detalles */}
                <p>{details}</p>  {/* Muestra los detalles específicos de la tarjeta */}
                
                <div className="card-footer">  {/* Pie de la tarjeta donde se muestra el botón con el precio */}
                    <button className="price-btn">${price}</button>  {/* Botón con el precio del alojamiento */}
                </div>
            </div>
        </div>
    );
};


export default Card;
