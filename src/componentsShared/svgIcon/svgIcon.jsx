import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = props => {
  const { iconSize } = props;
  const { icon } = props;
  return (
    <>
      <div
        // onMouseEnter={mouseEnter}
        // onMouseLeave={mouseLeave}
        className={`svg-icon__wrapper ${iconSize}`}
      >
        {icon}
      </div>
    </>
  );
};

SvgIcon.propTypes = {
  iconSize: PropTypes.string,
  icon: PropTypes.element,
};

export default SvgIcon;
