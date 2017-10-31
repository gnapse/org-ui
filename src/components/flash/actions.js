import * as actionTypes from './actionTypes';

export const show = (message, props = {}) => ({
  type: actionTypes.SHOW_FLASH,
  autoHideDuration: 5000,
  ...props,
  message,
});

export const hide = () => ({
  type: actionTypes.HIDE_FLASH,
});
