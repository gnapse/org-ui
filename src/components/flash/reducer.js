import * as actionTypes from './actionTypes';

export default (state = { open: false }, { type, ...props } = {}) => {
  switch (type) {
    case actionTypes.SHOW_FLASH:
      return { ...props, open: true };
    case actionTypes.HIDE_FLASH:
      return { ...state, open: false };
    default:
      return state;
  }
};
