import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
//
import LinkToPath from '../componentsShared/linkToPath/LinkToPath';
//
import { innerRoutesLabels } from '../assets/innerRoutesNavigator';

const InnerRoutesNavigator = props => {
  //
  const { isMenuVisible, cardBottom } = props;
  //
  let menuWrapper = useRef(null);
  let menuContent = useRef(null);

  let openMenuTL = useRef(gsap.timeline({ paused: true }));
  //
  useEffect(() => {
    console.log('<InnerRouteNavigator> / useEffect / menuContent', [
      ...menuContent.children,
    ]);

    isMenuVisible
      ? openMenuTL.current
          .set(menuWrapper, { scaleY: 1, top: cardBottom })
          .to(menuWrapper, {
            duration: 0.3,
            autoAlpha: 1,
          })
          .to(menuContent.children, {
            duration: 0.5,
            autoAlpha: 1,
            stagger: { each: 0.3 },
            // color: gsap.utils.wrap(['red', 'blue']),
          })
          .timeScale(1)
          .play()
      : openMenuTL.current.timeScale(2).reverse();
    return () => openMenuTL.current.pause().kill();
  }, [isMenuVisible, cardBottom]);

  return (
    <nav
      ref={el => (menuWrapper = el)}
      className="inner-route-navigator__wrapper"
    >
      <div
        ref={el => (menuContent = el)}
        className="inner-route-navigator__content"
      >
        <div className="inner-route-navigator__link">
          <LinkToPath
            to="/contacts"
            linkLabel={innerRoutesLabels[0]}
            fontSize="font-middle"
          />
        </div>
        <div className="inner-route-navigator__link">
          <LinkToPath
            to="/ourhistory"
            linkLabel={innerRoutesLabels[2]}
            fontSize="font-middle"
          />
        </div>
        <div className="inner-route-navigator__link">
          <LinkToPath
            to="/"
            linkLabel={innerRoutesLabels[3]}
            fontSize="font-middle"
          />
        </div>
      </div>
    </nav>
  );
};

export default InnerRoutesNavigator;
