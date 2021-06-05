import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const NavigationArrows = props => {
  //
  const { activeIndex, setActiveIndex, numberOfIndices } = props;

  let buttonLeft = useRef(null);
  let buttonRight = useRef(null);
  let buttonLeftTL = useRef(gsap.timeline({ pauser: true }));
  let buttonRightTL = useRef(gsap.timeline({ pauser: true }));

  const prevSlide = () =>
    setActiveIndex(activeIndex < 1 ? numberOfIndices : activeIndex - 1);

  const nextSlide = () =>
    setActiveIndex(activeIndex === numberOfIndices ? 0 : activeIndex + 1);

  // useEffect(() => {
  //   activeIndex === 0
  //     ? gsap.to(buttonLeft, { autoAlpha: 0.5 })
  //     : gsap.to(buttonLeft, { color: 'white' });
  //   activeIndex === 3
  //     ? gsap.to(buttonRight, { autoAlpha: 0.5 })
  //     : gsap.to(buttonRight, { color: 'white' });
  // }, [activeIndex]);
  //
  return (
    <div className="navigation-arrows__wrapper">
      <button onClick={prevSlide} ref={el => (buttonLeft = el)}>
        left
      </button>
      <button onClick={nextSlide} ref={el => (buttonRight = el)}>
        right
      </button>
    </div>
  );
};

export default NavigationArrows;
