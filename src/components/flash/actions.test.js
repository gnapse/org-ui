import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { show } from './actions';
import * as actionTypes from './actionTypes';

const mockStore = configureMockStore([thunk]);

describe('show', () => {
  it('dispatches a single action', () => {
    const store = mockStore({});
    store.dispatch(show('Hello World'));
    expect(store.getActions().length).toEqual(1);
  });

  it('dispatches FLASH/SHOW right away', () => {
    const store = mockStore({});
    store.dispatch(show('Hello World'));
    expect(store.getActions()[0].type).toEqual(actionTypes.SHOW_FLASH);
  });

  it('includes the message and given props in the action payload', () => {
    const store = mockStore({});
    store.dispatch(show('Hello World', { edit: 1 }));
    expect(store.getActions()[0]).toMatchObject({
      type: actionTypes.SHOW_FLASH,
      message: 'Hello World',
      edit: 1,
    });
  });

  it('includes extra props in the action payload', () => {
    const store = mockStore({});
    store.dispatch(show('Hello World'));
    expect(store.getActions()[0]).toMatchObject({
      type: actionTypes.SHOW_FLASH,
      autoHideDuration: 5000,
    });
  });

  it('allows to override the default autoHideDuration', () => {
    const store = mockStore({});
    store.dispatch(show('Hello World', { autoHideDuration: 1000 }));
    expect(store.getActions()[0].autoHideDuration).toEqual(1000);
  });

  it('does not allow to override the message with props', () => {
    const store = mockStore({});
    store.dispatch(show('Hello World', { message: 'Goodbye' }));
    expect(store.getActions()[0].message).toEqual('Hello World');
  });
});
