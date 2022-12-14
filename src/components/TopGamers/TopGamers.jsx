import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./TopGamers.css";

const TopGamers = () => {
  const [allGamers, setallGamers] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/gamers")
      .then((res) => setallGamers(res.data))
      .catch((error) => console.log(error));

    //     const fetchVideos= async()=>{
    //         const response= await fetch('/api/videos')
    //         const json= await response.json()
    //         if(response.ok){
    //           setallVideos(json)
    //           console.log("everything is okay. all videos has been fetched")
    //           console.log(json)
    //         }
    //       }
    //    fetchVideos()
  }, []);
  return (
    <div className="TopGamers">
      <h1>TOP COD GAMERS</h1>
      <div className="gamecard_container">
        {allGamers &&
          allGamers.map((allGamers) => (
            <div key={allGamers._id} className="gamerCard">
              {/* <Link to='/bryan'> */}

                <div className="content">
                  <img src={allGamers.image} />
                  <div className="gamerDetails">
                    <p className="name" >
                      {allGamers.name}
                    </p>
                    <div className="origin">
                      <p > Country: {allGamers.country}</p>
                      <p > Rating : {allGamers.rating}</p>
                    </div>

                    <p className="champion">
                      World Championship: {allGamers.World_Championship}
                    </p>
                  </div>
                </div>
              {/* </Link> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopGamers;
