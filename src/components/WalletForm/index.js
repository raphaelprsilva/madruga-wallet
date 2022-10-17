import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCurrencies, addExpenses, editExpense } from '../../actions';
import fetchCurrenciesAPI from '../../data/API';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Lazer',
};

class WalletForm extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { fetchCurrencies: fetchCurrenciesAction } = this.props;
    fetchCurrenciesAction();
  }

  componentDidUpdate(prevProps) {
    const { isEditing } = this.props;
    if (prevProps.isEditing !== isEditing && isEditing) {
      this.updateFormState();
    }
  }

  resetFormState = () => {
    const { expenses } = this.props;
    const expensesLength = expenses.length;
    this.setState({
      id: expensesLength > 0 ? expenses[expensesLength - 1].id + 1 : 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    });
  };

  updateFormState = () => {
    const { expenseToUpdate } = this.props;
    this.setState({
      value: expenseToUpdate.value,
      description: expenseToUpdate.description,
      currency: expenseToUpdate.currency,
      method: expenseToUpdate.method,
      tag: expenseToUpdate.tag,
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      isEditing,
      addExpenses: addExpenseAction,
      editExpense: editExpenseAction,
      expenseToUpdate,
    } = this.props;
    const { id, value, description, currency, method, tag } = this.state;

    if (isEditing) {
      const editedExpense = {
        value,
        description,
        currency,
        method,
        tag,
      };
      editExpenseAction(expenseToUpdate.id, editedExpense);
      this.resetFormState();
    } else {
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
      this.resetFormState();
    }
  };

  render() {
    const { value, description } = this.state;
    const { currencies, isFetching, isEditing } = this.props;

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
        <button type="submit">
          {!isEditing ? 'Adicionar despesa' : 'Editar despesa'}
        </button>
      </form>
    );
  }
}

WalletForm.defaultProps = {
  isEditing: false,
  expenseToUpdate: {},
};

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool,
  expenseToUpdate: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  isFetching: state.wallet.isFetching,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  isEditing: state.wallet.isEditing,
  expenseToUpdate: state.wallet.expenseToUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  addExpenses: (expense) => dispatch(addExpenses(expense)),
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
