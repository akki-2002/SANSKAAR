import React from 'react';
import { Link } from 'react-router-dom';
import './PoojaList.css';

// Importing images (replace with your actual image paths)
import softwareDevImage from '../../Assests/ganeshPooja.jpeg';
import appDevImage from '../../Assests/ganeshPooja.jpeg';
import supportImage from '../../Assests/ganeshPooja.jpeg';
import qaTestingImage from '../../Assests/ganeshPooja.jpeg';

const PoojaList = () => {
  const services = [
    {
      title: 'Ganesh Pooja',
      
      image: softwareDevImage,
    },
    {
      title: 'Ganesh Pooja',
    
      image: appDevImage,
    },
    {
      title: 'Ganesh Pooja',
      
      image: supportImage,
    },
    {
      title: 'Ganesh Pooja',
      
      image: qaTestingImage,
    },
    
  ];

  return (
    <div className="services-container">
      <h2 className="section-title">Our Pooja List's</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link to="/poojaPage" style={{ textDecoration: "none", cursor: "pointer" }}> 
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
          </div>
          </Link>
        ))}
      </div>
      <div className="view-more-btn">
        <button>View More</button>
      </div>
    </div>
    
  );
};

export default PoojaList;


