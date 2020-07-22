import React from "react";


function Contact (){

  return(
  <form>


    <div className="row">
      <div className="col-6">
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <div className=" form-group">
      <label for="exampleInputEmail1">Email Address</label>
      <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className=" form-group">
      <label for="exampleInputPassword1">Name</label>
      <input type="text" name="name" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" textarea name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
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