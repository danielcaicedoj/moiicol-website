import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const NewsCard = ({id, title, content }) => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            <Link to={`/blog/${id}`} className="text-blue-500 hover:underline">
                Ir a comprar →
            </Link>
        </div>
    );
};

export default NewsCard;