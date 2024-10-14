import React from "react";
import "./Poojapage.css"; // Import CSS for styling
import ganeshPooja from "../../Assests/ganesha-pooja-at-home-1.jpg"
// import PoojaCards from "./PoojaCards";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import PoojaCards from "../Pooja Page/PoojaCards"


const Poojapage = () => {
  return (
    <>
   <Navbar/>

    <div className="festival-page">
      {/* Header Section */}
      {/* <section className="header-banner">
        <h1>Ganesh Sankasthi Chaturthi</h1>
        <p> <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}> Home</Link>&gt; Ganesh Sankasthi Chaturthi</p>
      </section> */}

      {/* Main Content Section */}
      <section className="main-content">
        <div className="content-left">
          <h2>Ganesh Sankasthi Chaturthi</h2>
          <p className="date">
            📅 April 22, 2023
          </p>
          <p>
          Ganesh Chaturthi (guh-NESH cha-TUR-thee) is a festival that pays homage to Lord Ganesh, the remover of obstacles, and celebrates the day of his birth. Many recognize that Lord Ganesh brings order in this universe and worship him before embarking on a new endeavor, intellectual journey, or business enterprise. Therefore, it is common to see images or statues of him in these places.
          </p>

          <img
            src={ganeshPooja}
            alt="Mesha Sankranti"
            className="festival-image"
          />

          <p>
          One of Hinduism’s most revered personalities, Ganesha is widely recognized for having the head of an elephant and is the son of Shiva (the God of Transformation) and his wife Parvati. 

Every year, his birth is celebrated with a 10-day festival, during which four main rituals, namely Prana Pratishta, Shodashopachara, Uttarpuja, and Ganpati Visarjan are performed. 
          </p>

          <p>
          Festivities begin as Ganesha deities, generally made of clay and decorated with flowers and lights, are set up in private homes and/or temporary public stages called pandals. Priests then conduct Prana Pratishta, a ceremony in which mantras are recited, invoking Ganesha’s presence into the clay deity, after which he is offered formal prayers in a 16-step worship called Shodashopachara. 
          </p>
        </div>

        {/* Request for Help Form */}
        <div className="content-right">

        <div className="sidebar-box">
              <h2>This Pooja Includes:</h2>
              <ul className="includes-list">
                <li><i className="fas fa-check-circle"></i> Vrat Katha Recitation</li>
                <li><i className="fas fa-check-circle"></i> Ganesh Pooja Vidhi</li>
                <li><i className="fas fa-check-circle"></i> Offering Prayers and Naivedyam</li>
                <li><i className="fas fa-check-circle"></i> Aarti and Visarjan</li>
              </ul>
              <div className="price-box">
                <h3>₹1500</h3>
                <p>Includes all pooja samagri</p>
                <Link to="/book-now">
                  <button className="join-button">Book Now</button>
                </Link>
              </div>
            </div>

          <div className="request-help-box">
            <h3>Request for Help</h3>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Mobile" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <PoojaCards/>
  
    </div>
    <Footer/>
    </>
  );
};

export default Poojapage;
