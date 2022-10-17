import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, addExpenses } from '../../actions';
import fetchCurrenciesAPI from '../../data/API';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class WalletForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    };
  }

  componentDidMount() {
    const { fetchCurrencies: fetchCurrenciesAction } = this.props;
    fetchCurrenciesAction();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { addExpenses: addExpenseAction } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const newExpense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: await fetchCurrenciesAPI(),
    };

    addExpenseAction(newExpense);
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    });
  };

  render() {
    const { value, description } = this.state;
    const { currencies, isFetching } = this.props;

    return isFetching ? (
      <p>Loading...</p>
    ) : (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {currencies.map((curr) => (
              <option key={ curr } value={ curr }>
                {curr}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            {paymentMethods.map((method) => (
              <option key={ method } value={ method }>
                {method}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            {tags.map((tag) => (
              <option key={ tag } value={ tag }>
                {tag}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.wallet.isFetching,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  addExpenses: (expense) => dispatch(addExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
