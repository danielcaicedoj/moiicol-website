import { blogs } from "../data/blogs";
import { blogImages } from "../data/blogImages";
import BlogCard from "../components/BlogCard";

function Blog() {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Aprende sobre café en nuestro blog</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs && blogs.length > 0 ? (
          blogs.map(blog => {
            const image = blogImages[blog.image];

            // Filtrar el contenido para remover imágenes en markdown (ej: ![alt](url))
            const cleanContent = blog.content
              .replace(/!\[.*?\]\(.*?\)/g, "") // Remueve imágenes en formato Markdown
              .replace(/\[.*?\]\(.*?\)/g, "") // Remueve enlaces
              .substring(0, 250) + " ...";

            return (
              <BlogCard
                key={blog.id}
                slug={blog.slug}
                title={blog.title}
                content={cleanContent} // Pasamos solo texto sin imágenes
                image={image}
              />
            );
          })
        ) : (
          <p>No hay blogs disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Blog;



