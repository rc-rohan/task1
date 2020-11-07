import React from "react";
import ButtonLinks from "./ButtonLinks";
import "./MainContent.css";
import land from "../images/land.png";
import air from "../images/air.png";
import water from "../images/water.jpeg";
import indoor from "../images/indoor.png";
import map from "../images/map.jpeg";

function MainContent() {
  return (
    <div className="mainContent">
      <div className="mainContent__left">
        <header className="header">
          <h5 className="primary">CONECTING THE DISCONNECTED</h5>
          <h1>
            <span className="primary ">Vyorius</span> brings unmanned robots{" "}
            <span className="primary ">together</span>, wherever they are
          </h1>
        </header>
        <div className="mainContent__text">
          <p>
            With all of the operations, commanding and maintenance tools in one
            place, unmanned vehicles will stay connected and productive no
            matter where you’re Delivering
          </p>
          <div className="mainContent__buttons">
            <ButtonLinks value="Try  Vyorius" type="primary" />
            <ButtonLinks value="Learn More" type="light" />
          </div>
          <small className="other-info">
            Need to order a delivery? <a href="./">Get Started</a>
          </small>
        </div>
      </div>
      <div className="mainContent__right">
        <div className="map-image">
          <div className="water-image absoluteImages">
            <img src={water} alt="" />
            <ButtonLinks value="Water" type="water" />
          </div>
          <div className="indoor-image absoluteImages">
            <ButtonLinks value="Indoor" type="indoor" />
            <img src={indoor} alt="" />
          </div>
          <div className="land-image absoluteImages">
            <ButtonLinks value="Land" type="land" />
            <img src={land} alt="" />
          </div>
          <div className="air-image absoluteImages">
            <ButtonLinks value="Air" type="air" />
            <img src={air} alt="" />
          </div>
          <img className="map" src={map} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
