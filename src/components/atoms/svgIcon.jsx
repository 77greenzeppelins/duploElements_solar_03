import React from 'react';

const SvgIcon = ({ icon, mouseEnter, mouseLeave }, ref) => {
  return (
    <>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        ref={ref}
        className="si-wrapper"
      >
        {icon}
      </div>
    </>
  );
};

export default React.forwardRef(SvgIcon);
