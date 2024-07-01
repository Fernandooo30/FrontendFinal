import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const CarritoCompras = () => {
  const [carrito, setCarrito] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(storedCarrito);
  }, []);

  const handleShowModal = (producto) => {
    setProductoAEliminar(producto);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setProductoAEliminar(null);
  };

  const handleEliminarProducto = () => {
    if (productoAEliminar) {
      const nuevoCarrito = carrito.filter((item) => item.id !== productoAEliminar.id);
      setCarrito(nuevoCarrito);
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
      handleCloseModal();
    }
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const navigate = useNavigate();

  const confirmarPedido = () => {
    const clienteId = localStorage.getItem('clienteId');
    const pedido = {
      pedido: {
        clienteId: clienteId // Usar el clienteId del localStorage
      },
      detalles: carrito.map(producto => ({
        idproducto: producto.id,
        cantidad: producto.cantidad,
        talla: producto.talla,
        precio: producto.precio
      }))
    };

    fetch('http://localhost:9090/api/v1/pedidos/confirmar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedido),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Pedido confirmado:', data);
      localStorage.removeItem('carrito'); // Limpiar el carrito después de confirmar el pedido
      navigate('/pagar');
    })
    .catch(error => {
      console.error('Error al confirmar el pedido:', error);
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Carrito de Compras</h1>
      <div className="row mt-5">
        <div className="col-md-12">
          <h2>Carrito</h2>
          {carrito.length === 0 ? (
            <p className="text-center">
              <br /><img src="img/carritovacio.png" alt="Carrito vacío" style={{ maxWidth: '200px', marginBottom: '20px' }} /><br /><br /><br /> 
             </p>
          ) : (
            <>
              <ul className="list-group">
                {carrito.map((producto) => (
                  <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: '100px', marginRight: '20px' }} />
                      <span>{producto.nombre}</span>
                    </div>
                    <div>
                      <span className="badge bg-primary rounded-pill">S/. {(producto.precio * producto.cantidad).toFixed(2)}</span>
                      <button className="btn btn-danger ms-3" onClick={() => handleShowModal(producto)}>Eliminar</button>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-3">Total: <span className="badge bg-success">S/. {calcularTotal().toFixed(2)}</span></p>
              <button className="btn btn-primary" onClick={confirmarPedido}>Confirmar Pedido</button>
            </>
          )}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Acción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro que desea eliminar este producto del carrito?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleEliminarProducto}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CarritoCompras;
