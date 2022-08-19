import React from "react";
import Image from "./Image";
import i8 from "../../images/mobile_games2.png";
import i7 from "../../images/mobile_games3.png";
// import i8 from "../../images/logo.png";

import './Collage.css';

const Collage = () => {

    return (
        <div class="collage-grid">
            <div className="item1">
                1
            </div>
            {/* <div className="item2">
                2
            </div> */}
            <div className="item3">
                3
            </div>
            <div className="item4 target">
                4
            </div>
            <div className="item5">
                5
            </div>
            <div className="item6">
                6
            </div>
            <div className="item7">
                {/* 7 */}
                <Image source={i7} alternate="i7" gameName="angryBird" />

            </div>
            <div className="item8">
                {/* 8 */}
                <Image source={i8} alternate="i8" gameName="subwaySurfer" />
            </div>
            {/* <div className="item9">
                9
            </div> */}
            <div className="item10">
                10
            </div>
            <div className="item11">
                11
            </div>
            <div className="item12">
                12
            </div>
        </div>

        



    );
}

export default Collage;