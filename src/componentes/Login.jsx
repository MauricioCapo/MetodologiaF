import React, { useEffect, useState } from "react";
import Login from '../estilos/Login.css';
function Login(){
    return(
        <div>
            <body>
    <section class="Form-Regis">
        <form action="" id="form">
            <div class="Form">  
                <h3>Iniciar Sesion</h3>
            <div>
                <input class="controles" type="text" name="Nombre_usuario" id="Usuario" placeholder="Nombre usuario"/>
            </div>
            <div>
                <input class="controles" type="password" name="Contraseñas" id="Contraseña" placeholder="Contraseña"/>
            </div>
            <div class="error" id="error">
            </div>
                <p>Estoy de acuerdo con <a href="#"> Terminos y Condiciones</a>.</p>
                <input type="submit" onclick="return Enviar()" value="Enviar" class="boton" id="submit"/><button></button>
                
                <p>No tienes una cuenta?<a href="#">Registrarse</a></p>
            </div>
        </form>
        
    </section>
    <script src="Form.js"></script>
</body>
        </div>
    );
}

export default Login;