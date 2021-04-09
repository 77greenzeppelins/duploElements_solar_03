import React, { useState, useEffect, useRef } from 'react';
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
import {
  screenBAnimation,
  screenBAnimationTl,
} from '../../animations/screenBAnimation';

//SVG
import SvgSkyHome1 from '../../assets/svg/SkyHome1';
import SvgQuestionMark2 from '../../assets/svg/QuestionMark2';

const MainScreenB = () => {
  //state for modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(
    `%c<MainScreenB> / isModalVisible: `,
    'color: #ff0099',
    isModalVisible
  );
  const [userClick, setUserClick] = useState('');
  console.log(
    `%c<MainScreenB> / openModalAbout / userClick`,
    'color: #FF0099',
    userClick
  );
  //
  const modalAboutComponentContainer = useRef();
  //
  useEffect(() => {
    screenBAnimation();
    console.log(
      `%c<MainScreenB> / useEffect / tl`,
      'color: #FF0099',
      screenBAnimationTl
    );
  }, []);
  //
  const openModalAbout = event => {
    setUserClick(event.type);
    //main function: change the value of state
    setIsModalVisible(true);
    //additional fuction: stop screenBAnimation !
    // isModalVisible ? screenBAnimationTl.play() : screenBAnimationTl.pause();
    screenBAnimationTl.pause();
    //additional fuction:  modify "duploELEMENTS" style after clicking
    gsap.to(modalAboutComponentContainer.current, { display: 'block' });
    // const ClickEventOn = gsap.timeline();
    // const ClickEventOff = gsap.timeline();
    // isModalVisible
    //   ? ClickEventOff.to('.contact__logo .logo', {
    //       opacity: 0.5,
    //       color: '#ffffff',
    //       scale: 1,
    //     })
    //   : ClickEventOn.to('.contact__logo .logo', {
    //       opacity: 1,
    //       color: '#add100',
    //       scale: 1.1,
    //     });
  };
  const closeModalAbout = () => {
    setIsModalVisible(false);
    screenBAnimationTl.play();
    gsap.to(modalAboutComponentContainer.current, { display: 'none' });
  };
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
      <article ref={modalAboutComponentContainer} className="screen-b__about ">
        <ModalAbout
          closeModalAbout={closeModalAbout}
          isModalVisible={isModalVisible}
          userClick={userClick}
        />
      </article>
      <footer className="screen-b__footer">
        <div className="line" />
        <ContactBar
          openModalAbout={openModalAbout}
          timeLine={screenBAnimationTl}
        />
      </footer>
    </div>
  );
};

export default MainScreenB;
