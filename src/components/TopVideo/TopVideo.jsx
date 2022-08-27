import React, { useEffect ,useState} from "react";
import "./TopVideo.css";

const TopVideo = () => {
  const [allVideos, setallVideos]= useState(null)
  useEffect(()=>{
                const fetchVideos= async()=>{
                    const response= await fetch('/api/videos')
                    const json= await response.json()
                    if(response.ok){
                      setallVideos(json)
                      console.log("everything is okay. all videos has been fetched")
                      console.log(json)
                    }
                  }
               fetchVideos()  
            },[])
 return(
        <div className="TopVideo">
                <h1>TOP VIDEO STREAMS</h1>
                <div className="video_container">
                    {allVideos && allVideos.map((allVideos)=>(
                      <div className="videoCard">                   
                          <iframe key={allVideos._id} width="560" height="315" src={allVideos.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen></iframe>
                          <p key={allVideos._id} className="video_title">{allVideos.title}</p>
                            
                          <div className="video_details">
                          <p key={allVideos._id} className="video_owner">{allVideos.owner}</p>
                            <p key={allVideos._id} className="views">Views: {allVideos.views}</p>
                            </div>
                            </div>
                    ))}
                </div>
          </div>

 )};

export default TopVideo;