import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function OurBrands() {
  return (
    <section className="bg-light py-5">
      <div className="container my-4">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Nuestras Marcas</h1>
            <p>
            En Zandia, reunimos las mejores marcas para ofrecerte calidad y estilo en un solo lugar. 
            Explora nuestra selección y descubre lo que cada marca tiene para ofrecerte.
            </p>
          </div>
          <div className="col-lg-9 m-auto tempaltemo-carousel">
            <div className="row d-flex flex-row">
              <div className="col-1 align-self-center">
                <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                  <i className="text-light fas fa-chevron-left"></i>
                </a>
              </div>
 


              <div className="col">
                <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
 
                   <div className="carousel-inner product-links-wap" role="listbox">

                     <div className="carousel-item active">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <a href="https://www.adidas.pe/"><Image className="img-fluid brand-img" src="img/adidas.png" alt="Brand Logo" /></a>
                        </div>
                        <div className="col-3 p-md-5">
                          <a href="https://www.nike.com/es/"><Image className="img-fluid brand-img" src="img/nike.png" alt="Brand Logo" /></a>
                        </div>
                        <div className="col-3 p-md-5">
                          <a href="https://pe.puma.com/pe/es/home"><Image className="img-fluid brand-img" src="img/puma.png" alt="Brand Logo" /></a>
                        </div>
                        <div className="col-3 p-md-5">
                          <a href="https://www.umbro.com/es/"><Image className="img-fluid brand-img" src="img/umbro.png" alt="Brand Logo" /></a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-1 align-self-center">
                <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                  <i className="text-light fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBrands;
