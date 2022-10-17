import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import convertToNumberAndRound from '../../utils/stringToNumber';

class WalletTable extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const {
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates,
            } = expense;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{convertToNumberAndRound(value)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{convertToNumberAndRound(exchangeRates[currency].ask)}</td>
                <td>
                  {convertToNumberAndRound(exchangeRates[currency].ask * value)}
                </td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button" data-testid="delete-btn">
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletTable);
