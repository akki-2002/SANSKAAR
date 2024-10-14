import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import "./PoojaCards.css";
import cardImage from "../../Assests/diyaPooja.jpg";

import Mahatva from "./Mahatva";
import PoojaMuhurat from "./PoojaMuhurat";
import AavashyakSamagri from "./AavashyakSamagri";
import PoojanTayyari from "./PoojanTayyari";
import PoojaPrarambh from "./PoojaPrarambh";
import PoojaVidhi from "./PoojaVidhi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0", // Remove extra padding
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "900px",
    height: "auto",
    maxHeight: "85vh", // Limit height for smaller screens
    overflowY: "auto", // Allows scrolling if content is too tall
    borderRadius: "20px", // Modern rounded corners
  },
};

Modal.setAppElement("#root");

const PoojaCards = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const cardData = [
    { id: 1, title: "माहत्व", component: Mahatva },
    { id: 2, title: "पूजा मुहूर्त एवं तिथि", component: PoojaMuhurat },
    { id: 3, title: "आवश्यक सामग्री", component: AavashyakSamagri },
    { id: 4, title: "पूजन तैयारी", component: PoojanTayyari },
    { id: 5, title: "पूजा विधि", component: PoojaVidhi },
    { id: 6, title: "पूजा प्रारंभ", component: PoojaPrarambh },
  ];

  const openModal = (card) => {
    setActiveCard(card);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveCard(null);
  };

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <motion.div
          key={card.id}
          className="card"
          onClick={() => openModal(card)}
          whileHover={{ scale: 1.05 }} // Animation on hover
          whileTap={{ scale: 0.95 }} // Animation on tap/click
        >
          <img src={cardImage} alt={card.title} />
          <motion.p>{card.title}</motion.p>
        </motion.div>
      ))}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {activeCard && <activeCard.component closeModal={closeModal} />}
        </motion.div>
      </Modal>
    </div>
  );
};

export default PoojaCards;
