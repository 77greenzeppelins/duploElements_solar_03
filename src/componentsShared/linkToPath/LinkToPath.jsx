import React from 'react';
import { Link } from 'react-router-dom';

const LinkToPath = props => {
  const { linkLabel, to, fontSize } = props;
  const { button, line1, line2 } = linkLabel;
  console.log('to', to);
  return (
    <>
      <Link className="link-to-path__wrapper" to={to}>
        <p className="link-to-path__label">
          <span className={`link-to-path__label-line ${fontSize}`}>
            {line1}
          </span>
          <span className={`link-to-path__label-line ${fontSize}`}>
            {line2}
          </span>
        </p>
      </Link>
    </>
  );
};

export default LinkToPath;
