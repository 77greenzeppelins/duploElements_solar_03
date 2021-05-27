import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// import { gsap } from 'gsap';
//
import Carousel from '../componentsShared/slidesCarousel/Carousel';

const RouteContacts = props => {
  // const location = useLocation();
  const history = useHistory();
  // console.log('location', location);
  console.log('history', history);

  const goBackHandler = () => history.goBack();

  return (
    <div className="route-contacts__container">
      <h1>Route Contacts</h1>
      <Carousel />
      <button onClick={goBackHandler}>go back!</button>
    </div>
  );
};

export default RouteContacts;
