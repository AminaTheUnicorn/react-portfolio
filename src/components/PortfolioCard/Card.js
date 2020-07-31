import React from "react";


function Card(props) {
  return (

  <div className="col mb-4">
    <div className="border-0 card shadow-sm">
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.summary}</p>
        <p className="card-text"  style={{fontWeight:"600"}} >Technology used:</p>
        <p className="card-text"> {props.tech}</p>
        <a href={props.href} className="card-link">View Site</a>
        <a href={props.git} className="card-link">Github</a>
      </div>
    </div>
  </div>
 


  );
}

export default Card;
