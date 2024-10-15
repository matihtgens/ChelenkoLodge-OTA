import './header.css';
import logo from '../assets/img/logo-black.webp';
import { Link } from 'react-router-dom';

function Header({ onCartClick }) {
    return (
        <header>
            {/* NAVBAR SIN BOOSTRAP DEL QUE ME BASE , ELIMINARLO AL FINAL
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between w-100">
                        <Link className="navbar-brand mx-3" to="/">
                            <img src={logo} className="logito" alt="Logotipo de la OTA"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="d-flex">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="links">
                                    <Link className="nav-link" to="/register"><button className="btn btn-outline-success my-2 my-sm-0" type="registro">Registro</button></Link>
                                </div>
                                <div className="links icono">
                                    <Link className="nav-link" to="/profile"><i className="bi bi-person-square"></i></Link>
                                </div>
                                <div className="links icono">
                                    <Link className="nav-link" to="/cart"><i className="bi bi-bag"></i></Link>
                                </div> 
                            </div>                                      
                        </div>
                    </div>
                </div>
            </nav>
            */}

            {/* NAVBAR CON BOOSTRAP SACADO DE LA MISMA DOCUMENTACION , EL BUTON ES EL QUE HACE LA MAGIA MAS LAS CLASES DEL BOOSTRAP */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home"><img src={logo} style={{ width: '100px' }} alt="Logotipo de la OTA" /></a>
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
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* JENNY ACA CAMBIAR LA RUTA Y NOS NOMBRES DE LAS PAGES, A CONTACTO, GALERIA, PERFIL, ETC ETC */}
                            <a><Link className="nav-link" to="/home">Home</Link></a>
                            <a><Link className="nav-link" to="/register">Registro</Link></a>
                            <a><Link className="nav-link" to="/home">Contacto</Link></a>
                            <a><Link className="nav-link" to="/home">Galeria</Link></a>                         
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
