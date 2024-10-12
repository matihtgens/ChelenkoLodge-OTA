import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Registro</h1>
            {/* Aquí puedes agregar tu formulario de registro */}
            <form>
                <div>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input type="text" id="username" required />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
