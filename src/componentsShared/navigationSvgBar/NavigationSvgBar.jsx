import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//components
import SvgIcon from '../svgIcon/svgIcon';
//
const NavigationSvgBar = props => {
  const { businessMail, businessMobile, svgIcons, svgImages, iconSize } = props;
  const [emailIcon, phoneIcon] = svgIcons;
  const [TheSunIcon, CloudIconLeft, CloudIconRight] = svgImages;

  //
  const onClick = (e, data) => {
    window.location = data;
    e.preventDefault();
  };
  //
  return (
    <nav className="nav-svg-bar__wrapper">
      {/* <div className="nav-svg-bar__line"></div> */}
      <div className="nav-svg-bar__item">
        <Link
          // className="icon mobile"
          to="#"
          onClick={e => onClick(e, businessMobile)}
        >
          <div className="rcd-footer__svg-container">
            <div className="rcd-footer__svg-container image">
              {CloudIconLeft}
            </div>
            <div className="rcd-footer__svg-container icon">{phoneIcon}</div>
          </div>
          {/* <SvgIcon icon={phoneIcon} iconSize={iconSize} /> */}
        </Link>
      </div>
      <div className="nav-svg-bar__item">
        <div className="rcd-footer__svg-container">
          <div className="rcd-footer__svg-container image">{TheSunIcon}</div>
          <div className="rcd-footer__svg-container icon">{props.children}</div>
        </div>
      </div>
      <div className="nav-svg-bar__item">
        <Link
          // className="icon email"
          to="#"
          onClick={e => onClick(e, businessMail)}
        >
          <div className="rcd-footer__svg-container">
            <div className="rcd-footer__svg-container image">
              {CloudIconRight}
            </div>
            <div className="rcd-footer__svg-container icon">{emailIcon}</div>
          </div>
          {/* <SvgIcon icon={emailIcon} iconSize={iconSize} /> */}
        </Link>
      </div>
    </nav>
  );
};

export default NavigationSvgBar;
