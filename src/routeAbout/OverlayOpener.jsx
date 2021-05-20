import React, { useRef, useEffect } from 'react';

const OverlayOpener = props => {
  const { button, line1, line2, overlayOpenerHandler } = props;
  //
  let openersWrapper = useRef(null);
  useEffect(() => {
    //
    const openerContent = [...openersWrapper.children];
    console.log('<OverlayOpener> / useEffect / openerContent ', openerContent);
  }, []);

  return (
    <button
      ref={el => (openersWrapper = el)}
      className={`overlay-opener__wrapper ${button}`}
      onClick={ev => overlayOpenerHandler(ev)}
    >
      <span className={`overlay-opener__label ${button}`}>{line1}</span>
      <span className={`overlay-opener__label ${button}`}>{line2}</span>
    </button>
  );
};

export default OverlayOpener;
