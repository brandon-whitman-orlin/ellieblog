import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Articles from "../pages/articles/Articles";
import DefaultArticle from "../pages/defaultarticle/DefaultArticle";

import Pagodas from "../articles/pagodas/pagodas";

import "./App.css"; // Ensure global styles are imported

const App = () => {
  return (
    <div className="app-container" style={{ minHeight: '100%', width: '100%', overflowX: 'hidden'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/defaultarticle" element={<DefaultArticle />} />

        <Route path="/articles/pagodas" element={<Pagodas />} />
      </Routes>
    </div>
  );
};

export default App;