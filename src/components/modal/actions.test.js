import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AlertDialog from './AlertDialog';
import ConfirmationDialog from './ConfirmationDialog';
import { confirm, alert } from './actions';
import * as actionTypes from './actionTypes';

const mockStore = configureMockStore([thunk]);

function commonTests(action, defaultComponent) {
  it('dispatches a single action', () => {
    const store = mockStore({});
    store.dispatch(action());
    expect(store.getActions().length).toEqual(1);
  });

  it('dispatches MODAL/SHOW right away', () => {
    const store = mockStore({});
    store.dispatch(action({ edit: 1 }));
    expect(store.getActions()[0]).toMatchObject({
      type: actionTypes.SHOW_MODAL,
      props: { edit: 1 },
    });
  });

  it('uses the given component', () => {
    const store = mockStore({});
    const component = () => {};
    store.dispatch(action({ component }));
    expect(store.getActions()[0]).toMatchObject({
      type: actionTypes.SHOW_MODAL,
      component,
    });
  });

  it('uses the default component, if none is given', () => {
    const store = mockStore({});
    store.dispatch(action());
    expect(store.getActions()[0]).toMatchObject({
      type: actionTypes.SHOW_MODAL,
      component: defaultComponent,
    });
  });

  it('returns a promise', () => {
    const store = mockStore({});
    const result = store.dispatch(action());
    expect(typeof result.then).toEqual('function');
    expect(typeof result.catch).toEqual('function');
  });
}

describe('confirm', () => {
  commonTests(confirm, ConfirmationDialog);

  it('includes a confirm and cancel callbacks in the props', () => {
    const store = mockStore({});
    store.dispatch(confirm());
    const [{ props }] = store.getActions();
    expect(typeof props.confirm).toEqual('function');
    expect(typeof props.cancel).toEqual('function');
  });

  describe('when the confirm callback is called', () => {
    it('resolves the promise with the value given to the callback', () => {
      const store = mockStore({});
      const promise = store.dispatch(confirm());
      store.getActions()[0].props.confirm('result');
      return expect(promise).resolves.toBe('result');
    });

    it('dispatches the MODAL/HIDE action', () => {
      expect.assertions(2);
      const store = mockStore({});
      store.dispatch(confirm()).then(() => {
        expect(store.getActions().length).toEqual(2);
        expect(store.getActions()[1]).toEqual({ type: actionTypes.HIDE_MODAL });
      });
      store.getActions()[0].props.confirm();
    });
  });

  describe('when the cancel callback is called', () => {
    it('rejects the promise without a reason', () => {
      const store = mockStore({});
      const promise = store.dispatch(confirm());
      store.getActions()[0].props.cancel('result');
      return expect(promise).rejects.toBeUndefined();
    });

    it('dispatches the MODAL/HIDE action', () => {
      expect.assertions(2);
      const store = mockStore({});
      store.dispatch(confirm()).catch(() => {
        expect(store.getActions().length).toEqual(2);
        expect(store.getActions()[1]).toEqual({ type: actionTypes.HIDE_MODAL });
      });
      store.getActions()[0].props.cancel('result');
    });
  });
});

describe('alert', () => {
  commonTests(alert.bind(this, 'Error message'), AlertDialog);

  it('includes the given message in the props', () => {
    const store = mockStore({});
    store.dispatch(alert('Something went wrong'));
    expect(store.getActions()[0]).toMatchObject({
      type: actionTypes.SHOW_MODAL,
      props: { message: 'Something went wrong' },
    });
  });

  it('includes a close callback in the props', () => {
    const store = mockStore({});
    store.dispatch(alert());
    const [{ props }] = store.getActions();
    expect(typeof props.close).toEqual('function');
  });

  describe('when the close callback is called', () => {
    it('resolves the promise', () => {
      const store = mockStore({});
      const promise = store.dispatch(alert());
      store.getActions()[0].props.close();
      return expect(promise).resolves.toBe(undefined);
    });

    it('dispatches the MODAL/HIDE action', () => {
      expect.assertions(2);
      const store = mockStore({});
      store.dispatch(alert()).then(() => {
        expect(store.getActions().length).toEqual(2);
        expect(store.getActions()[1]).toEqual({ type: actionTypes.HIDE_MODAL });
      });
      store.getActions()[0].props.close();
    });
  });
});
