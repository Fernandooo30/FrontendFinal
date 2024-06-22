import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetalleProducto.css'; // Asegúrate de crear y ajustar este archivo CSS

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [size, setSize] = useState('');
  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad seleccionada

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

  const agregarAlCarrito = () => {
    if (!producto) return; // Asegurar que haya un producto cargado antes de agregar al carrito

    const productoAAgregar = {
      id: producto.id,
      nombre: producto.nombre,
      precio: parseFloat(producto.precio), // Convertir precio a número flotante si es necesario
      cantidad: cantidad,
      talla: size,
      imagen: producto.imagen 
    };

    let carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoActual.push(productoAAgregar);
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    
    
    window.location.href = '/carrito';
  };

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="producto-detalle">
      <Link to="/tienda" className="btn btn-primary btn-sm btn-custom-size mb-1">
         Volver a la tienda
      </Link>
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
        <p className="precio">Precio: S/. {parseFloat(producto.precio).toFixed(2)}</p> {/* Mostrar el precio con dos decimales */}
        <p className="stock">Stock: {producto.stock}</p>
        <p className="disponible">Disponible: {producto.disponible ? 'Sí' : 'No'}</p>
        <div className="tallas">
          <label>Tallas:</label>
          <ul className="list-inline">
            <li className="list-inline-item">
              <span
                className={`btn btn-danger btn-size ${size === 'S' ? 'active' : ''}`}
                onClick={() => handleSizeClick('S')}
              >
                S
              </span>
            </li>
            <li className="list-inline-item">
              <span
                className={`btn btn-danger btn-size ${size === 'M' ? 'active' : ''}`}
                onClick={() => handleSizeClick('M')}
              >
                M
              </span>
            </li>
            <li className="list-inline-item">
              <span
                className={`btn btn-danger btn-size ${size === 'L' ? 'active' : ''}`}
                onClick={() => handleSizeClick('L')}
              >
                L
              </span>
            </li>
          </ul>
        </div>
        <div className="cantidad">
          <label>Cantidad:</label>
          <input type="number" min="1" value={cantidad} onChange={handleCantidadChange} />
        </div>
        <div className="row pb-3">
          <div className="col d-grid">
            <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Comprar</button>
          </div>
          <div className="col d-grid">
            <button type="button" className="btn btn-danger btn-lg" onClick={agregarAlCarrito}>Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
