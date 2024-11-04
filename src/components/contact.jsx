import React, { useState, useRef, useEffect } from 'react';
import './contact.css';
import './responsive.css';

function Contact() {
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
    });
    const [submitted, setSubmitted] = useState(false); // Estado para manejar el envío

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario enviados:', formData);
        // Aquí normalmente enviarías los datos a un servidor
        setSubmitted(true); // Cambiar el estado a enviado
        setFormData({ nombre: '', telefono: '', email: '', mensaje: '' }); // Limpiar el formulario
    };

    return (
        <div className="contact-container" ref={contactRef}>
            <div className='contact-body'>
                <h1>¿Tienes Alguna Pregunta?</h1>
                <p className="subtitle">Estamos Aquí para Ayudarte. Utiliza el Formulario para Comunicarte con Nosotros.</p>

                {submitted && <p style={{ color: '#20c997', textAlign: 'center' }}>¡Mensaje enviado exitosamente!</p>}

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="nombre">NOMBRE</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">TELEFONO</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje">MENSAJE</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className='contact-btn'>
                        <button type="submit" className="submit-btn">CONTACTAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
