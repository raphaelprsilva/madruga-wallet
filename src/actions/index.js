import fetchCurrenciesAPI from '../data/API';

export const DO_LOGIN = 'DO_LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST_CURRENCIES = 'FAILED_REQUEST_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const ENTER_EDIT_MODE = 'ENTER_EDIT_MODE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const login = (email) => ({
  type: DO_LOGIN,
  email,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const failedRequestCurrencies = (error) => ({
  type: FAILED_REQUEST_CURRENCIES,
  error,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const currenciesJson = await fetchCurrenciesAPI();
    const currenciesArray = Object.keys(currenciesJson);
    const currenciesWithoutUSDT = currenciesArray.filter(
      (currency) => currency !== 'USDT',
    );
    dispatch(getCurrencies(currenciesWithoutUSDT));
  } catch (error) {
    dispatch(failedRequestCurrencies(error));
  }
};

export const addExpenses = (expense) => ({
  type: ADD_EXPENSES,
  expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSES,
  id,
});

export const enterEditMode = (id) => ({
  type: ENTER_EDIT_MODE,
  id,
});

export const editExpense = (id, expense) => ({
  type: EDIT_EXPENSE,
  id,
  expense,
});
