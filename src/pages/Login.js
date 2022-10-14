import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render() {
    return (
      <LoginForm { ...this.props } />
    );
  }
}

export default Login;
