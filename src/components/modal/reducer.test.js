import reducer from './reducer';
import * as actionTypes from './actionTypes';

const component = () => {};
const props = { edit: true };

describe('modal show', () => {
  it('adds the component and props to the state', () => {
    const action = { type: actionTypes.SHOW_MODAL, component, props };
    expect(reducer(undefined, action)).toEqual({ component, props });
  });

  it('tolerates the absence of props', () => {
    const action = { type: actionTypes.SHOW_MODAL, component };
    expect(reducer(undefined, action)).toEqual({ component });
  });

  it('leaves the state unchanged in the absence of the component', () => {
    expect(reducer(undefined, { type: actionTypes.SHOW_MODAL, props })).toEqual(
      {}
    );
  });

  it('substitutes the component and props if some were already in place', () => {
    const action = { type: actionTypes.SHOW_MODAL, component, props };
    expect(reducer({ component: 1, props: 2 }, action)).toEqual({
      component,
      props,
    });
  });
});

describe('modal hide', () => {
  it('clears the component and props from the state', () => {
    expect(
      reducer({ component, props }, { type: actionTypes.HIDE_MODAL })
    ).toEqual({});
  });

  it('ignores any extra params passed in the action', () => {
    const action = { type: actionTypes.HIDE_MODAL, component: 1, props: 2 };
    expect(reducer({ component, props }, action)).toEqual({});
  });
});
