import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import { selfPresentationText } from '../assets/routeAboutData';
import { gsap } from 'gsap';
// stuff for avers
import CardAvers from './CardAvers';
import { selfPresentationText } from '../../assets/routeAboutData';
//stuff for revers
import CardRevers from './CardRevers';
import { ReactComponent as SvgImage } from '../../assets/svg/sun_w250_h300.svg';
//
// import { ReactComponent as ExclamationHandwritten } from '../../assets/svg/exclamationHandwritten_1.svg';
import { ReactComponent as ExclamationHandwritten } from '../../assets/svg/exclamationMark_1_slim.svg';

//
// const { header } = selfPresentationText;

const TwoFacesCard = props => {
  // date from props
  const { setCardDimention, setAnimationDuration } = props;
  // data from import
  const { header } = selfPresentationText;
  // data from useHistory hook to know from wher we've come...
  let history = useHistory();
  // basic refs
  let cardBody = useRef(null);
  let TwoFacesCardTL = useRef(gsap.timeline({ paused: true }));
  //
  useEffect(() => {
    const { bottom } = cardBody.getBoundingClientRect();
    // console.log('<TwoFacesCard> / useEffect / bottom  ', bottom);
    setCardDimention({ cardBottom: bottom });
  }, [setCardDimention]);
  //
  useEffect(() => {
    //stuff for revers
    const cardRevers = cardBody.children[0];
    const svgImage = cardRevers.children;
    //stuff for avers
    const cardAvers = cardBody.children[1];
    //
    // if no data from <Link>, history.location.state === undefined / falsy
    // data from <Link> + ternary operator allow to scepify which animation should be played - long or short...
    history.location.state && history.location.state.from === '/'
      ? TwoFacesCardTL.current
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
          .to(
            cardRevers,
            { duration: 0.5, translateZ: 0 },
            'cardRotationStart+=1'
          )
          .to(
            svgImage,
            {
              duration: 0.6,
              scale: 0.6,
              autoAlpha: 0,
              // onComplete: setAnimationDuration,
              // onCompleteParams: [TwoFacesCardTL.current.duration()],
            }, //transformOrigin: '50% 50%'
            'cardRotationStart+=0.2'
          )
          .play()
      : TwoFacesCardTL.current
          .set(cardBody, {
            rotateY: 180,
            transformOrigin: '50% 50%',
          })
          .set(cardAvers, { autoAlpha: 0, scale: 1.5 })
          .to(cardAvers, {
            duration: 0.9,
            autoAlpha: 1,
            scale: 1,
            ease: 'power2.out',
            // onComplete: setAnimationDuration,
            // onCompleteParams: [TwoFacesCardTL.current.duration()],
          })
          .play();
    setAnimationDuration(TwoFacesCardTL.current.duration());
    //
    return () => TwoFacesCardTL.current.pause().kill();
  }, [setAnimationDuration, history]);
  //
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
              {/* <div className="animated-svg">
                <ExclamationHandwritten />
              </div> */}
            </div>
          </div>
        </CardAvers>
      </div>
    </div>
  );
};

export default TwoFacesCard;
