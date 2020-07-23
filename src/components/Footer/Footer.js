import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {

    return(
    

<footer className="mt-5 page-footer font-small blue pt-4">
  <div className="container-fluid text-center text-md-left" id="footerBod">
    <div className="row" >
      <div className="text-center py-3 col-md-6 mx-auto mb-md-0 mb-3">

          <Link to="/"><a className="mr-4 footLink">Home |</a></Link>
          <Link to="/portfolio"><a className="mr-4 footLink" >Portfolio |</a></Link>
          <Link to="/caseStudies"><a className="mr-4 footLink" >Case Studies |</a></Link>
          <Link to="/contact"><a className="footLink">Contact</a></Link>
  
      </div>
    
  <div className="col-md-6 footer-copyright text-center py-3">© 2020 Copyright:
    <a className="copyR"href="aminat-portfolio.netlify.app"> Aminat Portfolio</a>
  </div>
    </div>
  
  </div>
  

</footer>

    )
}

export default Footer;