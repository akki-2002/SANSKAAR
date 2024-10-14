import React, { useState, useEffect } from "react";
import "./Navbar.css"; 
import { FaShoppingCart, FaAngleDown } from "react-icons/fa";
import logo from "../../Assests/logo.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"} ${isSticky ? "sticky" : ""}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Daily Pooja</a></li>
        <li><a href="#special">Special Pooja</a></li>
        <li><a href="#kids">Sanskaar For Kids</a></li>
        <li><a href="#stories">Customized Stories</a></li>
        <li className="dropdown">
          <a href="#!">MORE <FaAngleDown /></a>
          <div className="dropdown-content">
          <a href="#">Ashadha</a>
                <a href="#">Ashwin</a>
                <a href="#">Bhadrapada</a>
                <a href="#">Chaitra</a>
                <a href="#">Jyeshtha</a>
                <a href="#">Kartik</a>
                <a href="#">Magh</a>
                <a href="#">Margashirsha</a>
                <a href="#">Paush</a>
                <a href="#">Phalgun</a>
                <a href="#">Shravan</a>
                <a href="#">Vaishakh</a>
          </div>
        </li>
      </ul>
      <div className="right-side">
        <div className="toggle-container">
          <span>English</span>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="switch"
              className="switch-input"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="switch" className="switch-label"></label>
          </div>
          <span>Hindi</span>
        </div>
        <button className="buy-now">
          <FaShoppingCart className="cart-icon" /> Buy Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
