import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
);

export default App;
