import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data';
import '../Styles/AboutPage.css'; 

function AboutPage() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div className="container1 error-message">Post not found</div>;
  }

  return (
    <div className="container1">
      <h1 className="about-title">About</h1>
      <div className="about-content">
        <p className="about-text">About: {post.about}</p>
        <p className="author">Author: {post.author}</p>
      </div>
      <Link to="/" className="back-to-home-link">
  &larr; Back to Homepage
</Link>

    </div>
  );
}

export default AboutPage;

