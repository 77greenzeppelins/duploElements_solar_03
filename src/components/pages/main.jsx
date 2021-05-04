import React, { useRef, useEffect } from 'react';
//
import { gsap } from 'gsap';
//
import Logo from '../atoms/logo';
import ContactBar from '../molecules/contactBar';
import SvgSkyHome1 from '../../assets/svg/SkyHome1';
import TextSection from '../molecules/textSection';
//
//staff for animations
import {
  splitToChars,
  sunRingRotation,
  contactBarAnimation,
} from '../../animations/initialLogoAnimations';
//staff for <TextSection>'s
import { dream1, dream2, dream3, finalText } from '../../assets/dataForScreens';
//staff for <ContactBar>
import { businessMail, businessMobile } from '../../assets/businessData';
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
//
const Main = ({ labelTime, labelChanger }) => {
  //refs
  let mainLogoContainer = useRef(null);
  let mainTopContainer = useRef(null);
  let mainBottomContainer = useRef(null);
  let footerContainer = useRef(null);
  //refs for <Logo> / forwarded...
  let initialLogo = useRef(null);
  //refs for <TextSection> / not forwarded...
  // let textBoxesRefs = useRef([]);
  // textBoxesRefs.current = [];
  // const createReference = el => {
  //   if (el & !textBoxesRefs.current.includes(el)) {
  //     textBoxesRefs.current.push(el);
  //   }
  //   console.log(
  //     `%c <Main / useEffect / textBoxesRefs.current`,
  //     'color: #f80749 ',
  //     textBoxesRefs.current
  //   );
  // };

  //getting data from mainAnimation
  const mainAnimation = gsap.timeline();

  useEffect(() => {
    //
    //stuff for <Logo> reference and its container
    const mainLogoDiv = mainLogoContainer.current; //<Logo> container within <Main> component
    const initialLogoWrapper = initialLogo.current;
    const duploSplited = splitToChars(initialLogo.current.children[0]);
    const elementsSplited = splitToChars(initialLogo.current.children[1]);
    //SVG references
    const mainTopDiv = mainTopContainer.current;
    const svgWrapper = mainTopDiv.children[0];
    const svgSunRotatingRing = svgWrapper.querySelector('.sunRU');
    const svgSunYellow = svgWrapper.querySelector('.sunRD');
    const svgSolars = svgWrapper.querySelector('.solars');
    //<TextSection> references
    const mainBottomDiv = mainBottomContainer.current;
    const textBox1 = mainBottomDiv.children[0];
    const textBox1Header = textBox1.children[0];
    const textBox1Line1 = textBox1.children[1];
    const textBox1Line2 = textBox1.children[2];
    const textBox1Line3 = textBox1.children[3];
    const textBox1Line4 = textBox1.children[4];

    //

    //footer references
    const footerDiv = footerContainer.current;
    const footerLine = footerDiv.children[0];
    const footerContactBar = footerDiv.children[1];
    const footerLogo = footerContactBar.querySelector('.logo');

    console.log(
      `%c <Main / useEffect / footerLogo`,
      'color: #f80749 ',
      footerLogo
    );

    //mainAnimation starts here========================================
    mainAnimation
      .addLabel('label1')
      .set([mainTopDiv, mainBottomDiv, footerDiv], {
        display: 'none',
        autoAlpha: 0,
      })
      .set(mainLogoDiv, { xPercent: 100 })
      .set([elementsSplited.chars, duploSplited.chars], {
        color: '#add100',
      })
      .to(elementsSplited.chars, {
        duration: 2.5,
        x: '-300',
        rotation: -360,
        ease: 'elastic.out(0.3, 0.2)',
        stagger: { each: 0.02 },
      })
      .set(duploSplited.chars, { x: '-300' })
      .fromTo(
        duploSplited.chars,
        { autoAlpha: 0 },
        { duration: 1, autoAlpha: 1 }
      )
      .to(initialLogoWrapper, { autoAlpha: 0, duration: 0.5 })
      .set(mainLogoDiv, { display: 'none' })
      //part II.......................................................
      .addLabel('label2')
      .set([mainTopDiv, mainBottomDiv, footerDiv], {
        display: 'flex',
        autoAlpha: 1,
      })
      .set([svgWrapper, svgSunYellow, svgSolars], { autoAlpha: 0 })

      .call(
        contactBarAnimation,
        [footerContactBar, footerLine, footerLogo],
        '<'
      )
      .fromTo(
        svgWrapper,
        { scale: 0 },
        {
          duration: 1.5,
          autoAlpha: 1,
          scale: 1,
        },
        '<'
      )
      .call(sunRingRotation, [svgSunRotatingRing], '<')
      .fromTo(
        svgSunYellow,
        { scale: 0, transformOrigin: 'center' },
        { scale: 0.6, duration: 2, autoAlpha: 1, rotate: 360 },
        '<0.4'
      )
      .set(textBox1, { display: 'block', autoAlpha: 0 })
      .to(textBox1, { duration: 1, autoAlpha: 1 })
      .play(labelTime);
    // .timeScale(0.5);
    console.log(
      `%c <Main / useEffect / mainAnimation`,
      'color: #f80749 ',
      mainAnimation.labels
    );
  }, [mainAnimation, labelTime]);

  //
  return (
    <div className="container-inner center-all">
      <main className="main ">
        <div ref={mainLogoContainer} className="main__logo center-all">
          <Logo ref={initialLogo} />
        </div>
        <div ref={mainTopContainer} className="main__top center-all">
          <SvgSkyHome1 />
        </div>
        <div ref={mainBottomContainer} className="main__bottom center-all">
          <TextSection textData={dream1} />
          <TextSection textData={dream2} />
          <TextSection textData={dream3} />
          <TextSection textData={finalText} />
        </div>
      </main>
      <footer ref={footerContainer} className="footer">
        <div className="footer__line" />
        <ContactBar
          labelChanger={labelChanger}
          businessMail={`mailto:${businessMail}`}
          businessMobile={`tel:${businessMobile}`}
          linkTo="/about"
          icons={[<SiMailDotRu />, <ImPhone />]}
        />
      </footer>
    </div>
  );
};
export default Main;
