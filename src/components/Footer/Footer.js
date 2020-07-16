import React from "react";
import { Link } from "react-router-dom";
import "../Footer/style.css";

function Footer() {

    return(
        <footer id="footer" class="py-4 text-white-50">
        <div class="row">
          <div className="col-6 footNav"> 
            <Link to="/"><a className="footer">Home</a></Link>
            <Link to="/portfolio"><a className="footer" >Portfolio</a></Link>
            <Link to="/caseStudies"><a className="footer" >Case Studies</a></Link>
            <Link to="/contact"><a className="footer">Contact</a></Link>
          </div>
          {/* <small>Copyright &copy; Your Website</small> */}
          <div className="col-6 socialDiv">
            <i class="fab fa-github-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fas fa-envelope"></i>
          </div>
        </div>
      </footer>
    )
}

export default Footer;