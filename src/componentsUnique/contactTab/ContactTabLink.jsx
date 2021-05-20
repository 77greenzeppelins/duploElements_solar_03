import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleft } from 'react-icons/io';
//
import BrandLogo from '../../componentsShared/brandLogo/BrandLogo';
import SvgIcon from '../../componentsShared/svgIcon/svgIcon';

const ContactTabLink = props => {
  const { linkTo } = props;
  const [main, about] = linkTo;
  //
  const [currentURL, setCurrentURL] = useState(window.location.pathname);
  function adjustToPage() {
    setCurrentURL(window.location.pathname);
  }
  //
  useEffect(() => {
    console.log(
      `%c<ContactTabLink> / useEffect / currentURL `,
      'color:#ff00cc',
      currentURL
    );
    setCurrentURL(window.location.pathname);
  }, [currentURL]);
  //
  return (
    <div onClick={adjustToPage}>
      {currentURL === '/' ? (
        <Link to={about}>
          <BrandLogo />
        </Link>
      ) : (
        <Link to={main} className="contact-tab-link">
          <SvgIcon icon={<IoIosArrowDropleft />} />
        </Link>
      )}
    </div>
  );
};

export default ContactTabLink;
