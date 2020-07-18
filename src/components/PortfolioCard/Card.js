import React from "react";


function Card(props) {
  return (

  <div class="col mb-4">
    <div class=" overlay  border-0 card shadow-sm">
      <img src={props.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.summary}</p>
      </div>
    </div>
  </div>
 


  );
}

export default Card;
