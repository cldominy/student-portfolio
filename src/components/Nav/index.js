import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link className="navbar-brand heading" to="/">CHRSTOPH DOMINY</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://drive.google.com/file/d/18S4c9Yu49lFiRArQwpeFnn765b5O-FvI/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li class="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Find Me
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="https://www.linkedin.com/in/christoph-dominy/">LinkedIn</a>
          <a className="dropdown-item" href="https://github.com/cldominy">GitHub</a>
        </div>
      </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;