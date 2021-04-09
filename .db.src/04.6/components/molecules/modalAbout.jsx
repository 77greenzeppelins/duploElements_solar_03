import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Logo from '../atoms/logo';

const ModalAbout = ({ isModalVisible }) => {
  const modalContainer = useRef();
  console.log(
    `%c <ModalAbout> / modalContainer = useRef() `,
    'color: #e65c00',
    modalContainer.current
  );

  const modalAboutAnimationOn = () => {
    gsap.killTweensOf(modalContainer.current);
    const modalAboutAnimationOnTl = gsap.timeline();
    modalAboutAnimationOnTl
      .set(modalContainer.current, { xPercent: 100 })
      .to(modalContainer.current, { duration: 0.01, xPercent: 0, opacity: 0 })
      .to(modalContainer.current, { duration: 0.3, opacity: 1 });
    console.log(`%c <ModalAbout> / modalAboutAnimationOn `, 'color: #e65c00');

    return modalAboutAnimationOnTl;
  };

  const modalAboutAnimationOff = () => {
    gsap.killTweensOf(modalContainer.current);
    const modalAboutAnimationOffTl = gsap.timeline();
    modalAboutAnimationOffTl
      .to(modalContainer.current, {
        duration: 0.5,
        opacity: 0,
      })
      .to(modalContainer.current, {
        duration: 1,
        xPercent: 100,
      });
    console.log(`%c <ModalAbout> / modalAboutAnimationOff `, 'color: #e65c00');

    return modalAboutAnimationOffTl;
  };

  useEffect(() => {
    isModalVisible ? modalAboutAnimationOn() : modalAboutAnimationOff();

    console.log(
      `%c <ModalAbout> / useEffect/ modalAboutAnimationOn `,
      'color: #e65c00'
    );
  }, [isModalVisible]);
  return (
    <div className="modal-container" ref={modalContainer}>
      <div className="modal-body">
        <Logo />
        <p>some words about us...</p>
      </div>
      <div className="modal-nav">
        <p>place for button</p>
      </div>
    </div>
  );
};

export default ModalAbout;
