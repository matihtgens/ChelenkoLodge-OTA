import React, { useState } from 'react';
import './footer.css';
import logo from '../assets/img/logo-Black.webp';
import flecha from '../assets/img/circulo-de-flecha.png'
import { Link } from 'react-router-dom';

function Footer() {
    const [email, setEmail] = useState('');

    const suscripcionNews = (e) => {
        e.preventDefault();
        alert(`Te has suscrito con: ${email}`);
        setEmail(''); // Limpiar el campo de correo electrónico
    };

    return (
        <footer>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-2 col-sm-8 newsletter">
                            {/* Column logo y news */}
                            <div>
                                <img src={logo} className="logo-hotel" alt="logo-hotel" />
                            </div>

                            <div className="col-12">
                                <div className="ubicacion-hotel">
                                    <p>Ubicación del hotel (ciudad, país)</p>
                                </div>
                                <div>
                                    <p>Suscríbete al newsletter</p>
                                </div>
                            </div>
                            {/* Input y label  de newsletter*/}
                            <div className='col-md-12'>
                                <div className="form">
                                    <form onSubmit={suscripcionNews}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="tuemail@ejemplo.com"
                                            required
                                        />
                                        <button type="submit">
                                            <img src={flecha} className="flecha" alt="suscripcion-mail" />
                                        </button>
                                    </form>
                                </div>
                            </div>


                        </div>
                        {/* Column 2 */}
                        <div className="col-md-2 col-sm-8">
                            <h4>Sobre Nosotros</h4>
                            <ul className="list-unstyled">
                                <li><a className='sin-estilos' href='https://www.chelenko.com/nosotros/'>Sobre Chelenko Lodge</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="col-md-2 col-sm-8">
                            <h4>Ayuda</h4>
                            <ul className="list-unstyled">
                                <li><Link className='sin-estilos' href='/contact' >Contáctanos</Link></li>
                                <li><a className='sin-estilos' href=''>Métodos de pago</a></li>
                                <li><a className='sin-estilos' href=''>Términos y condiciones</a></li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="col-md-2 col-sm-8">
                            <h4>Síguenos</h4>
                            <ul className="list-unstyled">
                                <li><a className='sin-estilos' target="_blank" href='https://www.instagram.com/'>Instagram</a></li>
                                <li><a className='sin-estilos' target="_blank" href='https://es-la.facebook.com'>Facebook</a></li>
                                <li><a className='sin-estilos' target="_blank" href='https://www.tiktok.com/en/'>Tiktok</a></li>
                            </ul>
                        </div>

                        {/* Column 5: Galería */}
                        <div className="col-md-2 col-sm-8">
                            <h4>Galería</h4>
                            <ul className="list-unstyled">
                                <li><a className='sin-estilos' target="_blank" href='https://www.chelenko.com/nosotros/galleria/'>Fotos de nuestros espacios</a></li>
                            </ul>
                        </div>

                        {/* Footer bottom Derechos*/}
                        <div className="col-md-12 footer-botton">
                            <p className="">
                                &copy; {new Date().getFullYear()} Chelenko Lodge - All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;