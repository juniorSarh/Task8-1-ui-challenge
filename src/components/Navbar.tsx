import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/Images/logo.svg"></img>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navBtn">
      <Button backgroundColor="brown" textColor="white" size="medium">
        Login
      </Button>

      <Button backgroundColor="white" textColor="brown" size="medium" >
        Sign Up
      </Button>
      </div>
    </nav>
  );
}
