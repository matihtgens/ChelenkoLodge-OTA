import React, { useState, useRef } from 'react';  // Importa React y el hook useState para gestionar estados locales.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importa componentes para la navegación (enrutamiento) entre páginas.
import Header from './components/header';  // Importa el componente Header, asegúrate de que la ruta sea correcta.
import Navbar from './components/navbar';  // Importa el componente Navbar.
import MiniCart from './components/minicart';  // Importa el componente MiniCart.
import Footer from './components/footer';  // Importa el componente Footer.
import MetodoPago from './components/metodopago';
import InfoReserva from './components/info-reserva';
import Register from './components/register';
import Contact from './components/contact';
import Home from './components/home';  // Importa el componente Home, asegúrate de que la ruta sea correcta.
import Reservation from './pages/reservation';  // Importa el componente Reservation.
import Cart from './pages/cartpage';  // Importa el componente Cart.
import TestAxios from './components/probandoAxios';
import ApiFakeCard from './components/ApiFakeCard';
import { CartProvider } from './context/CartContext';  // Importa el CartProvider que provee el contexto del carrito.
import './index.css';  // Importa el archivo de estilos globales.

const App = () => {
    const contactRef = useRef(null);  // Referencia al componente Contact en la página de contacto

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const [isCartOpen, setIsCartOpen] = useState(false);  // Estado local que controla si el MiniCart está abierto o cerrado.

    // Función para alternar la visibilidad del MiniCart.
    const toggleMiniCart = () => {
        console.log("Toggling mini cart");  // Mensaje en consola para depuración.
        setIsCartOpen((prev) => !prev);  // Cambia el estado 'isCartOpen' entre true y false.
    };

    return (
        <CartProvider>  {/* Proveedor del contexto del carrito, envuelve toda la aplicación para compartir su estado */}
            <Router>  {/* Envoltorio que habilita la navegación entre rutas en la aplicación */}
                <div className="contenedorPadre">
                    <Header onCartClick={toggleMiniCart} onContactClick={scrollToContact} />  {/* Pasa la función 'toggleMiniCart' como prop al Header para manejar el evento de clic en el carrito */}
                    <Navbar />  {/* Muestra la barra de navegación */}
                    <MiniCart onClose={() => setIsCartOpen(false)} isOpen={isCartOpen} />  {/* Componente MiniCart que se abre o cierra según el estado 'isCartOpen', y permite cerrarlo con 'onClose' */}
                    <Routes>  {/* Contenedor que maneja las diferentes rutas de la aplicación */}
                        <Route path="/home" element={<Home />} />  {/* Ruta para la página de inicio que renderiza el componente Home */}
                        <Route path="/register" element={<Register />} />  {/* Ruta para la página de reservas que renderiza el componente Reservation */}
                        <Route path="/contact" onClick={scrollToContact} element={<Contact ref={contactRef} />} />  {/* Ruta para la página del carrito que renderiza el componente Cart */}
                        <Route path="/cabin" element={<ApiFakeCard />} />
                        <Route path="/payment" element={<MetodoPago />} />
                    </Routes>
                    <div className='col-12 row contenedorReserva'>
                        <div className='col-12'>
                            <Register />
                        </div>
                        <div className='col-12 col-md-5 col-lg-4'>
                            <InfoReserva />
                        </div>
                        <div className='col-12 col-md-7 col-lg-8'>
                            <MetodoPago />
                        </div>
                    </div>
                    <div>
                        <TestAxios />
                    </div>                
                    <Footer />  {/* Muestra el pie de página */}
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;  // Exporta el componente App para ser utilizado en otras partes de la aplicación.
