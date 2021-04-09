import React, { useEffect } from 'react';
import { gsap } from 'gsap';
//icons
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
//components
import Logo from '../atoms/logo';

const ContactBar = ({ openModalAbout }) => {
  //
  // const contactBarTl = gsap.timeline();
  // contactBarTl
  //   .set('.contact', { yPercent: -100 }, '>')
  //   .to(
  //     '.contact',
  //     {
  //       duration: 1.5,
  //       delay: 0.5,
  //       yPercent: 0,
  //       visibility: 'visible',
  //       ease: 'power3.out',
  //     },
  //     '>'
  //   )
  //   .pause();

  //initial animation for the component
  useEffect(() => {
    contactBarAnimation();
    // contactBarTl.play();
    // console.log(
    //   `%c <ContactBar> / useEffect / contactBarTl.play() `,
    //   'color: #12c2e9'
    // );
  }, []);
  //
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
  const onMouseOverOut = (event, target1, target2) => {
    const complexTarget = `${target1} ${target2}`;
    console.log(
      `%c <ContactBar> / onMouseOverOut complexTarget `,
      'color: #12c2e9',
      complexTarget
    );
    if (event.type === 'mouseover') {
      gsap.to(target1, { duration: 0.1, opacity: 1 });
      gsap.to(complexTarget, {
        duration: 0.5,
        scale: 1.1,
        color: '#add100',
      });
      console.log(
        `%c <ContactBar> / onMouseOverOut event `,
        'color: #12c2e9',
        event
      );
    } else {
      gsap.to(complexTarget, { duration: 1, scale: 1, color: 'white' });
      gsap.to(target1, { opacity: 0.5 });
    }
  };

  return (
    <address className="contact">
      <div className="contact__direct">
        <a
          href="mailto:77greenzeppelins@gmail.com"
          className="contact__icon email"
          // onMouseOver={event =>
          //   onMouseOverOut(event, '.contact__icon.email', ' svg')
          // }
          // onMouseOut={event =>
          //   onMouseOverOut(event, '.contact__icon.email', ' svg')
          // }
        >
          <SiMailDotRu />
        </a>
        <a
          href="tel:798-905-558"
          className="contact__icon phone"
          // onMouseOver={event =>
          //   onMouseOverOut(event, '.contact__icon.phone', 'svg')
          // }
          // onMouseOut={event =>
          //   onMouseOverOut(event, '.contact__icon.phone', 'svg')
          // }
        >
          <ImPhone />
        </a>
      </div>
      {/* <button className="contact__form" onClick={() => modalHandler()}> */}
      <button
        className="contact__form"
        onClick={event => openModalAbout(event)}
        // onMouseOver={event => onMouseOverOut(event, '.contact__form', 'span')}
        // onMouseOut={event => onMouseOverOut(event, '.contact__form', 'span')}
      >
        <div className="contact__logo">
          <Logo />
        </div>
      </button>
    </address>
  );
};

export default ContactBar;
