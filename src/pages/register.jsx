import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './register.css';
import './responsive.css';

const Register = () => {
    const { saveContactInfo } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        children: '',
        agree: false,
    });

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    // Maneja el evento del botón "Aceptar"
    const handleAccept = (e) => {
        e.preventDefault();

        // Verificar si el formulario es válido
        const form = e.target;
        if (form.checkValidity()) {
            saveContactInfo(formData);
            console.log('Formulario enviado:', formData);
            navigate('/metodopago'); // Redirige a la página de método de pago

            // Limpia el formulario después de enviar
            setFormData({
                firstName: '',
                lastName: '',
                username: '',
                city: '',
                state: '',
                children: '',
                agree: false,
            });
        } else {
            // Añadir clase para mostrar los mensajes de error de validación
            form.classList.add('was-validated');
        }
    };

    return (
        <>
            <div className='cont-background-register'>
                <div className='cont-register'>
                    <div className="container-fluid register-body">
                        <div className='title-register'>
                            <h1>Información del huesped</h1>
                        </div>

                        <div className="style box-style">
                            <form className="row g-3 needs-validation" onSubmit={handleAccept}>
                                <div className="col-md-4">
                                    <label htmlFor="firstName" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="lastName" className="form-label">Apellidos</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="username" className="form-label">Mail</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="city" className="form-label">Teléfono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="state" className="form-label">País</label>
                                    <select
                                        className="form-select"
                                        id="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option disabled value="">Escoger...</option>
                                        <option value="Chile">Chile</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Alemania">Alemania</option>
                                        <option value="España">España</option>
                                        <option value="Estados Unidos">Estados Unidos</option>
                                        <option value="Francia">Francia</option>
                                        <option value="Inglaterra">Inglaterra</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="children" className="form-label">Niños</label>
                                    <select
                                        className="form-select"
                                        id="children"
                                        value={formData.children}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option disabled value="">Niños</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="col-12 text-center cont-boton-register">
                                    <button type="submit" className="btn btn-success">CONFIRMAR DATOS</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
