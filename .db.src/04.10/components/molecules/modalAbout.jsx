import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { modalAboutText } from '../../assets/dataForScreens';
//
import { modalOn, modalOff } from '../../animations/modalAboutAnimations';
//
const {
  line1,
  line2,
  line3,
  scope,
  letsContact,
  localization,
} = modalAboutText;

const ModalAbout = ({ isModalVisible, userClick, closeModalAbout }) => {
  //references
  const modalContainer = useRef();
  const modalBodyLine1 = useRef();
  const modalBodyLine2 = useRef();
  const modalBodyLine3 = useRef();
  const scopeText = useRef();
  const letsContactText = useRef();
  const closeButton = useRef();
  console.log(
    `%c <ModalAbout> / userClick = props / state from <mainScreenB> `,
    'color: #e65c00',
    userClick
  );
  useEffect(() => {
    if (isModalVisible) {
      modalOn(
        modalContainer.current,
        modalBodyLine1.current,
        modalBodyLine2.current,
        scopeText.current,
        letsContactText.current,
        closeButton.current
      );
      console.log(`%c <ModalAbout> / useEffect / modalOn `, 'color: #e65c00');
    } else if (!isModalVisible & (userClick === '')) {
      console.log(
        `%c <ModalAbout> / useEffect / return!!!!!! `,
        'color: #e65c00'
      );
      return;
    } else {
      modalOff(
        modalContainer.current,
        modalBodyLine1.current,
        modalBodyLine2.current,
        scopeText.current,
        letsContactText.current
      );
      console.log(`%c <ModalAbout> / useEffect / modalOff `, 'color: #e65c00');
    }
  }, [isModalVisible, userClick]);
  //

  const testClick = () => {
    console.log(`%c <ModalAbout> / testClick `, 'color: #e65c00');
    const clickAnimation = gsap.timeline();
    clickAnimation.to(modalBodyLine3.current, { color: 'red' });
  };

  return (
    <div className="modal-container" ref={modalContainer}>
      <section className="modal-top">
        <h1 ref={modalBodyLine1}>{line1}</h1>
        <p ref={modalBodyLine2}>
          {line2}
          <button
            className="modal-top__button"
            onClick={() => testClick()}
            ref={modalBodyLine3}
          >
            {line3}
          </button>
        </p>
      </section>
      <address className="modal-bottom">
        {/* <p ref={scopeText}>{scope}</p>
        <p ref={letsContactText}>{letsContact}</p> */}
        <ul className="modal-bottom__localization">
          <li>{localization.label}</li>
          <li>{localization.street}</li>

          <li>{localization.city}</li>
          <li>{localization.gps1}</li>
          <li>{localization.gps2}</li>
        </ul>
        <div className="modal-bottom__contacts"></div>
        <button
          onClick={closeModalAbout}
          className="modal-bottom__button"
          ref={closeButton}
        >
          powrót
        </button>
      </address>
      {/* <modalHistory /> */}
      {/* <div className="modal-history"></div> */}
    </div>
  );
};

export default ModalAbout;

// useEffect(() => {
//   const modalBodyTl = gsap.timeline();
//   modalBodyTl
//     .set(modalBodyLine1.current, { opacity: 0, yPercent: -100 })
//     .set(modalBodyLine2.current, { opacity: 0, rotateX: 90 })
//     .to(modalBodyLine1.current, { duration: 1, opacity: 1, yPercent: 0 })
//     .to(
//       modalBodyLine2.current,
//       { duration: 1.5, opacity: 1, rotateX: 0 },
//       '>'
//     )
//     .pause();
//   isModalVisible
//     ? modalBodyTl.play()
//     : gsap.killTweensOf([modalBodyLine1.current, modalBodyLine2.current]);
// }, [isModalVisible]);
//
