import React from 'react';
import PropTypes from 'prop-types';

const BrandLogo = props => {
  const { vertical } = props;
  return (
    <div className={vertical ? 'brand-logo vertical' : 'brand-logo'}>
      <span className="brand-logo__duplo">duplo</span>
      <span className="brand-logo__elements">ELEMENTS</span>
    </div>
  );
};

BrandLogo.propTypes = {
  vertical: PropTypes.bool,
};
export default BrandLogo;
