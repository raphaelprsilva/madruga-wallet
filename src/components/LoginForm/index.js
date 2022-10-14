import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login as loginAction } from '../../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
      isSubmitButtonDisabled: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
      () => this.validateFields(),
    );
  };

  validateEmail = (email) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailIsValid = emailRegex.test(email);
    if (emailIsValid) {
      this.setState({
        email,
        emailError: false,
      });
      return true;
    }
    this.setState({
      emailError: true,
    });
    return false;
  };

  validatePassoword = (password) => {
    const MIN_PASSWORD_LENGTH = 6;
    const passwordWithoutSpaces = password.trim().replace(/\s/g, '');
    if (passwordWithoutSpaces.length >= MIN_PASSWORD_LENGTH) {
      this.setState({
        password: passwordWithoutSpaces,
        passwordError: false,
      });
      return true;
    }
    this.setState({
      passwordError: true,
    });
    return false;
  };

  validateFields = () => {
    const { email, password } = this.state;
    const isValidEmail = this.validateEmail(email);
    const isValidPassword = this.validatePassoword(password);
    if (isValidEmail && isValidPassword) {
      this.setState({
        isSubmitButtonDisabled: false,
      });
    } else {
      this.setState({
        isSubmitButtonDisabled: true,
      });
    }
  };

  doLogin = (event) => {
    event.preventDefault();
    const { history, login } = this.props;
    const { email } = this.state;
    login(email);
    history.push('/carteira');
  }

  render() {
    const {
      email,
      password,
      emailError,
      passwordError,
      isSubmitButtonDisabled,
    } = this.state;

    return (
      <form onSubmit={ this.doLogin }>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            id="email"
            onChange={ this.handleChange }
          />
        </label>
        {emailError && <span>Email inválido</span>}
        <label htmlFor="password">
          Password
          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            id="password"
            onChange={ this.handleChange }
          />
        </label>
        {passwordError && <span>Senha inválida</span>}
        <button type="submit" disabled={ isSubmitButtonDisabled }>
          Entrar
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
