import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import
import SelfPresentation from './SelfPresentation';
import SelfPresentationDetail from './SelfPresentationDetails';
//
const AboutRouteBody = () => {
  //
  let routeWrapper = useRef(null);
  let topSection = useRef(null);
  let bottomSection = useRef(null);
  let scrollingTL = useRef(
    gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ['<AboutRouteBody> / scrollingTL starts'],
    })
  );
  //
  const [scrollingState, setScrollingState] = useState({
    index: 0,
    transition: 0,
  });
  const { index, transition } = scrollingState;
  //
  // useEffect(() => {
  //   const innerHeight = window.innerHeight;
  //   // const { height: wrapperHeight } = routeWrapper.getBoundingClientRect();
  //   const { height: topSectionHeight } = topSection.getBoundingClientRect();
  //   console.log(
  //     '<AboutRouteBody> / routeWrapper / topSectionHeight',
  //     topSectionHeight
  //   );
  //   console.log('<AboutRouteBody> / routeWrapper / innerHeight', innerHeight);
  // }, []);
  //
  const scrollingArrowHandler = () => {
    const { height: wrapperHeight } = routeWrapper.getBoundingClientRect();
    setScrollingState({
      ...scrollingState,
      transition: wrapperHeight / 2,
    });
    console.log(
      '<AboutRouteBody> / scrollingArrowHandler / scrollingState',
      scrollingState
    );
  };
  //
  console.log('transition', transition);
  //
  useEffect(() => {
    scrollingTL.current
      .to(routeWrapper, { duration: 0.4, y: -transition })
      .play();
    console.log('<AboutRouteBody> / useEffect', transition);
    return () => scrollingTL.current.kill();
  }, [transition]);
  //

  return (
    <div ref={el => (routeWrapper = el)} className="about-route-body__wrapper">
      <div
        ref={el => (topSection = el)}
        className="about-route-body__top-section"
      >
        <SelfPresentation scrollingArrowHandler={scrollingArrowHandler} />
      </div>
      <div
        ref={el => (bottomSection = el)}
        className="about-route-body__bottom-section"
      >
        <SelfPresentationDetail />
      </div>
    </div>
  );
};

export default AboutRouteBody;

// if ([...ev.target.classList].includes('3')) {
//   console.log('overlayOpenerHandler / event has class 3');
//   console.log(
//     'overlayOpenerHandler / class number of button:',
//     [...ev.target.classList][1]
//   );
// }
// console.log(
//   'overlayOpenerHandler / typeof([...ev.target.classList][1])',
//   typeof [...ev.target.classList][1]
// );
