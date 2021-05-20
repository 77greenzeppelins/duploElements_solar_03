import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
//
import BrandLogo from '../../componentsShared/brandLogo/BrandLogo';
//
import { splitToChars } from '../../animations/gsapAccesories';

const IntroAnimatedLogo = ({ setIntroAnimation }) => {
  //basic references
  let logoWrapper = useRef(null);
  let initAnimeTL = useRef(
    gsap.timeline({ onComplete: setIntroAnimation, onCompleteParams: [false] })
  );
  // useEffect for <BrandLogo> animation
  useEffect(() => {
    //references to <BrandLogo> parts
    let logoDuplo = splitToChars(logoWrapper.children[0].children[0]);
    let logoElements = splitToChars(logoWrapper.children[0].children[1]);
    initAnimeTL.current
      .set(logoWrapper, { autoAlpha: 1, xPercent: 100 })
      .set([logoDuplo.chars, logoElements.chars], { color: '#add100' })
      .set(logoDuplo.chars, { x: '-250' })
      .to(logoElements.chars, {
        duration: 2.5,
        x: '-250',
        rotation: -360,
        ease: 'elastic.out(0.3, 0.2)',
        stagger: { each: 0.02 },
      })
      .fromTo(
        logoDuplo.chars,
        { autoAlpha: 0 },
        { duration: 1, autoAlpha: 1 },
        '>-1'
      )
      .set([logoDuplo.chars, logoElements.chars], {
        transformPerspective: 1000,
      })
      .to(logoElements.chars, {
        duration: 1.3,
        rotateX: -120,
        opacity: 0,
        transformOrigin: '100% 100% 120',
        ease: 'power4.out',
        stagger: { each: 0.05, from: 'end' },
      })
      .to(
        logoDuplo.chars,
        {
          duration: 1.3,
          rotateX: -120,
          opacity: 0,
          transformOrigin: '100% 100% 120',
          ease: 'power4.out',
          stagger: { each: 0.05, from: 'end' },
        },
        '>-1.2'
      );

    return () => {
      initAnimeTL.current.kill();
    };
  }, [setIntroAnimation]);
  //
  return (
    <div className="intro-container">
      <div ref={el => (logoWrapper = el)}>
        <BrandLogo />
      </div>
    </div>
  );
};

export default IntroAnimatedLogo;
