import React, { useRef } from 'react';
import { gsap } from 'gsap';

const HamburgerMenuIcon = props => {
  const { isMenuVisible, setIsMenuVisible } = props;
  //
  let HamburgerToCrossTL = useRef(gsap.timeline({ paused: true }));
  let HamburgerToLinesTL = useRef(gsap.timeline({ paused: true }));
  let hamburgerWrapper = useRef(null);
  let lineTop = useRef(null);
  let lineMiddle = useRef(null);
  let lineBottom = useRef(null);

  //
  const openMenu = () => {
    //changes of hamburger button
    !isMenuVisible
      ? HamburgerToCrossTL.current
          .set(hamburgerWrapper, { pointerEvents: 'none', autoAlpha: 1 })
          .to(lineMiddle, { duration: 0.2, scaleX: 0 })
          .to(lineTop, { duration: 0.2, translateY: '+=10', scale: 0.8 })
          .to(
            lineBottom,
            { duration: 0.2, translateY: '-=10', scale: 0.8 },
            '<'
          )
          .to(lineTop, { rotate: '+=45deg' })
          .to(lineBottom, { rotate: '-=45deg' }, '<')
          .set(hamburgerWrapper, { pointerEvents: 'auto' })
          .play()
      : HamburgerToLinesTL.current
          .set(hamburgerWrapper, { pointerEvents: 'none' })
          .to(lineTop, { rotate: '-=45deg' })
          .to(lineBottom, { rotate: '+=45deg' }, '<')
          .to(lineTop, { duration: 0.2, translateY: '-=10', scale: 1 })
          .to(lineBottom, { duration: 0.2, translateY: '+=10', scale: 1 }, '<')
          .to(lineMiddle, { duration: 0.2, scaleX: 1 })
          .set(hamburgerWrapper, { pointerEvents: 'auto' })
          .play();
    //state change that trigger <InnerRoutesNavigator> animation
    setIsMenuVisible(!isMenuVisible);
  };
  console.log('<HamburgerMenuIcon> / openMenu / isMenuVisible ', isMenuVisible);
  //
  return (
    <button
      ref={el => (hamburgerWrapper = el)}
      onClick={openMenu}
      className="hamburger__wrapper"
    >
      <div
        ref={el => (lineTop = el)}
        className={
          isMenuVisible ? `hamburger__line top active` : `hamburger__line top`
        }
        // className="hamburger__line top"
      ></div>
      <div
        ref={el => (lineMiddle = el)}
        className={
          isMenuVisible
            ? `hamburger__line middle active`
            : `hamburger__line middle`
        }
      ></div>
      <div
        ref={el => (lineBottom = el)}
        className={
          isMenuVisible
            ? `hamburger__line bottom active`
            : `hamburger__line bottom`
        }
        // className="hamburger__line bottom"
      ></div>
    </button>
  );
};

export default HamburgerMenuIcon;
