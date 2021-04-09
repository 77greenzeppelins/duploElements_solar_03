import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
//components
import ContactBar from '../molecules/contactBar';
import PulsatoryContainer from '../molecules/pulsatoryContainer';
import ModalAbout from '../molecules/modalAbout';
//data for TextBoxes
import {
  dream1,
  dream2,
  dream3,
  finalText,
  itemsToBuy,
} from '../../assets/dataForScreens';
//animation
import screenBAnimation from '../../animations/screenBAnimation';
//SVG
// import SvgSunShine1 from '../../assets/svg/SunShine1';
import SvgSkyHome1 from '../../assets/svg/SkyHome1';
import SvgQuestionMark2 from '../../assets/svg/QuestionMark2';

const MainScreenB = () => {
  //state for
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log('MainScreenB / isModalVisible: ', isModalVisible);
  //stete for main animation

  const [animationFlow, setAnimationFlow] = useState(true);
  //
  useEffect(() => {
    // if (animationFlow === true) {
    screenBAnimation();
    // } else {
    //   screenBAnimation().pause();
    // }
    console.log(
      '<MainScreenB> / useEffect / screenBAnimation...:',
      screenBAnimation()
    );
  }, [animationFlow]);
  //
  const tl = screenBAnimation();
  //
  const modalHandler = () => {
    console.log('MainScreenB / modalHandler: click from modalHandler');

    //
    //button's behaviour =  its style css-modifications...
    //
    // setAnimationFlow(!animationFlow);
    // console.log('MainScreenB / modalHandler / animationFlow:', animationFlow);
    // animationFlow ? screenBAnimation().play() : screenBAnimation().pause();
    setIsModalVisible(!isModalVisible);
    console.log('MainScreenB / modalHandler / modal:', isModalVisible);
  };
  //

  return (
    <div className="screen-b">
      <main className="screen-b__main">
        <div className="main-top">
          <SvgSkyHome1 />
          <div className="poster">
            <div className="poster__one">
              <p className="poster__one--text">możliwe</p>
              <div className="poster__one--question-mark">
                <SvgQuestionMark2 />
              </div>
            </div>
            <div className="poster__two"></div>
          </div>
        </div>
        <div className="main-bottom">
          <div className="frame">
            {/*==========================*/}
            <section className="dream1">
              <h3 className="frame__header">{dream1[0]}</h3>
              <ul className="frame__spans">
                <li className="frame__span line1">{dream1[1]}</li>
                <li className="frame__span line2">{dream1[2]}</li>
                <li className="frame__span line3">{dream1[3]}</li>
                <li className="frame__span line4">{dream1[4]}</li>
              </ul>
            </section>
            {/*==========================*/}
            <div className="dream2">
              <h1 className="frame__header">{dream2[0]}</h1>
              <ul className="frame__spans">
                <li className="frame__span line1">{dream2[1]}</li>
                <li className="frame__span line2">{dream2[2]}</li>
                <li className="frame__span line3">{dream2[3]}</li>
                <li className="frame__span line4">{dream2[4]}</li>
              </ul>
            </div>
            {/*==========================*/}
            <section className="dream3">
              <h1 className="frame__header">{dream3[0]}</h1>
              <ul className="frame__spans">
                <li className="frame__span line1">{dream3[1]}</li>
                <li className="frame__span line2">{dream3[2]}</li>
                <li className="frame__span line3">{dream3[3]}</li>
                <li className="frame__span line4">{dream3[4]}</li>
              </ul>
            </section>
            {/*==========================*/}
            <section className="final">
              <h1 className="frame__header">{finalText[0]}</h1>
              <ul className="frame__spans">
                <li className="frame__span line1">{finalText[1]}</li>
                <li className="frame__span line2">{finalText[2]}</li>
                <li className="frame__span line3">{finalText[3]}</li>
                <PulsatoryContainer
                  itemsToBuy={itemsToBuy}
                  // className="frame__spans pulsatory-text"
                />
              </ul>
            </section>
          </div>
        </div>
      </main>
      <article className="screen-b__about ">
        {isModalVisible ? <ModalAbout /> : null}
      </article>

      <footer className="screen-b__footer">
        <div className="line" />
        <ContactBar modalHandler={modalHandler} />
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
