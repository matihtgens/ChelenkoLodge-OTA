// src/pages/reservation.jsx
import React from 'react';

const Reservation = () => {
    return (
        <div>
            <h1>Reserva tu estadía</h1>
            <p>
                Completa los siguientes datos para realizar tu reserva en Chelenko Lodge.
            </p>
            <form>
                {/* Campos de formulario de reserva */}
                <label>
                    Nombre:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Fecha de llegada:
                    <input type="date" name="arrivalDate" />
                </label>
                <br />
                <label>
                    Fecha de salida:
                    <input type="date" name="departureDate" />
                </label>
                <br />
                <button type="submit">Reservar Ahora</button>
            </form>
        </div>
    );
};

export default Reservation;
