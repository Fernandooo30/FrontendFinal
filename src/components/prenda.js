import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ProductList.css';  // Asegúrate de crear este archivo CSS

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/productos/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center"> {/* Centramos la fila */}
        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-inline shop-top-menu pb-3 pt-1">
                <li className="list-inline-item">
                  <span className="h3 text-dark text-decoration-none mr-3">Ropa para Hombre y Mujer</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row justify-content-center"> {/* Centramos el contenido */}
            {products.map(product => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card product-card h-100">
                  <div className="image-container">
                    <Image className="card-img-top" src={product.imagen} alt={product.nombre} />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center"> {/* Centramos el contenido de la tarjeta */}
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text">{product.descripcion}</p>
                    <p className="card-text">S/. {product.precio}</p>
                    <Link to={`/producto/${product.id}`} className="btn btn-primary">Ver detalles</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
