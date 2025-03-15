// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <h1>Efe's Cakes</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link text-white">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-white">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link text-white">Our Cakes</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
