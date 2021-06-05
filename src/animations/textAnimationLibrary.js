import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

//function that splits text to : ['chars', 'words', 'lines']
const splitText = (text, splitType) => {
  let splittedText = new SplitText(text, { type: splitType });
  return splittedText;
};

const wordsFlopping = {
  name: 'wordsFlopping',
  defaults: { yPercent: '-=100' },
  extendTimeline: true,
  effect: (target, config) => {
    let wordsFloppingTL = gsap.timeline();
    wordsFloppingTL.from(target, {
      duration: 1,
      yPercent: config.yPercent,
      autoAlpha: 0,
      scale: 1.1,
      stagger: { each: 0.05, ease: 'power1' },
    });
    return wordsFloppingTL;
  },
};

export { splitText, wordsFlopping };
