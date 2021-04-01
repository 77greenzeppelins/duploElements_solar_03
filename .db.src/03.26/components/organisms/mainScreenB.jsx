import React, { useEffect } from 'react';
//components
import ContactBar from '../molecules/contactBar';
//data for TextBoxes
import { dream1 } from '../../assets/dataForScreens';
//animation
import main2Animation from '../../animations/main2Animation';

const MainScreenB = () => {
  useEffect(() => {
    main2Animation();
    // console.log('%c<ScreenB> / useEffect', 'color: yellow');
    console.log('<MainScreenB> / useEffect / after animation...');
  });

  return (
    <div className="screen-b">
      <main className="screen-b__main">
        <div className="main-top"></div>
        <div className="main-bottom">
          <div className="frame">
            <h1 className="frame__header">{dream1[0]}</h1>
            <p className="frame__spans">
              <span className="frame__span">nowoczesne</span>
              <span className="frame__span">panele</span>
              <span className="frame__span">słoneczne</span>
            </p>
            <p className="frame__line">na dachu Twojego domu...</p>
          </div>
        </div>
      </main>
      <footer className="screen-b__footer">
        <div className="line" />
        <ContactBar />
      </footer>
    </div>
  );
};

export default MainScreenB;

/**
 *       {console.log(
        `%c.............return section from ScreenB`,
        'color: yellow'
      )}
 */
