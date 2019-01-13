import React from "react";
import "./style.css";

function Jumbotron(props) {
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">{props.alert}</p>
                <p className="alertText">{props.alertText}</p>
                <p className="score">Score: {props.score} | Highest Score: {props.highest}</p>
            </div>
        </div>
    );
}

export default Jumbotron;