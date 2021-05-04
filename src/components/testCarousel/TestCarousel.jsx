import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
//
import Slider from './slider';
import DotIndicator from './dotIndicator';
//
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
import SvgIcon from '../atoms/svgIcon';

const iconArray = [
  <SiMailDotRu />,
  <ImPhone />,
  <IoIosArrowDropleft />,
  <IoIosArrowDropright />,
];
//
const TestCarousel = () => {
  //
  const [carousel, setCarousel] = useState({
    activeIndex: 0,
    translate: 0,
  });
  const { activeIndex, translate } = carousel;
  //refs
  let containerInner = useRef(null);
  //
  function leftArrowClickHandler(event) {
    const { width } = containerInner.getBoundingClientRect();
    activeIndex > 0 &&
      setCarousel({
        ...carousel,
        activeIndex: activeIndex - 1,
        translate: (activeIndex - 1) * width,
      });
  }
  //
  const rightArrowClickHandler = () => {
    const { width } = containerInner.getBoundingClientRect();
    //
    activeIndex < iconArray.length - 1 &&
      setCarousel({
        ...carousel,
        activeIndex: activeIndex + 1,
        translate: (activeIndex + 1) * width,
      });
  };
  //
  useEffect(() => {
    //staf for arrows
    const leftArrow = containerInner.children[1].children[0];
    const rightArrow = containerInner.children[1].children[1];
    //
    if (activeIndex === 0) {
      gsap.set(leftArrow, {
        pointerEvents: 'none',
        opacity: 0.5,
        cursor: 'auto',
      });
    } else {
      gsap.set(leftArrow, {
        pointerEvents: 'auto',
        opacity: 1,
        cursor: 'pointer',
      });
    }
    if (activeIndex === iconArray.length - 1) {
      gsap.set(rightArrow, {
        pointerEvents: 'none',
        opacity: 0.5,
        cursor: 'auto',
      });
    } else {
      gsap.set(rightArrow, {
        pointerEvents: 'auto',
        opacity: 1,
        cursor: 'pointer',
      });
    }
    console.log(
      `<TestCarousel> / useEffect /  current activeIndex: ${activeIndex}; current translate: ${translate}`
    );
    //staff for slides / moving "slider-container"
    const sliderContainer = containerInner.children[0];
    console.log('sliderContainer', sliderContainer);
    //animation for the whole <Slider>
    const sliderTL = gsap.timeline();
    sliderTL
      .set([leftArrow, rightArrow], { pointerEvents: 'none' })
      .to(
        sliderContainer,
        { duration: 0.2, opacity: 0.2, ease: 'power2.in' },
        '<'
      )
      .to(
        sliderContainer,
        { duration: 0.4, opacity: 1, ease: 'power2.out', x: -translate },
        '<0.2'
      )
      .to(
        [leftArrow, rightArrow],
        { duration: 0.1, pointerEvents: 'auto' },
        '<0.2'
      );

    // gsap.to(sliderContainer, { duration: 0.5, x: -translate });
  }, [activeIndex, translate]);
  //
  return (
    <div ref={el => (containerInner = el)} className="container-inner">
      <Slider
        leftArrowClickHandler={leftArrowClickHandler}
        rightArrowClickHandler={rightArrowClickHandler}
        iconArray={iconArray}
      />
      <DotIndicator iconArray={iconArray} activeIndex={activeIndex} />

      {/*===============================================================*/}
      <footer className="glass-footer-wrapper">
        <div className="glass-footer-bg">
          <div className="glass-footer-buttons-bar">
            <SiMailDotRu className="glass-footer-icon svg-neumorphism  " />

            <a href="mailto:77greenzeppelins@gmail.com">
              <SiMailDotRu className="glass-footer-button__icon svg-sole " />
            </a>
            <div className="glass-footer-button style-neumorphism">
              <ImPhone className="glass-footer-button__icon " />
            </div>
          </div>

          <Link to="/about" className="about__link style-neumorphism">
            <SvgIcon icon={<IoIosArrowDropleft />} />
            <p>go to about page...</p>
          </Link>
        </div>
        <div className="about__footer-line" />
      </footer>
    </div>
  );
};
export default TestCarousel;

/* {iconArray.map((icon, index) => (
          <div
            key={index}
            // onTouchStart={touchStart(index)}
            // onTouchEnd={touchEnd}
            // onTouchMove={touchMove}
            // onMouseDown={touchStart}
            // onMouseUp={touchEnd}
            // onMouseLeave={touchEnd}
            // onMouseMove={touchMove}
            className="slide"
          >
            <h2 className="slide__product">ProductName</h2>
            <h4 className="slide__price">$666</h4>
            <div className="slide__icon">{icon}</div>
            <div className="slide__button">PLAY</div>
          </div>
        ))} */

//
// function touchStart(event) {
//   return function (index) {
//     console.log('touchStart / event', event);
//   };
// }
// function touchEnd(event) {
//   console.log('touchEnd / event', event);
// }
// function touchMove(event) {
//   console.log('touchMove / event');
// }
//

//
// const getContainerWidth = target => {
//   const containerWidth = target.getBoundingClientRect();
//   const { width } = containerWidth;
//   console.log('getContainerWidth / width', width);
//   return width;
// };
// const containerInnerWidth = containerInner.containerWidth;
// console.log('containerInnerWidth', containerInnerWidth);
// const { width } = containerInner.current.getBoundingClientRect();
