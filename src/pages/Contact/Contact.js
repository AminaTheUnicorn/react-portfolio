import React from "react";



function Contact() {
  return (
    <div class="row row-cols-1 row-cols-md-12">
  <div class="col mb-4">
    <div class="border-0 card shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <form>
          <div class="form-group">
            <label for="exampleInputname1">Name</label>
            <input type="name" class="form-control" id="exampleInputname1" aria-describedby="nameHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
             <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
