import React from "react";
import Container from "../BodyContainer/Container";
import { Link } from "react-router-dom";
import "../Navbar/style.css"

function Navbar() {

    return(
      
<nav className="row mb-5 navbar navbar-expand-lg navbar-light bg-light">
    <Container>
        <a className="mx-auto col-md-6 navbar-brand" href="#" >
            <span>Aminat Adesola | Portfolio</span>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="col-md-6 collapse navbar-collapse float-right" id="navbarSupportedContent">
            <Link to="/"><a className="nav-item nav-link">Home</a></Link>
            <Link to="/portfolio"><a className="nav-item nav-link" >Portfolio</a></Link>
            <Link to="/caseStudies"><a className="nav-item nav-link" >Case Studies</a></Link>
            <Link to="/contact"><a className="nav-item nav-link">Contact</a></Link>
        </div>
    </Container>
</nav>
    )
}

export default Navbar;