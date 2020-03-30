import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

export default function src() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
