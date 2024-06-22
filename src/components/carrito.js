import React, { useState, useEffect } from 'react'; // Asegúrate de tener useState y useEffect si los necesitas
import { useNavigate } from 'react-router-dom'; // Solo importa useNavigate si es necesario

const CarritoCompras = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(storedCarrito);
  }, []);

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const navigate = useNavigate();

  const confirmarPago = () => {
    // Aquí podrías agregar lógica adicional antes de navegar a pagar
    navigate('/pagar');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Carrito de Compras</h1>
      <div className="row mt-5">
        <div className="col-md-12">
          <h2>Carrito</h2>
          <ul className="list-group">
            {carrito.map((producto) => (
              <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: '100px', marginRight: '20px' }} />
                  <span>{producto.nombre}</span>
                </div>
                <div>
                  <span className="badge bg-primary rounded-pill">${(producto.precio * producto.cantidad).toFixed(2)}</span>
                  <button className="btn btn-danger ms-3" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3">Total: <span className="badge bg-success">${calcularTotal().toFixed(2)}</span></p>
          <button className="btn btn-primary" onClick={confirmarPago}>Confirmar Pago</button>
        </div>
      </div>
    </div>
  );
};

export default CarritoCompras;
