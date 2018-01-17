import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container" id={props.id}>
      <img alt=""
        src={props.image}
        clicked={props.clicked}
        onClick={() => props.clicked(props.id)}
        />
    </div>
  </div>
);

export default Card;
