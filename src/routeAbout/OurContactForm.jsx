import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
//
//
import SvgIcon from '../componentsShared/svgIcon/svgIcon';
import { IoIosClose } from 'react-icons/io';

const OurContactForm = props => {
  const { overlayState, setOverlayState } = props;
  const { numberToOpen } = overlayState;
  //
  let container = useRef(null);
  let overlay = useRef(null);
  let content = useRef(null);
  let ourContactFormTL = useRef(
    gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ['OurContactFormTL is starting...'],
    })
  );
  //
  useEffect(() => {
    if (numberToOpen === 1) {
      console.log('<OurContactForm> / useEffect / numberToOpen ', numberToOpen);
      ourContactFormTL.current
        .set(container, { display: 'block' })
        .to(overlay, { duration: 0.3, autoAlpha: 1 })
        .to(content, { duration: 0.6, autoAlpha: 1 })
        .play();
    }
    return () => ourContactFormTL.current.pause().kill();
  }, [numberToOpen]);
  //
  const closePanel = () => {
    console.log('<OurStory> / onClick = {closePanel}');
    //
    ourContactFormTL.current
      // .timeScale(2)
      .reverse()
      .then(() =>
        setOverlayState({
          isOpen: false,
          numberToOpen: null,
        })
      );
  };
  //
  return (
    <div ref={el => (container = el)} className="ocf-container">
      <div ref={el => (overlay = el)} className="ocf-overlay" />
      <div ref={el => (content = el)} className="ocf-content">
        <h1 className="ocf-content__text-wrapper"> our contact form...</h1>
        <div className="ocf-content__button-wrapper">
          <button onClick={closePanel} className="ocf-content__button">
            {/* <span>click</span> */}
            <SvgIcon icon={<IoIosClose />} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurContactForm;
