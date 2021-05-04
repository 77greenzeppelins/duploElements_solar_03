import React from 'react';
//components
import ScreenBody from '../molecules/screenBody';
import ContactBar from '../molecules/contactBar';
import { screenBAnimationTl } from '../../animations/screenBAnimation';

const MainScreenB = () => {
  return (
    <div className="screen-b">
      <main className="screen-b__main">
        <ScreenBody />
      </main>
      <footer className="screen-b__footer">
        <div className="line" />
        <ContactBar timeLine={screenBAnimationTl} />
      </footer>
    </div>
  );
};

export default MainScreenB;
