import React, { useEffect } from 'react';
//components
import ContactBar from '../molecules/contactBar';
//data for TextBoxes
import { dream1, dream2, dream3, finalText } from '../../assets/dataForScreens';
//animation
import main2Animation from '../../animations/main2Animation';
//SVG
import SunShine1P from '../../assets/svg/SunShine1P';

const MainScreenB = () => {
  useEffect(() => {
    main2Animation();
    // console.log('%c<ScreenB> / useEffect', 'color: yellow');
    console.log('<MainScreenB> / useEffect / after animation...');
  });

  return (
    <div className="screen-b">
      <main className="screen-b__main">
        <div className="main-top">
          <SunShine1P />
        </div>
        <div className="main-bottom">
          <div className="frame">
            <h1 className="frame__header initial">{dream1[0]}</h1>
            {/*==========================*/}
            <p className="frame__spans dream1">
              <span className="frame__span span1">{dream1[1]}</span>
              <span className="frame__span span2">{dream1[2]}</span>
              <span className="frame__span span3">{dream1[3]}</span>
            </p>
            <p className="frame__line line1">{dream1[4]}</p>
            {/*==========================*/}
            <p className="frame__spans dream2">
              <span className="frame__span span1">{dream2[0]}</span>
              <span className="frame__span span2">{dream2[1]}</span>
              <span className="frame__span span3">{dream2[2]}</span>
            </p>
            <p className="frame__line line1">{dream2[3]}</p>
            {/*==========================*/}
            <p className="frame__spans dream3">
              <span className="frame__span span1">{dream3[0]}</span>
              <span className="frame__span span2">{dream3[1]}</span>
              <span className="frame__span span3">{dream3[2]}</span>
            </p>
            <p className="frame__line line1">{dream3[3]}</p>
            {/*==========================*/}
            <h1 className="frame__header final">{finalText[0]}</h1>
            <p className="frame__spans final">
              <span className="frame__span final1">{finalText[1]}</span>
              <span className="frame__span final2">{finalText[2]}</span>
              {/* <span className="frame__span final">{dream1[3]}</span> */}
            </p>
            {/* <p className="frame__line final">{dream1[4]}</p> */}
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
