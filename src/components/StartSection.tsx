// StartSection.tsx
import React from "react";
import "../styles/StartSection.scss";

const StartSection: React.FC = () => (
  <section className="start">
    <h1>
      Start Crafting Your
      <span className="highlight">Next Great Idea</span>
    </h1>
    <p className="description">
      Simplifying the creation of landing pages, blog pages, <br />
      application pages and so much more!
    </p>
    <div className="buttons">
      <div className="button-wrapper">
        <button className="purchase">Purchase Now</button>
        <span className="price-tag">only $15/mo</span>
      </div>
      <a href="#">Learn More</a>
    </div>
  </section>
);

export default StartSection;