import React from 'react';
import './ProductPage.css';
import productIMG from "../../Assests/diyaPooja.jpg"
import { Link, useNavigate } from "react-router-dom";

// Sample product data (replace with actual product data)
const products = [
  {
    id: 1,
    name: 'Product 1',
    image: productIMG,
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    image: productIMG,
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    image: productIMG,
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    image: productIMG,
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    image: productIMG,
    price: 500,
  },
  {
    id: 5,
    name: 'Product 5',
    image: productIMG,
    price: 500,
  },
  {
    id: 5,
    name: 'Product 5',
    image: productIMG,
    price: 500,
  },
  {
    id: 5,
    name: 'Product 5',
    image: productIMG,
    price: 500,
  },
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h2 className="page-title">Explore Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <Link to="/productPage" style={{ textDecoration: "none", fontSize: "19px", color: "black" }}> <button className="buy-now-btn">Buy Now</button> </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
