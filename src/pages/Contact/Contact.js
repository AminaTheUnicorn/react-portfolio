import React from "react";


function Contact (){

  return(
  <form>


    <div className="row">
      <div className="col-6">
      <div className=" form-group">
      <label for="exampleInputEmail1">First Name</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className=" form-group">
      <label for="exampleInputPassword1">Last Name</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      
      <div className="col-6 border-0 card" style={{backgroundColor:"#e8f0ff"}}>
        <div class="card-body">
          <h2 class="card-title text-center" style={{color:"#9747ff"}}>Get In Touch</h2>
          <p class="card-text">
            Feel free to leave a message, even just to say hi. Or look for me on my 
            other social media platforms.
          </p>
        </div>
      </div>
    
    </div>

</form>
  )
}

export default Contact;