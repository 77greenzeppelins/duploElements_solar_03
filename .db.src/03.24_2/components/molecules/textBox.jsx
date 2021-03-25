import React from 'react';

const TextBox = ({ data }) => {
  return (
    // <div className="text-box">
    <ul className="text-box">
      {data.map(({ id, text }) => (
        <li key={id} className="text-box__line">
          {text}
        </li>
      ))}
    </ul>
    // </div>
  );
};

export default TextBox;
