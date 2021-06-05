import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
//
import { splitText, wordsFlopping } from '../animations/textAnimationLibrary';
//
import { ReactComponent as Sun80 } from '../assets/svg/sun_w80_h80_v2.svg';
import SvgPlusText from '../componentsShared/svgPlusText/SvgPlusText';
//data for component
import { selfPresentationText } from '../assets/routeAboutData';
//

//
const { body } = selfPresentationText;

const SelfPresentation = props => {
  //data from props
  const { isMenuVisible, animationDuration } = props;
  //data from imports
  const {
    forClients,
    questionMark,
    question,
    questionDetails,
    answerMark,
    answer,
    ekipa,
  } = body;
  //basic referencef
  let selfPresentationWrapper = useRef(null);
  let forClientsText = useRef(null);
  //staff for gsap animations
  let SelfPresentationTL = useRef(
    gsap.timeline({
      paused: true,
      // onStart: console.log,
      // onStartParams: ['SelfPresentationTL started... '],
    })
  );
  // test of register effect
  gsap.registerEffect(wordsFlopping);
  //
  useEffect(() => {
    //
    let componentParts = [...selfPresentationWrapper.children];
    const forClientsTextSplited = splitText(forClientsText, 'words');
    console.log(
      '<SelfPresentation> / useEffect / animationDuration',
      animationDuration
    );
    animationDuration &&
      SelfPresentationTL.current
        .set(componentParts, { autoAlpha: 0 })
        .to(selfPresentationWrapper, {
          delay: animationDuration,
          autoAlpha: 1,
        })
        .set(componentParts[0], { autoAlpha: 1 })
        .wordsFlopping(forClientsTextSplited.words)
        .to(componentParts[1], { duration: 1, autoAlpha: 1 }, '>')
        .play();
    return () => SelfPresentationTL.current.pause().kill();
  }, [animationDuration]);
  //

  //
  return (
    <div
      ref={el => (selfPresentationWrapper = el)}
      className={
        isMenuVisible
          ? 'self-presentation__wrapper none'
          : 'self-presentation__wrapper flex'
      }
    >
      <p
        ref={el => (forClientsText = el)}
        className="self-presentation__text-line pseudo-header"
      >
        {forClients}
      </p>

      <div className="self-presentation__svg-plus-text">
        <SvgPlusText svg={<Sun80 />}>
          <p>
            {/* <span>{questionMark[0]}</span> <br />
            <span>{questionMark[1]}</span> */}
            Postawmy sobie na początek następujęce pytanie:
          </p>
        </SvgPlusText>
      </div>

      <p className="self-presentation__text-line sub-header">{question}</p>
      <p className="self-presentation__text-line">{questionDetails}</p>

      <div className="self-presentation__svg-plus-text">
        <SvgPlusText svg={<Sun80 />}>
          {/* <p>
            <span>{answerMark[0]}</span> <br />
            <span>{answerMark[1]}</span>
          </p> */}
          Udzielmy wyczerpującej odpowiedzi:
        </SvgPlusText>
      </div>

      <p className="self-presentation__text-line sub-header">{answer}</p>

      <p className="self-presentation__text-line">{ekipa}</p>
    </div>
  );
};

export default SelfPresentation;

//
//<ul ref={el => (listLines = el)} className="self-presentation-box__lines">
//  {lines.map(({ id, text }) => (
//   <li key={id} className="self-presentation-box__line">
//    {text}
//    </li>
//  ))}
//</ul>;

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

// useEffect(() => {
//   //references for animation
//   const listContent = [...listLines.children];
//   //
//   SelfPresentationTL.current
//     .set(listContent, { autoAlpha: 0, scale: 0.9 }, '<')
//     .to(
//       listContent,
//       {
//         duration: 1,
//         scale: 1,
//         autoAlpha: 1,
//         transformOrigin: '0% 50%',
//         ease: 'back.out(1.1)',
//         stagger: { each: 0.05 },
//       },
//       '<0.5'
//     )
//     .play();

//   return () => SelfPresentationTL.current.pause().kill();
// }, []);
