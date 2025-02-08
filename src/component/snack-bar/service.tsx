import { SNACKBAR_REF } from '../..';
import { SnackbarType } from '.';

export const showSnackbar = (type: SnackbarType, message: string) => {
  SNACKBAR_REF.current?.show(type, message);
};

export const hideSnackbar = () => {
  SNACKBAR_REF.current?.hide();
};
