import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import './estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Login() {
  return (
    

    <div className="container w-75 bg-primary mt-5 rounded shadow">
      
      <Row className="align-items-stretch">
        
      <Col className="bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded" style={{ backgroundImage: 'url("img/sandia.png")', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
      </Col>
        <Col className="bg-white p-5 rounded-end">
          <div className="text-end">
            <Image src="img/melon.png" width="48" alt="" />
          </div>

          <h2 className="fw-bold text-center py-5">Bienvenido</h2>

          {/* login */}
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" id="email" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" id="contraseña" />
            </Form.Group>
            <Form.Group className="mb-4 form-check">
              <Form.Check type="checkbox" label="Mantenerme conectado" />
            </Form.Group>
            <Button type="submit" className="btn btn-success w-100">
              Iniciar sesión
            </Button>
            <div className="my-3">
              <span>
                ¿No tienes cuenta? <a href="registro">Regístrate</a>
              </span>
              <br />
            </div>
          </Form>

          {/* login con redes */}
          <div className="container w-100 my-5">
            <Row className="text-center">
              <Col xs={12}>
                <b>Iniciar sesión con Gmail</b>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn btn-outline-primary w-100 my-1" href="inicio">
                <Row className="align-items-center">
                  <Col xs={2} className="d-none d-md-block">
                    <Image src="img/registrarse.png" width="32" alt="" />
                </Col>
                  <Col xs={12} md={10} className="text-center" style={{ color: 'white' }}>
                  Volver al inicio
                </Col>
                </Row>
                </Button>
              </Col>
              <Col>
            <Button className="btn btn-outline-danger w-100 my-1 btn-danger">
              <Row className="align-items-center">
               <Col xs={2} className="d-none d-md-block">
                  <Image src="img/google.png" width="32" alt="" />
                </Col>
                <Col xs={12} md={10} className="text-center" style={{ color: 'white' }}>
                  Gmail
                </Col>
              </Row>
            </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
  
}

export default Login;