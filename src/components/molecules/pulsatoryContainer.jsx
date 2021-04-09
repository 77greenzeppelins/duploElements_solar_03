import React from 'react';

const PulsatoryContainer = ({ itemsToBuy }) => {
  // console.log('PulsatoryContainer / className', className);
  return (
    <div className="pulsatory-container">
      {itemsToBuy.map((item, index) => (
        <div className="pulsatory-container__line" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default PulsatoryContainer;
