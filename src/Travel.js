import React from "react";

const Travel = props => (
  <figure>
    <h1>{props.destination}</h1>
    <img src={props.photo} alt={props.destination} />
    <figcaption>
        <p>{props.country}</p>
        <p>{props.distance}</p>
    </figcaption>
  </figure>
);

export default Travel;