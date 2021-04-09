import React, { useEffect } from 'react';
import { gsap } from 'gsap';
//icons
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
//components
import Logo from '../atoms/logo';

const ContactBar = ({ modalHandler }) => {
  const contactBarAnimation = () => {
    const contactBarTl = gsap.timeline();
    contactBarTl.set('.contact', { yPercent: -100 }, '>').to(
      '.contact',
      {
        duration: 1.5,
        delay: 0.5,
        yPercent: 0,
        visibility: 'visible',
        ease: 'power3.out',
      },
      '>'
    );
    return contactBarTl;
  };

  useEffect(() => {
    contactBarAnimation();
  }, []);

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
      <button className="contact__form" onClick={() => modalHandler()}>
        <div className="contact__logo">
          <Logo />
        </div>
      </button>
    </address>
  );
};

export default ContactBar;
