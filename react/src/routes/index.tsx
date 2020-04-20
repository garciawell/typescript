import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Repository } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
