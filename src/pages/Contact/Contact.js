import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'


function App() {
  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [file, setFile] = useState({});

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    setFile(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message, file }
    
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus("Message Sent, Thank you!"))
      .catch(error => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  return (
    <div className="App">
      <div className="row">
  <div className="col-md-6 col-sm-12">


    <form onSubmit={handleSubmit} action="/thank-you/">
       
            <label>
            </label>
              <input placeholder="Your Name" className="form-control" type="text" name="name" value={name} onChange={handleChange} />
      
            <label>
            </label>
             <input placeholder="Email Address" className="form-control" type="email" name="email" value={email} onChange={handleChange} />
      
            <label>
            </label>
            <textarea placeholder="Message" className="form-control" name="message" value={message} onChange={handleChange} />
        
        
        <button className="mb-5 btn btn-primary" type="submit">Send</button>
       </form>

        <h6>{status}</h6>
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
<i class="mr-3 fab fa-github"></i>
https://github.com/AminaTheUnicorn
</a>
</p>
<p>
<a class="" href="#https://www.linkedin.com/in/aminat-adesola/" role="button" >
<i class="mr-3 fab fa-linkedin"></i>
https://www.linkedin.com/in/aminat-adesola/  
</a>
</p>
<p>
<a class="" href="mailto:aminatadesola@gmail.com" role="button" >
<i class="mr-3 fas fa-envelope"></i>
  Send email
 </a>
</p>
<p>
<a class="" href="#collapseExample" role="button" >
  <i class="mr-3 fas fa-map-marker"></i>
  Dallas, TX
 </a>
</p>

</div>

</div>
      </div>
      </div>
  );
}

export default App;
