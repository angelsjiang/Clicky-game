import React from "react";
import "./style.css";

function AlertText(props) {
    return <h3 className="alertText">{props.children}</h3>;
}

export default AlertText;