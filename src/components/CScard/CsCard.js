import React from "react";


function CsCard(props) {
  return (

  <div className="col mb-4">
    <div className="border-0 card shadow-sm">
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.summary}</p>
        <a href={props.href} className="card-link">Case Study</a>
      </div>
    </div>
  </div>
 


  );
}

export default CsCard;
