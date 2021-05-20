import React from 'react';

const SvgIcon = ({ icon }) => {
  return (
    <>
      <div
        // onMouseEnter={mouseEnter}
        // onMouseLeave={mouseLeave}
        className="svg-icon__wrapper"
      >
        {icon}
      </div>
    </>
  );
};

export default SvgIcon;
