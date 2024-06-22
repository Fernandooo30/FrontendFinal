import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/header';
import Footer from './components/footer';
import ProductList from './components/prenda';
import ProductDetail from './components/producto';
import DetalleProducto from './components/DetalleProducto'; 

import Login from './components/Login';
import Registro from './components/registro';
import Inicio from './components/paginainicio';
import Carousel from './components/carrousel';
import PopularCategories from './components/maspedidos';
import FeaturedProducts from './components/destacados';
import AboutUs from './components/nosotros';
import OurBrands from './components/marcas';
import Contactos from './components/contacto';
import CarritoCompras from './components/carrito';
import Pagar from './components/pagar';
import Perfil from './components/perfil';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/login" element={<><Login /><br /></>} />
        <Route path="/registro" element={<><Registro /><br /></>} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/index" element={
          <>
            <Navbar />
            <Carousel />
            <PopularCategories />
            <FeaturedProducts />
            <Footer />
          </>
        } />
        <Route path="/sobrenosotros" element={
          <>
            <Navbar />
            <AboutUs />
            <OurBrands />
            <Footer />
          </>
        } />
        <Route path="/tienda" element={
          <>
            <Navbar />
            <ProductList />
            
            <Footer />
          </>
        } />
        <Route path="/producto" element={
          <>
            <Navbar />
            <ProductDetail />
            
            <Footer />
          </>
        } />
        <Route path="/tienda" element={<ProductList />} />
        <Route path="/producto" element={<ProductDetail />} />
        <Route path="/producto/:id" element={
          <>
            <Navbar />
            <br />
            <br />

            <DetalleProducto />   
            <br />
            <br />
         
            <Footer />
          </>
        } />{/* Ruta para DetalleProducto con ID dinámico */}
        <Route path="/contacto" element={
          <>
            <Navbar />
            <Contactos />
            <Footer />
          </>
        } />
        <Route path="/carrito" element={
          <>
            <Navbar />
            <CarritoCompras />
            <br />
            <br />

            <Footer />
          </>
        } />
        <Route path="/perfil" element={
          <>
            <Navbar />
            <Perfil />
            <br />
            <br />
            
            <Footer />
            
          </>
        } />
        <Route path="/pagar" element={<Pagar />} />
      </Routes>
    </Router>
  );
}

export default App;
