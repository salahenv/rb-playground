import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ children, options = {} }) => {
  const {
    autoplay = false,
    autoplayInterval = 3000,
    infiniteScroll = true,
    transitionDuration = 500,
  } = options;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const slideCount = children.length;

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

  return (
    <div className="relative overflow-hidden w-full">
      {/* Slides */}
      <div
        className="flex transition-transform"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? `transform ${transitionDuration}ms ease` : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {infiniteScroll
          ? [children[children.length - 1], ...children, children[0]].map((child, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                {child}
              </div>
            ))
          : children.map((child, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                {child}
              </div>
            ))}
      </div>

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
