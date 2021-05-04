import React from 'react';
import SvgIcon from '../atoms/svgIcon';

const ContactIconsBar = ({ icons }) => {
  console.log(`%c <ContactIconsBar`, 'color:#5B86E5', icons[0]);
  //   const [iconsArray] = icons;
  return (
    <address className="cib-wrapper">
      {icons.map((icon, index) => (
        <SvgIcon key={index} icon={icon} />
      ))}
    </address>
  );
};

export default ContactIconsBar;
