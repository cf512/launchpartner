import React from "react";

function Characters(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} style={{width:"80px"}} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>From:</strong> {props.from}
          </li>
          <li>
            <strong>About:</strong> {props.about}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Characters;
