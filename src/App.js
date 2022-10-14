import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from './pages';

const App = () => (
  <Switch>
    <Route exact path="/" render={ (props) => <Login { ...props } /> } />
  </Switch>
);

export default App;
