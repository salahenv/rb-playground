import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ children, options = {} }) => {
  const {
    autoplay = false,
    autoplayInterval = 3000,
    infiniteScroll = true,
    transitionDuration = 500,
    slidesToShow = 1.5, // Number of slides visible at once, supports decimals for partial slides
  } = options;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const slideCount = children.length;

  const slideWidthPercentage = 100 / slidesToShow; // Each slide's width as a percentage

  const goToSlide = (index) => {
    if (!infiniteScroll) {
      if (index < 0 || index >= slideCount) return;
    }
    setIsAnimating(true);
    setCurrentIndex(index >= 0 ? index % slideCount : (index + slideCount) % slideCount);
  };

  const handlePrev = () => {
    goToSlide(currentIndex - 1);
  };

  const handleNext = () => {
    goToSlide(currentIndex + 1);
  };

  // Autoplay setup
  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, autoplayInterval);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, autoplayInterval, currentIndex]);

  const handleTransitionEnd = () => setIsAnimating(false);

  // Generate slides with cloned slides for infinite scrolling
  const renderedSlides = infiniteScroll
    ? [children[children.length - 1], ...children, children[0]]
    : children;

  return (
    <div className="relative overflow-hidden w-full">
      {/* Slides */}
      <div
        className="flex transition-transform"
        style={{
          transform: `translateX(-${currentIndex * slideWidthPercentage}%)`,
          transition: isAnimating ? `transform ${transitionDuration}ms ease` : 'none',
          width: `${renderedSlides.length * slideWidthPercentage}%`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {renderedSlides.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${slideWidthPercentage}%`,
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Prev
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-black' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
