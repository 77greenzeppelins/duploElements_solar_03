import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const DotIndicator = props => {
  let dotContainer = useRef(null);
  const { iconArray, activeIndex } = props;
  //
  useEffect(() => {
    const slidesArray = gsap.utils.toArray(dotContainer.children);
    console.log(
      '<DotIndicator> / useEffect / slidesArray[activeIndex]',
      slidesArray[activeIndex]
    );
    //
    const currentSlider = slidesArray[activeIndex];
    //
    const dotIndicatorTL = gsap.timeline();
    //
    currentSlider.classList.contains(`dot${activeIndex}`) &&
      dotIndicatorTL
        .set(slidesArray, { backgroundColor: 'transparent' })
        .set(currentSlider, { backgroundColor: '#add100' });
    //
  }, [activeIndex]);
  return (
    <div>
      <div ref={el => (dotContainer = el)} className="dots-container">
        {iconArray.map((icon, index) => (
          <div key={index} className={`dot dot${index}`}></div>
        ))}
      </div>
    </div>
  );
};

export default DotIndicator;
