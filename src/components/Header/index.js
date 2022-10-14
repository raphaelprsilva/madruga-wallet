import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
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
            <span data-testid="total-field">0</span>
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
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
