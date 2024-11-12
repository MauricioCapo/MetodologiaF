import React, { useEffect, useState } from "react";
import Proyectos from '../estilos/Proyectos.css';
function ProyectoS() {
    useEffect(() => {
        const body = document.querySelector('body');
        const sidebar = document.querySelector('nav');
        const toggle = document.querySelector(".toggle");
        const searchBtn = document.querySelector(".search-box");
        const modeSwitch = document.querySelector(".toggle-switch");
        const modeText = document.querySelector(".mode-text");

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });

        searchBtn.addEventListener("click", () => {
            sidebar.classList.remove("close");
        });

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                modeText.innerText = "Light mode";
            } else {
                modeText.innerText = "Dark mode";
            }
        });
    }, []);
    return (
        <div>
            <nav className="sidebar close">
                {/* Contenido del sidebar */}
                <div class="menu-bar">
            <div class="menu">

                <li classNameName="search-box">
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Search..."/>
                </li>

                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Revenue</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Notifications</span>
                        </a>
                    </li>

                    <li className="nav-link"> 
                        <a href="#">
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">Analytics</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-heart icon' ></i>
                            <span class="text nav-text">Likes</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-wallet icon' ></i>
                            <span className="text nav-text">Wallets</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <a href="#">
                        <i className='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>

                <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span className="mode-text text">Dark mode</span>

                    <div className="toggle-switch">
                        <span className="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>
    </nav>
    <section className="home">
        <div className="text">Dashboard Sidebar</div>
    </section>
          
            <section className="home">
                <div className="text">Dashboard Sidebar</div>
            </section>
        </div>
    );
}

export default ProyectoS;
