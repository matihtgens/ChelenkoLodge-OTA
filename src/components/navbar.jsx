import React from 'react';
import './navbar.css';

function Navbar({ toggleCart }) { // Recibe toggleCart como prop
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita la recarga de la página al enviar el formulario
        // Aquí puedes manejar la lógica de búsqueda si es necesario
    };

    return (
        <>
            <div className='container-navbar'>
                <div className="container">
                    <div className="navbar">
                        <form onSubmit={handleSubmit} className="row formulario">
                            <div className="col-12 col-lg-5 col-md-6 col-sm-6 my-2 divUno">
                                <label htmlFor="checkin" className="form-label">Entrada:</label>
                                <input type="date" id="checkin" name="checkin" className="form-control" required />
                            </div>
                            <div className="col-12 col-lg-5 col-md-6 col-sm-6 my-2">
                                <label htmlFor="checkout" className="form-label">Salida:</label>
                                <input type="date" id="checkout" name="checkout" className="form-control" required />
                            </div>

                            

                            <div className="col-lg-2 my-2  buscar">
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
