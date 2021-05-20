import { gsap } from 'gsap';

//staff for SVG animation
const sunRingRotation = target => {
  return gsap.to(target, {
    duration: 10,
    rotate: 360,
    repeat: -1,
    repeatDelay: 0,
    transformOrigin: 'center',
    ease: 'none',
  });
};
//staff for footer animation
const contactBarAnimation = (footerContactBar, footerLine, footerLogo) => {
  const contactBarTl = gsap.timeline();
  contactBarTl
    .set(footerContactBar, { yPercent: -100 })
    // .set(footerLogo, { fontSize: clamp(0.8rem, 2.8vw, 1rem) })
    .to(footerLine, {
      duration: 1,
      scaleX: 1,
      autoAlpha: 0.5,
      transformOrigin: 'center center',
    })
    .to(footerContactBar, { duration: 1, yPercent: 0, autoAlpha: 0.5 }, '<0.5');
  return contactBarTl;
};

// Effects Library=================================================
gsap.registerEffect({
  name: 'charsRotateReverse',
  effect: (target, config) => {
    return gsap.to(target, {
      duration: config.duration,
      autoAlpha: config.autoAlpha,
    });
  },
  defaults: { duration: 5, autoAlpha: 1 },
  extendTimeline: true,
});

// const xxx = {
//   name: 'xxx',
//   effect: (targets, config) => {
//     const splitedWord = new SplitText(targets, {
//       type: 'chars',
//     });
//     const effect = gsap.fromTo(
//       splitedWord.chars,
//       {
//         x: 500,
//         autoAlpha: 0,
//       },
//       {
//         x: 0,
//         rotate: 360,
//         autoAlpha: 1,
//         duration: config.duration,
//         stagger: 0.2,
//         ease: 'elastic.out(0.7, 0.5)',
//       }
//     );
//     return effect;
//   },
//   defaults: { duration: 2, rotate: 360 },
//   // extendTimeline: true,
// };

export { sunRingRotation, contactBarAnimation };
