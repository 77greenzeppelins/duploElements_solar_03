import React, { useRef, useEffect } from 'react';
//gsap staff
import { gsap } from 'gsap';
import { splitText } from '../../animations/textAnimationLibrary';

const AnimatedTextLine = props => {
  const { textLine, animationDuration } = props;
  //references
  let textParagraph = useRef(null);
  let AnimatedTextLineTL = useRef(gsap.timeline({ paused: true }));
  //
  useEffect(() => {
    console.log('animationDuration', animationDuration);
    const textParagraphSplitted = splitText(textParagraph, 'words');
    animationDuration &&
      AnimatedTextLineTL.current
        .set(textParagraph, { autoAlpha: 1 })
        .to(textParagraphSplitted, { delay: animationDuration })
        .wordsFlopping(textParagraphSplitted.words)
        .play();
  }, [animationDuration]);

  return (
    <p className="atl__wrapper" ref={el => (textParagraph = el)}>
      {textLine}
    </p>
  );
};

export default AnimatedTextLine;
