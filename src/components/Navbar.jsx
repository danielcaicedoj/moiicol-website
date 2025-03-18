import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          Moiicol
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Inicio
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            Acerca
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white">
            Servicios
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;