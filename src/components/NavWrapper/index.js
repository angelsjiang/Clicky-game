import React from "react";
import "./style.css";

function NavWrapper(props) {
    return <div className="navWrapper">{props.children}</div>
}

export default NavWrapper;