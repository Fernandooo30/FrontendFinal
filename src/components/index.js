import React from 'react';
import { createRoot } from 'react-dom';
import Navbar from './header';
import Carousel from './carrousel';
import PopularCategories from './maspedidos';
import FeaturedProducts from './destacados';
import Footer from './footer';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />
    <Carousel />
    <PopularCategories />
    <FeaturedProducts />
    <Footer />
  </React.StrictMode>
);