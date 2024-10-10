import React, { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState('');

    const suscripcionNews = (e) => {
        e.preventDefault();
        alert(`Te has suscrito con: ${email}`);
        setEmail('');
    };

    return (
        <footer>
            <div class="logo-hotel">
                <img src="" alt="logo-hotel" />
            </div>
            <div class="ubicacion-hotel">
                <p>Ubicación del hotel (ciudad, país)</p>
            </div>
            <div>
                <p>Suscríbete al newsletter</p>
            </div>
            <div class="form">
                <form onSubmit={suscripcionNews}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tuemail@ejemplo.com"
                        required
                    />
                    <button type="submit">
                        <img src="" alt="suscripcion-mail" />
                    </button>
                </form>
            </div>
            <div>
                </div>
        </footer>
    );
}

export default Footer;