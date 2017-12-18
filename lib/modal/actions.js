'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = exports.confirm = exports.hideModal = exports.showModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ConfirmationDialog = require('./ConfirmationDialog');

var _ConfirmationDialog2 = _interopRequireDefault(_ConfirmationDialog);

var _AlertDialog = require('./AlertDialog');

var _AlertDialog2 = _interopRequireDefault(_AlertDialog);

var _actionTypes = require('./actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var showModal = exports.showModal = function showModal(component, props) {
  return function (dispatch) {
    dispatch({ type: _actionTypes.CREATE_MODAL, component: component, props: props });
    setTimeout(function () {
      dispatch({ type: _actionTypes.SHOW_MODAL });
    }, 500);
  };
};

var hideModal = exports.hideModal = function hideModal() {
  return function (dispatch) {
    dispatch({ type: _actionTypes.HIDE_MODAL });
    setTimeout(function () {
      dispatch({ type: _actionTypes.DESTROY_MODAL });
    }, 500);
  };
};

var confirm = function confirm() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$component = _ref.component,
      component = _ref$component === undefined ? _ConfirmationDialog2.default : _ref$component,
      props = _objectWithoutProperties(_ref, ['component']);

  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      dispatch(showModal(component, _extends({}, props, {
        confirm: function confirm() {
          dispatch(hideModal());
          resolve.apply(undefined, arguments);
        },
        cancel: function cancel() {
          dispatch(hideModal());
          reject();
        }
      })));
    });
  };
};

exports.confirm = confirm;
var alert = function alert(message) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref2$component = _ref2.component,
      component = _ref2$component === undefined ? _AlertDialog2.default : _ref2$component,
      props = _objectWithoutProperties(_ref2, ['component']);

  return function (dispatch) {
    return new Promise(function (resolve) {
      dispatch(showModal(component, _extends({
        message: message
      }, props, {
        close: function close() {
          dispatch(hideModal());
          resolve();
        }
      })));
    });
  };
};
exports.alert = alert;