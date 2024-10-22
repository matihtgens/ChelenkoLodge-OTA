import React from 'react';
import './metodopago.css';

//Definición del componente funcional MetodoPago
const MetodoPago = () => {
  return (
    <>
      <div className='contenedor-principal'> {/*Contenedor principal del componente*/}
        <div className="container"> {/*Contenedor Bootstrap que maneja el layout*/}
          <div className='titulo'> {/*Sección del título */}
            <h2>Opciones de pago</h2> {/*Título de la sección */}
          </div>
          <div className="col-12"> {/*Columna que ocupa todo el ancho*/}
            <div className="form-check inputPago"> {/*Contenedor para el checkbox de pago*/}
              <input 
                type="checkbox"  //Tipo de input es un checkbox
                className="form-check-input" //Clase de Bootstrap para checkbox
                id="transbank" //Identificador del checkbox
                style={{ borderRadius: '100%' }} //Estilo en línea para bordes redondeados
              />
              <label className="form-check-label" htmlFor="transbank"> {/*Etiqueta asociada al checkbox*/}
                Transbank {/*Texto del checkbox*/}
              </label>
            </div>
          </div>
          <div className="col-12 aviso"> {/*Sección de aviso sobre Transbank*/}
            <label>Aceptamos tarjetas de crédito y débito a través de Transbank, lo que garantiza transacciones rápidas y protegidas. Tu seguridad es nuestra prioridad, por lo que todos los pagos están encriptados y procesados de manera confidencial.</label>
          </div>
          <div className="col-12 info"> {/*Información sobre plazos de pago*/}
            <label>TIENES UN PLAZO DE 30 MINUTOS PARA REALIZAR EL PAGO CON <strong>TRANSFERENCIA BANCARIA O TARJETAS DE DÉBITO O CRÉDITO.</strong></label>
          </div>
          <div className="inf"> {/*Información sobre el envío de datos para el pago*/}
            <label><strong>AL COMPLETAR la reserva enviaremos un correo electrónico con los datos para realizar el pago.</strong></label>
          </div>
        </div>
        <div className='col-12'> {/*Columna para el checkbox de términos y condiciones*/}
          <div className="form-check inputPago"> {/*Contenedor para el checkbox de términos*/}
            <input 
              type="checkbox" //Tipo de input es un checkbox
              className="form-check-input" //Clase de Bootstrap para checkbox
              id="terms" //Identificador del checkbox
            />
            <label className="form-check-label" htmlFor="terms"> {/*Etiqueta asociada al checkbox*/}
              Estoy de acuerdo con los términos y condiciones de Quisquito Lodge & SPA
            </label>
          </div>
        </div>
        <div> {/*Contenedor para el botón de completar la reserva*/}
          <button className="btn-completar">COMPLETAR SU RESERVA</button> {/*Botón para completar la reserva*/}
        </div>
      </div>
    </>
  );
};

export default MetodoPago;
