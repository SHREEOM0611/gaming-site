import React from "react";
import "./TopVideo.css";



const TopVideo = () => (
  <div className="TopVideo">
        <h1>TOP VIDEO STREAMS</h1>
        <div className="video_container">
        <div className="videoCard"> 
        {/* <video className="app__gamepage_video"  controls>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KASapd_VTEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        
     </video>              */}
     <iframe width="560" height="315" src="https://www.youtube.com/embed/KASapd_VTEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <p className="video_title">Sniper Progress from Day 1 to Day 30 using Sniper in Cod Mobile! Here is the results!</p>
       
     <div className="video_details">
     <p className="video_owner">Jokesta</p>
        <p className="views">Views: 2,207,163</p>
        </div>
        </div>
        

            <div className="videoCard"> 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oz_HleeBhnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
            <p className="video_title">STREAMERS GETTING BANNED FOR HACKING - Valorant Best WTF & Funny Moments</p>
         
            <div className="video_details">
            <p className="video_owner">Valorant Master</p>
            <p className="views">Views: 715,343</p>
            </div>
            </div>
            
           

            <div className="videoCard"> 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jwerp2SNiTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
           <p className="video_title">32 Kill Solo Squads!! Fortnite Battle Royale Gameplay - Ninja</p>
           
           <div className="video_details">
           <p className="video_owner">Ninja</p>
           <p className="views">Views: 48,942,663</p>
           </div>
           
            </div>

            <div className="videoCard"> 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kThTXog88Ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     
          
          
           <p className="video_title">shroud | PUBG SOLO | 23 Kills | M416+Kar98k | July 16</p>
           
           <div className="video_details">
           <p className="video_owner"> Squad Arena</p>
           <p className="views">Views: 18,489,848</p>
           </div>
            </div>
            </div>

  </div>
);

export default TopVideo;