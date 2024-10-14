import React from 'react';
import './Footer.css';
import { FaEnvelope } from 'react-icons/fa'; // Import the message icon
import logo from '../../Assests/logo.png'; // Replace with your logo's path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <h3 className="footer-company-name">Sanskaar</h3>
          <p className="footer-description">
            Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit.
            Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat
            egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales
            ultrices eros.
          </p>
          <div className="footer-subscribe">
            <p>Subscribe to our newsletter</p>
            <form className="subscribe-form">
              <div className="input-container">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Your email" className="subscribe-input" />
              </div>
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-links-section">
          <div className="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our Clients</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="mailto:email@example.com">email@example.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© All rights reserved. Made by IM</p>
      </div>
    </footer>
  );
};

export default Footer;
