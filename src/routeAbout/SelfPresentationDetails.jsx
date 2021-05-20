import React, { useState } from 'react';
//
import OurStory from './OurStory';
import OurContactForm from './OurContactForm';
import OurContactData from './OurContactData';
import OverlayOpenersBox from './OverlayOpenersBox';
//

const SelfPresentationDetails = () => {
  //
  const [overlayState, setOverlayState] = useState({
    numberToOpen: null,
  });
  // handler for onClick
  const overlayOpenerHandler = (ev, index) => {
    //
    const buttonClassNumber = parseInt([...ev.target.classList][1]) - 1;
    //
    console.log(
      '<AboutRouteBody> / onClick = overlayOpenerHandler runs! / ev  ',
      ev
    );
    setOverlayState({ numberToOpen: buttonClassNumber });
  };
  return (
    <>
      <OurContactData
        overlayState={overlayState}
        setOverlayState={setOverlayState}
      />
      <OurContactForm
        overlayState={overlayState}
        setOverlayState={setOverlayState}
      />

      <OurStory overlayState={overlayState} setOverlayState={setOverlayState} />
      <OverlayOpenersBox
        overlayOpenerHandler={(ev, index) => overlayOpenerHandler(ev, index)}
      />
    </>
  );
};

export default SelfPresentationDetails;
