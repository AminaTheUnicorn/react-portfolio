import React from "react";
import { Link } from "react-router-dom";
import SmCard from "../../components/ProgressBar/ProgressBar";
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
      I'm a web developer and designer based in Dallas, TX building (and sometimes designing)
       exceptional, responsive websites and applications.
      </h6>
      <div className="btnDiv">
      <a href="https://www.dropbox.com/s/9h7iqe1cqxeccmo/Aminat-Resume%20%287%29.pdf?dl=0" class="btn portBtn btn-lg " tabindex="-1" role="button" aria-disabled="true">Download CV</a>
          
      </div>
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
        I'm a web developer that values supporting the client’s needs to create new and impactful applications. 
        I’m passionate about web development and design in all it’s forms and helping businesses to improve their online presence.
        Check out my portfolio or get in touch with me (even just to say hi)!
        </p>
        <Link to="/portfolio"  className="btn">View Portfolio</Link>
      </div>
  </div>
<div className="skillDiv mt-5">
  <h2 className="skillTitle"> Skillset</h2>
  <SmCard></SmCard>

</div>
  </>

    )
}

export default Home;