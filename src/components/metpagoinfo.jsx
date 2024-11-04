import React from 'react';
import './metpagoinfo.css';

const PaymentMethods = () => {
    const methods = [
      {
        name: 'Tarjeta de Crédito',
        description: 'Paga de forma segura con tu tarjeta de crédito.',
        icon: '💳',
      },
      {
        name: 'Tarjeta de Débito',
        description: 'Paga de forma segura con tu tarjeta de débito.',
        icon: '💸',
      },
      {
        name: 'Transferencia Bancaria',
        description: 'Lo sentimos, aún no está disponible ):',
        icon: '🏦',
      },
      {
        name: 'PayPal',
        description: 'Lo sentimos, aún no está disponible ):',
        icon: '🌐',
      },
    ];
  
    return (
        <div className="payment-background">
      <div className="payment-methods">
        <h1>Métodos de Pago</h1>
            <img src='https://infopcion.cl/wp-content/uploads/2021/08/logo-WebpayPlus.png' className="foto-trans"></img>
        <div className="methods-list">
          {methods.map((method, index) => (
            <div key={index} className="method-item">
              <span className="method-icon">{method.icon}</span>
              <h2>{method.name}</h2>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  };
  
  export default PaymentMethods;