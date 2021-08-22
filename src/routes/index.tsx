import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import All from '../pages/all';
import Active from '../pages/active';
import Completed from '../pages/completed';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={All} />
    <Route path="/active" exact component={Active} />
    <Route path="/completed" exact component={Completed} />
  </Switch>
);

export default Routes;
