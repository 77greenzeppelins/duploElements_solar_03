import React, { useEffect, useState } from 'react';
//components
import MainScreenA from '../organisms/mainScreenA';
import MainScreenB from '../organisms/mainScreenB';
//animation
import screenAAnimation from '../../animations/screenAAnimation';
//
// const tl = main1Animation();
// console.log('<Main>...it is "tl"', tl);
// console.log('<Main>...it is "tl.labels"', tl.labels);
//
const Main = () => {
  const [state, setState] = useState(false);
  console.log('<Main>...it is state', state);

  //   main1Animation(setState);
  //   console.log('<Main> / useEffect...it is state', state);

  useEffect(() => {
    if (state === false) {
      screenAAnimation(setState);
    }
    // main1Animation(setState);
    console.log('<Main> / useEffect...it is state', state);
  }, [state]);

  return (
    <>
      <div className="container-outer">
        <MainScreenA />
      </div>
      <div className="container-inner">{state && <MainScreenB />}</div>
    </>
  );
};
export default Main;

// console.log(`%c.............useEffect from homePage`, 'color: yellow');
