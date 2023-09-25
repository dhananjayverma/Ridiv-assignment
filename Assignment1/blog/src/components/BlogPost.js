import { useParams, Link, useNavigate } from 'react-router-dom';
import blogPosts from '../data';
import '../Styles/BlogPost.css'; 

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div className="container2">
      <h1 className="title">Title: {post.title}</h1>
      <p className="blog-content">{post.content}</p>
      <div className="button-container">
        
        <Link to="/" className="go-back-button">
          Go Back
        </Link>
        <button onClick={() => navigate(`/about/${id}`)} className="about-button">
          About this page
        </button>
      </div>
    </div>
  );
}

export default BlogPost;




