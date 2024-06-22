import React from 'react';
import { Link } from 'react-router-dom';

const Pagar = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Página de Pago</h1>
      {/* Contenido de la página de pago */}
      <Link to="/carrito" className="btn btn-primary mt-3">Volver al Carrito</Link>
    </div>
  );
};

export default Pagar;
