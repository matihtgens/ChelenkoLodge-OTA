import './header.css';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header({ onCartClick }) {
    return (
        <header>
            <div className='header'>
                <img src={logo} alt="Logotipo Chelenko" />
                <div className='button-container'>
                    <Link to="/register">
                        <button className='header-button'>Registro</button>
                    </Link>
                    <Link to="/profile">
                        <button className='header-button'>Perfil</button>
                    </Link>
                    <button className='header-button' onClick={onCartClick}>Carrito</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
