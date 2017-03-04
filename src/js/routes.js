import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './containers/Root';
import Index from './containers/Index';
import Report from './containers/Report';

const routes = (
  <Route path="/" component={Root}>
    <IndexRoute component={Index} />
    <Route path="report" component={Report} />
  </Route>
);

export default routes;
