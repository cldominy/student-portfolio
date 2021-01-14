import React from "react";
import "./style.css";
import Background from "./background.jpg";


function Carousel(){
    return (
        <div id="background-static" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 header-img" src={Background} alt="Background"/>
            </div>
          </div>
        </div>
    );
}

export default Carousel;