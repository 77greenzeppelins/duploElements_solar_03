import React, { useEffect } from 'react';
//components
import ScreenA from '../organisms/screenA';
import ScreenB from '../organisms/screenB';
// ================================================== refactoring
//animation
import { homePageAnimation } from '../../animations/homePageAnimation';
//
const tl = homePageAnimation();
console.log('it is "tl" from Home', tl);
console.log('it is "tl.labels" from Home', tl.labels);
//
const Home = () => {
  useEffect(() => {
    homePageAnimation();
  }, []);

  return (
    <>
      <div className="container-outer">
        <ScreenA />
      </div>
      <div className="container-inner">
        <ScreenB timeLine={tl} />
      </div>
    </>
  );
};
export default Home;

// console.log(`%c.............useEffect from homePage`, 'color: yellow');
