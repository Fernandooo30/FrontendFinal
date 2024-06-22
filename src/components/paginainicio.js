import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloinicio.css'; // Importa el archivo de estilos personalizado

function Inicio() {
  const bodyStyle = {
    background: '#acefbf',
    background: 'linear-gradient(to left, #e89595, #a4eea9)',
  };
  
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-bg-dark justify-content-center align-items-center" style={{ backgroundImage: "url('img/Fondo.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0" style={{ color: 'black' }}>Inicio</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link py-1 px-0 active" aria-current="page" href="index" style={{ color: 'black', fontWeight: 500 }} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Página principal</a>
            <a className="nav-link py-1 px-0" href="tienda" style={{ color: 'black', fontWeight: 500 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Catálogo</a>
            <a className="nav-link py-1 px-0" href="contacto" style={{ color: 'black', fontWeight: 500 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contacto</a>
          </nav>
        </div>
      </header>

      <main className="px-3 text-center">
        <h1 style={{ color: 'black' }}>Z A N D I A</h1>
        <p className="lead" style={{ color: 'black' }}>"Viste tu estilo, vive tu moda"</p>
        <p className="lead">
          <a href="Login" className="btn btn-lg btn-light fw-semibold border-white bg-white" style={{ color: 'black' }}>Iniciar sesión</a>
          <a href="registro" className="btn btn-lg btn-light fw-semibold border-white bg-white" style={{ color: 'black' }}>Registrarse</a>
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p style={{ color: 'black' }}>©2024 <a href="https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/30.jpg" style={{ color: 'black' }}>ZANDIA</a> Todos los derechos reservados <a href="https://www.tecsup.edu.pe/terminos-y-condiciones" style={{ color: 'black' }}>Términos y condiciones</a>.</p>
      </footer>
    </div>
  );
}

export default Inicio;
