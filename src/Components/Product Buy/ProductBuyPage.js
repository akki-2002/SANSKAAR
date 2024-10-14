import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductBuyPage.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import product1 from "../../Assests/diya.jpg"

function ProductBuyPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);

  const navigate = useNavigate();
  
  const [product, setProduct] = useState({
    title: "Sample Product",
    price: 500,
    description: "This is a sample product description for demo purposes.",
    productImages: [product1],
    itemInStock: true,
  });
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [selectedImage, setSelectedImage] = useState(product.productImages[0]);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setTotalPrice(product.price * quantity);
  }, [quantity, product.price]);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(prev => prev - 1);
  const handleImageClick = (index) => setImgIndex(index);
  const handleBuyNow = () => navigate("/checkout");

  return (
    <>
      <Navbar />
      <span style={{ margin: "16px" }}>
        <Link to="/" style={{ textDecoration: "none", fontSize: "19px", color: "black" }}>
          Home
        </Link>{" "}
        &gt;
        <span style={{ textDecoration: "none", fontSize: "19px" }}>{product.title}</span>
      </span>

      <div className="productMain">
        <div className="prdImgs">
          <div className="prdiMin">
            {product.productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`pd${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          <div className="prdiMax">
            <img src={product.productImages[imgIndex]} alt="Selected Product" />
          </div>
        </div>
        
        <div className="prdDets">
          <h1>{product.title}</h1>
          <h1 className="price">₹{totalPrice}</h1>
          <p className="tax">Inclusive of all taxes</p>
          <p className="desc">Description</p>
          <p className="desc-p">{product.description}</p>

          <div className="qua">
            <p>Quantity</p>
            <div className="quantity-controls">
              <button onClick={decrementQuantity}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <p className={product.itemInStock ? "ins success" : "ins error"}>
            {product.itemInStock ? "Item in Stock" : "Out of Stock"}
          </p>

          <div className="abBtns">
            <button className="addtocartbtn">ADD TO CART</button>
            <button className="buynowbtn" onClick={handleBuyNow}>BUY NOW</button>
          </div>

          <div className="productDetails">
            <h2>Delivery Information</h2>
            <ul>
              <li>Standard Delivery: 7-9 business days.</li>
              <li>Products may vary slightly in appearance based on availability.</li>
              <li>Order delivery may be delayed due to traffic or location.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductBuyPage;
