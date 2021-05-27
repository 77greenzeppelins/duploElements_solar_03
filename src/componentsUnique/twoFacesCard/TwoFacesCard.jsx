import React, { useRef, useEffect } from 'react';
// import { selfPresentationText } from '../assets/routeAboutData';
import { gsap } from 'gsap';
// stuff for avers
import CardAvers from './CardAvers';
import { selfPresentationText } from '../../assets/routeAboutData';
//stuff for revers
import CardRevers from './CardRevers';
import { ReactComponent as SvgImage } from '../../assets/svg/sun1sized.svg';
//
// import { ReactComponent as SunAndClouds } from '../assets/svg/sun1sized.svg';
//
// const { header } = selfPresentationText;

const TwoFacesCard = props => {
  const { setCardDimention } = props;
  //
  const { header } = selfPresentationText;
  //

  useEffect(() => {
    const { bottom } = cardBody.getBoundingClientRect();
    console.log('<TwoFacesCard> / useEffect / bottom  ', bottom);
    setCardDimention({ cardBottom: bottom });
  }, [setCardDimention]);
  //   let SunAndCloudsWrapper = useRef(null);
  //   let cardItself = useRef(null);
  //   let cardFront = useRef(null);
  //   let faces = useRef(null);
  let cardBody = useRef(null);
  let TwoFacesCardTL = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    //stuff for revers
    const cardRevers = cardBody.children[0];
    const svgImage = cardRevers.children;
    // const svgContent = [...svgImage[0].children];
    console.log('<TwoFacesCard> / useEffect / svgImage', svgImage[0].children);
    //stuff for avers
    const cardAvers = cardBody.children[1];
    //   const svgWrapper = SunAndCloudsWrapper.children[0];
    //   const svgContent = [...svgWrapper.children];
    //   console.log('svgContent', svgContent);
    TwoFacesCardTL.current
      .set(svgImage, { autoAlpha: 0, scale: 0.5 })
      //   .set(cardAvers, { autoAlpha: 0 })
      .to(
        svgImage,
        {
          duration: 1,
          autoAlpha: 1,
          scale: 1,
          //   ease: 'power1.in',
        },
        '>0.3'
      )
      .to(cardBody, {
        duration: 2,
        rotateY: 180,
        transformOrigin: '50% 50%',
        // ease: 'power2.out',
      })
      .addLabel('cardRotationStart', '<')
      //below: reduces translateZ from SCSS
      .to(cardRevers, { duration: 0.5, translateZ: 0 }, 'cardRotationStart+=1')
      .to(
        svgImage,
        { duration: 0.6, scale: 0.6, autoAlpha: 0 }, //transformOrigin: '50% 50%'
        'cardRotationStart+=0.2'
      )
      .play();
    //   .timeScale(0.5);
  }, []);
  return (
    <div className="card-wrapper">
      <div ref={el => (cardBody = el)} className="card-body">
        <CardRevers>
          <div className="card-body__face revers">
            <SvgImage />
          </div>
        </CardRevers>

        <CardAvers>
          <div className="card-body__face avers">
            <div className="avers-content">
              {header.map(({ id, word }) => (
                <span key={id}>{word}</span>
              ))}
            </div>
          </div>
        </CardAvers>
      </div>
    </div>
  );
};

export default TwoFacesCard;
