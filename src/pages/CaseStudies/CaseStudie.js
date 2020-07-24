import React from "react";
import CsCard from "../../components/CScard/CsCard";
import content from "./studiesContent.json";
import "./styles.css"


function CaseStudies() {
  return (
    <>
    
     
      <div className=" border-0 card" style={{backgroundColor:"#e8f0ff"}}>
        <div class="card-body">
          <h2 class="card-title text-center" style={{color:"#9747ff"}}>Design Process</h2>
          <p id="topCard"class="card-text">
          Below is some of my work showcasing the design and reat a few tech companies.
          Each case study takes you through my thought process on how I solve problems that generate user and business value.
          </p>
    
        </div>
    
<div className="row row-cols-3 text-center">
        <div className="designDiv">
        <i className="fas fa-search"></i>
          <p id="researchT">Research</p>
          <p id="researchB">
          Evaluate problems and opportunities in people's lives.
          </p>
        </div>
        <div className="designDiv">
          <i className="far fa-lightbulb"></i>
          <p id="defineT">Ideate</p>
          <p id="defineB">
          Ideate solutions though prototypes and test.
          </p>
        </div>
        <div className="designDiv">
        <i className="fas fa-pencil-ruler"></i>
          <p id="designT">Design</p>
          <p id="designB">
          Create final prototypes, visual design and user flows to set product vision.
          </p>
        </div>
      </div>
  </div>

  <div class="mt-5 row row-cols-1 row-cols-md-2">
        <CsCard
          image={require("./img/db-homepg.PNG")}
          title={content[0].title}
          summary={content[0].summary}
          href={content[0].site}
        />
  </div>
</>
  );
}

export default CaseStudies;
