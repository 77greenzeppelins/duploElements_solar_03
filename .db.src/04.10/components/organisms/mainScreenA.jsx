import React, { useEffect } from 'react';
import Logo from '../atoms/logo';
import screenAAnimation from '../../animations/screenAAnimation';

const MainScreenA = ({ setScreenBDisplayer }) => {
  useEffect(() => {
    console.log(`%c<MainScreenA> / useEffect`, 'color: green');
    screenAAnimation(setScreenBDisplayer);
  }, [setScreenBDisplayer]);

  return (
    <div className="screen-a-container">
      {console.log(`%c <MainScreenA / return section`, 'color: green')}
      <Logo />
    </div>
  );
};

export default MainScreenA;
