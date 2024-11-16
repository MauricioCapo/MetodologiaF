import React, { useState } from "react";
import "../estilos/Login.css";
import RegisterS from './Register.jsx';
import { Link } from 'react-router-dom';

function LoginS({ setIsLoggedIn }) {
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!username || !password) {
            setMessage('Por favor, complete todos los campos.');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),  // Cambié 'user' a 'username'
                credentials: 'include',  // Asegura que las cookies se envíen con la solicitud
            });
            const data = await response.json();
            if (response.ok) {  // Verificamos si la respuesta fue exitosa (status 200)
                // Si la respuesta es exitosa, el usuario está logueado
                setMessage('¡Bienvenido!');
            } else {
                setMessage(data.mensaje);  // Muestra el mensaje del servidor en caso de error
            }
        } catch (error) {
            console.error('Error al realizar la petición:', error);
            setMessage('Datos inválidos, verifique si están bien');
        }
    };
    
    const handleRegisters = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    return (
        <>
            {showLogin && (
                <div className="body">
                    <section className="Form-Regis">
                        <form onSubmit={handleLogin} id="form">
                            <div className="Form">
                                <h3>Iniciar Sesión</h3>
                                <div>
                                    <input
                                        className="controles"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Nombre usuario"
                                    />
                                </div>
                                <div>
                                    <input
                                        className="controles"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Contraseña"
                                    />
                                </div>
                                {message && <p>{message}</p>}
                                <div>
                                    <input
                                        type="submit"
                                        value="Iniciar Sesión"
                                        className="boton"
                                        id="submit"
                                    />
                                </div>
                                <p>
                                    No tienes una cuenta?{' '}
                                    <Link to="/register" className="mi-clase" onClick={handleRegisters}>
                                        Registrarse
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            )}
            {showRegister && <RegisterS />}
        </>
    );
}

export default LoginS;
    