import React from 'react'
import  { useEffect, useState } from "react";

import Layout from './Layout'


const Slider = () => {
    // Array of online image URLs (nature images)
  const images = [
    "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg",
    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image in the slider
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image in the slider
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatic slide transition every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return ( 
  
            <>
                
      {/* <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center" }}>
        <h1>Welcome to {username ? username : "No username"} !</h1>
        <p>lore</p>
      </div> */}
       <div className="home-container">
        <div className="slider-container">
          <button className="prev" onClick={prevSlide}>
            ←
          </button>
          <div className="slider">
            <img
              src={images[currentIndex]}
              alt={`Nature ${currentIndex + 1}`}
            />
          </div>
          <button className="next" onClick={nextSlide}>
            →
          </button>
        </div>
      </div>
            </>

  )
}

export default Slider
