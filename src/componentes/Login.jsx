import React, { useEffect, useState } from "react";
import "../estilos/Login.css";
import RegisterS from './Register.jsx';

function LoginS(){
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false); // Supongo que quieres mostrar el formulario de registro al inicio

    const handleRegisters = () => {
        setShowRegister(true);
        setShowLogin(false);
    };
    return(
        <>
         {showLogin && (
            <div className="body">
                <section className="Form-Regis">
                    <form action="" id="form">
                        <div className="Form">  
                            <h3>Iniciar Sesion</h3>
                            <div>
                                <input className="controles" type="text" name="Nombre_usuario" id="Usuario" placeholder="Nombre usuario"/>
                            </div>
                            <div>
                                <input className="controles" type="password" name="Contraseñas" id="Contraseña" placeholder="Contraseña"/>
                            </div>
                            <div className="error" id="error">
                        </div>
                            <p>Estoy de acuerdo con <a href="#"> Terminos y Condiciones</a>.</p>
                            <input type="submit" onclick="return Enviar()" value="Enviar" className="boton" id="submit"/><button></button>
                            
                            <p>No tienes una cuenta?<a href="#" onClick={handleRegisters}>Registrarse</a></p>
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