import React from 'react';
import { Switch, Route } from 'react-router-dom';
//styles
import './styles/App.scss';
//components = pages
import Home from './components/pages/home';
import Contacts from './components/pages/contacts';
import NotFound from './components/pages/notFound';

const routes = [
  { id: 1, path: '/', name: 'home', Destination: Home },
  { id: 2, path: '/contacts', name: 'contacts', Destination: Contacts },
  { id: 3, path: '*', name: 'noFound', Destination: NotFound },
];

const App = () => {
  return (
    <>
      <Switch>
        {routes.map(({ id, path, name, Destination }) => (
          <Route exact key={id} path={path} name={name}>
            <Destination />
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default App;
