import React from "react";

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Message Sent!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <div className="row">
          <div className="col-md-6 col-sm-12">
          <form onSubmit={this.handleSubmit}>
          <div className=" form-group">
                <label></label>
                <input placeholder="Your Name" className="form-control" type="text" name="name" value={name} onChange={this.handleChange} />
          </div>
            <div className=" form-group">
                <label></label>
                <input placeholder="Your Email" className="form-control" type="email" name="email" value={email} onChange={this.handleChange} />
            </div>
            <div className=" form-group">
                <label></label>
                <textarea placeholder="Message" className="form-control" name="message" value={message} onChange={this.handleChange} />
            </div>
                <button className="mb-5 btn btn-primary" type="submit">Send</button>
            </form>
          </div>

<div className="col-md-6 col-sm-12 border-0 card" style={{backgroundColor:"#e8f0ff"}}>
  <div class="card-body">
    <h2 class="card-title text-center" style={{color:"#9747ff"}}>Get In Touch</h2>
    <p class="card-text">
      Feel free to leave a message, even if it's just to say hi. Or look for me on my 
      other social media platforms.
    </p>
    <p>
      <a class="" href="https://github.com/AminaTheUnicorn" role="button" >
      <i class="mr-5 fab fa-github"></i>
      https://github.com/AminaTheUnicorn
      </a>
    </p>
    <p>
      <a class="" href="#https://www.linkedin.com/in/aminat-adesola/" role="button" >
      <i class="mr-5 fab fa-linkedin"></i>
      https://www.linkedin.com/in/aminat-adesola/  
      </a>
    </p>
    <p>
        <a class="" href="mailto:aminatadesola@gmail.com" role="button" >
        <i class="fas fa-envelope"></i>
          Send email
         </a>
    </p>
    <p>
        <a class="" href="#collapseExample" role="button" >
          <i class="mr-5 fas fa-map-marker"></i>
          Dallas, TX
         </a>
    </p>

    
    
  </div>
</div>
      </div>
     
     
      );
    }
  }
  


export default Contact;
