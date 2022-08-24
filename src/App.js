import React from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Slider from "./components/Slider/Slider.jsx";

import Login from "./components/Login/Login.jsx";
import Signin from "./components/Signin/Signin.jsx";

import Collage from "./components/Collage/Collage.jsx";

import Gamepage from './components/Gamepage/Gamepage.jsx';


import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Slider />

    <Login />
    <Signin />

    <div className="feed">
      <h1>Feed and Videos</h1>
      <Collage />
    </div>

    <Gamepage />
  </div>
);

export default App;
