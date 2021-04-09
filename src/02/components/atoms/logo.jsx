import React, { useEffect } from 'react';

const Logo = () => {
  // const logo = useRef(null);
  // console.log('logo right after initialization:', logo);

  useEffect(() => {
    console.log('Logo...inside useEfect...so Logo is mounted');
  }, []);
  return (
    <div className="logo">
      <span className="logo__duplo">duplo</span>
      <span className="logo__elements">ELEMENTS</span>
    </div>
  );
};

export default Logo;

/**
 * // const [duplo, elements] = logo.current.children;
  // console.log('logo in useEffect:', logo);
  // console.log('logo.current:', logo.current);
  // console.log(duplo);
  // console.log(elements);
 */
