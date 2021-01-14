import React from "react";
import "./style.css";

function Nav(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand heading" href="/">CHRSTOPH DOMINY</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://drive.google.com/file/d/1N7lFh2GzO4vV-VUjO_cpI4xjujGciHcY/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;