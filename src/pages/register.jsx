import React, { useState } from 'react';
import './register.css';
import './responsive.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        children: '',
        agree: false,
    });

    const [guests, setGuests] = useState([]);

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        setFormData({
            firstName: '',
            lastName: '',
            username: '',
            city: '',
            state: '',
            children: '',
            agree: false,
        });
        setGuests([]);
    };

    const addGuestForm = () => {
        if (guests.length < 1) {
            setGuests([...guests, { id: Date.now() }]);
        }
    };

    const removeGuestForm = (guestId) => {
        setGuests(guests.filter((guest) => guest.id !== guestId));
    };

    return (
        <div className="container-fluid">
            <h1 className="h1info">Información de contacto</h1>

            <div className="style box-style">
                <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
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
                </form>
            </div>

            {guests.map((guest, index) => (
                <div key={guest.id} className="box-style guest-form">
                    <form className="row g-3 needs-validation">
                        <div className="col-md-4">
                            <label htmlFor={`guestFirstName-${index}`} className="form-label">Primer nombre</label>
                            <input type="text" className="form-control" id={`guestFirstName-${index}`} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor={`guestLastName-${index}`} className="form-label">Apellido</label>
                            <input type="text" className="form-control" id={`guestLastName-${index}`} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor={`guestUsername-${index}`} className="form-label">Mail</label>
                            <input type="email" className="form-control" id={`guestUsername-${index}`} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor={`guestPhone-${index}`} className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id={`guestPhone-${index}`} required />
                        </div>
                    </form>
                    <button className="btn btn-danger" onClick={() => removeGuestForm(guest.id)} type="button">
                        Quitar huésped
                    </button>
                </div>
            ))}

            <div className="col-12 text-center">
                <button className="btn btn-primary" onClick={addGuestForm} disabled={guests.length >= 1}>
                    Agregar huésped
                </button>
            </div>
        </div>
    );
};

export default Register;
