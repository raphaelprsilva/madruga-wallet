import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login, Wallet } from './pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/carteira" render={ (props) => <Wallet { ...props } /> } />
      </Switch>
    );
  }
}

export default App;
