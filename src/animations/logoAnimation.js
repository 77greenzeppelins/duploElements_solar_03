import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';

//import of animation
import { splitToCharsReversed, splitToCharsSimply } from './splitTextEffects';
//plugins regiastration =>obligatory in case of using 'clearProps'...
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
//
//
const logoAnimation = () => {
  //========================== effects registration
  gsap.registerEffect({
    name: splitToCharsReversed.name,
    effect: splitToCharsReversed.effect,
  });

  gsap.registerEffect({
    name: splitToCharsSimply.name,
    effect: splitToCharsSimply.effect,
  });
  gsap.set('.screen-a-container', {
    autoAlpha: 0,
  });
  //let's ROCK with a timeline for logo animation !
  //
  const tl = gsap.timeline();
  tl
    //basic setting that allowe to avoid 'Flash Of Unstyled Content'
    .to('.screen-a-container', { duration: 0, autoAlpha: 1 })
    .add(
      gsap.effects.splitToCharsReversed('.screen-a-container .logo__elements', {
        duration: 3,
        rotate: 90,
      })
    )
    .add(
      gsap.effects.splitToCharsSimply('.screen-a-container .logo__duplo', {
        duration: 2,
      }),
      '-=1.5'
    )
    .set(
      [
        '.screen-a-container .logo__elements',
        '.screen-a-container .logo__duplo',
      ],
      { transformPerspective: 400 }
    )
    .to('.screen-a-container .logo__elements div', {
      duration: 1.3,
      rotateX: -120,
      opacity: 0,
      transformOrigin: '100% 100% 120',
      ease: 'power4.out',
      stagger: { each: 0.05, from: 'end' },
    })
    .to(
      '.screen-a-container .logo__duplo div',
      {
        duration: 1.3,
        rotateX: -120,
        opacity: 0,
        transformOrigin: '0% 100% 120',
        ease: 'power4.out',
        stagger: { each: 0.05, from: 'end' },
      },
      '>-1.2'
    )
    //==============================================================
    .set('.screen-a-container', {
      display: 'none',
    });
  return tl;
};

export default logoAnimation;
