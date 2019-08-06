import React from "react";


const Travel = props => (
  <figure>
    <h1>{props.city}</h1>
    <img src={props.photo} alt={props.destination} />
    <figcaption>
        <p>{props.country}</p>
        <p>{props.km}</p>
    </figcaption>
  </figure>
);

export default Travel;