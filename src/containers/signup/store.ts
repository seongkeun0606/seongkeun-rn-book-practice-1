import { atom } from 'jotai';

export const accountInputLengthAtom = atom({
  email: 0,
  password: 0,
  password_confirm: 0,
});
