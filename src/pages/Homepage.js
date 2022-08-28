import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider.jsx";

// import Login from "../components/Login/Login.jsx";
// import Signin from "../components/Signin/Signin.jsx";

// import Collage from "./components/Collage/Collage.jsx";

import Gamepage from '../components/Gamepage/Gamepage.jsx';
import TopGamers from '../components/TopGamers/TopGamers.jsx';
import TopVideo from '../components/TopVideo/TopVideo.jsx';



// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";

const HomePage = () => (
    <div className="homePage">

        <Navbar />
        <Slider />



        {/* <div className="feed">
      <h1>Feed and Videos</h1>
      <Collage />
    </div> */}

        <Gamepage />
        <TopGamers />
        <TopVideo />

        {/* <Login /> */}
        {/* <Signin /> */}


    </div>
);

export default HomePage;
