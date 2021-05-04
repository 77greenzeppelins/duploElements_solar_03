import React from 'react';
import { Link } from 'react-router-dom';
//components
import Logo from '../atoms/logo';

//
function onClick(e, data) {
  window.location = data;
  e.preventDefault();
}

const ContactBar = props => {
  //
  const { labelChanger, businessMail, businessMobile, linkTo, icons } = props;
  const [emailIcon, phoneIcon] = icons;
  //
  return (
    <address className="contact">
      <div className="contact__direct">
        <Link
          className="contact__icon email"
          to="#"
          onClick={e => onClick(e, businessMail)}
        >
          {emailIcon}
        </Link>

        <Link
          className="contact__icon email"
          to="#"
          onClick={e => onClick(e, businessMobile)}
        >
          {phoneIcon}
        </Link>
      </div>
      <Link onClick={labelChanger} to={linkTo} className="contact__logo">
        <Logo />
      </Link>
    </address>
  );
};

export default ContactBar;
