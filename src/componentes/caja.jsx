import React, { useState } from 'react';
import "../estilos/caja.css";
import RegisterS from './Register.jsx';
import ProyectoS from './Proyectos.jsx';
import LoginS from './Login.jsx';
import { CgUser } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Caja() {
  const [showRegister, setShowRegister] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showPrincipal, setShowPrincipal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [user, setUser] = useState(false)
  const navigate = useNavigate();

  const handleRegisters = () => {
    setShowRegister(true);
    setShowMenu(false);
    setShowLogin(false);
  };

  const handleMenu = () => {
    setShowMenu(true);
    setShowRegister(false);
    setShowLogin(false);
  };

  const handlePrincipal = () => {
    setShowPrincipal(true);
    setShowMenu(false);
    navigate('/proyectos');
  };

  const handleLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowMenu(false);
  };

  const handleCuentas = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    setShowPrincipal(true);
    setShowSubmenu(false)
    setUser(true);
  };

  const handleLogout = () => {
    setUser(false)
    setShowPrincipal(false)
    setShowMenu(true)
    setShowSubmenu(false)
  }

  return (
    <>
      <header>
        <div className="container__menu">
          <div className="logo">
          </div>
          <div className="menu">
            <nav>
              <ul>
                <li><Link to="/inicio" id="selected" onClick={handleMenu}>Inicio</Link></li>
                <li><a href="#" id="selected2">Servicios</a></li>
                <li><a href="#" id="selected2">Nosotros</a></li>
                <li><a href="#" id="selected2">Contactos</a></li>
                <li>
                  <a href="#" id="selected2" onClick={handleCuentas}><CgUser className="iconoLR" /></a>
                  {showSubmenu && (
                    user ? (
                      <ul className="submenu">
                        <li><Link to="/logout" onClick={handleLogout}>Cerrar sesión</Link></li>
                      </ul>
                    ) : (
                      <ul className="submenu">
                        <li><Link to="/register" onClick={handleRegisters}>Registrarse</Link></li>
                        <li><Link to="/login" onClick={handleLogin}>Iniciar sesión</Link></li>
                      </ul>
                    )
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {showMenu && (
        <main>
          <div className="container__cover">
            <div className="cover">
              <div className="text">
                <h1>Ayudamos a las empresas a tener una mejor Gestión.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quo nostrum eligendi sequi iste quae voluptates assumenda nemo odit cum!</p>
                <input type="button" value="Comenzar" onClick={handlePrincipal} />
              </div>
              <div className="svg">
                <img src={require("../imagenes/developer_activity.png")} alt="Desarrollo" />
              </div>
            </div>
          </div>

          <section className=" slider_section ">
            <div className="carousel slide" >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="slider_detail-box">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="slider_detail-box">
                          <h1>
                            Bienvenidos a GTPI
                          </h1>
                          <p>
                            Simplifica la gestión de tus proyectos con nuestra plataforma intuitiva y poderosa.
                            Organiza tareas, colabora con tu equipo y alcanza tus objetivos con mayor eficiencia.
                          </p>
                          <div className="btn-box">
                            <a href="" className="btn-1">
                              Leer mas
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="slider_img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="slider_img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="welcome_section layout_padding">
            <div className="container">
              <div className="custom_heading-container">
                <h2>
                  Empieza tu Primer Proyecto
                </h2>
              </div>
              <div className="layout_padding2">
                <div className="img-box">
                  <img src="images/welcome.png" alt="" />
                </div>
                <div className="detail-box">
                  <p>
                    Da el primer paso hacia una gestión más organizada y eficiente. Crea tu proyecto hoy y descubre cómo nuestra plataforma puede transformar tu flujo de trabajo.
                  </p>
                  <div>
                    <a href="">
                      Empezar Ya
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>
          <section className="service_section">
            <div className="container">
              <div className="custom_heading-container">
                <h2>
                  Nuestro Servicio
                </h2>
              </div>
              <div className="service_container layout_padding2">
                <div className="service_box">
                  <div className="img-box">
                    <img src="images/s-1.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Planificación <br />
                      Estructurada
                    </h4>
                    <p>
                      have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
                      slightly believable. If you are
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="img-box">
                    <img src="images/s-2.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Colaboración <br />
                      Efectiva
                    </h4>
                    <p>
                      have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
                      slightly believable. If you are
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="img-box">
                    <img src="images/s-3.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Monitoreo <br />
                      y Reportes
                    </h4>
                    <p>
                      have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
                      slightly believable. If you are
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <a href="">
                  Leer mas
                </a>
              </div>
            </div>
          </section>
          <section className="problem_section layout_padding">
            <div className="container">
              <div className="custom_heading-container">
                <h2>
                  Tienes Problemas con ... ?
                </h2>
              </div>
              <div className="layout_padding2">
                <div className="img-box">
                  <img src="images/problem.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which don&#39;t look even slightly believable. I
                  </p>
                  <div>
                    <a href="">
                      Leer mas
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>
          <section className="why_section layout_padding">
            <div className="container">
              <div className="custom_heading-container">
                <h2>
                  Por que elegirnos?
                </h2>
              </div>
              <div className="content-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis
                </p>
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="img-box">
                      <img src="images/smiley.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h3>
                        99%
                      </h3>
                      <h6>
                        SATISFIED CLIENTS
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="img-box">
                      <img src="images/monitor.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h3>
                        4700+
                      </h3>
                      <h6>
                        AWESOME planing
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="img-box">
                      <img src="images/multiple-users-silhouette.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h3>
                        4500+
                      </h3>
                      <h6>
                        CLIENTS
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="img-box">
                      <img src="images/bar-chart.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h3>
                        19000+
                      </h3>
                      <h6>
                        DAILY business
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="client_section layout_padding">
            <div className="container">
              <h2>
                Consultas
              </h2>
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="client_container layout_padding2">
                      <div className="client_text">
                        <p>
                          "¿Puedo personalizar las notificaciones de mi proyecto?"
                          <br />
                          <br />
                        </p>
                        <p>
                          R:
                        </p>
                      </div>
                      <div className="detail-box">
                        <div className="img-box">
                          <img src="images/client.png" alt="" />
                        </div>
                        <div className="name">
                          <h5>
                            Usuario Anonimo
                          </h5>
                          <p>
                            cal
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="client_container layout_padding2">
                      <div className="client_text">
                        <p>
                          "¿Cómo funciona el sistema de seguimiento de tareas?"
                          <br />
                          <br />
                        </p>
                        <p>
                          R:
                        </p>

                      </div>
                      <div className="detail-box">
                        <div className="img-box">
                          <img src="images/client.png" alt="" />
                        </div>
                        <div className="name">
                          <h5>
                            Usuario Anonimo
                          </h5>
                          <p>
                            cal
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="client_container layout_padding2">
                      <div className="client_text">
                        <p>
                          "¿Qué tan seguro es el almacenamiento de datos en esta aplicación?"
                          <br />
                          <br />
                        </p>
                        <p>
                          R:
                        </p>
                      </div>
                      <div className="detail-box">
                        <div className="img-box">
                          <img src="images/client.png" alt="" />
                        </div>
                        <div className="name">
                          <h5>
                            Usuario Anonimo
                          </h5>
                          <p>
                            cal
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <div className="footer_bg">
            <section className="info_section layout_padding2-bottom">
              <div className="container">
                <h3 className="">
                  GTPI
                </h3>
              </div>
              <div className="container info_content">

                <div>
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <div className="d-flex">
                        <h5>
                          Contactos
                        </h5>
                      </div>
                      <div className="d-flex ">
                        <ul>
                          <li>
                            <a href="">
                              Sobre Nosotros
                            </a>
                          </li>
                          <li>
                            <a href="">
                              Sobre nuestro Servicio
                            </a>
                          </li>
                          <li>
                          </li>
                          <li>
                            <a href="">
                              Nuestro Contacto
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
                  <div className="social-box">
                    <a href="">
                      <img src={require("../imagenes/fb.png")} alt="" />
                    </a>

                    <a href="">
                      <img src={require("../imagenes/twitter.png")} alt="" />
                    </a>
                    <a href="">
                      <img src={require("../imagenes/linkedin1.png")} alt="" />
                    </a>
                    <a href="">
                      <img src={require("../imagenes/instagram1.png")} alt="" />
                    </a>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </main>
      )}

      {showRegister && <RegisterS />}
      {showPrincipal && <ProyectoS />}
      {showLogin && <LoginS onLoginSuccess={handleLoginSuccess} />}
    </>
  );
}

export default Caja;
