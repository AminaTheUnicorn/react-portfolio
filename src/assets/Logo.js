import React from 'react';
import "../assets/style.css"
import logo from '../assets/profilePic.png'; // Tell webpack this JS file uses this image
console.log(logo); // /logo.84287d09.png
function Image() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
export default Image;