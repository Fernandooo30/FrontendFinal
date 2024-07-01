import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetalleProducto.css'; // Asegúrate de crear y ajustar este archivo CSS

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [size, setSize] = useState(''); // Estado para la talla seleccionada

  useEffect(() => {
    fetch(`http://localhost:8000/api/productos/${id}/`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleSizeClick = (talla) => {
    setSize(talla);
  };

  const handleAgregarAlCarrito = () => {
    if (producto) {
      agregarAlCarrito({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1 // Puedes inicializar la cantidad como desees
      });
    }
  };

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="producto-detalle">
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
        <p className="precio">Precio: S/. {producto.precio}</p>
        <p className="stock">Stock: {producto.stock}</p>
        <p className="disponible">Disponible: {producto.disponible ? 'Sí' : 'No'}</p>
        <p className="marca">Marca: {producto.marca}</p>
        <p className="colores">Colores: {producto.colores}</p>
        <p className="especificaciones">Especificaciones:</p>
        <ul>
          {producto.especificaciones && producto.especificaciones.map((especificacion, index) => (
            <li key={index}>{especificacion}</li>
          ))}
        </ul>
        <div className="tallas">
          <label>Talla:</label>
          <ul className="list-inline">
            {['S', 'M', 'L', 'XL'].map(s => (
              <li className="list-inline-item" key={s}>
                <span
                  className={`btn btn-danger btn-size ${size === s ? 'active' : ''}`}
                  onClick={() => handleSizeClick(s)}
                >
                  {s}
                </span>
              </li>
            ))}
          </ul>
          <select value={size} onChange={(e) => handleSizeClick(e.target.value)}>
            {producto.tallas && producto.tallas.map((talla, index) => (
              <option key={index} value={talla}>{talla}</option>
            ))}
          </select>
        </div>
        <div className="cantidad">
          <label>Cantidad:</label>
          <input type="number" min="1" defaultValue="1" />
        </div>
        <div className="row pb-3">
          <div className="col d-grid">
            <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Comprar</button>
          </div>
          <div className="col d-grid">
            <button type="submit" className="btn btn-danger btn-lg" name="submit" value="addtocart" onClick={handleAgregarAlCarrito}>Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
