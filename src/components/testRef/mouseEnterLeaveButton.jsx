import React from 'react';

const MouseEnterLeaveButton = ({ label }) => {
  return (
    <div className="melb-wrapper">
      <div className="malb-button">
        <div className="malb-button__bar"></div>
        <div className="malb-button__base">{label}</div>
      </div>
    </div>
  );
};

export default MouseEnterLeaveButton;
