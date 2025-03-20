import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6 pt-8 shadow-md">
      <div className="container mx-auto flex flex-col items-center">
        <ul className="flex space-x-6 mb-4">
          <li><Link to="/home" className="text-gray-600 hover:text-gray-900">Inicio</Link></li>
          <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blogs</Link></li>
          <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contacto</Link></li>
          <li><Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQs</Link></li>
        </ul>
        <p className="text-gray-600">© 2025 Moii, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
