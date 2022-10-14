import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Wallet } from './pages';

const App = () => (
  <Switch>
    <Route exact path="/" render={ (props) => <Login { ...props } /> } />
    <Route path="/carteira" render={ (props) => <Wallet { ...props } /> } />
  </Switch>
);

export default App;
