export const DO_LOGIN = 'DO_LOGIN';

export const login = (email) => ({
  type: DO_LOGIN,
  email,
});
