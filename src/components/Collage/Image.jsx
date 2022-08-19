import React from "react";

const Image = (props) => {
    return (
        <div id={props.alternate} className=".collage-image">
            <img src={props.source} alt={props.gameName} />
        </div>
    );
}

export default Image;