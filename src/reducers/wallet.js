import {
  FAILED_REQUEST_CURRENCIES,
  GET_CURRENCIES,
  REQUEST_CURRENCIES,
  ADD_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      isFetching: false,
      currencies: action.currencies,
    };
  case FAILED_REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  default:
    return state;
  }
};

export default wallet;
