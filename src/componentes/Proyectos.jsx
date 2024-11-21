import React, { useState } from "react";
import '../estilos/Proyectos.css';
import { CgArrowsExpandRight, CgCompressRight } from "react-icons/cg";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ProyectoS = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [projects, setProjects] = useState([
        { id: Date.now(), name: "Proyecto A", description: "Descripción breve del Proyecto A", status: "En progreso", file: null },
        { id: Date.now() + 1, name: "Proyecto B", description: "Descripción breve del Proyecto B", status: "Completo", file: null },
        { id: Date.now() + 2, name: "Proyecto C", description: "Descripción breve del Proyecto C", status: "Pendiente", file: null },
    ]);
    const [filter, setFilter] = useState("");
    const [editingProject, setEditingProject] = useState(null);
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [newFile, setNewFile] = useState(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleAddProject = () => {
        const newProject = {
            id: Date.now(),
            name: `Proyecto ${String.fromCharCode(65 + projects.length)}`,
            description: `Descripción breve del Proyecto ${String.fromCharCode(65 + projects.length)}`,
            status: "Pendiente",
            file: null,
        };
        setProjects([...projects, newProject]);
    };

    const handleDeleteProject = (id) => {
        const updatedProjects = projects.filter(project => project.id !== id);
        setProjects(updatedProjects);
    };

    const handleEditProject = (project) => {
        setEditingProject(project);
        setNewName(project.name);
        setNewDescription(project.description);
        setNewStatus(project.status);
        setNewFile(project.file);
    };

    const handleSaveEdit = () => {
        setProjects(projects.map(project =>
            project.id === editingProject.id
                ? { ...project, name: newName, description: newDescription, status: newStatus, file: newFile }
                : project
        ));
        setEditingProject(null);
        setNewName("");
        setNewDescription("");
        setNewStatus("");
        setNewFile(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewFile(file);
    };

    const handleDeleteFile = () => {
        setNewFile(null);
    };

    const getDownloadUrl = (file) => {
        return file ? URL.createObjectURL(file) : null;
    };

    const filteredProjects = filter
        ? projects.filter(project => project.status === filter)
        : projects;

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
                            {projects.map((project) => (
                                <li key={project.id}>
                                    <a href={`#project-${project.id}`}>{project.name}</a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <h2>Filtrar Proyectos</h2>
                            <select onChange={(e) => setFilter(e.target.value)}>
                                <option value="">Todos</option>
                                <option value="En progreso">En progreso</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="Completo">Completo</option>
                            </select>
                        </div>
                        <div>
                            <h2>Acciones</h2>
                            <button className="add-project-button" onClick={handleAddProject}>
                                <FaPlus /> Nuevo Proyecto
                            </button>
                            <button className="delete-all-button" onClick={() => setProjects([])}>
                                <FaTrash /> Eliminar Todos
                            </button>
                        </div>
                        <div>
                            <h2>Notificaciones</h2>
                            <p>Proyectos sin archivo: {projects.filter((p) => !p.file).length}</p>
                            <p>Proyectos pendientes: {projects.filter((p) => p.status === "Pendiente").length}</p>
                        </div>
                        <div>
                            <h2>Calendario</h2>
                            <Calendar />
                        </div>
                    </div>
                )}
            </div>
            <div className="content">
                <div className="VistaTodo">
                    <h1>Panel de Proyectos</h1>
                    <div className="project-list">
                        {filteredProjects.map((project) => (
                            <div key={project.id} id={`project-${project.id}`} className="project-card">
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
                                        <select
                                            value={newStatus}
                                            onChange={(e) => setNewStatus(e.target.value)}
                                        >
                                            <option value="En progreso">En progreso</option>
                                            <option value="Pendiente">Pendiente</option>
                                            <option value="Completo">Completo</option>
                                        </select>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                        />
                                        {newFile && (
                                            <div>
                                                <p>Archivo seleccionado: {newFile.name}</p>
                                                <button onClick={handleDeleteFile}>Eliminar archivo</button>
                                                <a href={getDownloadUrl(newFile)} download>
                                                    Descargar archivo
                                                </a>
                                            </div>
                                        )}
                                        <button onClick={handleSaveEdit}>Guardar Cambios</button>
                                        <button onClick={() => setEditingProject(null)}>Cancelar</button>
                                    </div>
                                ) : (
                                    <div>
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <p><strong>Estado:</strong> {project.status}</p>
                                        {project.file && (
                                            <div>
                                                <p>Archivo: {project.file.name}</p>
                                                <a href={getDownloadUrl(project.file)} download>
                                                    Descargar archivo
                                                </a>
                                            </div>
                                        )}
                                        <button onClick={() => handleEditProject(project)}>
                                            <FaEdit /> Editar
                                        </button>
                                        <button onClick={() => handleDeleteProject(project.id)}>
                                            <FaTrash /> Eliminar
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProyectoS;
