import React from "react";
import Image from "../../assets/Logo";

// import About from "../Home/About";

function Home() {

    return (
<>
  <div className="row">
    <div className="col-12 homeDiv">
      <h3>Hi, my name is</h3>
      <h1>Aminat Adesola. I build things for the web.</h1>
      <p>
        I'm a web developer and designer based in Dallas,TX specializing in building (and
         sometimes designing) exceptional, reponsive websites and
        applications.
      </p>
      {/* <div className="btnDiv">
      <button type="button" className="btn btn-lg">
        Get In Touch
      </button>
      <button type="button" className="btn btn-lg">
        Portfolio
      </button>
      </div> */}
    </div>
</div>
 
 
    <div className="aboutDiv">
      <h2> About </h2>
      <p>
       Hi! As a developer, I value innovation to support the client’s needs, 
        to design new and impactful applications. With My background in creative problem solving and web development would be of value 
       to a corporate's technology team. I would love the opportunity to grow in 
       a workplace that allows me to continuously learn and make a difference. 
      </p>
  </div>
  </>

    )
}

export default Home;