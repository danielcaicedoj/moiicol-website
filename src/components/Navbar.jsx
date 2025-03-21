import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function Navbar() {
  return (
    <nav className="bg-yellow-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          Moiicol
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-sky-300">
            Inicio
          </Link>
          <Link to="/about" className="text-white hover:text-sky-300">
            Acerca
          </Link>
          <Link to="/blog" className="text-white hover:text-sky-300">
            Blog
          </Link>
          <Link to="/contact" className="text-white hover:text-sky-300">
            Productos
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;