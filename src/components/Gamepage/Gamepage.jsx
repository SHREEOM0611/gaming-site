import React from 'react';
import './Gamepage.css';
import logo from './call-of-duty.svg';
import vid from '../../video/cod1.mp4';
import cod1 from '../../images/cod_slider1.png';
import game1 from './game1.jpg';
import game2 from './game2.jpg';
import game3 from './game3.jpg';
import game4 from './game4.jpg';
import game5 from './game5.jpg';
import game6 from './game6.png';

const Gamepage=()=> (
   

    
   
  <div className='app__gamepage'>

    <h1 className="game_name">Call of Duty®: Modern Warfare® II</h1>

<div className='content'>
     <video className="app__gamepage_video"  controls>
        <source src={vid} type="video/mp4"/>  
        <source src={cod1} type="image/png"/> 
     </video>

    <div className='details'>
      <img src={game1}/>
      <div className='upper_content_details'>
        <p className='some_content'>Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.</p>
            <p className='release_date'>RELEASE DATE: 28 Oct, 2022</p>    
            <p >FPS, Action, Shooter, Multiplayer, First-person, Military, Tactical, Violent </p>

      </div>

    </div>

    



</div>

<div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
  <div class="row py-3 shadow-5">
    
    
   
    <div class="col-3 mt-1">
      <img
        src={game3}
        data-mdb-img={game3}
        alt="Gallery image 3"
        class="w-100"
      />
    </div>
    <div class="col-3 mt-1">
      <img
        src={game4}
        data-mdb-img={game4}
        alt="Gallery image 4"
        class="w-100"
      />
    </div>
    <div class="col-3 mt-1">
      <img
        src={game5}
        data-mdb-img={game5}
        alt="Gallery image 4"
        class="w-100"
      />
    </div>
    <div class="col-3 mt-1">
      <img
        src={game6}
        data-mdb-img={game6}
        alt="Gallery image 4"
        class="w-100"
      />
    </div>
  </div>
</div>


  </div>
     
  
    )

  
  export default Gamepage;
  