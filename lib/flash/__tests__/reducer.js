'use strict';

var _actionTypes = require('../actionTypes');

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(_actionTypes.SHOW_FLASH, function () {
  it('sets open to true', function () {
    expect((0, _reducer2.default)({ open: false }, { type: _actionTypes.SHOW_FLASH })).toEqual({
      open: true
    });
    expect((0, _reducer2.default)({ open: true }, { type: _actionTypes.SHOW_FLASH })).toEqual({
      open: true
    });
  });

  it('injects any extra props in the state', function () {
    expect((0, _reducer2.default)({ open: false }, { type: _actionTypes.SHOW_FLASH, custom: 1 })).toEqual({
      open: true,
      custom: 1
    });
  });

  it('does not allow to set the open value via extra props', function () {
    expect((0, _reducer2.default)({ open: false }, { type: _actionTypes.SHOW_FLASH, custom: 1, open: 'Yes' })).toEqual({ open: true, custom: 1 });
  });

  it('clears any previous props in the state', function () {
    expect((0, _reducer2.default)({ open: false, message: 'Hello' }, { type: _actionTypes.SHOW_FLASH, message: 'Goodbye' })).toEqual({ open: true, message: 'Goodbye' });
  });
});

describe(_actionTypes.HIDE_FLASH, function () {
  it('sets open to false', function () {
    expect((0, _reducer2.default)({ open: false }, { type: _actionTypes.HIDE_FLASH })).toEqual({
      open: false
    });
    expect((0, _reducer2.default)({ open: true }, { type: _actionTypes.HIDE_FLASH })).toEqual({
      open: false
    });
  });

  it('keeps anything else in the state intact', function () {
    expect((0, _reducer2.default)({ open: true, message: 'Hello', custom: 1 }, { type: _actionTypes.HIDE_FLASH })).toEqual({ open: false, message: 'Hello', custom: 1 });
  });
});