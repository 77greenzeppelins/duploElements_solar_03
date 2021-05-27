import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
//
import LinkWithState from '../componentsShared/linkWithState/LinkWithState';
import SvgIcon from '../componentsShared/svgIcon/svgIcon';
// import { IoIosClose } from 'react-icons/io';
import { IoIosReturnLeft } from 'react-icons/io';
//
import { ourStory } from '../assets/routeOurHistoryData';

const RouteOurHistory = () => {
  //
  const history = useHistory();
  //
  console.log('<RouteOurHistory> / history', history);
  //
  const goBackHandler = () => history.goBack();
  //
  const {
    intro,
    suddenly,
    enlightenment,
    story1,
    title,
    story2,
    conclusion,
  } = ourStory;
  //
  //
  let container = useRef(null);
  let overlay = useRef(null);
  let content = useRef(null);
  let ourStoryTL = useRef(
    gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ['ourStoryTL is starting...'],
    })
  );
  let ourStoryCloseTL = useRef(gsap.timeline());
  //
  //   useEffect(() => {
  //     ourStoryTL.current
  //       .set(container, { display: 'block' })
  //       .to(overlay, { duration: 0.3, autoAlpha: 1 })
  //       .to(content, { duration: 0.6, autoAlpha: 1 })
  //       .play();

  //     return () => ourStoryTL.current.pause().kill();
  //   }, []);

  const closePanel = () => {
    console.log('<RouteOurStory> / onClick = {closePanel}');
    ourStoryCloseTL.current
      .to(content, { duration: 0.3, autoAlpha: 0 })
      .to(overlay, { duration: 0.3, autoAlpha: 0 })
      .call(goBackHandler);
  };
  //
  return (
    <div ref={el => (container = el)} className="roh__container">
      <div ref={el => (overlay = el)} className="roh-overlay" />
      <div ref={el => (content = el)} className="roh-content">
        {/* <div className="os-content__main-part"> {ourStory}</div> */}
        <div className="roh-content__text-wrapper">
          {/* <div className="os-content__content">{ourStory.story}</div> */}
          <p className="roh-content__text-paragraph">
            <span>{intro}</span> <br />
            <span>{suddenly}</span> <br />
            <span>
              <strong>{enlightenment}</strong>
            </span>
            <br />
            <span>
              {story1} <em> &nbsp;{title}&nbsp; </em> {story2}
            </span>
            <br />
            <span>
              <strong>{conclusion}</strong>
            </span>
          </p>
        </div>
        <nav className="roh-content__button-wrapper">
          <button className="roh-content__button" onClick={closePanel}>
            <SvgIcon icon={<IoIosReturnLeft />} />
          </button>
          {/* <LinkWithState pathname="/about" from="/ourhistory">
            <SvgIcon icon={<IoIosReturnLeft />} iconSize="icon-medium" />
          </LinkWithState> */}
        </nav>
        <div className="roh-content__bottom"></div>
      </div>
    </div>
  );
};

export default RouteOurHistory;
