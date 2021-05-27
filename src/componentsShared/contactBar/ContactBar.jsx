import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//components
import SvgIcon from '../../componentsShared/svgIcon/svgIcon';
//
const ContactBar = props => {
  const { businessMail, businessMobile, icons, iconSize } = props;
  const [emailIcon, phoneIcon] = icons;
  // console.log('icons', icons);
  //
  function onClick(e, data) {
    window.location = data;
    e.preventDefault();
  }
  //
  return (
    <address className="contact-bar__wrapper">
      <div className="contact-bar__line"></div>
      <div className="contact-bar__item">
        <Link
          className="icon mobile"
          to="#"
          onClick={e => onClick(e, businessMobile)}
        >
          <SvgIcon icon={phoneIcon} iconSize={iconSize} />
        </Link>
      </div>
      <div className="contact-bar__item">
        <Link
          className="icon email"
          to="#"
          onClick={e => onClick(e, businessMail)}
        >
          <SvgIcon icon={emailIcon} iconSize={iconSize} />
        </Link>
      </div>
    </address>
  );
};

export default ContactBar;
