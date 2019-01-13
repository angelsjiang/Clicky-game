import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-brand title">{props.title}</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;