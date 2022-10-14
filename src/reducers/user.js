import { DO_LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DO_LOGIN: {
    const { email } = action;
    return {
      ...state,
      email,
    };
  }
  default:
    return state;
  }
};

export default user;
