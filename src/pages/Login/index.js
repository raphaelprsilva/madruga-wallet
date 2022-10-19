import React, { Component } from 'react';

import LoginForm from '../../components/LoginForm';
import MadrugaWalletLogo from '../../assets/images/madruga-wallet-black-logo.svg';

import * as S from './styled';

class Login extends Component {
  render() {
    return (
      <S.FormPageWrapper>
        <S.ImageWrapper
          src={ MadrugaWalletLogo }
          alt="Imagem da logo da Madruga Wallet"
        />
        <LoginForm { ...this.props } />
      </S.FormPageWrapper>
    );
  }
}

export default Login;
