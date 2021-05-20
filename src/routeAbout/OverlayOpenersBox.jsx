import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
//
import OverlayOpener from './OverlayOpener';
import { contentOpenersLabels } from '../assets/routeAboutData';
//

const OverlayOpenersBox = props => {
  //basic refs
  let openersBoxWrapper = useRef(null);
  let OverlayOpenersBoxTL = useRef(
    gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ['OverlayOpenersBoxTL started... '],
      delay: 1,
    })
  );
  //
  useEffect(() => {
    //refs for animation
    const openersBoxContent = [...openersBoxWrapper.children];
    //
    OverlayOpenersBoxTL.current
      .set(openersBoxContent, { scale: 0.8 })
      .to(openersBoxContent, {
        duration: 1,
        scale: 1,
        autoAlpha: 1,
        transformOrigin: '0% 50%',
        ease: 'back.out(2.7)',
        stagger: { each: 0.05 },
      })
      .play();
    console.log('openersBoxContent', openersBoxContent);
  }, []);
  const { overlayOpenerHandler } = props;
  return (
    <div
      ref={el => (openersBoxWrapper = el)}
      className="overlay-openers-box_wrapper"
    >
      {contentOpenersLabels.map(({ button, line1, line2 }) => (
        <OverlayOpener
          overlayOpenerHandler={ev => overlayOpenerHandler(ev)}
          key={button}
          button={button}
          line1={line1}
          line2={line2}
        />
      ))}
      <div className="self-presentation-box__bottom"></div>
    </div>
  );
};

export default OverlayOpenersBox;
