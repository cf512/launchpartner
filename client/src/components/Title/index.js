import React from "react";
import "./style.css";

function Title(props) {
  return (
    <span>
      <h1 className="title"><a href="/">LaunchPartner Coding Assignment</a></h1>
      <h3 className="subTitle">featuring Punch-Out!! for NES (1987)</h3>
      <h6 className="subsubTitle">by Connor Finnigan (<i className="fab fa-github"></i><a href="https://github.com/cf512/launchpartner" target="_blank" rel="noopener noreferrer"> cf512</a>)</h6>
    </span>
  )
}

export default Title;
