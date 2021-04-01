import React, { useEffect } from 'react';
//components
import ContactBar from '../molecules/contactBar';
import ContactTab from '../molecules/contactTab';
// import TextSection from '../molecules/textSection';
// import PulsatoryText from '../molecules/pulsatoryText';
// import Navigation from '../molecules/navigation';
//data for TextBoxes
import { dream1 } from '../../assets/dataForScreens';

// import { ImEnvelop } from 'react-icons/im';

const ScreenB = ({ timeLine, state }) => {
  useEffect(() => {
    console.log('%c<ScreenB> / useEffect', 'color: yellow');
    console.log('state', state);
  });

  return (
    <div className="screen-b">
      <main className="screen-b__main">
        <div className="main-top">
          <ContactTab />
          {state && <h1>...state has changed!</h1>}
        </div>
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

export default ScreenB;

/**
 *       {console.log(
        `%c.............return section from ScreenB`,
        'color: yellow'
      )}
 */
