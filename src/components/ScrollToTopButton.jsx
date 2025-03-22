import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    // Mostrar el botón solo cuando el usuario haya hecho scroll hacia abajo
    const checkScrollPosition = () => {
        if (window.scrollY > 300) { // Muestra el botón después de hacer scroll 300px
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // Usamos el hook useEffect para escuchar el evento de scroll
    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);

        return () => {
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    // Función para hacer scroll hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Desplazamiento suave
        });
    };

    return (
        showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-3 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-300 transition duration-300"
                title="Volver al inicio"
            >
                ↑
            </button>
        )
    );
};

export default ScrollToTopButton;
