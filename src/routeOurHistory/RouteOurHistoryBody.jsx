import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
//staf for <LinkWithState>
import LinkWithState from '../componentsShared/linkWithState/LinkWithState';
import SvgIcon from '../componentsShared/svgIcon/svgIcon';
import { IoIosReturnLeft } from 'react-icons/io';

import { ReactComponent as BackWord } from '../assets/svg/powroot1.svg';
//
import Carousel from '../componentsShared/slidesCarousel/Carousel';
//data
import { ourStory } from '../assets/routeOurHistoryData';

const RouteOurHistoryBody = () => {
  //
  const {
    intro,
    suddenly,
    hasHappend,
    enlightenment,
    slides,
    conclusion,
  } = ourStory;
  //
  let container = useRef(null);
  let overlay = useRef(null);
  let content = useRef(null);
  let routOurStoryTL = useRef(
    gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ['ourStoryTL is starting...'],
    })
  );
  // let ourStoryCloseTL = useRef(gsap.timeline());
  //
  useEffect(() => {
    routOurStoryTL.current
      // .to(overlay, { duration: 0.9, autoAlpha: 0 })
      // .to(content, { duration: 0.6, autoAlpha: 1 })
      .play();

    return () => routOurStoryTL.current.pause().kill();
  }, []);

  // const closePanel = () => {
  //   console.log('<RouteOurStory> / onClick = {closePanel}');
  //   ourStoryCloseTL.current
  //     .to(content, { duration: 0.3, autoAlpha: 0 })
  //     .to(overlay, { duration: 0.3, autoAlpha: 0 })
  //     .call(previousPageHandler);
  // };
  //
  return (
    <div ref={el => (container = el)} className="rohb__container">
      {/* <div ref={el => (overlay = el)} className="rohb__overlay" /> */}
      <div ref={el => (content = el)} className="rohb__content">
        <div className="rohb__text-box">
          <p>{intro}</p>
        </div>
        <div className="rohb__text-box">
          <p>{suddenly}</p>
        </div>
        <div className="rohb__carousel-entry">
          <div className="rohb__text-header light">
            <p>{hasHappend}</p>
          </div>
          <div className="rohb__text-header">
            <p>{enlightenment.line1}</p>
          </div>
          <div className="rohb__text-header">
            <p>{enlightenment.line2}</p>
          </div>
        </div>

        {/* <div className="rohb__carousel-container">
          <Carousel slides={slides} />
        </div> */}
        {/* <div className="rohb__text-box">
          <p>{conclusion}</p>
        </div> */}
        <nav className="rohb__button-wrapper">
          <LinkWithState pathname="/about" from="/ourhistory">
            {/* <SvgIcon icon={<IoIosReturnLeft />} iconSize="icon-medium" /> */}
            <p className="rohb__button-wrapper">
              <BackWord />
            </p>
          </LinkWithState>
        </nav>
      </div>
    </div>
  );
};

export default RouteOurHistoryBody;
