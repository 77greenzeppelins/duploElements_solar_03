import React, { useState } from 'react';
import { gsap } from 'gsap';
//staff for <ContactBar>
import NavigationSvgBar from '../componentsShared/navigationSvgBar/NavigationSvgBar';
import { businessMail, businessMobile } from '../assets/businessData';
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
//
import TwoFacesCard from '../componentsUnique/twoFacesCard/TwoFacesCard';
import AnimatedTextLine from '../componentsShared/animatedTextLine/AnimatedTextLine';
import InnerRoutesNavigator from './InnerRoutesNavigator';
//staff for <NavigationSvgBar>
import HamburgerMenuIcon from '../componentsShared/customIcons/HamburgerMenuIcon';
import { ReactComponent as TheSunIcon } from '../assets/svg/sun_w80_h80_iconLike.svg';
import { ReactComponent as CloudIconLeft } from '../assets/svg/cloud_w80_h80_iconLeft.svg';
import { ReactComponent as CloudIconRight } from '../assets/svg/cloud_w80_h80_iconRight.svg';

//
const RouteAboutBody = props => {
  // state for <TwoFacesCard>'s height, the value that let us specify the height of sliding menu
  const [cardDimension, setCardDimention] = useState({ cardBottom: null });
  const { cardBottom } = cardDimension;
  // state for <InnerRoutesNavigator>; initially false that means 'hidden' / scaleY:0
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  // state for <TwoFacesCard>'s animation duration; this value specifies 'delay' of <AnimatedTextLine> animation
  const [animationDuration, setAnimationDuration] = useState(null);
  //
  return (
    <>
      <div className="about-route-body__main">
        <TwoFacesCard
          setCardDimention={setCardDimention}
          // cardDimension={cardDimension}
          setAnimationDuration={setAnimationDuration}
        />
        <AnimatedTextLine
          textLine="Właśnie tym dzielimy się z naszymi Klientami"
          animationDuration={animationDuration}
        />
      </div>

      <InnerRoutesNavigator
        isMenuVisible={isMenuVisible}
        cardBottom={cardBottom}
      />
      <NavigationSvgBar
        businessMail={`mailto:${businessMail}`}
        businessMobile={`tel:${businessMobile}`}
        svgIcons={[<SiMailDotRu />, <ImPhone />]}
        svgImages={[<TheSunIcon />, <CloudIconLeft />, <CloudIconRight />]}
        // iconSize="icon-medium"
      >
        <HamburgerMenuIcon
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
        />
      </NavigationSvgBar>
    </>
  );
};

export default RouteAboutBody;

// if ([...ev.target.classList].includes('3')) {
//   console.log('overlayOpenerHandler / event has class 3');
//   console.log(
//     'overlayOpenerHandler / class number of button:',
//     [...ev.target.classList][1]
//   );
// }
// console.log(
//   'overlayOpenerHandler / typeof([...ev.target.classList][1])',
//   typeof [...ev.target.classList][1]
// );
//=============================================================
//
// const [scrollingState, setScrollingState] = useState({
//   index: 0,
//   transition: 0,
// });
// const { index, transition } = scrollingState;
//
// useEffect(() => {
//   const innerHeight = window.innerHeight;
//   // const { height: wrapperHeight } = routeWrapper.getBoundingClientRect();
//   const { height: topSectionHeight } = topSection.getBoundingClientRect();
//   console.log(
//     '<RouteAboutBody> / routeWrapper / topSectionHeight',
//     topSectionHeight
//   );
//   console.log('<RouteAboutBody> / routeWrapper / innerHeight', innerHeight);
// }, []);
//
// const scrollingArrowHandler = () => {
//   const { height: wrapperHeight } = routeWrapper.getBoundingClientRect();
//   setScrollingState({
//     ...scrollingState,
//     transition: wrapperHeight / 2,
//   });
//   console.log(
//     '<RouteAboutBody> / scrollingArrowHandler / scrollingState',
//     scrollingState
//   );
// };
// //
// console.log('transition', transition);
// //
// useEffect(() => {
//   scrollingTL.current
//     .to(routeWrapper, { duration: 0.4, y: -transition })
//     .play();
//   console.log('<RouteAboutBody> / useEffect', transition);
//   return () => scrollingTL.current.kill();
// }, [transition]);
//

//
// useEffect(() => {
//   const menuHeight = windowInnerHeight - cardBottom;
//   gsap.to(menuWrapper, { height: menuHeight });
// }, [windowInnerHeight, cardBottom]);

//
