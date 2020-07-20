import React from "react";
import "./style.css";



function Contact() {
  return (
    <div class="row row-cols-1 row-cols-md-12">
  <div class="col mb-4">
    <div class="border-0 card">
      <div class="card-body">
        <h5 class="text-center card-title">GET IN </h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <form name="contact" method="post" data-netlify="true">
          <div class="form-group">
            <label>Name</label>
            <input type="hidden" name="form-name" value="contact" class="form-control" id="Inputname1" />
          </div>
          <div class="form-group">
            <label>Email address</label>
            <input type="email" name="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
             <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Contact;
