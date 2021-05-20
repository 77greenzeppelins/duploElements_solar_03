import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
//styles
import './styles/App.scss';
//componenty
import IntroAnimatedLogo from './componentsUnique/introAnimatedLogo/IntroAnimatedLogo';
import RoutesSwitcher from './componentsUnique/routesSwitcher/RoutesSwitcher';
import ContactTab from './componentsUnique/contactTab/ContactTab';
//staff for <ContactTab>
import { businessMail, businessMobile } from './assets/businessData';
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
//staff for <RoutesSwitcher>
import MainRoute from './routeMain/MainRoute';
import AboutRoute from './routeAbout/AboutRoute';

const App = () => {
  //
  let timeUE = new Date().toLocaleTimeString();
  let milisecUE = new Date().getMilliseconds();
  console.log(`%c<App> / time`, 'color:#66ff00', `${timeUE}:${milisecUE}`);
  //
  const routes = [
    { path: '/', name: 'Main', exact: true, Component: MainRoute },
    { path: '/about', name: 'About', exact: false, Component: AboutRoute },
  ];
  function getPaths(arr) {
    return arr.map(item => item.path);
  }
  const appPaths = getPaths(routes);
  console.log(`%c<App> / appPaths`, 'color:#66ff00', appPaths);

  //
  useEffect(() => {
    //I am not sure if it works...
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } });
    console.log(`%c<App> /  gsap object:`, 'color:#66ff00', gsap);
  }, []);
  //this state allowes to eliminate initial animation = intro logo animation
  // setter is used within 'intro animation' inside <IntroAnimatedLogo>
  // as 'toggler' = callbacki in 'onComplete'
  const [playIntroAnimation, setIntroAnimation] = useState(true);
  console.log(
    `%c<App> / playIntroAnimation / if "true" the intro-logo-animation plays`,
    'color:#66ff00',
    playIntroAnimation
  );
  //
  return (
    <>
      {playIntroAnimation ? (
        <IntroAnimatedLogo setIntroAnimation={setIntroAnimation} />
      ) : (
        <>
          {/*Pages / Routes section*/}
          <RoutesSwitcher routes={routes} />
          {/*Foter / contacts & Navigation section*/}
          <ContactTab
            // labelChanger={labelChanger}
            businessMail={`mailto:${businessMail}`}
            businessMobile={`tel:${businessMobile}`}
            linkTo={appPaths}
            icons={[<SiMailDotRu />, <ImPhone />]}
          />
        </>
      )}
    </>
  );
};

export default App;
