// src/App.js
// Main application component handling routing and layout.

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import NotFound from './components/NotFound';

function App() {
  return (
    // Using a flex container to keep the footer at the bottom when content is short.
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
