import React, { useState, useEffect } from 'react';
import CarouselSlider from './CarouselSlider';
import CarouselNavigation from './CarouselNavigation';
//
// import { ourStory } from '../../assets/carouselSlides';

//
const Carousel = props => {
  //data from <RouteOurHistoryBody> / array of text lines
  const { slides } = props;
  const numberOfIndices = slides.length - 1;
  //basic state
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log(`%c<Carousel> / activeIndex: `, ' color: red', activeIndex);
  }, [activeIndex]);

  return (
    <div className="carousel__wrapper">
      <CarouselSlider activeIndex={activeIndex} slides={slides} />
      <CarouselNavigation
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        numberOfIndices={numberOfIndices}
      />
    </div>
  );
};

export default Carousel;
