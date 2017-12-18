import reducer, { initialState } from './reducer';
import {
  CREATE_MODAL,
  SHOW_MODAL,
  HIDE_MODAL,
  DESTROY_MODAL,
} from './actionTypes';

const component = () => {};
const props = { edit: true };

describe('modal create', () => {
  it('adds the component and props to the state', () => {
    const action = { type: CREATE_MODAL, component, props };
    expect(reducer(undefined, action)).toEqual({
      component,
      props,
      open: false,
    });
  });

  it('tolerates the absence of props', () => {
    const action = { type: CREATE_MODAL, component };
    expect(reducer(undefined, action)).toEqual({ component, open: false });
  });

  it('leaves the state unchanged in the absence of the component', () => {
    expect(reducer(undefined, { type: CREATE_MODAL, props })).toEqual(
      initialState
    );
  });

  it('substitutes the component and props if some were already in place', () => {
    const action = { type: CREATE_MODAL, component, props };
    expect(reducer({ component: 1, props: 2 }, action)).toEqual({
      component,
      props,
      open: false,
    });
  });
});

describe('modal show', () => {
  it('sets open = true', () => {
    expect(
      reducer({ component, props, open: false }, { type: SHOW_MODAL })
    ).toEqual({ component, props, open: true });
    expect(
      reducer({ component, props, open: true }, { type: SHOW_MODAL })
    ).toEqual({ component, props, open: true });
  });

  it('leaves open unchanged if there was no component in place', () => {
    expect(
      reducer({ ...initialState, open: false }, { type: SHOW_MODAL })
    ).toEqual({ ...initialState, open: false });
    expect(
      reducer({ ...initialState, open: true }, { type: SHOW_MODAL })
    ).toEqual({ ...initialState, open: true });
  });
});

describe('modal hide', () => {
  it('sets open = false', () => {
    expect(
      reducer({ component, props, open: true }, { type: HIDE_MODAL })
    ).toEqual({ component, props, open: false });
    expect(
      reducer({ component, props, open: false }, { type: HIDE_MODAL })
    ).toEqual({ component, props, open: false });
  });
});

describe('modal destroy', () => {
  it('clears the component and props from the state', () => {
    expect(reducer({ component, props }, { type: DESTROY_MODAL })).toEqual(
      initialState
    );
  });

  it('ignores any extra params passed in the action', () => {
    const action = { type: DESTROY_MODAL, component: 1, props: 2 };
    expect(reducer({ component, props }, action)).toEqual(initialState);
  });
});
