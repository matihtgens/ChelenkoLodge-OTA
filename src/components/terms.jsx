import React from 'react';
import './terms.css';
import './responsive.css';

// Definición del componente funcional Terminos
const Terms = () => {
  return (
    <div className='contenedor-principal'> {/* Contenedor principal del componente */}
      <div className='container cont-opciones'>
        <div className="container cont-pago"> {/* Contenedor Bootstrap que maneja el layout */}
          <div className='titulo'></div>
        </div>

        <div className='container cont-terminos'>
          <div className='col-12'> {/* Contenedor para los términos y condiciones */}
            <div className="terminos-texto">
              <h4><strong>Términos y Condiciones</strong></h4>
              <ul>
                <li>Si deseas realizar pago con transferencia bancaria: por favor, debes contactarte con nosotros a:  <a href="mailto:info@chelenko.com" className='sin-estilos'>info@chelenko.com</a>.</li>
                <li>Si eres turista extranjero con menos de 3 meses en Chile (validado vía pasaporte) se elimina el impuesto del 19% (IVA). Para ello debes contactarte con nosotros a :  <a href="mailto:info@chelenko.com" className='sin-estilos'>info@chelenko.com</a>.</li>
                <li>Si haces el pago de la estadía antes o al momento del check-in a más tardar, se cobrará un depósito por 500 USD, los cuales serán liberados íntegramente de no encontrarse ningún daño, el día del check-out después de revisar el estado de la tinycabin.</li>
              </ul>

              <h4><strong>Políticas de Cancelación</strong></h4>
              <ul>
                <li>Sólo se permiten cancelaciones o cambios de fecha de estadía con un mínimo de 14 días.</li>
                <li>Si la cancelación o cambio de fecha fueran solicitadas dentro de los 14 días previos a la estadía, se cobrará el 100% del valor de la reserva.</li>
              </ul>

              <h4><strong>Horarios de Entrada y Salida</strong></h4>
              <ul>
                <li>Horario de Entrada: 03:00 PM</li>
                <li>Horario de Salida: 11:00 AM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
