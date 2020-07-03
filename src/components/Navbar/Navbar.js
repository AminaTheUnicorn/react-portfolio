import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/style.css"

function Navbar() {

    return(

        
        
<nav class="nav row mt-4">
    <a class="navbar-brand " href="#" >
        <span>Aminat Adesola | Portfolio</span>
    </a>
   <Link to="home"><a class="nav-link">Home</a></Link>
  <Link to="portfolio"><a class="nav-link" >Portfolio</a></Link>
  <Link to="caseStudies"><a class="nav-link" >Case Studies</a></Link>
  < Link to="contact"><a class="nav-link">Contact</a></Link>
</nav>
    )
}

export default Navbar;