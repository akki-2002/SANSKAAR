import React from "react";
import { motion } from "framer-motion";
import "./PoojanTayyari.css"; // Import the shared CSS file

const PoojanTayyari = ({ closeModal }) => {
  return (
    <div
      className="poojan-tayyari-container"

    >
      <button className="modal-close-btn" onClick={closeModal}>
        &times;
      </button>
      <h2>पूजन तैयारी</h2>
      <ul>
        <li>Make a square of turmeric or flour and put wheat or rice on it and place a square.</li>
        <li>Spread red cloth and white cloth in the chowki, making Gauri Ganesh ji sit in front.</li>
        <li>Place an urn with mango leaves in the middle and keep coconut in it.</li>
        <li>Place a photo or idol of God on the post.</li>
        <li>Make a lamp of ghee and keep all the ingredients in the worship plate.</li>
      </ul>
    </div>
  );
};

export default PoojanTayyari;

