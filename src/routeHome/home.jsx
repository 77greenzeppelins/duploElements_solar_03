import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = props => {
  //
  console.log(`%c<Home> / props `, 'color:#00d2ff', props);
  //
  let homeHeder = useRef(null);
  let homeBody = useRef(null);
  //
  function getWindowDimmension() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowDimmension);
  const { innerWidth, innerHeight } = windowSize;
  console.log('<Home> / innerHeight ', innerHeight);
  //experiment with  innerWidth detector
  const [orientation, setOrientation] = useState(
    innerHeight > 500 ? true : false
  );
  //
  useEffect(() => {
    const resizeEventHandler = () => {
      setWindowSize(getWindowDimmension);
    };
    window.addEventListener('resize', resizeEventHandler);
    return () => window.removeEventListener('resize', resizeEventHandler);
  });
  //
  useEffect(() => {
    innerHeight > 500 ? setOrientation(true) : setOrientation(false);
  }, [innerHeight]);
  //
  console.log('<Home> / orientation', orientation);
  //
  //   useEffect(() => {
  //     console.log('useEffect with "orientation" dependency', orientation);
  //     const homeTL = gsap.timeline({
  //       onStart: console.log,
  //       onStartParams: ['homeTL starts...'],
  //       onComplete: console.log,
  //       onCompleteParams: ['homeTL completed...'],
  //     });
  //     orientation
  //       ? homeTL
  //           .to(homeHeder, { duration: 3, y: '+=100', repeat: 2, yoyo: true })
  //           .to(homeBody, { duration: 3, y: '-=100', repeat: 2, yoyo: true }, '<')
  //       : homeTL.pause();
  //   }, [orientation]);

  return (
    <div className="home__container">
      {innerHeight < 500 ? (
        <div className="home__rotate"> Rotate!</div>
      ) : (
        <>
          <h1 ref={el => (homeHeder = el)} className="home__header">
            Window Size
          </h1>
          <ul ref={el => (homeBody = el)} className="home__body">
            <li>Window height: {innerHeight}</li>
            <li>Window width: {innerWidth}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
