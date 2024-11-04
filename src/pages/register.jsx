import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Asegúrate de que la función saveContactInfo esté disponible en tu contexto
import { useNavigate } from 'react-router-dom'; // Para la redirección
import './register.css';
import './responsive.css';

const Register = () => {
    const { saveContactInfo } = useCart(); // Función para guardar la información de contacto
    const navigate = useNavigate(); // Hook para la navegación
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
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        saveContactInfo(formData); // Guarda la información en el contexto
        console.log('Formulario enviado:', formData); // Muestra en consola la información enviada
        navigate('/inforeseerva'); // Redirige a la página de detalles de reserva

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
    };

    return (
        <div className="container-fluid">
            <h1 className="h1info">Información de contacto</h1>

            <div className="style box-style">
                <form className="row g-3 needs-validation" onSubmit={handleAccept} noValidate>
                    <div className="col-md-4">
                        <label htmlFor="firstName" className="form-label">Primer nombre</label>
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
                        <label htmlFor="lastName" className="form-label">Apellido</label>
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
                        </select>
                    </div>
                    <div className="col-12 text-center">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="agree"
                            checked={formData.agree}
                            onChange={handleInputChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="agree">
                            Aceptar los términos y condiciones
                        </label>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary">ACEPTAR</button> {/* Botón para aceptar */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
