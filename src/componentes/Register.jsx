import React, { useState } from "react";
import '../estilos/Register.css';
import LoginS from './Login.jsx';

function RegisterS() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(true); // Supongo que quieres mostrar el formulario de registro al inicio

    const handleLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    return (
        <>
            {showRegister && (
                <div className="body">
                    <section className="Form-Regis">
                        <form action="" id="form">
                            <div className="Form">  
                                <h3>Registrarse</h3>
                                <div>
                                    <input className="controles" type="text" name="Nombres" id="Nombre" placeholder="Nombre" />
                                </div>
                                <div>
                                    <input className="controles" type="text" name="Apellidos" id="Apellido" placeholder="Apellido" />
                                </div>
                                <div>
                                    <input className="controles" type="text" name="Nombre_usuario" id="Usuario" placeholder="Nombre usuario" />
                                </div>
                                <div>
                                    <input className="controles" type="password" name="Contraseñas" id="Contraseña" placeholder="Contraseña" />
                                </div>
                                <div>
                                    <input className="controles" type="email" name="emails" id="Email" placeholder="Correo Electronico" />
                                </div>
                                <div>
                                    <input className="controles" type="date" name="Fecha" id="Fecha" />
                                </div>
                                <div className="error" id="error"></div>
                                <p>Estoy de acuerdo con <a href="#">Términos y Condiciones</a>.</p>
                                <input type="submit" value="Enviar" className="boton" id="submit" />

                                <p>¿Ya tienes una cuenta? 
                                    <a href="#" onClick={handleLogin}> Iniciar Sesión</a>
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
