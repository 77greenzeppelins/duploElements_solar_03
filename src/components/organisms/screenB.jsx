import React, { useEffect } from 'react';
//components
import Logo from '../atoms/logo';
// import LogoLink from '../molecules/logoLink';
import TextBox from '../molecules/textBox';
import PulsatoryText from '../molecules/pulsatoryText';
import Navigation from '../molecules/navigation';
//data for TextBoxes
import {
  textBox1,
  textBox2,
  textBox3,
  textBox4,
  itemsToBuy,
} from '../../assets/dataForScreens';
//icons
import { GoMail } from 'react-icons/go';
import { ImPhone } from 'react-icons/im';
import { ImEnvelop } from 'react-icons/im';

const ScreenB = ({ timeLine }) => {
  useEffect(() => {
    console.log('%c testing in ScreenB', 'color: yellow');
    console.log('......timeline from Navigation:', timeLine.labels);
  });

  return (
    <div className="screen-b">
      <header className="screen-b__header">
        <div className="line" />
        <div className="logo-contacts">
          <Logo />
        </div>
      </header>

      <main className="screen-b__main">
        <div className="main-box text-box-1">
          <TextBox data={textBox1} />
        </div>
        <div className="main-box text-box-2">
          <TextBox data={textBox2} />
        </div>
        <div className="main-box text-box-3">
          <TextBox data={textBox3} />
        </div>
        <div className="main-box text-box-4">
          <TextBox data={textBox4} />
          <PulsatoryText props={itemsToBuy} />
        </div>
      </main>

      <footer className="screen-b__footer">
        <div className="line" />
        <nav className="contact-icons">
          <a href="tel:798-905-558" className="contact-icon phone">
            <ImPhone />
          </a>
          <a
            href="mailto:77greenzeppelins@gmail.com"
            className="contact-icon email"
          >
            <ImEnvelop />
          </a>
        </nav>
      </footer>

      {/* <div className="screen-b__top"> */}
      {/* <div className="screen-b__top-textbox">
          <TextBox data={textBox2} />
        </div> */}
      {/* <div className="screen-b__top-textbox2">
          <TextBox data={screenBTopX} />
        </div> */}
      {/* </div> */}
      {/* <div className="screen-b__bottom"> */}
      {/* <div className="screen-b__bottom-textbox">
          <TextBox data={screenBBottom} />
        </div> */}
      {/* <div className="screen-b__bottom-textbox2">
          <TextBox data={screenBBottomX} />
          <PulsatoryText props={itemsToBuy} />
        </div> */}
      {/* <div className="screen-b__bottom-textbox3">
          <PulsatoryText props={itemsToBuy} />
        </div> */}
      {/* </div> */}
      {}
      {/* <div className="screen-b__nav">
        <Navigation timeLine={timeLine} />
      </div> */}
      {}
      {/* <div className="screen-b__logo">
        <LogoLink timeLine={timeLine} />
      </div> */}
    </div>
  );
};

export default ScreenB;

/**
 *       {console.log(
        `%c.............return section from ScreenB`,
        'color: yellow'
      )}
 */
