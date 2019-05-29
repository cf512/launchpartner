import React from "react";
// import { Input, FormBtn } from "../components/Form";
import { Link } from 'react-router-dom';

function Characters(props) {
  return (
    <div className="card characterStyle">
      <div className="img-container">
        <img alt={props.name} src={props.image} style={{ width: "80px" }} />
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
      <div>
        <Link to={"/edit/" + props.id}>
          <div className="btn btn-warning float-right">Edit</div>
        </Link>
      </div>
    </div>
  );
}

export default Characters;
