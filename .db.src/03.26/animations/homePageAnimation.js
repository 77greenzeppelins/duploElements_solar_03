import { gsap } from 'gsap';
import logoAnimation from './logoAnimation';
//====================================================

const homePageAnimation = setState => {
  //
  // console.log('homePageAnimation...it is "state"', state);
  //
  gsap.config({ nullTargetWarn: false });
  gsap.set(['.screen-b'], {
    autoAlpha: 0,
  });
  gsap.set(['.contact'], { yPercent: -100 });
  //
  const tl = gsap.timeline({
    defaults: { ease: 'Power2.easeOut' },
    onStart: console.log,
    onStartParams: ['animacja wystartowała'],
    onComplete: setState,
    onCompleteParams: [true],
  });
  //
  tl.add('lab1')
    .add(logoAnimation())
    .to(
      '.container-outer',
      {
        duration: 2,
        opacity: 0,
      },
      '-=1.1'
    )
    .to(
      '.container-outer',
      {
        duration: 0,
        scaleY: 0,
        transformOrigin: 'bottom center',
      },
      '>'
    )
    //============================================== animation of SCREEN B

    .to(
      '.screen-b',
      {
        duration: 0,
        autoAlpha: 1,
      },
      '-=2'
    )
    .add('lab2')
    .to(
      '.screen-b__footer .line',
      {
        duration: 0.7,
        autoAlpha: 0.5,
        scaleX: 1,
        transformOrigin: 'center center',
      },
      '<'
    )
    .to(
      ['.contact'],
      { duration: 1.5, yPercent: 0, visibility: 'visible', ease: 'power3.out' },
      '>'
    )
    //,
    //
    // .from('.screen-b__main', { duration: 2, justifyContent: 'center' }, '<')
    // .from('.screen-b__main', { duration: 2 }, '<')
    .set('.frame__header', { autoAlpha: 0, y: '+=200px' }, '>')
    .set('.frame__span', { autoAlpha: 0, yPercent: 100, skewY: 10 }, '<')
    .to('.frame__header', { duration: 2, y: '-=200px', autoAlpha: 1 }, '<')
    .to('.frame__span', {
      duration: 1.5,
      yPercent: 0,
      skewY: 0,
      autoAlpha: 1,
      transformOrigin: 'left center',
      stagger: {
        each: 0.3,
      },
    })
    .set('.frame__line', { autoAlpha: 0, yPercent: 100, skewY: 10 }, '<')
    .to(
      '.frame__line',
      {
        duration: 1.5,
        yPercent: 0,
        skewY: 0,
        autoAlpha: 1,
        transformOrigin: 'left center',
      },
      '-=0.8'
    )
    // .to('.main-bottom', { duration: 1.5, opacity: 0 }, '+=0.5npm stw')
    // .to(
    //   '.main-frame',
    //   { duration: 2, scaleY: 1, ease: 'elastic.out(1.2,1)' },
    //   '<0.9'npm start
    // .to('.screen-b__header .logo', { duration: 1, x: 0, autoAlpha: 1 }, '<')
    // )
    // //
    // .to(
    //   ['.text-section__header'], //'.text-section__spans', '.text-section__line'
    //   { autoAlpha: 1 },
    //   '-=1.2'
    // )
    // .from(
    //   '.text-section__header',
    //   {
    //     duration: 1.5,
    //     y: -50,
    //     scale: 1.2,
    //     transformOrigin: '0% 0%',
    //   },
    //   '<'
    // )
    // .to(
    //   ['.text-section__spans'], //'.text-section__spans', '.text-section__line'
    //   { autoAlpha: 1 },
    //   '-=0.5'
    // )
    // .from(
    //   '.text-section__spans',
    //   {
    //     duration: 1.5,
    //     xPercent: -100,
    //     transformOrigin: '0% 0%',
    //     // opacity: 0,
    //   },
    //   '<'
    // )
    //wyobraź sobie te wszystkie...
    .add('lab3');

  //=========================
  //
  // .add(textBoxAnimation('.text-box-1 .text-box__line', 1))
  // .add(textBoxAnimation('.text-box-2 .text-box__line'), '>0.9')
  // .add(textBoxAnimation('.text-box-3 .text-box__line'), '>0.9')
  // .set('.text-box-4', { autoAlpha: 1, display: 'block' })
  // .add(textBoxAnimation('.text-box-4 .text-box__line'), '>0.5')
  // .add(pulsatoryAnimation('.pulsatory-text__line'))
  //

  // .add(textBoxAnimation('.screen-b__top .text-box__text-line'), '<0.5')
  // .add(textBoxAnimation('.screen-b__bottom .text-box__text-line'))
  //=========================
  // .to(
  //   ['.screen-b__top-textbox', '.screen-b__bottom-textbox'],
  //   {
  //     duration: 0.5,
  //     autoAlpha: 0,
  //   },
  //   '+=1'
  // )
  //=========================
  // .to('.screen-b__top-textbox', { duration: 0, display: 'none' })
  // .to('.screen-b__bottom-textbox', { duration: 0, display: 'none' })
  //=========================
  // .set(
  //   [
  //     '.screen-b__top-textbox2',
  //     '.screen-b__bottom-textbox2',
  //     '.pulsatory-text',
  //   ],
  //   {
  //     display: 'flex',
  //     // flexDirection: 'column',
  //   }
  // )
  // .set('.screen-b__bottom-textbox3', { display: 'block' })
  // .add(textBoxAnimation('.screen-b__top-textbox2 .text-box__text-line'))
  // .add(textBoxAnimation('.screen-b__bottom-textbox2 .text-box__text-line'))
  // .set('.screen-b__bottom-textbox3', { display: 'block' })
  // .add(pulsatoryAnimation('.pulsatory-text__line'));

  //============================================== animation of SCREEN C
  return tl;
};
// function removeElement(elementClass) {
//   let elementToRemove = elementClass;
//   if (typeof elementToRemove === 'string') {
//     elementToRemove = document.querySelector(elementClass);
//     console.log('Element to remove:', elementToRemove);
//   }
//   return function () {
//     elementToRemove.parentNode.removeChild(elementToRemove);
//     console.log('elementToRemove.parentNode:', elementToRemove.parentNode);
//   };
// }
// function removeElement(elementClass) {
//   let elementToRemove = document.querySelector(elementClass);
// console.log('ElementToRemove from screenB:', elementToRemove);
// console.log(
//   'elementToRemove.parentNode from screenB:',
//   elementToRemove.parentNode
// );
//   elementToRemove.parentNode.removeChild(elementToRemove);
// }
export { homePageAnimation };
