import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';

//import of animation
import { charsWordReversed, charsWordSimply } from './allTextEffects';

//plugins regiastration =>obligatory in case of using 'clearProps'...
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
//
const logoAnimation = () => {
  //========================== effects registration
  gsap.registerEffect({
    name: charsWordReversed.name,
    effect: charsWordReversed.effect,
  });

  gsap.registerEffect({
    name: charsWordSimply.name,
    effect: charsWordSimply.effect,
  });
  //let's ROCK with a timeline for logo animation !
  //
  const tl = gsap.timeline();
  tl
    //basic setting that allowe to avoid 'Flash Of Unstyled Content'
    .set('.screen-a-container .logo', { duration: 0.2, autoAlpha: 1 })
    //==================================================================

    .add(
      gsap.effects.charsWordReversed('.screen-a-container .logo__elements', {
        duration: 3,
        rotate: 90,
      })
    )
    //=============
    .add(
      gsap.effects.charsWordSimply('.screen-a-container .logo__duplo', {
        duration: 2,
      }),
      '-=1.5'
    )
    //==========
    .set(
      [
        '.screen-a-container .logo__elements',
        '.screen-a-container .logo__duplo',
      ],
      { transformPerspective: 400 }
    )
    .to('.screen-a-container .logo__elements div', {
      duration: 1,
      rotateX: 90,
      opacity: 0,
      transformOrigin: '50% 0% -50',
      ease: 'power4.out',
      stagger: { each: 0.05, from: 'end' },
    })
    .to(
      '.screen-a-container .logo__duplo div',
      {
        duration: 1,
        rotateX: 90,
        opacity: 0,
        transformOrigin: '50% 0% -50',
        ease: 'power4.out',
        stagger: { each: 0.05, from: 'end' },
      },
      '>-0.9'
    )
    //==============================================================
    .to('.screen-a-container', {
      duration: 0,
      display: 'none',
    });
  return tl;
};

export default logoAnimation;
