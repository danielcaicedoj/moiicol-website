import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { blogs } from "../data/blogs";
import TableOfContents from "../components/TableOfContents";
import ScrollToTopButton from "../components/ScrollToTopButton";

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));
    const [headings, setHeadings] = useState([]);

    if (!blog) {
        return <p>Blog no encontrado</p>;
    }

    // Extraer los títulos antes del renderizado
    useEffect(() => {
        const extractedHeadings = [];
        const markdownContent = blog.content;

        // Usamos una expresión regular para encontrar títulos (h1, h2, h3, h4)
        const regex = /^(#{1,4})\s(.+)$/gm;
        let match;
        while ((match = regex.exec(markdownContent)) !== null) {
            const level = match[1].length; // Determina si es h1, h2, etc.
            const text = match[2];
            const id = text.toLowerCase().replace(/\s+/g, "-");
            extractedHeadings.push({ id, text, level });
        }

        setHeadings(extractedHeadings);
    }, [blog.content]); // Solo se ejecuta cuando el contenido cambia

    return (
        <div className="container mx-auto my-8 px-6 bg-white p-2 shadow rounded-lg">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md prose">
                <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>

                {/* Muestra la tabla de contenido antes del contenido */}
                {headings.length > 0 && <TableOfContents headings={headings} />}

                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({ node, ...props }) => {
                            const id = props.children.toString().toLowerCase().replace(/\s+/g, "-");
                            return <h1 id={id} className="text-4xl font-bold mt-8 mb-4" {...props} />;
                        },
                        h2: ({ node, ...props }) => {
                            const id = props.children.toString().toLowerCase().replace(/\s+/g, "-");
                            return <h2 id={id} className="text-3xl font-semibold mt-6 mb-4" {...props} />;
                        },
                        h3: ({ node, ...props }) => {
                            const id = props.children.toString().toLowerCase().replace(/\s+/g, "-");
                            return <h3 id={id} className="text-2xl font-medium mt-5 mb-4" {...props} />;
                        },
                        h4: ({ node, ...props }) => {
                            const id = props.children.toString().toLowerCase().replace(/\s+/g, "-");
                            return <h4 id={id} className="text-xl font-medium mt-5 mb-4" {...props} />;
                        },
                        p: ({ node, ...props }) => <p className="text-base leading-relaxed mb-4" {...props} />
                    }}
                >
                    {blog.content}
                </ReactMarkdown>
            </div>
            {/* El botón para volver al inicio */}
            <ScrollToTopButton />
        </div>
    );
};

export default BlogPost;




