import { gsap } from 'gsap';

const sunRingRotation = target => {
  return gsap.to('.sunRU', {
    duration: 10,
    rotate: 360,
    repeat: -1,
    repeatDelay: 0,
    transformOrigin: 'center',
    ease: 'none',
  });
};

export { sunRingRotation };
