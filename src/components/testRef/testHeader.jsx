import React from 'react';

const TestHeader = props => {
  const { menuButtonState, setMenuButtonState } = props;
  return (
    <header className="test-header">
      <div className="test-header__logo">.amazingLOGO</div>
      <button
        onClick={() => setMenuButtonState(!menuButtonState)}
        className={`test-header__button ${
          menuButtonState ? 'button-close' : ''
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default TestHeader;
