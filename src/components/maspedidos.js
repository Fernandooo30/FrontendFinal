import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function PopularCategories() {
  return (
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1"><b>Los más pedidos</b></h1>
          <p>Estas son las prendas más aclamadas de esta temporada. ¿Qué esperas para comprarte una de ellas?</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 p-5 mt-3">
          <a href="tienda"><Image src="img/gorro.png" className="rounded-circle img-fluid border" alt="Gorros" /></a>
          <h5 className="text-center mt-3 mb-3">Gorros</h5>
          <p className="text-center"><a className="btn btn-success" href="tienda">Ir a la Tienda</a></p>
        </div>

        <div className="col-12 col-md-4 p-5 mt-3">
          <a href="tienda"><Image src="img/polos.png" className="rounded-circle img-fluid border" alt="Polos" /></a>
          <h2 className="h5 text-center mt-3 mb-3">Polos</h2>
          <p className="text-center"><a className="btn btn-success" href="tienda">Ir a la Tienda</a></p>
        </div>
        <div className="col-12 col-md-4 p-5 mt-3">
          <a href="tienda"><Image src="./img/pulsera.png" className="rounded-circle img-fluid border" alt="Accesorios" /></a>
          <h2 className="h5 text-center mt-3 mb-3">Accesorios</h2>
          <p className="text-center"><a className="btn btn-success" href="tienda">Ir a la Tienda</a></p>
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
