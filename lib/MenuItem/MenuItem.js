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

var _Menu = require('material-ui/Menu');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: 'renderIcon',
    value: function renderIcon() {
      var icon = this.props.icon;

      if (icon == null) {
        return null;
      }
      if (typeof icon === 'string') {
        return _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          icon
        );
      }
      return icon;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          icon = _props.icon,
          label = _props.label,
          separator = _props.separator,
          other = _objectWithoutProperties(_props, ['href', 'icon', 'label', 'separator']);

      var component = href ? _reactRouterDom.Link : null;
      var classes = separator ? 'MenuItem__separator' : 'MenuItem';
      return _react2.default.createElement(
        _Menu.MenuItem,
        _extends({
          className: classes,
          component: component,
          to: href || null
        }, other),
        this.renderIcon(),
        label
      );
    }
  }]);

  return MenuItem;
}(_react.Component);

MenuItem.propTypes = {
  href: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.node,
  separator: _propTypes2.default.bool
};
exports.default = MenuItem;