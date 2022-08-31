import React from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Slider from "../components/Slider/Slider.jsx";

// import Login from "../components/Login/Login.jsx";
// import Signin from "../components/Signin/Signin.jsx";

import Collage from "../components/Collage/Collage.jsx";

import Gamepage from '../components/Gamepage/Gamepage.jsx';
import TopGamers from '../components/TopGamers/TopGamers.jsx';
import TopVideo from '../components/TopVideo/TopVideo.jsx';
import GamingProfile from '../components/GamingProfile/GamingProfile.jsx';




// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home">

      <Navbar />
      <Slider />



      <div className="feed">
      
      <Collage />
    </div>

      <Gamepage />
      <TopGamers />
      <TopVideo />
      <GamingProfile />
      {/* <Login />
    <Signin /> */}
    </div>
  );
}

export default Home;
