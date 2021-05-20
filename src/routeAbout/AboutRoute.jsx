import React, { useState, useEffect } from 'react';
import RotatePanel from '../componentsShared/rotatePanel/RotatePanel';
import AboutRouteBody from './AboutRouteBody';

const AboutRoute = () => {
  const getWindowDimension = () => {
    const { innerHeight } = window;
    return innerHeight;
  };
  const [windowSize, setWindowSize] = useState(getWindowDimension);
  const innerHeight = windowSize;
  //
  useEffect(() => {
    const resizeEventHandler = () => {
      setWindowSize(getWindowDimension);
    };
    window.addEventListener('resize', resizeEventHandler);
    return () => window.removeEventListener('resize', resizeEventHandler);
  });

  return <>{innerHeight < 500 ? <RotatePanel /> : <AboutRouteBody />}</>;
};

export default AboutRoute;
