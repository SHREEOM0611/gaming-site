import React from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Slider from "./components/Slider/Slider.jsx";

import Login from "./components/Login/Login.jsx";
import Signin from "./components/Signin/Signin.jsx";

import Collage from "./components/Collage/Collage.jsx";

import Gamepage from './components/Gamepage/Gamepage.jsx';
import TopGamers from './components/TopGamers/TopGamers.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => (
  <div className="App">

    <Navbar />
    <Slider />

    <Login />
    <Signin />

    <div className="feed">
      <h1>Feed and Videos</h1>
      <Collage />
    </div>

    <Gamepage />
    <TopGamers />
  </div>
);

export default App;
