import React, { useState } from 'react';
//components
import MainScreenA from '../organisms/mainScreenA';
import MainScreenB from '../organisms/mainScreenB';
//

const Main = () => {
  const [screenBDisplayer, setScreenBDisplayer] = useState(false);
  console.log(`%c<Main> / screenBDisplayer`, 'color: yellow', screenBDisplayer);

  return (
    <>
      {console.log(`%c <Main / return section`, 'color: yellow')}
      <div className="container-outer">
        <MainScreenA setScreenBDisplayer={setScreenBDisplayer} />
      </div>
      <div className="container-inner">
        {screenBDisplayer && <MainScreenB />}
      </div>
    </>
  );
};
export default Main;

// console.log(`%c.............useEffect from homePage`, 'color: yellow');
