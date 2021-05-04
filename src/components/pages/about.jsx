import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  pageAboutText,
  pageAboutTextBottom,
  ourStory,
  localization,
  scope,
} from '../../assets/dataForScreens';
import SvgIcon from '../atoms/svgIcon';
// import ContactIconsBar from '../molecules/contactIconsBar';
import LabelledDroppedBox from '../molecules/labelledDroppedBox';
// Ionicons 4 icons
// import { SiMailDotRu } from 'react-icons/si';
// import { ImPhone } from 'react-icons/im';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IoIosCloseCircleOutline } from 'react-icons/io';

// import { IoIosArrowDropright } from 'react-icons/io';
// import { IoIosArrowDropup } from 'react-icons/io';
// import { IoIosArrowDropdown } from 'react-icons/io';

//Destrukturyzacja danych tekstowych
const {
  header,
  section1,
  section2,
  section3,
  section4,
  section5,
  //   scope,
  //   letsContact,
} = pageAboutText;

const { header1, header2, header3 } = pageAboutTextBottom;

const About = ({ labelChanger }) => {
  //
  console.log('localization', localization);
  //references
  const topContainer = useRef();
  const bottomContainer = useRef();
  //
  let timeUE = new Date().toLocaleTimeString();
  let milisecUE = new Date().getMilliseconds();
  console.log(`%c<About> / time`, 'color:#009FFF', `${timeUE}:${milisecUE}`);
  //LOGIC
  // const topContainerTest = topContainer.current;
  // const headerTest = topContainerTest.children[0];
  // ????????????????????????????????????????????????????????????????????
  // let testHeader = useRef(null);
  // const getRef = el => {
  //   testHeader = el;
  //   console.log(
  //     `%c<About> / getRef() / testHeader`,
  //     'color:#009FFF',
  //     testHeader
  //   );
  //   return testHeader;
  // };
  // ??????????????????????????????????????????????????????????????????
  // const getElementWidth = element => {
  //   const { width, x } = element.getBoundingClientRect();
  //   console.log(`getElementWidth was called`, width);
  //   return width;
  // };
  // const setElementWidth = (modifiedTarget, getter, referencedTarget) => {
  //   const tl = gsap.timeline();
  //   tl.to(modifiedTarget, { width: getter(referencedTarget) + 'px' });
  //   console.log(`setElementWidth was called`, tl);
  //   return tl;
  // };
  // ????????????????????????????????????????????????????????????????????
  useEffect(() => {
    //
    console.log(`%c<About> / useEffect /`, 'color:#009FFF');
    // references to TopContainer
    const [topHeader, topParagraphs] = topContainer.current.children;
    // references to BottomContainer
    // const [ldb1, ldb2, ldb3] = bottomContainer.current.children;

    // const resultOfGetElementWidth = getElementWidth(
    //   localizationText.children[0]
    // );
    // tests for: getElementWidth
    // console.log('resultOfGetElementWidth', resultOfGetElementWidth);
    //

    const aboutPageTL = gsap.timeline();
    aboutPageTL.set([topHeader, gsap.utils.toArray(topParagraphs.children)], {
      autoAlpha: 1,
    });
    // .fromTo(
    //   topHeader,
    //   { scale: 1.5 },
    //   { duration: 2, autoAlpha: 1, scale: 1 }
    // )
    // .fromTo(
    //   gsap.utils.toArray(topParagraphs.children),
    //   { scale: 1.5 },
    //   {
    //     duration: 2,
    //     scale: 1,
    //     autoAlpha: gsap.utils.wrap([1, 1, 1, 0.5]),
    //     stagger: { each: 0.5 },
    //   },
    //   '<1'
    // )
    // .to(localizationBorder, {
    //   duration: 1,
    //   width: getElementWidth(localizationText.children[0]) + 'px',
    // })
    // .to(
    //   localizationBorder,
    //   {
    //     duration: 1.5,
    //     scaleX: 1,
    //     autoAlpha: 0.5,
    //     transformOrigin: 'center',
    //   },
    //   '<'
    // )
    // //
    // .to(localizationText, { duration: 1, autoAlpha: 1 }, '<1')
    // .to(aboutBottomContactIcons, { duration: 1, autoAlpha: 1 })
    // .to(aboutBottomNavIcon, { duration: 1, autoAlpha: 1 });

    // console.log(
    //   `%c<About> / topParagraphs`,
    //   'color:#009FFF',
    //   gsap.utils.toArray(topParagraphs.children)
    // );
  }, []);
  //
  //mouseenter / mouseleave
  const iconRefLbd1 = useRef(null);
  const iconRefLbd2 = useRef(null);
  //
  // const mouseEnterLeaveAnimeTl = gsap.timeline();
  //
  // const mouseEnterLeaveAnime = terget => {
  //   mouseEnterLeaveAnimeTl
  //     .to(terget, {
  //       duration: 0.6,
  //       x: '-=3',
  //       color: '#add100',
  //     })
  //     .pause();
  // };
  //
  // useEffect(() => {
  //   mouseEnterLeaveAnimeTl
  //     .to(iconRefLbd1.current, {
  //       duration: 0.6,
  //       x: '-=3',
  //       color: '#add100',
  //     })
  //     .pause();
  // }, [mouseEnterLeaveAnimeTl]);
  //
  // useEffect(() => {
  //   mouseEnterLeaveAnimeTl
  //     .to(iconRefLbd2.current, {
  //       duration: 0.6,
  //       x: '-=3',
  //       color: '#add100',
  //     })
  //     .pause();
  // }, [iconRefLbd2]);
  //
  // console.log(
  //   `%c<About> / mouseEnterLeaveAnimeTl.paused():`,
  //   'color:#009FFF',
  //   mouseEnterLeaveAnimeTl.paused()
  // );
  //
  // const mouseEnter = () => {
  //   mouseEnterLeaveAnimeTl.play();
  //   console.log(
  //     `%c<About> / mouseEnter / mouseEnterLeaveAnimeTl.paused()`,
  //     'color:#009FFF',
  //     mouseEnterLeaveAnimeTl.paused()
  //   );
  //   console.log(
  //     `%c<About> / mouseEnter / iconRefLbd1`,
  //     'color:#009FFF',
  //     iconRefLbd1.current
  //   );
  // };
  // const mouseLeave = () => {
  //   mouseEnterLeaveAnimeTl.reverse();
  //   console.log(`%c<About> / onMouseLeave works.... `, 'color:#009FFF');
  // };

  //
  return (
    <div className="container-inner">
      <section ref={topContainer} className="about top">
        <h1 className="about__header">{header}</h1>
        <div className="about__paragraphs">
          <p className="about__paragraph">{section1}</p>
          <p className="about__paragraph">{section2}</p>
          <p className="about__paragraph">{section3}</p>
          <p className="about__paragraph">{section4}</p>
          <p className="about__paragraph">{section5}</p>
        </div>
        <div className="about__header-line" />
      </section>

      <div ref={bottomContainer} className="about bottom">
        <LabelledDroppedBox
          headerTextData={header1}
          icon={<IoIosArrowDropleft />}
          iconClose={<IoIosCloseCircleOutline />}
        >
          <p>{ourStory.story}</p>
        </LabelledDroppedBox>

        <LabelledDroppedBox
          headerTextData={header2}
          icon={<IoIosArrowDropleft />}
          iconClose={<IoIosCloseCircleOutline />}
        >
          <div>.....................................................</div>
        </LabelledDroppedBox>
        <LabelledDroppedBox
          headerTextData={header3}
          icon={<IoIosArrowDropleft />}
          iconClose={<IoIosCloseCircleOutline />}
        >
          <div className="localization-wrapper">
            <ul className="localization__ul">
              {localization.map((line, index) => (
                <li className="localization__li" key={index}>
                  {line}
                </li>
              ))}
            </ul>
            <p className="localization__scope">{scope}</p>
          </div>
        </LabelledDroppedBox>

        {/* <div className="about__border"></div>
        <ul className="about__localization">
          <li>{localization.label}</li>
          <li>{localization.street}</li>
          <li>{localization.city}</li>
          <li>{localization.gps1}</li>
          <li>{localization.gps2}</li>
        </ul> */}

        {/* <div className="about__contacts">
          <ContactIconsBar icons={[<SiMailDotRu />, <ImPhone />]} />
        </div> */}
      </div>
      <footer className="about__footer flex-to-right">
        <div className="about__footer-line" />
        <Link to="/ref" className="about__link">
          <SvgIcon icon={<IoIosArrowDropleft />} />
          <p>powrót</p>
        </Link>
      </footer>
    </div>
  );
};
export default About;
