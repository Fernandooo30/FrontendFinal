import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', contraseña: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:9090/auth/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Inicio de sesión exitoso:', response.data);
        localStorage.setItem('clienteId', response.data.clienteId);
        localStorage.setItem('userData', JSON.stringify({
          nombre: response.data.nombre,
          apellido: response.data.apellido,
          email: response.data.email,
          direccion: response.data.direccion,
          telefono: response.data.telefono
        }));
        toast.success('Inicio de sesión exitoso', {
          position: "top-center",
          autoClose: 2000,
          onClose: () => navigate('/index')
        });
      } else {
        console.error('Error en el inicio de sesión:', response);
        setError('Error en el inicio de sesión: Usuario no registrado');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error en el inicio de sesión:', error.response.data);
        setError(`Error en el inicio de sesión: ${error.response.data.message || 'Usuario no registrado'}`);
      } else if (error.request) {
        console.error('Error en el inicio de sesión: Usuario no registrado');
        setError('Error en el inicio de sesión: Usuario no registrado');
      } else {
        console.error('Error en el inicio de sesión:', error.message);
        setError(`Error en el inicio de sesión: ${error.message}`);
      }
    }
  };

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

          {error && <p className="text-danger">{error}</p>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" id="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" id="contraseña" value={formData.contraseña} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4 form-check">
              <Form.Check type="checkbox" label="Mantenerme conectado" />
            </Form.Group>
            <Button type="submit" className="btn btn-success w-100">
              Iniciar sesión
            </Button>
            <div className="my-3">
              <span>¿No tienes cuenta? <a href="registro">Regístrate</a></span><br />
            </div>
          </Form>

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
      <ToastContainer />
    </div>
  );
}

export default Login;
