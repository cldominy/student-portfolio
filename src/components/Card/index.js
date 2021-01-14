import React from "react";
import "./style.css";

export function Card(props) {
  return (
    <div className="card h-100">
    <img src={props.project.preview} className="card-img-top w-100" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.project.name}</h5>
      <p className="card-text">{props.project.summary}</p>
    </div>
    <div className="card-footer">
      <a href={props.project.links.deployed} className="btn btn-primary btn-sm">Project</a>
      <a href={props.project.links.github} className="btn btn-secondary btn-sm">Github Repo</a>
    </div>
  </div>
  );
}

export function Deck({ children }) {
  return (
<div className="card-deck card-folio">
  {children}
  </div>
  );
}