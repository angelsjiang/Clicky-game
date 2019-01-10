import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div className="navbar navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="title">{props.title}</li>
                <li className="alertText">{props.alertText}</li>
                <li className="score">Score: {props.score}</li>
                <li className="highest">Highest Score: {props.highest}</li>
            </ul>
        </div>
    );
}

export default Nav;