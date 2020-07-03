import React from "react";
import "../Home/style.css";
import Image from "../../assets/Logo";

// import About from "../Home/About";

function Home() {

    return (

    <>    
<div className="bannerBody">
    <div className="row">
<div className="jumbotron col-md-12">
    <div className="container row ">
        <h1 className="display-3">Hi, i'm <span className="word">Aminat</span>! I build things for the web.</h1>
        <p className="lead">  I'm a <span className="word">web developer</span> and <span className="word">designer </span>based in Dallas,TX specializing in building (and
        occasionally designing) exceptional, reponsive websites and
        applications.</p>

      
        <p className="lead ">
            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Portfolio</a>
        </p>

        {/* <p className="lead ">
            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Get in touch</a>
        </p>
         */}

</div>
</div>
</div>
<div className="row">
    
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


<div className="card aboutDiv col-6">
  <div className="card-body">
  <blockquote className="blockquote text-center">
  <p className="mb-0"> “How do I explain what I do at a party? The short version is that I say I humanize technology.”</p>
  <footer className="blockquote-footer"> Fred Beecher, Director of UX, The Nerderyrd's content. <cite title="Source Title">https://careerfoundry.com/</cite></footer>
</blockquote>
</div>

  </div>

  <div className="profilePic img-overlay">
      <Image></Image>
  </div>
 
</div>


</div>


</>

    )
}

export default Home;