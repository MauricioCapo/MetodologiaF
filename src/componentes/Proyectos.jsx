import React, { useState } from "react";
import '../estilos/Proyectos.css';
import { CgArrowsExpandRight } from "react-icons/cg";
import { CgCompressRight } from "react-icons/cg";
const ProyectoS = () => {
    
    const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
	<div className="bodyP">
		<div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
		<button onClick={toggleSidebar} className="toggle-button">
			{isOpen ? < CgCompressRight/> : <CgArrowsExpandRight />} 
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
		<div>
		</div>
		</div>
		</div>
  );
};

export default ProyectoS;
