import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/style.css"

function Navbar() {

    return(

        
        
<nav className="nav row mt-4">
    <a className="navbar-brand " href="#" >
        <span>Aminat Adesola | Portfolio</span>
    </a>
   <Link to="/"><a className="nav-link">Home</a></Link>
  <Link to="/portfolio"><a className="nav-link" >Portfolio</a></Link>
  <Link to="/caseStudies"><a className="nav-link" >Case Studies</a></Link>
  < Link to="/contact"><a className="nav-link">Contact</a></Link>
</nav>
    )
}

export default Navbar;