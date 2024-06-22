import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Perfil() {
  const userData = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@example.com',
    direccion: '123 Calle Principal',
    telefono: '555-1234'
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="perfil-card">
          <div className="perfil-header d-flex justify-content-center">
              <Image src="img/hombre.png" className="perfil-avatar" roundedCircle style={{ width: '270px', height: '270px' }} />
            </div>
            <div className="perfil-body" style={{ marginTop: '30px' }}>
              <p><strong>Nombre:</strong> {userData.nombre}</p>
              <p><strong>Apellido:</strong> {userData.apellido}</p>
              <p><strong>Correo electrónico:</strong> {userData.email}</p>
              <p><strong>Dirección:</strong> {userData.direccion}</p>
              <p><strong>Teléfono:</strong> {userData.telefono}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Perfil;
