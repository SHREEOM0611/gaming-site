import React from 'react'

import './GamingProfile.css'

import img1 from '../../images/fortnite_slider1.jpg';
import img2 from '../../images/top_gamers3.png';
import game1 from './pic1.jpg';
import game2 from './pic2.jpg';
import game3 from './pic3.jpg';
import game4 from './pic4.jpg';



const GamingProfile=()=>(

<div className='GamingProfile'>
<div className='profile_background_pic'>
    <img src={img1} />
</div>

<div className='profile'>
   <div className='profile_pic'>
   <img className=' my_image' src={img2}></img>
    <div className='profile_name'>
        <h2>Bryan Zhelyazkov</h2>
        <p>Followers: 25,000</p>
    </div>
   </div>
    
    <div className='about'>
        <div className='about_description'>
        <h1>About</h1>
            <p> Apathy has enjoyed a decorated decade-long career that has been punctuated with big wins, two World Championships, and a considerable prize pool claim. Although he found his feet in competitive Halo, Apathy made the transition to Call of Duty amidst the Modern Warfare 2 era. However, it was during the Black Ops and Black Ops 2 windows that Apathy really started making a name for himself.
            <br/>
            <br/>
                Within a few short years, Apathy had played for the likes of Strictly Business, Kaliber, FaZe, and Envy, and he was well on his way to greatness. Although he wasn’t picking up as many major victories as his peers, he remained a fantastic contender regardless and grabbed a World Championship in both 2016 and 2018. It’s estimated that Apathy has taken home more than half a million dollars in prize money over the course of his career.
                <br/>
                <br/>

                After playing with Seattle Surge in the inaugural season of the Call of Duty League, Apathy transitioned to the LA Guerrillas for the second season. However, as of 2021, Apathy is retired from competitive Call of Duty, following an expansive and successful career. At 27 years old, he withdrew from competing to pursue other passions, such as streaming.
                <br/>
                <br/>
                <a href="https://www.twitch.tv/apathy" target="_blank">Watch Apathy on Twitch</a></p>
        </div>

        <div className="about_details">
          <h3>Background Information</h3>
          <p>Country: USA</p>
          <p>Games: Call of Duty, Halo  </p>
          <p>Birth Date: April 15, 1994</p>
          <p>World Championship: 2016, 2018</p>
          <p>Current Team: LA Guerrillas</p>
        </div>
    </div>
    <h1 className='pictures'>Pictures</h1>
    <div className='gamer_gallery'>

  
    

                                <div className='gamer_image_card'>
                                    <img
                                            src={game2}                                            
                                            alt="Gallery image 1"
                                            class="w-100"
                                          />
                                </div>

                                <div className='gamer_image_card'>
                                    <img
                                            src={game3}
                                            alt="Gallery image 2"
                                            class="w-100"
                                          />
                                </div>

                                <div className='gamer_image_card'>
                                    <img
                                            src={game4}
                                            alt="Gallery image 3"
                                            class="w-100"
                                          />
                                </div>

                                <div className='gamer_image_card'>
                                    <img
                                            src={game1}
                                            alt="Gallery image 4"
                                            class="w-100"
                                          />
                                </div>
    

                            </div>


                        
</div>

</div>

);

export default GamingProfile;