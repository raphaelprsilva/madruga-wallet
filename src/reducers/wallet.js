import {
  FAILED_REQUEST_CURRENCIES,
  GET_CURRENCIES,
  REQUEST_CURRENCIES,
  ADD_EXPENSES,
  DELETE_EXPENSES,
  ENTER_EDIT_MODE,
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  isEditing: false,
  expenseToUpdate: {},
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, isFetching: false, currencies: action.currencies };
  case FAILED_REQUEST_CURRENCIES:
    return { ...state, isFetching: false, error: action.error };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  case ENTER_EDIT_MODE:
    return {
      ...state,
      isEditing: true,
      expenseToUpdate: state.expenses.find((expense) => expense.id === action.id),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      isEditing: false,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.expense,
          };
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
