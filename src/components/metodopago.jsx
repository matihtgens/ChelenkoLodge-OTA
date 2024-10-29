import React from 'react';
import './metodopago.css';

//Definición del componente funcional MetodoPago
const MetodoPago = () => {
  return (
    <>
      <div className='contenedor-principal'> {/*Contenedor principal del componente*/}
        <div className='container cont-opciones'>
          <div className="container cont-pago"> {/*Contenedor Bootstrap que maneja el layout*/}
            <div className='titulo'> {/*Sección del título */}
              <div>
                <img src="src\assets\img\transbanklogo.png" alt="Transbank Logo" />
              </div>
            </div>
            <div className="col-12 inputPago"> {/*Columna que ocupa todo el ancho*/}
              <div className="form-check"> {/*Contenedor para el checkbox de pago*/}
              </div>
            </div>
            <div className="col-12 aviso"> {/*Sección de aviso sobre Transbank*/}
              <label className="custom-label"> {/* Clase personalizada para el estilo */}
                Chelenko Lodge trabaja junto a Transbank para facilitar transacciones seguras y eficientes, permitiendo a sus huéspedes realizar pagos con tarjetas de crédito y débito sin complicaciones. Esta colaboración mejora la experiencia del cliente, asegurando un proceso de pago ágil y confiable en su acogedor entorno natural.
              </label>
            </div>
            <div className="col-12 info"> {/*Información sobre plazos de pago*/}
              <label>TIENES UN PLAZO DE 30 MINUTOS PARA REALIZAR EL PAGO CON <strong>TRANSFERENCIA BANCARIA O TARJETAS DE DÉBITO O CRÉDITO.</strong></label>
            </div>
            <div className="inf"> {/*Información sobre el envío de datos para el pago*/}
              <label><strong>AL COMPLETAR la reserva enviaremos un correo electrónico con los datos para realizar el pago.</strong></label>
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
