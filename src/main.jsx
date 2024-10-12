import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Asegúrate de que el contenedor con id 'app' esté disponible antes de intentar renderizar
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app');

  // Verifica si el contenedor existe
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <CartProvider> {/* Envuelve App con CartProvider */}
          <App />
        </CartProvider>
      </React.StrictMode>
    );
  } else {
    console.error('El contenedor con id "app" no se encontró en el DOM.');
  }
});
