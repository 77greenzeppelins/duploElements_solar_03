import { gsap, set } from 'gsap';
// import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
// import { CSSPlugin } from 'gsap/CSSPlugin';

import logoAnimation from './logoAnimation';
import textBoxAnimation from './textBoxAnimation';
import pulsatoryAnimation from './pulsatoryTextAnimation';
import logoLinkAnimation from './logoLinkAnimation';

//====================================================
// import { GSDevTools } from 'gsap/GSDevTools';
// gsap.registerPlugin(GSDevTools);
//plugins regiastration =>obligatory in case of using 'clearProps'...
// gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
//=====================================================
// const tl = gsap.timeline({
//   defaults: { ease: 'Power2.easeOut' },
// });
//
const homePageAnimation = () => {
  //
  const tl = gsap.timeline({
    defaults: { ease: 'Power2.easeOut' },
  });
  //
  gsap.config({ nullTargetWarn: false });
  //gsap.defaults({ease: 'Power2.easeOut'})
  //roman
  gsap.set(
    [
      '.screen-a-container .logo',
      '.screen-b',
      '.screen-b__header .line',
      '.screen-b__header .logo',
      '.text-section__header',
      '.text-section__spans',
      '.text-section__line',
    ],
    {
      autoAlpha: 0,
    }
  );

  tl.add('lab1')
    .add(logoAnimation())
    .to(
      '.container-outer',
      {
        duration: 2,
        // transformOrigin: 'bottom center',
        opacity: 0,
      },
      '-=1.1'
    )
    .to('.container-outer', {
      scaleY: 0,
      transformOrigin: 'bottom center',
    })
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
      ['.screen-b__footer .line', '.screen-b__header .line'],
      {
        duration: 1.5,
        autoAlpha: 0.5,
        // opacity: 0.3,
        scaleX: 0.5,
        // scaleY: 0.5,
        transformOrigin: 'bottom right',
      },
      '<'
    )
    .to('.screen-b__header .logo', { duration: 1, x: 0, autoAlpha: 1 }, '<')
    .to(
      '.screen-b__footer .contact-icons',
      { duration: 1.5, y: 0, autoAlpha: 1 },
      '<'
    )

    .to(
      '.main-frame',
      { duration: 2, scaleY: 1, ease: 'elastic.out(1.2,1)' },
      '<0.9'
    )
    //jednak "set" przed "main-frame"
    .to(
      ['.text-section__header'], //'.text-section__spans', '.text-section__line'
      { autoAlpha: 1 },
      '-=1.2'
    )
    .from(
      '.text-section__header',
      {
        duration: 1.5,
        y: -50,
        scale: 1.2,
        transformOrigin: '0% 0%',
      },
      '<'
    )
    .to(
      ['.text-section__spans'], //'.text-section__spans', '.text-section__line'
      { autoAlpha: 1 },
      '-=0.5'
    )
    .from(
      '.text-section__spans',
      {
        duration: 1.5,
        xPercent: -100,
        transformOrigin: '0% 0%',
        // opacity: 0,
      },
      '<'
    )
    //wyobraź sobie te wszystkie...
    .add('lab3')

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
    .add('lab4');
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
//, tl
