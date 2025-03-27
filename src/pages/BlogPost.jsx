import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { blogs } from "../data/blogs";
import TableOfContents from "../components/TableOfContents";
import ScrollToTopButton from "../components/ScrollToTopButton";

const BlogPost = () => {
    const { slug } = useParams();
    const blog = blogs.find(blog => blog.slug === slug);
    const [headings, setHeadings] = useState([]);

    if (!blog) {
        return <p>Blog no encontrado</p>;
    }

    useEffect(() => {
        const extractedHeadings = [];
        const markdownContent = blog.content;
        const regex = /^(#{1,4})\s(.+)$/gm;
        let match;
        let counter = 0;
        while ((match = regex.exec(markdownContent)) !== null) {
            const level = match[1].length;
            const text = match[2];
            const id = text.toLowerCase().replace(/\s+/g, "-");
            extractedHeadings.push({ id, text, level, counter: level === 2 ? ++counter : null });
        }
        setHeadings(extractedHeadings);
    }, [blog.content]);

    return (
        <div className="mx-auto my-8 px-4 md:px-6 md:p-4 md:shadow md:rounded-lg">
            <div className="md:max-w-4xl md:mx-auto md:p-6 md:rounded-lg md:shadow-md prose">
                <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
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
                        p: ({ node, ...props }) => <p className="text-base leading-relaxed mb-4" {...props} />, 
                        ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />, 
                        ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4" {...props} />, 
                        li: ({ node, ...props }) => <li className="mb-1" {...props} />, 
                        a: ({ href, children, ...props }) => {
                            if (href.startsWith("/")) {
                                return <Link to={href} className="text-blue-600 hover:underline" {...props}>{children}</Link>;
                            }
                            return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" {...props}>{children}</a>;
                        }
                    }}
                >
                    {blog.content}
                </ReactMarkdown>
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default BlogPost;




