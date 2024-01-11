import React from "react";
import "../assets/styles/navbar.css";
import logo from "../assets/images/Logo.png";
import Image from "next/image"; // Import the next/image component

function Navbar({ scrollToSection }) {
  return (
    <div className="navbar">
      <div className="navbar-col">
        <Image
          src={logo}
          height={100}
          width={150}
          className="navbar-img"
          onClick={() => scrollToSection("landing")}
          style={{ cursor: "pointer" }}
        ></Image>
        <div
          onClick={() => scrollToSection("about")}
          style={{ cursor: "pointer" }}
        >
          About us
        </div>
        <div
          onClick={() => scrollToSection("products")}
          style={{ cursor: "pointer" }}
        >
          Our Products
        </div>
        <div
          onClick={() => scrollToSection("production")}
          style={{ cursor: "pointer" }}
        >
          Production
        </div>
        <div
          onClick={() => scrollToSection("certificates")}
          style={{ cursor: "pointer" }}
        >
          Certificates & Awards
        </div>
        <div
          onClick={() => scrollToSection("contact")}
          style={{ cursor: "pointer" }}
        >
          Contact us
        </div>
      </div>
    </div>
  );
}

export default Navbar;
