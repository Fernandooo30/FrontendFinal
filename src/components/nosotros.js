import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faExchangeAlt, faPercent, faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function AboutUs() {
  return (
    <>
      <section className="bg-success py-5">
        <Container>
          <Row className="align-items-center py-5">
            <Col md={8} className="text-white">
              <h1>
                <span className="text-white">Sobre</span><span className="text-danger"> Nosotros</span>
              </h1>
              <p>
                ¡Bienvenido a Zandia! Aquí encontrarás el epicentro de la moda de tendencia, 
                donde cada prenda cuenta una historia de estilo y calidad. 
                Explora nuestra colección cuidadosamente seleccionada de ropa para hombres y mujeres del Instituto Tecsup, 
                diseñada para destacar tu personalidad y elevar tu estilo a nuevas alturas.
              </p>
            </Col>
            <Col md={4}>
              <Image src="img/melon.png" alt="About Hero" style={{ maxWidth: '300px' }} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Nuestros Servicios</h1>
            <p>
              En Zandia, encontrarás una amplia selección de ropa, pantalones y zapatillas para hombres y mujeres, adaptados a tu estilo y necesidades.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><FontAwesomeIcon icon={faTruck} /></div>
              <h2 className="h5 mt-4 text-center">Servicio de Delivery</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-danger text-center"><FontAwesomeIcon icon={faExchangeAlt} /></div>
              <h2 className="h5 mt-4 text-center">Venta de prendas</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-danger text-center"><FontAwesomeIcon icon={faPercent} /></div>
              <h2 className="h5 mt-4 text-center">Promociones</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><FontAwesomeIcon icon={faUser} /></div>
              <h2 className="h5 mt-4 text-center">Atencion las 24 Horas</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
