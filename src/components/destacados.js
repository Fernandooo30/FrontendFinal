import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function FeaturedProducts() {
  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Productos Destacados</h1>
            <p>
              Sumérgete en una selección cuidadosamente elegida de artículos que son la combinación perfecta de estilo, calidad y funcionalidad.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <a href="shop-single.html">
                <Image src="img/gorritotecsup.jpg" className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                  </li>
                  <li className="text-muted text-right">S/. 24.00</li>
                </ul>
                <a href="shop-single.html" className="h2 text-decoration-none text-dark">Gorra contra el Sol Logo Tecsup </a>
                <p className="card-text">
                  Diseñada para ofrecer protección contra los rayos UV y un ajuste cómodo, esta gorra es perfecta para tus aventuras bajo el sol.
                </p>
                <p className="text-muted">Reseñas (12)</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <a href="shop-single.html">
                <Image src="img/mochila.png" className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                  </li>
                  <li className="text-muted text-right">S/. 24.00</li>
                </ul>
                <a href="shop-single.html" className="h2 text-decoration-none text-dark">Mochila Aventurera</a>
                <p className="card-text">
                  Con compartimentos espaciosos y bolsillos organizadores, esta mochila es ideal para llevar todo lo que necesites.
                </p>
                <p className="text-muted">Reseñas (26)</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <a href="shop-single.html">
                <Image src="img/pantalones.png" className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                  </li>
                  <li className="text-muted text-right">S/. 24.00</li>
                </ul>
                <a href="shop-single.html" className="h2 text-decoration-none text-dark">Pantalones Antimanchas</a>
                <p className="card-text">
                  Fabricados con tejidos elásticos y transpirables, estos pantalones te brindan libertad de movimiento y comodidad durante tus actividades.
                </p>
                <p className="text-muted">Reseñas (15)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
