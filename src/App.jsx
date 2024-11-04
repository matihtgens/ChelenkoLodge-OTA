import React, { useState, useRef } from 'react';  // Importa React y el hook useState para gestionar estados locales.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importa componentes para la navegación (enrutamiento) entre páginas.
import Header from './components/header';  // Importa el componente Header, asegúrate de que la ruta sea correcta.
import Navbar from './components/navbar';  // Importa el componente Navbar.
import MiniCart from './components/minicart';  // Importa el componente MiniCart.
import Footer from './components/footer';  // Importa el componente Footer.
import MetodoPago from './pages/metodopago';  // Importa la página de métodos de pago.
import InfoReserva from './pages/info-reserva';  // Importa la página de información de reserva.
import Register from './pages/register';  // Importa la página de registro.
import Contact from './components/contact';  // Importa el componente Contact.
import Home from './components/home';  // Importa el componente Home, asegúrate de que la ruta sea correcta.
import TestAxios from './components/probandoAxios';  // Importa el componente para probar Axios.
import ApiFakeCard from './components/ApiFakeCard';  // Importa el componente que contiene las tarjetas de cabañas.
import Terms from './components/terms';  // Importa el componente de términos y condiciones.
import MetPagoInfo from './components/metpagoinfo'; // Importa el componente de la info de los métodos de pago.
import { CartProvider } from './context/CartContext';  // Importa el CartProvider que provee el contexto del carrito.
import { ReservaYPagoProvider } from './context/reservaypagocontext';  // Importa el provider para reservas y pagos.
import './index.css';  // Importa el archivo de estilos globales.

const App = () => {
    const contactRef = useRef(null);  // Referencia al componente Contact en la página de contacto.
    
    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });  // Función para hacer scroll al componente de contacto.
    }; 
    
    const [isCartOpen, setIsCartOpen] = useState(false);  // Estado local que controla si el MiniCart está abierto o cerrado.

    // Función para alternar la visibilidad del MiniCart.
    const toggleMiniCart = () => {
        console.log("Toggling mini cart");  // Mensaje en consola para depuración.
        setIsCartOpen((prev) => !prev);  // Cambia el estado 'isCartOpen' entre true y false.
    };

    // Función para abrir el MiniCart.
    const openMiniCart = () => {
        setIsCartOpen(true);  // Establece el estado 'isCartOpen' en true para abrir el MiniCart.
    };

    return (
        <CartProvider>  {/* Proveedor del contexto del carrito, envuelve toda la aplicación para compartir su estado. */}
        <ReservaYPagoProvider>
            <Router>  {/* Envoltorio que habilita la navegación entre rutas en la aplicación. */}
                <div className="contenedorPadre overflow-auto">
                    <Header onCartClick={toggleMiniCart}/>  {/* Pasa la función 'toggleMiniCart' como prop al Header para manejar el evento de clic en el carrito. */}
                    <Navbar />  {/* Muestra la barra de navegación. */}
                    <MiniCart onClose={() => setIsCartOpen(false)} isOpen={isCartOpen} />  {/* Componente MiniCart que se abre o cierra según el estado 'isCartOpen', y permite cerrarlo con 'onClose'. */}
                    <Routes>  {/* Contenedor que maneja las diferentes rutas de la aplicación. */}
                        <Route path="/" element={<Home />} />  {/* Ruta para la página de inicio que renderiza el componente Home. */}
                        <Route path="/register" element={<Register />} />  {/* Ruta para la página de registro. */}
                        <Route path="/contact" element={<Contact />} />  {/* Ruta para la página de contacto. */}
                        <Route path="/cabin" element={<ApiFakeCard onOpenMiniCart={openMiniCart} />} /> {/* Ruta para la página de cabañas, pasando la función para abrir el mini cart. */}
                        <Route path="/payment" element={<MetodoPago />} />  {/* Ruta para la página de métodos de pago. */}
                        <Route path="/terms" element={<Terms />} />  {/* Ruta para la página de términos y condiciones. */}
                        <Route path="/metpagoinfo" element={<MetPagoInfo />} />  {/* Ruta para la página de info de métodos de pago. */}
                    </Routes>
                    <div className='col-12 row contenedorReserva'>
                        <div className='col-12'>
                            <Register />  {/* Componente de registro, podría ser redundante aquí, revisa si es necesario. */}
                        </div>
                        <div className='col-12 col-md-5 col-lg-4'>
                            <InfoReserva />  {/* Componente que muestra la información de reserva. */}
                        </div>
                        <div className='col-12 col-md-7 col-lg-8'>
                            <MetodoPago />  {/* Componente para los métodos de pago. */}
                        </div>
                    </div>
                    <div>
                        <TestAxios />  {/* Componente para probar Axios. */}
                    </div>                
                    <Footer />  {/* Muestra el pie de página. */}
                </div>
            </Router>
            </ReservaYPagoProvider>
        </CartProvider>
    );
};

export default App;  // Exporta el componente App para ser utilizado en otras partes de la aplicación.
