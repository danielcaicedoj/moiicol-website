import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
    const basename = import.meta.env.REACT_APP_BASENAME; // Usa import.meta.env
    return (
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }


  export default App;
