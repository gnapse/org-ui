'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('./actionTypes');

var initialState = exports.initialState = {
  component: null,
  props: {},
  open: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      component = _ref.component,
      props = _ref.props;

  switch (type) {
    case _actionTypes.CREATE_MODAL:
      return component != null ? { component: component, props: props, open: false } : state;
    case _actionTypes.SHOW_MODAL:
      return state.component != null ? _extends({}, state, { open: true }) : state;
    case _actionTypes.HIDE_MODAL:
      return _extends({}, state, { open: false });
    case _actionTypes.DESTROY_MODAL:
      return initialState;
    default:
      return state;
  }
};