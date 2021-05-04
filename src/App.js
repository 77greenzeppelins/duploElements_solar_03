import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Route } from 'react-router-dom';
//styles
import './styles/App.scss';
//components = pages
import About from './components/pages/about';
// import NotFound from './components/pages/notFound';
import Main from './components/pages/main';
//experimenting  stuff
import TestRef from './components/testRef/TestRef';
import TestCarousel from './components/testCarousel/TestCarousel';

const routes = [
  // { id: 1, path: '/main', name: 'main', Destination: Main },
  { id: 2, path: '/about', name: 'about', Destination: About },
  { id: 4, path: '/', name: 'test', Destination: Main },
  // { id: 3, path: '*', name: 'noFound', Destination: NotFound },
  { id: 'testRef', path: '/ref', Destination: TestRef },
  { id: 'testGlass', path: '/glass', Destination: TestCarousel },
];

const App = () => {
  //
  const [deviceFeature, setDeviceFeature] = useState({
    device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
    orientation: !navigator.maxTouchPoints
      ? 'desktop'
      : !window.screen.orientation.angle
      ? 'portrait'
      : 'landscape',
  });
  const { device, orientation } = deviceFeature;
  console.log('navigator.maxTouchPoint:', navigator.maxTouchPoint);
  console.log('deviceFeature:', deviceFeature);
  //
  const [labelTime, setLabelTime] = useState('label1');
  console.log(`%c<App> / labelTime:`, 'color:#66ff00', labelTime);
  const labelChanger = () => {
    setLabelTime('label2');
  };
  //
  let timeUE = new Date().toLocaleTimeString();
  let milisecUE = new Date().getMilliseconds();
  console.log(`%c<App> / time`, 'color:#66ff00', `${timeUE}:${milisecUE}`);
  //
  useEffect(() => {
    //I am not sure if it works...
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } });
    console.log(`%c<App> /  gsap object:`, 'color:#66ff00', gsap);
  }, []);
  //
  const getDeviceFeatures = () => {
    setDeviceFeature({
      device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
      orientation: !navigator.maxTouchPoints
        ? 'desktop'
        : !window.screen.orientation.angle
        ? 'portrait'
        : 'landscape',
    });
  };
  useEffect(() => {
    //for detecting device's feature
    window.addEventListener('resize', getDeviceFeatures);
  }, []);
  //
  const initialHeight = window.innerHeight;
  console.log('<App> / initialHeight', initialHeight);
  // (device === 'mobile') & (orientation === 'landscape')
  return (
    <>
      {initialHeight < 500 ? (
        <div
          style={{
            width: '100vh',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Obróć urządzenie...
        </div>
      ) : (
        routes.map(({ id, path, name, Destination }) => (
          <Route key={id} exact path={path} name={name}>
            <Destination labelTime={labelTime} labelChanger={labelChanger} />
          </Route>
        ))
      )}
      {/* <Switch> */}
      {/* {routes.map(({ id, path, name, Destination }) => (
        <Route key={id} exact path={path} name={name}>
          <Destination labelTime={labelTime} labelChanger={labelChanger} />
        </Route>
      ))} */}
      {/* <Route key="404" path="/*" name="404">
        <NotFound />
      </Route> */}
      {/* </Switch> */}
    </>
  );
};

export default App;
