import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const menuTabs = ['start', 'about', 'longWord', 'contact'];

const MenuWithUnderline = props => {
  //
  const { menuButtonState } = props;
  //
  const [tabProperties, setTabProperties] = useState({
    tabOffsetLeft: 0,
    tabClientWidth: 0,
  });
  console.log('<MenuWithUnderline> / tabProperties', tabProperties);
  const { tabOffsetLeft, tabClientWidth } = tabProperties;
  //
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { width, height } = windowSize;
  console.log('<MenuWithUnderline> / windowSize', width, height);
  //refs
  let menuWrapper = useRef(null);
  let menuBg = useRef(null);
  let underLine = useRef(null);
  let menuTab = useRef(null);
  let menuTabsWrapper = useRef(null);
  //
  let menuAnimeTL = useRef();
  // initial render
  useEffect(() => {
    //staff for menu hamburger button
    menuAnimeTL.current = gsap
      .timeline({ paused: true })
      .fromTo(
        [menuWrapper, menuBg],
        { duration: 0, autoAlpha: 0, scaleY: 0 },
        { duration: 1, autoAlpha: 1, scaleY: 1, stagger: { amount: 0.5 } }
      );
  }, []);

  useEffect(() => {
    menuButtonState
      ? menuAnimeTL.current.play()
      : menuAnimeTL.current.reverse();
    //
    const tabsArray = gsap.utils.toArray(menuTabsWrapper.children);
    const initialTab = tabsArray[0];
    console.log('<MenuWithUnderline> / useEffect / tabsArray', tabsArray);
    gsap.set(underLine, {
      x: initialTab.offsetLeft,
      width: initialTab.clientWidth,
    });
  }, [menuButtonState]);
  //
  const menuTabMouseEnter = event => {
    console.log('menuTabMouseEnter / event.target', event.target.offsetLeft);
    setTabProperties({
      tabOffsetLeft: event.target.offsetLeft,
      tabClientWidth: event.target.clientWidth,
    });
  };
  console.log('<MenuWithUnderline> / menuAnimeTL', menuAnimeTL);
  //
  useEffect(() => {
    console.log('underLine', underLine);
    gsap.to(underLine, { x: tabOffsetLeft, width: tabClientWidth });
  }, [tabOffsetLeft, tabClientWidth]);
  //
  return (
    <nav ref={el => (menuWrapper = el)} className="menu-wrapper">
      <div ref={el => (menuBg = el)} className="menu-bg">
        <ul ref={el => (menuTabsWrapper = el)} className="tabs-wrapper">
          {menuTabs.map((tab, index) => (
            <li
              ref={el => (menuTab = el)}
              // onClick={clickMenuTab}
              onMouseEnter={event => menuTabMouseEnter(event)}
              // onMouseLeave={mouseLeaveHandler}
              className={`tab tab-${index}`}
              key={index}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div ref={el => (underLine = el)} className="menu-underline"></div>
      </div>
    </nav>
  );
};

export default MenuWithUnderline;

// const mouseEnterHandler = event => {
//   console.log(
//     'MenuWithUnderline / mouseEnterHandler / event.target.clientWidth:',
//     event.target.clientWidth
//   );
//   const mouseEnterTL = gsap.timeline();
//   mouseEnterTL
//     //   .to(event.target, { color: '#add100' })
//     .to(underLine.current, { x: event.target.clientWidth });
// };
// //
// const mouseLeaveHandler = event => {
//   console.log(
//     'MenuWithUnderline / mouseLeaveHandler / menuTab:',
//     menuTab.current
//   );
//   gsap.to(event.target, { color: '#fff' });
// };
// //
// const clickMenuTab = event => {
//   gsap.to(event.target, {
//     duration: 0.3,
//     scale: 1.05,
//     repeat: 1,
//     yoyo: true,
//   });
// };
