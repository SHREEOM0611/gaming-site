import React from "react";
import "./TopGamers.css";
import img1 from '../../images/top_gamers1.png';
import img2 from '../../images/top_gamers2.png';
import img3 from '../../images/top_gamers3.png';
import img4 from '../../images/top_gamers4.png';
import {useEffect, useState } from 'react';





const TopGamers = () => {
 
  const [allGamers, setallGamers]=useState(null)
  
  useEffect(()=>{
    const fetchGamers = async ()=>{
         const response = await fetch('http://localhost:4000/api/gamers')
  const json = await response.json()
  
  if(response.ok){
  setallGamers(json)
  console.log("everything is ok")
  console.log(json)
  }
  
    }
  
    fetchGamers()
  
  },[])
  return (
  <div className="TopGamers">
        <h1>TOP COD GAMERS</h1>


        <div className="gamecard_container">
          
          
           {allGamers && allGamers.map((allGamer)=>{
            {/* <div className="gamerCard">  */}
              {/* <div className="content"> */}
              {/* <img src={img1}/>  */}

              {/* <div className="gamerDetails"> */}
              <p key= {allGamer._id}> {allGamer.name} </p>
              {/* </div> */}
              {/* </div>             */}
        {/* </div> */}
             

           })}




        <div className="gamerCard"> 
              <div className="content">
              <img src={img1}/> 
              <div className="gamerDetails">
              <p className="name"> Bryan Zhelyazkov </p>
              <div className="origin">
              <p > Country: USA</p>
              <p > Rating : 1</p>
              </div>
              
              <p className="champion">World Championship: 2016, 2018</p>
              </div>
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
)};

export default TopGamers;