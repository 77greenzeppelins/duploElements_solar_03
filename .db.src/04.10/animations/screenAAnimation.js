import { gsap } from 'gsap';
import logoAnimation from './logoAnimation';
//====================================================

const screenAAnimation = (setState, state) => {
  //
  // console.log('screenAAnimation / props: setState', setState);
  //
  gsap.config({ nullTargetWarn: false });

  const tl = gsap.timeline({
    defaults: { ease: 'Power2.easeOut' },
    onStart: console.log,
    onStartParams: ['screenAAnimation wystartowała'],
  });
  //
  tl.add('lab1')
    //comment if you want to turn off the initial logo animation...
    // .add(logoAnimation())
    // .to(
    //   '.container-outer',
    //   {
    //     duration: 0.7,
    //     opacity: 0,
    //   },
    //   '-=1.1'
    // )
    //end of component
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
