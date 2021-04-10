import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

//place: screen A; animates 'ELEMENTS' that is <Logo>'s part; effect: cartoon like, chaotic
const splitToCharsReversed = {
  name: 'splitToCharsReversed',
  effect: (targets, config) => {
    const splitedWord = new SplitText(targets, {
      type: 'chars',
    });
    const effect = gsap.fromTo(
      splitedWord.chars,
      {
        x: 500,
        autoAlpha: 0,
      },
      {
        x: 0,
        rotate: 360,
        autoAlpha: 1,
        duration: config.duration,
        stagger: 0.2,
        ease: 'elastic.out(0.7, 0.5)',
      }
    );
    return effect;
  },
  defaults: { duration: 2, rotate: 360 },
  // extendTimeline: true,
};

//place: screen A; animates 'duplo' that is <Logo>'s part; effect:
const splitToCharsSimply = {
  name: 'splitToCharsSimply',
  effect: (targets, config) => {
    const splitedWord = new SplitText(targets, { type: 'chars' });
    const effectsTargets = splitedWord.chars;
    const effect = gsap.from(effectsTargets, {
      // opacity: 1,
      duration: config.duration,
      rotationY: -90,
      // scale: 0,
      // xPercent: 100,
      stagger: {
        each: 0.06,
        from: 'end',
      },
      transformOrigin: '100% 50%',
      ease: 'power1.out',
    });
    return effect;
  },
};
//
const splitToChars = {
  name: 'splitToChars',
  effect: (targets, config) => {
    const splitedWord = new SplitText(targets, { type: 'chars' });
    const effectsTargets = splitedWord.chars;
    const effect = gsap.from(effectsTargets, {
      autoAlpha: config.autoAlpha,
      duration: config.duration,
      rotationY: -90,
      yPercent: config.yPercent,
      // xPercent: 100,
      stagger: {
        each: 0.06,
        from: 'start',
      },
      transformOrigin: 'left center',
      ease: 'power3.out',
    });
    return effect;
  },
};

//place: screen B; animates 'lines' in <TextBox>; effect:
const charsLineSimply = {
  name: 'charsLineSimply',
  effect: (targets, config) => {
    const splitedLine = new SplitText(targets, { type: 'chars' });
    // console.log('splitedLine:', splitedLine);
    const effect = gsap.fromTo(
      splitedLine.chars,
      { opacity: 0, y: '-=20', x: '+=10' },
      {
        duration: 1,
        opacity: 1,
        y: '+=20',
        x: '-=10',
        // ease: 'power3.out',
        stagger: { each: 0.04, from: 'start' },
      }
    );
    return effect;
  },
  extendTimeline: true,
};

export {
  splitToCharsReversed,
  splitToCharsSimply,
  splitToChars,
  charsLineSimply,
};
