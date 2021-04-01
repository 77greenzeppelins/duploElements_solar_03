import { gsap } from 'gsap';

const pulsatoryAnimation = target => {
  const lines = gsap.utils.toArray(target);
  const tl = gsap.timeline({ repeat: -1 });
  lines.forEach(line => {
    tl.to(line, { rotationX: 90 }).to(line, {
      duration: 1,
      autoAlpha: 1,
      rotationX: 0,
      repeat: 1,
      yoyo: true,
      yoyoEase: true,
      repeatDelay: 1.5,
    });
  });

  return tl;
};
export default pulsatoryAnimation;

//console.log('....lines in pulsatoryAnimation:', lines);
