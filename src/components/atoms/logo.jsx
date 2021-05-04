import React from 'react';

const Logo = (props, ref) => {
  return (
    <div ref={ref} className="logo">
      <span className="logo__duplo">duplo</span>
      <span className="logo__elements">ELEMENTS</span>
    </div>
  );
};

export default React.forwardRef(Logo);
