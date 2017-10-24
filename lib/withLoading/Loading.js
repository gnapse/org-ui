'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Progress = require('material-ui/Progress');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Loading(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? 'loading' : _ref$className,
      _ref$component = _ref.component,
      component = _ref$component === undefined ? _Progress.CircularProgress : _ref$component,
      props = _objectWithoutProperties(_ref, ['className', 'component']);

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(component, props)
  );
}