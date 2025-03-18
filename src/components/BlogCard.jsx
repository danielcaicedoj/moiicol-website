const BlogCard = ({ title, content }) => {
    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default BlogCard;
