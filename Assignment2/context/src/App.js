// App.js
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
