'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.key = exports.reducer = exports.actions = exports.actionTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _actions = require('./flash/actions');

var actions = _interopRequireWildcard(_actions);

var _actionTypes = require('./flash/actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

var _reducer = require('./flash/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'flash';

var mapStateToProps = function mapStateToProps(_ref) {
  var props = _ref[NAME];
  return _extends({}, props);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onRequestClose: (0, _redux.bindActionCreators)(actions.hide, dispatch)
  };
};

var Component = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Snackbar2.default);

exports.actionTypes = actionTypes;
exports.actions = actions;
exports.reducer = _reducer2.default;
exports.key = NAME;
exports.Component = Component;
exports.default = {
  actionTypes: actionTypes,
  actions: { flash: actions.show },
  reducer: _reducer2.default,
  key: NAME,
  Component: Component
};