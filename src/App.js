import React from 'react';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import ProductHome from './components/ProductHome';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      Welcome 
      <div>
        <Link to="/">Home</Link> {' '}
        <Link to="about">About</Link> {' '}
        <Link to="products">Products</Link>{' '}
        <Link to="products/mobile">Mobile</Link>{' '}
        <Link to="products/laptop">Laptop</Link>{' '}
        <button onClick={() => {
          navigate('/about');
        }}>
          About Us
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} >
          <Route path="/" element={<ProductHome />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
