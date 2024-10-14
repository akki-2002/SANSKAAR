import React from "react";
import "./PoojaMuhurat.css";

const PoojaMuhurat = ({ closeModal }) => {
  return (
    <div className="muhurat-container animate-modal">
      <button className="muhurat-close-btn" onClick={closeModal}>
        &times;
      </button>
      <h2>पूजा मुहूर्त एवं तिथि</h2>
      <p>
        When to worship - Lord Ganesha is worshiped on the Chaturthi date. By
        worshiping Shri Ganesh ji on this day, every wish of life is fulfilled
        and happiness comes in the house. Chaturthi vrat is observed on the
        chaturthi date of Krishna and Shukla Paksha which falls every month. The
        Chaturthi that comes after the full moon is known as Sankashti Chaturthi
        and the Chaturthi that comes after the New Moon is known as Vinayaka
        Chaturthi. This is the date of Lord Ganesha, so on this day he is
        pleased by worshiping him with rituals.
      </p>
    </div>
  );
};

export default PoojaMuhurat;
