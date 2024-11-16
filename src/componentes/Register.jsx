import React, { useState } from "react";
import '../estilos/Register.css';
import LoginS from './Login.jsx';
import { Link } from 'react-router-dom';

function RegisterS() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        if (!username || !password || !email || !firstName || !lastName ) {
            setMessage('Por favor, complete todos los campos.');
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    firstName, 
                    lastName, 
                    username, 
                    password, 
                    email
                }),
            });
            const data = await response.json();
            setMessage(data.mensaje);
        } catch (error) {
            console.error('Error al realizar la petición:', error);
            setMessage('Error al registrar usuario');
        }
    };

    const handleLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    return (
        <>
            {showRegister && (
                <div className="body">
                    <section className="Form-Regis">
                        <form onSubmit={handleRegister} id="form">
                            <div className="Form">  
                                <h3>Registrarse</h3>
                                <div>
                                    <input 
                                        className="controles" 
                                        type="text" 
                                        value={firstName} 
                                        onChange={(e) => setFirstName(e.target.value)} 
                                        placeholder="Nombre" 
                                    />
                                </div>
                                <div>
                                    <input 
                                        className="controles" 
                                        type="text" 
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)} 
                                        placeholder="Apellido" 
                                    />
                                </div>
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
                                <div>
                                    <input 
                                        className="controles" 
                                        type="email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder="Correo Electrónico" 
                                    />
                                </div>
                                {message && <p>{message}</p>}
                                <div>
                                    <input type="submit" value="Enviar" className="boton" id="submit" />
                                </div>

                                <p>¿Ya tienes una cuenta? 
                                <Link to="/Login" className="link" onClick={handleLogin}>
                                    Registrarse
                                </Link>
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            )}
            {showLogin && <LoginS />}
        </>
    );
}

export default RegisterS;
