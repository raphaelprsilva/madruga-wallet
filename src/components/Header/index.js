import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as S from './styled';
import MadrugaLogoWhite from '../../assets/images/madruga-wallet-white-logo.svg';

class Header extends Component {
  getTotalExpenses = () => {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const exchangeRate = exchangeRates[currency].ask;
      return acc + parseFloat(value) * parseFloat(exchangeRate);
    }, 0);
    return total.toFixed(2);
  };

  render() {
    const { email } = this.props;
    const totalExpenses = this.getTotalExpenses();

    return (
      <S.HeaderWrapper>
        <img src={ MadrugaLogoWhite } alt="Logomarca da Madruga Wallet" />
        <S.UserDataWrapper>
          <S.UserDataWrapperItem>
            <span>Email</span>
            <span data-testid="email-field" title={ email }>{email}</span>
          </S.UserDataWrapperItem>
          <S.UserDataWrapperItem>
            <span>Total</span>
            <span data-testid="total-field">{totalExpenses}</span>
          </S.UserDataWrapperItem>
          <S.UserDataWrapperItem>
            <span>Moeda</span>
            <span data-testid="header-currency-field">BRL</span>
          </S.UserDataWrapperItem>
        </S.UserDataWrapper>
      </S.HeaderWrapper>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
