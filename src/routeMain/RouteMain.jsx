import React, { useState, useEffect } from 'react';
//
import RotatePanel from '../componentsShared/rotatePanel/RotatePanel';
import RouteMainBody from './RouteMainBody';

const RouteMain = props => {
  //
  function getWindowDimension() {
    const { innerHeight } = window;
    return { innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowDimension);
  const { innerHeight } = windowSize;
  // Effect for 'resize' event listener
  useEffect(() => {
    const resizeEventHandler = () => {
      setWindowSize(getWindowDimension);
    };
    window.addEventListener('resize', resizeEventHandler);
    return () => window.removeEventListener('resize', resizeEventHandler);
  });

  //
  return <>{innerHeight < 500 ? <RotatePanel /> : <RouteMainBody />}</>;
};
export default RouteMain;
