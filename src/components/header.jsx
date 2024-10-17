import React from 'react';  // Importa React para utilizar JSX y otras funcionalidades.
import { Link } from 'react-router-dom';  // Importa el componente Link para la navegación interna.
import './header.css';  // Importa los estilos específicos para el componente Header.

function Header({ onCartClick }) {  // Componente funcional Header que recibe la propiedad 'onCartClick'.
    return (
        <header>  {/* Elemento de encabezado principal */}
            <nav className="navbar navbar-light bg-light">  {/* Barra de navegación con estilos claros */}
                <div className="container-fluid d-flex justify-content-between align-items-center">  {/* Contenedor de la barra de navegación con distribución entre los elementos */}
                    
                    <Link className="navbar-brand" to="/">  {/* Enlace que redirige a la página de inicio (logo o marca) */}
                    </Link>
                    
                    <div className="d-flex align-items-center">  {/* Contenedor de iconos alineados en el centro verticalmente */}
                        
                        <Link to="/profile" className="nav-icon">  {/* Enlace que redirige al perfil del usuario */}
                            <i className="bi bi-person-circle"></i>  {/* Icono de perfil utilizando Bootstrap Icons */}
                        </Link>
                        
                        <button className="btn-cart" onClick={onCartClick}>  {/* Botón para abrir el carrito, que dispara la función 'onCartClick' */}
                            <i className="bi bi-bag"></i>  {/* Icono de bolsa de compras (carrito) utilizando Bootstrap Icons */}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;  // Exporta el componente Header para ser utilizado en otras partes de la aplicación.
