import React, { useState } from "react";
import '../estilos/Proyectos.css';
import { CgArrowsExpandRight, CgCompressRight } from "react-icons/cg";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const ProyectoS = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [projects, setProjects] = useState([
        { id: Date.now(), name: "Proyecto A", description: "Descripción breve del Proyecto A", status: "En progreso" },
        { id: Date.now() + 1, name: "Proyecto B", description: "Descripción breve del Proyecto B", status: "Completo" },
        { id: Date.now() + 2, name: "Proyecto C", description: "Descripción breve del Proyecto C", status: "Pendiente" },
    ]);
    const [editingProject, setEditingProject] = useState(null);
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newStatus, setNewStatus] = useState("");

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleAddProject = () => {
        const newProject = {
            id: Date.now(), // Genera un ID único usando la hora actual
            name: `Proyecto ${String.fromCharCode(65 + projects.length)}`,
            description: `Descripción breve del Proyecto ${String.fromCharCode(65 + projects.length)}`,
            status: "Pendiente",
        };
        setProjects([...projects, newProject]);
    };

    const handleDeleteProject = (id) => {
        const updatedProjects = projects.filter(project => project.id !== id);
        setProjects(updatedProjects);
        console.log("Proyecto eliminado, nuevos proyectos:", updatedProjects);
    };

    const handleEditProject = (project) => {
        setEditingProject(project);
        setNewName(project.name);
        setNewDescription(project.description);
        setNewStatus(project.status);
    };

    const handleSaveEdit = () => {
        setProjects(projects.map(project =>
            project.id === editingProject.id
                ? { ...project, name: newName, description: newDescription, status: newStatus }
                : project
        ));
        setEditingProject(null);
        setNewName("");
        setNewDescription("");
        setNewStatus("");
    };

    return (
        <div className="container2">
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
                <div className="VistaTodo">
                    <h1>Panel de Proyectos</h1>
                    <button className="add-project-button1" onClick={handleAddProject}>
                        <FaPlus /> Añadir Proyecto
                    </button>
                    <div className="project-list">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                {editingProject && editingProject.id === project.id ? (
                                    <div className="edit-form">
                                        <h2>Editar Proyecto</h2>
                                        <input
                                            type="text"
                                            placeholder="Nombre del proyecto"
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                        />
                                        <textarea
                                            placeholder="Descripción"
                                            value={newDescription}
                                            onChange={(e) => setNewDescription(e.target.value)}
                                        ></textarea>
                                        <input
                                            type="text"
                                            placeholder="Estado"
                                            value={newStatus}
                                            onChange={(e) => setNewStatus(e.target.value)}
                                        />
                                        <button className="Save-button" onClick={handleSaveEdit}>Guardar Cambios</button>
                                        <button className="Cancelar-button" onClick={() => setEditingProject(null)}>Cancelar</button>
                                    </div>
                                ) : (
                                    <div>
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <p><strong>Estado:</strong> {project.status}</p>
                                        <div className="project-actions">
                                            <button className="edit-button" onClick={() => handleEditProject(project)}>
                                                <FaEdit /> Editar
                                            </button>
                                            <button className="delete-button" onClick={() => handleDeleteProject(project.id)}>
                                                <FaTrash /> Eliminar
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProyectoS;
