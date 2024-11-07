import React from 'react';
import { Link } from 'react-router-dom';
import './metodopago.css';
import logoTransbank from '../assets/img/webpaylogo.webp';
import './responsive.css';

// Definición del componente funcional MetodoPago
const MetodoPago = () => {
  return (
    <>
      <div className='contenedor-principal'> {/*Contenedor principal del componente*/}
        <div className='cont-opciones'>
          <div className="container cont-pago"> {/*Contenedor Bootstrap que maneja el layout*/}
            <div className='cont-logoTransbank'> {/*Sección del título */}
              <div className='contenedor-logo'>
                <img className='imgTransbank' src={logoTransbank} alt="Transbank Logo" /> {/* Logo de Transbank */}
              </div>
            </div>
            <div className="col-12 info"> {/* Información general sobre el proceso de pago */}
              <p>
                Al hacer clic en <strong>"Completar su Reserva"</strong>, serás redirigido a una ventana segura de Transbank para completar tu pago.
              </p>
            </div>
            <div className="col-12 aviso"> {/* Sección explicativa sobre Transbank */}
              <p>
                Chelenko Lodge trabaja junto a Transbank para facilitar transacciones seguras y eficientes, permitiendo a sus huéspedes realizar pagos con tarjetas de crédito y débito sin complicaciones.
                Esta colaboración mejora la experiencia del cliente, asegurando un proceso de pago ágil y confiable en su acogedor entorno natural.
              </p>
            </div>
            <div className="col-12 seguridad"> {/* Información sobre la seguridad de las transacciones */}
              <p><strong>Transacción Segura: </strong>Transbank Utiliza encriptación SSL para proteger tu información y cumplir con estándares de seguridad PCI-DSS.</p>
            </div>
            <div className="col-12 inf"> {/* Información adicional sobre errores en el proceso de pago */}
              <p><strong>Si el pago es rechazado, verifica que tus fondos sean suficientes o contacta a tu banco.</strong></p>
            </div>
          </div>
          <div className='cont-terminos-pago'> {/* Contenedor para los términos y condiciones de pago */}
            <div className='col-12 inputPago'> {/* Columna para el checkbox de términos y condiciones */}
              <div className="form-check"> {/* Contenedor para el checkbox de términos */}
                <input
                  type="checkbox" // Tipo de input es un checkbox
                  className="form-check-input col-2" // Clase de Bootstrap para el checkbox
                  id="terms" // Identificador del checkbox
                />
                <label className="form-check-label col-10 terminos-pago" htmlFor="terms"> {/* Etiqueta asociada al checkbox */}
                  Estoy de acuerdo con los <Link className='link-terminos' to='/terms' target='_blank'>términos y condiciones</Link> de Chelenko Lodge
                </label>
              </div>
            </div>
            <div className='col-12 cont-boton-pago'> {/* Contenedor para el botón de pago */}
            <button className="btn-completar" onClick={() => handlePayment()}>IR A PAGAR</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetodoPago; // Exportamos el componente para su uso en otros lugares de la aplicación
