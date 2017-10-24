'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _styles = require('material-ui/styles');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  fab: {
    position: 'fixed',
    bottom: 36,
    right: 36,
    color: 'white',
    zIndex: 1000
  }
};

var Fab = function (_Component) {
  _inherits(Fab, _Component);

  function Fab() {
    _classCallCheck(this, Fab);

    return _possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).apply(this, arguments));
  }

  _createClass(Fab, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          onClick = _props.onClick,
          icon = _props.icon;

      var isLink = typeof onClick !== 'function';
      var buttonProps = isLink ? { component: _reactRouterDom.Link, to: onClick } : { onClick: onClick };
      return _react2.default.createElement(
        _Button2.default,
        _extends({ fab: true, color: 'accent', className: classes.fab }, buttonProps),
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          icon
        )
      );
    }
  }]);

  return Fab;
}(_react.Component);

Fab.propTypes = {
  onClick: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,
  icon: _propTypes2.default.string.isRequired
};
exports.default = (0, _styles.withStyles)(styles)(Fab);