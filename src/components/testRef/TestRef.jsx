import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
//
import TestHeader from './testHeader';
import MenuWithUnderline from './menuWithUnderline';
//
import { IoIosArrowDropleft } from 'react-icons/io';
import SvgIcon from '../atoms/svgIcon';
import CollapsibleSection from './collapsibleSection';

//part for <CollapsibleSection>
const pageAboutTextBottom = {
  header1: ['Krótka historia naszego', 'Przewrótu Kopernikańskiego'],
  header2: ['Treściwy formularz kontaktowy', 'dla tych, co lubią pisać'],
  header3: ['Dane kontaktowe, czyli...', 'że istniejemy i gdzie działamy.'],
};
const ourStory = {
  story:
    'W branży budowlanej działamy od 2000 roku. Zdobywaliśmy doświadczenie na licznych inwestycjach w kraju i za granicą. Pewnego, szalenie pracowitego dnia, kiedy nie wszystko szło po maszej myśl a ja właśnie nuciłem sobie "Alvays look on the bright side of life" nastąpił przełom. W zasadzie to oślepiło mnie Słońce. Ale było w tym rónież jakieś olśnienie! Świat jakby na momen się zatrzymał... A do mnie dotarła pewna myśl.. Zapragnąłem mieć Słońce w swojej ekipie, współpracować z Nim (a może Nią ?!)... Dlatego powstało duploELEMENTS! ',
};
const localization = [
  'Lokalizacja',
  'ul. Zacisze XXX',
  '58-200 Dzierżoniów',
  "50° 43' 55.8516'' N",
  "16° 39' 38.6928'' E",
];

const TestRef = () => {
  //state for openinig / closing menu
  const [menuButtonState, setMenuButtonState] = useState(false);
  //part for <CollapsibleSection>
  const collapsibleContainer = useRef(null);

  return (
    <div className="container-inner">
      <div className="test-section ">
        <div className="header-wrapper ">
          <TestHeader
            menuButtonState={menuButtonState}
            setMenuButtonState={setMenuButtonState}
          />
          <MenuWithUnderline menuButtonState={menuButtonState} />
        </div>
      </div>

      {/*===============================================================*/}
      <div className="separator-line"></div>
      {/*===============================================================*/}
      <div ref={collapsibleContainer} className="test-section ">
        <CollapsibleSection
          icon={<IoIosArrowDropleft />}
          textData={pageAboutTextBottom.header1}
        >
          <p>{ourStory.story}</p>
        </CollapsibleSection>

        <CollapsibleSection
          icon={<IoIosArrowDropleft />}
          textData={pageAboutTextBottom.header2}
        >
          <div>
            <ul className="localization-ul">
              {localization.map((line, index) => (
                <li className="localization-ul" key={index}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleSection>
        <CollapsibleSection
          icon={<IoIosArrowDropleft />}
          textData={pageAboutTextBottom.header3}
        >
          <p></p>
        </CollapsibleSection>
      </div>
      {/*===============================================================*/}
      <div className="separator-line"></div>
      <footer className="about__footer flex-to-right">
        <div className="about__footer-line" />
        <Link to="/glass" className="about__link">
          <SvgIcon icon={<IoIosArrowDropleft />} />
          <p>go to testCarousel page...</p>
        </Link>
      </footer>
    </div>
  );
};

export default TestRef;
