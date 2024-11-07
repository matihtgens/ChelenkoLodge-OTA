import React, { useState } from 'react';
import MetodoPago from '../pages/metodopago';  // Importa la página de métodos de pago.
import InfoReserva from '../pages/info-reserva';  // Importa la página de información de reserva.
import './payment.css';

function Payment() {

    return (
        <>
            <div className='cont-paymentInfo'>
                <div className='col-12 row' >
                    <div className='col-12 col-md-5 col-lg-4 cont-info-reserva'>
                        <InfoReserva />  {/* Componente que muestra la información de reserva. */}
                    </div>
                    <div className='col-12 col-md-7 col-lg-8'>
                        <MetodoPago />  {/* Componente para los métodos de pago. */}
                    </div>
                </div >
            </div>
        </>

    )
}

export default Payment;
