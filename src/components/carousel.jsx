import React, { useState } from "react";

const Carousel = ({ children, slideWidth = "100%" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = React.Children.count(children);
  const visibleSlides = Math.floor(100 / parseFloat(slideWidth)); // Number of slides visible in the viewport

  // Clone slides for seamless looping
  const slides = [
    ...React.Children.toArray(children).slice(-visibleSlides), // Clone last few slides
    ...React.Children.toArray(children),
    ...React.Children.toArray(children).slice(0, visibleSlides), // Clone first few slides
  ];

  const totalClonedSlides = slides.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(0); // Reset to the first real slide
    } else if (currentIndex < 0) {
      setCurrentIndex(totalSlides - 1); // Reset to the last real slide
    }
  };

  const translateXValue =
    -((currentIndex + visibleSlides) % totalClonedSlides) * parseFloat(slideWidth);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(${translateXValue}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ flexBasis: slideWidth }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Controls and Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
        {/* Prev Button */}
        <button
          onClick={goToPrev}
          className="bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
        >
          ❮
        </button>

        {/* Indicators */}
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
