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
              <h4>Términos y Condiciones</h4>
              <p><strong>Fecha de vigencia:</strong> [Fecha]</p>
              <p>Al usar el sitio web Chelenko, usted acepta estos términos. Si no está de acuerdo, no utilice el sitio.</p>
              <h5>1. Uso del Sitio</h5>
              <p>El sitio está destinado a uso personal y no comercial. Debe cumplir con las leyes aplicables.</p>
              <h5>2. Reservas y Pagos</h5>
              <p>Las reservas están sujetas a disponibilidad y confirmación. Acepta pagar el precio total y los cargos adicionales según la política del proveedor.</p>
              <h5>3. Cancelaciones</h5>
              <p>Las políticas de cancelación varían según el proveedor. Revise los términos antes de reservar.</p>
              <h5>4. Propiedad Intelectual</h5>
              <p>Todo el contenido del sitio es propiedad de Chelenko y está protegido por leyes de propiedad intelectual. Su reproducción sin autorización está prohibida.</p>
              <h5>5. Limitación de Responsabilidad</h5>
              <p>Chelenko no se hace responsable de daños indirectos o errores en la información del sitio.</p>
              <h5>6. Modificaciones</h5>
              <p>Chelenko puede modificar estos términos en cualquier momento. Su uso continuado del sitio implica aceptación de los cambios.</p>
              <h5>7. Ley Aplicable</h5>
              <p>Estos términos se rigen por las leyes de [Tu País/Estado]. Cualquier disputa se resolverá en [Tu Ciudad/Estado].</p>
              <h5>8. Contacto</h5>
              <p>Para consultas, contáctenos en [correo electrónico] o [teléfono].</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
