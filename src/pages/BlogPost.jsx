import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { blogs } from "../data/blogs";

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogs.find( blog => blog.id === parseInt(id) );

    if (!blog){
        return <p>Blog no encontrado</p>;
    }

    return (
        <div className="container mx-auto my-8 px-6 bg-white p-2 shadow rounded-lg">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md prose">
                <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-3xl font-semibold mt-6 mb-4" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-2xl font-medium mt-5 mb-4" {...props} />,
                        h4: ({node, ...props}) => <h4 className="text-xl font-medium mt-5 mb-4" {...props} />,
                        p: ({node, ...props}) => <p className="text-base leading-relaxed mb-4" {...props} />
                    }}
                >
                    {blog.content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default BlogPost;