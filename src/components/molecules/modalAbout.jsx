import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { aboutHistory } from '../../assets/dataForScreens';
//
import { modalOn, modalOff } from '../../animations/modalAboutAnimations';
//
const { line1, line2, line3 } = aboutHistory;

const ModalAbout = ({ isModalVisible, userClick, closeModalAbout }) => {
  //references
  const modalContainer = useRef();
  const modalBodyLine1 = useRef();
  const modalBodyLine2 = useRef();
  const modalBodyLine3 = useRef();
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
        closeButton.current
      );
    } else if (!isModalVisible & (userClick === '')) {
      return;
    } else {
      modalOff(
        modalContainer.current,
        modalBodyLine1.current,
        modalBodyLine2.current
      );
    }
    console.log(
      `%c <ModalAbout> / useEffect / modalBodyLine1 = useRef `,
      'color: #e65c00',
      modalBodyLine1.current
    );
  }, [isModalVisible, userClick]);
  //

  const testClick = () => {
    console.log(`%c <ModalAbout> / testClick `, 'color: #e65c00');
    const clickAnimation = gsap.timeline();
    clickAnimation.to(modalBodyLine3.current, { color: 'red' });
  };

  // const closeModalAbout = () => {
  //   console.log(`%c <ModalAbout> / closeModalAbout `, 'color: #e65c00');
  // };
  return (
    <div className="modal-container" ref={modalContainer}>
      <section className="modal-body">
        <h1 ref={modalBodyLine1}>{line1}</h1>
        <p ref={modalBodyLine2}>
          {line2}
          <button
            className="modal-body__button"
            onClick={() => testClick()}
            ref={modalBodyLine3}
          >
            {line3}
          </button>
        </p>
      </section>
      <div className="modal-nav">
        <button
          onClick={closeModalAbout}
          className="modal-body__button"
          ref={closeButton}
        >
          powrót
        </button>
      </div>
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
