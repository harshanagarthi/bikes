import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/tvsraider.css'; // Import the CSS file for styling
import bikeImage1 from '../Assets/Images/raider125red.png'; // Import your bike images
import bikeImage2 from '../Assets/Images/raider125black.png';
import bikeImage3 from '../Assets/Images/raider125-1.png';

const images = [bikeImage1, bikeImage2, bikeImage3];

const Tvsraider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div >
      <Link to="/tvs"><h1>TVS</h1></Link>
    <div className="tvsraider-container">
      <h2>TVS Raider 125</h2>
      <div className="image-slider">
        <button onClick={handlePrevClick} className="arrow left-arrow">‹</button>
        <img src={images[currentIndex]} alt="TVS Raider 125" className="bike-image" />
        <button onClick={handleNextClick} className="arrow right-arrow">›</button>
      </div>
      <div className="price-details">
        <p><strong>Ex-showroom:</strong> ₹ 96,520</p>
        <p><strong>RTA:</strong> ₹ 12,082</p>
        <p><strong>Insurance (Comprehensive):</strong> ₹ 7,516</p>
        <p className="total-price"><strong>Price:</strong> ₹ 1,20,563</p>
      </div>
    </div>
    </div>
  );
}

export default Tvsraider;

