import React from 'react';
import Carousel from './components/carousel';

const CaraouselPage = () => {
  return (
    <Carousel
      options={{
        autoplay: true,
        autoplayInterval: 3000,
        infiniteScroll: true,
        transitionDuration: 500,
        slidesToShow:1.5
      }}
    >
      <div className="bg-red-500 text-white text-center p-10">Slide 1</div>
      <div className="bg-green-500 text-white text-center p-10">Slide 2</div>
      <div className="bg-blue-500 text-white text-center p-10">Slide 3</div>
    </Carousel>
  );
};

export default CaraouselPage;