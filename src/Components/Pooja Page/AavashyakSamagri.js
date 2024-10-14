import React from "react";
import "./AavashyakSamagri.css"; // Import the specific CSS
import { Link, useNavigate } from "react-router-dom";

const AavashyakSamagri = ({ closeModal }) => {
  const items = [
    { name: "Ashtagandha", quantity: "20", price: "100" },
    { name: "Roli 5 Rupees", quantity: "5", price: "50" },
    { name: "Avir", quantity: "5 Gram", price: "20" },
    { name: "Gulal", quantity: "50 Gram", price: "30" },
    { name: "Turmeric", quantity: "50 Gram", price: "25" },
    { name: "Sindoor", quantity: "50 Gram", price: "15" },
    { name: "Sandalwood", quantity: "50 Gram", price: "200" },
    { name: "Rice", quantity: "30", price: "40" },
    { name: "Wheat", quantity: "20", price: "30" },
    { name: "Round Betel Nut", quantity: "30", price: "60" },
    { name: "Janeu", quantity: "10", price: "10" },
    { name: "Kalava", quantity: "10", price: "15" },
    { name: "Perfume", quantity: "25", price: "150" },
    { name: "Incense", quantity: "20", price: "20" },
    { name: "Flower Light", quantity: "10", price: "30" },
    { name: "Cotton", quantity: "10", price: "5" },
  ];

  return (
    <div className="samagri-container animate-modal">
      <button className="samagri-close-btn" onClick={closeModal}>
        &times;
      </button>
      <h2>आवश्यक सामग्री</h2>
      <div className="samagri-grid">
        {items.map((item, index) => (
          <div key={index} className="samagri-item">
            <h3>{item.name}</h3>
            <p>
              Quantity: <span>{item.quantity}</span>
            </p>
            <p>
              Price: <span>${item.price}</span>
            </p>
            <Link to="/productPage" style={{ textDecoration: "none", fontSize: "19px", color: "black" }}><button className="buy-btn">Buy</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AavashyakSamagri;
