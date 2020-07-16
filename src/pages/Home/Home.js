import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Image from "../../assets/Logo";

// import About from "../Home/About";

function Home() {

    return (
<>
  <div className="row">
    <div className="col-12 homeDiv">
      <h3>Hi, my name is</h3>
      <h1 className=""><span className="colorBlock">Aminat Adesola</span>. I build things for the <span className="colorBlock">web</span>.</h1>
      <h6 className="mt-4">
        I'm a web developer and designer based in Dallas,TX specializing in building (and
         sometimes designing) exceptional, reponsive websites and
        applications.
      </h6>
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
 
 
 <div className="row mt-5 aboutDiv">
      <div className="col-md-6 col-sm-12">
        <p className="text-center">
          <Image></Image>
        <p><small>Web developer & Designer</small></p>
        </p>
      </div>
      <div className="mt-4 col-md-6 sm-12">
        <h2> About </h2>
        <p>
        Hi! As a developer, I value innovation to support the client’s needs, 
          to design new and impactful applications. With My background in creative problem solving and web development would be of value 
        to a corporate's technology team. I would love the opportunity to grow in 
        a workplace that allows me to continuously learn and make a difference. 
        </p>
        <Link to="/portfolio"  className="btn portBtn">View Portfolio</Link>
      </div>
  </div>
  </>

    )
}

export default Home;