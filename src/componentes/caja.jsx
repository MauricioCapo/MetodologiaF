import React, { useState, useRef } from 'react';
import caja from '../estilos/caja.css';

function Caja() {
    // Estado para controlar si el menú está visible o no
    const [menuVisible, setMenuVisible] = useState(false);
    
    // Referencias a los elementos que se manipulan
    const navRef = useRef(null);
    const backgroundMenuRef = useRef(null);

    // Funciones para mostrar y ocultar el menú
    const mostrarMenu = () => {
        setMenuVisible(true);
        if (navRef.current && backgroundMenuRef.current) {
            navRef.current.style.right = "0px";
            backgroundMenuRef.current.style.display = "block";
        }
    };

    const ocultarMenu = () => {
        setMenuVisible(false);
        if (navRef.current && backgroundMenuRef.current) {
            navRef.current.style.right = "-250px";
            backgroundMenuRef.current.style.display = "none";
        }
    };

    return (
        <>
            <header>
                <div className="container__menu">
                    <div className="logo">
                        <img className="logo" src="images/logo-magtimus-v2.3-1.png" alt="Logo"/>
                    </div>
                    <div className="menu">
                        <i className="fas fa-bars" id="btn_menu" onClick={mostrarMenu}></i>
                        <div id="back_menu" ref={backgroundMenuRef} onClick={ocultarMenu}></div>
                        <nav id="nav" ref={navRef}>
                            <img src="images/logo-magtimus-v2.3-1.png" alt="Logo"/>
                            <ul>
                                <li><a href="#" id="selected">Inicio</a></li>
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Nosotros</a></li>
                                <li><a href="#">Contactos</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <div className="container__cover">
                    <div className="cover">
                        <div className="text">
                            <h1>Ayudamos a las empresas a tener una mejor Gestion.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quo nostrum eligendi sequi iste quae voluptates assumenda nemo odit cum!</p>
                            <input type="button" value="Leer Más"/>
                        </div>
                        <div className="svg">
                            <img src="images/developer_activity.svg" alt="Desarrollo"/>
                        </div>
                    </div>
                </div>
            </main>
            <section className=" slider_section ">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">01</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="slider_detail-box">
                    <h1>
                      Start <br/>
                      Business with <br/>
                      Our Company
                    </h1>
                    <p>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <div className="btn-box">
                      <a href="" class="btn-1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/slider-img.png" alt=""/>
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
                      Start <br/>
                      Business with <br/>
                      Our Company
                    </h1>
                    <p>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <div className="btn-box">
                      <a href="" class="btn-1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/slider-img.png" alt=""/>
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
                      Start <br/>
                      Business with <br/>
                      Our Company
                    </h1>
                    <p>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-container">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    <section className="welcome_section layout_padding">
    <div className="container">
      <div className="custom_heading-container">
        <h2>
          Welcome To Our Company
        </h2>
      </div>
      <div className="layout_padding2">
        <div className="img-box">
          <img src="images/welcome.png" alt=""/>
        </div>
        <div className="detail-box">
          <p>
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          </p>
          <div>
            <a href="">
              Read More
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
          Our Services
        </h2>
      </div>
      <div className="service_container layout_padding2">
        <div className="service_box">
          <div className="img-box">
            <img src="images/s-1.jpg" alt=""/>
          </div>
          <div className="detail-box">
            <h4>
              Business <br/>
              Consultant
            </h4>
            <p>
              have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are
            </p>
          </div>
        </div>
        <div className="service_box">
          <div className="img-box">
            <img src="images/s-2.jpg" alt=""/>
          </div>
          <div className="detail-box">
            <h4>
              Marketing <br/>
              Analytics
            </h4>
            <p>
              have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are
            </p>
          </div>
        </div>
        <div className="service_box">
          <div className="img-box">
            <img src="images/s-3.jpg" alt=""/>
          </div>
          <div className="detail-box">
            <h4>
              Financial <br/>
              Planning
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
          Read More
        </a>
      </div>
    </div>
  </section>
  <section className="problem_section layout_padding">
    <div className="container">
      <div className="custom_heading-container">
        <h2>
          Do you have any business problem ?
        </h2>
      </div>
      <div className="layout_padding2">
        <div className="img-box">
          <img src="images/problem.jpg" alt=""/>
        </div>
        <div className="detail-box">
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don&#39;t look even slightly believable. I
          </p>
          <div>
            <a href="">
              Read More
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
          Why Choose Us
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
              <img src="images/smiley.png" alt=""/>
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
              <img src="images/monitor.png" alt=""/>
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
              <img src="images/multiple-users-silhouette.png" alt=""/>
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
              <img src="images/bar-chart.png" alt=""/>
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
        What Our Clients Says
      </h2>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="client_container layout_padding2">
              <div className="client_text">
                <p>
                  psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
              <div className="detail-box">
                <div className="img-box">
                  <img src="images/client.png" alt=""/>
                </div>
                <div className="name">
                  <h5>
                    Joans Mark
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
                  psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
              <div className="detail-box">
                <div className="img-box">
                  <img src="images/client.png" alt=""/>
                </div>
                <div className="name">
                  <h5>
                    Joans Mark
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
                  psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
              <div className="detail-box">
                <div className="img-box">
                  <img src="images/client.png" alt=""/>
                </div>
                <div className="name">
                  <h5>
                    Joans Mark
                  </h5>
                  <p>
                    cal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
  </section>
  
  <div class="footer_bg">
    <section className="info_section layout_padding2-bottom">
      <div class="container">
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
                  Useful Link
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="d-flex">
                <h5>
                  The Services
                </h5>
              </div>
              <div className="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul className="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Lorem ipsum dolor
                    </a>
                  </li>
                  <li>
                    <a href="">
                      sit amet, consectetur
                    </a>
                  </li>
                  <li>
                    <a href="">
                      adipiscing elit,
                    </a>
                  </li>
                  <li>
                    <a href="">
                      sed do eiusmod
                    </a>
                  </li>
                  <li>
                    <a href="">
                      tempor incididunt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="d-flex">
                <h5>
                  Contact Us
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul className="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a href="">
                      dolor sit amet,
                    </a>
                  </li>
                  <li>
                    <a href="">
                      consectetur
                    </a>
                  </li>
                  <li>
                    <a href="">
                      adipiscing
                    </a>
                  </li>
                  <li>
                    <a href="">
                      elit, sed do eiusmod
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
              <img src="images/fb.png" alt=""/>
            </a>

            <a href="">
              <img src="images/twitter.png" alt=""/>
            </a>
            <a href="">
              <img src="images/linkedin1.png" alt=""/>
            </a>
            <a href="">
              <img src="images/instagram1.png" alt=""/>
            </a>
          </div>
          <div className="form_container mt-5">
            <form action="">
              <label for="subscribeMail">
                Newsletter
              </label>
              <input type="email" placeholder="Enter Your email" id="subscribeMail"/>
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
    </div>
        </>
    );
}

export default Caja;
