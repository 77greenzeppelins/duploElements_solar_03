import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Slide from './Slide';

const CarouselSlider = props => {
  //
  const { activeIndex, slides } = props;
  const [slide0, slide1, slide2, slide3, slide4] = slides;
  //basic references
  let carouselSliderWrapper = useRef(null);
  let CarouselSliderTL = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    //
    let slidesArray = [...carouselSliderWrapper.children];
    //
    CarouselSliderTL.current
      .set(slidesArray, {
        autoAlpha: 0,
      })
      .to(slidesArray[activeIndex], {
        duration: 0.4,
        autoAlpha: 1,
      })
      .play();
  }, [activeIndex]);

  return (
    <div
      ref={el => (carouselSliderWrapper = el)}
      className="carousel-slider__wrapper"
    >
      <Slide>
        <p className="slide__header">
          <span>{slide0.intro}</span> <br />
          <span>{slide0.enlightenment.line1}</span> <br />
          <span>{slide0.enlightenment.line2}</span>
        </p>
      </Slide>
      <Slide>
        <p className="slide__text-box">{slide1.text1}</p>
      </Slide>
      <Slide>
        <p className="slide__text-box">
          <span>
            {slide2.text1}{' '}
            <q>
              <i>{slide2.title}</i>
            </q>
          </span>
          {/* <q>{slide2.title}</q> */}
          <span>{slide2.text2}</span>
        </p>
      </Slide>
      <Slide>
        <p className="slide__text-box">{slide3.text1}</p>
      </Slide>
      <Slide>
        <p className="slide__text-box">{slide4.text1}</p>
      </Slide>
    </div>
  );
};

export default CarouselSlider;
