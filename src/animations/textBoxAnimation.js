import { gsap } from 'gsap';
// import { SplitText } from 'gsap/SplitText';
import { charsLineSimply } from './allTextEffects';

const textBoxAnimation = target => {
  gsap.registerEffect({
    name: charsLineSimply.name,
    effect: charsLineSimply.effect,
  });
  //
  const lines = gsap.utils.toArray(target);
  const [a, b, c] = lines;
  console.log('textBoxAnimation / target', target);
  console.log('textBoxAnimation / lines', lines);
  console.log('textBoxAnimation / a', a);

  const x = document.querySelectorAll(target);
  console.log('textBoxAnimation / x', x);
  //
  const tl = gsap.timeline();
  tl.set(target, { autoAlpha: 1 })
    .add(gsap.effects.charsLineSimply(a))
    .add(gsap.effects.charsLineSimply(b), '<')
    .add(gsap.effects.charsLineSimply(c), '<');

  return tl;
};

export default textBoxAnimation;
/**
  console.log(`%ctextBoxAnimation target:`,'color:yellow', target);

  console.log('textBoxAnimation lines:', lines);
 */
