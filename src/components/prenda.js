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
      <div className="row">
        <div className="col-lg-3">
          <h1 className="h2 pb-4">Categorías</h1>
          <ul className="list-unstyled templatemo-accordion">
            <li className="pb-3">
              <button className="collapsed d-flex justify-content-between h3 text-decoration-none" data-bs-toggle="collapse" data-bs-target="#generoCollapse">
                Género
                <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
              </button>
              <ul id="generoCollapse" className="collapse list-unstyled pl-3">
                <li><button className="text-decoration-none" type="button">Hombre</button></li>
                <li><button className="text-decoration-none" type="button">Mujer</button></li>
              </ul>
            </li>
            <li className="pb-3">
              <button className="collapsed d-flex justify-content-between h3 text-decoration-none" data-bs-toggle="collapse" data-bs-target="#tipoCollapse">
                Tipo
                <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
              </button>
              <ul id="tipoCollapse" className="collapse list-unstyled pl-3">
                <li><button className="text-decoration-none" type="button">Deportivo</button></li>
                <li><button className="text-decoration-none" type="button">Casual</button></li>
              </ul>
            </li>
            <li className="pb-3">
              <button className="collapsed d-flex justify-content-between h3 text-decoration-none" data-bs-toggle="collapse" data-bs-target="#prendaCollapse">
                Prenda
                <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
              </button>
              <ul id="prendaCollapse" className="collapse list-unstyled pl-3">
                <li><button className="text-decoration-none" type="button">Polo</button></li>
                <li><button className="text-decoration-none" type="button">Pantalón</button></li>
                <li><button className="text-decoration-none" type="button">Polera</button></li>
              </ul>
            </li>
          </ul>
        </div>

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

          <div className="row">
            {products.map(product => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card product-card h-100">
                  <div className="image-container">
                    <Image className="card-img-top" src={product.imagen} alt={product.nombre} />
                  </div>
                  <div className="card-body">
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
