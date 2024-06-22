import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Footer() {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">Zandia</h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i>
                Viste tu estilo, vive tu moda
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="#">960-550-857</a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a className="text-decoration-none" href="mailto:info@company.com">@Zandia</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">Productos</h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li><a className="text-decoration-none" href="#">Lujo</a></li>
              <li><a className="text-decoration-none" href="#">Ropa Deportiva</a></li>
              <li><a className="text-decoration-none" href="#">Zapatos para Hombres</a></li>
              <li><a className="text-decoration-none" href="#">Zapatos para Mujeres</a></li>
              <li><a className="text-decoration-none" href="#">Vestidos Populares</a></li>
              <li><a className="text-decoration-none" href="#">Accesorios de Gimnasio</a></li>
              <li><a className="text-decoration-none" href="#">Zapatos Deportivos</a></li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">Información Adicional</h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li><a className="text-decoration-none" href="#">Inicio</a></li>
              <li><a className="text-decoration-none" href="#">Acerca de Nosotros</a></li>
              <li><a className="text-decoration-none" href="#">Ubicaciones de la Tienda</a></li>
              <li><a className="text-decoration-none" href="#">Preguntas Frecuentes</a></li>
              <li><a className="text-decoration-none" href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
 
    </footer>
  );
}

export default Footer;
