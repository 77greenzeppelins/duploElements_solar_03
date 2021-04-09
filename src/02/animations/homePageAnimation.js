import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';

import logoAnimation from './logoAnimation';
import textBoxAnimation from './textBoxAnimation';
import pulsatoryAnimation from './pulsatoryTextAnimation';
import logoLinkAnimation from './logoLinkAnimation';

//====================================================
import { GSDevTools } from 'gsap/GSDevTools';
gsap.registerPlugin(GSDevTools);
//plugins regiastration =>obligatory in case of using 'clearProps'...
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
//=====================================================
//
gsap.config({ nullTargetWarn: false });
//
gsap.set('.screen-a-container .logo', { autoAlpha: 0 });
gsap.set('.screen-b', { autoAlpha: 0 });
//
const tl = gsap.timeline({
  defaults: { ease: 'Power2.easeOut' },
});
//
const homePageAnimation = () => {
  //
  console.log('%c...homePageAnimation in action............', 'color: green');
  //
  // gsap.config({ nullTargetWarn: false });
  // //

  tl.add(logoAnimation())
    .to(
      '.container-outer',
      {
        duration: 0.8,
        scaleY: 0,
        transformOrigin: 'bottom center',
        // opacity: 0,
      },
      '-=0.5'
    )
    //============================================== animation of SCREEN B
    .to(
      '.screen-b',
      {
        duration: 0.1,
        autoAlpha: 1,
      }
      // '<'
    )
    .add('labScreenB1')
    //=========================
    .set('.logo-link .logo', { duration: 0.1, autoAlpha: 1 })
    .add(logoLinkAnimation())
    // .add(logoLinkAnimation(), '<')
    // .add('screenBLabel1')
    .add(textBoxAnimation('.screen-b__top .text-box__text-line'), '<0.5')
    //====================
    .add(textBoxAnimation('.screen-b__bottom .text-box__text-line'))
    .to(
      ['.screen-b__top-textbox', '.screen-b__bottom-textbox'],
      {
        duration: 0.5,
        autoAlpha: 0,
      },
      '+=1'
    )
    .to('.screen-b__top-textbox', { duration: 0, display: 'none' })
    .to('.screen-b__bottom-textbox', { duration: 0, display: 'none' })

    .set(
      [
        '.screen-b__top-textbox2',
        '.screen-b__bottom-textbox2',
        '.pulsatory-text',
      ],
      {
        display: 'flex',
        // flexDirection: 'column',
      }
    )
    .set('.screen-b__bottom-textbox3', { display: 'block' })
    .add('labScreenB2')
    .add(textBoxAnimation('.screen-b__top-textbox2 .text-box__text-line'))
    .add(textBoxAnimation('.screen-b__bottom-textbox2 .text-box__text-line'))
    // .set('.screen-b__bottom-textbox3', { display: 'block' })
    .add(pulsatoryAnimation('.pulsatory-text__line'));

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
export { homePageAnimation, tl };
