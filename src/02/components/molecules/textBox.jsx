import React from 'react';

const TextBox = ({ data }) => {
  return (
    <div className="text-box">
      <ul>
        {data.map(({ id, text }) => (
          <li key={id} className="text-box__text-line">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextBox;
