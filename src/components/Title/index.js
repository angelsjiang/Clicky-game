import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-brand title">{props.title}</li>
                    <li className="nav-link alertText">{props.alertText}</li>
                    <li className="nav-link score">Score: {props.score} | Highest Score: {props.highest}</li>
                    {/* <li className="nav-link highest"></li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;