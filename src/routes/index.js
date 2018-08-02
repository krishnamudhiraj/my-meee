import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../screens/Home';
import Register from '../screens/Register';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
];

const Routes = () => (
  <div>
    {routes.map((route, index) => {
      const path = route.path;
      const component = route.component;

      return <Route key={index} path={path} component={component} />;
      // return <Route key={index} exact path={path} component={component} />;
    })}
  </div>
);

export default Routes;
