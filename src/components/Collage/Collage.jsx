import React from "react";
import { Link } from 'react-router-dom'
import i1 from "./mobile_games3.png";
import i2 from "./mobile_games4.png";
import i3 from "./mobile_games5.jpg";
import i4 from "./mobile_games10.jpg";
import i5 from "./mobile_games6.jpg";
import i6 from "./mobile_games7.jpg";
import i7 from "./mobile_games_11.jpg";
import i8 from "./mobile_games9.jpg";

import './Collage.css';

const Collage = () => {

    return (
        <div class="collage">
            <h1>Top Mobile Games</h1>
            <div class="top">
                <a href='https://www.angrybirds.com/' target="_blank" rel="noopener noreferrer">
                    <div class="collageImage" id="mobileGame-1">
                        <img src={i1} alt="game1" />
                    </div>
                </a>
                <a href='https://supercell.com/en/games/clashofclans/' target="_blank" rel="noopener noreferrer">
                    <div class="collageImage" id="mobileGame-2">
                        <img src={i2} alt="game2" />
                    </div>
                </a>
                <a href='https://ludoking.com/' target="_blank" rel="noopener noreferrer">
                    <div class="collageImage" id="mobileGame-3">
                        <img src={i3} alt="game3" />
                    </div>
                </a>
            </div>
            <div class="middle" id="middleCollage">
                <a href='https://play.google.com/store/apps/details?id=com.skgames.trafficrider' target="_blank" rel="noopener noreferrer">
                    <div class="middleCollageImage" id="mobileGame-7">
                        <img src={i7} alt="game7" />
                    </div>
                </a>
                <a href='https://templerunner2.com/' target="_blank" rel="noopener noreferrer">
                    <div class="middleCollageImage" id="mobileGame-8">
                        <img src={i8} alt="game8" />
                    </div>
                </a>
            </div>
            <div class="bottom">
                <a href='https://subwaysurfers.com/' target="_blank" rel="noopener noreferrer">
                    <div class="collageImage" id="mobileGame-4">
                        <img src={i4} alt="game4" />
                    </div>
                </a>
                <a href='https://www.callofduty.com/mobile' target="_blank" rel="noopener noreferrer">
                    <div class="collageImage" id="mobileGame-5">
                        <img src={i5} alt="game5" />
                    </div>
                </a>
                <a href='https://asphaltlegends.com/' target="_blank" rel="noopener noreferrer">
                    <div class="collageImage" id="mobileGame-6">
                        <img src={i6} alt="game65" />
                    </div>
                </a>
            </div>


        </div>





    );
}

export default Collage;