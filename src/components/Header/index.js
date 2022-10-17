import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      <header>
        <h1>MadrugaWallet</h1>
        <div>
          <div>
            <span>Email: </span>
            <span data-testid="email-field">{email}</span>
          </div>
          <div>
            <span>Total: </span>
            <span data-testid="total-field">{totalExpenses}</span>
          </div>
          <div>
            <span>Moeda: </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </header>
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
