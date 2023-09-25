import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data';
import "../Styles/HomePage.css"
function HomePage() {
  return (
    <div>
      <h1 className="page">Blog Posts</h1>
      <div className="grid-container"> 
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post"> 
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="read-more-link">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
