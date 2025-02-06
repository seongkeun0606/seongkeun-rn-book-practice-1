import { AccountInformation } from './types';

export const updateAccountInfo = (state: AccountInformation, action: Partial<AccountInformation>) => {
  if (action.email !== undefined) {
    return { ...state, email: action.email };
  }
  if (action.password !== undefined) {
    return { ...state, password: action.password };
  }
  if (action.password_confirm !== undefined) {
    return { ...state, password_confirm: action.password_confirm };
  }

  return state;
};
