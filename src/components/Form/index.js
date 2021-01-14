import React from "react";
import "./style.css";

function Form(){
    return(
<form action="https://formspree.io/mknqyokk" method="POST">
<div className="form-group">
  <label for="name">Name:</label>
  <input type="text" className="form-control" id="name" placeholder="Your Name"/>
</div>
<div className="form-group">
    <label for="email">Email Address:</label>
    <input type="email" className="form-control" id="email" placeholder="Email Address"/>
  </div>
  <div className="form-group">
    <label for="message">Message:</label>
    <textarea className="form-control" name="message" id="message" rows="6"></textarea>
    <br/>
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    );
}

export default Form;