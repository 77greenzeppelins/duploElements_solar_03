import React, { useRef, useState, useEffect } from 'react';
import CarouselSlider from './CarouselSlider';
import CarouselNavigation from './CarouselNavigation';
//
import { ourStory } from '../../assets/carouselSlides';

const Carousel = () => {
  //array of text lines
  const { slides } = ourStory;
  //basic refs
  let carouselWrapper = useRef(null);
  //general state
  const [carouselWrapperWidth, setCarouselWrapperWidth] = useState(0);
  //state for <CaruselSlider> transition; set in <CarouselNavigation>
  const [transitionValue, setTransitionValue] = useState(0);

  useEffect(() => {
    //
    function countCarouselWrapperDimension() {
      const carouselWrapperDimensions = carouselWrapper.getBoundingClientRect();
      const { width } = carouselWrapperDimensions;
      setCarouselWrapperWidth(width);
    }
    window.addEventListener('resize', countCarouselWrapperDimension);
    countCarouselWrapperDimension();
    //
    // console.log(
    //   `%c<Carousel> / carouselWrapperWidth: `,
    //   ' color: red',
    //   carouselWrapperWidth
    // );
    //
    return () =>
      window.removeEventListener('resize', countCarouselWrapperDimension);
  });
  //
  return (
    <div ref={el => (carouselWrapper = el)} className="carousel__wrapper">
      <CarouselSlider
        transitionValue={transitionValue}
        carouselWrapperWidth={carouselWrapperWidth}
      />
      <CarouselNavigation
        slides={slides}
        carouselWrapperWidth={carouselWrapperWidth}
        // setCarouselWrapperWidth={setCarouselWrapperWidth}
        setTransitionValue={setTransitionValue}
      />
    </div>
  );
};

export default Carousel;
