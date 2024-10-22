import React, { useState } from 'react';
import './register.css'

const Register = () => {
    // Estado para controlar los datos del formulario principal
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        agree: false
    });

    // Estado para manejar los huéspedes (máximo 2 huéspedes)
    const [guests, setGuests] = useState([]);

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para procesar el formulario
        console.log('Formulario enviado:', formData);
    };

    // Función para agregar un nuevo formulario de huésped (máximo 1 adicional)
    const addGuestForm = () => {
        if (guests.length < 1) { // Permitir solo un huésped adicional
            setGuests([...guests, { id: Date.now() }]);
        }
    };

    // Función para quitar un huésped
    const removeGuestForm = (guestId) => {
        setGuests(guests.filter((guest) => guest.id !== guestId));
    };

    return (
        <div className='container-fluid'>
            <h1 className="h1info">Información de contacto</h1>

            {/* Contenedor para el formulario principal con borde negro y sombra */}
            <div  className='style'>
                {/* Formulario principal */}
                <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                    <div className="col-md-4 col-sm-2">
                        <label htmlFor="firstName" className="form-label">Primer nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-2">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-2">
                        <label htmlFor="username" className="form-label">Mail</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="invalid-feedback">
                                Por favor ingrese su correo
                            </div>
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
                        <div className="invalid-feedback">
                            Ingrese un contacto correcto
                        </div>
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
                            <option value="state1">Chile</option>
                            <option value="state2">Argentina</option>
                            <option value="state3">Alemania</option>
                            <option value="state4">España</option>
                            <option value="state5">Estados Unidos</option>
                            <option value="state6">Francia</option>
                            <option value="state7">Inglaterra</option>
                        </select>
                        <div className="invalid-feedback">
                            Seleccione un país válido.
                        </div>
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
                            <option value="state1">1</option>
                            <option value="state2">2</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <div className="form-check" style={{ display: 'inline-block', width: 'auto' }}>
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
                            <div className="invalid-feedback">
                                Debe aceptar los términos y condiciones.
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* Sección para los huéspedes adicionales */}
            {guests.map((guest, index) => (
                <div key={guest.id} style={{
                    border: '2px solid black', 
                    padding: '20px', 
                    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)', 
                    borderRadius: '10px', 
                    marginBottom: '20px'
                }}>
                    <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                        <div className="col-md-4">
                            <label htmlFor={`guestFirstName-${index}`} className="form-label">Primer nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`guestFirstName-${index}`}
                                required
                            />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor={`guestLastName-${index}`} className="form-label">Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`guestLastName-${index}`}
                                required
                            />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor={`guestUsername-${index}`} className="form-label">Mail</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text">@</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`guestUsername-${index}`}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Por favor ingrese su correo
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor={`guestPhone-${index}`} className="form-label">Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`guestPhone-${index}`}
                                required
                            />
                            <div className="invalid-feedback">
                                Ingrese un contacto correcto
                            </div>
                        </div>
                    </form>
                    {/* Botón rojo para quitar huésped */}
                    <button 
                        className="btn btn-danger" 
                        onClick={() => removeGuestForm(guest.id)} 
                        type="button"
                    >
                        Quitar huésped
                    </button>
                </div>
            ))}

            {/* Botón para agregar más huéspedes */}
            <div className="col-12">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={addGuestForm}
                    disabled={guests.length >= 1} // Deshabilitar si ya hay 1 huésped
                >
                    Agregar huésped
                </button>
            </div>
        </div>
    );
};

export default Register;
