import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import './estiloregister.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    direccion: '',
    telefono: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 
    try {
      console.log('Enviando datos:', formData);
      const response = await axios.post('http://localhost:9090/api/v1/clientes', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Registro exitoso:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error en el registro:', error.response.data);
        setError(`Error en el registro: ${error.response.data.message || 'Error desconocido'}`);
      } else if (error.request) {
        console.error('Error en el registro: No se recibió respuesta del servidor');
        setError('Error en el registro: No se recibió respuesta del servidor');
      } else {
        console.error('Error en el registro:', error.message);
        setError(`Error en el registro: ${error.message}`);
      }
    }
  };

  return (
    <div className="container w-75 bg-primary mt-5 rounded shadow">
      <Row className="align-items-stretch">
        <Col className="bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded" style={{ backgroundImage: 'url("img/sandisonrisa.jpg")', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
        </Col>
        <Col className="bg-white p-5 rounded-end">
          <div className="text-end">
            <Image src="img/melon.png" width="48" alt="" />
          </div>

          <h2 className="fw-bold text-center py-5">Registro</h2>

          {error && <p className="text-danger">{error}</p>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" id="nombre" value={formData.nombre} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" id="apellido" value={formData.apellido} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" id="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" id="contraseña" value={formData.contraseña} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" id="direccion" value={formData.direccion} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" id="telefono" value={formData.telefono} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4 form-check">
              <Form.Check type="checkbox" name="terminos" required />
              <Form.Label>Acepto los términos y condiciones</Form.Label>
            </Form.Group>
            <div className="d-grid">
              <Button type="submit" className="btn btn-success">Registrarse</Button>
            </div>
            <div className="my-3">
              <span>¿Ya tienes una cuenta? <a href="login">Inicia sesión</a></span><br />
            </div>
          </Form>

          <Container className="w-100 my-5">
            <Row className="text-center">
              <Col xs={12}><b>Ir a pagina de inicio</b></Col>
            </Row>
            <Row>
              <Col>
                <a href="inicio">
                  <Button className="btn btn-outline-primary w-100 my-1">
                    <Row className="align-items-center">
                      <Col xs={2} className="d-none d-md-block">
                        <Image src="img/login.png" width="32" alt="" />
                      </Col>
                      <Col xs={12} md={10} className="text-center" style={{ color: 'white' }}>
                        Volver al inicio
                      </Col>
                    </Row>
                  </Button>
                </a>
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
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Registro;