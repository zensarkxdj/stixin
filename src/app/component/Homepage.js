"use client";
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Products from "./Products";
import Production from "./Production";
import Certificates from "./Certificates";
import "../assets/styles/homepage.css";
import Contact from "./Contact";

const Homepage = () => {
  const scroll = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1300; // Set the duration of the animation in milliseconds

      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const scrollProgress = Math.min(elapsedTime / duration, 1);
        const easing = (t) => {
          return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
        }; // You can use different easing functions for smoother animations

        window.scrollTo(0, startPosition + distance * easing(scrollProgress));

        if (scrollProgress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };
  return (
    <div className="main">
      <Navbar scrollToSection={scroll} />
      <div className="right-panel">
        <div id="landing">
        <section class="parallax-container">
          <h1>Welcome</h1>
        </section>
        </div>
        
        <div id="about">
          <About />
        </div>

        <section class="parallax-container2">
          <h1>Welcome</h1>
        </section>
        <div id="products">
          <Products />
        </div>

        <section class="parallax-container">
          <h1>Welcome</h1>
        </section>
        <div id="production">
          <Production />
        </div>

        <section class="parallax-container2">
          <h1>Welcome</h1>
        </section>
        <div id="certificates">
          <Certificates />
        </div>

        <section class="parallax-container">
          <h1>Welcome</h1>
        </section>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
