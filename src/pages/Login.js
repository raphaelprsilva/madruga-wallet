import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';
import MadrugaWalletLogo from '../assets/images/madruga-wallet-black-logo.svg';

class Login extends Component {
  render() {
    return (
      <div>
        <img
          src={ MadrugaWalletLogo }
          alt="Imagem da logo da Madruga Wallet"
          style={ { width: '200px', marginBottom: '20px' } }
        />
        <LoginForm { ...this.props } />
      </div>
    );
  }
}

export default Login;
