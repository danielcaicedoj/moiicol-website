import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Iconos de hamburguesa y cierre

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-yellow-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl">
          Moiicol
        </Link>

        {/* Botón de menú para móviles */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menú de navegación */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-yellow-600 md:bg-transparent text-center md:text-left`}
        >
          <Link to="/" className="block text-white hover:text-sky-300 p-4 border-b md:border-none" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/about" className="block text-white hover:text-sky-300 p-4 border-b md:border-none" onClick={closeMenu}>
            Acerca
          </Link>
          <Link to="/blog" className="block text-white hover:text-sky-300 p-4 border-b md:border-none" onClick={closeMenu}>
            Blog
          </Link>
          <Link to="/contact" className="block text-white hover:text-sky-300 p-4 border-b md:border-none" onClick={closeMenu}>
            Productos
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


