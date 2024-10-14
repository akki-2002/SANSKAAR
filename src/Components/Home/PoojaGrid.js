import React, { useState } from 'react';
import './Poojagrid.css';
import Ashad from "../../Assests/hinduCalender.jpeg";
import bhadrapada from "../../Assests/ganeshPooja.jpeg";
import chaitra from "../../Assests/hinduCalender.jpeg";
import falgun from "../../Assests/hinduCalender.jpeg";
import jeshtra from "../../Assests/hinduCalender.jpeg";
import kartik from "../../Assests/hinduCalender.jpeg";
import maagh from "../../Assests/hinduCalender.jpeg";
import marga from "../../Assests/hinduCalender.jpeg";
import paush from "../../Assests/hinduCalender.jpeg";
import shravan from "../../Assests/hinduCalender.jpeg";
import vaish from "../../Assests/hinduCalender.jpeg";
import ashwin from "../../Assests/hinduCalender.jpeg";

const Poojagrid = () => {
  const products = [
    { image: chaitra, title: 'Chaitra' },
    { image: vaish, title: 'Vaishakh' },
    { image: jeshtra, title: 'Jyeshtha' },
    { image: Ashad, title: 'Ashadha' },
    { image: shravan, title: 'Shravan' },
    { image: bhadrapada, title: 'Bhadrapada' },
    { image: ashwin, title: 'Ashwin' },
    { image: kartik, title: 'Kartik' },
    { image: marga, title: 'Margashirsha' },
    { image: paush, title: 'Paush' },
    { image: maagh, title: 'Magh' },
    { image: falgun, title: 'Phalgun' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pooja-grid-container">
      <div className="text-content">
        <h2 className="section-title">Monthly Pooja</h2>
        <h3>{products[currentIndex].title}</h3>
        <p>
          Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus
          diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas 
          quis cras sed gravida volutpat, cursus enim.
        </p>

        {/* Move navigation arrows here below the description */}
        <div className="navigation-arrows">
          <button onClick={prevProduct} className="arrow-btn">
            &#8249;
          </button>
          <button onClick={nextProduct} className="arrow-btn">
            &#8250;
          </button>
        </div>
      </div>

      <div className="image-content">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].title}
          className="product-image"
        />
      </div>
    </div>
  );
};

export default Poojagrid;
