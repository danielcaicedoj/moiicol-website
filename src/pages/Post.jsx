import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

function Post() {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) return <p>Post no encontrado</p>;

  return (
    <div className="post-container">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
    </div>
  );
}

export default Post;
