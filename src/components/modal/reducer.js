import {
  CREATE_MODAL,
  SHOW_MODAL,
  HIDE_MODAL,
  DESTROY_MODAL,
} from './actionTypes';

export const initialState = {
  component: null,
  props: {},
  open: false,
};

export default (state = initialState, { type, component, props } = {}) => {
  switch (type) {
    case CREATE_MODAL:
      return component != null ? { component, props, open: false } : state;
    case SHOW_MODAL:
      return state.component != null ? { ...state, open: true } : state;
    case HIDE_MODAL:
      return { ...state, open: false };
    case DESTROY_MODAL:
      return initialState;
    default:
      return state;
  }
};
