import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
//plugin registration
gsap.registerPlugin(SplitText);
//
const splitToChars = target => {
  return new SplitText(target, { type: 'chars' });
};

export { splitToChars };
