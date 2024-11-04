import React from 'react';  // Importa React para utilizar JSX y otras funcionalidades.
import { Link } from 'react-router-dom';  // Importa el componente Link para la navegación interna.
import './header.css';  // Importa los estilos específicos para el componente Header.

function Header({ onCartClick }) {  // Componente funcional Header que recibe la propiedad 'onCartClick'.
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg cont-principal">
                    <div className="container-fluid">
                        <div className='cont-logo col-6'>
                            <Link className="navbar-brand" to="/home">
                            </Link>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav cont-links">
                                <Link className="nav-link efecto" to="/home">Inicio</Link>
                                <Link className="nav-link efecto" to="/register">Registro</Link>
                                <Link className="nav-link efecto" to="/contact">Contacto</Link>
                                <Link className="nav-link efecto" to="https://www.chelenko.com/nosotros/galleria/" target="_blank">Galeria</Link>
                                <Link className="nav-icon efecto d-none d-lg-block" to="/profile">
                                    <i className="bi bi-person-circle"></i>
                                </Link>
                                <Link className="nav-link efecto d-lg-none" to="/profile">Perfil</Link>
                                <Link className="nav-icon efecto d-none d-lg-block" to="/cart" onClick={onCartClick}>
                                    <i className="bi bi-bag"></i>
                                </Link>
                                <Link className="nav-link efecto d-lg-none" to="/cart" onClick={onCartClick}>Carrito</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;