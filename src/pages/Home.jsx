// src/components/Contact.jsx
import React from 'react';
import BlogCard from "../components/BlogCard";
import NewsHeader from '../components/NewsHeader';

const Home = () => {
    const blogs = [
        { title: "Blog 1", content: "Contenido del blog 1..." },
        { title: "Blog 2", content: "Contenido del blog 2..." },
        { title: "Blog 3", content: "Contenido del blog 3..." },
        { title: "Blog 4", content: "Contenido del blog 4..." }
    ];

    return (
        <div className="container mx-auto my-8 px-4">
            <NewsHeader />
        </div>
    );
};

export default Home;
