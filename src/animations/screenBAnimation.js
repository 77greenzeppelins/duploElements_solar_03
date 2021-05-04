import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { splitToChars } from './splitTextEffects';
//====================================================
//sun Animations
import { sunRingRotation } from './skyHomeAnimation';
import pulsatoryAnimation from './pulsatoryAnimation';
//====================================================
gsap.registerPlugin(CustomEase);
//====================================================
//
const screenBAnimationTl = gsap.timeline({
  defaults: { ease: 'Power2.easeOut' },
  onStart: console.log,
  onStartParams: ['screenBAnimation / onStartParams'],
  onComplete: console.log,
  onCompleteParams: ['screenBAnimation finito'],
});
//====================================================
const screenBAnimation = () => {
  //
  gsap.registerEffect({
    name: splitToChars.name,
    effect: splitToChars.effect,
  });

  //screenB / footer / contact section
  screenBAnimationTl
    .to(
      '.screen-b__footer .line',
      {
        duration: 0.9,
        autoAlpha: 0.5,
        scaleX: 1,
        transformOrigin: 'center center',
        // ease: 'power3.out',
      },
      '<'
    )
    // .to(
    //   '.contact',
    //   { duration: 1.5, yPercent: 0, visibility: 'visible', ease: 'power3.out' },
    //   '>'
    // )
    .add('lab2')
    //dream1 starts here..............................................
    .set('.main-top', { autoAlpha: 1 }, '<')
    .set('.sky-container', { autoAlpha: 0, scale: 0 }, '<')
    //========sky
    .to(
      '.sky-container',
      {
        duration: 2.5,
        autoAlpha: 1,
        scale: 1,
      },
      '<'
    )
    .add(sunRingRotation('.sunRU'), '<')
    .fromTo(
      '.sunRD',
      { scale: 0, transformOrigin: 'center', autoAlpha: 0 },
      { scale: 0.6, duration: 2, autoAlpha: 1, rotate: 360 },
      '<'
    )
    //main-bottom / header / dream1
    // .set('.frame__header.dream1', { autoAlpha: 0, y: '+=200px' }, '<')
    // .to(
    //   '.frame__header.dream1',
    //   { duration: 2, y: '-=200px', autoAlpha: 1 },
    //   '<'
    // )
    .set('.dream1 .frame__header', { autoAlpha: 1 }, '<1.5')
    .add(
      gsap.effects.splitToChars('.dream1 .frame__header', {
        duration: 0.8,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )

    .set(['.dream1 .line1'], { autoAlpha: 1 }, '>')
    .add(
      gsap.effects.splitToChars('.dream1 .line1', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set('.dream1 .line2', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars(
        '.dream1 .line2',
        {
          duration: 0.6,
          autoAlpha: 0,
          yPercent: 0,
        },
        '<'
      )
    )
    .set('.dream1 .line3', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.dream1 .line3', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set('.dream1 .line4', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.dream1 .line4', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
        ease: 'power3.out',
      }),
      '<'
    )
    .to('.dream1', { duration: 1, autoAlpha: 0, ease: 'power1.out' }, '<3')
    .set('.dream1', {
      display: 'none',
    })
    .add('lab3')
    // dream 2 starts here....................................
    //main-top / solars
    .to(['.solarB', '.solarA'], { duration: 2, autoAlpha: 1 }, '>')
    .to('.ray7-mask', { duration: 0.5, autoAlpha: 1 })

    //=======header / dream2
    .set('.dream2 .frame__header', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.dream2 .frame__header', {
        duration: 0.8,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set(['.dream2 .line1'], { autoAlpha: 1 }, '>')
    .add(
      gsap.effects.splitToChars('.dream2 .line1', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set('.dream2 .line2', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars(
        '.dream2 .line2',
        {
          duration: 0.6,
          autoAlpha: 0,
          yPercent: 0,
        },
        '<'
      )
    )
    .set('.dream2 .line3', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.dream2 .line3', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set('.dream2 .line4', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.dream2 .line4', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
        ease: 'power3.out',
      }),
      '<'
    )
    .to('.dream2', { duration: 1, autoAlpha: 0, ease: 'power1.out' }, '<3')
    .set('.dream2', {
      display: 'none',
    })

    .add('lab4')
    // //dream 3 starts here....................................

    .set('.dream3 .frame__header', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.dream3 .frame__header', {
        duration: 0.8,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set(['.dream3 .line1'], { autoAlpha: 1 }, '>')
    .add(
      gsap.effects.splitToChars('.dream3 .line1', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set('.dream3 .line2', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars(
        '.dream3 .line2',
        {
          duration: 0.6,
          autoAlpha: 0,
          yPercent: 0,
        },
        '<'
      )
    )
    .set('.dream3 .line3', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.dream3 .line3', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set('.dream3 .line4', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.dream3 .line4', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
        ease: 'power3.out',
      }),
      '<'
    )
    .to('.dream3', { duration: 1, autoAlpha: 0, ease: 'power1.out' }, '<3')
    .set('.dream3', {
      display: 'none',
    })
    .add('lab5')
    //=============================
    .set('.final .frame__header', { autoAlpha: 1 }, '<')
    .add(
      gsap.effects.splitToChars('.final .frame__header', {
        duration: 0.8,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set(['.final .line1'], { autoAlpha: 1, color: '#add100' }, '>')
    .add(
      gsap.effects.splitToChars('.final .line1', {
        duration: 0.6,
        autoAlpha: 0,
        yPercent: 0,
      }),
      '<'
    )
    .set('.final .line2', { autoAlpha: 1, color: '#add100' }, '<')
    .add(
      gsap.effects.splitToChars(
        '.final .line2',
        {
          duration: 0.6,
          autoAlpha: 0,
          yPercent: 0,
        },
        '<'
      )
    )
    .set('.final .line3', { autoAlpha: 1, color: '#fff' }, '<')
    .add(
      gsap.effects.splitToChars(
        '.final .line3',
        {
          duration: 0.6,
          autoAlpha: 0,
          yPercent: 0,
        },
        '<'
      )
    )
    .add(pulsatoryAnimation('.pulsatory-container__line'))
    .add();

  // .clear(sunRingRotation('.sunRU'))
  // .to('.poster', { display: 'block' }, '>')
  // .to('.poster__one--line1', {})

  // .add('lab6');
  //============================================== animation of SCREEN C
  return screenBAnimationTl;
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
export { screenBAnimation, screenBAnimationTl };

/**
 * // .fromTo(
    //   '.dream1 .line2 div',
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
 */
