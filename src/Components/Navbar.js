import React from "react";
import logo from "../images/logoSymbol.png";
import name from "../images/logoName.png";
import ButtonLinks from "./ButtonLinks";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="logo">
          <img className="logo__image" src={logo} alt="" />
          <img className="logo__name" src={name} alt="" />
        </div>
        <div className="navigations">
          <ul className="navigations__links">
            <li>Why Vyorius?</li>
            <li>Solutions</li>
            <li>Product</li>
            <li>Use Cases</li>
            <li>Team</li>
            <li>Partners</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
        <div className="navbar__right">
          <ButtonLinks value="Launch Vyorius >" type="primary" />
        </div>
    </nav>
  );
}

export default Navbar;
