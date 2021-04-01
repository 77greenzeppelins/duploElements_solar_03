import React, { useEffect } from 'react';

const Logo = () => {
  useEffect(() => {
    console.log('<Logo> / useEfect');
  }, []);
  return (
    <div className="logo">
      <span className="logo__duplo">duplo</span>
      <span className="logo__elements">ELEMENTS</span>
    </div>
  );
};

export default Logo;
