import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

console.log(blogs);  // Revisa si aquí hay datos

function Blog() {
  return (
    <div className="container">
      <h1>Blog de Café y Gastronomía</h1>
      <div className="blog-list">
        {blogs && blogs.length > 0 ? (
          blogs.map(blog => 
            <BlogCard 
              key={blog.id} 
              tittle={blog.title}
              content={blog.content} />)
        ) : (
          <p>No hay blogs disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Blog;
