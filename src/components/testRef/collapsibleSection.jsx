import React, { useRef } from 'react';
import { gsap } from 'gsap';

const CollapsibleSection = props => {
  //
  const { icon, textData } = props;
  //
  const panelRef = useRef(null);
  const headerRef = useRef(null);
  //
  const openPanel = event => {
    //
    console.log('<CollapsibleSection> / onClick / event', event.target);
    console.log(
      '<CollapsibleSection> / onClick / headerRef.current',
      headerRef.current
    );
    console.log(
      '<CollapsibleSection> / onClick / panelRef.current.children',
      panelRef.current.children
    );
    //
    const openTL = gsap.timeline();
    openTL
      .to(headerRef.current, {
        duration: 0.1,
        scale: 0.99,
        repeat: 1,
        yoyo: true,
        repeatDelay: 0,
      })
      .set(panelRef.current, { autoAlpha: 0 })
      .set(panelRef.current.children, { autoAlpha: 0, scale: 0 })
      .to(
        panelRef.current,
        { x: '+=100%', autoAlpha: 1, ease: 'power3.in' },
        '<'
      )
      .to(panelRef.current.children, { autoAlpha: 1, scale: 1 });
  };
  const closePanel = event => {
    const closeTL = gsap.timeline();
    closeTL.to(panelRef.current, { x: '-=100%' });
  };
  //
  return (
    <div>
      <div className="coll-section">
        <div
          ref={headerRef}
          onClick={openPanel}
          className="coll-section__header"
        >
          <div className="coll-section__icon">{icon}</div>
          <ul className="coll-section__text">
            {textData.map((line, index) => (
              <li key={index} className="coll-section__line">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div ref={panelRef} className="coll-section__panel">
          <div className="coll-section__panel-content">{props.children}</div>
          <div onClick={closePanel} className="coll-section__icon">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
