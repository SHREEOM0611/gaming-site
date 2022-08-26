import React from "react";
import "./TopGamers.css";
import img1 from '../../images/top_gamers1.png';
import img2 from '../../images/top_gamers2.png';
import img3 from '../../images/top_gamers3.png';
import img4 from '../../images/top_gamers4.png';


const TopGamers = () => (
  <div className="TopGamers">
        <h1>TOP COD GAMERS</h1>
        <div className="gamecard_container">
        <div className="gamerCard"> 
              <div className="content">
              <img src={img1}/> 
              </div>            
        </div>

            <div className="gamerCard"> 
              <div className="content">
              <img src={img2}/> 
              </div>            
            </div>

            <div className="gamerCard"> 
              <div className="content">
              <img src={img3}/> 
              </div>            
            </div>

            <div className="gamerCard"> 
              <div className="content">
              <img src={img4}/> 
              </div>            
            </div>
            </div>

  </div>
);

export default TopGamers;