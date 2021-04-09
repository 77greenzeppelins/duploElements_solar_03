import React, { useEffect } from 'react';
import { gsap } from 'gsap';
// import { Switch, Route } from 'react-router-dom';
//styles
import './styles/App.scss';
//components = pages
import Main from './components/pages/main';
// import NotFound from './components/pages/notFound';

// const routes = [
//   { id: 1, path: '/', name: 'main', Destination: Home },
//   { id: 3, path: '*', name: 'noFound', Destination: NotFound },
// ];

const App = () => {
  useEffect(() => {
    console.log('<App> / useState...it is gsap', gsap);
    //I am not sure if it works...
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } });
  }, []);
  return (
    <>
      <Main />
      {/* <Switch>
        {routes.map(({ id, path, name, Destination }) => (
          <Route exact key={id} path={path} name={name}>
            <Destination />
          </Route>
        ))}
      </Switch> */}
    </>
  );
};

export default App;
