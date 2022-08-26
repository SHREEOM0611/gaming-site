import React from 'react';
import './Navbar.css';
import logo from '../../images/gericht.png';
import loginArrow from '../../images/loginArrow.svg';

const Navbar=()=> (
   
       <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <img src={logo}  alt="logo"/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Live Streams</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#">Top Gamers</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#">Top Mobile Games</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#">About us</a>
          </li>
  
          
   
        </ul>
       <a className="loginArrowButton" href=" ">Login</a>
      </div>
    </div>
  </nav>
     
  
    )
  
  export default Navbar;
  