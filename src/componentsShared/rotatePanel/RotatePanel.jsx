import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { rotatePanelText } from '../../assets/rotatePanelText';

const RotatePanel = () => {
  //
  let rotatePanelWrapper = useRef(null);
  let overlay = useRef(null);
  let overlayLine = useRef(null);
  let rotatePanelTL = useRef(gsap.timeline({ paused: true }));
  // Effector for initial effects
  useEffect(() => {
    const { height } = overlay.getBoundingClientRect();
    // const { height } = rotatePanelWrapper.getBoundingClientRect();
    console.log(
      `%c<RotatePanel> / useEffect / height from testContainer`,
      'color:#f5af19',
      height
    );
    rotatePanelTL.current
      .to(overlay, { duration: 1.5, y: -(height * 1.1) })

      .play();
    return () => rotatePanelTL.current.kill();
  }, []);

  return (
    <div
      ref={el => (rotatePanelWrapper = el)}
      className="rotate-panel__wrapper"
    >
      <div ref={el => (overlay = el)} className="rotate-panel__overlay">
        <div
          ref={el => (overlayLine = el)}
          className="rotate-panel__line"
        ></div>
      </div>
      <div className="rotate-panel__500px">500 px</div>

      {/* {rotatePanelText.map(({ id, text }) => (
        <p key={id}>{text}</p>
      ))} */}
      {/* rotatePanelText.map(item=>(<p></p>)) */}
      {/* <h1>{greating}</h1>
      <p>{minHeight}</p>
      <p>{line1}</p>
      <p>{line2}</p>
      <p>{line3}</p> */}
    </div>
  );
};

export default RotatePanel;
