import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import convertToNumberAndRound from '../../utils/stringToNumber';
import { deleteExpense, enterEditMode } from '../../actions';

import * as S from './styled';

class WalletTable extends Component {
  render() {
    const {
      expenses,
      deleteExpense: deleteExpenseAction,
      enterEditMode: enterEditModeAction,
    } = this.props;

    return (
      <S.TableWrapper>
        <S.Table>
          <S.TableHead>
            <S.TableRow>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </S.TableRow>
          </S.TableHead>
          <S.TableData>
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
                <S.TableRow key={ id }>
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
                    <S.TableEditButton
                      type="button"
                      data-testid="edit-btn"
                      onClick={ () => enterEditModeAction(id) }
                    >
                      Editar
                    </S.TableEditButton>
                    <S.TableDeleteButton
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => deleteExpenseAction(id) }
                    >
                      Excluir
                    </S.TableDeleteButton>
                  </td>
                </S.TableRow>
              );
            })}
          </S.TableData>
        </S.Table>
      </S.TableWrapper>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  enterEditMode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpense(id)),
  enterEditMode: (id) => dispatch(enterEditMode(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
