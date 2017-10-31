'use strict';

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _actions = require('../actions');

var _actionTypes = require('../actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockStore = (0, _reduxMockStore2.default)([_reduxThunk2.default]);

describe('show', function () {
  it('dispatches a single action', function () {
    var store = mockStore({});
    store.dispatch((0, _actions.show)('Hello World'));
    expect(store.getActions().length).toEqual(1);
  });

  it('dispatches FLASH/SHOW right away', function () {
    var store = mockStore({});
    store.dispatch((0, _actions.show)('Hello World'));
    expect(store.getActions()[0].type).toEqual(actionTypes.SHOW_FLASH);
  });

  it('includes the message and given props in the action payload', function () {
    var store = mockStore({});
    store.dispatch((0, _actions.show)('Hello World', { edit: 1 }));
    expect(store.getActions()[0]).toMatchObject({
      type: actionTypes.SHOW_FLASH,
      message: 'Hello World',
      edit: 1
    });
  });

  it('includes extra props in the action payload', function () {
    var store = mockStore({});
    store.dispatch((0, _actions.show)('Hello World'));
    expect(store.getActions()[0]).toMatchObject({
      type: actionTypes.SHOW_FLASH,
      autoHideDuration: 5000
    });
  });

  it('allows to override the default autoHideDuration', function () {
    var store = mockStore({});
    store.dispatch((0, _actions.show)('Hello World', { autoHideDuration: 1000 }));
    expect(store.getActions()[0].autoHideDuration).toEqual(1000);
  });

  it('does not allow to override the message with props', function () {
    var store = mockStore({});
    store.dispatch((0, _actions.show)('Hello World', { message: 'Goodbye' }));
    expect(store.getActions()[0].message).toEqual('Hello World');
  });
});