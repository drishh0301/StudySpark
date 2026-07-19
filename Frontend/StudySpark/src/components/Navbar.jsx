import React from "react";
import "../styles/Navbar.css";
import { FaBrain } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaBrain className="logoIcon" />
        <span>StudySpark AI</span>
      </div>

      <ul className="navLinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="navButton">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;