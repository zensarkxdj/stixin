import React, { useState } from "react";
import "../assets/styles/navbar.css";
import logo from "../assets/images/Logo.png";
import Image from "next/image"; // Import the next/image component

function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
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
      <div className="navbar-mobile">
        <div className="logo">
          <Image
            src={logo}
            className="navbar-img"
            onClick={() => scrollToSection("landing-m")}
            style={{ cursor: "pointer" }}
          ></Image>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        {isMenuOpen && (
          <div className="menu">
            <div
              onClick={() => scrollToSection("about-m")}
              style={{ cursor: "pointer" }}
            >
              About us
            </div>
            <div
              onClick={() => scrollToSection("products-m")}
              style={{ cursor: "pointer" }}
            >
              Our Products
            </div>
            <div
              onClick={() => scrollToSection("production-m")}
              style={{ cursor: "pointer" }}
            >
              Production
            </div>
            <div
              onClick={() => scrollToSection("certificates-m")}
              style={{ cursor: "pointer" }}
            >
              Certificates & Awards
            </div>
            <div
              onClick={() => scrollToSection("contact-m")}
              style={{ cursor: "pointer" }}
            >
              Contact us
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
