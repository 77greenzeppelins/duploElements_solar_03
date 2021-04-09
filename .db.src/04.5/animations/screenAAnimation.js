import { gsap } from 'gsap';
import logoAnimation from './logoAnimation';
//====================================================

const screenAAnimation = (setState, state) => {
  //
  console.log('Main1Animation / props: state', state);
  //
  gsap.config({ nullTargetWarn: false });

  // gsap.set(['.contact'], { yPercent: -100 });
  //
  const tl = gsap.timeline({
    defaults: { ease: 'Power2.easeOut' },
    onStart: console.log,
    onStartParams: ['Main1Animation wystartowała'],
    // onComplete: setState,
    // onCompleteParams: [true],
  });
  //
  tl.add('lab1')
    // .add(logoAnimation())
    // .to(
    //   '.container-outer',
    //   {
    //     duration: 0.7,
    //     opacity: 0,
    //   },
    //   '-=1.1'
    // )
    .to(
      '.container-outer',
      {
        duration: 0,
        scaleY: 0,
        transformOrigin: 'bottom center',
        onComplete: setState,
        onCompleteParams: [true],
      },
      '>'
    );
  return tl;
};
export default screenAAnimation;
