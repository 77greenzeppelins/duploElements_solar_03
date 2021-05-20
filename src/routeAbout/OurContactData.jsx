import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import SvgIcon from '../componentsShared/svgIcon/svgIcon';
import { IoIosClose } from 'react-icons/io';

const OurContactData = props => {
  const { overlayState, setOverlayState } = props;
  //
  let container = useRef(null);
  let overlay = useRef(null);
  let content = useRef(null);
  let ourContactDataTL = useRef(
    gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ['ourStoryTL is starting...'],
    })
  );
  useEffect(() => {
    overlayState.numberToOpen === 2 &&
      ourContactDataTL.current
        .set(container, { display: 'block' })
        .to(overlay, { duration: 0.3, autoAlpha: 1 })
        .to(content, { duration: 0.6, autoAlpha: 1 })
        .play();
    return () => ourContactDataTL.current.pause().kill();
  }, [overlayState.numberToOpen]);
  let ourContactDataCloseTL = useRef(gsap.timeline());
  //
  const closePanel = () => {
    console.log('<OurStory> / onClick = {closePanel}');
    ourContactDataCloseTL.current
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
  //
  return (
    <div ref={el => (container = el)} className="os-container">
      <div ref={el => (overlay = el)} className="os-overlay" />
      <div ref={el => (content = el)} className="os-content">
        {/* <div className="os-content__main-part"> {ourStory}</div> */}
        <div className="os-content__text-wrapper"></div>
        <div className="os-content__button-wrapper">
          <button onClick={closePanel} className="os-content__button">
            {/* <span>click</span> */}
            <SvgIcon icon={<IoIosClose />} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurContactData;
