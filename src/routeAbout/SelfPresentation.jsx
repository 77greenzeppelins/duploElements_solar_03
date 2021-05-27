import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { selfPresentationText } from '../assets/routeAboutData';
//
const { lines } = selfPresentationText;

const SelfPresentation = props => {
  //basic referencef
  let listLines = useRef(null);
  let SelfPresentationTL = useRef(
    gsap.timeline({
      paused: true,
      delay: 2.5,
      onStart: console.log,
      onStartParams: ['SelfPresentationTL started... '],
    })
  );
  //
  useEffect(() => {
    //references for animation
    const listContent = [...listLines.children];
    //
    SelfPresentationTL.current
      .set(listContent, { autoAlpha: 0, scale: 0.9 }, '<')
      .to(
        listContent,
        {
          duration: 1,
          scale: 1,
          autoAlpha: 1,
          transformOrigin: '0% 50%',
          ease: 'back.out(1.1)',
          stagger: { each: 0.05 },
        },
        '<0.5'
      )
      .play();

    console.log(
      '<SelfPresentationalBox> / useEffect / SelfPresentationTL.current',
      SelfPresentationTL.current
    );
    return () => SelfPresentationTL.current.pause().kill();
  }, []);
  //
  return (
    <div className="self-presentation-box__wrapper">
      <ul ref={el => (listLines = el)} className="self-presentation-box__lines">
        {lines.map(({ id, text }) => (
          <li key={id} className="self-presentation-box__line">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelfPresentation;

// .set(headerContent, {
//         y: gsap.utils.wrap(['+=0', '+=50%', '+=100%', '+=150%']),
//         autoAlpha: 0,
//         scale: 0.6,
//       })
//       .to(headerContent, {
//         duration: 1,
//         autoAlpha: 1,
//         scale: 1,
//         transformOrigin: '0% 50%',
//         ease: 'back.out(2.7)',
//       })
//       .to(
//         headerContent,
//         {
//           duration: 0.7,
//           y: gsap.utils.wrap(['+=0', '-=50%', '-=100%', '-=150%']),
//         },
//         '<0.5'
//       )
