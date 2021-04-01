import { gsap } from 'gsap';
// import { SplitText } from 'gsap/SplitText';
import { charsLineSimply } from './splitTextEffects';

const textBoxAnimation = (target, lineToSplit) => {
  // gsap.registerEffect({
  //   name: charsLineSimply.name,
  //   effect: charsLineSimply.effect,
  // });
  //

  //
  const lines = gsap.utils.toArray(target); // alternative for document.querySelectorAll(target)
  const [a, b, c] = lines;
  console.log('textBoxAnimation / target', target);
  console.log('textBoxAnimation / lineToSplit = ', lineToSplit);
  console.log('textBoxAnimation / lines[lineToSplit]', lines[lineToSplit]);

  const x = document.querySelectorAll(target);
  console.log('textBoxAnimation / x', x);
  //
  const tl = gsap.timeline();
  tl.to(a, { duration: 0.5, autoAlpha: 1 })
    .to(b, { duration: 0.5, autoAlpha: 1 })
    .to(c, { duration: 0.5, autoAlpha: 1 });

  // .add(gsap.effects.charsLineSimply(a))
  // .add(gsap.effects.charsLineSimply(b), '<')
  // .add(gsap.effects.charsLineSimply(c), '<');

  return tl;
};

export default textBoxAnimation;
/**
  console.log(`%ctextBoxAnimation target:`,'color:yellow', target);

  console.log('textBoxAnimation lines:', lines);
 */
