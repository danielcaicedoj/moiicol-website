import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a className="text-xl font-bold" href="/">Moii</a>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-6">
          <a className="hover:underline" href="/">Inicio</a>
          <a className="hover:underline" href="/blog">Blog</a>
          <a className="hover:underline" href="/contacto">Contacto</a>
        </div>

        {/* Botón Menú Móvil */}
        <button
          className="md:hidden shadow-md focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 mt-4">
          <a className="hover:underline" href="/">Inicio</a>
          <a className="hover:underline" href="/blog">Blog</a>
          <a className="hover:underline" href="/contacto">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
