import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import img from "../../static/triathlon.png";

const Header = () => {
  return (
    <header>
      <>
        <Navbar />
      </>

      <img src={img} alt="icons" className="icons" />
    </header>
  );
};

export default Header;
