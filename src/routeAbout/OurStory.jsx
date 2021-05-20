import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
//
import SvgIcon from '../componentsShared/svgIcon/svgIcon';
import { IoIosClose } from 'react-icons/io';
//
import { ourStory } from '../assets/routeAboutData';
// import { IoIosCloseCircleOutline } from 'react-icons/io';

const OurStory = props => {
  const { overlayState, setOverlayState } = props;
  const {
    intro,
    suddenly,
    enlightenment,
    story1,
    title,
    story2,
    conclusion,
  } = ourStory;
  //
  let container = useRef(null);
  let overlay = useRef(null);
  let content = useRef(null);
  let ourStoryTL = useRef(
    gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ['ourStoryTL is starting...'],
    })
  );
  let ourStoryCloseTL = useRef(gsap.timeline());
  //
  useEffect(() => {
    overlayState.numberToOpen === 0 &&
      ourStoryTL.current
        .set(container, { display: 'block' })
        .to(overlay, { duration: 0.3, autoAlpha: 1 })
        .to(content, { duration: 0.6, autoAlpha: 1 })
        .play();

    return () => ourStoryTL.current.pause().kill();
  }, [overlayState.numberToOpen]);

  const closePanel = () => {
    console.log('<OurStory> / onClick = {closePanel}');
    ourStoryCloseTL.current
      .to(content, { duration: 0.3, autoAlpha: 0 })
      .to(overlay, { duration: 0.3, autoAlpha: 0 })
      .set(container, {
        display: 'none',
        onComplete: setOverlayState,
        onCompleteParams: [
          {
            isOpen: false,
            numberToOpen: null,
          },
        ],
      });
  };

  //   console.log('<OurStory> / overlayState ', overlayState);
  return (
    <div ref={el => (container = el)} className="os-container">
      <div ref={el => (overlay = el)} className="os-overlay" />
      <div ref={el => (content = el)} className="os-content">
        {/* <div className="os-content__main-part"> {ourStory}</div> */}
        <div className="os-content__text-wrapper">
          {/* <div className="os-content__content">{ourStory.story}</div> */}
          <p className="os-content__text-paragraph">
            <span>{intro}</span> <br />
            <span>{suddenly}</span> <br />
            <span>
              <strong>{enlightenment}</strong>
            </span>
            <br />
            <span>
              {story1} <em> &nbsp;{title}&nbsp; </em> {story2}
            </span>
            <br />
            <span>
              <strong>{conclusion}</strong>
            </span>
          </p>
        </div>
        <div className="os-content__button-wrapper">
          <button onClick={closePanel} className="os-content__button">
            {/* <span>click</span> */}
            <SvgIcon icon={<IoIosClose />} />
          </button>
        </div>
        <div className="os-content__bottom"></div>
      </div>
    </div>
  );
};

export default OurStory;
