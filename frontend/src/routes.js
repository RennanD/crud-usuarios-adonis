import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import NewUser from './pages/NewUser';

export default function src() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details" exact component={Details} />
      <Route path="/new-user" exact component={NewUser} />
    </Switch>
  );
}
