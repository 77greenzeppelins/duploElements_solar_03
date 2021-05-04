import React, { useRef } from 'react';
import { gsap } from 'gsap';
import SvgIcon from '../atoms/svgIcon';

const LabelledDroppedBox = React.forwardRef((props, ref) => {
  const { headerTextData, icon, iconClose } = props;
  //
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  const openPanel = event => {
    console.log('<CollapsibleSection> / onClick / event', event.target);
    console.log(
      '<CollapsibleSection> / onClick / buttonRef.current',
      buttonRef.current
    );
    console.log(
      '<CollapsibleSection> / onClick / panelRef.current.children',
      panelRef.current.children
    );
    //
    const openTL = gsap.timeline();
    openTL
      .to(buttonRef.current, {
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
    closeTL
      .to(panelRef.current.children, { autoAlpha: 0, scale: 0 })
      .to(panelRef.current, { x: '-=100%' });
  };

  return (
    <div className="ldb">
      <header ref={buttonRef} onClick={openPanel} className="ldb__header">
        <SvgIcon ref={ref} icon={icon} />
        <ul className="ldb__text">
          {headerTextData.map((line, index) => (
            <li key={index} className="ldb__line">
              {line}
            </li>
          ))}
        </ul>
      </header>
      <div ref={panelRef} className="ldb__panel">
        <div className="ldb__panel-content">{props.children}</div>
        <div onClick={closePanel} className="ldb__panel-icon">
          <SvgIcon ref={ref} icon={iconClose} />
        </div>
        {/* <div onClick={closePanel} className="ldb__panel-icon">
          {icon}
        </div> */}
      </div>
    </div>
  );
});

export default LabelledDroppedBox;
