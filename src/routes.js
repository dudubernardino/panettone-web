import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DefaultLayout from './pages/_layouts/default';

import Home from './pages/Home';
import InfoProduct from './pages/InfoProduct';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout>
          <Route path="/" exact component={Home} />
          <Route path="/panettone/:id" exact component={InfoProduct} />
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  )
}
