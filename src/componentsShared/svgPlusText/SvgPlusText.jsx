import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

const SvgPlusText = props => {
  //date from props
  const { svg } = props;
  //basic refs
  let svgWrapper = useRef(null);
  //stuff for animations
  // gsap.registerPlugin(DrawSVGPlugin);
  // let svgImageTL = useRef(gsap.timeline({ paused: true }));
  //
  // useEffect(() => {
  //   //references
  //   let svgImagePath = svgWrapper.children[0].children[1];
  //   console.log('SvgPlusText / useEffect / svgImagePath:', svgImagePath);
  //   svgImageTL.current
  //     .from(svgImagePath, { duration: 1, drawSVG: '50% 50%' })
  //     .play();
  // }, []);

  return (
    <div className="svg-plus-text__wrapper">
      <div ref={el => (svgWrapper = el)} className="svg-plus-text__svg-wrapper">
        {svg}
      </div>
      <div className="svg-plus-text__text-wrapper">{props.children}</div>
    </div>
  );
};
export default SvgPlusText;
