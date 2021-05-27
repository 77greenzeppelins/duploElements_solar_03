import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
//staff for <ContactBar>
import ContactBar from '../componentsShared/contactBar/ContactBar';
import { businessMail, businessMobile } from '../assets/businessData';
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
//
import TwoFacesCard from '../componentsUnique/twoFacesCard/TwoFacesCard';
import SelfPresentation from './SelfPresentation';
import InnerRoutesNavigator from './InnerRoutesNavigator';
import HamburgerMenuIcon from '../componentsShared/customIcons/HamburgerMenuIcon';
//
const RouteAboutBody = props => {
  // state for <TwoFacesCard>'s height, the value that let us specify the height of sliding menu
  const [cardDimension, setCardDimention] = useState({ cardBottom: null });
  const { cardBottom } = cardDimension;
  // state for <InnerRoutesNavigator>; initially false that mean 'hidden' / scaleY:0
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  //
  const history = useHistory();
  console.log('<RouteAboutBody> / useHistory/ history ', history);
  //
  return (
    <>
      <div className="about-route-body__main">
        <TwoFacesCard
          setCardDimention={setCardDimention}
          cardDimension={cardDimension}
        />
        <SelfPresentation />
      </div>

      <InnerRoutesNavigator
        isMenuVisible={isMenuVisible}
        cardBottom={cardBottom}
      />

      <div className="about-route-body__hamburger-wrapper">
        <HamburgerMenuIcon
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
        />
      </div>
      <ContactBar
        businessMail={`mailto:${businessMail}`}
        businessMobile={`tel:${businessMobile}`}
        icons={[<SiMailDotRu />, <ImPhone />]}
        iconSize="icon-medium"
      />
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
