import * as actionTypes from './actionTypes';

export default (state = {}, { type, component, props } = {}) => {
  switch (type) {
    case actionTypes.SHOW_MODAL:
      return component ? { component, props } : state;
    case actionTypes.HIDE_MODAL:
      return {};
    default:
      return state;
  }
};
