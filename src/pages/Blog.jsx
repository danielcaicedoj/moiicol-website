import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

function Blog() {
  return (
    <div className="container mx-auto my-8 px-4">
        <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Aprende sobre café en nuestro blog</h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs && blogs.length > 0 ? (
          blogs.map(blog => 
            <BlogCard 
              key={blog.id}
              slug = {blog.slug} 
              title={blog.title}
              content={blog.content.substring(0,250)+" ..."} />)
        ) : (
          <p>No hay blogs disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Blog;
