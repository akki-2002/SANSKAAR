import React from "react";
import "./Mahatva.css";

const Mahatva = ({ closeModal }) => {
  return (
    <div className="mahatva-container">
      <button className="mahatva-close-btn" onClick={closeModal}>
        &times; {/* X for close */}
      </button>
      <h2>पूजा माहत्व</h2>
      <p>
        Greetings to Lord Ganapati, you are the visible element. You do, you do,
        you do. Definitely you are Brahma sitting in all these forms. You are
        actually the eternal self. Ekadanta, Chaturbhuj, holding noose, curb,
        fearlessness, and boon in all four hands and carrying the flag of mouse
        sign. Blood-coloured, long-bellied, having big soup-like ears, dressed
        in blood, smeared with sandalwood paste on the body, well worshiped with
        blood flowers, the deity who is merciful to the devotees, the cause of
        the world, the infallible, among the etc. The yogi who meditates on Lord
        Ganesha, who is beyond manifestation, nature and man, is the best of all
        yogis.
      </p>
      <p>
        The one who worships with devotion in this way and chants after fasting
        on Chaturthi Tithi becomes a scholar. The one who worships Ganapati with
        the shoots of Durva becomes like Kuvera. The one who performs Yajna with
        the help of Lajos (Dhani-Lai) becomes successful, meritorious. One who
        performs Yajna with a thousand laddus (modaks), gets the desired result.
        One who performs Yajna with samidha along with Ghrit gets everything.
        Chanting in the solar eclipse, in the Mahanadi or near the idol gives
        success to the mantra. By worshiping Shri Ganesh ji, he becomes free
        from great obstacles. According to Ganesh Purana, the effect of this
        fast brings good luck, prosperity and child happiness. According to
        Bhavishya Purana, fasting on Sankashti Chaturthi removes all kinds of
        troubles.
      </p>
    </div>
  );
};

export default Mahatva;
