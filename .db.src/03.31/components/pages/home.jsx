import React, { useEffect, useState } from 'react';
//components
import ScreenA from '../organisms/screenA';
import ScreenB from '../organisms/screenB';
// ================================================== refactoring
//animation
import { homePageAnimation } from '../../animations/homePageAnimation';

//
const tl = homePageAnimation();
console.log('<Home>...it is "tl"', tl);
console.log('<Home>...it is "tl.labels"', tl.labels);
//
const Home = () => {
  const [state, setState] = useState(false);
  console.log('<Home>...it is state', state);

  useEffect(() => {
    homePageAnimation(setState);
    console.log('<Home> / useEffect...it is "tl.labels"', tl.labels);
    console.log('<Home> / useEffect...it is state', state);
  }, []);

  return (
    <>
      <div className="container-outer">
        <ScreenA />
      </div>
      <div className="container-inner">
        <ScreenB timeLine={tl} state={state} />
      </div>
    </>
  );
};
export default Home;

// console.log(`%c.............useEffect from homePage`, 'color: yellow');
