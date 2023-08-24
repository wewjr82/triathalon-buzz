import { useState } from "react";
import "./Navbar.css";

// Define MobileMenu component
const MobileMenu = () => {
  return (
    <div className={"mobile-menu"}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#membership">Membership</a>
      <a href="#training">Training</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className="topnav">
        {/* Your Logo/Brand here */}
        <div className="logo">
          TRIATHLON<span>BUZZ</span>
        </div>

        {/* Desktop Menu, which only appears on large screens */}
        <div className="menu">
          <a href="#home" className="active-link">
            Home
          </a>

          <a href="#about">About</a>
          <a href="#membership">Membership</a>
          <a href="#training">Training</a>
          <a href="#contact">Contact</a>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </>
  );
};

export default Navbar;
