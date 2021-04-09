import React, { useEffect } from 'react';
//components
import LogoLink from '../molecules/logoLink';
import TextBox from '../molecules/textBox';
import PulsatoryText from '../molecules/pulsatoryText';
import Navigation from '../molecules/navigation';
//data for TextBoxes
import {
  screenBTop,
  screenBTopX,
  screenBBottom,
  screenBBottomX,
  itemsToBuy,
} from '../../assets/dataForScreens';

const ScreenB = ({ timeLine }) => {
  useEffect(() => {
    console.log('%c testing in ScreenB', 'color: yellow');
    console.log('......timeline from Navigation:', timeLine.labels);
    console.log('%c============================', 'color: yellow');
  });

  return (
    <div className="screen-b">
      <div className="screen-b__header"></div>
      <div className="screen-b__top">
        <div className="screen-b__top-textbox">
          <TextBox data={screenBTop} />
        </div>
        <div className="screen-b__top-textbox2">
          <TextBox data={screenBTopX} />
        </div>
      </div>
      <div className="screen-b__bottom">
        <div className="screen-b__bottom-textbox">
          <TextBox data={screenBBottom} />
        </div>
        <div className="screen-b__bottom-textbox2">
          <TextBox data={screenBBottomX} />
          <PulsatoryText props={itemsToBuy} />
        </div>
        {/* <div className="screen-b__bottom-textbox3">
          <PulsatoryText props={itemsToBuy} />
        </div> */}
      </div>
      {}
      <div className="screen-b__nav">
        <Navigation timeLine={timeLine} />
      </div>
      {}
      <div className="screen-b__logo">
        <LogoLink timeLine={timeLine} />
      </div>
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
