import React, { useState, useEffect } from 'react';
import RotatePanel from '../componentsShared/rotatePanel/RotatePanel';
import RouteAboutBody from './RouteAboutBody';

const RouteAbout = () => {
  //
  const getWindowDimension = () => {
    const { innerHeight } = window;
    return innerHeight;
  };
  const [windowSize, setWindowSize] = useState(getWindowDimension);
  const windowInnerHeight = windowSize;
  //
  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(getWindowDimension));
    return () =>
      window.removeEventListener('resize', () =>
        setWindowSize(getWindowDimension)
      );
  });

  return <>{windowInnerHeight < 500 ? <RotatePanel /> : <RouteAboutBody />}</>;
};

export default RouteAbout;
