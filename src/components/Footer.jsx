const Footer = () => {
    return (
        <footer className="bg-white py-6 mt-8 shadow-md">
            <div className="container mx-auto flex flex-col items-center">
                <ul className="flex space-x-6 mb-4">
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Inicio</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Blogs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Contacto</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                </ul>
                <p className="text-gray-600">© 2025 Moii, Inc</p>
            </div>
        </footer>
    );
};

export default Footer;
