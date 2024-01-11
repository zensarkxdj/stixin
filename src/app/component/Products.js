import React from "react";
import "../assets/styles/about.css";

const Products = () => {
  return (
    <div className="about">
      <div className="about-head">
        <h1>OUR PRODUCTS</h1>
      </div>
      <div className="about-des">
        <span>
          At Stixin, we understand that each customer is unique with specific
          requirements. That's why we go beyond the ordinary to offer
          tailor-made solutions to meet your distinct needs. Whether you require
          paper sticks with a particular outer diameter, customized lengths, or
          varying levels of flexibility, our team is dedicated to collaborating
          with you to develop products that align perfectly with your
          specifications.
        </span>
        <br></br>
        <span>
          Our paper sticks stand out for their exceptional quality, crafted
          entirely from ECF pulp and free from optical brightening agents
          (OBAs). Committed to ensuring safety and compliance, we rigorously
          meet all requirements for primary contact materials mandated by USFDA
          and REACH standards. With our eco-friendly and regulatory-compliant
          paper sticks, you can trust in a product that not only meets but
          exceeds the highest industry benchmarks for safety and environmental
          responsibility.
        </span>

        <br></br>

        <span style={{ fontWeight: "bold", paddingBottom: "0.5rem" }}>
          Length Range: 50 MM – 370 MM Ø Range: 2 MM – 6 MM
        </span>

        <br></br>
      </div>
    </div>
  );
};

export default Products;
