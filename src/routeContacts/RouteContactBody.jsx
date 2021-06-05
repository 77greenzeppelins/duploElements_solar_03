import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { splitText } from '../animations/textAnimationLibrary';
//staff for footer
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
import HamburgerMenuIcon from '../componentsShared/customIcons/HamburgerMenuIcon';
//
import SvgPlusText from '../componentsShared/svgPlusText/SvgPlusText';
import { ReactComponent as TheSun } from '../assets/svg/sun_w80_h80_v2.svg';
import { ReactComponent as TheSunIcon } from '../assets/svg/sun_w80_h80_iconLike.svg';
import { ReactComponent as CloudIconLeft } from '../assets/svg/cloud_w80_h80_iconLeft.svg';
import { ReactComponent as CloudIconRight } from '../assets/svg/cloud_w80_h80_iconRight.svg';

//
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//
const RouteContactBody = () => {
  //
  let heroTop = useRef(null);
  let heroBottom = useRef(null);
  let heroTL = useRef(gsap.timeline({ paused: true }));
  //   let rcbTL = useRef(gsap.timeline({ paused: true }));
  let section1 = useRef(null);
  let section2 = useRef(null);
  let section3 = useRef(null);

  //
  // useEffect for hero animation
  useEffect(() => {
    const heroBottomSplitted = splitText(heroBottom, 'words');
    heroTL.current
      .set(heroTop, { scale: 0.8, autoAlpha: 0 })
      .to(heroTop, {
        duration: 1,
        autoAlpha: 1,
        scale: 1,
        transformOrigin: 'center left',
      })
      .set(heroBottom, { autoAlpha: 1 })
      .wordsFlopping(heroBottomSplitted.words)
      .play();
  }, []);
  // useEffect for sections animation
  useEffect(() => {
    let section1content = [...section1.children];
    let section2content = [...section2.children];
    let section3content = [...section3.children];

    console.log(
      '<RouteContactBody> / useEffect / section1content ',
      section1content
    );
    //
    gsap.utils.toArray('.rcd-section').forEach((section, index) => {
      //
      const rcbTL = gsap.timeline();
      //
      ScrollTrigger.create({
        animation: rcbTL,
        trigger: section,
        toggleActions: 'play none none none ',
        start: 'top center',
        // markers: true,
      });
      //
      rcbTL
        .set([section], { autoAlpha: 1 })
        .set([section.children], {
          autoAlpha: 0,
          x: gsap.utils.wrap([-100, 100, -100]),
          y: '-=50',
        })
        .to([section.children], {
          duration: 1,
          autoAlpha: 1,
          x: gsap.utils.wrap([0, 0, 0]),
          y: '+=50',
          stagger: { each: 0.05 },
        });
    });
  }, []);

  return (
    <>
      <div className="rcd-hero">
        <p ref={el => (heroTop = el)} className="rcd-hero__top">
          <span>Najlepsze</span>
          <span>solary</span>
          <span>pod</span>
          <span>Słońcem</span>
        </p>
        <p ref={el => (heroBottom = el)} className="rcd-hero__bottom">
          Właśnie tym dzielimy się z naszymi Klientami.
        </p>
        <div className="rcd-hero__pseudo-footer"></div>
      </div>

      <section ref={el => (section1 = el)} className="rcd-section">
        <h1 className="rcd-header">What is Lorem Ipsum?</h1>
        <p className="rcd-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the in ter took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="rcd-svg">
          <SvgPlusText svg={<TheSun />}>
            <p>Welcome to the jungle, we got fun n' games</p>
          </SvgPlusText>
        </div>
      </section>

      <section ref={el => (section2 = el)} className="rcd-section">
        <h1 className="rcd-header">Where does it come from?</h1>
        <p className="rcd-text">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <div className="rcd-svg">
          <SvgPlusText svg={<TheSun />}>
            <p>Welcome to the jungle, we got fun n' games</p>
          </SvgPlusText>
        </div>
      </section>

      <section ref={el => (section3 = el)} className="rcd-section">
        <h1 className="rcd-header">Number of the beast: 666</h1>
        <p className="rcd-text">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <div className="rcd-svg">
          <SvgPlusText svg={<TheSun />}>
            <p>Welcome to the jungle we take it day by day</p>
          </SvgPlusText>
        </div>
      </section>

      <div className="rcd-footer">
        <div className="rcd-footer__svg-container">
          <div className="rcd-footer__svg-container image">
            <CloudIconLeft />
          </div>
          <div className="rcd-footer__svg-container icon">
            <ImPhone />
          </div>
        </div>
        <div className="rcd-footer__svg-container">
          <div className="rcd-footer__svg-container image">
            <TheSunIcon />
          </div>

          {/* <div className="rcd-footer__menu-sun">
            <TheSunIcon />
          </div>
          <div className="rcd-footer__menu-phone">
            <ImPhone />
          </div> */}
        </div>
        <div className="rcd-footer__svg-container ">
          <div className="rcd-footer__svg-container image">
            <CloudIconRight />
          </div>
          <div className="rcd-footer__svg-container icon">
            <SiMailDotRu />
          </div>
        </div>
      </div>
    </>
  );
};
export default RouteContactBody;
