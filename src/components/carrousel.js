import React from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './imagenescarrusel.css'; 

function Carousel() {
  return (
    <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <Image id="carousel-image-1" className="img-fluid carousel-image" src="img/zapasss.png" alt="" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left align-self-center">
                  <h1 className="h1 text-success"><b>Calzado</b> <span className="text-danger">Camina con estilo</span></h1>
                  <h3 className="h2">Descubre tu Estilo Único con Nosotros</h3>
                  <p>
                    ¡Descubre la revolución del confort y el estilo con las zapatillas de Zandia! Desde diseños urbanos 
                    hasta deportivos, nuestra colección ofrece la combinación perfecta de moda y funcionalidad. 
                    Con materiales de primera calidad y tecnología avanzada, cada paso se convierte en una experiencia de lujo.
                    Encuentra tu par perfecto y haz una declaración de estilo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <Image id="carousel-image-2" className="img-fluid carousel-image" src="img/poloceleste.png" alt="" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1 text-success"><b>Polos y Poleras</b></h1>
                  <h3 className="h2">De la más alta calidad</h3>
                  <p>
                    ¡Viste con estilo y comodidad con los polos y poleras de Zandia! 
                    Desde los clásicos hasta los más modernos, nuestra colección ofrece 
                    opciones para cada ocasión. Confeccionados con materiales de calidad 
                    y detalles cuidadosamente elaborados, nuestras prendas son perfectas 
                    para lucir casualmente elegante en cualquier momento del día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <Image id="carousel-image-3" className="img-fluid carousel-image" src="img/pantaloncillos.png" alt="" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1 text-success"><b>Pantalones</b></h1>
                  <h3 className="h2">Para un look casual u ocasiones especiales</h3>
                  <p>
                    ¡Completa tu look con los pantalones de Zandia! 
                    Desde jeans clásicos hasta pantalones de vestir elegantes, 
                    nuestra colección ofrece opciones para todos los estilos 
                    y ocasiones. Confeccionados con materiales de alta calidad 
                    y diseñados para un ajuste perfecto y comodidad duradera, 
                    nuestros pantalones son la elección ideal para cualquier día de la semana. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
        <i className="fas fa-chevron-left"></i>
      </a>
      <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}

export default Carousel;
