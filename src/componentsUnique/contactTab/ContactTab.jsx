import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//components
import BrandLogo from '../../componentsShared/brandLogo/BrandLogo';
//
import ContactTabLink from './ContactTabLink';
//
const ContactTab = props => {
  //
  const { businessMail, businessMobile, linkTo, icons } = props;
  const [emailIcon, phoneIcon] = icons;

  //
  const [pageNavigation, setPageNavigation] = useState(true);
  function adjustToPage() {
    setPageNavigation(!pageNavigation);
  }
  //
  function onClick(e, data) {
    window.location = data;
    e.preventDefault();
  }
  //
  // useEffect(() => {
  //   console.log(
  //     `%c<ContactTab> / useEffect / window.location.href `,
  //     'color:#ff00cc',
  //     window.location.href
  //   );
  // }, []);
  //
  return (
    <address className="contact-tab__wrapper">
      <div className="contact-tab__line"></div>
      <div className="contact-tab__item left">
        <Link
          className="icon email"
          to="#"
          onClick={e => onClick(e, businessMail)}
        >
          {emailIcon}
        </Link>
      </div>
      <div className="contact-tab__logo" onClick={adjustToPage}>
        {/* {pageNavigation ? (
          <Link to={about}>
            <BrandLogo />
          </Link>
        ) : (
          <ContactTabLink linkTo={main} />
        )} */}

        <ContactTabLink linkTo={linkTo} />
      </div>
      <div className="contact-tab__item right">
        <Link
          className="icon mobile"
          to="#"
          onClick={e => onClick(e, businessMobile)}
        >
          {phoneIcon}
        </Link>
      </div>
    </address>
  );
};

export default ContactTab;

/* <address className="contact-tab__wrapper">
  <div className="contact-tab__direct">
    <Link className="icon email" to="#" onClick={e => onClick(e, businessMail)}>
      {emailIcon}
    </Link>

    <Link
      className="icon mobile"
      to="#"
      onClick={e => onClick(e, businessMobile)}
    >
      {phoneIcon}
    </Link>
  </div>
  <div className="contact-tab__logo" onClick={adjustToPage}>
    {pageNavigation ? (
      <Link to={home}>
        <Logo />
      </Link>
    ) : (
      <ContactTabLink linkTo={main} />
    )}
  </div>
</address>; */
