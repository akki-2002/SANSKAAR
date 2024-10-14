import React from "react";
import "./AboutUs.css"; 
import sanskar from "../../Assests/sanskar.avif";

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img src={sanskar} alt="About Us" />
      </div>
      <div className="about-content">
        <h2>Award-Winning Software Company</h2>
        <p>
          We are dedicated to delivering top-notch software solutions. <br />
          Our team has been recognized by top industry leaders for innovation and excellence.
        </p>
        <p>
          Trusted by <strong>Clutch</strong>, <strong>Forbes</strong>, and more.
        </p>
        <button className="more-btn">More about us</button>
      </div>
    </section>
  );
};

export default AboutUs;
