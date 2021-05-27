import React from 'react';
import { Switch, Route } from 'react-router-dom';
//
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
