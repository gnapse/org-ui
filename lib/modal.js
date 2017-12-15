'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.key = exports.reducer = exports.actions = exports.actionTypes = undefined;

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Modal = require('./modal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _actions = require('./modal/actions');

var actions = _interopRequireWildcard(_actions);

var _actionTypes = require('./modal/actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

var _reducer = require('./modal/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'modal';

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$NAME = _ref[NAME],
      component = _ref$NAME.component,
      props = _ref$NAME.props,
      open = _ref$NAME.open;
  return {
    component: component,
    props: props,
    open: open
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hide: (0, _redux.bindActionCreators)(actions.hideModal, dispatch)
  };
};

var Component = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Modal2.default);

exports.actionTypes = actionTypes;
exports.actions = actions;
exports.reducer = _reducer2.default;
exports.key = NAME;
exports.Component = Component;
exports.default = {
  actionTypes: actionTypes,
  actions: actions,
  reducer: _reducer2.default,
  key: NAME,
  Component: Component
};