import React from 'react';
import './Slider.css';

// import abcd from '../../images/apex_slider.png';

import slider1 from '../../images/apex_slider.png';
import slider2 from '../../images/cod_slider1.png';
import slider3 from '../../images/fortnite_slider1.jpg';
import slider4 from '../../images/specOps_slider.jpg';
import slider5 from '../../images/valorant_slider1.jpg';







const Slider=()=> (
   
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
      <img src={slider1} class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item">
        <img src={slider2} class="d-block w-100" alt="apex_slider.png"/>
      </div>
      <div class="carousel-item">
        <img src={slider3} class="d-block w-100" alt="fortnite_slider1.jpg"/>
      </div>
      <div class="carousel-item">
        <img src={slider4} class="d-block w-100" alt="fortnite_slider1.jpg"/>
      </div>
      <div class="carousel-item">
        <img src={slider5} class="d-block w-100" alt="fortnite_slider1.jpg"/>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> 
  
    )
  
  export default Slider;
  