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
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <div className="row">
      <div className="col-6">
      <form onSubmit={this.handleSubmit}>
      <div className=" form-group">
            <label>Your Name:</label>
            <input className="form-control" type="text" name="name" value={name} onChange={this.handleChange} />
      </div>
        <div className=" form-group">
            <label> Your Email:</label>
            <input  className="form-control" type="email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className=" form-group">
            <label> Message:</label>
            <textarea  className="form-control" name="message" value={message} onChange={this.handleChange} />
        </div>
            <button className="btn btn-primary" type="submit">Send</button>
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
     
     
      );
    }
  }
  


export default Contact;
