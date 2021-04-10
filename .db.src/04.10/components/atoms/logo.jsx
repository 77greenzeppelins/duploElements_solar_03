import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      {console.log(`%c<Logo> / return section`, 'color: grey')}
      <span className="logo__duplo">duplo</span>
      <span className="logo__elements">ELEMENTS</span>
    </div>
  );
};

export default Logo;
