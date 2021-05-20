import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
//
import { dream1, dream2, dream3, finalText } from '../assets/dataForScreens';
import TextBlock from './TextBlock';
//
import { splitToChars } from '../animations/gsapAccesories';
import { sunRingRotation } from '../animations/additionalAnimations';
//
import { ReactComponent as SLopti2 } from '../assets/svg/socketOnFace2opti.svg';
//import SkyHomeLandscape from '../assets/svg/SkyHomeLandscape';

const MainRoutBody = () => {
  //concept of references: <MainRouteBody>'s sections are point of reference but the main targets are components inside; then within useEffect() their 'children' are used to specify targets for gsap's timelines.
  let topSection = useRef(null);
  let bottomSection = useRef(null);
  let mainBodyTL = useRef(
    gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ['<MainBody> / mainTL started....'],
      onComplete: console.log,
      onCompleteParams: ['<MainBody> / mainTL ended....'],
    })
  );
  useEffect(() => {
    //
    console.log(
      `%c<MainBody> / useEffect / bottomSection `,
      'color:#00d2ff',
      bottomSection
    );

    //initial settings for SVG
    const svgWrapper = topSection.children;
    //initial settings for <TextBox>'s
    //step1: references to all <TextBox> that allowes to unset: _textBlock.css / .text-section{...} / visibility what is necessary to avoid 'flashing effect'
    const textBox1 = bottomSection.children[0];
    const textBox2 = bottomSection.children[1];
    const textBox3 = bottomSection.children[2];

    //step2: convert each <TextBox> into array of elements to have acces to each 'line' of text separatell;
    const textBox1Content = gsap.utils.toArray(textBox1.children);
    const textBox2Content = gsap.utils.toArray(textBox2.children);
    const textBox3Content = gsap.utils.toArray(textBox3.children);
    //step3: split each line of each <TextBox>; the function returns array of object; within animation property 'chars' is targeted as it containes array of div's
    const [
      textBox1Header,
      textBox1Line1,
      textBox1Line2,
    ] = textBox1Content.map(item => splitToChars(item));
    const [
      textBox2Header,
      textBox2Line1,
      textBox2Line2,
    ] = textBox2Content.map(item => splitToChars(item));
    const [
      textBox3Header,
      textBox3Line1,
      textBox3Line2,
    ] = textBox3Content.map(item => splitToChars(item));

    //step3: set the perspective
    //
    // gsap.set(textBox1Header, { perspective: 400 });
    console.log(
      `%c<MainBody> / useEffect / tb2Header.chars `,
      'color:#00d2ff',
      textBox2Header.chars
    );
    mainBodyTL.current
      // .set(topSection, { autoAlpha: 0 }) // is not necessary...
      .set(textBox1, { autoAlpha: 1 })
      .set([textBox1Line1.chars, textBox1Line2.chars], {
        autoAlpha: 0,
      })
      .set(textBox1, { perspective: 400 })
      .from(textBox1Header.chars, {
        duration: 1,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: '0% 50% -20%',
        ease: 'back',
        stagger: 0.01,
      })
      .to(textBox1Header.chars, { autoAlpha: 1 })
      .to(topSection, { duration: 1, autoAlpha: 1 }) //'unlocks' SCSS / visibilitu: hidden
      .play();
  }, []);

  return (
    <>
      <div
        ref={el => (topSection = el)}
        className="main-route-body__top-section"
      >
        <SLopti2 />
      </div>
      <div
        ref={el => (bottomSection = el)}
        className="main-route-body__bottom-section"
      >
        <TextBlock textData={dream1} />
        <TextBlock textData={dream2} />
        <TextBlock textData={dream3} />
      </div>
    </>
  );
};

export default MainRoutBody;
//
// useEffect(() => {
//   //refs for topSection / sky
//   const svgSky = topSection.children[0].children[1];
//   const skyRotateRing = svgSky.children[2];
//   const skyYellowRing = svgSky.children[3];
//   const svgCloudTwo = [
//     svgSky.children[21],
//     svgSky.children[22],
//     svgSky.children[23],
//     svgSky.children[24],
//   ];
//   // topSection / refs for ground
//   const svgGround = topSection.children[0].children[2];
//   const svgHome = svgGround.children[0];
//   const svgHomeSolars = svgHome.children[8];
//   //refs bottomSection / for
//   const TextBoxArray = bottomSection.children;
//   console.log(
//     `%c<MainBody> / useEffect / svgSky `,
//     'color:#00d2ff',
//     svgSky.children
//   );
//   //
//   mainBodyTL.current
//     .set(svgSky, { x: '+=110%' })
//     .set(svgGround, { x: '-=110%' })
//     .set(skyYellowRing, { scale: 0.6, transformOrigin: 'center center' })
//     .to(svgSky, {
//       duration: 1.5,
//       autoAlpha: 1,
//       x: '0%',
//       ease: 'back.out(3)',
//     })
//     .to(
//       svgGround,
//       { duration: 1, autoAlpha: 1.5, x: '0%', ease: 'back.out(1.7)' },
//       '<'
//     )
//     .call(sunRingRotation, [skyRotateRing])
//     .set(TextBoxArray, { autoAlpha: 0 })
//     .to(bottomSection, { autoAlpha: 1 })
//     .to(TextBoxArray[0], {
//       duration: 1,
//       autoAlpha: 1,
//       repeat: 1,
//       yoyo: true,
//       repeatDelay: 1.5,
//     })
//     .to(
//       TextBoxArray[1],
//       {
//         duration: 1,
//         autoAlpha: 1,
//         repeat: 1,
//         yoyo: true,
//         repeatDelay: 1.5,
//       },
//       '>1'
//     )
//     .to(svgHomeSolars, { duration: 1, autoAlpha: 1 }, '<')
//     .to(svgCloudTwo, { duration: 1, rotate: 360 })
//     .to(
//       TextBoxArray[2],
//       {
//         duration: 1,
//         autoAlpha: 1,
//         // repeat: 1,
//         // yoyo: true,
//         // repeatDelay: 1.5,
//       },
//       '>3'
//     )
//     .play();
//   return () => mainBodyTL.current.kill();
// }, []);
//
