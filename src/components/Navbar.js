// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importa useLocation
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation(); // Obtén la ubicación actual

  return (
    <nav className="navbar navbar-expand-lg mb-4">
      <ul className="nav-list">
        <li className="nav-item">
          <button className={`btn btn-sm btn-outline-secondary ${location.pathname === '/' ? 'active' : ''}`} type="button">
            <Link to="/" className="nav-link">Home</Link>
          </button>
        </li>
        <li className="nav-item">
          <button className={`btn btn-sm btn-outline-secondary ${location.pathname === '/search' ? 'active' : ''}`} type="button">
            <Link to="/search" className="nav-link">Search</Link>
          </button>
        </li>
        {/* Añade más enlaces según sea necesario */}
      </ul>
    </nav>
  );
};

export default Navbar;
