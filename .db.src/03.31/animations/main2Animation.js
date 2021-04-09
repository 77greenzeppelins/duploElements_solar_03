import { gsap, set, to } from 'gsap';
import { splitToChars } from './splitTextEffects';
//====================================================

const main2Animation = setState => {
  //
  gsap.registerEffect({
    name: splitToChars.name,
    effect: splitToChars.effect,
  });
  // const [word1, word2, word3] = gsap.utils.toArray('.frame__span');
  // console.log('main2Animation / word1', word1);
  //
  gsap.set(['.screen-b', '.main-top'], {
    autoAlpha: 0,
  });
  gsap.set(['.contact'], { yPercent: -100 });
  //
  const tl = gsap.timeline({
    defaults: { ease: 'Power2.easeOut' },
    onStart: console.log,
    onStartParams: ['Main2Animation wystartowała'],
    onComplete: console.log,
    onCompleteParams: ['Main2Animation finito'],
  });
  //
  tl.to('.screen-b', { duration: 0.1, autoAlpha: 1 })
    .to(
      '.screen-b__footer .line',
      {
        duration: 0.7,
        autoAlpha: 0.5,
        scaleX: 1,
        transformOrigin: 'center center',
        ease: 'power3.out',
      },
      '<'
    )
    .to(
      ['.contact'],
      { duration: 1.5, yPercent: 0, visibility: 'visible', ease: 'power3.out' },
      '>'
    )
    .add('lab2')
    //dream1 starts here..............................................
    .set('.main-top', { autoAlpha: 1 }, '<')
    .set('.sun-container', { autoAlpha: 0, scale: 0 }, '<')
    //=======header
    .set('.frame__header.initial', { autoAlpha: 0, y: '+=200px' }, '<')
    .to(
      '.frame__header.initial',
      { duration: 2, y: '-=200px', autoAlpha: 1 },
      '<'
    )

    //========sun
    // .from('.sun-svg', { autoAlpha: 0, y: '-=100%' }, '<')
    // .to('.sun-svg', { duration: 3, autoAlpha: 1, y: '+=100%' }, '<')
    .to(
      '.sun-container',
      {
        duration: 2.5,
        autoAlpha: 1,
        scale: 1,
        // rotate: 180,
        // transformOrigin: 'center',
      },
      '<'
    )
    .to('.sunRU', {
      duration: 10,
      rotate: 360,
      repeat: -1,
      repeatDelay: 0,
      transformOrigin: 'center',
      ease: 'none',
    })

    // .to(
    //   ['.ray1', '.ray2'],
    //   {
    //     duration: 2,
    //     scaleY: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     transformOrigin: 'center',
    //     ease: 'none',
    //   },
    //   '-=10'
    // )

    .fromTo(
      '.sunRD',
      { scale: 0, transformOrigin: 'center', autoAlpha: 0 },
      { scale: 0.9, duration: 5, autoAlpha: 1 },
      '<'
    )
    //======spans
    .set('.dream1 .span1', { autoAlpha: 1 }, '-=5')
    .add(
      gsap.effects.splitToChars('.dream1 .span1', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )

    .set('.dream1 .span2', { autoAlpha: 1 }, '-=0.7')
    .add(
      gsap.effects.splitToChars('.dream1 .span2', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      })
    )
    // .fromTo(
    //   '.dream1 .span2 div',
    //   { x: '+=0', scale: 1 },
    //   {
    //     scale: gsap.utils.wrap([1, 1.1, 1.2, 1.3, 1.4, 1.5]),
    //     x: gsap.utils.wrap([0, 5, 10, 15, 20, 25]),
    //     duration: 1.5,
    //     // repeat: -1,
    //     // repeatDelay: -0.2,
    //     // yoyo: true,
    //     transformOrigin: 'left center',
    //     stagger: { each: 0.05 },
    //   },
    //   '<'
    // )
    .set('.dream1 .span3', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.dream1 .span3', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '>'
    )
    .set('.dream1 + .line1', { autoAlpha: 1 }, '-=0.3')
    .add(
      gsap.effects.splitToChars('.line1', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
        ease: 'power3.out',
      }),
      '>'
    )
    .to(
      '.dream1 +.line1 div',
      {
        duration: 1,
        rotateY: 90,
        opacity: 0,
        ease: 'power3.in',
        stagger: {
          each: 0.03,
          from: 'end',
        },
      },
      '-=0.1'
    )
    .to(
      '.dream1 .span3 div',
      {
        duration: 1,
        rotateY: 90,
        opacity: 0,
        stagger: {
          each: 0.03,
          from: 'end',
        },
      },
      '-=0.5'
    )
    .to(
      '.dream1 .span2 div',
      {
        duration: 1,
        rotateY: 90,
        opacity: 0,
        stagger: {
          each: 0.03,
          from: 'end',
        },
      },
      '-=0.7'
    )
    .to(
      '.dream1 .span1 div',
      {
        duration: 1,
        rotateY: 90,
        opacity: 0,
        stagger: {
          each: 0.03,
          from: 'end',
        },
      },
      '-=0.9'
    )
    .set(['.dream1', '.dream1 + .line1'], {
      display: 'none',
    })
    .add('lab3');
  //dream 2 starts here....................................
  // .to('.dream2 .span1', { autoAlpha: 1 })
  // .add(
  //   gsap.effects.splitToChars('.dream2 .span1', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //   }),
  //   '<'
  // )
  // .set('.dream2 .span2', { autoAlpha: 1 }, '-=0.7')
  // .add(
  //   gsap.effects.splitToChars('.dream2 .span2', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //   }),
  //   '>'
  // )
  // .set('.dream2 .span3', { autoAlpha: 1 }, '-=0.4')
  // .add(
  //   gsap.effects.splitToChars('.dream2 .span3', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //   }),
  //   '>'
  // )
  // .set('.dream2 + .line1', { autoAlpha: 1 }, '-=0.3')
  // .add(
  //   gsap.effects.splitToChars('.dream2 + .line1', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //     ease: 'power3.out',
  //   }),
  //   '>'
  // )
  // .to(
  //   '.dream2 + .line1 div',
  //   {
  //     duration: 1,
  //     rotateY: 90,
  //     opacity: 0,
  //     ease: 'power3.in',
  //     stagger: {
  //       each: 0.03,
  //       from: 'end',
  //     },
  //   },
  //   '-=0.1'
  // )
  // .to(
  //   '.dream2 .span3 div',
  //   {
  //     duration: 1,
  //     rotateY: 90,
  //     opacity: 0,
  //     stagger: {
  //       each: 0.03,
  //       from: 'end',
  //     },
  //   },
  //   '-=0.5'
  // )
  // .to(
  //   '.dream2 .span2 div',
  //   {
  //     duration: 1,
  //     rotateY: 90,
  //     opacity: 0,
  //     stagger: {
  //       each: 0.03,
  //       from: 'end',
  //     },
  //   },
  //   '-=0.7'
  // )
  // .to(
  //   '.dream2 .span1 div',
  //   {
  //     duration: 1,
  //     rotateY: 90,
  //     opacity: 0,
  //     stagger: {
  //       each: 0.03,
  //       from: 'end',
  //     },
  //   },
  //   '-=0.9'
  // )
  // .set(['.dream2', '.dream2 + .line1'], {
  //   display: 'none',
  // })
  // .add('lab3');
  //dream 3 starts here....................................
  // .to('.dream3 .span1', { autoAlpha: 1 })
  // .add(
  //   gsap.effects.splitToChars('.dream3 .span1', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //   }),
  //   '<'
  // )
  // .set('.dream3 .span2', { autoAlpha: 1 }, '-=0.7')
  // .add(
  //   gsap.effects.splitToChars('.dream3 .span2', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //   }),
  //   '>'
  // )
  // .set('.dream3 .span3', { autoAlpha: 1 }, '-=0.4')
  // .add(
  //   gsap.effects.splitToChars('.dream3 .span3', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //   }),
  //   '>'
  // )
  // .set('.dream3 + .line1', { autoAlpha: 1 }, '-=0.3')
  // .add(
  //   gsap.effects.splitToChars('.dream3 + .line1', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //     ease: 'power3.out',
  //   }),
  //   '>'
  // )
  // .to(
  //   '.dream3 + .line1 div',
  //   {
  //     duration: 1,
  //     rotateY: 90,
  //     opacity: 0,
  //     ease: 'power3.in',
  //     stagger: {
  //       each: 0.03,
  //       from: 'end',
  //     },
  //   },
  //   '-=0.1'
  // )
  // .to(
  //   '.dream3 .span3 div',
  //   {
  //     duration: 1,
  //     rotateY: 90,
  //     opacity: 0,
  //     stagger: {
  //       each: 0.03,
  //       from: 'end',
  //     },
  //   },
  //   '-=0.5'
  // )
  // .to(
  //   '.dream3 .span2 div',
  //   {
  //     duration: 1,
  //     rotateY: 90,
  //     opacity: 0,
  //     stagger: {
  //       each: 0.03,
  //       from: 'end',
  //     },
  //   },
  //   '-=0.7'
  // )
  // .to(
  //   '.dream3 .span1 div',
  //   {
  //     duration: 1,
  //     rotateY: 90,
  //     opacity: 0,
  //     stagger: {
  //       each: 0.03,
  //       from: 'end',
  //     },
  //   },
  //   '-=0.9'
  // )
  // .set(
  //   ['.dream3', '.dream3 + .line1'],
  //   {
  //     display: 'none',
  //   },
  //   '>'
  // )
  // .to('.frame__header.initial', { duration: 1.5, opacity: 0 }, '-=0.9')
  // .set(
  //   '.frame__header.initial',
  //   {
  //     display: 'none',
  //   },
  //   '>'
  // )
  // .add('lab4');
  //=============================
  // .set('.frame__header.final', { autoAlpha: 1 })
  // .add(
  //   gsap.effects.splitToChars('.frame__header.final', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //     ease: 'power3.out',
  //   })
  // )
  // .set('.final .final1', { autoAlpha: 1 })
  // .add(
  //   gsap.effects.splitToChars('.final .final1', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //     ease: 'power3.out',
  //   })
  // )
  // .set('.final .final2', { autoAlpha: 1 })
  // .add(
  //   gsap.effects.splitToChars('.final .final2', {
  //     duration: 0.6,
  //     autoAlpha: 0,
  //     yPercent: 0,
  //     ease: 'power3.out',
  //   })
  // );
  // .to(
  //   ' .lineX div',
  //   {
  //     duration: 1,
  //     rotateY: 90,
  //     opacity: 0,
  //     ease: 'power3.in',
  //     stagger: {
  //       each: 0.03,
  //       from: 'end',
  //     },
  //   },
  //   '-=0.1'
  // );

  //=========================

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
export default main2Animation;
