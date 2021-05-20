import React from 'react';

const TextBlock = ({ textData }) => {
  const [header, line1, line2, line3, line4] = textData;
  return (
    <section className="text-section">
      {/* <h1 className="text-section__header">{header}</h1>
      <ul className="text-section__spans">
        <li>{line1}</li>
        <li>{line2}</li>
        <li>{line3}</li>
      </ul>
      <p className="text-section__line">{line4}</p> */}

      <h1 className="text-section__header">{header}</h1>
      <p className="text-section__spans">
        <span>{line1}</span>
        <span>{line2}</span>
        <span>{line3}</span>
      </p>
      <p className="text-section__line">{line4}</p>
    </section>
  );
};

export default TextBlock;
