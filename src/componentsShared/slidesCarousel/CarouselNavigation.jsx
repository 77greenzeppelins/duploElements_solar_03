import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const CarouselNavigation = props => {
  //
  const { slides, carouselWrapperWidth, setTransitionValue } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  //basic refs
  let buttonLeft = useRef(null);
  let buttonRight = useRef(null);
  let buttonLeftTL = useRef(gsap.timeline({ pauser: true }));
  let buttonRightTL = useRef(gsap.timeline({ pauser: true }));
  //
  const goRight = () => {
    currentSlide < slides.length - 1 &&
      setCurrentSlide(prevSlide => prevSlide + 1);
  };
  const goLeft = () => {
    currentSlide > 0 && setCurrentSlide(prevSlide => prevSlide - 1);
  };
  useEffect(() => {
    let value = currentSlide * carouselWrapperWidth;
    setTransitionValue(value);
    console.log(
      '<CarouselNavigation> / useEffect / currentSlide ',
      currentSlide
    );
    console.log(
      '<CarouselNavigation> / useEffect / carouselWrapperWidth ',
      carouselWrapperWidth
    );
    console.log('<CarouselNavigation> / useEffect / value ', value);
  }, [currentSlide]);

  useEffect(() => {
    currentSlide === 0
      ? gsap.to(buttonLeft, { color: 'green' })
      : gsap.to(buttonLeft, { color: 'white' });
    currentSlide === 3
      ? gsap.to(buttonRight, { color: 'green' })
      : gsap.to(buttonRight, { color: 'white' });
  }, [currentSlide]);
  //

  //

  return (
    <div className="carousel-navigation__wrapper">
      <button ref={el => (buttonLeft = el)} onClick={goLeft}>
        left
      </button>
      <button ref={el => (buttonRight = el)} onClick={goRight}>
        right
      </button>
    </div>
  );
};

export default CarouselNavigation;
