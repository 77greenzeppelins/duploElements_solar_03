import React, { useEffect } from 'react';
//components
import ScreenA from '../organisms/screenA';
import ScreenB from '../organisms/screenB';
// ================================================== refactoring

// ==================================================
//animation
import { homePageAnimation, tl } from '../../animations/homePageAnimation';

const Home = () => {
  useEffect(() => {
    console.log(`%c.............useEffect from homePage`, 'color: yellow');
    homePageAnimation();
  }, []);

  return (
    <>
      {/* <div className="turbo-container"> */}
      <div className="container-outer"></div>
      <div className="container-inner">
        <ScreenA />
        <ScreenB timeLine={tl} />
      </div>
      {/* </div> */}
    </>
  );
};
export default Home;
