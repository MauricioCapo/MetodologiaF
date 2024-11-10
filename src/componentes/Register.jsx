import React, { useEffect, useState } from "react";
import Register from '../estilos/Register.css';
function RegisterS(){
    return(
        <div>
            <body className="body">
    <section class="Form-Regis">
        <form action="" id="form">
            <div class="Form">  
                <h3>Registrarse</h3>
            <div>
             <input class="controles" type="text" name="Nombres" id="Nombre" placeholder="Nombre"/>
            </div>
             <div>
                <input class="controles" type="text" name="Apellidos" id="Apellido" placeholder="Apellido"/>
            </div>
                <div>
                <input class="controles" type="text" name="Nombre_usuario" id="Usuario" placeholder="Nombre usuario"/>
            </div>
            <div>
                <input class="controles" type="password" name="Contraseñas" id="Contraseña" placeholder="Contraseña"/>
            </div>
            <div>
                <input class="controles" type="email" name="emails" id="Email" placeholder="Correo Electronico"/>
            </div>
            <div>
                <input class="controles" type="date" name="Fecha" id="Fecha"/>
            </div>
            <div class="error" id="error">
                
            </div>
                <p>Estoy de acuerdo con <a href="#"> Terminos y Condiciones</a>.</p>
                <input type="submit" onclick="return Enviar()" value="Enviar" class="boton" id="submit"/><button></button>
                
                <p>Ya tienes una cuenta?<a href="#">Iniciar Sesión </a></p>
            </div>
        </form>
        
    </section>
    <script src="Form.js"></script>
</body>
        </div>
    );
}

export default RegisterS;