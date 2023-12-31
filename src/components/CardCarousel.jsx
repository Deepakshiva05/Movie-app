import React, { useState } from 'react';

const CardCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="card-carousel">
      <button onClick={handlePrevClick}>Prev</button>
      <div className="cards-container">
        {/* {items.map((item, index) => (
          <div
            key={index}
            className={`card ${index === currentIndex ? 'active' : ''}`}
          >
            
            <p>{item}</p>
          </div>
        ))} */}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default CardCarousel;
