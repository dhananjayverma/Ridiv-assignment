import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import AboutPage from './components/AboutPage';
import Navigation from './components/Navigation';
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<BlogPost />} />
           <Route path="/about/:id" element={<AboutPage />} /> 
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;


