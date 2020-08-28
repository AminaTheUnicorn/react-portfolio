import React from "react";
import "./styles.css";

function SmCard() {

    return(
<>


<div class="row row-cols-3">

<div class="col">
        <p>UX Design</p>
        <div class="ux">
            <i class="fas fa-edit"></i>
        </div>
    </div>

    <div class="col">
        <p>HTML/CSS</p>
        <div class="html">
            <i class="fas fa-file-code"></i>
        </div>
    </div>

    <div class="col">
        <p>MySQL</p>
        <div class="mysql">
            <i class="fas fa-database"></i> 
        </div>
    </div>
    
    <div class="col">
        <p>JavaScript</p>
        <div class="javaS">
            <i class="fab fa-js-square"></i>
        </div>
    </div>

    <div class="col">
        <p>React</p>
        <div class="react">
            <i class="fab fa-react"></i>
        </div>
    </div>


    <div class="col">
        <p>Node.js</p>
        <div class="react">
            <i class="fab fa-node-js"></i>
        </div>
    </div>
  


</div>


</>

    )
}

export default SmCard;