import React from 'react';
import './navbar.css';

function Navbar({ toggleCart }) { // Recibe toggleCart como prop
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita la recarga de la página al enviar el formulario
        // Aquí puedes manejar la lógica de búsqueda si es necesario
    };

    return (
        <div className="navbar">
            <form onSubmit={handleSubmit}> {/* Añadir el evento onSubmit */}
                <label htmlFor="checkin">Entrada: </label>
                <input type="date" id="checkin" name="checkin" required />

                <label htmlFor="checkout">Salida: </label>
                <input type="date" id="checkout" name="checkout" required />

                <label htmlFor="adults">Adultos: </label>
                <select id="adults" name="adults" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <label htmlFor="children">Niños: </label>
                <select id="children" name="children">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default Navbar;
