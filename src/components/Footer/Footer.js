import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Footer() {

    return(
        <footer id="footer" class="py-4">
        <div class="row mx-auto container ">
        
          <div className="col-6 col-xs-12 footNav text-center" style={{color:"white"}}> 
            <Link to="/"><a className="H-footer mr-3">Home | </a></Link>
            <Link to="/portfolio"><a className="P-footer mr-3" >Portfolio |</a></Link>
            <Link to="/caseStudies"><a className="CS-footer mr-3" >Case Studies |</a></Link>
            <Link to="/contact"><a className="C-footer mr-3">Contact</a></Link>
          </div>
          {/* <small>Copyright &copy; Your Website</small> */}
          <div className="col-6 col-xs-12 socialDiv text-center">
            <a href="https://www.w3schools.com" class="fab fa-github-square mr-3" ></a>
            <a href="https://www.w3schools.com" class="fab fa-linkedin mr-3"></a>
            <a href="https://www.w3schools.com" class="fas fa-envelope mr-3"></a>
          </div>
       
        </div>
      </footer>
    )
}

export default Footer;