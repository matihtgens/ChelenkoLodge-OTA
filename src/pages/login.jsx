import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Inicio de Sesión</h1>
            <form>
                <div>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
