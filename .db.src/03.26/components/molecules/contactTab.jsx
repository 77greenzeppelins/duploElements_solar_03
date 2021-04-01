import React, { useEffect, useRef } from 'react';
//icons
import { SiMailDotRu } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';
import { IoRefreshOutline } from 'react-icons/io5';
//components
// import Logo from '../atoms/logo';

const ContactTab = () => {
  // querySelectorAll shouldn't be used in React!
  const items = [...document.querySelectorAll('.tab__item')];
  console.log('items', items);
  //
  const getIndicatorPosition = indicator => {
    const { width, x } = indicator.getBoundingClientRect();
    console.log(`Indicator width: ${width}`);
    console.log(`Indicator x: ${x}`);
  };
  //   const rItem = useRef(null);
  const indicator = useRef();
  useEffect(() => {
    // console.log('rItem.curren', rItem.current);
    const itemsIn = [...document.querySelectorAll('.tab__item')];
    console.log('itemsIn', itemsIn);
    //
    console.log('indicator.current:', indicator.current);
    //
    getIndicatorPosition(itemsIn[0]);
  }, []);

  return (
    <address className="tab">
      <span className="tab__indicator" ref={indicator}></span>
      <div className="tab__items">
        <a
          href="mailto:77greenzeppelins@gmail.com"
          className="tab__item"
          //   ref={rItem}
        >
          <SiMailDotRu className="tab__icon" />
          <p className="tab__icon">email</p>
        </a>
        <a href="tel:798-905-558" className="tab__item">
          <ImPhone className="tab__icon" />
          <p className="tab__icon">phone</p>
        </a>
        <div className="tab__item">
          <IoRefreshOutline className="tab__icon" />
          <p className="tab__icon">about</p>
        </div>
      </div>
    </address>
  );
};

export default ContactTab;
