import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//components
import SvgIcon from '../svgIcon/svgIcon';
//
const NavigationBar = props => {
  const { businessMail, businessMobile, icons, iconSize } = props;
  const [emailIcon, phoneIcon] = icons;

  //
  const onClick = (e, data) => {
    window.location = data;
    e.preventDefault();
  };
  //
  return (
    <nav className="navigation-bar__wrapper">
      {/* <div className="navigation-bar__line"></div> */}
      <div className="navigation-bar__contact-item">
        <Link
          className="icon mobile"
          to="#"
          onClick={e => onClick(e, businessMobile)}
        >
          <SvgIcon icon={phoneIcon} iconSize={iconSize} />
        </Link>
      </div>
      <div className="navigation-bar__navigation-item">{props.children}</div>
      <div className="navigation-bar__contact-item">
        <Link
          className="icon email"
          to="#"
          onClick={e => onClick(e, businessMail)}
        >
          <SvgIcon icon={emailIcon} iconSize={iconSize} />
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
