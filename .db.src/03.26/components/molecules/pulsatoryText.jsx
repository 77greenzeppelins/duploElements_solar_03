import React from 'react';

const PulsatoryText = ({ props }) => {
  return (
    <div className="pulsatory-text">
      {props.map((item, index) => (
        <p className="pulsatory-text__line" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default PulsatoryText;
