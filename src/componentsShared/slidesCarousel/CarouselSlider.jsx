import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Slide from './Slide';

const CarouselSlider = props => {
  //
  const { transitionValue, carouselWrapperWidth } = props;
  // const { } = props;
  //basic references
  let carouselSliderWrapper = useRef(null);
  let CarouselSliderTL = useRef(gsap.timeline({ paused: true }));

  console.log('<CarouselSlider> / transitionValue ', transitionValue);
  //
  useEffect(() => {
    CarouselSliderTL.current
      .to(carouselSliderWrapper, { x: transitionValue * -1 })
      .play();
  }, [transitionValue]);
  // useEffect(() => {
  //   let slideArray = [...carouselSliderWrapper.children];
  //   gsap.to(slideArray, { width: carouselWrapperWidth });
  // }, [carouselWrapperWidth]);
  //
  return (
    <div
      ref={el => (carouselSliderWrapper = el)}
      className="carousel-slider__wrapper"
    >
      <Slide number={1} />
      <Slide number={2} />
      <Slide number={3} />
      <Slide number={4} />
    </div>
  );
};

export default CarouselSlider;
