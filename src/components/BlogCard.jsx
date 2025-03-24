import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogCard = ({slug, title, content }) => {
    return (
        <div className="md:max-w-4xl md:mx-auto md:bg-white md:p-6 md:rounded-lg md:shadow-md">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            <Link to={`/blog/${slug}`} className="text-blue-500 hover:underline">
                Leer más →
            </Link>
        </div>
    );
};

export default BlogCard;
