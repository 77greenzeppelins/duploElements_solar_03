import React from 'react';
import { Switch, Route } from 'react-router-dom';
//
// import MainRoute from '../../routeMain/MainRoute';
// import AboutRoute from '../../routeAbout/AboutRoute';
// import Home from '../../routeHome/home';
// import Carousel from '../../routeAbout/carousel';

// const routes = [
//   { path: '/', name: 'Main', exact: true, Component: MainRoute },
//   { path: '/home', name: 'Home', exact: false, Component: Home },
//   { path: '/about', name: 'About', exact: false, Component: AboutRoute },
// ];

const RoutesSwitcher = props => {
  const { routes } = props;
  return (
    <div className="routes-switcher__wrapper">
      <Switch>
        {routes.map(({ path, name, exact, Component }) => (
          <Route key={name} exact={exact} path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </div>
  );
};

export default RoutesSwitcher;
