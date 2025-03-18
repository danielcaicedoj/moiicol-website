import BlogCard from "../components/BlogCard";

const Home = () => {
    const blogs = [
        { title: "Blog 1", content: "Contenido del blog 1..." },
        { title: "Blog 2", content: "Contenido del blog 2..." },
        { title: "Blog 3", content: "Contenido del blog 3..." },
        { title: "Blog 4", content: "Contenido del blog 4..." }
    ];

    return (
        <div className="container mx-auto my-8 px-4">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Moii, tu sitio cafetero de confianza</h2>
                <p className="text-gray-700">¡Revisa nuestra sección de blogs!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} title={blog.title} content={blog.content} />
                ))}
            </div>
        </div>
    );
};

export default Home;
