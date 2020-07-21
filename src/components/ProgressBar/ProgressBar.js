import React from "react";

function SmCard() {

    return(
<>

<div class="row row-cols-2">

<div class="col">
        <p>UX Design</p>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
        </div>
    </div>

    <div class="col">
        <p>HTML/CSS</p>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
        </div>
    </div>

    <div class="col mt-4">
        <p>MySQL</p>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
        </div>
    </div>
    
    <div class="col mt-4">
        <p>JavaScript</p>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
        </div>
    </div>

    <div class="col mt-4">
        <p>React JS</p>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
        </div>
    </div>

  


</div>


</>

    )
}

export default SmCard;