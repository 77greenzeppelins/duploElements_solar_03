import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';

//import of animation
import { charsWordReversed, charsWordSimply } from './allTextEffects';

//plugins regiastration =>obligatory in case of using 'clearProps'...
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
//
const logoLinkAnimation = () => {
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
  tl.add(
    gsap.effects.charsWordReversed('.logo-link .logo__elements', {
      duration: 2.5,
    })
  )
    //=============
    .add(
      gsap.effects.charsWordSimply('.logo-link .logo__duplo', {
        duration: 1.5,
      }),
      '-=1.5'
    );
  return tl;
};

export default logoLinkAnimation;
