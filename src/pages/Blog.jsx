// src/components/Contact.jsx
import React from 'react';
import BlogCard from "../components/BlogCard";
import NewsHeader from '../components/NewsHeader';


const Blog = () => {
    const blogs = [
        { title: "Blog 1", content: "Contenido del blog 1..." },
        { title: "Blog 2", content: "Contenido del blog 2..." },
        { title: "Blog 3", content: "Contenido del blog 3..." },
        { title: "Blog 4", content: "Contenido del blog 4..." }
    ];

    return (
        <div className="container mx-auto my-8 px-4">
            <NewsHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} title={blog.title} content={blog.content} />
                ))}
            </div>
        </div>
    );
};

export default Blog;