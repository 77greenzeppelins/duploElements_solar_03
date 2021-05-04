import React, { useRef, useEffect } from 'react';
//
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';
//

const Slider = props => {
  //props includes:
  const { iconArray, leftArrowClickHandler, rightArrowClickHandler } = props;
  //
  return (
    <>
      <main className="slider-container">
        {iconArray.map((icon, index) => (
          <div key={index} className="slide">
            <h2 className="slide__product">ProductName</h2>
            <h4 className="slide__price">$666</h4>
            <div className="slide__icon">{icon}</div>
          </div>
        ))}
      </main>
      <div className="arrows">
        <div className="arrow left">
          <IoIosArrowDropleft onClick={leftArrowClickHandler} />
        </div>
        <div className="arrow right">
          <IoIosArrowDropright onClick={rightArrowClickHandler} />
        </div>
      </div>
    </>
  );
};

export default Slider;
