import React,{useEffect, useState } from "react";
import "./TopGamers.css";

const TopGamers = () => {
 
  const [allGamers, setallGamers]=useState(null)
  
  useEffect(()=>{
                  const fetchGamers = async ()=>{
                     const response = await fetch('/api/gamers')
                     const json = await response.json()
  
                      if(response.ok){
                      setallGamers(json)
                      console.log("everything is ok")
                      console.log(json)
                      }else console.log("error")
                  }
                  fetchGamers()
                  },[])
  return (
            <div className="TopGamers">
              <h1>TOP COD GAMERS</h1>
              <div className="gamecard_container">
              {allGamers && allGamers.map((allGamers)=>
              (       
                  <div className="gamerCard"> 
                      <div className="content">
                      <img key={allGamers._id} src={allGamers.image}/> 
                      <div className="gamerDetails">
                      <p className="name" key={allGamers._id}> {allGamers.name} </p>
                      <div className="origin">
                      <p key={allGamers._id}> Country: {allGamers.country}</p>
                      <p key={allGamers._id}> Rating : {allGamers.rating}</p>
                      </div>
                      
                      <p className="champion">World Championship: {allGamers.World_Championship}</p>
                      </div>
                      </div>             
                  </div>
                  ) )}
               </div> 

             </div>
)};

export default TopGamers;