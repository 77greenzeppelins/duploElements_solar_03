import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//components=atoms
import Logo from '../atoms/logo';
import { gsap } from 'gsap';
//animation
import logoLinkAnimation from '../../animations/logoLinkAnimation';

const LogoLink = ({ timeLine }) => {
  //
  // console.log('%c testing in LogoLink', 'color: yellow');
  // console.log('......timeline from Navigation:', timeLine.labels[0]);
  // console.log('%c============================', 'color: yellow');
  //
  // useEffect(() => {
  //   let tl = gsap.timeline();
  //   //basic setting that allowe to avoid 'Flash Of Unstyled Content'
  //   tl.set('.logo-link .logo', { duration: 0.1, autoAlpha: 1, delay: 6.5 }).add(
  //     logoLinkAnimation()
  //   );
  // }, []);
  //
  return (
    <div className="logo-link">
      <Link to="/contacts">
        <Logo />
        {/* <div className="test-div" ref={linkRef} /> */}
      </Link>
    </div>
  );
};

export default LogoLink;

/**
 * console.log(
      '...hello from LogoLink...test for: linkRef.current',
      linkRef.current
    );
    linkRef.current.focus();
 */
