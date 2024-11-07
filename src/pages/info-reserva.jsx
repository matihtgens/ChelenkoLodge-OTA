import React from 'react';
import { useCart } from '../context/CartContext'; // Importa el contexto para acceder a la información de la reserva
import './info-reserva.css'; // Importa el estilo específico para este componente
import './responsive.css'; // Importa estilos responsivos

const InfoReserva = () => {
  const { reservationInfo } = useCart(); // Extrae la información de la reserva del contexto

  // Si no hay información de reserva, muestra un mensaje
  if (!reservationInfo) {
    return <p className='no-info'>No hay información de reserva disponible.</p>;
  }

  return (
    <div className="container container-info-pago my-4"> {/* Contenedor principal con márgenes */}
      <div className="card mx-auto"> {/* Tarjeta para mostrar la información */}
        <div className="card-header">
          <h5 className="card-title mb-0">Su Reserva</h5> {/* Título de la tarjeta */}
        </div>
        <div className="card-body"> {/* Cuerpo de la tarjeta */}
          <div className="mb-3">
            <h6 className="fw-bold">Habitación:</h6>
            <p className="small mb-1">{reservationInfo.habitacion}</p> {/* Muestra el nombre de la habitación */}
            <p className="small">Adultos: {reservationInfo.adultos} Niños: {reservationInfo.niños}</p> {/* Muestra el número de adultos y niños */}
          </div>
          
          <div className="row mb-3"> {/* Fila para las fechas */}
            <div className="col-sm-6 mb-2 mb-sm-0"> {/* Columna para fecha de llegada */}
              <h6 className="fw-bold">Fecha de llegada:</h6>
              <p className="small">{reservationInfo.fechaLlegada}</p> {/* Muestra la fecha de llegada */}
            </div>
            <div className="col-sm-6"> {/* Columna para fecha de salida */}
              <h6 className="fw-bold">Fecha de salida:</h6>
              <p className="small">{reservationInfo.fechaSalida}</p> {/* Muestra la fecha de salida */}
            </div>
          </div>
          
          <div className="mb-3">
            <h6 className="fw-bold">Noches:</h6>
            <p className="small">{reservationInfo.noches}</p> {/* Muestra el número de noches */}
          </div>
          
          <div className="border-top pt-3"> {/* Línea divisoria y margen superior */}
            {/* Mapea los detalles de pago y los muestra */}
            {reservationInfo.detallesPago.map((item, index) => (
              <div
                key={index}
                className={`d-flex justify-content-between mb-2 ${item.bold ? 'fw-bold' : ''}`} // Aplicar clase bold si es necesario
              >
                <span>{item.label}</span> {/* Muestra la etiqueta (e.g., Subtotal) */}
                <span>{item.value}</span> {/* Muestra el valor correspondiente */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoReserva; // Exporta el componente para su uso en otras partes de la aplicación.
