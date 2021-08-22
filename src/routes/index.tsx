import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={() => <h1>Hello World</h1>} />
  </Switch>
);

export default Routes;
