import React from "react";
import "../Home/style.css";
// import About from "../Home/About";

function Home() {

    return (

    <>    
<div class="bannerBody">
    <div class="row">
<div class="jumbotron col-md-12">
    <div class="container row ">
        <h1 class="display-3">Hi, i'm <span class="word">Aminat</span>! I build things for the web.</h1>
        <p class="lead">  I'm a <span class="word">web developer</span> and <span class="word">designer </span>based in Dallas,TX specializing in building (and
        occasionally designing) exceptional, reponsive websites and
        applications.</p>

      
        <p class="lead ">
            <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Portfolio</a>
        </p>

        {/* <p class="lead ">
            <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Get in touch</a>
        </p>
         */}

</div>
</div>
</div>
<div class="row">
    
{/* <div class="aboutDiv">
<h2> About Me</h2>
<p>
I am a Web developer utilizing my bachelor degree in visual
communication design to create memorable experiences for users by using
strategic and innovative approaches. Through internships and SMU full
stack-flex program honed skills in HTML/CSS, javascript, and MySQL to
create solutions that meet both business and user expectations. I
believe my creative problem solving skills and tech background will be
beneficial to a company that focuses on innovative technology. I’d love
the opportunity to put my expertise to work for your company.
</p>
</div> */}
</div>
<div class="card aboutDiv col-6" style={{width: "50rem"}}>
  <div class="card-body">
    <h5 class="card-title">About Me</h5>
    <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>

  </div>
  <div col-6> 
  <div class="text-center">
  <img src="../assets/web-profile-pic.svg" class="rounded" alt="..."/>
</div>
  </div>
</div>


</div>


</>

    )
}

export default Home;