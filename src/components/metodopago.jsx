import React from 'react';
import './metodopago.css';
import logoTransbank from '../assets/img/transbanklogo.png';

//Definición del componente funcional MetodoPago
const MetodoPago = () => {
  return (
    <>
      <div className='contenedor-principal'> {/*Contenedor principal del componente*/}
        <div className='container cont-opciones'>
          <div className="container cont-pago"> {/*Contenedor Bootstrap que maneja el layout*/}
            <div className='titulo'> {/*Sección del título */}
              <div>
                <img className='imgTransbank' src={logoTransbank} alt="Transbank Logo" />
              </div>
            </div>
            <div className="col-12 info"> {/*Información sobre plazos de pago*/}
              <p>Al hacer clic en <strong>"Completar su Reserva"</strong>, serás redirigido a una ventana segura de Transbank para completar tu pago.</p>
            </div>
            <div className="col-12 aviso"> {/*Sección de aviso sobre Transbank*/}
              <p className="custom-label"> {/* Clase personalizada para el estilo */}
                Chelenko Lodge trabaja junto a Transbank para facilitar transacciones seguras y eficientes, permitiendo a sus huéspedes realizar pagos con tarjetas de crédito y débito sin complicaciones. Esta colaboración mejora la experiencia del cliente, asegurando un proceso de pago ágil y confiable en su acogedor entorno natural.
              </p>
            </div>
            <div className="col-12 seguridad">
              <p><strong>Transacción Segura: </strong>Transbank Utiliza encriptación SSL para proteger tu información y cumplir con estándares de seguridad PCI-DSS.</p>
            </div>
            <div className="col-12 inf"> {/*Información sobre el envío de datos para el pago*/}
              <p><strong>Si el pago es rechazado, verifica que tus fondos sean suficientes o contacta a tu banco.</strong></p>
            </div>
          </div>
          <div className='container cont-terminos'>
            <div className='col-12 inputPago'> {/*Columna para el checkbox de términos y condiciones*/}
              <div className="form-check"> {/*Contenedor para el checkbox de términos*/}
                <input
                  type="checkbox" //Tipo de input es un checkbox
                  className="form-check-input" //Clase de Bootstrap para checkbox
                  id="terms" //Identificador del checkbox
                />
                <label className="form-check-label" htmlFor="terms"> {/*Etiqueta asociada al checkbox*/}
                  Estoy de acuerdo con los términos y condiciones de Chelenko Lodge OTA
                </label>
              </div>
              
            </div>
            <div className='col-12'> {/*Contenedor para el botón de completar la reserva*/}
              <button className="btn-completar">COMPLETAR SU RESERVA</button> {/*Botón para completar la reserva*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetodoPago;
