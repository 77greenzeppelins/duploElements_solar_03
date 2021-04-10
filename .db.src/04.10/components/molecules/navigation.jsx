import React, { useState } from 'react';
import { gsap } from 'gsap';

import { VscDebugRestart } from 'react-icons/vsc';
import { IoRefreshOutline } from 'react-icons/io5';

import { VscDebugPause } from 'react-icons/vsc';
import { RiPauseFill } from 'react-icons/ri';

import { VscDebugContinue } from 'react-icons/vsc';
import { BiRightArrow } from 'react-icons/bi';
import { RiPlayLine } from 'react-icons/ri';

import { VscChevronLeft } from 'react-icons/vsc';
import { VscChevronRight } from 'react-icons/vsc';

const Navigation = ({ timeLine }) => {
  //
  console.log('%c testing in Navigation', 'color: yellow');
  console.log('......timeline from Navigation:', timeLine.labels);
  console.log('%c============================', 'color: yellow');
  //
  const [stopPlay, setStopPlay] = useState(false);
  //
  const buttonAnimation = target => {
    const previewTl = gsap.timeline();
    return previewTl.to(target, {
      duration: 0.3,
      opacity: 1,
      // x: '-=5',
      scale: 0.7,
      transformOrigin: 'center center',
      repeat: 1,
      yoyo: true,
    });
  };
  //

  const displayPreviev = () => {
    const label1 = Object.keys(timeLine.labels)[0];
    // console.log(
    //   '....labels of homePageAnimation timeline:',
    //   Object.keys(timeLine.labels)
    // );
    // console.log('label1:', label1);
    timeLine.play(label1);
    setStopPlay(false);
    buttonAnimation('.button-prev');
  };
  const displayStop = () => {
    buttonAnimation('.button-pause-play');
    // setTimeout(() => {
    //   setStopPlay(!stopPlay);
    // }, 280);
    setStopPlay(!stopPlay);
    stopPlay ? timeLine.play() : timeLine.pause();
  };
  const displayNext = () => {
    buttonAnimation('.button-next');
    const label2 = Object.keys(timeLine.labels)[1];
    timeLine.play(label2);
    setStopPlay(false);
  };
  const displayReload = () => {
    buttonAnimation('.button-reload');
    setTimeout(() => {
      timeLine.restart();
    }, 1000);
    // timeLine.restart();
    setStopPlay(false);
  };

  return (
    <nav className="navigation">
      <div className="button-prev" onClick={displayPreviev}>
        <VscChevronLeft />
      </div>

      <div className="button-pause-play" onClick={displayStop}>
        {stopPlay ? <RiPlayLine /> : <RiPauseFill />}
      </div>

      <div className="button-next" onClick={displayNext}>
        <VscChevronRight />
      </div>

      <div className="button-reload" onClick={displayReload}>
        <IoRefreshOutline />
        {/* <IoIosRefresh /> */}
      </div>
    </nav>
  );
};

export default Navigation;
