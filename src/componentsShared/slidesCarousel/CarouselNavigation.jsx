import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
//
import NavigationArrows from './NavigationArrows';
import NavigationIndicator from './NavigationIndicator';

const CarouselNavigation = props => {
  //
  const { activeIndex, setActiveIndex, numberOfIndices } = props;

  return (
    <div className="carousel-navigation__wrapper">
      <NavigationArrows
        // activeIndex={activeIndex}
        // setActiveIndex={setActiveIndex}
        // numberOfIndices={numberOfIndices}
        {...props}
      />
    </div>
  );
};

export default CarouselNavigation;
