import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <div className="imageCard">
            <span onClick={() => props.clickImage(props.id)} className="counted">
                <img className="rounded img-thumbnail" alt={props.name} src={props.image} />
            </span>
        </div>
    );
}

export default ImageCard;