import React from 'react';
import './info-reserva.css';

const InfoReserva = () => {
  return (
    <div className="container container-info-pago my-4">
      <div className="card mx-auto">
        <div className="card-header">
          <h5 className="card-title mb-0">Su Reserva</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <h6 className="fw-bold">Habitación:</h6>
            <p className="small mb-1">Tiny Cabin (x1)</p>
            <p className="small">Adultos: 1 Niños: 0</p>
          </div>
          <div className="row mb-3">
            <div className="col-sm-6 mb-2 mb-sm-0">
              <h6 className="fw-bold">Fecha de llegada:</h6>
              <p className="small">26/10/2024</p>
            </div>
            <div className="col-sm-6">
              <h6 className="fw-bold">Fecha de salida:</h6>
              <p className="small">27/10/2024</p>
            </div>
          </div>
          <div className="mb-3">
            <h6 className="fw-bold">Noches:</h6>
            <p className="small">1</p>
          </div>
          <div className="border-top pt-3">
            {[
              { label: 'Sub-Total:', value: 'CLP 94.990,00' },
              { label: 'Adulto(s) extra (x0):', value: 'CLP 0,00' },
              { label: 'Niño(s) extra (x0):', value: 'CLP 0,00' },
              { label: 'Impuestos totales:', value: 'CLP 18.048,00' },
              { label: 'Total:', value: 'CLP 113.038', bold: true },
            ].map((item, index) => (
              <div key={index} className={`d-flex justify-content-between mb-2 ${item.bold ? 'fw-bold' : ''}`}>
                <span className="text-break">{item.label}</span>
                <span className="ms-2 text-end">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoReserva;
