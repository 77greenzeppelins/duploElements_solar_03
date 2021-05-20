import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { selfPresentationText } from '../assets/routeAboutData';
//
const { header, lines } = selfPresentationText;

const SelfPresentation = props => {
  //basic referencef
  let headerLine = useRef(null);
  let listLines = useRef(null);
  let SelfPresentationTL = useRef(
    gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ['SelfPresentationTL started... '],
    })
  );
  //
  useEffect(() => {
    //references for animation
    const headerContent = [...headerLine.children];
    const listContent = [...listLines.children];

    SelfPresentationTL.current
      .set(headerContent, {
        y: gsap.utils.wrap(['+=0', '+=50%', '+=100%', '+=150%']),
        autoAlpha: 0,
        scale: 0.6,
      })
      .to(headerContent, {
        duration: 1,
        autoAlpha: 1,
        scale: 1,
        transformOrigin: '0% 50%',
        ease: 'back.out(2.7)',
      })
      .to(
        headerContent,
        {
          duration: 0.7,
          y: gsap.utils.wrap(['+=0', '-=50%', '-=100%', '-=150%']),
        },
        '<0.5'
      )
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
    <section className="self-presentation-box__wrapper">
      <h1
        ref={el => (headerLine = el)}
        className="self-presentation-box__header"
      >
        {header.map(({ id, word }) => (
          <span key={id}>{word}</span>
        ))}
      </h1>
      <ul ref={el => (listLines = el)} className="self-presentation-box__lines">
        {lines.map(({ id, text }) => (
          <li key={id} className="self-presentation-box__line">
            {text}
          </li>
        ))}
      </ul>

      <div className="self-presentation-box__bottom"></div>
    </section>
  );
};

export default SelfPresentation;
