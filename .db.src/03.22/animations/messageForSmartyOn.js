import { gsap } from 'gsap';

const messageForSmartyOn = target => {
  const tl = gsap.timeline();
  tl.to(target, { duration: 5, top: 0 });
  return tl;
};

export default messageForSmartyOn;
