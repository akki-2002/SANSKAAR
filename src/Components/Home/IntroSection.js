import React from "react";
import "./IntroSection.css"; // Create a corresponding CSS file
import sanskar from "../../Assests/sanskar.avif"

const IntroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
        Empowering Innovation, Rooted in <span className="highlight">SANSKAAR.</span>
        </h1>
        <p>
          We are the Top Rated agency on <br /><span className="clutch">Clutch 5.0</span>
          <span className="stars">★★★★★</span>
        </p>
        <button className="start-btn">EXPLORE</button>
      </div>
      <div className="hero-image">
        <img
          src={sanskar}
          alt="Your Hero"
        />
      </div>
    </section>
  );
};

export default IntroSection;
