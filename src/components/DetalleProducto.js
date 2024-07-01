import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './DetalleProducto.css'; 

const DetalleProducto = ({ agregarAlCarrito }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [size, setSize] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/api/productos/${id}/`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleSizeClick = (talla) => {
    setSize(talla);
  };

  const handleCantidadChange = (event) => {
    setCantidad(parseInt(event.target.value));
  };

  const handleAgregarAlCarrito = () => {
    if (!producto) return;

    const productoAAgregar = {
      id: producto.id,
      nombre: producto.nombre,
      precio: parseFloat(producto.precio),
      cantidad: cantidad,
      talla: size,
      imagen: producto.imagen 
    };

    let carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoActual.push(productoAAgregar);
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    
    window.location.href = '/carrito';
  };

  const handleShowModal = () => {
    if (size === '') {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmAddToCart = () => {
    handleAgregarAlCarrito();
    setShowModal(false);
  };

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="producto-detalle">
      <div className="mb-3">
        <Link to="/tienda" className="btn btn-primary btn-md text-light">
          Volver a la tienda
        </Link>
      </div>

      <div className="imagen">
        <img
          className="card-img img-fluid"
          src={producto.imagen}
          alt={producto.nombre}
        />
      </div>
      <div className="informacion">
        <h2>{producto.nombre}</h2>
        <p className="descripcion">{producto.descripcion}</p>
        <p className="precio">Precio: S/. {parseFloat(producto.precio).toFixed(2)}</p> 
        <p className="stock">Stock: {producto.stock}</p>
        <p className="disponible">Disponible: {producto.disponible ? 'Sí' : 'No'}</p>
        <div className="tallas">
          <label>Tallas:</label>
          <ul className="list-inline">
            {['S', 'M', 'L', 'XL'].map(talla => (
              <li key={talla} className="list-inline-item">
                <span
                  className={`btn btn-danger btn-size ${size === talla ? 'active' : ''}`}
                  onClick={() => handleSizeClick(talla)}
                >
                  {talla}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {showAlert && <div className="alert alert-danger mt-3">Por favor, selecciona una talla.</div>}
        <div className="cantidad">
          <label>Cantidad:</label>
          <input type="number" min="1" value={cantidad} onChange={handleCantidadChange} />
        </div>
        <div className="row pb-3">
          <div className="col d-grid">
            <button type="button" className="btn btn-success btn-lg" onClick={handleShowModal}>Añadir al carrito</button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Acción</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Desea añadir el {producto.nombre} al carrito?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirmAddToCart}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetalleProducto;
