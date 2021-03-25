import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

const logoLinkAnimationX = () => {
  gsap.registerPlugin(SplitText);
  const splitedLogo = new SplitText('.logo-link .logo', { type: 'chars' });
  //
  const tl = gsap.timeline();
  tl.to('.logo-link .logo', { duration: 0.1, autoAlpha: 1 }).from(
    splitedLogo.chars,
    {
      opacity: 0,
      duration: 2,
      stagger: { amount: 0.5, from: 'end' },
      ease: 'power3.out',
    }
  );
  return tl;
};

export default logoLinkAnimationX;
