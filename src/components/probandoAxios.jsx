import React, { useState } from 'react';
import axios from 'axios';
import './responsive.css';

/* ESTE COMPONENTE LO ESTAMOS USANDO PARA PROBAR AXIOS Y EL MANEJO DE DATOS */

function TestAxios() {
    const [data, setData] = useState(null);      // Almacena los datos recibidos de la API
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState(null); // Controla qué datos se están mostrando actualmente

    // Función para obtener datos de huéspedes
    const getHuespedes = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://chelenko-data.sa-east-1.elasticbeanstalk.com/api/guests');
            setData(response.data);
            setActiveTab('huespedes');
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    // Función para obtener datos de habitaciones
    const getHabitaciones = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://chelenko-data.sa-east-1.elasticbeanstalk.com/api/rooms');
            setData(response.data);
            setActiveTab('habitaciones');
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    // Función para obtener datos de reservas
    const getReservas = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://chelenko-data.sa-east-1.elasticbeanstalk.com/api/reservations');
            setData(response.data);
            setActiveTab('reservas');
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    // Función para obtener datos de inventario
    const getInventario = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://chelenko-data.sa-east-1.elasticbeanstalk.com/api/inventory');
            setData(response.data);
            setActiveTab('inventario');
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    // Función para obtener datos de modificaciones de tarifa
    const getModificacionesDeTarifa = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://chelenko-data.sa-east-1.elasticbeanstalk.com/api/rate-modifications');
            setData(response.data);
            setActiveTab('modificaciones-tarifa');
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    return (
        <div>
            <h1>Datos del Hotel</h1>

            {/* Botones para seleccionar qué datos mostrar */}
            <button onClick={getHuespedes}>Mostrar Huéspedes</button>
            <button onClick={getHabitaciones}>Mostrar Habitaciones</button>
            <button onClick={getReservas}>Mostrar Reservas</button>
            <button onClick={getInventario}>Mostrar Inventario</button>
            <button onClick={getModificacionesDeTarifa}>Mostrar Modificaciones de Tarifa</button>

            {/* Mostrar estado de carga o error si corresponde */}
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error.message}</p>}

            {/* Mostrar datos según el tipo seleccionado */}
            {activeTab === 'huespedes' && (
                <div>
                    <h2>Lista de Huéspedes</h2>
                    <ul className='ul-list'>
                        {data.map((huesped) => (
                            <li key={huesped.id}>
                                <div>{"Nombre: " + huesped.firstName}</div>
                                <div>{"Apellido: " + huesped.lastName}</div>
                                <div>{"Email: " + huesped.email}</div>
                            </li>
                        ))}
                    </ul>
                    {/* Opcional: Mostrar JSON completo de los datos recibidos */}
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}

            {activeTab === 'habitaciones' && (
                <div>
                    <h2>Lista de Habitaciones</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}

            {activeTab === 'reservas' && (
                <div>
                    <h2>Lista de Reservas</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}

            {activeTab === 'inventario' && (
                <div>
                    <h2>Inventario</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}

            {activeTab === 'modificaciones-tarifa' && (
                <div>
                    <h2>Modificaciones de Tarifa</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default TestAxios;
