import React from "react";
// import quotes from './citation'

const Quote = props => (
    <figure>
        <p> coucou</p>
      <img src={props.image} alt={props.character} />
      <figcaption>
        <blockquote>{props.quote}</blockquote>
        <cite>{props.character}</cite>
      </figcaption>
    </figure>
  );

  export default Quote;