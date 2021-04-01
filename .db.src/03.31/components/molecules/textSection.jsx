import React from 'react';

const TextSection = () => {
  return (
    <section className="text-section">
      <h1 className="text-section__header"> Wyobraź sobie proszę</h1>
      <p className="text-section__spans">
        <span>nowoczesne</span>
        <span>panele</span>
        <span>słoneczne</span>
      </p>
      <p className="text-section__line">na dachu Twojego domu</p>
    </section>
  );
};

export default TextSection;

/**
 * <section className="text-section">
      <h1 className="text-section__header"> Wyobraź sobie proszę</h1>
      <p className="text-section__line line1">nowoczesne</p>
      <p className="text-section__line line2">panele</p>
      <p className="text-section__line line3">słoneczne</p>
      <p className="text-section__line line4">na dachu Twojego domu</p>
    </section>
 */
