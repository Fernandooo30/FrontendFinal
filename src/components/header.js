import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container d-flex justify-content-between align-items-center">

                <a className="navbar-brand text-success logo h1 align-self-center" href="inicio">
                    <span className="text-success">Z</span><span className="text-danger">a</span><span className="text-success">n</span><span className="text-danger">d</span><span className="text-success">i</span><span className="text-danger">a</span>
                </a>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                    <div className="flex-fill">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="index">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="sobrenosotros">Acerca de</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tienda">Tienda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar align-self-center d-flex">


                        <a className="nav-icon position-relative text-decoration-none" href="carrito">
                            <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">4</span>
                        </a>
                        <a className="nav-icon position-relative text-decoration-none" href="perfil">
                            <i className="fa fa-fw fa-user text-dark mr-3"></i>
                        </a>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;