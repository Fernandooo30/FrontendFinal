import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagar = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Image src="img/success.png" alt="Pedido Exitoso" style={{ width: '150px', height: '150px' }} />
          <h2 className="mt-4">¡Pedido realizado con éxito!</h2>
          <p className="lead mt-3">Gracias por tu compra. Tu pedido ha sido confirmado y está en proceso.</p>
          <p className="mt-3">Hemos enviado un correo electrónico de confirmación con los detalles de tu pedido.</p>
          <Button href="/index" className="btn btn-success mt-4">Volver al inicio</Button>
          <Button href="/tienda" className="btn btn-danger mt-4 ms-3">Ver más productos</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Pagar;
