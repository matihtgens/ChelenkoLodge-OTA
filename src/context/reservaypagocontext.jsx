// Importa las dependencias de React necesarias para crear y utilizar el contexto
import React, { createContext, useContext, useState } from 'react';

// Crea un contexto para compartir la información de reserva y pago
const ReservaYPagoContext = createContext();

export const ReservaYPagoProvider = ({ children }) => {
  // Estado para almacenar la información de la reserva
  const [reservationInfo, setReservationInfo] = useState(null);

  // Función para guardar la información de la reserva
  const saveReservationInfo = (info) => {
    setReservationInfo(info); // Guarda la información de reserva en el estado
  };

  // Proporciona el contexto de reserva y pago con sus funciones y estados a los componentes hijos
  return (
    <ReservaYPagoContext.Provider value={{ reservationInfo, saveReservationInfo }}>
      {children}
    </ReservaYPagoContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de reserva y pago en cualquier componente
export const useReservaYPago = () => useContext(ReservaYPagoContext);
