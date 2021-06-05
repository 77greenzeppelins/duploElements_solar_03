import React, { useState, useEffect } from 'react';
import RotatePanel from '../componentsShared/rotatePanel/RotatePanel';
import RouteContactBody from './RouteContactBody';

const RouteContacts = props => {
  //
  const getWindowDimension = () => {
    const { innerHeight } = window;
    return innerHeight;
  };
  const [windowHeight, setWindowHeight] = useState(getWindowDimension);
  //
  useEffect(() => {
    window.addEventListener('resize', () =>
      setWindowHeight(getWindowDimension)
    );
    return window.removeEventListener('resize', () =>
      setWindowHeight(getWindowDimension)
    );
  });
  useEffect(() => {
    console.log('<RouteContacts> / useEffect / windowHeight', windowHeight);
  }, [windowHeight]);

  return <> {windowHeight < 500 ? <RotatePanel /> : <RouteContactBody />}</>;
};

export default RouteContacts;
