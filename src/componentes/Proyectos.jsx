import React, { useState } from "react";
import '../estilos/Proyectos.css';
import { CgArrowsExpandRight, CgCompressRight } from "react-icons/cg";

const ProyectoS = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <button onClick={toggleSidebar} className="toggle-button">
                    {isOpen ? <CgCompressRight /> : <CgArrowsExpandRight />} 
                </button>
                {isOpen && (
                    <div>
                        <h2>Menú</h2>
                        <ul>
                            <li><a href="#section1">Sección 1</a></li>
                            <li><a href="#section2">Sección 2</a></li>
                            <li><a href="#section3">Sección 3</a></li>
                            <li><a href="#section4">Sección 4</a></li>
                            <li><a href="#section5">Sección 5</a></li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="content">
                <h1>Contenido Principal</h1>
              <p>Aca va el contenido que va a tener la pagina donde va interactuar el usuario</p>
            </div>
        </div>
    );
};


export default ProyectoS;
