import React from 'react';
//icons
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
//components
import Logo from '../atoms/logo';

const ContactBar = ({ modalHandler }) => {
  return (
    <address className="contact">
      <div className="contact__direct">
        <a
          href="mailto:77greenzeppelins@gmail.com"
          className="contact__icon email"
        >
          <SiMailDotRu />
        </a>
        <a href="tel:798-905-558" className="contact__icon phone">
          <ImPhone />
        </a>
      </div>
      {/* <button className="contact__form" onClick={() => modalHandler()}> */}
      <button className="contact__form" onClick={modalHandler}>
        <div className="contact__logo">
          <Logo />
          {/* duploELEMENTS */}
        </div>
      </button>
    </address>
  );
};

export default ContactBar;
