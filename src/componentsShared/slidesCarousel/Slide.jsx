import React from 'react';

const Slide = props => {
  const { number } = props;
  return (
    <div className="slide__wrapper">
      <div>...this is a slide...</div>
      <h1>{number}</h1>
    </div>
  );
};

export default Slide;
